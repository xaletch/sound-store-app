export const NotFound = ({ text }: { text: string }) => {
  return (
    <div className="h-full flex items-center justify-center">
    <div className="py-20">
      <p className="text-sm text-gray-600 text-center">{text}</p>
    </div>
  </div>
  )
}
