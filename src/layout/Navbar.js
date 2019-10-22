import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ pageTitle }) => {


    return (
 
        <nav className="navbar-nav navbar-expand-lg navbar-light bg-light mb-3 p-3">

            <a href="/" className="navbar-brand"><i className="fas fa-cat"></i> {pageTitle}</a>

            <ul className="navbar-nav ml-auto">

                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/adduser" className="nav-link">Add User</Link>
                </li>
                <li className="nav-item">
                    <Link to="/github" className="nav-link">Project Files</Link>
                </li>

            </ul>

        </nav> 

    )
}
Navbar.propTypes = {
    pageTitle: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    pageTitle: ""
}
export default Navbar;