import { Loader } from "@/shared/ui";
import { useMediaQuery } from "react-responsive";

export const UserLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 1080 });

  return (
    <>
      {isDesktop ? (
        <div className="flex items-center">
          <div className="md:min-w-15 md:w-15 md:h-15 rounded-full overflow-hidden">
            <Loader borderRadius={100} />
          </div>
          <Loader height={24} borderRadius={6} cl={"ml-4"}/>
        </div>
      ) : (
        <div className="min-w-9 w-9 h-9 rounded-full overflow-hidden">
          <Loader borderRadius={100}/>
        </div>
      )}
    </>
  )
}