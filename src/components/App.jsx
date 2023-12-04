import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

const backendServerURL = "https://keeper-api-azna.onrender.com" || "http://localhost:5000";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    axios.get(backendServerURL+"/api/getAll").then(res=> setNotes(res.data));
  },[])

  function addNote(newNote) {
    if(newNote.title || newNote.content){
      axios.post(backendServerURL + "/api/addNew",newNote).then(res => setNotes(res.data))
    }
  }

  const deleteNote = (id) => {
    axios.post(backendServerURL+"/api/delete",{id}).then(res => setNotes(res.data))
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
