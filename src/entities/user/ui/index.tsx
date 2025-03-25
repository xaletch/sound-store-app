import { useMediaQuery } from "react-responsive";

interface UserData {
  avatar: string | undefined;
  name: string | undefined;
}

export const User = ({ avatar, name }: UserData) => {
  const isDesktop = useMediaQuery({ minWidth: 1080 });

  return (
    <>
      {isDesktop ? (
        <div className="flex items-center">
          <div className="md:min-w-15 md:w-15 md:h-15 bg-green-800 rounded-full overflow-hidden">
            <img className="w-full h-full" src={avatar} alt={name} />
          </div>
          <div className="text-black ml-4 text-base font-medium capitalize">{name}</div>
        </div>
      ) : (
        <div className="min-w-9 w-9 h-9 bg-green-800 rounded-full overflow-hidden">
          <img className="w-full h-full" src={avatar} alt={name} />
        </div>
      )}
    </>
  )
}
