import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";
import Cryptos from "../../containers/Cryptos";

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Series}/>
    <Route path="/series/:id" component={SingleSeries} />
    <Route path="/cryptos" component={Cryptos}/>

  </Switch>
)

export default Main;
