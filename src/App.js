import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route} from "react-router-dom";
import landingPage from './pages/landingPage';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import femaleDaily from './reducers'

const store = createStore(
	femaleDaily,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

class App extends Component {
	 constructor(props) {
		super(props);
		this.store = store.getState()
	}

	render() {
		return (
			<Provider store={store}>
			<Router>
				<div className="App">
					<Route exact path="/" component={landingPage} />
				</div>
			</Router>
			</Provider>
			)
		}
}

export default App;