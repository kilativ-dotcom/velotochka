import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import styles from "./App.module.scss";
import "../utilities/_global.scss";

import {ReactComponent as Logo} from "../icons/logo.svg";

import Header from "./Header";
import Menu from "./Menu";

// pages
import Home from "./Home";
import Catalog from "./Catalog";

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
						<Route path="/catalog" element={<Catalog />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}
  
export default App;
