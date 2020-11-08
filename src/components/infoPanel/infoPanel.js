import React from "react";
import MyContext from '../myContext/myContext';

const InfoPanel =() => {

	return  (
		
		<MyContext.Consumer>
			{
				(value) => {
					return (
						<div className="name">
							myName is {value.name}, age {value.age}
						</div>
					)
				}
			}
		</MyContext.Consumer>

	)

}

export default InfoPanel;
