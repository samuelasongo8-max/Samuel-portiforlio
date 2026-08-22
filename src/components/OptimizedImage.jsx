import React from 'react';

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  );
}
