import type { FC } from 'react'

import { Box, Button } from '@mantine/core'
import { isRouteErrorResponse, useRouteError, NavLink } from 'react-router-dom'

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
      <Box
        id="error-page"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
        <NavLink to="/">
          <Button>На главную</Button>
        </NavLink>
      </Box>
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
