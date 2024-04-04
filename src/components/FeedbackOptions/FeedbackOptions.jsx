import { useUser } from '../customProviderComponent/customProviderComponent';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';


export const FeedbackOptions = () => {
  const { onLeaveFeedback, options } = useUser();

  return (
    <div className={css.buttonBox}>
      {options.map(option => (
        <button
          className={css.button}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          key={options.indexOf(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
