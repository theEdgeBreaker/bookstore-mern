import { useState } from "react";

function Contact() {
  const [formValues, setFormvalues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formValues);
    alert("Form Submitted!");
  };

  return (
    <>
      <div className="px-6 md:px-12 py-14 md:py-24 flex flex-col items-center">
        <div className="space-y-4 pt-6 w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control space-y-2">
              <span className="text-sm">Name</span>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control space-y-2">
              <span className="text-sm">Email address</span>
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-control space-y-2">
              <span className="text-sm">Message</span>
              <textarea
                className="textarea textarea-bordered w-full h-28"
                placeholder="Type your message here"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <button className="btn btn-primary w-full md:w-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
