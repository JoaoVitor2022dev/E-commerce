import{ useEffect, useState } from 'react'
import { BsFillCartCheckFill, BsFillCartPlusFill  } from 'react-icons/bs'

const Store = () => {

 const [ data , setData ] = useState([]); 
 const [cart , setCart] = useState([]); 

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


 handleClick = (objeto) => {
   const element = cart.find((e) => e.id ===  objeto.id)
   if (element) {
    const arrFiltter = cart.filter((e) => e.id !== objeto.id )
    setCart(arrFiltter); 
  } else {
    setCart([...cart, objeto]); 
  }
 }; 


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
                <button
                 onClick={() => handleClick(e)}
                >
                  {
                    cart.some((itemCart) => itemCart.id === e.id) ? 
                    ( 
                     <BsFillCartCheckFill/>
                    ) : 
                    (
                    <BsFillCartPlusFill/>
                    )
                  }
                </button>
            </div>
           ))
           }
      </div>
    </div>
  )
}

export default Store;
