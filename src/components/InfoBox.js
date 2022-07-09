import styles from "./InfoBox.module.scss";

export default function InfoBox(props) {
  	return (
		<div className={styles.container}>
            <h1>{props.heading}</h1>
            <div className={styles.box}>
                {props.children}
            </div>
        </div>
  	);
}

export function Section(props) {
    return (
        <section className={styles.section}>
            <h2>
                {props.icon ? props.icon : ""}
                {props.heading ? props.heading : ""}
            </h2>
            <div className={styles.content}>
                {props.children}
            </div>
        </section>
    );
}