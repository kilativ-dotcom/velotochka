import styles from "./Grid.module.scss";

function Grid(props) {
    return (
        <div 
            className={styles.grid}
            style={{
                gridTemplateColumns: "1fr ".repeat(props.width)
            }}
        >
            {props.children}
        </div>
    );
}

export default Grid;