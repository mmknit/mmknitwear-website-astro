import { useCallback, useEffect, useRef, useState } from 'react';

export interface Slide {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

interface Props {
  slides: Slide[];
  interval?: number;
}

export default function HeroSlider({ slides, interval = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => {
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [interval, slides.length]);

  const pause = () => timer.current && clearInterval(timer.current);
  const resume = () => {
    pause();
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
  };

  const s = slides[index];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`hero__slide${i === index ? ' is-active' : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-hidden={i !== index}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="hero__content">
        <div className="container hero__copy">
          <p className="eyebrow">{s.eyebrow}</p>
          <h1>{s.title}</h1>
          <p>{s.text}</p>
          <div className="hero__actions">
            <a className="btn btn--accent" href={s.primary.href}>
              {s.primary.label}
            </a>
            {s.secondary && (
              <a className="btn btn--ghost" href={s.secondary.href}>
                {s.secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
      >
        &larr;
      </button>
      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
      >
        &rarr;
      </button>

      <div className="hero__dots" role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero__dot${i === index ? ' is-active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
