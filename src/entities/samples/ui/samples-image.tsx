export const SamplesImage = ({ image, name }: { image: string, name: string }) => {
  return (
    <div className="rounded-xs overflow-hidden w-6.5 h-6.5 md:w-14 md:h-14 md:rounded-lg">
      <img src={image} alt={name} />
    </div>
  )
}
