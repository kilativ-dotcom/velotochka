import styles from "./Menu.module.scss";

import { Link } from "react-router-dom";

import { ReactComponent as MenuIcon } from '../icons/menu.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import { ReactComponent as PhoneIcon } from '../icons/phone.svg';
import { ReactComponent as CartIcon } from '../icons/cart-empty.svg';
import { ReactComponent as StatsIcon } from '../icons/stats.svg';
import { ReactComponent as HeartIcon } from '../icons/heart-empty.svg';
import { useState } from "react";

function Submenu(props) {
    return (
        <div 
            className={styles.submenu}
            style={{
                opacity: (props.show ? '1' : '0'),
                pointerEvents: (!props.show ? 'none' : '')
            }}>
                <nav className={styles.column}>
                    <div className={styles.navBlock}>
                        <h2>Bikes</h2>
                        <button>Mountain</button>
                        <button>Teenage</button>
                        <button>Female</button>
                        <button>BMX</button>
                        <button>Double suspended</button>
                        <button>Folding</button>
                        <button>Highway</button>
                        <button>Tourist</button>
                        <button>27”5</button>
                        <button>Fatbikes</button>
                        <button>Cross</button>
                        <button>Hybrid</button>
                    </div>
                    <div className={styles.navBlock}>
                        <h2>Manufacturers</h2>
                        <button>GREENWAY</button>
                        <button>BEARBIKE</button>
                        <button>FORWARD</button>
                        <button>STINGER</button>
                        <button>KROSS</button>
                        <button>MONGOOSE</button>
                        <button>MERIDA</button>
                        <button>AIST</button>
                        <button>STELS</button>
                        <button>CODIFICE</button>
                        <button>BIBI</button>
                    </div>
                </nav>
                <nav className={styles.column}>
                    <div className={styles.navBlock}>
                        <h2>Spares</h2>
                        <button>Wheel</button>
                        <button>Breaks</button>
                        <button>Frame</button>
                        <button>Steering wheel</button>
                        <button>Saddle</button>
                        <button>Fork</button>
                        <button>Pedals</button>
                    </div>
                    <div className={styles.navBlock}>
                        <h2>Accessories</h2>
                        <button>Bike computers</button>
                        <button>Storage</button>
                        <button>Protection</button>
                        <button>Lighting</button>
                        <button>Care</button>
                        <button>Equipment</button>
                        <button>Holders</button>
                    </div>
                    <div className={styles.navBlock}>
                        <h2>Winter goods</h2>
                        <button>Sleigh</button>
                    </div>
                </nav>
                <div className={styles.column}>
                    <h2>Info</h2>
                    <div className={styles.infoBox}>
                        <nav>
                            <ul>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/about">Purchase rules</Link></li>
                                <li><Link to="/about">Shipping</Link></li>
                                <li><Link to="/about">Payment</Link></li>
                                <li><Link to="/about">Installment plan</Link></li>
                                <li><Link to="/about">Warranty</Link></li>
                                <li><Link to="/about">Legal information</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.infoBox}>
                        <h3>Workshop</h3>
                        <span>8 (025) 774 43 06&emsp;</span><strong>Life</strong>
                        <br />
                        <br />
                        <h3>Phone numbers</h3>
                        <span>8 (029) 730 10 24&emsp;</span><strong>МТС</strong><br />
                        <span>8 (029) 129 89 46 &emsp;</span><strong>А1</strong>
                        <br />
                        <br />
                        <h3>Messengers</h3>
                        <span>8 (029) 730 10 24&emsp;</span><strong>Telegram</strong><br />
                        <span>8 (029) 730 10 24 &emsp;</span><strong>Viber</strong>
                    </div>
                </div>
                <div className={styles.column}>
                    <h2>Shop</h2>
                    <div className={styles.mapouter}><div className={styles.gmap_canvas}><iframe width="100%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=%D0%B3.%20%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C,%20%D1%83%D0%BB.%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F,%20%22%D0%A0%D1%8B%D0%BD%D0%BE%D0%BA%20%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%BE%D0%B2%22,%20%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F%203,%20%D0%BC%D0%B5%D1%81%D1%82%D0%BE%2089&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                    <div className={styles.infoBox}>
                        <h3>Stationary point of sale</h3>
                        <span style={{display: "flex", width: '100%', justifyContent: 'space-between'}}><span>MON</span><span>Day off</span></span>
                        <span style={{display: "flex", width: '100%', justifyContent: 'space-between'}}><span>TUE-THU</span><span>9:00 - 16:00</span></span><br />
                        <h3>Online Store</h3>
                        <span style={{display: "flex", width: '100%', justifyContent: 'space-between'}}><span>Daily</span><span>9:00 - 21:00</span></span>
                    </div>
                </div>
        </div>
    );
}

function Menu() {
    const [input, setInput] = useState('');
    const [showSubmenu, setShowSubmenu] = useState(false);
    return (
        <div className={styles.container}>
            <Submenu show={showSubmenu}/>
            <div className={styles.mainMenu}>
                <div className={styles.buttonContainer}>
                    <MenuIcon onClick={() => setShowSubmenu(!showSubmenu)}/>
                    <button 
                        onClick={() => {
                            window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
                            navigator.clipboard.writeText("8 029 129 89 46");
                            window.alert('Copied to clipboard');
                        }}
                    >
                        <PhoneIcon />
                    </button>
                    <a href="https://www.instagram.com/velotochka.by/" target="_blank">
                        <InstagramIcon />
                    </a>
                </div>
                <div className={styles.searchBar}>
                    <label htmlFor="userSearch">
                        <input type="search" id="userSearch" onChange={(e) => setInput(e.target.value) }/>
                    </label>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/account/comparison">
                        <StatsIcon />
                    </Link>
                    <Link to="/account/favorites">                   
                        <HeartIcon />
                    </Link>
                    <Link to="/account/shopping-cart">
                        <CartIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;