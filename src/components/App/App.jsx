
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';



export const App = () => {
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <SectionTitle>
        <>
          <FeedbackOptions/>
          <Statistics>
            <Notification message="There is no feedback" />
          </Statistics>
        </>
      </SectionTitle>
    </div>
  );
};