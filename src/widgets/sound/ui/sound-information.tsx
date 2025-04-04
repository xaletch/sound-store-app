import { SoundDescription, SoundImage, SoundName, SoundWrapperButton } from "@/entities/sound"
import { soundSelector } from "@/entities/sound/model/selector"
import { userSelector } from "@/entities/user/model/selector";
import { ButtonPay, ButtonTry } from "@/features/sound"
import { Shadow } from "@/shared/ui";
import { useSelector } from "react-redux"

interface ISoundInformation {
  photo: string;
}

export const SoundInformation = ({ photo }: ISoundInformation) => {
  const { pack, tracks } = useSelector(soundSelector);
  const { user } = useSelector(userSelector);

  const allTracksDownloaded = tracks.every(track => track.Downloaded === true);
  return (
    <div className="border border-black/20 rounded-xl relative">
      <Shadow cl="w-68 h-68 md:w-80 md:h-80  blur-[80px] md:blur-[100px] -top-2 -left-10 md:left-0" />
      
      <div className="px-3 py-4 relative">
        <div className="flex justify-between">
          <SoundImage image={photo} name={pack?.Autor || ''} />
          <div className="ml-6 md:flex md:flex-col md:justify-between">
            <SoundName name={pack?.Name || ''} genre={pack?.Genre || ''} album_name={pack?.Autor || ''} />
            <SoundWrapperButton>
              {!user?.subscribe && <ButtonTry />}
              {!allTracksDownloaded && <ButtonPay />}
            </SoundWrapperButton>
          </div>
        </div>
        <SoundDescription text={pack?.Describe || ''}/>
      </div>
    </div>
  )
}
