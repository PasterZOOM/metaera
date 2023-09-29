export const sortParse = (sort?: string): Partial<{ direction: string; key: string }> => {
  if (sort) {
    const [direction, key] = sort.split('-')
    return { direction, key }
  }
  return {}
}
export const sortStringify = (direction?: string, key?: string): string | undefined => {
  switch (key) {
    case 'asc': {
      return `${direction}-desc`
    }
    case 'desc': {
      return undefined
    }
    default: {
      return `${direction}-asc`
    }
  }
}
