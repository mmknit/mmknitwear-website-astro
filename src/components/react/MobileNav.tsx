import { useEffect, useRef, useState } from 'react';

interface NavItem {
  key: string;
  label: string;
  href: string;
}

interface Props {
  nav: NavItem[];
  active?: string;
}

const base = import.meta.env.BASE_URL;

export default function MobileNav({ nav, active }: Props) {
  const [open, setOpen] = useState(false);
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
            <a
              key={item.key}
              href={base + item.href.slice(1)}
              aria-current={active === item.key ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
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
