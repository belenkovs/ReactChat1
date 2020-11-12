import React from 'react';
import {Row,Col} from 'react-bootstrap';

const MessageItem = ({messageItem}) =>{
	const {id,user,txt} = messageItem;
	return (
		<Row>
			<Col  xs={1} md={1}  >{user}</Col>
			<Col>{txt}</Col>
	  	</Row>
		)
}

export default MessageItem;
