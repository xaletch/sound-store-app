import { Slide } from "@/entities/slider"

export const Slider = () => {
  return (
    <div className="my-7">
      <Slide 
        image={"/image/slider.png"} 
        name={"Название"} 
        description={"Таким образом консультация с широким активом влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий."}
      />
    </div>
  )
}
