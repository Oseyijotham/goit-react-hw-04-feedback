import { useUser } from '../customProviderComponent/customProviderComponent';
import css from './Statistics.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export const Statistics = ({ children }) => {

   const goodId = nanoid();
   const neutralId = nanoid();
   const badId = nanoid();
   const totalId = nanoid();
   const positiveFeedbackId = nanoid();

  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedbackPercentage
  } = useUser();

  return (
    <div className={css.statistics}>
      <h3 className={css.statisticsTitle}>Statistics</h3>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <ul className={css.stats}>
          <li key={goodId}>Good: {good}</li>
          <li key={neutralId}>Neutral: {neutral}</li>
          <li key={badId}>Bad: {bad}</li>
          <li key={totalId}>Total: {countTotalFeedback(good, neutral, bad)}</li>
          <li key={positiveFeedbackId}>
            Positive Feedback:{' '}
            {Number(
              countPositiveFeedbackPercentage(good, neutral, bad).toFixed(2)
            )}
            %
          </li>
        </ul>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  children: PropTypes.node,
};
