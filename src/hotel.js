import React,{useState } from 'react'
import './style.css';
import Menu from './menu';
import MenuCard from './MenuCard';

const Hotel = () => {

  const [menuData,setmenuData]= useState(Menu);

const filterItem = (category) => {
  const updatedList = Menu.filter((curElem)=>{
return curElem.category === category;
 
  });
  setmenuData(updatedList);
};

    return (
        <>
        <div className="navbar">
<button className="btn" onClick={()=> filterItem('Lunch')}>Lunch</button>
<button className="btn"  onClick={()=> filterItem('Breakfast')}>Breakfast</button>
<button className="btn"  onClick={()=> filterItem('Dinner')}>Dinner</button>
<button className="btn"  onClick={()=> setmenuData(Menu)}>all</button>
        </div>
        <MenuCard menuData={menuData} />
    
        </>
    )
}

export default Hotel
