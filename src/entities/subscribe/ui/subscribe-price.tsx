export const SubscribePrice = ({ price, price_text, discount }: { price: number, price_text: string, discount: number | undefined }) => {
  return (
    <div className="leading-7.5 text-2xl flex items-center">
      <span className="font-medium ">{price}₽</span>
      <span>/</span>
      <span>{price_text}</span>
      {discount && <div>(-{discount}%)</div>}
    </div>
  )
}
