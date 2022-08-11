import React from 'react';
import emojicss from './emoji.module.css';

const Emoji = ({ funct, id, emoji, value }) => {
  return (
    <div>
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
        required
      />
    </div>
  );
};

export default Emoji;
