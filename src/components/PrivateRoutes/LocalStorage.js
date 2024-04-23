

const SaveLocal = (selected) =>{
    
      

      const getData = localStorage.getItem('booking')
    
      if(getData)
      {
        const arr = []
        const getParse = JSON.parse(getData)
        getParse.map(data => arr.push(data))
        arr.push(selected)
        

        localStorage.setItem('booking',JSON.stringify(arr))

      }

      else
     {
        const arr = []
        arr.push(selected)
        localStorage.setItem('booking',JSON.stringify(arr))

     }
}

export default SaveLocal