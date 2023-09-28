export const sortParse = (
  sort: string | null,
): { direction: string | null; key: string | null } => {
  if (sort) {
    const [direction, key] = sort.split('-')
    return { direction, key }
  }

  return { direction: null, key: null }
}
export const sortStringify = (direction: string | null, key: string | null): string | null => {
  switch (key) {
    case 'asc': {
      return `${direction}-desc`
    }
    case 'desc': {
      return null
    }
    default: {
      return `${direction}-asc`
    }
  }
}
