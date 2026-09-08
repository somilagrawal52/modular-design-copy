import { RESPONSIVE_IMAGE_WIDTHS } from "./responsiveImageManifest";

const imageExtension = /\.[a-z0-9]+$/i;

export function responsiveImagePath(src: string, width: number) {
  return src.replace("/images/", "/images/responsive/").replace(imageExtension, `-${width}.webp`);
}

export function responsiveImageSrcSet(src: string) {
  const widths = RESPONSIVE_IMAGE_WIDTHS[src];
  if (!widths) return undefined;

  return widths.map((width) => `${responsiveImagePath(src, width)} ${width}w`).join(", ");
}
