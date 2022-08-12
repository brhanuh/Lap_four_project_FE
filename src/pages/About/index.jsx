import React, { useState } from "react";
import "./styles.css";
import screenshot1 from "../../dummy.png";
import screenshot2 from "../../dummy2.png";
import { useNavigate } from "react-router-dom";
import { Button, SwiperJs } from "../../components";

const About = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const stepHeadings = [
    "About us.... We are an app that deals with .....",
    "instructions, tutorial etc",
    " lets get you signed up",
  ];

  return (
    <>
      <div>
        <h3 className="aboutpage1">What do we do?</h3>
        <h4>Making a busy world brighter</h4>
        <h4>We want mental health to be a priority</h4>
        <h4>
          Brighter Minds is a safe space you can return too in a busy lifestyle:{" "}
        </h4>
        <h4>You can:</h4>

        <li>Track how you feel multiple times a day using the check in</li>
        <li>Use the moodboard in the top right to tailor this space to you</li>
        <h4>Most importantly, you are not alone</h4>
        <li>
          Recommend and see recommendations of what helps other user and their
          mental health{" "}
        </li>
        <li>See statistics of other users and their moods</li>
        <h4>Welcome to Brighter Minds a united journey</h4>
      </div>
    </>
  );
};

export default About;
