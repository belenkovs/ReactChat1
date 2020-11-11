import React from 'react';
import {Button ,FormControl,InputGroup} from 'react-bootstrap';

const SendPanel = () =>{

	return (
		<InputGroup className="mb-3">
		<FormControl
		  placeholder="Ваше сообщение"
		  aria-label="Ваше сообщение"
		/>
		<InputGroup.Append>
		  <Button variant="outline-secondary">Отправить</Button>
		</InputGroup.Append>
	  </InputGroup>
	)
}


export default SendPanel;
