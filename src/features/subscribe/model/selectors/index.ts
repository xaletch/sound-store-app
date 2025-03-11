import { RootState } from "@/app/providers/redux-provider/conf";

export const useSubscribe = (state: RootState) => state.subscribe;