import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(){
    return (<div className="ErrorPage">
    <h1 className="ErrorPage__title">Error 404</h1>
    <h1 className="ErrorPage__title">Page Not Found</h1>
    <Link to="/" className="ErrorPage__button">Search another city</Link>
    </div>)
}

export default NotFound