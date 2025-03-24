import { useVisit } from "@/app/providers/visit-provider";
import { useNavigate } from "@tanstack/react-router"

export const SlideThree = () => {
  const navigate = useNavigate();
  const { setFirstVisit } = useVisit();

  const handleOpen = () => {
    localStorage.setItem('first-visit', 'true');
    setFirstVisit(false);
    navigate({ to: '/' });
  }

  return (
    <div className="w-full h-full flex-shrink-0 pt-10">
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <h1 className="font-extrabold uppercase text-[#7cc0ab] text-8xl font-trap flex items-center justify-center">
            try
            <span className="font-extrabold text-[#1d1f22] text-3xl">free</span>
          </h1>
          <div className="mt-4 mx-4">
            <h2 className="text-base text-center">попробуй бесплатно</h2>
            <p className="text-xs text-center mt-1">окунись в мир музыки вместе с layer - бесплатно</p>
            <button onClick={handleOpen} className="cursor-pointer mt-6 w-full flex items-center justify-center uppercase text-[#e7e4dd] bg-[#1D1F22] rounded-full py-3 px-4">открыть бот</button>
          </div>
        </div>
        <img className="w-full" src="/image/slide-3.png" alt="slide-3" />
      </div>
    </div>
  )
}
