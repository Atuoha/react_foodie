import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Body from './components/Body';
import Single from './components/Single';
import Submit from './components/Submit';
import Header from './components/Header';
import Footer from './components/Footer';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
          <Route exact path='/' component={Body} />
          <Route path="/submit" component={Submit} history={history}/>
          <Route path="/single/:id" component={Single} />
      <Footer />    
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
