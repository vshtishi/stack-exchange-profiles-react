import React, { useState, useEffect } from 'react'
import mockUser from './mockData/mockUser'
import mockQuestions from './mockData/mockQuestions'
import mockAnswers from './mockData/mockAnswers'

import axios from 'axios'

const rootUrl = 'https://api.stackexchange.com/2.3/users'

const StackExchangeContext = React.createContext()

const StackExchangeProvider = ({ children }) => {
  const [stackExchangeUser, setStackExchangeUser] = useState(mockUser)
  const [questions, setQuestions] = useState(mockQuestions)
  const [answers, setAnswers] = useState(mockAnswers)
  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState({ show: false, msg: '' })

  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  const searchStackExchangeUser = async (user) => {
    toggleError()
    setIsLoading(true)
    if (user) {
      const response = await axios(
        `${rootUrl}?order=desc&sort=reputation&site=stackoverflow&inname=${user}`
      ).catch((err) => console.log(err))
      if (response.data.items.length > 0) {
        setStackExchangeUser(response.data.items[0])
        const { user_id } = response.data.items[0]
        const questionsResponse = await axios(
          `${rootUrl}/${user_id}/questions?order=desc&sort=activity&site=stackoverflow`
        ).catch((err) => console.log(err))
        setQuestions(questionsResponse.data)
        const answersResponse = await axios(
          `${rootUrl}/${user_id}/answers?order=desc&sort=activity&site=stackoverflow`
        )
        setAnswers(answersResponse.data)
      } else {
        toggleError(true, 'No user found')
      }
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log('app loaded')
  }, [])
  return (
    <StackExchangeContext.Provider
      value={{
        stackExchangeUser,
        questions,
        answers,
        error,
        searchStackExchangeUser,
        isLoading,
      }}
    >
      {children}
    </StackExchangeContext.Provider>
  )
}

export { StackExchangeContext, StackExchangeProvider }
