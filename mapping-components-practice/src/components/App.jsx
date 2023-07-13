import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emojiCreater(term) {
  return (
    <Entry
      key={term.id}
      emoji={term.emoji}
      term={term.name}
      detail={term.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiCreater)}</dl>
    </div>
  );
}

export default App;
