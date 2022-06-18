import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../utilities/_global.scss";

import Header from "./Header";

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					
				</Routes>
			</main>
		</Router>
	);
}
  
export default App;
