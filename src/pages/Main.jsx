import React from 'react'


import Container_result from '../components/Container_result.jsx'
import Dashboard_forecast from '../components/Dashboard_forecast.jsx'
import Dashboard_result from '../components/Dashboard_results.jsx'
import Loader from '../components/Loader.jsx'



class Main extends React.Component{

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
            console.log(e)
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
            this.props.history.push('/404')
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
            <div className="Dashboard__forecast">   
                <Dashboard_forecast
                        Days = {this.state.secondData.daily || [1,2,3,4]}
                        
                />
            </div>
                

                <Dashboard_result 
                    Pressure= {this.state.data.main.pressure || 'Pressure'}
                    Humidity= {this.state.data.main.humidity || 'Humidity'}
                    Clouds= {this.state.data.clouds.all || 'Clouds'}
                    WindSpeed= {this.state.data.wind.speed || 'WindSpeed'}/>
                
            </div>
        </div>
    }
}

export default Main