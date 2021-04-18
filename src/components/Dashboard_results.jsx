import React from 'react'



class Dashboard_result extends React.Component{
    render(){
        return <div className="Dashboard__results">
        <h2 className="highlights">Today´s hightlights</h2>
        <hr className="line"/>
        <div className="Dashboard__results--row">
            <div className="Result__container">
                
                <h2>{this.props.Pressure} hPa</h2>
                <h3>Pressure</h3>
            </div>
            <div className="Result__container">
                
                <h2>{this.props.Humidity} %</h2>   
                <h3>Humidity</h3>
            </div>
        </div>
        <div className="Dashboard__results--row">
            <div className="Result__container">
                
                <h2>{this.props.Clouds} %</h2>
                <h3>Clouds</h3>
            </div>
            <div className="Result__container">
                
                <h2>{this.props.WindSpeed} m/s</h2>
                <h3>Wind Speed</h3>
            </div>
        </div>
    </div>

}
}

export default Dashboard_result