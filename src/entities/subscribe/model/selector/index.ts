import { RootState } from "@/app/providers/redux-provider/conf";

export const subscribersSelector = (state: RootState) => state.subscribers;