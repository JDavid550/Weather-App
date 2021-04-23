import React from 'react'


function Dashboard_forecast (props){

    let weekInMiliseconds = 1000*60*60*24
    let today = new Date()

    function forecast(n) {
        
        let sum = today.getTime() + (n*weekInMiliseconds)
        let forecast = new Date(sum).toDateString().split('2021')     
        return forecast
    }
    
    return <div className="Dashboard__forecast">
        <div className="Forecast">
            <h3>{forecast(1)}</h3>
            <img src={`http://openweathermap.org/img/wn/${props.Icon1}@2x.png`} alt=""/>
            <h2>{props.Day1}ºC</h2>
        </div>
        <div className="Forecast">
            <h3>{forecast(2)}</h3>
            <img src={`http://openweathermap.org/img/wn/${props.Icon2}@2x.png`} alt=""/>
            <h2>{props.Day2}ºC</h2>
        </div>
        <div className="Forecast">
            <h3>{forecast(3)}</h3>
            <img src={`http://openweathermap.org/img/wn/${props.Icon3}@2x.png`} alt=""/>
            <h2>{props.Day3}ºC</h2>
        </div>
        <div className="Forecast">
            <h3>{forecast(4)}</h3>
            <img src={`http://openweathermap.org/img/wn/${props.Icon4}@2x.png`} alt=""/>
            <h2>{props.Day4}ºC</h2>
        </div>
    </div>


}

export default Dashboard_forecast