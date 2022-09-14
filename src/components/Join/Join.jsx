import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vv47z0p",
        "template_ilh9687",
        form.current,
        "IZKB5smbKmskANp3C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTO PARA</span>
          <span> SUBIR DE NÍVEL</span>
        </div>
        <div>
          <span>SEU CORPO</span>
          <span className="stroke-text"> CONOSCO?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Digite seu e-mail"
          />
          <button className="btn btn-j">ENVIAR</button>
        </form>
      </div>
    </div>
  );
};  

export default Join;
