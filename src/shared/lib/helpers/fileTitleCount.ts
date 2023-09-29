export const fileTitleCount = (count: number): string => {
  // eslint-disable-next-line no-magic-numbers
  if (count.toString().at(-1) === '1' && count !== 11) return 'файл'
  if (
    count.toString().at(-1) === '2' ||
    count.toString().at(-1) === '3' ||
    count.toString().at(-1) === '4'
  )
    return 'файла'
  return 'файлов'
}
