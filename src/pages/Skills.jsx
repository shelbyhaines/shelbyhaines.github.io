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
          This page highlights the skills I have developed throughout my academic and professional 
          experiences. It also includes a section listing the programming languages 
          and technologies I am familiar with.
        </p>
        </div>
      </section>


      {/* work experience section */}
      <section className="skills-box mt-12">
        <h2 className="heading-2 text-center" style={{ marginBottom: '0rem' }}>
          Work Experience
        </h2>

        <div className="main-info-text text-left space-y-6">
          <div>
            <p className="text-xl font-semibold text-indigo-700">
              Math Tutor <span className="font-normal text-gray-700">| Sep 2019 – Present</span>
            </p>
            <ul className="list-disc list-inside mt-1">
              <li>Design and lead personalized tutoring sessions using interactive explanations to reinforce course concepts.</li>
              <li>Use MS Excel to manage finances, including tracking payments and invoicing.</li>
            </ul>
          </div>
        </div>
      </section>




      {/* volunteering section */}
      <section className="skills-box mt-12">
        <h2 className="heading-2 text-center" style={{ marginBottom: '0rem' }}>
          Volunteer Involvement & Achievements
        </h2>

        <div className="main-info-text text-left space-y-6">
          {/* YWCA */}
          <div>
            <p className="text-xl font-semibold text-indigo-700">
              Youth Ambassador & Advisor | YWCA Metro Vancouver <span className="font-normal text-gray-700">| Fall 2019 – Fall 2021</span>
            </p>
            <ul className="list-disc list-inside mt-1">
              <li>~80 volunteer hours working with youth in a mentorship program.</li>
              <li>Led information sessions for upcoming high school students and provided feedback on curriculum design.</li>
            </ul>
          </div>

          {/* case competition */}
          <div>
            <p className="text-xl font-semibold text-indigo-700">
              1st Place | Achieve Case Competition (SFU Accounting Student Association) <span className="font-normal text-gray-700">| Nov 2023</span>
            </p>
            <ul className="list-disc list-inside mt-1">
              <li>Demonstrated public speaking and presentation skills in a team-based academic setting.</li>
              <li>Displayed a strong knowledge of business and accounting concepts.</li>
            </ul>
          </div>

          {/* business fair */}
          <div>
            <p className="text-xl font-semibold text-indigo-700">
              Volunteer | DiverseCity Entrepreneur & Small Business Fair <span className="font-normal text-gray-700">| Oct 2023</span>
            </p>
            <ul className="list-disc list-inside mt-1">
              <li>Applied time management to meet marketing deadlines and develop a consistent posting schedule.</li>
              <li>Designed social media promotional content to increase community engagement.</li>
            </ul>
          </div>
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
