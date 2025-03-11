interface NameGenreProps {
  name: string;
  genre: string;
}

export const NameGenre = ({ name, genre }: NameGenreProps) => {
  return (
    <div className="my-2 px-2.5">
      <h3 className="text-[10px] font-medium text-[#1D1F22]">{name}</h3>
      <p className="text-[10px] text-[#1D1F22]/20 font-medium">{genre}</p>
    </div>
  )
}
