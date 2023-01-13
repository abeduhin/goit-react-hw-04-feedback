import React from 'react';
import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0); 

// Вказуємо початковий стан  

  const handleFeedback = option => {
    if (option === 'Good') {
      setGood(good + 1);
    } else if (option === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'Bad') {
      setBad(bad + 1);
    }
  }
  
  // Змінюємо стан 

  const totalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };
  // Прописуємо сумуючу функцію 
  const positivePercentage = () => {
    if (totalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback()) * 100);
   
  };
  // Рахуємо тільки позитивні відгуки та ділемо на загальні
  
  return (
      <div>
      
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={ ['Good', 'Neutral', 'Bad'] }
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        {/*Робимо розмітку секції с заголовком та кнопками  */}

        <Section title="Statistics">
          {totalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              positivePercentage={positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
        {/* Робимо розмітку секції статистики з заголовком та умовою якщо відгуків не має то рендер message якщо є то рендер секціі з варіантами */}
      </div>
    )
  }

