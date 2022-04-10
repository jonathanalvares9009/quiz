import React from "react";

export default function Modal(props) {
  return (
    <>
      (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold text-center">
                  Congrats you solved all 10 questions 🎉🎉🎉
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => props.show.setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="grid gap-4 grid-cols-1">
                <div className="text-center logo text-black mt-5">
                  Correctly answered: {props.correctAnswersCount}
                </div>
                <div className="text-center logo text-black mt-5">
                  Incorrectly answered: {props.incorrectAnswersCount}
                </div>
                <div className="text-center logo text-black mt-5">
                  Score: {props.score} / 100
                </div>
              </div>
              ​{/*footer*/}
              <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 flex justify-center"
                  type="button"
                  onClick={() => {
                    props.refresh.setPlayAgain(true);
                  }}
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      )
    </>
  );
}
