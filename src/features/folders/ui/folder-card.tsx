import { FolderImage, NameGenre } from "@/entities/folders"
import { useGetPackPhotoQuery } from "@/entities/sound/model/services";
import { Link } from "@tanstack/react-router";

interface FolderCardProps {
  href: string;
  image?: string;
  name: string;
  genre: string;
  naming: string;
  id: string;
}

export const FolderCard = ({ href, name, genre, naming, id }: FolderCardProps) => {
  const { data: photo } = useGetPackPhotoQuery({ id: id });

  return (
    <Link to={href} params={{ name: id }} className="border border-black/20 rounded-md hover:border-black/40 duration-300">
      <div className="pt-2.5 pb-1.5">
        <FolderImage image={photo?.Photo || ''} name={name} />
        <NameGenre name={name} genre={genre}/>
        <div className={"pl-2 pr-1 text-[9px] md:text-sm text-[#1D1F22]/20 font-medium"}>{naming}</div>
      </div>
    </Link>
  )
}
