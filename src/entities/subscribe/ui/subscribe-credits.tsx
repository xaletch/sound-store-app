export const SubscribeCredits = ({ credit, credit_text, m }: { credit: string, credit_text: string; m?: string }) => {
  return (
    <div className={`text-2xl font-medium flex items-center ${!m ? 'my-7.5' : m}`}>
      <p className="text-center"><span>{credit}</span> кредитов {credit_text}</p>
    </div>
  )
}
