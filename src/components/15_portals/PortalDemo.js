import React from 'react';
import ReactDOM from 'react-dom';

// Referensi Portal
// https://codepen.io/gaearon/pen/jGBWpE?__cf_chl_jschl_tk__=629d53d142c3d50e4c43c405cf64de986bddf0f0-1596616465-0-ASFe8u8Y5cba7NxqdV8hXLOIzwiLfEjsKcfmINmkft7k1sH4DupwNnKdDhB-eiaRu63As3XbnaEGEN7JqHjmbnnOVhRhBTKqxFErKW5aP_x3BydXcImkQNRunWb29kdufy1zDmST8SUBaUm49mP3hC-hXaRdLxN2_lphQLfbit1t9lbaQ8GZj8TbMlXmnT5r6cpytif9HSpcE_uwWAwTWIabgTDU8IG9F-_3K_50Vb4uhDuoGLRqsLAmJjviPQpsKi97GznE99gK_8D3IXaFhAUb31vgiBWiBKo7Jov22N7jDHJqAEw75RiAibGFfC-7eE6tlK3MnyLoLtv1mLdFnLxTckI7llObv_No44BfEXN4
// https://codesandbox.io/s/00254q4n6p

// Event still bubble up to Parent Component, even though rendered DOM isn't inside of the Parent Node (in the DOM)
function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById('portal-root')
	);
}

export default PortalDemo;
