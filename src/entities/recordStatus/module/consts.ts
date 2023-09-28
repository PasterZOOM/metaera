export enum RECORD_STATUS {
  FINISHED = 'FINISHED',
  IN_PROCESS = 'IN_PROCESS',
  NEW = 'NEW',
  REJECTED = 'REJECTED',
}

export const recordStatusDictionary = {
  [RECORD_STATUS.FINISHED]: '✔',
  [RECORD_STATUS.IN_PROCESS]: '✎',
  [RECORD_STATUS.NEW]: 'ⓃⒺⓌ',
  [RECORD_STATUS.REJECTED]: '❌',
}
