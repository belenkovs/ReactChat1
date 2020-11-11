import React from "react";
import AppHeader from '../app-header';
import {MainPage} from '../pages';

import {Route,Switch} from 'react-router-dom';

import {Container} from 'react-bootstrap';

import './App';

function App() {
	  return (    
		<Container className="App" fluid>
			<AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route exact component={MainPage}/>
            </Switch>
		</Container>

	);

}

export default App;
