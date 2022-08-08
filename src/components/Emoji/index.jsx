import React from 'react';
import emojicss from './emoji.module.css';

const Emoji = ({ funct, id, emoji, value }) => {
  return (
    <span>
      <label className={emojicss.emoji} htmlFor={id}>
        {emoji}
      </label>
      <input
        hidden
        onChange={funct}
        type="checkbox"
        value={value}
        name=""
        id={id}
      />
    </span>
  );
};

export default Emoji;
