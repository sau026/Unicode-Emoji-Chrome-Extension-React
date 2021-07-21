import React, { useState, useEffect, useCallback, useRef } from "react";
import firebase from "../firebase";
import { Unicode } from "../unicode";
import { AllUnicode } from "../allUnicode";
import Tooltip from '@material-ui/core/Tooltip';
import "./emoji.css";

export default function Emoji(props) {
  var filteredEmoji = Unicode['Smileys & Emotion'];
  const [allEmoji, setAllEmoji] = React.useState(Unicode['Smileys & Emotion']);
  const [emojiName, setEmojiName] = React.useState(null);
  const [tooltipText, setTooltipText] = React.useState('Click to copy !!');

  useEffect(async () => {
    setAllEmoji(Unicode[props.tabSelected])
  }, [props.tabSelected]);


  useEffect(async () => {
    inputRef.current.focus();
  }, []);


  const inputRef = useRef(null);

  const copyToClipboard = (e) => {
    var copyText = document.getElementById("emoji-icon");
    var textArea = document.createElement("textarea");
    textArea.value = e;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    setTooltipText('Copied !!')
    setTimeout(() => {
      setTooltipText('Click to copy !!')
    }, 500);
  };

  const debounceFunction = (func, delay) => {
    let timer;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(self, args);
      }, delay);
    };
  };

  var callDebounce = useCallback(
    debounceFunction((nextValue) => filterData(nextValue), 500),
    []
  );

  const onValueChange = (e) => { 
    callDebounce(e.target.value);
  };

  const filterData = (e) => {
    let value = e;
    if(value.length <= 1){
      setAllEmoji(Unicode[props.tabSelected])
      return false;
    }
    const finalData = AllUnicode.filter(o => {
      return Object.keys(o).some(k => {
          let val = o[k];
          return String(val)
              .toLowerCase()
              .includes(value.toLowerCase());
      });
  });

  setAllEmoji(finalData)
  }

  return (
    <>
    <div className="search__box_container">
    <input
        id="search__box"
        placeholder="Type at least two character to search unicode....."
        type="text"
        onChange={onValueChange}
        ref={inputRef}
      ></input>
    </div>
      <span className="headline">Click on your favorite icon and copy it to the clipboard!!</span><br></br>
      <span className="shortcut">Press "Alt+Shift+1" to open the extension using shortcut.</span>
      <div
        className="parent__emoji__box"
        id="style-15"
        style={{ display: "flex", flexWrap: "wrap"}}
      >
        {allEmoji.map((ele, i) => {
          return (
            <div
              className="emoji__box"
              style={{ width: "40px", height: "30px" }}
            >
              <Tooltip title={tooltipText}>
                <span
                  className="single-icon"
                  id="emoji-icon"
                  key={Math.random()}
                  onClick={() => copyToClipboard(ele.char)}
                >
                  {ele.char}
                </span>
              </Tooltip>
            </div>
          );
        })}
        {allEmoji.length <= 0 ? <p className="no-emoji">Sorry!! No emoji match....</p> : ""}
      </div>
    </>
  );
}