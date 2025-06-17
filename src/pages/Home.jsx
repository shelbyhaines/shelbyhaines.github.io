import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="page-background-gradients">
      { /* overview/bio section */}
      <div className="large-information-box">
        <h1 className="heading-1">
          Shelby Haines
        </h1>
        <h2 className="heading-2">
          Personal Portfolio
        </h2>
        <p className="main-info-text">
          Hi! I'm Shelby, a student at Simon Fraser University pursuing a Bachelor of Science with a joint major in 
          Business Administration and Computer Science.
        </p>
        <p className="main-info-text mt-4">
          This website provides an overview of my skills, experience, and personal 
          interests. It also includes links to my LinkedIn and GitHub pages for more information.
        </p>
      </div>

      {/* three pages descriptions */}

      <div className="section-grid">
        <div className="small-information-box">
          <h3 className="small-information-titles">
            Skills
          </h3>
          <p className="main-info-text">
            Click here to learn about my work experience, 
            along with the coding languages I use.
          </p>
        </div>

        <div className="small-information-box">
          <Link to="/interests">
          <h3 className="small-information-titles">
            Interests
          </h3>
          <p className="main-info-text">
            Click here to learn about my interests outside of school, 
            including nature and baking.
          </p>
          </Link>
        </div>

        <div className="small-information-box">
          <Link to="/contact">
          <h3 className="small-information-titles">
            Contact
          </h3>
          <p className="main-info-text">
            Click here to get in touch with me and access links to 
            my GitHub and LinkedIn profiles.
          </p>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;


