import { Slide } from "@/entities/slider"

export const Slider = () => {
  return (
    <div className="px-4">
      <Slide 
        image={"/image/slider.png"} 
        name={"Что такое Layer?"} 
        description={"Layer — это не просто сервис, а настоящая сокровищница для музыкантов и продюсеров, стремящихся к совершенству в создании собственного звука. Здесь каждый звук, каждый луп и сэмпл, создан с любовью и вниманием к деталям."}
      />
    </div>
  )
}
