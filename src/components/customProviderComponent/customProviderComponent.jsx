import { createContext, useContext, useState } from "react";
import { useRef } from 'react';
import { useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);


export const UserProvider = ({ children }) => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
const options = ['Good', 'Neutral', 'Bad'];
const message = 'There is no feedback';
const myRef = useRef();

useEffect(() => myRef.current.focus(), []); // I used myRef to focus on the Neutral button after mounting, see in the FeedbackOptions component

  const settingGood = () => {
    setGood(good + 1);
  };

  const settingNeutral = () => {
    setNeutral(neutral + 1);
    };
    
   const settingBad = () => {
     setBad(bad + 1);
   };  

   const countTotalFeedback = (good, neutral, bad) => {
      return good + neutral + bad;
    };

   const countPositiveFeedbackPercentage = (good, neutral, bad) => {
      if (good === 0 && neutral === 0 && bad === 0) {
        return 0;
      } else {
        return (good / (good + neutral + bad)) * 100;
      }
    };

   const onLeaveFeedback = evt => {
      evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
      setTimeout(() => {
        evt.target.style.boxShadow = 'none';
      }, 200);
      const { name } = evt.target;
      
        if (name === 'Good') {
            settingGood();
        }
        
        else if (name === 'Neutral') {
          settingNeutral();
        }
        
        else if (name === 'Bad') {
          settingBad();
        }
      
    };
    
  return (
    <UserContext.Provider
      value={{
        good,
        neutral,
        bad,
        myRef,
        settingGood,
        settingNeutral,
        settingBad,
        countTotalFeedback,
        countPositiveFeedbackPercentage,
        onLeaveFeedback,
        options,
        message
      }}
    >
      {children}
    </UserContext.Provider>
  );
};