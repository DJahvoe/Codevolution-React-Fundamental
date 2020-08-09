import React from 'react';

function Columns() {
	const items = [];
	return (
		// <React.Fragment>
		// 	{items.map((item) => {
		// 		<React.Fragment key={item.id}>
		//             <h1>Title</h1>
		//             <p>{item.title}</p>
		//         </React.Fragment>;
		// 	})}
		// 	<td>Name</td>
		// 	<td>Sav</td>
		// </React.Fragment>

		// Fragment shorthand (can't use key)
		<>
			<td>Name</td>
			<td>Sav</td>
		</>
	);
}

export default Columns;
