import React from 'react';
import Person from './Person';

function ListRendering() {
	const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
	const nameList = names.map((name, index) => (
		<h2 key={index}>
			{index} {name}
		</h2>
	));

	const persons = [
		{
			id: 1,
			name: 'Bruce',
			age: 30,
			skill: 'React',
		},
		{
			id: 2,
			name: 'Clark',
			age: 25,
			skill: 'Angular',
		},
		{
			id: 3,
			name: 'Diana',
			age: 28,
			skill: 'Vue',
		},
	];

	// Lists and Keys (Key is important for each list)
	const personList = persons.map((person) => (
		<Person key={person.id} person={person} />
	));

	return <div>{nameList}</div>;
}

export default ListRendering;
