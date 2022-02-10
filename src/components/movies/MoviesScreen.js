import { Redirect, Route, Switch } from "react-router-dom";
import { Menu } from "../menu/Menu";
import { MovieDetail } from "./MovieDetail";
import { NowPlaying } from "./NowPlaying";
import { Populars } from "./Populars";

export const MoviesScreen = () => {

    return (
        <div className="animate__animated animate__fadeIn">
            <Menu/>

            <div className='grid-container mt-4'>
                <Switch>
                    <Route path='/now_playing' component={ NowPlaying }/>
                    <Route path='/populars' component={ Populars }/>
                    <Route path='/movie/:movieId' component={ MovieDetail }/>
                    <Redirect to="/now_playing" />
                </Switch>
            </div>
        </div>

    );
};