import { PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'
import { ReduxProvider } from './redux-provider'
import { AuthProvider } from './auth-provider'
import { CurrentPathProvider } from './path-provider'
import { VisitProvider } from './visit-provider'

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <CurrentPathProvider>
      <TelegramProvider>
        <ReduxProvider>
          <AuthProvider>
            <VisitProvider>
              {children}
            </VisitProvider>
          </AuthProvider>
        </ReduxProvider>
      </TelegramProvider>
    </CurrentPathProvider>
  )
}
