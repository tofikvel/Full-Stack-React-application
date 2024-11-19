import { Link } from "react-router-dom";

const HeaderBar = () => {
    return (
        <header className="header-bar">
            <div className="header-bar-left">
                <Link to="/">
                    <h2>Main store</h2>
                </Link>
            </div>
            <div className="header-bar-right">
                <div className="header-cart">
                    <Link to="/">
                        <span>Cart</span>
                    </Link>
                </div>
                <div className="header-user">
                    <Link to="/">
                        <span>Log in</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default HeaderBar;