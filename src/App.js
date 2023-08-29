import logo from "./logo.svg";
import "./App.css";
import Quizapp from "./components/quiz";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { WidthNormal } from "@mui/icons-material";

const questionsList = [
  {
    question: "HTML Stands For _______",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    question: "What does CSS stand for _______",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    question: "What does SQL stand for _______",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    question: "What does PHP stand for _______",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    question: "What does XML stand for _______",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
];
function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  console.log(score, "score");
  return (
    <div className="App">
      <Typography variant="h3">Quiz App</Typography>
      {count !== questionsList.length ? (
        <>
          <Quizapp
            quiz={questionsList[count]}
            updateScore={setScore}
            score={score}
            count={count}
            setCount={setCount}
          />
        </>
      ) : (
        <h1>Your Score Is {score}</h1>
      )}
    </div>
  );
}

export default App;
