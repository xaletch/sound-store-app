import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedLoveItems {
  Жанр: string[];
  Инструменты: string[];
  Ваншоты: string[];
}

interface FilterLoveState {
  activeFilter: string | null;
  selectedItems: SelectedLoveItems;
}

const initialState: FilterLoveState = {
  activeFilter: null,
  selectedItems: {
    Жанр: [],
    Инструменты: [],
    Ваншоты: [],
  },
};

export const filterLoveSlice = createSlice({
  name: 'filter_love',
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<string | null>) {
      state.activeFilter = action.payload;
    },
    setSelectedItems(state, action: PayloadAction<{ filterName: string; items: string[] }>) {
      const { filterName, items } = action.payload;
      state.selectedItems[filterName as keyof SelectedLoveItems] = items;
    },
  },
});

export const { setActiveFilter, setSelectedItems } = filterLoveSlice.actions;
export default filterLoveSlice.reducer;