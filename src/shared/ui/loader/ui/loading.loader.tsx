interface LoadingProps {
  w?: string;
  h?: string;
  border?: string;
}

export const Loading = ({ w = 'w-8', h = 'h-8', border = 'border-3'}: LoadingProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className={`${w} ${h} ${border} border-t-transparent border-green-350 rounded-full animate-spin`} />
    </div>
  )
}
