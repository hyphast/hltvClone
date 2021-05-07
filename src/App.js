import './App.css';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Matches from "./Components/Matches/Mathces";
import Results from "./Components/Results/Results";
import Events from "./Components/Events/Events";
import MainTop from "./Components/MainTop/MainTop";

function App() {
  return  <div>
        <Header/>
      <div className='container'>
          <div className='main'>
              <MainTop/>
              <Route path='/news'>
                <News/>
              </Route>
              <Route path='/matches'>
                <Matches/>
              </Route>
              <Route path='/results'>
                <Events/>
              </Route>
              <Route path='/events'>
                  <Results/>
              </Route>
          </div>
      </div>
  </div>
}

export default App;
