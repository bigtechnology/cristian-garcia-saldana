import React from 'react';
import { Route, Switch } from 'react-router';
import { Footer, Gallery, Header } from './components/common';
import LandingPageContainer from './components/pages/LandingPage/LandingPageContainer';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />

        {/* <Route exact path="/contact" component={ContactUsPageContainer} /> */}

        {/* <Route exact path="/about" component={AboutPageContainer} /> */}

        <Route exact path="/gallery" component={Gallery} />

        {/* <Route exact path="/services" component={ServicesPageContainer} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
