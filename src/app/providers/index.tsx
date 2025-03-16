import { PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'
import { ReduxProvider } from './redux-provider'
import { AuthProvider } from './auth-provider'

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <TelegramProvider>
        <ReduxProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ReduxProvider>
    </TelegramProvider>
  )
}
