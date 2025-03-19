import { RootState } from "@/app/providers/redux-provider/conf";

export const userSelector = (state: RootState) => state.user;