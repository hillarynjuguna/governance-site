export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  datePublished: string;
  toolUsed: string;
  toolSlug: string;
  externalReferences: { label: string; url: string }[];
  problem: string;
  method: string;
  outcome: string;
  // Detailed sections for full case study page
  architectureContext: string;
  diagnosticFindings: {
    primitive: string;
    score: 'Present' | 'Partially Present' | 'Absent';
    detail: string;
  }[];
  remediationPath: string;
  eeatSignals: {
    nistMapping?: string;
    euAiActMapping?: string;
    isoMapping?: string;
  };
  limitations: {
    heading: string;
    detail: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'multi-agent-deployment-audit',
    title: 'Multi-Agent Deployment Audit',
    subtitle: 'Identifying invisible boundary gaps in a production AI pipeline before a live rollout',
    datePublished: '2026-02-14',
    toolUsed: 'CIR Diagnostic Engine',
    toolSlug: 'cir-diagnostic-engine',
    externalReferences: [
      {
        label: 'NIST AI RMF — Govern 1.2: Accountability Structures',
        url: 'https://airc.nist.gov/Docs/1'
      },
      {
        label: 'EU AI Act — Article 9: Risk Management System',
        url: 'https://artificialintelligenceact.eu/article/9/'
      }
    ],
    problem: 'A workflow connecting three AI models to a customer-facing data-retrieval system lacked explicit boundaries between model outputs and downstream execution actions.',
    method: 'A CIR Diagnostic session was run against the system architecture specification, data flow diagrams, and API contracts. The four constitutional primitives were evaluated using the two-stage interpretation/scoring pipeline.',
    outcome: 'Two primitives scored Absent; deployment was held until boundary contracts and a human review gate were implemented. Post-remediation CIR scan returned all four primitives as Present.',
    architectureContext: 'The client operated a workflow where a summarization model fed structured data to a retrieval model, which then passed recommendations to an execution model with write-access to a production database. The three models communicated through shared JSON payloads over an internal message bus. No explicit schema enforced who could emit what, and the execution model could act on any payload shaped correctly, regardless of origin.',
    diagnosticFindings: [
      {
        primitive: 'Reversibility & Safeguards',
        score: 'Partially Present',
        detail: 'A soft-delete pattern existed at the database layer, but there was no pre-execution confirmation gate or downstream hold state. The model could initiate a write, and the only recovery path was a manual database restore.'
      },
      {
        primitive: 'Component Boundaries',
        score: 'Absent',
        detail: 'No schema contracts existed between the three models. The execution model accepted any structurally valid payload without verifying the payload\'s origin model or authority level. A forged or malformed payload from the retrieval model would execute identically to a verified one.'
      },
      {
        primitive: 'Invariant Rules',
        score: 'Partially Present',
        detail: 'High-level business rules existed in comments and documentation but were not compiled into any validation layer. The execution model\'s behavior in edge cases depended entirely on prompt context, which is not persistent across model restarts.'
      },
      {
        primitive: 'Decision Authority',
        score: 'Absent',
        detail: 'No human review checkpoint existed before the execution model committed data changes. The pipeline ran fully end-to-end autonomously with no escalation path for ambiguous or high-risk write operations.'
      }
    ],
    remediationPath: 'Explicit Sovereign Type contracts were added between each model boundary, requiring each payload to carry a valid origin signature. A human review checkpoint was inserted as a mandatory gate before any write action. The soft-delete was upgraded to a two-phase commit with a hold window. All rules were migrated from documentation into validator functions called at runtime.',
    eeatSignals: {
      nistMapping: 'NIST AI RMF Govern 1.2 (Accountability) and Map 1.5 (Risk Identification) were used as the external framework for scoping the audit. The remediation aligned with RMF Manage 2.2 (Treatment of Identified Risks).',
      euAiActMapping: 'The absence of a human oversight mechanism (Decision Authority: Absent) would constitute a potential violation of EU AI Act Article 14 (Human Oversight) for a system classified as high-risk under Annex III.',
      isoMapping: 'ISO/IEC 42001:2023 Clause 6.1.2 (AI Risk Assessment) informed the scoring rubric applied to each primitive.'
    },
    limitations: [
      {
        heading: 'Static Analysis Only',
        detail: 'The CIR diagnostic assessed the architecture specification and data flow documentation, not live runtime behavior. Dynamic runtime anomalies, such as prompt injection attacks or latent model hallucinations, were not within scope of this audit.'
      },
      {
        heading: 'No Performance or Latency Assessment',
        detail: 'The diagnostic evaluates governance structure, not system performance. The introduction of a human review gate will introduce latency into the pipeline; the acceptable latency threshold for the client\'s use case was determined separately by their engineering team.'
      },
      {
        heading: 'Model Weights Not Audited',
        detail: 'CIR does not assess fine-tuning data quality, weight-level alignment properties, or model behavior under adversarial inputs. These require separate red-teaming and model evaluation protocols.'
      }
    ]
  },
  {
    slug: 'autonomous-agent-rule-enforcement',
    title: 'Autonomous Agent Rule Enforcement',
    subtitle: 'Moving constitutional rules from ephemeral prompt context into durable architectural constraints',
    datePublished: '2026-03-07',
    toolUsed: 'CIR Diagnostic Engine + Sovereign Types',
    toolSlug: 'cir-diagnostic-engine',
    externalReferences: [
      {
        label: 'NIST AI RMF — Manage 2.2: Treatment of Identified Risks',
        url: 'https://airc.nist.gov/Docs/1'
      },
      {
        label: 'ISO/IEC 42001:2023 — Clause 6.1 Risk & Opportunity Management',
        url: 'https://www.iso.org/standard/81230.html'
      }
    ],
    problem: 'An autonomous coding agent operated with no persistent rule enforcement mechanism; its constitutional guidelines existed only as natural language in the system prompt, which is neither persistent nor verifiable.',
    method: 'CIR Diagnostic was run against the agent\'s configuration manifest, the orchestration layer, and the prompt templates. Sovereign Types were then specified to define a structural equivalent of the prompt-level constraints.',
    outcome: 'Rule layer was migrated from prompt context to architectural validators using Sovereign Types primitives. Agent behavior became compiler-auditable; governance posture shifted from assumed to verifiable.',
    architectureContext: 'The client operated a coding agent designed to make pull requests to production repositories. The agent was instructed via a system prompt not to modify certain protected files, not to delete functions marked with a specific comment tag, and to always run tests before committing. These rules were embedded in the system prompt only and were not enforced by the agent\'s execution environment. After a model update changed its context window handling, two of the three rules were consistently forgotten mid-session.',
    diagnosticFindings: [
      {
        primitive: 'Reversibility & Safeguards',
        score: 'Partially Present',
        detail: 'Git provides baseline reversibility for all code changes. However, the agent had direct push access to the main branch on one repository, bypassing pull request review requirements. In this configuration, an irreversible merge could be executed without human review.'
      },
      {
        primitive: 'Component Boundaries',
        score: 'Present',
        detail: 'The agent operated within clearly defined repository scopes and had documented access token permissions limiting its filesystem and API scope. These were technically enforced through OAuth scopes.'
      },
      {
        primitive: 'Invariant Rules',
        score: 'Absent',
        detail: 'All three operational rules (file protection, function preservation, test execution) existed exclusively in natural language prompt context. After a model update, the agent\'s behavior changed without any code deployment change. This represents a critical gap: system behavior changed without a code review.'
      },
      {
        primitive: 'Decision Authority',
        score: 'Partially Present',
        detail: 'Most repositories required pull request reviews, establishing a human gate. One repository had this requirement disabled for automation purposes. The inconsistency meant authority was distributed unevenly across the agent\'s operational scope.'
      }
    ],
    remediationPath: 'Sovereign Types were used to define a `CodeAgentAction` type with required fields: `protectedFilesChecked: boolean`, `testsExecuted: boolean`, and `commitScope: RepositoryScope`. The agent\'s execution environment was updated to validate each action against this schema before any git operation. Direct push access to main was revoked across all repositories. Rules moved from system prompt to validator functions—a change with a commit hash, a review record, and a revert path.',
    eeatSignals: {
      nistMapping: 'NIST AI RMF Govern 4.1 (Organizational Teams) and Manage 1.3 (Residual Risk) were directly applicable. The finding that rules can silently disappear after a model update corresponds to an unmanaged residual risk under the NIST framework.',
      isoMapping: 'ISO/IEC 42001:2023 Clause 8.4 (AI System Operation) addresses the requirement that operational procedures must be documented and controlled. Prompt-only rules fail this control.'
    },
    limitations: [
      {
        heading: 'Prompt Injection Not Tested',
        detail: 'The diagnostic reviewed the rule enforcement architecture but did not conduct active red-teaming for prompt injection vulnerabilities. Whether a malicious input could override the Sovereign Type validators requires a separate adversarial security audit.'
      },
      {
        heading: 'Single Point-in-Time Audit',
        detail: 'This diagnostic reflects the system state at a specific commit hash. Subsequent model updates, dependency changes, or configuration changes may introduce new governance gaps. Continuous monitoring via the Delta Instrument is recommended.'
      },
      {
        heading: 'Scope Limited to Execution Layer',
        detail: 'The audit assessed the agent\'s execution environment and rule enforcement mechanisms only. It did not evaluate the agent\'s code generation quality, security vulnerability patterns in its output, or its susceptibility to bias in code recommendations.'
      }
    ]
  },
  {
    slug: 'healthcare-ai-decision-workflow',
    title: 'Healthcare AI Decision Workflow',
    subtitle: 'Establishing audit trails and hold states in a clinical AI recommendation pipeline',
    datePublished: '2026-03-24',
    toolUsed: 'CIR Diagnostic Engine + CE-Ledger',
    toolSlug: 'cir-diagnostic-engine',
    externalReferences: [
      {
        label: 'EU AI Act — Annex III: High-Risk AI System Classification',
        url: 'https://artificialintelligenceact.eu/annex/3/'
      },
      {
        label: 'NIST AI RMF — Map 5.1: Likelihood & Impact of Negative Outcomes',
        url: 'https://airc.nist.gov/Docs/1'
      },
      {
        label: 'ISO/IEC 42001:2023 — Clause 9: Performance Evaluation',
        url: 'https://www.iso.org/standard/81230.html'
      }
    ],
    problem: 'A clinical decision support system had no documented reversibility mechanism for AI-generated recommendations that had already been acted upon by clinical staff.',
    method: 'CIR Diagnostic focused on Primitive 1 (Reversibility & Safeguards) and Primitive 4 (Decision Authority). CE-Ledger was subsequently specified as the audit trail layer to create verifiable lineage for all AI-generated recommendations.',
    outcome: 'CE-Ledger audit trail integrated for all AI-generated recommendations; explicit hold states introduced before downstream clinical action. Organizational liability posture improved; all AI recommendations became cryptographically traceable.',
    architectureContext: 'The client operated a clinical decision support tool that analyzed patient records and surfaced medication dosing recommendations to nursing staff via an internal dashboard. The system\'s recommendations were logged to a standard append-only database table. However, this log captured only the final recommendation text, not the full context under which it was generated: which model version, what input data was provided, or what confidence thresholds were active. When a recommendation was questioned retrospectively, there was no way to reconstruct the AI\'s reasoning or verify what system version had been active.',
    diagnosticFindings: [
      {
        primitive: 'Reversibility & Safeguards',
        score: 'Partially Present',
        detail: 'The recommendation display had a manual override UI where nurses could dismiss or modify a recommendation. However, once a recommendation was accepted and a medication administration record (MAR) was updated, there was no system-level hold state or reversal workflow. The recommendation\'s acceptance state was a permanent database write with no rollback path visible from the AI governance layer.'
      },
      {
        primitive: 'Component Boundaries',
        score: 'Present',
        detail: 'The AI inference system was clearly isolated from the clinical records system via an API boundary. Recommendations were passed as structured JSON objects; the AI could not directly write to clinical records. This boundary was technically enforced and well-documented.'
      },
      {
        primitive: 'Invariant Rules',
        score: 'Present',
        detail: 'Hard business rules (such as dosing ceiling limits by patient weight) were implemented as validation functions in the clinical records system, separate from the AI model. These rules would reject any recommendation exceeding safe thresholds regardless of AI output.'
      },
      {
        primitive: 'Decision Authority',
        score: 'Absent',
        detail: 'While nurses could dismiss recommendations, there was no formal hold state: a clearly defined period during which a recommendation was pending human review before it could be actioned. The system allowed a recommendation to be immediately executed upon display, with no system-enforced review window.'
      }
    ],
    remediationPath: 'CE-Ledger was integrated to capture the full epistemic context of each recommendation: model version hash, input token summary, confidence score, and active rule set version. A hold-state workflow was implemented: all recommendations displayed in a "Pending Review" status for a configurable window (default: 2 minutes) before the acceptance button became active. This gave nursing staff a system-enforced pause for review. All acceptance and dismissal events were logged to CE-Ledger with staff ID, timestamp, and active session context.',
    eeatSignals: {
      nistMapping: 'This case directly maps to NIST AI RMF Map 5.1 (Likelihood and Impact of Negative Outcomes). In a clinical context, the absence of a human-oversight hold state represents a high-likelihood, high-impact risk event.',
      euAiActMapping: 'Clinical decision support tools fall under Annex III of the EU AI Act (High-Risk AI Systems — Medical Devices). The absence of a decision authority hold state and lack of full audit lineage would not satisfy Article 13 (Transparency) or Article 14 (Human Oversight) requirements.',
      isoMapping: 'ISO/IEC 42001:2023 Clause 9 (Performance Evaluation) requires documented monitoring of AI system outputs. The pre-remediation logging configuration failed to capture sufficient data to conduct a meaningful performance evaluation.'
    },
    limitations: [
      {
        heading: 'Clinical Efficacy Not Assessed',
        detail: 'The CIR diagnostic evaluated the governance architecture of the recommendation system, not the clinical accuracy or efficacy of the AI recommendations themselves. Whether the AI\'s dosing recommendations were medically appropriate for the patient population was outside the scope of this engagement and requires clinical validation by qualified practitioners.'
      },
      {
        heading: 'Integration Testing Not Performed',
        detail: 'The CE-Ledger integration was specified and reviewed architecturally. Full integration testing within the client\'s clinical IT environment (including EHR system compatibility and HIPAA-compliant data handling of the epistemic metadata) was conducted by the client\'s internal engineering team.'
      },
      {
        heading: 'Adversarial Inputs Not Evaluated',
        detail: 'The diagnostic did not assess how the AI model responds to adversarial or out-of-distribution patient record data. Edge cases such as unusual medication combinations or rare diagnostic codes may produce unpredictable recommendation behaviors that are not captured by the CIR structural audit.'
      }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}
