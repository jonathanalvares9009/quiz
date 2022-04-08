import "./index.css";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Categories from "./categories/Categories";
import categories from "./categories/categoryList";
import CategoryContext from "./categoryContext";
import Questions from "./questions/Questions";

const queryClient = new QueryClient();

function App() {
  const [category, setCategory] = useState(categories[0].value);

  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <QueryClientProvider client={queryClient}>
        <CategoryContext.Provider value={{ category, setCategory }}>
          <h1 className="logo">Quiz App</h1>
          <Categories />
          <Questions />
        </CategoryContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
