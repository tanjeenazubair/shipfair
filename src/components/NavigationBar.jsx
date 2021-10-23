import React from 'react';
import '../stylesheets/NavigationBar.scss';

export const NavigationBar = (props) => {
    return (
        <div className="navigation_bar">
            <div className="navigation_bar_links">
                <div className="navbar_logo">
                    <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1603986512881x847913222560032400%2Fshipfair%2520core%2520logo%25201-02.png?w=128&h=128&auto=compress&fit=crop&dpr=2" alt="Shipfair" />
                </div>
                <div className="navbar_links">
                    <ul>
                        <li>HOME</li>
                        <li>PACKAGES</li>
                        <li>TRIPS</li>
                        <li>CONTACT</li>
                        <li>LOG OUT</li>
                    </ul>
                </div>
            </div>
            <div className="navigation_bar_content">{props.greeting}</div>
        </div>
    )
}
