import styles from "./Block.module.scss";

import { ReactComponent as CartIcon } from '../icons/cart-empty.svg';
import { ReactComponent as StatsIcon } from '../icons/stats.svg';
import { ReactComponent as HeartIcon } from '../icons/heart-empty.svg';

export default function Block(props) {
	const addToCart = () => { console.log("addToCart") }
	const addToComparison = () => { console.log("addToComparison") }
	const addToFavorites = () => { console.log("addToFavorites") }
  	return (
		<div className={styles.container}>
			<div className={styles.background} style={{backgroundImage: `url(${props.image})`}}/>
			<div className={styles.content + " " + styles.withOverlay}>
				<h2>{props.heading} <span>{props.subheading}</span></h2>
				<p>{props.price} <span>BYN</span></p>
				<div className={styles.overlay}>
					<button onClick={() => addToComparison()}><StatsIcon /></button>    
					<button onClick={() => addToFavorites()}><HeartIcon /></button>
					<button onClick={() => addToCart()}><CartIcon /></button>
				</div>
			</div>
        </div>
  	);
}

export function ButtonBlock(props) {
	return (
		<div className={[styles.container, props.selected ? styles.selected : ""].join(" ")}>
			<div className={styles.background} style={{backgroundImage: `url(${props.image})`}}/>
			<div className={styles.content + " " + styles.noOverlay}>
				<h1>{props.heading} <span>{props.subheading}</span></h1>
			</div>
		</div>
	);
}