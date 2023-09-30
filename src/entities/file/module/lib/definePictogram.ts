const knownFileExtensions = ['doc', 'pdf', 'tiff']
const images = ['jpg', 'png', 'bmp']
export const definePictogram = (href: string): string => {
  const file = (/([^/|\\]+)\.\w+$/.exec(href) ?? [''])[0].toLowerCase()
  const fileExtension = file.split('.').pop() || ''

  if (images.includes(fileExtension) || href.includes('data:image/jpeg;base64')) {
    return href
  }
  if (knownFileExtensions.includes(fileExtension)) {
    return `fileIcons/${fileExtension}.png`
  }
  return `fileIcons/other.png`
}
