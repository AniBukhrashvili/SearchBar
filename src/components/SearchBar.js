import React from "react";

export default function SearchBar(props){

  if(!props){
    return null
  }

    return(
        <section className="container">
            <div className="search">
                <input id = "myInput" type="text" className="input" placeholder="Search Your Page..."/>
                <img src="../images/icon.png" className="icon" onClick={() => document.getElementById('myInput').value = ""}/>
            </div>
        </section>
      
    )
}
