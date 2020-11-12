const messageLoaded =(messages) =>{
	return {
		type: 'MESSAGE_LOADED',
		payload:messages
	};
};

const messageRequested = ()=>{
	return {
		type: 'MESSAGE_REQUESTED',
	}
}

const messageError=()=>{
	return {
		type:'MESSAGE_ERROR'}
}


const messageSend =(newMessage) =>{
	console.log('reduser messageSend')
	return {
		type: 'MESSAGE_SEND',
		payload:newMessage
	};
};

const messageEdit =(newMessage) =>{
	return {
		type: 'MESSAGE_EDIT',
		payload:newMessage
	};
};


export {
	messageLoaded,
	messageRequested,
	messageError,
	messageSend,
	messageEdit

}
