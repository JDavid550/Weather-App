import React from 'react'
import logo from '../images/partlycloudyday.png'

class App extends React.Component{
    render(){
        return <div className="Container">
            <div className="Container__result">
                <div className="Search_bar">
                    <h2>Search</h2>
                    <h2>Search Button</h2>
                </div>
                <div className="Results__pane">
                    <img src={logo} alt=""/>
                    <h1>Temp</h1>
                    <h2>Description</h2>
                    <h3>Date</h3>
                    <h3>Credits</h3>
                </div>
            </div>
            <div className="Container__dashboard">
                <h2 className="highlights">The next days forecast</h2>
                <div className="Dashboard__forecast">
                    <div className="Forecast">
                        <h2>Forecast section</h2>
                    </div>
                    <div className="Forecast">
                        <h2>Forecast section</h2>
                    </div>
                    <div className="Forecast">
                        <h2>Forecast section</h2>
                    </div>
                    <div className="Forecast">
                        <h2>Forecast section</h2>
                    </div>
                </div>
                <div className="Dashboard__results">
                    <h2 className="highlights">Today´s hightlights</h2>
                    <div className="Dashboard__results--row">
                        <div className="Result__container">
                            <h2>Pressure</h2>
                        </div>
                        <div className="Result__container">
                            <h2>Humidity</h2>   
                        </div>
                    </div>
                    <div className="Dashboard__results--row">
                        <div>
                            <h2 className="Result__container">Visibility</h2>
                        </div>
                        <div className="Result__container">
                            <h2>Air Pressure</h2>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App