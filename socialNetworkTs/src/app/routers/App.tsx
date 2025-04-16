import '../style/App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Header from "../../components/header/headerContainer.tsx";
import HeaderContainer from "../../components/header/headerContainer.tsx";
import Nav from "../../features/navbar/nav.tsx";
import Preloader from "../../features/preloader/preloader.tsx";
import UsersContainer from "../../components/users/usersContainer.tsx";
import MusicApi from "../../components/music/musicContainer.tsx";
import Track from "../../components/music/ui/track/track.tsx";
import Playlists from "../../components/music/ui/playlists/playlists.tsx";
import Albums from "../../components/music/ui/albums/albums.tsx";
import Album from "../../components/music/ui/albums/album/album.tsx";
import Artists from "../../components/music/ui/artists/artists.tsx";
import Artist from "../../components/music/ui/artists/artist/artist.tsx";
import Settings from "../../components/settings/settings.tsx";
import DialogsContainer from "../../components/dialogs/dialogsContainer.tsx";
import NewsContainer from "../../components/news/newsContainer.tsx";
import ProfileContainer from "../../components/profile/profileContainer.tsx";


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
                                <Route path="/profile/:userID?" element={<ProfileContainer/>}/>
                                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                                <Route path="/news/general" element={<NewsContainer/>}/>
                                <Route path="/music" element={<MusicApi/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/login" element={<HeaderContainer/>}/>
                                <Route path="/music/artists" element={<Artists/>}/>
                                <Route path="/music/artist/:id" element={<Artist/>}/>
                                <Route path="/music/albums" element={<Albums/>}/>
                                <Route path="/music/playlists" element={<Playlists/>}/>
                                <Route path="/music/artist/track/:id" element={<Track/>}/>
                                <Route path="/music/album/:id" element={<Album/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}

export default App
