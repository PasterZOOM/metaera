export enum APP_ROUTES {
  ARCHIVE = 'archive',
  NOT_FOUND = 'not_found',
  RECORDS = 'records',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.RECORDS]: '/',
  [APP_ROUTES.ARCHIVE]: '/requests',
  [APP_ROUTES.NOT_FOUND]: '*',
}
