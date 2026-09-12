import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// Manufacturer renders sit on white/transparent grounds; cropping them with object-cover
// cuts the product off. Sampling the corners tells renders apart from lifestyle photos.
const looksLikeCutout = (img: HTMLImageElement): boolean => {
  try {
    const size = 24;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return false;
    ctx.drawImage(img, 0, 0, size, size);

    const corners: [number, number][] = [[0, 0], [size - 2, 0], [0, size - 2], [size - 2, size - 2]];
    let blank = 0;
    for (const [x, y] of corners) {
      const d = ctx.getImageData(x, y, 2, 2).data;
      let light = true;
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] > 24 && (d[i] < 236 || d[i + 1] < 236 || d[i + 2] < 236)) light = false;
      }
      if (light) blank++;
    }
    return blank >= 3;
  } catch {
    return false;
  }
};

type ProductImageProps = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

const ProductImage: React.FC<ProductImageProps> = ({ src, alt = '', className, loading = 'lazy', onLoad, ...rest }) => {
  const ref = useRef<HTMLImageElement>(null);
  const [cutout, setCutout] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth) setCutout(looksLikeCutout(img));
  }, [src]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onLoad={(e) => {
        setCutout(looksLikeCutout(e.currentTarget));
        onLoad?.(e);
      }}
      className={cn(
        'h-full w-full',
        cutout ? 'object-contain p-6 md:p-8 mix-blend-multiply' : 'object-cover',
        className,
      )}
      {...rest}
    />
  );
};

export default ProductImage;
