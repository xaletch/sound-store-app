import { playerSelector } from '@/features/audio-player';
import { BigButton } from '@/shared/ui'
import { Faq } from '@/widgets'
import { useSelector } from 'react-redux';

export const FaqSupport = () => {
  const { isPlayer } = useSelector(playerSelector);
  return (
    <div className={`px-4 pb-4 h-full flex flex-col ${isPlayer ? 'pb-26' : ''}`}>
      <Faq />
      <div className='md:max-w-xl md:mx-auto'>
        <BigButton href={'#'} cl={'bg-[#7CC0AB] hover:opacity-80'}>Написать в поддержку</BigButton>
      </div>
    </div>
  )
}
