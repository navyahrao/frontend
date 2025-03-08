import "./Toasts.css";
import React, { useState } from "react";

function Toasts() {
  const [toastValue, setToastValue] = useState({});
  const [toasts, setToasts] = useState([]);

  const handleChange = (e) => {
    setToastValue({ ...toastValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(toastValue).length) {
      alert("Please enter a toast message");
      return;
    }
    setToasts((toasts) => [...toasts, toastValue]);
  };

  const handleClose = (i) => {
    let currentToasts = [...toasts];
    let newToasts = currentToasts.filter((toast, index) => i !== index);
    setToasts(newToasts);
  };

  return (
    <div className="mainContainer">
      <div className="toastForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="toast"
            className="inputField"
            onChange={handleChange}
          />
          <button className="submitButton">Submit</button>
        </form>
      </div>

      <div className="toasts">
        {toasts.map((toast, i) => {
          return (
            <div key={i} className="toast animateToast">
              {toast.toast}{" "}
              <button className="closeIcon" onClick={() => handleClose(i)}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Toasts;
