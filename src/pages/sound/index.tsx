import { SoundContent, SoundInformation } from "@/widgets"

export const Sound = () => {
  const data = Array(6).fill({
    image: "/image/executor.png",
    name: "Название",
    genre: "Жанр",
    time: "0:17",
    bpm: 115,
    isLike: false,
    isPurchased: false,
  });

  return (
    <div className="px-4 pb-4">
      <SoundInformation />
      <SoundContent data={data} />
    </div>
  )
}
