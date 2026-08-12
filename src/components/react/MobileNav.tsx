import { useEffect, useRef, useState } from 'react';

interface NavItem {
  key: string;
  label: string;
  href: string;
  children?: { key: string; label: string; href: string }[];
}

interface Props {
  nav: NavItem[];
  active?: string;
}

const base = import.meta.env.BASE_URL;

export default function MobileNav({ nav, active }: Props) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const toggle = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div ref={ref}>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span className="nav-toggle__bars" />
      </button>

      <div className={`mobile-nav${open ? ' is-open' : ''}`} id="mobile-menu" aria-hidden={!open}>
        <div className="mobile-nav__backdrop" onClick={() => setOpen(false)} />
        <div className="mobile-nav__panel" role="dialog" aria-label="Menu">
          <button
            type="button"
            className="mobile-nav__close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          {nav.map((item) => (
            <div key={item.key} className="mobile-nav__group">
              <div className="mobile-nav__row">
                <a
                  href={base + item.href.slice(1)}
                  aria-current={active === item.key ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    type="button"
                    className="mobile-nav__toggle"
                    aria-expanded={expanded.has(item.key)}
                    aria-controls={`mobile-sub-${item.key}`}
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() => toggle(item.key)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && (
                <div
                  className={`mobile-nav__sub${expanded.has(item.key) ? ' is-open' : ''}`}
                  id={`mobile-sub-${item.key}`}
                >
                  {item.children.map((c) => (
                    <a
                      key={c.key}
                      href={base + c.href.slice(1)}
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={base + 'contact/'}
            aria-current={active === 'contact' ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
