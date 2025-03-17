import { SoundDescription, SoundImage, SoundName, SoundWrapperButton } from "@/entities/sound"
import { soundSelector } from "@/entities/sound/model/selector"
import { ButtonPay, ButtonTry } from "@/features/sound"
import { useSelector } from "react-redux"

export const SoundInformation = () => {
  const { pack } = useSelector(soundSelector);

  return (
    <div className="border border-black/20 rounded-xl">
      <div className="px-3 py-4">
        <div className="flex justify-between">
          <SoundImage image={pack?.PhotoPath || 'undefiend'} name={pack?.Autor || ''} />
          <div className="ml-6">
            <SoundName name={pack?.Name || ''} genre={pack?.Genre || ''} album_name={""} />
            <SoundWrapperButton>
              <ButtonTry />
              <ButtonPay />
            </SoundWrapperButton>
          </div>
        </div>
        <SoundDescription text={pack?.Describe || ''}/>
      </div>
    </div>
  )
}
