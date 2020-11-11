import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/";
//import reportWebVitals from "./reportWebVitals";

import {Provider} from 'react-redux';
import {BrowserRouter  as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import ChatService from './service/chat-service';
import ChatServiceContext from './components/chat-service-context'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'; 


const chatService = new ChatService;

ReactDOM.render(
	<Provider store={store}>
<ErrorBoundry>
	<ChatServiceContext.Provider value={chatService}>
		<Router>
		<App />
		</Router>
	</ChatServiceContext.Provider>
</ErrorBoundry>
</Provider>
,
document.getElementById("root")
);
