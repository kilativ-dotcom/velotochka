import styles from "./Switcher.module.scss";

import React,  { useState } from "react";
import { Children } from "react";

function Switcher(props) {
    const [selected, setSelected] = useState(props.active ? props.active : 0);
	return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.heading}>{props.heading}</h1>
                <ul>
                    {
                        Children.map(props.children, (child, index) => {
                            return (
                                <li>
                                    <button 
                                        className={index === selected ? styles.selected : "" } 
                                        onClick={() => setSelected(index)}
                                    >
                                        {props.switches[index]}    
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {props.children[selected]}
        </div>
	);
}
  
export default Switcher;