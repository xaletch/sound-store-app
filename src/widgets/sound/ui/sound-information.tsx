import { SoundDescription, SoundImage, SoundName, SoundWrapperButton } from "@/entities/sound"
import { soundSelector } from "@/entities/sound/model/selector"
import { ButtonPay, ButtonTry } from "@/features/sound"
import { useSelector } from "react-redux"

export const SoundInformation = ({ photo }: { photo: string }) => {
  const { pack, tracks } = useSelector(soundSelector);

  const trackId = tracks && tracks.length > 0 ? tracks[0].Id : 0;
  const trackName = tracks && tracks.length > 0 ? tracks[0].Name : '';
  const packAuthor = pack?.Autor || '';

  return (
    <div className="border border-black/20 rounded-xl">
      <div className="px-3 py-4">
        <div className="flex justify-between">
          <SoundImage image={photo} name={pack?.Autor || ''} />
          <div className="ml-6 md:flex md:flex-col md:justify-between">
            <SoundName name={pack?.Name || ''} genre={pack?.Genre || ''} album_name={""} />
            <SoundWrapperButton>
              <ButtonTry id={trackId} name={trackName} creator={packAuthor} />
              <ButtonPay />
            </SoundWrapperButton>
          </div>
        </div>
        <SoundDescription text={pack?.Describe || ''}/>
      </div>
    </div>
  )
}
