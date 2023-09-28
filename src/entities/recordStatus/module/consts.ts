export enum RECORD_STATUS {
  FINISHED = 'FINISHED',
  IN_PROCESS = 'IN_PROCESS',
  NEW = 'NEW',
  REJECTED = 'REJECTED',
}

export const recordStatusDictionary = {
  [RECORD_STATUS.FINISHED]: 'завершена',
  [RECORD_STATUS.IN_PROCESS]: 'в обработке',
  [RECORD_STATUS.NEW]: 'новая',
  [RECORD_STATUS.REJECTED]: 'отвергнута',
}
