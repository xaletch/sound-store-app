import { RootState } from "@/app/providers/redux-provider/conf";

export const useSearchSelector = (state: RootState) => state.tracks;