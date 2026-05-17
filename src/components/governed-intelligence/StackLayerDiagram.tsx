import { useState, useCallback } from 'react';
import { GOVERNANCE_STACK_DATA, type StackComponent, type StackLayer } from '@/data/governed-intelligence';

interface DetailPanelProps {
  component: StackComponent | null;
  onClose: () => void;
}

function DetailPanel({ component, onClose }: DetailPanelProps) {
  if (!component) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
        role="presentation"
      />
      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-surface border-l border-border z-50 overflow-y-auto animate-slide-in-right">
        <div className="p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <span
                className="layer-tag"
                style={{ color: component.layerColor, borderColor: component.layerColor }}
              >
                {component.layer} Layer
              </span>
              <h3 className="font-display text-xl text-text-primary">{component.name}</h3>
              <span
                className="framework-badge"
                style={{ color: component.badgeColor, borderColor: component.badgeColor }}
              >
                {component.name}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close panel"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div>
            <span className="font-mono text-xs text-text-muted uppercase">Market Translation</span>
            <p className="text-sm text-text-secondary mt-1">{component.marketTranslation}</p>
          </div>

          <div>
            <span className="font-mono text-xs text-text-muted uppercase">Role in Ecosystem</span>
            <p className="text-sm text-text-secondary mt-1 leading-relaxed">{component.description}</p>
          </div>

          {component.technical && (
            <div>
              <span className="font-mono text-xs text-text-muted uppercase">Technical Stack</span>
              <p className="font-mono text-xs text-text-secondary mt-1">{component.technical}</p>
            </div>
          )}

          {component.primitives && (
            <div>
              <span className="font-mono text-xs text-text-muted uppercase">Primitives</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {component.primitives.map((p) => (
                  <span
                    key={p}
                    className="font-mono text-xs px-2 py-1 rounded border"
                    style={{ color: 'var(--color-accent)', borderColor: 'var(--color-accent-dim)' }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <span className="font-mono text-xs text-text-muted uppercase">Reinforcement</span>
            <p className="text-sm text-text-secondary mt-1 leading-relaxed">{component.reinforcement}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {component.status === 'Deployed' && (
              <span className="inline-flex items-center gap-1 text-xs text-deployed">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-deployed" />
                Deployed
              </span>
            )}
            {component.status === 'Active' && (
              <span className="inline-flex items-center gap-1 text-xs text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Active
              </span>
            )}
          </div>

          {component.repoSlug && (
            <a
              href={`https://github.com/hillarynjuguna/${component.repoSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline mt-2"
            >
              View repository
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          <a
            href={component.id === 'cir' ? '/cir-diagnostic-engine' : '/governed-intelligence'}
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
          >
            View in detail
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default function StackLayerDiagram() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<StackComponent | null>(null);

  const toggleLayer = useCallback((layerId: string) => {
    setExpandedLayer((prev) => (prev === layerId ? null : layerId));
  }, []);

  const openComponent = useCallback((component: StackComponent) => {
    setSelectedComponent(component);
  }, []);

  const closePanel = useCallback(() => {
    setSelectedComponent(null);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      {GOVERNANCE_STACK_DATA.map((layer: StackLayer) => (
        <div
          key={layer.id}
          className="rounded-lg border border-border-subtle overflow-hidden transition-all duration-300"
        >
          {/* Layer header */}
          <button
            onClick={() => toggleLayer(layer.id)}
            className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-surface-raised"
            aria-expanded={expandedLayer === layer.id}
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1 h-8 rounded"
                style={{ backgroundColor: layer.color }}
              />
              <div className="flex flex-col">
                <span className="font-body text-sm font-semibold text-text-primary">
                  {layer.name}
                </span>
                <span className="font-mono text-xs text-text-muted">{layer.subtitle}</span>
              </div>
            </div>
            <svg
              className={`h-5 w-5 text-text-muted transition-transform duration-300 ${expandedLayer === layer.id ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expanded content */}
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{ maxHeight: expandedLayer === layer.id ? '800px' : '0', opacity: expandedLayer === layer.id ? 1 : 0 }}
          >
            <div className="p-4 pt-0 flex flex-col gap-3">
              {layer.components.map((component: StackComponent) => (
                <button
                  key={component.id}
                  onClick={() => openComponent(component)}
                  className={`text-left p-4 rounded-md border transition-all duration-200 hover:-translate-y-0.5 ${
                    component.isAnchor
                      ? 'border-accent/40 bg-accent-subtle'
                      : 'border-border-subtle bg-surface hover:border-border'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="framework-badge"
                        style={{ color: component.badgeColor, borderColor: component.badgeColor }}
                      >
                        {component.name}
                      </span>
                      {component.isAnchor && (
                        <span className="text-accent text-xs">&#9733;</span>
                      )}
                    </div>
                    <svg className="h-4 w-4 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs text-text-secondary mt-2 line-clamp-2">{component.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Detail panel */}
      {selectedComponent && (
        <DetailPanel component={selectedComponent} onClose={closePanel} />
      )}
    </div>
  );
}
