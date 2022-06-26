function RadioButton(props) {
  return (
    <>
      <label className="container">
        {props.label}
        <input type="radio"  name={props.name} value={props.label} onChange={props.handleRadio} />
        <span className="checkmark"></span>
      </label>
     
      <style jsx>{`
        .container {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          letter-spacing: 0px;
          color: #454545;
          opacity: 1;
          font-size: 10px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Hide the browser's default radio button */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        /* Create a custom radio button */
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 22px;
          width: 22px;
          background-color: #E0E5F8;
          border-radius: 50%;
        }

        /* On mouse-over, add a grey background color */
        .container:hover input ~ .checkmark {
          background-color: #ccc;
        }

        /* When the radio button is checked, add a blue background */
        .container input:checked ~ .checkmark {
            background-color: #ff6738;
        }

        /* Create the indicator (the dot/circle - hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        /* Show the indicator (dot/circle) when checked */
        .container input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the indicator (dot/circle) */
        .container .checkmark:after {
          top: 7px;
          left: 7px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
        }
      `}</style>
    </>
  );
}
export default RadioButton;
