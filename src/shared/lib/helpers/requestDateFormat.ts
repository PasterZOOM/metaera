export const requestDateFormat = (
  from?: Date,
  to?: Date,
): Partial<{ record_date_gte: string; record_date_lte: string }> => {
  return {
    record_date_gte: from ? from.toISOString().slice(0, 10) : undefined,
    record_date_lte: to ? to.toISOString().slice(0, 10) : undefined,
  }
}
