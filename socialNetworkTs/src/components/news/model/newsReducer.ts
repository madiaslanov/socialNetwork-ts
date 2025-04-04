import {newsState, NewsStateActions} from "./newsTypes.ts";

const initialState: newsState = {
    trendNews: []
};

const musicReducer = (state = initialState, action: NewsStateActions): newsState => {
    switch (action.type) {
        case "GET_TREND_NEWS_SUCCESS":
            return {
                ...state,
                trendNews: action.payload
            }
        default:
            return state;
    }
};

export default musicReducer;
