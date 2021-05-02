import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCard from "react-tinder-card";

import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import {Chat} from "@material-ui/icons";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="app">

        <Router>

            <Switch>

                <Route path="/chat">

                    {/*    Header   */}
                    {/* backbutton is going to take to home*/}
                    <Header backButton="/"/>

                    <Chats />
                </Route>


                <Route path="/">

                    {/*    Header   */}
                    <Header />

                    <TinderCards />
                    <SwipeButtons />
                </Route>

            </Switch>



        </Router>

    </div>
  );
}

export default App;



// {/*    end of Header*/}
//
// {/*    Tinder Cards     */}
// {/*    Buttons below the tinder cards    */}
//
// {/*    Chats screen, then we click on the top right icon    */}
// {/*    Individual chat screen   */}
