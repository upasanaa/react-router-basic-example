import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, browserHistory} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/address' component={Address} />
                    <Route component={NotFound} />
                </Switch>

            </BrowserRouter>

        )
    }
}

const Home = () => (
<h1> Hello this is react-router home..! </h1>);
const Address = () => (
<h1> This is address page for react-router example !</h1>);
const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

export default App;