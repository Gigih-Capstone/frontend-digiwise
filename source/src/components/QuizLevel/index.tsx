import { useEffect } from "react";

import { AxiosError } from "axios";

// store
import modalStore from "../../../store/modalStore";
import quizStore from "../../../store/quizStore";

// components
import Loading from "../Loading";
import Question from "../Question";
import QuizPreparation from "../QuizPreparation";
import QuizResult from "../QuizResult";

// data
import text from "../../../data/quizText";

// api function
import { getQuizByLevel } from "../../api/quiz";

const QuizLevel = () => {
  const { addQuiz, status, index, quiz, passed, setStatus } = quizStore();
  const { level, closeModal } = modalStore();

  const quizText = text[level - 1].text;
  let resultText;

  if (passed) {
    resultText = quizText.success;
  } else {
    resultText = quizText.failed;
  }

  const getQuizData = async () => {
    try {
      setStatus("loading");
      const response = await getQuizByLevel(level);
      if (response.code === 401) {
        setStatus("error");
        return;
      }
      // console.log(data);
      addQuiz(response.data);
      setStatus("steady");
    } catch (e) {
      const err = e as AxiosError;
      if (err.response?.status === 401) {
        closeModal();
        window.location.replace("http://localhost:8000/auth");
      }
    }
  };
  useEffect(() => {
    getQuizData();
  }, []);

  if (status === "loading") {
    return <Loading />;
  } else if (status === "steady") {
    return (
      <QuizPreparation
        title={quizText.title}
        salutation={quizText.preparation.salutation}
        firstParagraph={quizText.preparation.first_paragraph}
        secondParagraph={quizText.preparation.second_paragraph}
      />
    );
  } else if (status === "start") {
    return (
      <Question
        question={quiz[index].question}
        url_image={quiz[index].url_image}
        option_answer={quiz[index].option_answer}
        level={level}
      />
    );
  } else if (status === "finished") {
    return (
      <QuizResult
        title={quizText.title}
        salutation={resultText.salutation}
        firstParagraph={resultText.first_paragraph}
        secondParagraph={resultText.second_paragraph}
      />
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <p className="font-poppins text-lg">something wrong</p>
      </div>
    );
  }
};

export default QuizLevel;