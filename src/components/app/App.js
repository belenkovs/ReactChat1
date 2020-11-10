import React from "react";
import AppHeader from '../app-header';
import {MainPage} from '../pages';

import {Route,Switch} from 'react-router-dom'

function App() {
	  return (    
		<div className="App">
			<AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route exact component={MainPage}/>
            </Switch>
		</div>

	);

}

export default App;
