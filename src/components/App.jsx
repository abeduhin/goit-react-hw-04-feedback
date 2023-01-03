import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import {FEEDBACK_OPTIONS} from "../data/constans"

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
}

export class App extends Component {
  state = { ...INITIAL_STATE };
    
// Вказуємо початковий стан
  handleFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  // Змінюємо стан через this.setState ({}) та прописуємо умови - якщо e (SyntheticEvent) дорівнює GOOD то лічільник good збільшується на 1, якщо інше - то інше +1

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  // Прописуємо сумуючу функцію 
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  // Рахуємо тільки позитивні відгуки та ділемо на загальні
  render() {
    return (
      <div>
      
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={ FEEDBACK_OPTIONS }
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {/*Робимо розмітку секції с заголовком та кнопками  */}

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
        {/* Робимо розмітку секції статистики з заголовком та умовою якщо відгуків не має то рендер message якщо є то рендер секціі з варіантами */}
      </div>
    );
  }
}