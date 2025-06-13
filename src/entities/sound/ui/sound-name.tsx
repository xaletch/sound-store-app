interface SoundNameProps {
  name: string;
  genre: string;
  album_name: string;
}

export const SoundName = ({ name, genre, album_name }: SoundNameProps) => {
  return (
    <div>
      <div>
        <h1 className="font-medium text-base md:text-2xl text-[#1d1f22]">{name}</h1>
        <p className="text-[#1D1F22]/20 text-sm md:text-lg">{genre}</p>
      </div>
      <h2 className="mt-2 364:mt-4 text-sm md:text-xl font-medium text-[#1D1F22]/20">{album_name}</h2>
    </div>
  )
}
