// import { Dropdown, Selection } from 'react-dropdown-now';
import { useState } from "react";
import './dropdown.css';

function DropDown() {
    var items=["yes","Probably Not"];
    const [opt,setOpt] = useState([false]);
    return (  
    <div className="body">
      <div class="dropdown">
    <h3>Should You Use a Dropdown?</h3>
    <button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
    {/* {items.map((ele)=>{
      <a>{ele}</a>
    })}   */}
    <li>{items[0]}</li>
    <li>{items[1]}</li>
  </div>
</div>
    </div> 
    
    );
  }

  
  export default DropDown;