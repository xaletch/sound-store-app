import { SoundDescription, SoundImage, SoundName, SoundWrapperButton } from "@/entities/sound"
import { ButtonPay, ButtonTry } from "@/features/sound"

export const SoundInformation = () => {
  return (
    <div className="border border-black/20 rounded-xl">
      <div className="px-3 py-4">
        <div className="flex justify-between">
          <SoundImage image={"/image/executor.png"} name={"Название"} />
          <div className="ml-6">
            <SoundName name={"Название"} genre={"Жанр"} album_name={"Audentuty Records"} />
            <SoundWrapperButton>
              <ButtonTry />
              <ButtonPay />
            </SoundWrapperButton>
          </div>
        </div>
        <SoundDescription text="Описание альбома описание альбома описание альбома описание альбома описание альбома описание альбома описание альбома"/>
      </div>
    </div>
  )
}
