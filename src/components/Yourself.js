import "../styles/Yourself.css";

function Want() {
  return (
    <div className="Want">
      <p>Tell us about yourself</p>
      <p>What product do you want to source?</p>
      <textarea />
      <p>Do you have an Amazon or Alibaba link?</p>
      <textarea />
      <p>How soon do you need samples?</p>
      <textarea />
      <hr />
      <p>Full Name</p>
      <textarea />
      <p>Email</p>
      <textarea />
      <p>Phone Number</p>
      <textarea />
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
  );
}

export default Want;
