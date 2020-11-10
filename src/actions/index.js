const messageLoaded =(newMessage) =>{
	return {
		type: 'MESSAGE_LOADED',
		payload:newMessage
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
