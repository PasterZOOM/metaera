import type { ForwardedRef } from 'react'
import { forwardRef } from 'react'

import { DatePickerInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react'

import type { DatePickerInputProps } from '@mantine/dates'

const icon = <IconCalendar stroke={1.5} style={{ height: '1.25rem', width: '1.25rem' }} />

export const DataPicker = forwardRef<ForwardedRef<HTMLButtonElement>, DatePickerInputProps>(
  props => {
    return (
      <DatePickerInput
        {...props}
        leftSection={icon}
        leftSectionPointerEvents="none"
        styles={{
          input: { minWidth: '9.5rem' },
          root: { alignItems: 'center', display: 'flex', gap: '0.625rem' },
        }}
      />
    )
  },
)
