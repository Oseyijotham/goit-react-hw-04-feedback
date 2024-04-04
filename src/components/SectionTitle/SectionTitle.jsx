import css from './SectionTitle.module.css';
import PropTypes from 'prop-types';


export const SectionTitle = ({ children }) => {

  return (
    <section className={css.feedbackSection}>
      <h2 className={css.title}>Please Leave Feedback</h2>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node,
};
