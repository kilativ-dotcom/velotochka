import styles from "./Block.module.scss";
import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from '../icons/cart-empty.svg';
import { ReactComponent as StatsIcon } from '../icons/stats.svg';
import { ReactComponent as HeartIcon } from '../icons/heart-empty.svg';

function Block(props) {
	const addToCart = () => { console.log("addToCart") }
  	return (
		  <div className={styles.container}>
			<div className={styles.background} style={{backgroundImage: `url(${props.image})`}}/>
			<div className={styles.content}>
				<h2>Stels Pilot 950 <span>MD 26 V011</span></h2>
				<p>850 <span>BYN</span></p>
				<div className={styles.overlay}>
					<Link to="/account/comparison"><StatsIcon /></Link>    
					<Link to="/account/favorites"><HeartIcon /></Link>
					<button onClick={() => addToCart()}><CartIcon /></button>
				</div>
			</div>
        </div>
  	);
}

export default Block;