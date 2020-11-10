const initialState ={
	messages:[],
	loading:true,
	error:false,
	newpost:[],
	currentUser:[],
	userlist:[]
}

const reducer =(state=initialState,action)=>{
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
	

	}


}

export default reducer;
