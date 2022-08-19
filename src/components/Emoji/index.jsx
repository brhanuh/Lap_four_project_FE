import React, { useContext, useEffect, useRef, useState } from 'react';
import emojicss from './emoji.module.css';
import AppContext from '../../HelperContext/Context';

const Emoji = ({ ref, funct, id, emoji, value, onFocus }) => {
  const { emojiRef, setFormData, formData, show, setShow } =
    useContext(AppContext);

  return (
    <div>
      <label onInput={onFocus} className={emojicss.emoji} htmlFor={id}>
        {emoji}
      </label>
      <input
        className={emojicss.emojiInput}
        onChange={(e) => {
          if (e.target) {
            e.target.labels[0].style.opacity = 1;
          } else {
            e.target.labels[0].style.opacity = '';
          }
          setFormData({ ...formData, mood: parseInt(e.target.value) });
        }}
        type="radio"
        value={value}
        name="emoji"
        id={id}
        hidden
        required
      />
    </div>
  );
};

export default Emoji;
