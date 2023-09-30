export const createSortQuery = (str?: string): Partial<{ _order: string; _sort: string }> => {
  if (!str) return {}
  const [sort, order] = str.split('-')
  return { _order: order, _sort: sort }
}
