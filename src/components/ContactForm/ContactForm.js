import { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ toggleVisibility, setContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  const handleContactForm = (e) => {
    e.preventDefault();
    toggleVisibility.current.toggleVisibility();

    const objContact = {
      name,
      phone,
      address,
      comment,
    };
    setContact(objContact);
    setName("");
    setPhone("");
    setAddress("");
    setComment("");
  };

  return (
    <div className="ContactContainer">
      <div className="Sub2">Contacto</div>
      <form className="ContactForm" onSubmit={handleContactForm}>
        <label className="LabelContact Text">
          Nombre:
          <input
            className="InputContact "
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="LabelContact Text">
          Telefono:
          <input
            className="InputContact"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="LabelContact Text">
          Direccion:
          <input
            className="InputContact "
            type="text"
            value={address}
            onChange={({ target }) => setAddress(target.value)}
          />
        </label>
        <label className="LabelContact Text">
          Comentario:
          <input
            className="InputContact"
            type="ext"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </label>
        <button className="Button" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
