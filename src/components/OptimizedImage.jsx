import React from 'react';

export default function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  className = '',
  width,
  height,
  priority = false,
  ...props
}) {
  return (
    <picture>
      {src.toLowerCase().endsWith('.webp') && (
        <source srcSet={src} type="image/webp" />
      )}
      <img
        src={fallbackSrc || src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        {...props}
      />
    </picture>
  );
}
