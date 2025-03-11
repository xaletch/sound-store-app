import { PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'
import { ReduxProvider } from './redux-provider'

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <TelegramProvider>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </TelegramProvider>
  )
}
