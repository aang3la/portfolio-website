import { useForm } from "@formspree/react";

const Contact = () => {
    const [state, handleSubmit] = useForm("mrgnalav");
    
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      await handleSubmit(e);
      if (state.succeeded) {
        e.target.reset(); 
      }
    };

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out to me through the contact form for any
          inquiries.
        </p>
      </div>
      <form
        className="contact-form-container"
        onSubmit={handleFormSubmit}
        method="POST"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">E-mail</span>
            <input
              type="text"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">Phone number</span>
            <input
              type="phone"
              className="contact-input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="btn btn-primary contact-form-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
