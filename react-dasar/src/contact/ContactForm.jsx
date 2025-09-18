import { useState } from "react";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useState(initialData);

  function handleNameChange(e) {
    setContact({ ...contact, name: e.target.value });
  }

  function handleMessageChange(e) {
    setContact({ ...contact, message: e.target.value });
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          value={contact.name}
          onChange={handleNameChange}
          style={{display:"block", marginBottom:"10px"}}
        />
        <textarea
          placeholder="message"
          value={contact.message}
          onChange={handleMessageChange}
        ></textarea>
      </form>
      <h1>Contact Detail</h1>
      <p>name : {contact.name}</p>
      <p>message : {contact.message}</p>
    </div>
  );
}
