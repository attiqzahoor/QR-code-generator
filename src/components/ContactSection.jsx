import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const iconTextStyle = {
    display: "flex",
    alignItems: "center",
    color: "#e0e0ff",
    fontSize: "18px",
    margin: "12px 0",
    cursor: "pointer",
    transition: "color 0.4s ease-out",
    userSelect: "none",
  };

  const iconStyle = {
    color: "#e0e0ff",
    fontSize: "28px",
    marginRight: "12px",
    flexShrink: 0,
    transition: "color 0.3s ease-in-out",
  };

  const iconHover = (e) => {
    e.currentTarget.style.color = "#9b59b6";
  };

  const iconLeave = (e) => {
    e.currentTarget.style.color = "#e0e0ff";
  };

  const nameStyle = {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "left",
    userSelect: "none",
    color: "#e0e0ff",
    transition: "color 0.6s ease-out",
    marginBottom: "20px",
  };

  const handleNameHover = (e) => {
    e.currentTarget.style.color = "#9b59b6";
  };

  const handleNameLeave = (e) => {
    e.currentTarget.style.color = "#e0e0ff";
  };

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #1f1c2c, #3a1c71, #928dab)",
        color: "#e0e0ff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        gap: "30px",
      }}
    >
      {/* Left - Title */}
      <div
        style={{
          flex: "1 1 100%",
          textAlign: "center",
        }}
      >
        <div
          style={nameStyle}
          onMouseEnter={handleNameHover}
          onMouseLeave={handleNameLeave}
        >
          QR Code Generator
        </div>
      </div>

      {/* Middle - Social Links */}
      <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={iconTextStyle}
          onMouseEnter={iconHover}
          onMouseLeave={iconLeave}
        >
          <FaLinkedin style={iconStyle} />
          LinkedIn
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={iconTextStyle}
          onMouseEnter={iconHover}
          onMouseLeave={iconLeave}
        >
          <FaGithub style={iconStyle} />
          GitHub
        </a>
        <a
          href="mailto:attiqmuhammad51@gmail.com"
          aria-label="Email"
          style={iconTextStyle}
          onMouseEnter={iconHover}
          onMouseLeave={iconLeave}
        >
          <FaEnvelope style={iconStyle} />
          Email
        </a>
        <a
          href="https://wa.me/03021183906"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={iconTextStyle}
          onMouseEnter={iconHover}
          onMouseLeave={iconLeave}
        >
          <FaWhatsapp style={iconStyle} />
          WhatsApp
        </a>
      </div>

      {/* Right - Google Map */}
      <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          title="Lahore Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13627.575372239163!2d74.31601171271892!3d31.52036950801615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dbadef17a5%3A0x5a097d82c4a3520a!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1694673658136!5m2!1sen!2sus"
          width="100%"
          height="240"
          style={{
            maxWidth: "400px",
            width: "100%",
            border: "none",
            borderRadius: "12px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactSection;
