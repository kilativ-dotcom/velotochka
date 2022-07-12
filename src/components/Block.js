import styles from "./Block.module.scss";

import { ReactComponent as CartIcon } from '../icons/cart-empty.svg';
import { ReactComponent as StatsIcon } from '../icons/stats.svg';
import { ReactComponent as HeartIcon } from '../icons/heart-empty.svg';

import { Link } from "react-router-dom";

const addToCart = () => { console.log("addToCart") }
const addToComparison = () => { console.log("addToComparison") }
const addToFavorites = () => { console.log("addToFavorites") }

export function SquareBlock(props) {
  	return (
		<div className={styles.square}>
			<div className={styles.background} style={{backgroundImage: `url(${props.image})`}}/>
			<div className={styles.content}>
				<Link className={styles.blockLink} to={"/catalog/id=" + props.id}/>
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
		<div className={[styles.square, props.selected ? styles.selected : ""].join(" ")}>
			<div className={styles.background} style={{backgroundImage: `url(${props.image})`}}/>
			<div className={[styles.content, styles.noOverlayContent].join(" ")}>
				<h1>{props.heading} <span>{props.subheading}</span></h1>
			</div>
		</div>
	);
}
export function CatalogBlock(props) {
	return (
		<div className={styles.card}>
			<div className={styles.square}>
				<div className={styles.background} style={{backgroundImage: `url(${props.image})`}}/>
				<Link className={styles.blockLink} to={"/catalog/id=" + props.id}/>
				<div className={styles.overlay}>
					<button onClick={() => addToComparison()}><StatsIcon /></button>    
					<button onClick={() => addToFavorites()}><HeartIcon /></button>
					<button onClick={() => addToCart()}><CartIcon /></button>
				</div>
			</div>
			<div className={styles.cardCaption}>
				<span>
					<h2 className={styles.subheading}>{props.subheading}</h2>
					<h2 className={styles.heading}>{props.heading}</h2>
				</span>
				<p>{props.price} <span>BYN</span></p>
			</div>
		</div>
	);
}