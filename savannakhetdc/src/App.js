import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Modal from './Modal';
import Sidebar from './Navbar/Sidebar';
import Title from './Navbar/titles';
import Home from './Home/Home';
import Fooder from './footer/footer'
import Score1 from './Score/1/1';
import Score11 from './Score/1/1-1';
import Score12 from './Score/1/1-2';
import Score2 from './Score/2/2';
import Score21 from './Score/2/2-1';
import Score22 from './Score/2/2-2';
import Score3 from './Score/3/3';
import Score31 from './Score/3/3-1';
import Score32 from './Score/3/3-2';
import Document from './document/document';
function App() {
  return (
    <div>
      <Title />
      <Router>
        <Switch>
        <Route exact path="/score/1/" component={Score1} />
        <Route exact path="/score/1/1" component={Score11} />
        <Route exact path="/score/1/2" component={Score12} />
        <Route exact path="/score/2/" component={Score2} />
        <Route exact path="/score/2/1" component={Score21} />
        <Route exact path="/score/2/2" component={Score22} />
        <Route exact path="/score/3/" component={Score3} />
        <Route exact path="/score/3/1" component={Score31} />
        <Route exact path="/score/3/2" component={Score32} />
        <Route exact path="/document" component={Document} />
        <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Modal />
      <Sidebar />
      <br />
      <Fooder />
    </div>
  );
}

export default App;
