import type { SORT } from '@/entities/tableHeader'

export const sortParse = (sort: SORT | null): { direction: string | null; key: string | null } => {
  if (sort) {
    const [direction, key] = sort.split('_')
    return { direction, key }
  }

  return { direction: null, key: null }
}
export const sortStringify = (direction: string | null, key: string | null): SORT | null => {
  switch (key) {
    case 'asc': {
      return `${direction}_desc` as SORT
    }
    case 'desc': {
      return null
    }
    default: {
      return `${direction}_asc` as SORT
    }
  }
}
