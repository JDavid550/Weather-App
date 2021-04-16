import React from 'react'
import logo from '../images/partlycloudyday.png'


class Container_result extends React.Component{
    render(){
        return <div className="Container__result">
        <div className="Search_bar">
            <input 
                type="text" 
                id="parameter" 
                placeholder="City"
                onChange = {this.props.onChange}
                />
            <button onClick={this.props.onClick}>Search Button</button>
            
        </div>
        <div className="Results__pane">
            <img src={logo} alt="Weather Image"/>
            <h1>{this.props.Temperature}</h1>
            <h2>{this.props.Description}</h2>
            <div className="Date">
            <h3>{this.props.Date}</h3>
            <h3>{this.props.Time}</h3> 
            </div>
            

            <h3>Credits</h3>
        </div>
    </div>

}
}

export default Container_result