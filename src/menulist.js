// import React from 'react';
// import {jsonResponse} from './utils'
// import Card from './card'
// const Menulist = () => {
// const handleSelectedCard = (id) => {
// console.log(id, "selectedID")
// }
// return (
// <div>
// <div>menulist</div>
// <div style={{display:'flex', flexWrap:'wrap'}}>
// {jsonResponse.map((item, index)=> {
// return <Card key={item.id} id={item.id} img={item.img} name={item.name}
// selectedCard={handleSelectedCard}/>
// })}
// </div>
// </div>
// )
// }
// export default Menulist

import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jsonResponse } from "./utils";
import Card from "./card";
import { HigerOrderComponent } from "./components/HigerOrderComponent";
import Header from "./header";

const Menulist = () => {
  const navigate = useNavigate();

  const handleSelectedCard = (id) => {
    console.log(id, "selectedID");
    navigate(`./menu-description/${id}`);
  };
  const BestSellerComponent = HigerOrderComponent(Card);

  return (
    <div>
       <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
     
        {jsonResponse.map((item, index) => {
          return (
            <div key={item.id}>
              {item.bestSeller ? (
                <div>

                <BestSellerComponent
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  selectedCard={handleSelectedCard}
                />
                </div>
          
              ) : (
                <div>
                <Card
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  selectedCard={handleSelectedCard}
                />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menulist;

