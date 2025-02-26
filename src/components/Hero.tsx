'use client'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-content-title">Hi, I'm Luke</h1>
        <p className="hero-content-text">I'm a Web Developer</p>
      </div>
      <div className="scroll-indicator">
        <button onClick={scrollToNext} aria-label="Scroll to next section">
          <i className="bi bi-chevron-down"></i>
        </button>
      </div>
    </section>
  );
}
