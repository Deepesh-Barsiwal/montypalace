import React from 'react'

const MenuCard = ({menuData}) => {
return(
<>
<div className="card-container">
   {
    menuData.map((curElem) => {
    
return(
    <div className="card" key ={curElem.id}>
<div className="card-body">
<span className="card-circle">{curElem.id}</span>
<span className="card-category">{curElem.category}</span>
<h2 className="card-heading">{curElem.dish}</h2>
<p className="card-text">{curElem.description}</p>
<img className="card-img" src={curElem.image}/>
<div className="card-btn">
<button>ORDER NOW</button>
</div>
</div>
</div>
)

})
   }
    </div> 

</>

)
}

export default MenuCard
