import {Button, Card, FormControl, TextField} from '@mui/material'
import {LOGIN_ROUTE} from 'constants/routes'
import {FC} from 'react'
import {Link} from 'react-router-dom'

const RegisterLayout: FC = () => {
  return (
    <Card
      sx={(theme) => ({
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        padding: theme.spacing(2),
        margin: 'auto',
      })}
    >
      <FormControl>
        <TextField label='name' />
      </FormControl>
      <FormControl>
        <TextField label='password' type='password' />
      </FormControl>
      <Button variant='outlined' color='success'>
        Register
      </Button>
      <Link to={LOGIN_ROUTE}>Login</Link>
    </Card>
  )
}

export default RegisterLayout
