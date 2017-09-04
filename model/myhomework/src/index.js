import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Work from './work';
import Begin from './begin';
import registerServiceWorker from './registerServiceWorker';
const Child = ({ match }) => {
  console.log(match);
  let arr = [
    {app:<App />},
    {about:<About />},
   {contact:<Contact />},
   {work:<Work />},
   {begin:<Begin />}
  ];
  let r = arr.find((e)=>e[match.params.id]);
  return (r[match.params.id])
}
ReactDOM.render(  <Router>
					<div>

					  {/*
					   <Route exact path="/app" component={App}/>
					  <Route path="/about" component={About}/>
					    */}
					<Route exact path="/" component={Begin}/>
					  <Route path="/:id"  render={({ match }) => {
						  console.log(match);
						  let arr = [
						   {begin:<Begin />},
						    {app:<App />},
						    {about:<About />},
						   {contact:<Contact />},
						   {work:<Work />}
						  ];
						  let r = arr.find((e)=>e[match.params.id]);
						  return (r[match.params.id])
						}}/>
							 </div>
						</Router>
							, document.getElementById('root'));
