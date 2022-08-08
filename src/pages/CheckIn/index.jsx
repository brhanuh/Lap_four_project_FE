import React, { useState } from 'react';
import { Button, RatingForm } from '../../components';
import { useNavigate } from 'react-router-dom';

import CheckInQuestions from '../../components/CheckInQuestions';
import checkin from './checkIn.module.css';

const CheckIn = () => {
  const navigate = useNavigate();

  // setting questions for multistep form
  const [question, setQuestion] = useState(0);

  // setting form data for all inputs in multistep form
  const [formData, setFormData] = useState({
    energy: 0,
    depression: 0,
    irritability: 0,
    motivation: 0,
    stress: 0,
    appetite: 0,
    concentration: 0,
    diet: '',
    entertainment: '',
    social: '',
  });

  //creating heading for each step within the form
  const questionHeadings = [
    'heading 1 pick a your mood 🙏',
    'heading 2 Rate your mood 👌',
    'heading 3 never give up',
    'heading 4 diet effects your mood',
    'heading 4 stop coding in the dark , blue light exposure is harmful',
    'heading 5  too much social media can lead to depression',
  ];

  // function that will render different questions depending on what step of the form
  const rateQuestion = () => {
    return question === 0 ? (
      <div>
        <h1>😑😊🤣😎😴😞🙃animated moods will go here</h1>
      </div>
    ) : question === 1 ? (
      <div>
        <RatingForm
          value={formData.energy}
          funct={(e) => setFormData({ ...formData, energy: e.target.value })}
          label="Energy"
        />
        <RatingForm
          value={formData.depression}
          funct={(e) =>
            setFormData({ ...formData, depression: e.target.value })
          }
          label="Depression"
        />
        <RatingForm
          label="Irritability"
          value={formData.irritability}
          funct={(e) =>
            setFormData({ ...formData, irritability: e.target.value })
          }
        />
        <RatingForm
          label="Motivation"
          value={formData.motivation}
          funct={(e) =>
            setFormData({ ...formData, motivation: e.target.value })
          }
        />
      </div>
    ) : question === 2 ? (
      <div>
        <RatingForm
          label="Stress"
          value={formData.stress}
          funct={(e) => setFormData({ ...formData, stress: e.target.value })}
        />
        <RatingForm
          label="Appetite"
          value={formData.appetite}
          funct={(e) => setFormData({ ...formData, appetite: e.target.value })}
        />
        <RatingForm
          label="Concentration"
          value={formData.concentration}
          funct={(e) =>
            setFormData({ ...formData, concentration: e.target.value })
          }
        />
      </div>
    ) : question === 3 ? (
      <CheckInQuestions
        question="How Do You Feel ....."
        cols="90"
        rows="5"
        id="diet-textarea"
        name="Diet"
        value={formData.diet}
        funct={(e) => setFormData({ ...formData, diet: e.target.value })}
      />
    ) : question === 4 ? (
      <CheckInQuestions
        question="How Do You Feel ....."
        cols="90"
        rows="5"
        id="entertainment-textarea"
        name="Entertainment"
        value={formData.entertainment}
        funct={(e) =>
          setFormData({ ...formData, entertainment: e.target.value })
        }
      />
    ) : (
      <CheckInQuestions
        question="How Do You Feel ....."
        cols="90"
        rows="5"
        id="social-textarea"
        name="Social "
        value={formData.social}
        funct={(e) => setFormData({ ...formData, social: e.target.value })}
      />
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/hub');
  };

  return (
    <div className={checkin.container}>
      <h1>This is the check in page</h1>
      <form
        className={checkin.form}
        onSubmit={handleSubmit}
        action=""
        method="POST"
      >
        <div className={checkin.progressbar}>
          <div
            style={{
              width:
                question === 0
                  ? '16.6%'
                  : question === 1
                  ? '33.2%'
                  : question === 2
                  ? '49.8%'
                  : question === 3
                  ? '66.4%'
                  : question === 4
                  ? '83%'
                  : '100%',
            }}
          ></div>
        </div>
        <div className={checkin.checkInFormHeader}>
          <h1> generic title - Rate from 1-5</h1>
          <h1>{questionHeadings[question]}</h1>
        </div>
        <div className="rate-form-body">{rateQuestion()}</div>
        <div className={checkin.nextPrevDiv}>
          {question > 0 && (
            <Button
              type="button"
              funct={(e) => {
                e.preventDefault();
                setQuestion((currentQuestion) => currentQuestion - 1);
              }}
              value="Previous"
            />
          )}
          {question !== questionHeadings.length - 1 ? (
            <Button
              type="button"
              funct={(e) => {
                e.preventDefault();
                setQuestion((currentQuestion) => currentQuestion + 1);
              }}
              value="Next"
            />
          ) : (
            <Button value="LOG" type="submit" />
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckIn;
