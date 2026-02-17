import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    // Validation
    if (username === "") {
      setErrMsg("Username is required!");
      return;
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    } else if (email === "") {
      setErrMsg("Please give your Email!");
      return;
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
      return;
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
      return;
    } else if (message === "") {
      setErrMsg("Message is required!");
      return;
    }

    // Clear any previous errors
    setErrMsg("");
    setIsSubmitting(true);

    // Web3Forms API Integration
    try {
      const formData = {
        access_key: "6aca6f48-9c2f-4264-81ee-62849279cfcb",
        name: username,
        phone: phoneNumber,
        email: email,
        subject: subject,
        message: message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMsg(
          `Thank you ${username}! Your message has been sent successfully. I'll get back to you soon! 🚀`
        );
        // Clear form
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMsg("");
        }, 5000);
      } else {
        setErrMsg("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-designColor/20"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Get In Touch" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
          <ContactLeft />

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lgl:w-[60%] h-full py-10 bg-gradient-card backdrop-blur-xl border border-designColor/30 flex flex-col gap-8 p-8 rounded-2xl shadow-shadowTwo"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold gradient-text">Let's Work Together</h3>
              <p className="text-lightText/70 text-sm">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>

            <form onSubmit={handleSend} className="w-full flex flex-col gap-6">
              {/* Error Message */}
              {errMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2"
                >
                  <span>⚠️</span>
                  <span>{errMsg}</span>
                </motion.div>
              )}

              {/* Success Message */}
              {successMsg && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2"
                >
                  <FaCheckCircle />
                  <span>{successMsg}</span>
                </motion.div>
              )}

              {/* Name and Phone */}
              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-sm text-lightText/70 uppercase tracking-wide">
                    Your Name *
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="contactInput"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-sm text-lightText/70 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="contactInput"
                    type="text"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-lightText/70 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="contactInput"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-lightText/70 uppercase tracking-wide">
                  Subject *
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="contactInput"
                  type="text"
                  placeholder="Let's discuss a project"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-lightText/70 uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full h-14 rounded-xl text-base font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
                      ? 'bg-designColor/50 cursor-not-allowed'
                      : 'bg-gradient-primary hover:shadow-glowPurple text-white'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;