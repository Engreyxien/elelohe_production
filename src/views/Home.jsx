import logo from "../assets/eebbqlogo.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="p-4"
      style={{ height: "100%", marginTop: "100px", marginBottom: "100px" }}
    >
      <h1
        className="text-left"
        style={{ color: "#ff0080", fontStyle: "Sans-Serif" }}
      >
        El Elohe Barbeque House
      </h1>
      <div className="about-container">
        <div className="row d-flex">
          <div className="col w-100">
            {" "}
            <p
              style={{
                textAlign: "justify",
                color: "blue",
                marginTop: "50px",
                fontSize: "20px",
                fontFamily: "Sans-Serif",
                marginRight: "50px",
                marginLeft: "50px",
              }}
            >
              El Elohe Barbeque House: EL ELOHE BARBEQUE HOUSE is a dynamic
              culinary enterprise that has been delighting the taste buds of
              Romblon Province since July 6, 2020. Renowned for our specialty
              lies in perfectly crafted fried chicken. We are excited to
              announce that in 2023, we are open for franchising.
            </p>
          </div>
          <div className="col-auto me-auto">
            <img
              src={logo}
              alt="logo"
              className="object-fit cover img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
