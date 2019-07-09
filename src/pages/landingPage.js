import React, { Component } from 'react';
import Navbar from '../components/Navbar/navbar';
import Home from '../components/Home/home';

class landingPage extends Component {
	render () {
		return (
			<div>
				<Navbar />
				<Home />
			</div>
		)
	}
}

export default landingPage;