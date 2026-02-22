function Hero() {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 10);

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(time);

  return (
    <div className="hero-root">
      <div className="badge">
        <span>Lorem ipsum taxes are due by March 1</span>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <div>
        <h1 className="hero-title">Magically simplify lorem and ipsum</h1>

        <p className="hero-subtitle">
          Automated lorem. Effortless ipsum filing. Lorem ipsum clarity. Set up
          in 10 mins. Back to building by {time}.
        </p>

        <div className="hero-cta">
          <button className="btn">Start Free Trial</button>
          <button className="btn btn-secondary">
            <span>Pricing</span>
            <svg width="16" height="16" fill="none">
              <path
                stroke="#1E1F25"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity=".5"
                stroke-width="1.25"
                d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
              ></path>
            </svg>
          </button>
        </div>


      </div>
    </div>
  );
}

export default Hero;
