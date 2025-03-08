import { PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <TelegramProvider>
      {children}
    </TelegramProvider>
  )
}
