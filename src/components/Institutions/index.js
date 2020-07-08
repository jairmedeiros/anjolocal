import './styles.scss';

function Institutions() {
  return (
    <section className="institutions section">
      <div className="institutions-shape institutions-shape-1">
        <svg width={280} height={280} viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="institutions-shape-1">
              <stop stopColor="#c54c82" offset="0%" />
              <stop stopColor="#a94caf" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            cx={140}
            cy={685}
            r={140}
            transform="translate(0 -545)"
            fill="url(#institutions-shape-1)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="institutions-shape institutions-shape-2">
        <svg width={125} height={107} viewBox="0 0 125 107" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#C6FDF3" cx={48} cy={59} r={48} />
            <path
              d="M58.536 39.713c0-6.884 1.72-14.007 5.163-21.368 3.443-7.36 8.167-13.458 14.173-18.292l11.645 7.91c-3.589 4.98-6.262 10.016-8.02 15.106S78.86 33.598 78.86 39.384v13.623H58.536V39.713z"
              fill="#55EBD0"
            />
            <path
              d="M93.252 39.713c0-6.884 1.722-14.007 5.164-21.368 3.442-7.36 8.166-13.458 14.172-18.292l11.646 7.91c-3.589 4.98-6.262 10.016-8.02 15.106s-2.637 10.529-2.637 16.315v13.623H93.252V39.713z"
              fill="#1ADAB7"
            />
          </g>
        </svg>
      </div>
      <div className="institutions-shape institutions-shape-3">
        <svg width={48} height={48} viewBox="0 0 48 48" mlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              x1="93.05%"
              y1="19.767%"
              x2="15.034%"
              y2="85.765%"
              id="institutions-shape-3"
            >
              <stop stopColor="#FF3058" offset="0%" />
              <stop stopColor="#FF6381" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            cx={24}
            cy={434}
            r={24}
            transform="translate(0 -410)"
            fill="url(#institutions-shape-3)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="container">
        <div className="institutions-inner section-inner">
          <h2 className="section-title mt-0 text-center">Algumas das instituições presentes</h2>
          <div className="institutions-wrap">
            <div className="institution text-xs is-revealing">
              <div className="institution-inner">
                <div className="institution-main">
                  <div className="institution-header">
                    <img
                      className="mb-16"
                      src="/static/images/testimonial-01.png"
                      alt="institution"
                    />
                  </div>
                  <div className="institution-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.
                    </p>
                  </div>
                </div>
                <div className="institution-footer">
                  <div className="institution-link">
                    <span>Recife-PE</span>
                    <a href="#">Ver mais +</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="institution text-xs is-revealing">
              <div className="institution-inner">
                <div className="institution-main">
                  <div className="institution-header">
                    <img
                      className="mb-16"
                      src="/static/images/testimonial-02.png"
                      alt="institution"
                    />
                  </div>
                  <div className="institution-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.
                    </p>
                  </div>
                </div>
                <div className="institution-footer">
                  <div className="institution-link">
                    <span>Recife-PE</span>
                    <a href="#">Ver mais +</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="institution text-xs is-revealing">
              <div className="institution-inner">
                <div className="institution-main">
                  <div className="institution-header">
                    <img
                      className="mb-16"
                      src="/static/images/testimonial-03.png"
                      alt="institution"
                    />
                  </div>
                  <div className="institution-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.
                    </p>
                  </div>
                </div>
                <div className="institution-footer">
                  <div className="institution-link">
                    <span>Recife-PE</span>
                    <a href="#">Ver mais +</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Institutions;
