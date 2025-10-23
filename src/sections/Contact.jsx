import React from 'react'

const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="contact_contactWrapper__imGw1">
        <div
          style={{ position: "relative", width: "100%", overflow: "hidden" }}
        >
          <div>
            <h4 className="contact_contactTitle__oMNhX">
              Contact<span>.</span>
            </h4>
          </div>
          <div className="overlay"></div>
        </div>
        <div
          style={{ position: "relative", width: "100%", overflow: "hidden" }}
        >
          <div>
            <p className="contact_contactCopy__oCo8c">
              Shoot me an email if you want to connect! You can also find me on
              <a href="https://www.linkedin.com/in/akhil-k-26a848296/">
                Linkedin
              </a>
              or
              <a href="https://twitter.com/4khiltweets">Twitter</a>if that's
              more your speed.
            </p>
          </div>
          <div className="overlay"></div>
        </div>
        <div
          style={{ position: "relative", width: "100%", overflow: "hidden" }}
        >
          <div>
            <a href="mailto:4khil.contact@gmail.com">
              <div className="contact_contactEmail__Fr6hH">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 1024 1024"
                  height="2.4rem"
                  width="2.4rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
                </svg>
                <span>4khil.contact@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact