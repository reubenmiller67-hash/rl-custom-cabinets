interface PlaceholderImageProps {
  src?: string
  alt?: string
  className?: string
  aspectRatio?: string
}

export default function PlaceholderImage({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-video',
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={`${aspectRatio} overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex min-h-[200px] items-center justify-center rounded border text-sm ${aspectRatio} ${className}`}
      style={{
        backgroundColor: '#1A1A1A',
        borderColor: '#333333',
        color: '#6B6560',
      }}
    >
      Photo Coming Soon
    </div>
  )
}
