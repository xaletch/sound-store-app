import { SoundDescription, SoundImage, SoundName, SoundWrapperButton } from "@/entities/sound"
import { soundSelector } from "@/entities/sound/model/selector"
import { userSelector } from "@/entities/user/model/selector";
import { ButtonPay, ButtonTry } from "@/features/sound"
import { useSelector } from "react-redux"

interface ISoundInformation {
  photo: string;
}

export const SoundInformation = ({ photo }: ISoundInformation) => {
  const { pack } = useSelector(soundSelector);
  const { user } = useSelector(userSelector);

  return (
    <div className="border border-black/20 rounded-xl">
      <div className="px-3 py-4">
        <div className="flex justify-between">
          <SoundImage image={photo} name={pack?.Autor || ''} />
          <div className="ml-6 md:flex md:flex-col md:justify-between">
            <SoundName name={pack?.Name || ''} genre={pack?.Genre || ''} album_name={pack?.Autor || ''} />
            <SoundWrapperButton>
              {!user?.subscribe && <ButtonTry />}
              <ButtonPay />
            </SoundWrapperButton>
          </div>
        </div>
        <SoundDescription text={pack?.Describe || ''}/>
      </div>
    </div>
  )
}
