import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="container">
                    <span>
                        <Link to="/">QACenter</Link>
                    </span>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
