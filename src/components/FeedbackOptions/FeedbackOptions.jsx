import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedbackBtnList}>
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className={css.feedbackBtn}
      >
        {/* Події onClick передаємо обробника події функцію onLeaveFeedback з параметром option*/}
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};