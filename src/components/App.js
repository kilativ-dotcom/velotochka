import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import styles from "./App.module.scss";
import "../utilities/_global.scss";

import {ReactComponent as Logo} from "../icons/logo.svg";

import Header from "./Header";
import Menu from "./Menu";

// pages
import Home from "./Home";

function App() {
	return (
		<Router>
			<Header />
			<div className={styles.container}>
				<Logo className={styles.mainLogo}/>
				<Menu />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}
  
export default App;
