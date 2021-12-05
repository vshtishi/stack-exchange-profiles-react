import React, { useState, useEffect } from 'react'
import mockUser from './mockData/mockUser'
import mockQuestions from './mockData/mockQuestions'
import mockAnswers from './mockData/mockAnswers'

import axios from 'axios'

const rootUrl =
  'https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow'

const StackExchangeContext = React.createContext()

const StackExchangeProvider = ({ children }) => {
  const [stackExchangeUser, setStackExchangeUser] = useState(mockUser)
  const [questions, setQuestions] = useState(mockQuestions)
  const [answers, setAnswers] = useState(mockAnswers)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState({ show: false, msg: '' })

  function toggleError(show, msg) {
    setError({ show, msg })
  }

  const searchStackExchangeUser = async (user) => {
    if (user) {
      const response = await axios(`${rootUrl}&inname=${user}`).catch((err) =>
        console.log(err)
      )
      if (response) {
        console.log(response.data.items[0])
        setStackExchangeUser(response.data.items[0])
      }
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
      }}
    >
      {children}
    </StackExchangeContext.Provider>
  )
}

export { StackExchangeContext, StackExchangeProvider }
