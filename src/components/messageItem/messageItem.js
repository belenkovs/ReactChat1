import React from 'react';
import {Row,Col} from 'react-bootstrap';

const MessageItem = () =>{
	return (
		<Row>
			<Col  xs={1} md={1}  >user</Col>
			<Col>text</Col>
	  	</Row>
		)
}

export default MessageItem;
