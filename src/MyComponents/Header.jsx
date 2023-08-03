import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


export default function Header(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.searchTodo(searchTerm);
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand pt-10" to="/" onClick={()=>props.reset()}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" onClick={()=>props.reset()} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      {props.searchBar?(
      <form onSubmit={submit} className="d-flex" role="search">
        <input className="form-control me-2" type="search" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>) : ""}
    </div>
  </div>
</nav>
    </div>
  )
}

Header.defaultProps={
    title: "Your Title",
    searchBar: true
}
Header.propTypes={
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}