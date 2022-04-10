import "./index.css";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Categories from "./categories/Categories";
import categories from "./categories/categoryList";
import QuizContext from "./quizContext";
import Questions from "./questions/Questions";
import Modal from "./Modal";

const queryClient = new QueryClient();

function App() {
  const [category, setCategory] = useState(categories[0].value);
  const [selected, setSelected] = useState(0);
  const [index, setIndex] = useState(0);
  const [indexChanged, setIndexChanged] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(new Map());
  const [refresh, setRefresh] = useState(true);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);

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
            hasAnswered,
            setHasAnswered,
            refresh,
            setRefresh,
            score,
            setScore,
            setShowModal,
            playAgain,
            setPlayAgain,
          }}
        >
          <h1 className="logo">Quiz App</h1>
          <Categories />
          <Questions />
          {showModal && (
            <Modal
              show={{ showModal, setShowModal }}
              refresh={{ setPlayAgain }}
            />
          )}
        </QuizContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
