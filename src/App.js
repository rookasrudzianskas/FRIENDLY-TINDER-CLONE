import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">

        {/*    Header   */}
        <Header />

        <Router>


            <Switch>

                <Route path="/chat">
                    <h1>I am chatpage</h1>
                </Route>


                <Route path="/">
                    <h1>I am hompage</h1>
                </Route>

            </Switch>



        </Router>

    </div>
  );
}

export default App;



{/*    end of Header*/}

{/*    Tinder Cards     */}
{/*    Buttons below the tinder cards    */}

{/*    Chats screen, then we click on the top right icon    */}
{/*    Individual chat screen   */}
