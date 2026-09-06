import { useState, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string
}

/** Renders an on-brand gradient placeholder instead of a broken-image icon
 *  whenever the source fails to load (offline preview, blocked host, etc). */
export default function ImageWithFallback({ fallbackLabel, alt, className, ...rest }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-chocolate-premium via-chocolate-dark to-caramel-gold px-4 text-center text-vanilla-cream',
          className,
        )}
        role="img"
        aria-label={alt || fallbackLabel}
      >
        <ImageOff size={28} strokeWidth={1.5} aria-hidden="true" />
        {fallbackLabel && <span className="text-xs font-semibold">{fallbackLabel}</span>}
      </div>
    )
  }

  return (
    <img
      {...rest}
      alt={alt}
      className={cn('h-full w-full object-cover', className)}
      onError={() => setFailed(true)}
    />
  )
}
