import React, { useState } from 'react';
import { Button, Emoji, RatingForm, ThreeDSmiley } from '../../components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    enter: '',
    social: '',
    mood: 0,
  });

  //creating heading for each step within the form
  const questionHeadings = [
    'heading 1: pick a your mood 🙏',
    'heading 2: Rate your mood 👌',
    'heading 3: never give up',
    'heading 4: diet effects your mood',
    'heading 4: stop coding in the dark , blue light exposure is harmful',
    'heading 5:  too much social media can lead to depression',
  ];

  // function that will render different questions depending on what step of the form
  const rateQuestion = () => {
    return question === 0 ? (
      <div className={checkin.emoji}>
        {/* <h1>😑😊🤣😎😴😞🙃animated moods will go here</h1> */}

        <Emoji
          emoji="😡"
          id="emoji-1"
          value={1}
          funct={(e) => {
            //           const checked = e.target.checked;
            // if (checked) {
            //  }}
            // } else {

            //  //unchecked
            // }
            setFormData({ ...formData, mood: parseInt(e.target.value) });
          }}
        />

        <Emoji
          emoji="😔"
          id="emoji-2"
          value={2}
          funct={(e) => {
            setFormData({ ...formData, mood: parseInt(e.target.value) });
          }}
        />
        <Emoji
          emoji="😑"
          id="emoji-3"
          value={3}
          funct={(e) => {
            setFormData({ ...formData, mood: parseInt(e.target.value) });
          }}
        />
        <Emoji
          emoji="🙂"
          id="emoji-4"
          value={4}
          funct={(e) => {
            setFormData({ ...formData, mood: parseInt(e.target.value) });
          }}
        />
        <Emoji
          emoji="😊"
          // emoji="😁"
          id="emoji-5"
          value={5}
          funct={(e) => {
            setFormData({ ...formData, mood: parseInt(e.target.value) });
          }}
        />
      </div>
    ) : question === 1 ? (
      <div>
        <RatingForm
          // value={formData.energy}
          funct={(e) =>
            setFormData({ ...formData, energy: parseInt(e.target.value) })
          }
          label="Energy"
        />
        <RatingForm
          // value={formData.depression}
          funct={(e) =>
            setFormData({ ...formData, depression: parseInt(e.target.value) })
          }
          label="Depression"
        />
        <RatingForm
          label="Irritability"
          // value={formData.irritability}
          funct={(e) =>
            setFormData({ ...formData, irritability: parseInt(e.target.value) })
          }
        />
        <RatingForm
          label="Motivation"
          // value={formData.motivation}
          funct={(e) =>
            setFormData({ ...formData, motivation: parseInt(e.target.value) })
          }
        />
      </div>
    ) : question === 2 ? (
      <div>
        <RatingForm
          label="Stress"
          // value={formData.stress}
          funct={(e) =>
            setFormData({ ...formData, stress: parseInt(e.target.value) })
          }
        />
        <RatingForm
          label="Appetite"
          // value={formData.appetite}
          funct={(e) =>
            setFormData({ ...formData, appetite: parseInt(e.target.value) })
          }
        />
        <RatingForm
          label="Concentration"
          // value={formData.concentration}
          funct={(e) =>
            setFormData({
              ...formData,
              concentration: parseInt(e.target.value),
            })
          }
        />
      </div>
    ) : question === 3 ? (
      <CheckInQuestions
        question="How Do You Feel ....."
        className={checkin.textarea}
        cols="90"
        rows="5"
        id="diet-textarea"
        name="Diet"
        // value={formData.diet}
        funct={(e) => {
          setFormData({ ...formData, diet: e.target.value });
        }}
      />
    ) : question === 4 ? (
      <CheckInQuestions
        question="How Do You Feel ....."
        cols="90"
        rows="5"
        id="entertainment-textarea"
        name="Entertainment"
        // value={formData.enter}
        funct={(e) => setFormData({ ...formData, enter: e.target.value })}
        className={checkin.textarea}
      />
    ) : (
      <CheckInQuestions
        className={checkin.textarea}
        question="How Do You Feel ....."
        cols="90"
        rows="5"
        id="social-textarea"
        name="Social "
        value=""
        funct={(e) => setFormData({ ...formData, social: e.target.value })}
      />
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      energy: formData.energy,
      depression: formData.depression,
      irritability: formData.irritability,
      motivation: formData.motivation,
      stress: formData.stress,
      appetite: formData.appetite,
      concentration: formData.concentration,
      diet: formData.diet,
      enter: formData.enter,
      social: formData.social,
      mood: formData.mood,
    };
    axios
      .post('https://fp-mental-health.herokuapp.com/new_entry', data)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
    console.log('data', data);
    // navigate('/hub');
  };

  return (
    <div className={checkin.container}>
      <h2>This is the check in page</h2>
      <form
        className={checkin.form}
        onSubmit={handleSubmit}
        action="https://fp-mental-health.herokuapp.com/new_entry"
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
          <h2> generic title - Rate from 1-5</h2>
          <h1>{questionHeadings[question]}</h1>
        </div>
        <div className="">{rateQuestion()}</div>
        <div className={checkin.nextPrevDiv}>
          {question > 0 && (
            <Button
              className={checkin.questionBtn}
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
              className={checkin.questionBtn}
              type="button"
              funct={(e) => {
                e.preventDefault();
                setQuestion((currentQuestion) => currentQuestion + 1);
              }}
              value="Next"
            />
          ) : (
            <Button className={checkin.log} value="LOG" type="submit" />
          )}
        </div>
        {/* {console.log(formData)} */}
      </form>
    </div>
  );
};

export default CheckIn;
