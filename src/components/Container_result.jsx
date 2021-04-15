import React from 'react'
import logo from '../images/partlycloudyday.png'


class Container_result extends React.Component{
    render(){
        return <div className="Container__result">
        <div className="Search_bar">
            <h2>Search</h2>
            <h2>Search Button</h2>
        </div>
        <div className="Results__pane">
            <img src={logo} alt="Weather Image"/>
            <h1>{this.props.Temperature}</h1>
            <h2>{this.props.Description}</h2>
            <h3>Date</h3>
            <h3>Credits</h3>
        </div>
    </div>

}
}

export default Container_result