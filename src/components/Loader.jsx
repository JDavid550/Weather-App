import React from 'react'

function Loader() {
    return ( <div className="Container">
    <div className="Container__result">
        
    </div>

    <div className="Container__dashboard">
        <h2 className="highlights">The next days forecast</h2>
        <hr className="line"/>

        <div className="Dashboard__forecast">
            <div className="Forecast">

            </div>
            <div className="Forecast">
                
            </div>
            <div className="Forecast">
                
            </div>
            <div className="Forecast">
                
            </div>
        </div>

        <div className="Dashboard__results">
        <h2 className="highlights">Today´s hightlights</h2>
        <hr className="line"/>
        <div className="Dashboard__results--row">
            <div className="Result__container">
                <h2>Pressure</h2>
                
            </div>
            <div className="Result__container">
                <h2>Humidity</h2>
                
            </div>
        </div>
        <div className="Dashboard__results--row">
            <div className="Result__container">
                <h2>Clouds</h2>
                <h2></h2>
            </div>
            <div className="Result__container">
                <h2>Wind Speed</h2>   
                
            </div>
        </div>
    </div>
        
    </div>
    </div>)
}

export default Loader