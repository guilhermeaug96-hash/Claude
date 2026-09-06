import { useState, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string
}

/** Renders an on-brand gradient placeholder instead of a broken-image icon
 *  whenever the source fails to load (offline preview, blocked host, etc). */
export default function ImageWithFallback({ fallbackLabel, alt, className, ...rest }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className ?? ''}`} role="img" aria-label={alt || fallbackLabel}>
        <ImageOff size={28} strokeWidth={1.5} aria-hidden="true" />
        {fallbackLabel && <span>{fallbackLabel}</span>}
      </div>
    )
  }

  return <img {...rest} alt={alt} className={className} onError={() => setFailed(true)} />
}
