import { SoundContent } from "@/widgets"
import { useSelector } from "react-redux";
import { lovedSelector } from "@/entities/loved/model/selector";
import { LoveNot } from "./not";
import { Sort } from "@/widgets/sort";
import { filterSelector } from "@/features/filters/model/selector";
import { NotFound } from "@/widgets/not-found";

export const LikeContent = () => {
  const { lovedTracks, isLoading } = useSelector(lovedSelector);
  const { selectedFilters } = useSelector(filterSelector);
  
  const hasActiveFilters = selectedFilters.Genre.length > 0 || selectedFilters.Type.length > 0 || selectedFilters.Instruments.length > 0;

  const showNotFound = hasActiveFilters && lovedTracks.length === 0 && !isLoading;
  const showLoveNot = !hasActiveFilters && lovedTracks.length === 0 && !isLoading;
  const showSort = (lovedTracks.length > 0 || hasActiveFilters) && !isLoading;

  return (
    <>
      {showSort && <Sort />}

      {showLoveNot && <LoveNot />}

      {showNotFound && <NotFound text="Ничего не найдено" />}

      <SoundContent data={lovedTracks} isLoading={false} />
    </>
  )
}
