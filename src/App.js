import React, { useState } from 'react';
import './App.css';
import DeveloperContainer from './Component/Devoloper-Container/DeveloperContainer';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
  

function App() {
  const [cart, setCart] = useState([ ]);
  
  const  handleAddDeveloper = (player) => {
    const newCart = [...cart , player];
    setCart(newCart)
  }
  return (
    <>
    <Header></Header>
            <main className="container ">
              <div className="row">
                    <DeveloperContainer handleAddDeveloper={handleAddDeveloper}></DeveloperContainer>
                    <Sidebar cart={cart}></Sidebar>
                </div>
           </main>
    <Footer></Footer>
    </>
  );
}

export default App;
