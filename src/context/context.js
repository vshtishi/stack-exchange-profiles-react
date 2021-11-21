import React, { useState, useEffect } from 'react';

import axios from 'axios';

const rootUrl = 'https://api.stackexchange.com/2.3/users';

const StackExchangeContext = React.createContext();

const StackExchangeProvider = ({ children }) => {
    const [stackExchangeUser, setStackExchangeUser] = useState('')
    const [questions, setQuestions] = useState('')
    const [answers, setAnswers] = useState('')
    

    return <StackExchangeContext.Provider value={
        stackExchangeUser,
        questions,
        answers
    }>
        {children}
    </StackExchangeContext.Provider>
}

export { StackExchangeContext, StackExchangeProvider }