export enum APP_ROUTES {
  ARCHIVE = 'archive',
  NOT_FOUND = 'not_found',
  ORDERS = 'orders',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.ORDERS]: '/',
  [APP_ROUTES.ARCHIVE]: '/archive',
  [APP_ROUTES.NOT_FOUND]: '*',
}
