import React from 'react'


function Dashboard_forecast (props){

    const days = [...props.Days.splice(0,4)]
    console.log(days)
    let weekInMiliseconds = 1000*60*60*24
    let today = new Date()

    return days.map((day)=>{
            console.log(days.indexOf(day))
            let sum = today.getTime() + ((days.indexOf(day)+1)*weekInMiliseconds)
            let forecast = new Date(sum).toDateString().split('2021')
            return (
                    <div key={days[days.indexOf(day)].dt} className="Forecast">
                        <h3>{forecast}</h3>
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Icon"/>
                        <h2>{day.temp.day}</h2>
                    </div>
            )
            
            
        })
}

export default Dashboard_forecast