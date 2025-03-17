import { PayIcon } from "@/shared/icons"

export const TrackPay = ({ id }: { id: number }) => {
  const handlePay = () => {
    console.log(id);
  }
  
  return (
    <button onClick={handlePay} className="cursor-pointer">
      <PayIcon />
    </button>
  )
}
