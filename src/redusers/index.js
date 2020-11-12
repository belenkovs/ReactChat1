const initialState = {
	messages : [],
	loading : true,
	error : false,
	currentUser : [],
	userlist : [],
	newMessage: [],
	lastMessage:0
}

const reducer =(state = initialState,action)=>{
	console.log(state);
	switch(action.type){
		case 'MESSAGE_LOADED':
			return {
				...state,
				messages: action.payload,
				loading:false,
				error:false,
			};

		case 'MESSAGE_REQUESTED':
			return {
				...state,
				messages: state.messages,
				loading:true,
				error:false,
		};

		case 'MESSAGE_ERROR':
			return {
				...state,
				messages: state.messages,
				loading:true,
				error:false,
		};		
		case 'MESSAGE_SEND':
			preventDefault();

			return {
				...state,
				newMessage:action.newMessage,
		};		
		case 'MESSAGE_EDIT':
			return {
				...state,
				newMessage:action.newMessage,
		};		
		
	
		default:
			return state;

	}


}

export default reducer;
