const fetchData = async(api)=>{
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log('fetch error', error)
    }
    
}

export default fetchData