import { FolderImage, NameGenre } from "@/entities/folders"
import { Link } from "@tanstack/react-router";

interface FolderCardProps {
  href: string;
  image: string;
  name: string;
  genre: string;
  naming: string;
  id: string;
}

export const FolderCard = ({ href, image, name, genre, naming, id }: FolderCardProps) => {
  return (
    <Link to={href} params={{ name: id }} className="border border-black/20 rounded-md">
      <div className="pt-2.5 pb-1.5">
        <FolderImage image={image} name={name} />
        <NameGenre name={name} genre={genre}/>
        <div className={"pl-2 pr-1 text-[9px] text-[#1D1F22]/20 font-medium"}>{naming}</div>
      </div>
    </Link>
  )
}
