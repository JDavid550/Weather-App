import React from 'react'



class Dashboard_result extends React.Component{
    render(){
        return <div className="Dashboard__results">
        <h2 className="highlights">Today´s hightlights</h2>
        <hr className="line"/>
        <div className="Dashboard__results--row">
            <div className="Result__container">
                <h2>Pressure</h2>
                <h2>{this.props.Pressure}</h2>
            </div>
            <div className="Result__container">
                <h2>Humidity</h2>
                <h2>{this.props.Humidity}</h2>   
            </div>
        </div>
        <div className="Dashboard__results--row">
            <div className="Result__container">
                <h2>Clouds</h2>
                <h2>{this.props.Clouds}</h2>
            </div>
            <div className="Result__container">
                <h2>Wind Speed</h2>   
                <h2>{this.props.WindSpeed}</h2>
            </div>
        </div>
    </div>

}
}

export default Dashboard_result