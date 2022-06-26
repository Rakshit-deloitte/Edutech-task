import { useEffect, useState } from "react";
import AlertDialog from "../components/alert";
import Checkbox from "../components/custom-checkbox";
import RadioButton from "../components/custom-radio-button";
import Header from "../components/header";
import InputBox from "../components/inputbox";
import SimpleSnackbar from "../components/snackbar";

function Profile() {
  const checboxData = [
    "Designer",
    "Developer",
    "Project Manager",
    "Professional",
  ];

  const AreaofInterest = ["Student", "Professional"];
  const ExperienceData = ["0-5", "5-10", "10 & Above"];
  const expertiseData = ["Java", "React", "Backend"];

  const [displayName, setDispalyName] = useState({});
  const [firstName, setFirstName] = useState({});
  const [lastName, setlastName] = useState({});
  const [aboutDesc, setaboutDesc] = useState({});
  const [interestArray, setInterestArray] = useState({});
  const [experience, setExperience] = useState({});
  const [user, setUser] = useState({});
  const [expertise, setExpertise] = useState({});
  const [role, setRole] = useState({});
  const [open, setOpen] = useState(false);
  const [mandatoryFields, setMandatoryFields] = useState(false);
  const [formData, setFormData] = useState({});
  let interestArray1 = [];

  const handleAlertDailog = () => {
    setOpen((modal) => !modal);
    console.log(formData);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMandatoryFields(false);
  };

  const handleCheckbox = (event) => {
    // let interestArray=[...interestArray1]
    if (event.target.checked) {
      interestArray1.push(event.target.name);
      let interestObj = { interestObj: interestArray1 };
      setInterestArray(interestObj);
      console.log(interestObj);
    }
  };
  const handleRadioInterest = (event) => {
    const user = { user: event.target.value };
    setUser(user);
  };
  const handleRadioExperience = (event) => {
    const experience = { experience: event.target.value };
    setExperience(experience);
  };
  const handleRadioExpertise = (event) => {
    let expertise = { expertise: event.target.value };
    setExpertise(expertise);
  };

  const handleDisplayName = (event) => {
    let displayName = { displayName: event.target.value };
    setDispalyName(displayName);
  };

  const handleFirstName = (event) => {
    let firstName = { firstName: event.target.value };
    setFirstName(firstName);
  };

  const handleLastName = (event) => {
    let lastName = { lastName: event.target.value };
    setlastName(lastName);
  };

  const handleAboutDesc = (event) => {
    let aboutDesc = { aboutDesc: event.target.value };
    setaboutDesc(aboutDesc);
  };

  const handleRole = (event) => {
    let role = { role: event.target.value };
    setRole(role);
  };

  const checkIsFormValid = () => {
    console.log(formData);
    formData.displayName &&
    formData.firstName &&
    formData.lastName &&
    formData.aboutDesc &&
    formData.interestObj &&
    formData.user &&
    formData.experience &&
    formData.expertise &&
    formData.role
      ? handleAlertDailog()
      : setMandatoryFields(true);
  };


  useEffect(() => {
    let formData = {
      ...displayName,
      ...firstName,
      ...lastName,
      ...aboutDesc,
      ...interestArray,
      ...user,
      ...experience,
      ...expertise,
      ...role,
    };
    setFormData(formData);
  }, [
    displayName,
    firstName,
    lastName,
    aboutDesc,
    interestArray,
    user,
    experience,
    expertise,
    role,
  ]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row my-2">
          <div className="col-3">
            <img src={"/Images/preview.png"} width={200} />
          </div>
          <div className="col-9 courseMenu ">
            <div className="row align-items-center justify-content-between">
              <div className="col-4">
                <InputBox
                  label={"Display Name"}
                  placeholder={"Enter Display Name"}
                  handleChange={handleDisplayName}
                />
              </div>
              <div className="col-4">
                <InputBox
                  label={"First Name"}
                  placeholder={"Enter First Name"}
                  handleChange={handleFirstName}
                />
              </div>
              <div className="col-4">
                <InputBox
                  label={"Last Name"}
                  placeholder={"Enter Last Name"}
                  handleChange={handleLastName}
                />
              </div>
              <div className="col-8">
                <form>
                  <label className="inputBox my-2">About yourself</label>
                  <textarea
                    className="input-form form-control"
                    onChange={handleAboutDesc}
                  ></textarea>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="inputBox my-2"> Your area of interest</div>
                {checboxData.map((data) => (
                  <Checkbox
                    label={data}
                    handleChange={handleCheckbox}
                    key={data}
                  />
                ))}
              </div>
            </div>
            <div className="row my-2 mx-0 border mx-0">
              <div className="col-4">
                <div className="inputBox my-2">
                  Are you student or professional
                </div>
                {AreaofInterest.map((data) => (
                  <RadioButton
                    label={data}
                    handleRadio={handleRadioInterest}
                    key={data}
                    name={"user"}
                  />
                ))}
              </div>
              <div className="col-4">
                <div className="inputBox my-2">
                  How much of experience you have?
                </div>
                {ExperienceData.map((data) => (
                  <RadioButton
                    label={data}
                    handleRadio={handleRadioExperience}
                    key={data}
                    name={"experience"}
                  />
                ))}
              </div>
              <div className="col-4">
                <div className="inputBox my-2">What is your expertise</div>
                {expertiseData.map((data) => (
                  <RadioButton
                    label={data}
                    handleRadio={handleRadioExpertise}
                    key={data}
                    name={"expertise"}
                  />
                ))}
              </div>
              <div className="col-4 my-2">
                <InputBox
                  label={"Mention your role"}
                  placeholder={"Enter role Name"}
                  handleChange={handleRole}
                />
              </div>
            </div>
            <div className="row my-2 mx-0 justify-content-end">
              <div className="reactBtn px-4 py-2 cursor " onClick={checkIsFormValid}>
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog
        open={open}
        handleAlertDailog={handleAlertDailog}
        body={"you saved your profile successfully"}
      />
      <SimpleSnackbar
        open={mandatoryFields}
        severity={"error"}
        message={"All Fields are mandatory, Please fill all fields"}
        handleClose={handleClose}
      />
    </>
  );
}

export default Profile;
