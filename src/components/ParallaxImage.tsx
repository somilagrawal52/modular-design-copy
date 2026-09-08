import { responsiveImageSrcSet } from "../lib/responsiveImages";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ParallaxImage({ src, alt, className = "", objectPosition, priority = false, sizes }: ParallaxImageProps) {
  const webpSrcSet = responsiveImageSrcSet(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <picture className="block h-full w-full">
        {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
          style={objectPosition ? { objectPosition } : undefined}
          referrerPolicy="no-referrer"
        />
      </picture>
    </div>
  );
}
