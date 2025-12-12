import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  // ================= Error Messages End here ===================
  const [successMsg, setSuccessMsg] = useState("");

  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ================= Email Validation End here =================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios
        .post("https://getform.io/f/bjjjyqkb", {
          name: clientName,
          email: email,
          message: messages,
        })
        .then(() => {
          setSuccessMsg(
            `Hello dear ${clientName}, Your message has been sent successfully. Thank you for your time!`
          );
          setClientName("");
          setEmail("");
          setMessages("");
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          setSuccessMsg("Sorry, there was an issue sending your message.");
        });
    }
  };

  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Ouagadougou
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +226 72438345
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            astridgansonre@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titleFont p-10 text-designColor bg-designColor/10 rounded-2xl mx-6">
            {successMsg}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/bjjjyqkb"
            method="POST"
            className="p-6 flex flex-col gap-6"
            onSubmit={handleSend} // Trigger the handleSend function on form submission
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm text-textColor/70">Nom complet</label>
                <input
                  onChange={handleName}
                  value={clientName}
                  className={`${
                    errClientName
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-700 focus-visible:border-designColor"
                  } w-full bg-surfaceColor border px-4 py-3 text-base text-gray-200 outline-none duration-300 rounded-xl`}
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm text-textColor/70">Email</label>
                <input
                  onChange={handleEmail}
                  value={email}
                  className={`${
                    errEmail
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-700 focus-visible:border-designColor"
                  } w-full bg-surfaceColor border px-4 py-3 text-base text-gray-200 outline-none duration-300 rounded-xl`}
                  type="email"
                  name="email"
                  placeholder="nom@email.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-textColor/70">Message</label>
              <textarea
                onChange={handleMessages}
                value={messages}
                className={`${
                  errMessages
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-700 focus-visible:border-designColor"
                } w-full bg-surfaceColor border px-4 py-3 text-base text-gray-200 outline-none duration-300 resize-none rounded-xl`}
                placeholder="Votre message"
                name="message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit" // Make sure this is a submit button
              className="text-base w-44 h-12 flex items-center gap-2 justify-center text-slate-950 bg-designColor rounded-xl hover:shadow-greenShadow duration-200 font-semibold"
            >
              Send Message{" "}
              <span className="mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
