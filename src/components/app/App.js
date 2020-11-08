import React from "react";

import "./App.css";
import MyContext  from "../myContext/myContext";
import InfoPanel from "../infoPanel/infoPanel";
import MessageList from "../messageList/messageList";

function App() {
	  return (    
		<div className="App">

			<MyContext.Provider value={{
				name : 'ivan',
				age : 30
				}}>
				<h1>Hi</h1>
				<InfoPanel/>
				<MessageList/>

			</MyContext.Provider>

		</div>

	);

}

export default App;
