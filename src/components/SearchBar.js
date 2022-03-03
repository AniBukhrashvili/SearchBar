
import React,{useState} from "react";

export default function SearchBar(){

    const list = [
        "AniBukhrashvili",
        "Meta",
        "Linkedin",
        "Vincent Riemer",
        "Scott Kyle",
      ];
    
      const [filterList, setFilterList] = useState(list);
    
      const handleSearch = (event) => {
    
        if (event.target.value === "") {
          setFilterList(list);
          return;
        }
        const filteredValues = list.filter(
          (item) =>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
      };


    return(
        <section className="container">
            <div className="search">
                <input id = "myInput" type="text" className="input" placeholder="Search Your Page..." onChange={handleSearch}/>
                <img src="../images/icon.png" className="icon" onClick={() => document.getElementById('myInput').value = ""}/>
            </div>
        <div>
            {filterList &&
                filterList.map((item) => (
                    <div>{item}</div>
        ))}
        </div>
        </section>
        

    )
}
