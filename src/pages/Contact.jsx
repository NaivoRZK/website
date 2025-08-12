import React from "react";

export default function Contact() {
  return (
    <section>
      <h1>Contactez-moi</h1>
      <form>
        <label>
          Nom :
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email :
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message :
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
