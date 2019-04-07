import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { HomeView } from 'components/home/home-view';
import { AppContextStore } from 'context/app.context';

export class App extends React.Component {
  render() {
    return (
      <AppContextStore>
        <Router>
          <Route exact path={'/'} component={HomeView} />
        </Router>
      </AppContextStore>
    );
  }
}
