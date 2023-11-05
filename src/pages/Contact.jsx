import { Form } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form action="">
        <label>
          <span>Email</span>
          <input type="text" name="email" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default Contact;
