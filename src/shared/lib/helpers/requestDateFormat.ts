/*  eslint-disable no-magic-numbers */

export const requestDateFormat = (
  from?: Date,
  to?: Date,
): Partial<{ first_request_date: string; last_request_date: string }> => {
  return {
    first_request_date: from ? from.toISOString().slice(0, 10) : undefined,
    last_request_date: to ? to.toISOString().slice(0, 10) : undefined,
  }
}
