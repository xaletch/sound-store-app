interface SoundImageProps {
  image: string;
  name: string;
}
export const SoundImage = ({ image, name }: SoundImageProps) => {
  return (
    <div className="rounded-xl overflow-hidden w-[122px] h-[122px] 364:w-[130px] 364:h-[130px] 400:w-[155px] 400:h-[155px] md:w-[220px] md:h-[220px]">
      <img src={`data:image/png;base64, ${image}`} alt={name} className="w-full h-full object-cover" />
      {/* <img src={`/public/life-wonderful.jpg`} alt={name} className="w-full h-full object-cover" /> */}
    </div>
  )
}
