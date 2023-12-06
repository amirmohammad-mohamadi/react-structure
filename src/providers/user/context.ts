import {createContext} from 'react'

export interface IPaymentDetails {
  id: string
  title: string
  count: number
  price: number
}

export interface IReservationContext {
  isLogin: boolean
}

export default createContext<IReservationContext>({
  isLogin: false,
})
