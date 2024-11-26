// Contact.js
import React from 'react';

const Contact = () => (
  <div className="contact">
    <h1>Contactez-moi</h1>
    <form action="https://formspree.io/f/votreemail" method="POST">
      <input type="text" name="name" placeholder="Votre nom" required />
      <input type="email" name="_replyto" placeholder="Votre e-mail" required />
      <textarea name="message" placeholder="Votre message" required></textarea>
      <button type="submit" className="btn-primary">Envoyer</button>
    </form>
  </div>
);

export default Contact;
