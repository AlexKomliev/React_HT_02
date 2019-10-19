import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Newsfeed from "./components/Newsfeed";

class App extends Component {
	render() {
		return (
			<>
				<Newsfeed/>
			</>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);