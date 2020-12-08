import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😀": "grinning",
  "😃": "smiley",
  "😄": "joyful smile",
  "😁": "grin",
  "😆": "laughing",
  "😅": "sweat smile",
  "🤣": "rofl",
  "😂": "joy",
  "🙂": "slightly smiling face",
  "🙃": "upside down face",
  "😉": "wink",
  "😇": "innocent",
  "🥰": "smiling face with three hearts",
  "😍": "heart eyes",
  "🤩": "star struck",
  "😘": "kissing heart",
  "😗": "kissing",
  "😚": "kissing closed eyes",
  "😙": "kissing smiling eyes",
  "😋": "yum",
  "😛": "stuck out tongue",
  "😜": "stuck out tongue winking eye",
  "🤪": "zany face",
  "😝": "stuck out tongue closed eyes",
  "🤑": "money mouth face",
  "🤗": "hugs",
  "🤭": "hand over mouth",
  "🤫": "shushing face",
  "🤔": "thinking",
  "😑": "annoyance",
  "🤐": "zipper mouth face",
  "😐": "neutral face",
  "😑": "expression less",
  "😶": "no mouth",
  "😏": "smirk",
  "😒": "unamused",
  "🙄": "roll eyes",
  "😬": "grimacing",
  "🤥": "lying face",
  "😷": "mask",
  "🤒": "face with thermometer",
  "🤕": "face with head bandage",
  "🤢": "nauseated face",
  "🤮": "vomiting face",
  "🤧": "sneezing face",
  "🥵": "hot face",
  "🥶": "cold face",
  "🥴": "woozy face",
  "😵": "dizzy face",
  "🤯": "exploding head",
  "🤨": "raised eyebrow",
  "🤠": "cowboy hat face",
  "😎": "sunglasses",
  "🤓": "nerd_face",
  "🧐": "monocle_face",
  "🥳": "partying ace",
  "😕": "confused",
  "😟": "worried",
  "🙁": "slightly_frowning_face",
  "😮": "open_mouth",
  "😯": "hushed",
  "😲": "astonished",
  "🥺": "pleading_face",
  "😦": "frowning",
  "😧": "anguished",
  "😨": "fearful",
  "😰": "cold_sweat",
  "😥": "disappointed_relieved",
  "😢": "cry",
  "😭": "sob",
  "😱": "scream",
  "😖": "confounded",
  "😣": "persevere",
  "😞": "disappointed",
  "😓": "sweat",
  "😩": "weary",
  "😫": "tired_face",
  "🥱": "yawning_face",
  "😠": "angry",
  "🤬": "cursing_face"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  // console.log(emojis);

  var [meaning, setmeaning] = useState("");

  function inputChangeHandler(event) {
    //console.log(event.target.value);
    meaning = emojiDictionary[event.target.value];
    if (meaning === undefined && event.target.value !== "") {
      meaning = "Sorry this emoji is not in our DataBase";
    }
    setmeaning(meaning);
  }

  function clcikHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Understand the Feelings</h1>
      {/* input as sooon as there is a change inputHandler is called */}
      <input onChange={inputChangeHandler}></input>
      <div style={{ margin: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}>
        {meaning}
      </div>
      {emojis.map((emoji) => {
        //console.log(emoji);
        return (
          <span
            onClick={() => clcikHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer",
              margin: "0.5rem"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
