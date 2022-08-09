import styles from "./Filter.module.scss";
import { Children } from "react";

export default function Filter(props) {
	return (
        <div className={styles.filter} style={{backgroundImage : props.image}}>
            {props.name}
            {props.drop ?
                props.children
            : ""}
        </div>
	);
}
export function DropDown(props) {
    return (
        <select className={styles.dropDown}>
            {props.name}
            {Children.map(props.children, (child, index) => {
                return(
                    <option>
                        {child}
                    </option>
                );
            })}
        </select>
	);
}