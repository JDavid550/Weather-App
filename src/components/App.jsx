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
            data:{}
        }
        this.API = 'https://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=04796f77ba3f29c9fdadc0f4ed34314a'

        this.fetchData = async()=>{

            this.setState({loading:true})
            try {
                const response = await fetch(this.API)
                const data = await response.json()
                console.log(data)
                this.setState({loading:false, data})
            } catch (error) {
                console.log('fetch error', error)
            }
            
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
                Temperature = {this.state.data.main.temp}
                Description = {this.state.data.weather[0].description} />

            <div className="Container__dashboard">
                <h2 className="highlights">The next days forecast</h2>
                <hr className="line"/>
                <Dashboard_forecast/>
                <Dashboard_result 
                    Pressure= {this.state.data.main.pressure}
                    Humidity= {this.state.data.main.humidity}
                    Clouds= {this.state.data.clouds.all}
                    WindSpeed= {this.state.data.wind.speed}/>
                
            </div>
        </div>
    }
}

export default App