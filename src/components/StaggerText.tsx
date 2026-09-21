"use client";


interface StaggerTextProps {
  text: string;
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  once?: boolean;
  delay?: number;
  stagger?: number;
}

export default function StaggerText({
  text,
  el: Element = 'p',
  className = "",
  once: _once = false,
  delay: _delay = 0,
  stagger: _stagger = 0.05
}: StaggerTextProps) {
  const words = text.split(' ');

  return (
    <Element className={className} aria-label={text}>
      <span className="flex flex-wrap" aria-hidden="true">
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-[0.25em]">
            {word}
          </span>
        ))}
      </span>
    </Element>
  );
}
