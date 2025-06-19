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
          This page includes links to my professional profiles and other sites where you can learn more about my experiences. 
          You’ll also find a way to get in touch with me!
        </p>
        </div>
      </section>

      {/* content, six sections, each with a link */}
        <section className="section-grid">

        {/* LinkedIn */}
        <div className="contact-box flex flex-col justify-between min-h-[15rem]">
            <h2 className="small-information-titles">
                LinkedIn
            </h2>
            <p className="main-info-text flex-grow">
                Connect with me on LinkedIn to see my experience, network,
                and get updates on my career progress.
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
        <div className="contact-box flex flex-col justify-between min-h-[15rem]">
            <h2 className="small-information-titles">
                Resume
            </h2>
            <p className="main-info-text flex-grow">
                View my resume to see a comprehensive summary of my 
                education, skills, and experience.
            </p>
            <a href="https://drive.google.com/file/d/154yWXtHmy7GVqVQre01ETTO9LyOrD3W4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* GitHub */}
        <div className="contact-box flex flex-col justify-between min-h-[15rem]">
            <h2 className="small-information-titles">
                GitHub
            </h2>
            <p className="main-info-text flex-grow">
                Check out my GitHub profile to explore my repositories,
                and the code behind my class assignments.
            </p>
            <a href="https://github.com/shelbyhaines" target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* SFU website */}
        <div className="contact-box flex flex-col justify-between min-h-[15rem]">
            <h2 className="small-information-titles">
                SFU Website
            </h2>
            <p className="main-info-text flex-grow">
                Learn more about my degree and university program through
                the official SFU information page.
            </p>
            <a href="https://www.sfu.ca/students/calendar/2025/summer/programs/information-systems-in-business-administration-and-computing-science/joint-major/bachelor-of-business-administration-or-bachelor-of-science.html" 
            target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* volunteer */}
        <div className="contact-box flex flex-col justify-between min-h-[15rem]">
            <h2 className="small-information-titles">
                Volunteer Roles
            </h2>
            <p className="main-info-text flex-grow">
                Discover more about the volunteer programs I have 
                participated in and how I contributed.
            </p>
            <a href="https://young-sprout-117.notion.site/Volunteering-Programs-2155b60ba1ea808aadf4eb594435cf6c?source=copy_link"
            target="_blank" rel="noopener noreferrer">
            <button className="button">Click here</button>
            </a>
        </div>

        {/* message */}
        <div className="contact-box flex flex-col justify-between min-h-[15rem]">
            <h2 className="small-information-titles">
                Send a Message
            </h2>
            <p className="main-info-text flex-grow">
                You can send me an email at srh11@sfu.ca, or you 
                can send a message through this linked form.
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