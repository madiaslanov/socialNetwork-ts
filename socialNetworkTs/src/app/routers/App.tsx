import '../style/App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Header from "../../components/header/headerContainer.tsx";
import HeaderContainer from "../../components/header/headerContainer.tsx";
import Nav from "../../features/navbar/nav.tsx";
import Preloader from "../../features/preloader/preloader.tsx";
import UsersContainer from "../../components/users/usersContainer.tsx";


const App = () => {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-AllSection">
                    <Nav/>
                    <div className="content">
                        <Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path="/profile/:userID?" element={<ProfileApi/>}/>
                                <Route path="/dialogs/*" element={<Dialogs/>}/>
                                <Route path="/news/general" element={<News/>}/>
                                <Route path="/music" element={<MusicApi/>}/>
                                <Route path="/settings" element={<Set/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/login" element={<HeaderContainer/>}/>
                                <Route path="/music/artists" element={<Artists/>}/>
                                <Route path="/music/artist/:id" element={<Artist/>}/>
                                <Route path="/music/albums" element={<Albums/>}/>
                                <Route path="/music/playlists" element={<Playlists/>}/>
                                <Route path="/music/artist/track/:id" element={<Track/>}/>
                                <Route path="/music/album/:id" element={<Album/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}

export default App
