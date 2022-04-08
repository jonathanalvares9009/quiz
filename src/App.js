import "./index.css";
import React, { useState } from "react";

import Categories from "./categories/Categories";
import categories from "./categories/categoryList";
import CategoryContext from "./categoryContext";

function App() {
  const [category, setCategory] = useState(categories[0].value);

  return (
    <div className="App">
      <CategoryContext.Provider value={{ category, setCategory }}>
        <h1 className="logo">Quiz App</h1>
        <Categories className="flex justify-center" />
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
