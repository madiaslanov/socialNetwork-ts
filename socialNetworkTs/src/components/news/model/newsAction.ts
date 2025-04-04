import {GET_TREND_NEWS_SUCCESS} from "./newsTypes.ts";

export const getTrendNewsSuccess = (trendNews: any) => ({
    type: GET_TREND_NEWS_SUCCESS,
    payload: trendNews
})