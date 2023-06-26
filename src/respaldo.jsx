  const random = () => {
    const vec =new Array(5)
    for (let i = 0; i < vec.length; i++) {
       vec[i] = Math.trunc(Math.random() * 10)
      setNumero(vec)
      
    }
  }
  
  const [numeros, setNumero] = useState([0,0,0,0,0])