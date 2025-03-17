interface SlideProps {
  image: string;
  name: string;
  description: string;
}

export const Slide = ({ image, name, description }: SlideProps) => {
  return (
    <div 
      className="w-full h-37.5 rounded-lg bg-white" 
      style={{ 
        background: `linear-gradient(rgba(29, 31, 34, 0.1), rgba(29, 31, 34, 0.1)), linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${image}")`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="pl-4 h-full flex flex-col justify-end pr-7.5 pb-2.5">
        <h3 className="font-medium text-yellow-100">{name}</h3>
        <p className="text-[10px] md:text-sm leading-3 font-medium md:leading-4 text-yellow-100">{description}</p>
      </div>
    </div>
  )
}
