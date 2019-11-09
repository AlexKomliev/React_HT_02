import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import Newsfeed from "./components/Newsfeed";

const App = () => (
	<>
		<Newsfeed/>
	</>
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);