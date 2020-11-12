import React,{Component} from "react";
import {connect} from "react-redux";
import WithChatService from '../hoc';
import {messageLoaded,messageRequested,messageError} from '../../actions';
import MessageItem from '../messageItem/messageItem'
import {Container} from 'react-bootstrap';
import Spinner  from '../spinner';
import Error from '../error';

class MessageList extends Component {

	componentDidMount(){
		this.props.messageRequested();
		const {ChatService}=this.props;
		ChatService.getMessageItems()
		.then(res =>this.props.messageLoaded(res))
		.catch(error=>this.props.messageError());

//		console.log(`1: ${this.props} `);

	}

	render(){
		const {messages,loading,error} = this.props;
		console.log(messages);
        if (error){
            return <Error/>
        }

        if (loading){
            return <Spinner/>
		}
		
		return (
			<Container fluid >
				{
					messages.map(messageItem=>{
						return <MessageItem 
							key={messageItem.id}
								messageItem={messageItem}
								/>
					})
				}
			</Container>
		)
	
	}
}
const mapStateToProps =(state) => {
	return {
		messages: state.messages,
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchToProps = {
	messageLoaded,
	messageRequested,
	messageError
}


export default WithChatService()(connect(mapStateToProps,mapDispatchToProps)(MessageList));
