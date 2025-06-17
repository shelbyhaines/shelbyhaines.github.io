const Contact = () => {
  return (
    <div className="page-background-gradients py-12 flex flex-col items-center gap-16 px-6">
      {/* 'contact me' heading */}
      <section className="interest-box">
        <div className="introduction-section">
        <h1 className="heading-1 text-center mb-4">
            Contact Me & Learn More
        </h1>
        <p className="main-info-text">
          description here
        </p>
        </div>
      </section>

      {/* content, six sections, each with a link */}
        <section className="section-grid">

        {/* LinkedIn */}
        <div className="contact-box h-60 flex flex-col justify-between">
            <h2 className="small-information-titles">
                LinkedIn
            </h2>
            <p className="main-info-text">
                description.
            </p>
            <a 
            href="https://www.linkedin.com/in/shelbyhaines?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <button className="button">Click here</button>
            </a>
        </div>

        {/* resume */}
        <div className="contact-box h-60 flex flex-col justify-between">
            <h2 className="small-information-titles">
                Resume
            </h2>
            <p className="main-info-text">
                Description
            </p>
            <a href="https://drive.google.com/file/d/154yWXtHmy7GVqVQre01ETTO9LyOrD3W4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* GitHub */}
        <div className="contact-box h-60 flex flex-col justify-between">
            <h2 className="small-information-titles">
                GitHub
            </h2>
            <p className="main-info-text">
                Descripton
            </p>
            <a href="https://github.com/shelbyhaines" target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* SFU website */}
        <div className="contact-box h-60 flex flex-col justify-between">
            <h2 className="small-information-titles">
                SFU Website
            </h2>
            <p className="main-info-text">
                Description
            </p>
            <a href="https://www.sfu.ca/students/calendar/2025/summer/programs/information-systems-in-business-administration-and-computing-science/joint-major/bachelor-of-business-administration-or-bachelor-of-science.html" 
            target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* Email */}
        <div className="contact-box h-60 flex flex-col justify-between">
            <h2 className="small-information-titles">
                Volunteer Roles
            </h2>
            <p className="main-info-text">
                Description
            </p>
            <a href="https://young-sprout-117.notion.site/Volunteering-Programs-2155b60ba1ea808aadf4eb594435cf6c?source=copy_link"
            target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* message */}
        <div className="contact-box h-60 flex flex-col justify-between">
            <h2 className="small-information-titles">
                Send a Message
            </h2>
            <p className="main-info-text">
                Description.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeweuIa8NEUOw28673rfBuhz1O9gwwGg9cyjV_qBd2Kt_-ow/viewform?usp=dialog"
            target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>
        </section>

      


    </div>
  );
};

export default Contact;