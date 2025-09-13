import { useState } from "react";
import "./App.css";
import AllCards from "./Components/AllCards";
import Navbar from "./Components/Navbar";

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  const [showCart, setShowCart] = useState(false);
   let totalCost=cartDetails.reduce((acc,item)=>{
      return acc+item.price;
       
   },0);
  function handleRemove(id){
    let updatedCartDdetails=cartDetails.filter((item)=>item.id!=id)
    setCartDetails(updatedCartDdetails);
  }
  

  return (
    <div className="flex flex-col items-center gap-2 w-full min-h-screen bg-gray-100">
      <Navbar
        cartDetails={cartDetails}
        onCartClick={() => setShowCart(!showCart)}
      />

      {showCart ? (
       
        <div className="w-full max-w-5xl p-4 flex flex-col gap-6">
          <h2 className="text-2xl font-bold border-b pb-2">Shopping Cart</h2>

          {cartDetails.length > 0 ? (
            <div className="flex flex-col gap-4">
              {cartDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleRemove(item.id)} 
                  >
                    Remove
                  </button>
                </div>
              ))}

             
              <div className="mt-6 p-4 border-t flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>
      
                  ${totalCost}
                </span>
              </div>

             
              <div className="flex justify-end">
                <button
                  className="px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600"
                 
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-lg text-center">
              Your cart is empty
            </p>
          )}
        </div>
      ) : (
        <AllCards
          cartDetails={cartDetails}
          setCartDetails={setCartDetails}
        />
      )}
    </div>
  );
}

export default App;
