import React from 'react';
import { Button } from '../../components';
import CheckInQuestions from '../../components/CheckInQuestions';

const CheckIn = () => {
  return (
    <div>
      <h1>This is the check in page</h1>
      <form action="" method="POSt">
        <div>!!!!!!!!😑🤑☠🤐smiley faces goes here😑🤑☠🤐!!!!!!!!!</div>
        <h1>Rate from 1-5</h1>
        blah blah blah goes here
        <CheckInQuestions
          question="How Do You Feel ....."
          cols="90"
          rows="5"
          id="diet-textarea"
          name="Diet"
        />
        <CheckInQuestions
          question="How Do You Feel ....."
          cols="90"
          rows="5"
          id="entertainment-textarea"
          name="Entertainment"
        />
        <CheckInQuestions
          question="How Do You Feel ....."
          cols="90"
          rows="5"
          id="social-textarea"
          name="Social: "
        />
        <Button funct={() => {}} type="submit" id="LOG" value="LOG" />
      </form>
    </div>
  );
};

export default CheckIn;
