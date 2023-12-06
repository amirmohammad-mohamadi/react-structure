import {Box} from '@mui/material'
import {FC} from 'react'
import {Outlet} from 'react-router-dom'

const PublicLayout: FC = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.common.white,
        margin: theme.spacing(2),
      })}
    >
      <Outlet />
    </Box>
  )
}

export default PublicLayout
