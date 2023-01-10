import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [note, setNote] = useState({
    title: "Add a note",
    text: "Press + to add a note",
  });
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(0);
  const addNote = () => {
    setUser([...user, { title: "Add Title", text: "Add Note" }]);
    setIndex(user.length);
    setNote({ title: "Add Title", text: "Add Note" });
  };
  const handleTitle = (k) => {
    setNote({ title: k.target.value, text: note.text });
  };
  const handleText = (k) => {
    setNote({ title: note.title, text: k.target.value });
  };
  const handleNote = () => {
    let k = user.map((member, i) => (
      <div
        className="k"
        onClick={() => {
          setIndex(i);
          setNote(member);
        }}
      >
        {member.title}
      </div>
    ));
    return k;
  };
  const handleSubmit = (e) => {
    user[index] = note;
    setUser([...user]);
  };
  const deleteNote = () => {
    setUser([...user.slice(0, index), ...user.slice(index + 1)]);
    setIndex(user.length - 1);
    setNote(user[index]);
  };

  return (
    <div className="app">
      <div className="page">
        <div className="nav-bar">
          <div className="logo">
            <img
              id="logo"
              src="https://cdn-icons-png.flaticon.com/128/727/727218.png"
              alt="hello"
            ></img>
            <p>Harmony</p>
          </div>
          <div className="options">
            <ul>
              <div className="catigories">
                <img
                  className="pic"
                  src="https://cdn-icons-png.flaticon.com/128/93/93624.png"
                  alt="hey"
                ></img>
                <li>Home</li>
              </div>
              <div className="catigories">
                <img
                  className="pic"
                  src="https://cdn-icons-png.flaticon.com/128/484/484613.png"
                  alt="hey"
                ></img>
                <li>Settings</li>
              </div>
              <div className="catigories">
                <img
                  className="pic"
                  src="https://cdn-icons-png.flaticon.com/128/174/174188.png"
                  alt="hey"
                ></img>
                <li>Support</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="notes">
          <div className="logo" style={{ marginTop: 15 }}>
            <p style={{ fontSize: 20 }}>All Notes:</p>
            <img
              id="add"
              src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png"
              alt="img"
              title="Add a note"
              onClick={() => {
                addNote();
              }}
            ></img>
            <img
              id="garbage"
              src="https://cdn-icons-png.flaticon.com/128/542/542724.png"
              alt="no-pic"
              style={{ width: 20, height: 20, marginTop: 20, padding: 2 }}
              onClick={() => {
                deleteNote();
              }}
            ></img>
          </div>
          <div className="note-link">{handleNote()}</div>
        </div>
        <div className="notes-content" id="m3allim">
          <div className="start">
            <input
              value={note.title}
              onChange={(e) => {
                handleTitle(e);
              }}
            ></input>
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              Save
            </button>
          </div>
          <div className="text-input">
            <textarea
              value={note.text}
              onChange={(e) => {
                handleText(e);
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
