import "./Hero.scss";


function Hero() {
    return (
        <div className="hero">
            <p className="colored p-regular hi-tag">[ Hi, I am ]</p>
            <h1>Zoran Todorović,</h1>
            <h2>Junior Frontend Developer</h2>
            <p className="hero-desc">I am Frontend developer based in Sombor, Serbia. My main trait is making minimalistic, user friendly, web apps and components.</p>
            <button className="cta">Let's talk</button>
        </div>
    );
}

export default Hero;
