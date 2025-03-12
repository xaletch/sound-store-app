interface SoundNameProps {
  name: string;
  genre: string;
  album_name: string;
}

export const SoundName = ({ name, genre, album_name }: SoundNameProps) => {
  return (
    <div>
      <div>
        <h1 className="font-medium text-base text-[#1d1f22]">{name}</h1>
        <p className="text-[#1D1F22]/20 text-sm">{genre}</p>
      </div>
      <h2 className="mt-4 text-sm font-medium text-[#1D1F22]/20">{album_name}</h2>
    </div>
  )
}
