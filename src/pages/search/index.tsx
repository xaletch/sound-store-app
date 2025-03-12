import { SearchSort } from "@/widgets"

export const Search = () => {
  return (
    <div className="px-4 pb-4">
      <h1 className="text-center font-medium text-xl">Поиск</h1>
      <div>
        <SearchSort />
      </div>
    </div>
  )
}
