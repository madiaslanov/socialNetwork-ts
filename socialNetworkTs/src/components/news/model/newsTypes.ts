export interface newsState {
    trendNews: Array<any>
}


export const GET_TREND_NEWS_SUCCESS = 'GET_TREND_NEWS_SUCCESS';


type GetTrendNewsSuccessAction = { type: typeof GET_TREND_NEWS_SUCCESS, payload: any };


export type NewsStateActions =
    | GetTrendNewsSuccessAction;