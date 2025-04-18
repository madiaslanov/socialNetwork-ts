import {combineReducers} from "redux";
import ProfileReducer from "../components/profile/model/profileReducer";
import usersReducer from "../components/users/model/usersReducer.ts";
import authReducer from "../features/auth/model/authReducer.ts";
import musicReducer from "../components/music/model/musicReducer.ts";
import dialogsReducer from "../components/dialogs/model/dialogsReducer.ts";
import newsReducer from "../components/news/model/newsReducer.ts";

let rootReducer = combineReducers({
    dialogsPages: dialogsReducer,
    profilePages: ProfileReducer,
    usersPages: usersReducer,
    auth: authReducer,
    newsPages: newsReducer,
    musicPages: musicReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;