import React,{Component} from 'react';
import {Button ,FormControl,InputGroup} from 'react-bootstrap';

import {connect} from "react-redux";
import WithChatService from '../hoc';
import {messageSend,messageEdit} from '../../actions';

class SendPanel extends Component{
	constructor(props){
		super(props);
		this.onSubmit =this.onSubmit.bind(this);
	}

	componentDidMount(){
//		this.props.messageRequested();
		const {ChatService}=this.props;
//		ChatService.getMessageItems()
//		.then(res =>this.props.messageLoaded(res))
//		.catch(error=>this.props.messageError());
//		console.log(`1: ${this.props} `);

	}

	onChange(event){
		console.log(event.target.value);
	}

	onSubmit(e){
		e.preventDefault();
		messageSend();
		console.log('submit');
	}


	render(){
		return (
			<InputGroup className="mb-3" onSubmit={this.onSubmit} as="form">
			<FormControl
			  placeholder="Ваше сообщение"
			  aria-label="Ваше сообщение"
			  onChange={(event)=>messageEdit(event.target.value)}
			/>
			<InputGroup.Append>
			  <Button variant="outline-secondary" type="submit" >Отправить</Button>
			</InputGroup.Append>
		  </InputGroup>
		)
	
	}
}

const mapStateToProps= (state) => {
	return {
		newMessage:state.newMessage
	}
}

const mapDispatchToProps = {
	messageSend,
	messageEdit
}


export default WithChatService()(connect(mapStateToProps,mapDispatchToProps)(SendPanel)) ;
