export enum TAX_PERIOD {
  MONTH = 'PERIOD_MONTH',
  Q1 = 'PERIOD_Q1',
  Q2 = 'PERIOD_Q2',
  Q3 = 'PERIOD_Q3',
  Q4 = 'PERIOD_Q4',
  YEAR = 'PERIOD_YEAR',
}

export const taxPeriodDictionary = {
  [TAX_PERIOD.MONTH]: 'месяц',
  [TAX_PERIOD.Q1]: '1 квартал',
  [TAX_PERIOD.Q2]: '2 квартал',
  [TAX_PERIOD.Q3]: '3 квартал',
  [TAX_PERIOD.Q4]: '4 квартал',
  [TAX_PERIOD.YEAR]: 'год',
}
