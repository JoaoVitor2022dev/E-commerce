import{ useEffect, useState } from 'react'

const Store = () => {

 const [ data , setData ] = useState([]); 

 // requisition 
 useEffect(() => {
  
   const fetchData = async () => {
    
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";

    const response = await fetch(url); 

    const json =  await response.json();  

     setData(json.results);  
   }

   fetchData();
   
 },[]); 

console.log(data);

  return (
    <div>
      <h1>Store</h1>
      <div className="products">
           {
           data.map((e) => (
            <div key={e.id}>
                <h4>{e.title}</h4>
                <img src={e.thumbnail} alt="" />
                <h4> R$: {e.price}</h4>
            </div>
           ))
           }
      </div>
    </div>
  )
}

export default Store;
