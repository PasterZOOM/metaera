import type { FC } from 'react'

import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { RESPONSE_STATUS } from '@/shared/consts/responseStatus.ts'

export const ErrorPage: FC = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === RESPONSE_STATUS.UNAUTHORIZED) {
      // ...
    } else if (error.status === RESPONSE_STATUS.NOT_FOUND) {
      // ...
    }

    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    )
  }
  if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    )
  }
  return null
}
