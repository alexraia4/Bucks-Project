import "../styles/Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact_text">
        <p>Tell us how we can contact you.</p>
        <p>Name</p>
        <textarea />
        <div>
          <div>
            <p>Email</p>
            <textarea />
          </div>
          <div>
            <p>Phone Number</p>
            <textarea />
          </div>
          <div>
            <input type="checkBox" />
            <p>Text</p>
            <input type="checkBox" />
            <p>Call</p>
            <input type="checkBox" />
            <p>Email</p>
          </div>
          <p>Submit</p>
        </div>
      </div>
      <div className="Contact_image"></div>
    </div>
  );
}

export default Contact;
