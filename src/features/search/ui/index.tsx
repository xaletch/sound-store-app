import { SearchBoldIcon } from "@/shared/icons"

export const Search = () => {
  return (
    <div className="w-full flex items-center border border-black rounded-3xl relative">
      <div className="ml-8 absolute"><SearchBoldIcon /></div>
      <input className="w-full pl-15 pr-8 py-2.5" type="text" placeholder="Найти звуки, пресеты, наборы" />
    </div>
  )
}
