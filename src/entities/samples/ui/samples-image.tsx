export const SamplesImage = ({ image, name }: { image: string, name: string }) => {
  return (
    <div className="rounded-xs overflow-hidden w-6.5 h-6.5">
      <img src={image} alt={name} />
    </div>
  )
}
