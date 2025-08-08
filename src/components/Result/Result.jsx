import React from 'react'
import styles from "./Result.module.css"

export default function Result({correctNumLen, maxQuizLen}) {
  return (
    <div className={styles.result}>
      You answered...
      <span className={styles.resultHighlight}>
        {`${correctNumLen} questions correct out of ${maxQuizLen} questions!`}
      </span>
    </div>
  )
}
