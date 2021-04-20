import React from 'react'
import {Link} from 'react-router-dom'

import Container_result from './Container_result.jsx'
import Dashboard_forecast from './Dashboard_forecast.jsx'
import Dashboard_result from './Dashboard_results.jsx'
import Loader from './Loader.jsx'



class App extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            loading:false,
            error:null,
            data:{},
            secondData :{},
            parameter: 'Bogota',
            date :{
                date:new Date().toDateString(),
                time: new Date().toLocaleTimeString()
            }, 
            
        }

        //this.API = `https://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=04796f77ba3f29c9fdadc0f4ed34314a`

        this.fetchData = async()=>{

            this.setState({loading:true})
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.parameter}&units=metric&appid=04796f77ba3f29c9fdadc0f4ed34314a`)
                const data = await response.json()
                console.log(data)
                this.setState({loading:false, data:data})
                const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.data.coord.lat}&lon=${this.state.data.coord.lon}&exclude=hourly,current,hourly,alerts,minutely&units=metric&appid=04796f77ba3f29c9fdadc0f4ed34314a`)
                const secondData = await secondResponse.json()
                console.log(secondData)
                this.setState({secondData:secondData})
            } catch (error) {
                console.log('fetch error', error)
                this.setState({loading:false ,error:error})
            }
            
        }

        this.handleChange = (e)=>{
            this.setState({parameter: e.target.value})
        }

        this.handleClick = () => {
            this.fetchData()
        }

        this.handleKeyDown = (e)=>{
            if (e.key === 'Enter') {
                this.fetchData()
            }
        }
        
    }
    
    componentDidMount(){
        this.fetchData()
        
    }

    
    render(){
        
        if (this.state.data.cod == '404') {
            return <div className="ErrorPage">
                <h1 className="ErrorPage__title">Error 404</h1>
                <h1 className="ErrorPage__title">Page Not Found</h1>
                <a className="ErrorPage__button">Search another city</a>
            </div>
        }

        if (this.state.data.main == undefined || this.state.secondData.daily == undefined || this.state.data.coord == undefined) {
            return <Loader/>
        }
        

        return <div className="Container">

            <Container_result 
                Icon = {this.state.data.weather[0].icon}
                Temperature = {this.state.data.main.temp || 'Temperature'} 
                Description = {this.state.data.weather[0].description || 'Description'}
                City = {this.state.parameter}
                onChange = {this.handleChange}
                onClick = {this.handleClick}
                onKeyDown = {this.handleKeyDown}
                Date = {this.state.date.date}
                Time = {this.state.date.time}
                Loading = {this.state.loading}
                />
                

            <div className="Container__dashboard">
                <h2 className="highlights">The next days forecast</h2>
                <hr className="line"/>

                <Dashboard_forecast
                    // Days = {this.state.data.daily}
                    Day1 = {this.state.secondData.daily[0].temp.day}
                    Icon1 ={this.state.secondData.daily[0].weather[0].icon} 
                    Day2 = {this.state.secondData.daily[1].temp.day}
                    Icon2 ={this.state.secondData.daily[1].weather[0].icon} 
                    Day3 = {this.state.secondData.daily[2].temp.day}
                    Icon3 ={this.state.secondData.daily[2].weather[0].icon} 
                    Day4 = {this.state.secondData.daily[3].temp.day}
                    Icon4 ={this.state.secondData.daily[3].weather[0].icon} 
                    />

                <Dashboard_result 
                    Pressure= {this.state.data.main.pressure || 'Pressure'}
                    Humidity= {this.state.data.main.humidity || 'Humidity'}
                    Clouds= {this.state.data.clouds.all || 'Clouds'}
                    WindSpeed= {this.state.data.wind.speed || 'WindSpeed'}/>
                
            </div>
        </div>
    }
}

export default App