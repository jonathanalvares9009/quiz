import "./index.css";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Categories from "./categories/Categories";
import categories from "./categories/categoryList";
import QuizContext from "./quizContext";
import Questions from "./questions/Questions";

const queryClient = new QueryClient();

function App() {
  const [category, setCategory] = useState(categories[0].value);
  const [selected, setSelected] = useState(0);
  const [index, setIndex] = useState(0);
  const [indexChanged, setIndexChanged] = useState(0);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <QuizContext.Provider
          value={{
            category,
            setCategory,
            selected,
            setSelected,
            index,
            setIndex,
            indexChanged,
            setIndexChanged,
          }}
        >
          <h1 className="logo">Quiz App</h1>
          <Categories />
          <Questions />
        </QuizContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
