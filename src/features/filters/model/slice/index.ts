import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedFilters: {
    Genre: string[];
    Type: string[];
    Instruments: number[];
  };
}

const initialState: FilterState = {
  selectedFilters: {
    Genre: [],
    Type: [],
    Instruments: [],
  },
};

type Category = keyof FilterState['selectedFilters'];
type CategoryValue<T extends Category> = 
  T extends 'Instruments' ? number :
  T extends 'Genre' ? string :
  T extends 'Type' ? string :
  never;

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilterItem: {
      prepare<T extends Category>(category: T, value: CategoryValue<T>) {
        return { payload: { category, value } };
      },
      reducer(state, action: PayloadAction<{category: Category; value: string | number;}>) {
        const { category, value } = action.payload;
        const currentArray = state.selectedFilters[category];
        
        if (category === 'Instruments') {
          const numericValue = value as number;
          const index = (currentArray as number[]).indexOf(numericValue);
          
          if (index === -1) {
            (currentArray as number[]).push(numericValue);
          } else {
            (currentArray as number[]).splice(index, 1);
          }
        } else {
          const stringValue = value as string;
          const index = (currentArray as string[]).indexOf(stringValue);
          
          if (index === -1) {
            (currentArray as string[]).push(stringValue);
          } else {
            (currentArray as string[]).splice(index, 1);
          }
        }
      },
    },
    setAllFilters: {
      prepare(category: keyof FilterState['selectedFilters'], values: (string | number)[]) {
        return {
          payload: { category, values }
        };
      },
      reducer(state, action: PayloadAction<{category: keyof FilterState['selectedFilters']; values: (string | number)[]}>) {
        const { category, values } = action.payload;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.selectedFilters[category] = values as any;
      },
    },
  },
});

export const { toggleFilterItem, setAllFilters } = filterSlice.actions;
export default filterSlice.reducer;