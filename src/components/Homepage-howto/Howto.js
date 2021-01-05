import React from 'react';

import './howto.css';

const Howto = () => {
    return (
        <section id="howto" className="howto">
        <h2 className="heading-secondary">How to use this app?</h2>
        <div className="howto-container">
          <div className="howto-item">
            <span className="step-num">1</span>
            <p className="step">
              go to the leagues menu in the navbar and choose the
              league you are interested in.
            </p>
          </div>
          <div className="howto-item">
            <span className="step-num">2</span>
            <p className="step">
              Then you see a page with standing table of the selected league
              with the table tab selected, the default is English premier league.
            </p>
          </div>
          <div className="howto-item">
            <span className="step-num">3</span>
            <p className="step">
              From the tabs available you can select to see top scorers and
              previous matches result.
            </p>
          </div>
        </div>
      </section>
    )
}

export default Howto
