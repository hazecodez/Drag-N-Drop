import { useState } from "react";
import Notes from "./Components/Notes";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Notes here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          className="border-2 p-2 rounded-xl bg-gray-400 text-white"
          onClick={() => {
            setNotes([...notes, { id: notes.length + 1, text: note }]);
            setNote("");
          }}
        >
          Add Note
        </button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}
