import React from 'react'


function Dashboard_forecast (props){
    return <div className="Dashboard__forecast">
        <div className="Forecast">
            <h2>{props.Day1}</h2>
        </div>
        <div className="Forecast">
            <h2>{props.Day2}</h2>
        </div>
        <div className="Forecast">
            <h2>{props.Day3}</h2>
        </div>
        <div className="Forecast">
            <h2>{props.Day4}</h2>
        </div>
    </div>


}

export default Dashboard_forecast