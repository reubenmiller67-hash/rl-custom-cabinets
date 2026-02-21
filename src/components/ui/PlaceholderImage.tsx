import type { ReactNode } from 'react'

interface PlaceholderImageProps {
  className?: string
  children?: ReactNode
}

export default function PlaceholderImage({ className = '', children }: PlaceholderImageProps) {
  return (
    <div
      className={`flex min-h-[200px] items-center justify-center rounded border text-sm ${className}`}
      style={{
        backgroundColor: '#1A1A1A',
        borderColor: '#A88A3D',
        color: '#6B6560',
      }}
    >
      {children ?? 'Photo Coming Soon'}
    </div>
  )
}
