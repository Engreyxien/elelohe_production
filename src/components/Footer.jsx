import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div
      className="bg-body-tertiary text-center"
      data-bs-theme="dark"
      style={{
        height: "70px",
        textAlign: "justify",
        color: "#f1faee",
      }}
    >
      {" "}
      <p className="text-center" style={{ fontFamily: "serif" }}>
        Copyright © 2024 El Elohe Group of Companies. | All Rights Reserve.
      </p>
    </div>
  );
};

export default Footer;
