import React from 'react';
import Picker from 'emoji-picker-react';
import './textarea.css';

export const TextAreaEmoji = ({
    showPicker, setShowPicker, formValues ,setFormValues
}) =>{
    

    const onEmojiClick = (event, emojiObject) => {
        setFormValues({
            ...formValues,
            notes: formValues.notes + emojiObject.emoji
        })
        setShowPicker(false);
      };

    const handleChangeText = (e) =>{
        setFormValues({
            ...formValues,
            notes: e.target.value
        })
    }

    return (
        <div className="app">
          <div className="picker-container">
            <textarea
              className="input-style"
              value={formValues.notes}
              onChange={handleChangeText}
              rows="5"
              cols="70"
              >
            </textarea>
            <img
              className="emoji-icon"
              src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
              onClick={() => setShowPicker(val => !val)} />
            {showPicker && <Picker
              pickerStyle={{ width: '100%' }}
              onEmojiClick={onEmojiClick} />}
          </div>
        </div>
      );    
}