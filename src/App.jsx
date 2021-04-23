import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header';
import Catalogue from './Pages/Catalogue'


function App() {
	return (
		<Router>
				<Header/>
				<Route exact path="/">
					<Catalogue />
				</Route>
				<Route exact path="/admin">
					<Catalogue admin={true}/>
				</Route>
		</Router>
	);
}

export default App;
