function Skills() {
  return (
    <div className="page-background-gradients">
        {/* intro to page */}
      <section className="interest-box">
        <div className="introduction-section">
        <h1 className="heading-1 text-center mb-4">
            Skills
        </h1>
        <p className="main-info-text">
          description of page
        </p>
        </div>
      </section>


      {/* technologies section */}
      <section className="skills-box mt-12 ">
          <h2 className="heading-2" style={{ marginBottom: '0.25rem' }}>
            Programming Languages & Technologies
          </h2>
      {/* grid of 6 boxes with the languages*/}
        <div className="section-grid">
          <div className="technology-box">C/C++</div>
          <div className="technology-box">Python</div>
          <div className="technology-box">JavaScript</div>
          <div className="technology-box">HTML</div>
          <div className="technology-box">CSS</div>
          <div className="technology-box">Excel</div>
        </div>
      </section>

    </div>
  );
}

export default Skills;
