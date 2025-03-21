import { SoundContent } from "@/widgets"
import { useSelector } from "react-redux";
import { lovedSelector } from "@/entities/loved/model/selector";
import { LoveNot } from "./not";
import { Sort } from "@/widgets/sort";
import { filterSelector } from "@/features/filters/model/selector";
import { NotFound } from "@/widgets/not-found";

export const LikeContent = () => {
  const { lovedTracks } = useSelector(lovedSelector);
  const { selectedFilters } = useSelector(filterSelector);
  
  const hasActiveFilters = selectedFilters.Genre.length > 0 || selectedFilters.Type.length > 0 || selectedFilters.Instruments.length > 0;

  const showNotFound = hasActiveFilters && lovedTracks.length === 0;
  const showLoveNot = !hasActiveFilters && lovedTracks.length === 0;
  const showContent = lovedTracks.length > 0 || hasActiveFilters;

  return (
    <>
      {showContent && <Sort />}

      {showLoveNot && <LoveNot />}
      {showNotFound && <NotFound text="Ничего не найдено" />}

      {lovedTracks.length > 0 && <SoundContent data={lovedTracks} />}
    </>
  )
}
