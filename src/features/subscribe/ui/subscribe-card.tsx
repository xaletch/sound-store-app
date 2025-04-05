import { SubscribeName, SubscribePrice, SubscribeCredits } from "@/entities/subscribe";

export interface SubscribeCardProps {
  name: 'start' | 'ultra';
  credit: string;
  credit_text: string;
  price: number;
  price_text: string;
  discount?: number;
  cl?: string;
  onClick: (name: string) => void;
  select: boolean;
}

export const SubscribeCard = ({ name, credit, credit_text, price, discount, price_text, cl = '', onClick, select }: SubscribeCardProps) => {  
  return (
    <div 
      className={`w-full border border-[#1d1f22] rounded-4xl hover:bg-[#1d1f22] hover:text-[#e7e4dd] duration-300 ${name.toLowerCase() === 'ultra' ? 'shadow-subscribe' : ''} ${select ? 'bg-[#1d1f22] text-[#e7e4dd]' : ''} ${cl}`}
      onClick={() => onClick(name)}
    >
      <div className="flex flex-col items-center px-9 py-2.5 md:py-4">
        <SubscribeName name={name} />
        <SubscribeCredits credit={credit} credit_text={credit_text} />
        <SubscribePrice price={price} price_text={price_text} discount={discount ? discount : undefined} />
      </div>
    </div>
  )
}
