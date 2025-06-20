
import { useState } from "react";

export default function QuizCard({ question, answers, correct }) {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div className="border rounded-lg p-4 my-4 shadow">
      <h2 className="text-lg font-semibold mb-2">{question}</h2>
      <div>
        {answers.map((ans, idx) => (
          <button
            key={idx}
            className={`block w-full text-left px-4 py-2 rounded my-1 ${
              selected === idx
                ? ans === correct
                  ? "bg-green-200"
                  : "bg-red-200"
                : "bg-gray-50"
            }`}
            onClick={() => {
              setSelected(idx);
              setShow(true);
            }}
            disabled={show}
          >
            {ans}
          </button>
        ))}
      </div>
      {show && (
        <div className="mt-2">
          {answers[selected] === correct
            ? <span className="text-green-600 font-bold">Correct!</span>
            : <span className="text-red-600 font-bold">Try Again!</span>}
        </div>
      )}
    </div>
  );
}
