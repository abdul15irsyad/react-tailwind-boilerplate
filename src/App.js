import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<div className="md:container md:mx-auto my-3">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
