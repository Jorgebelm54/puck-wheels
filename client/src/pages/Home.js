import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModelA from "./ModelA.js";
import ModelB from "./ModelB.js";
import ModelC from "./ModelC.js";




const Home = () => {

    return (
        <>
            <div className="home-bg">
               
                
                    
                    {/* <div className="logo"></div> */}

                    {/* <div className="navbar"> */}
                    
                
                    {/* <span className="login-btns">
                        <button className="login-btn">
                            <span>Home </span>
                        </button> 
                        <button className="login-btn">
                            <span>Model 2022</span>
                        </button>
                        <button className="login-btn">
                            <span>Model 2021</span>
                        </button> 
                        <button className="login-btn">
                            <span>Inventory</span>
                        </button> 
                        <button  className="login-btn">
                            <span>About</span>
                        </button> 
                        <button className="login-btn">
                            <span>Contact</span>
                        </button> 
                        <button className="login-btn">
                            <span>New</span>
                        </button> 
                        <button className="login-btn">
                            <span>Used</span>
                        </button>  */}
                      
                   
                   
                    {/* </span> */}
                {/* </div> */}
                
            
                <ModelA />
                <ModelB />
                <ModelC />
                
                
              
            </div>


            <footer style={{ display: "flex", width: '100vw', backgroundColor: 'black', padding: '24px', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '80%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>			
                        <p style={{fontSize: '24px', color: 'white', marginBottom: '24px', fontWeight: 'bold'}} ><Link class="a"to ="/">Home</Link> </p>
                        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} ><Link class="a"to ="/About">About</Link></a>
                        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} ><Link class="a"to ="/Contact">Contact</Link></a>
                    
                       
                    </div>                    
                    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>			
                        <p style={{fontSize: '24px', color: 'white', marginBottom: '24px', fontWeight: 'bold'}} ><Link class="a" to ="/Inventory">Inventory</Link></p>
                        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} ><Link class="a"to ="/Used">Used</Link></a>
                        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} ><Link class="a"to ="/New">New</Link></a>
                        
                    </div>                    
                                  
                       
                </div>
                
            </footer>

        </>



    )

}

export default Home;