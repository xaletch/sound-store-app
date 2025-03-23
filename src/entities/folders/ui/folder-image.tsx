export const FolderImage = ({ image, name }: { image: string, name: string }) => {
  return (
    <div className='mx-2.5 bg-[#1d1f22] rounded-xl overflow-hidden aspect-square'>
      <img className="w-full h-full" src={`data:image/png;base64, ${image}`} alt={name} />
    </div>
  )
}
