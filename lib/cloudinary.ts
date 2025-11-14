export function getCloudinaryUrl(
  imagePath: string,
  options?: {
    width?: number
    height?: number
    quality?: number
    format?: 'auto' | 'webp' | 'jpg' | 'png'
  }
) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ''
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`

  const transformations = []
  if (options?.width) transformations.push(`w_${options.width}`)
  if (options?.height) transformations.push(`h_${options.height}`)
  if (options?.quality) transformations.push(`q_${options.quality}`)
  if (options?.format) transformations.push(`f_${options.format}`)
  else transformations.push('f_auto')

  const transformString = transformations.length > 0 ? `${transformations.join(',')}/` : ''

  return `${baseUrl}/${transformString}${imagePath}`
}

