// import React from 'react';
// import Menulist from './menulist';
// import PageNotFound from './pageNotFound';
// import MenuDescription from './menuDescription';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// const App = () => {
// return (
// <div>
// <BrowserRouter>
// <Routes>
// <Route path='/' element={<Menulist />}></Route>
// <Route path='/menu-description/id' element={<MenuDescription />}></Route>
// <Route path='*' element={<PageNotFound />}></Route>
// </Routes>
// </BrowserRouter>
// </div>
// )
// }
// export default App

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jsonResponse } from "./utils";
import Header from "./header";

const MenuDescription = () => {
  const params = useParams();
  const [description, setDescription] = useState([]);
  console.log( "location", params);
  useEffect(() => {

    // console.log(jsonResponse, 'jsonResponse')

    const result = jsonResponse.filter((item) => {
      console.log(item.id == params.id, params.id, 'id', item.id )
      return item.id == params.id;
    });
    setDescription(result);
  }, []);

  return (
    <div>
       <Header />
      <h2>menuDescription</h2>
      {description.map((item) => {
        return (
          <div key={item.id} style={{ textAlign: "center" }}>
            <img src={item.img} style={{ width: "80%" }} />
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuDescription;
