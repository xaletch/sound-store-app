interface SoundImageProps {
  image: string;
  name: string;
}
export const SoundImage = ({ image, name }: SoundImageProps) => {
  return (
    <div className="max-w-[155px] md:min-w-[220px] md:min-h-[220px] rounded-xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
  )
}
