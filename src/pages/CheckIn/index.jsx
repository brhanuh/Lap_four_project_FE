import React, { useContext, useState } from "react";
import { Button, Emoji, RangeInput } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CheckInQuestions from "../../components/CheckInQuestions";
import checkin from "./checkIn.module.css";
import AppContext from "../../HelperContext/Context";

const CheckIn = () => {
  const navigate = useNavigate();
  // const { setTextValue, textAreaValue } = useContext(AppContext);

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
    diet: "",
    enter: "",
    social: "",
    mood: 0,
  });

  //creating heading for each step within the form
  const questionHeadings = [
    "heading 1: pick  your mood 🙏",
    "Rate your mood",
    "heading 3: never give up",
    "heading 4: diet effects your mood",
    "heading 4: stop coding in the dark ",
    "heading 5:  too much social media can lead to depression",
  ];

  // function that will render different questions depending on what step of the form
  const rateQuestion = () => {
    return question === 0 ? (
      <div className={checkin.emoji}>
        <Emoji
          emoji="😡"
          id="emoji-1"
          value={1}
          funct={(e) => {
            const checked = e.target.checked;
            if (checked) {
              e.target.style.opacity = 1;
            } else {
              //unchecked
            }
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
        <RangeInput
          funct={(e) =>
            setFormData({ ...formData, energy: parseInt(e.target.value) })
          }
          label="Energy"
        />
        <RangeInput
          // value={formData.depression}
          funct={(e) =>
            setFormData({ ...formData, depression: parseInt(e.target.value) })
          }
          label="Depression"
        />
        <RangeInput
          label="Irritability"
          // value={formData.irritability}
          funct={(e) =>
            setFormData({ ...formData, irritability: parseInt(e.target.value) })
          }
        />
        <RangeInput
          label="Motivation"
          // value={formData.motivation}
          funct={(e) =>
            setFormData({ ...formData, motivation: parseInt(e.target.value) })
          }
        />
      </div>
    ) : question === 2 ? (
      <div>
        <RangeInput
          label="Stress"
          // value={formData.stress}
          funct={(e) =>
            setFormData({ ...formData, stress: parseInt(e.target.value) })
          }
        />
        <RangeInput
          label="Appetite"
          // value={formData.appetite}
          funct={(e) =>
            setFormData({ ...formData, appetite: parseInt(e.target.value) })
          }
        />
        <RangeInput
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
        funct={(e) => {
          // setTextValue(e.target.value);
          setFormData({ ...formData, diet: e.target.value });
          // setTextValue('');
        }}
      />
    ) : question === 4 ? (
      <CheckInQuestions
        question="How Do You Feel ....."
        cols="90"
        rows="5"
        id="entertainment-textarea"
        name="Entertainment"
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

    const token = localStorage.getItem("token");
    axios
      .post("https://fp-mental-health.herokuapp.com/new_entry", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
    navigate("/hub");
  };

  return (
    // <h2 >Header</h2>
    <div className={checkin.container}>
      <div className={checkin.checkInFormHeader}>
        <h3 className={checkin.h2c}>{questionHeadings[question]}</h3>
      </div>
      <div className={checkin.card2}>
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
                    ? "16.6%"
                    : question === 1
                    ? "33.2%"
                    : question === 2
                    ? "49.8%"
                    : question === 3
                    ? "66.4%"
                    : question === 4
                    ? "83%"
                    : "100%",
              }}
            ></div>
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
    </div>
  );
};

export default CheckIn;
