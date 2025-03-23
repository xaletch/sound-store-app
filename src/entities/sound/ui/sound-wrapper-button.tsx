import { PropsWithChildren } from 'react'

export const SoundWrapperButton = ({ children }: PropsWithChildren) => {
  return (
    <div className='mt-2.5 flex flex-col gap-2 min-w-37.5 md:w-[320px]'>{children}</div>
  )
}
