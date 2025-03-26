import { SearchBoldIcon } from "@/shared/icons"
import { setSearch } from "../model/slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(setSearch(inputValue));
    }
  };

  const handleSearchClick = () => {
    dispatch(setSearch(inputValue));
  };

  return (
    <div className="w-full flex items-center border border-black rounded-3xl relative">
      <div className="ml-8 absolute"><SearchBoldIcon /></div>
      <input
        className="w-full pl-15 pr-8 py-2.5"
        type="text"
        placeholder="Найти звуки, пресеты, наборы"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="h-11.5 py-1 pr-2">
        <button onClick={handleSearchClick} className="bg-green-800 text-white px-3.5 rounded-xl md:text-base text-sm h-full min-h">Найти</button>
      </div>
    </div>
  )
}
