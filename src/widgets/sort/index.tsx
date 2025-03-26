import { FilterItem } from "@/features/filters";
import { filterSelector } from "@/features/filters/model/selector";
import { useGenreQuery, useInstrumentsQuery } from "@/features/filters/model/services";
import { setAllFilters, toggleFilterItem } from "@/features/filters/model/slice";
import { SortData } from "@/features/filters/model/types";
import { FilterButton } from "@/shared/ui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const vanshots: string[] = [
  "Kick",
  "Snare",
  "Hi-Hat",
  "Clap",
  "Tom",
  "Cymbal",
  "Percussion",
  "Sub-bass",
  "Synth bass",
  "Acoustic bass",
  "808 bass",
  "Piano",
  "Guitar",
  "Strings",
  "Brass",
  "Synth leads",
  "Pads",
  "Plucks",
  "Risers",
  "Downers",
  "Sweeps",
  "White noise",
  "Impacts",
  "Whooshes",
  "Reverse sounds",
  "Vocal chops",
  "Ad-libs",
  "Shouts",
  "Breaths",
  "Flutes",
  "Ethnic drums",
  "Chants",
  "Ethnic string instruments",
  "Arpeggios",
  "Stabs",
  "Bells",
  "Chords",
  "Pads",
  "Ambient textures",
  "Nature sounds",
  "Analog kicks",
  "Vinyl noise",
  "Old-school synth sounds",
  "Glitches",
  "Foley",
  "Cinematic sounds"
]

export const Sort = () => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector(filterSelector);
  const [activeFilter, setActiveFilter] = useState<keyof typeof selectedFilters | null>(null);

  console.log('selectedFilters selectedFilters', selectedFilters);

  const { data: instrumentsData } = useInstrumentsQuery();
  const { data: genresData } = useGenreQuery();

  const handleToggleItem = (category: keyof typeof selectedFilters, value: string | number) => {
    dispatch(toggleFilterItem(category, value));
  };

  const handleSelectAll = (category: keyof typeof selectedFilters,  items: (string | number)[]) => {
    if (category === 'Instruments') {
      const instrumentIds = items as number[];
      const currentSelected = selectedFilters[category] as number[];
      const isAllSelected = instrumentIds.every(id => currentSelected.includes(id));
      
      dispatch(setAllFilters(category, isAllSelected ? [] : instrumentIds));
    } else {
      const stringItems = items as string[];
      const currentSelected = selectedFilters[category] as string[];
      const isAllSelected = stringItems.every(item => currentSelected.includes(item));
      
      dispatch(setAllFilters(category, isAllSelected ? [] : stringItems));
    }
  };

  const getFilterItems = () => {
    if (!activeFilter) return [];
    
    switch(activeFilter) {
      case 'Genre':
        return genresData?.Genres || [];
      case 'Instruments':
        return instrumentsData?.Instruments || [];
      case 'Type':
        return vanshots.map(name => ({ Id: 0, Name: name }));
      default:
        return [];
    }
  };

  const getItemValue = (item: SortData | string): string | number => {
    if (typeof item === 'string') return item;
    return activeFilter === 'Instruments' ? item.Id : item.Name;
  };

  const isItemSelected = (category: keyof typeof selectedFilters, value: string | number) => {
    if (category === 'Instruments') {
      return (selectedFilters[category] as number[]).includes(value as number);
    }
    return (selectedFilters[category] as string[]).includes(value as string);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-1">
        <FilterButton 
          cl={'px-5 min-w-20 400:min-w-[107px] max-w-[107px] w-full md:min-w-[220px]'} 
          onClick={() => setActiveFilter(prev => prev === 'Genre' ? null : 'Genre')}
        >
          Жанр
        </FilterButton>
        <FilterButton 
          cl={"px-2.5 flex-1 min-w-[110px] 380:min-w-[130px]"} 
          onClick={() => setActiveFilter(prev => prev === 'Instruments' ? null : 'Instruments')}
        >
          Инструменты
        </FilterButton>
        <FilterButton 
          cl={"px-3 400:min-w-[107px] max-w-[107px] max-w-[107px] w-full md:min-w-[220px]"} 
          onClick={() => setActiveFilter(prev => prev === 'Type' ? null : 'Type')}
        >
          Ваншоты
        </FilterButton>
      </div>
      
      {activeFilter && (
        <div className="overflow-x-auto mt-4 screen">
          <div className="max-w-5xl flex items-center gap-1">
            <FilterItem
              name="Выбрать все"
              select={selectedFilters[activeFilter].length === getFilterItems().length}
              onClick={() => {
                const items = activeFilter === 'Instruments' 
                  ? instrumentsData?.Instruments.map(i => i.Id) || []
                  : activeFilter === 'Genre'
                  ? genresData?.Genres.map(g => g.Name) || []
                  : vanshots;
                handleSelectAll(activeFilter, items);
              }}
            />
            
            {getFilterItems().map((item) => {
              const value = getItemValue(item);
              const name = typeof item === 'string' ? item : item.Name;

              return (
                <FilterItem
                  key={value}
                  name={name}
                  select={isItemSelected(activeFilter, value)}
                  onClick={() => handleToggleItem(activeFilter, value)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}