const Interests = () => {
  return (
    <div className="page-background-gradients py-12 flex flex-col items-center gap-16 px-6">
      {/* intro "interests" heading */}
      <section className="interest-box">
        <h1 className="heading-1 text-center">
            My Interests
        </h1>
        <p className="main-info-text">
          description here
        </p>
      </section>

      {/* box (nature interest) */}
      <section className="interest-box min-h-[350px] flex flex-col md:flex-row items-center gap-8">
        <div>
          <h2 className="heading-2">
            Nature
            </h2>
          <p className="main-info-text">
            description here
          </p>
        </div>
        <img src="/photos/IMG_7718.jpeg" className="images"/>
        <img src="/photos/IMG_5527.jpeg" className="images"/>
      </section>

      {/* box (baking interest) */}
      <section className="interest-box min-h-[350px] flex flex-col md:flex-row items-center gap-8">
        <div>
          <h2 className="heading-2">
            Baking
        </h2>
          <p className="main-info-text">
            description
          </p>
        </div>
        <img src="/photos/IMG_7032.jpeg" className="images"/>
        <img src="/photos/IMG_4794.jpeg" className="images"/>
      </section>
    </div>
  );
};

export default Interests;




