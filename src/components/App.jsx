import React from 'react'
import Container_result from './Container_result.jsx'
import Dashboard_forecast from './Dashboard_forecast.jsx'
import Dashboard_result from './Dashboard_results.jsx'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            loading:false,
            error:null,
            data:{},
            parameter: 'Bogota',
            date :{
                date:new Date().toDateString(),
                time: new Date().toLocaleTimeString()
            }  
            
        }

        //this.API = `https://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=04796f77ba3f29c9fdadc0f4ed34314a`

        this.fetchData = async()=>{

            this.setState({loading:true})
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.parameter}&units=metric&appid=04796f77ba3f29c9fdadc0f4ed34314a`)
                const data = await response.json()
                console.log(data)
                const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,current,hourly,alerts,minutely&units=metric&appid=04796f77ba3f29c9fdadc0f4ed34314a`)
                const secondData = await secondResponse.json()
                console.log(secondData)
                this.setState({loading:false, data})
            } catch (error) {
                console.log('fetch error', error)
            }
            
        }

        this.handleChange = (e)=>{
            this.setState({parameter: e.target.value})
        }

        this.handleClick = () => {
            this.fetchData()
        }
        
        
    }
    
    componentDidMount(){
        this.fetchData()
        
    }
    render(){
        
        if (this.state.data.main == undefined) {
            return <h1>Loading</h1>
        }

        return <div className="Container">

            <Container_result 
                Temperature = {this.state.data.main.temp || 'Temperature'} 
                Description = {this.state.data.weather[0].description || 'Description'}
                City = {this.state.parameter}
                onChange = {this.handleChange}
                onClick = {this.handleClick}
                Date = {this.state.date.date}
                Time = {this.state.date.time} />

            <div className="Container__dashboard">
                <h2 className="highlights">The next days forecast</h2>
                <hr className="line"/>
                <Dashboard_forecast/>

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