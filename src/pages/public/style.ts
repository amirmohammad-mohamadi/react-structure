import {SxProps} from '@mui/material'

export const root: SxProps<Theme> | undefined = (theme) => ({
  backgroundColor: theme.palette.common.white,
  margin: theme.spacing(2),
})
