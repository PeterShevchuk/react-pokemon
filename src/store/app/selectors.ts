import {RootState} from "../../interfaces/store";

export const getLoadingState = ({ app }: RootState): boolean => app.isLoading;
