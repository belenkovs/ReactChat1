import React from "react";
import MyContext from '../myContext/myContext';
import MessageItem from '../messageItem/messageItem'
import {Container} from 'react-bootstrap';

const MessageList = () => {

	return (
		<Container fluid >
			<MessageItem/>
			<MessageItem/>
		</Container>
	)
}

export default MessageList
