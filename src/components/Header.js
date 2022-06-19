import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/for-you" className={({isActive}) => isActive ? styles.selected : ""}>
                            For you
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog" className={({isActive}) => isActive ? styles.selected : ""}>
                            Catalog
                        </NavLink>
                    </li>
                    <li>    
                        <NavLink to="/" className={({isActive}) => isActive ? styles.selected : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/workshop" className={({isActive}) => isActive ? styles.selected : ""}>
                            Workshop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? styles.selected : ""}>
                            About us
                        </NavLink>
                    </li>
                    <li style={{ position: 'absolute', right: '20px'}}>
                        <NavLink to="/login" className={({isActive}) => isActive ? styles.selected : ""}>
                            Log in
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;