import React from 'react';

function MemoComp({ name }) {
	console.log('%c*Memo Component render*', 'background: #222; color: orange');
	return <div>{name}</div>;
}

export default React.memo(MemoComp);
