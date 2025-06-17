const Interests = () => {
  return (
    <div className="page-background-gradients py-12 flex flex-col items-center gap-16 px-6">
      {/* intro "interests" heading */}
      <section className="interest-box">
        <div className="introduction-section">
        <h1 className="heading-1 text-center mb-4">
            My Interests
        </h1>
        <p className="main-info-text">
          I try to make time for activities beyond work or school,
          and this page explores some of the hobbies I enjoy in my free time.
        </p>
        </div>
      </section>

      {/* box (nature interest) */}
      <section className="interest-box min-h-[350px] flex flex-col md:flex-row items-center gap-8">
        <div>
          <h2 className="heading-2">
            Nature
            </h2>
          <p className="main-info-text">
            I am an active person, and one of my favourite ways to stay active is by 
            going hiking or taking nature walks. There are lots of trails near where I live 
            that I enjoy, but whenever I can, I like to go to Vancouver, 
            as there are many interesting routes to explore. 
            <br></br><br></br>
            One of the fun parts of being active outside is that you get to see lots of wildlife. 
            Near where I live, I often see rabbits, birds, and even fish 
            in some of the streams.
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
            When I was younger I would often help my mom bake, and I have continued to learn new 
            recipies throughout my life.
            Whenever there is a special occassion, I look forward to baking something to bring.
            <br></br><br></br>
            I enjoy the science of baking and how I can use knowledge of certain ingredients to 
            improve recipies. 
            Over the years I have developed many of my own recipies,
            with my favourite being a mint chocolate cake.
          </p>
        </div>
        <img src="/photos/IMG_7032.jpeg" className="images"/>
        <img src="/photos/IMG_4794.jpeg" className="images"/>
      </section>
    </div>
  );
};

export default Interests;




