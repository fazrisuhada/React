// import { useState } from "react";
import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
    // option1
    //   const [contact, setContact] = useState(initialData);

    // immer
    const [contact, setContact] = useImmer(initialData)

    function handleNameChange(e) {
        // Spread Syntax
        // setContact({ ...contact, name: e.target.value });

        // menggunakan immer
        setContact(contact => {
            contact.name = e.target.value
        })
    }

    function handleMessageChange(e) {
        // Spread Syntax
        // setContact({ ...contact, message: e.target.value });

        // menggunakan immer
        setContact(contact => {
            contact.message = e.target.value
        })
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
