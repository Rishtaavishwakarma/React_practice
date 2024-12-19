import React, { useState } from "react";

export default function FormComponent() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5482f5c-b57b-408b-8c71-b3bc568bfcc8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Contact Us</h2>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
      className ="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        className ="input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        className = "textarea"
        ></textarea>
        <button type="submit" className="button">
          Submit Form
        </button>
      </form>
      <span className="result">{result}</span>
    </div>
  );
}


