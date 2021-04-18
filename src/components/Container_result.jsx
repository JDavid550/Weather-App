import React from 'react'



class Container_result extends React.Component{
    render(){
        return <div className="Container__result">
        <div className="Search_bar">
            <input className="Search_bar-Input"
                type="text" 
                id="parameter" 
                placeholder="City"
                onChange = {this.props.onChange}
                onKeyDown = {this.props.onKeyDown}
                />
            <button className="Search_bar-Button" onClick={this.props.onClick}><img className="Search_bar-Button--Icon" src="https://img.icons8.com/ios-filled/64/ffffff/worldwide-location--v1.png"/></button>
            
        </div>
        <div className="Results__pane">
            <img className="WeatherImage" src = {`http://openweathermap.org/img/wn/${this.props.Icon}@2x.png`}  alt="Weather Image"/>
            <h1>{this.props.Temperature}ºC</h1>
            <h2 className="Description">{this.props.Description}</h2>
            <div className="Date">
            <h3>{this.props.Date}</h3>
            <h3>{this.props.Time}</h3> 
            </div>
            <p>A J.David.A.Sarmiento App</p>
        </div>
    </div>

}
}

export default Container_result