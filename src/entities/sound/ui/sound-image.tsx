interface SoundImageProps {
  image: string;
  name: string;
}
export const SoundImage = ({ image, name }: SoundImageProps) => {
  return (
    <div className="max-w-[155px] rounded-xl overflow-hidden">
      <img src={image} alt={name} width={155} height={155} />
    </div>
  )
}
