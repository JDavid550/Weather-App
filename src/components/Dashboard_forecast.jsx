import React from 'react'


function Dashboard_forecast (props){
    return <div className="Dashboard__forecast">
        <div className="Forecast">
            <img src={`http://openweathermap.org/img/wn/${props.Icon1}@2x.png`} alt=""/>
            <h2>{props.Day1}ºC</h2>
        </div>
        <div className="Forecast">
            <img src={`http://openweathermap.org/img/wn/${props.Icon2}@2x.png`} alt=""/>
            <h2>{props.Day2}ºC</h2>
        </div>
        <div className="Forecast">
            <img src={`http://openweathermap.org/img/wn/${props.Icon3}@2x.png`} alt=""/>
            <h2>{props.Day3}ºC</h2>
        </div>
        <div className="Forecast">
            <img src={`http://openweathermap.org/img/wn/${props.Icon4}@2x.png`} alt=""/>
            <h2>{props.Day4}ºC</h2>
        </div>
    </div>


}

export default Dashboard_forecast