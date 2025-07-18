import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";


export default function ResultPage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNumLen = location.state.correctNumLen

  return (
    <>
      <h1>Result</h1>
      <p>You answered...</p>
      <p>{`${correctNumLen} questions correct out of ${maxQuizLen} questions!`}</p>
      <br />
      <Link to={ROUTES.QUIZ}>Try again</Link>
    </>
  )
}
