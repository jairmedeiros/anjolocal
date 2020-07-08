import './styles.scss';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section text-light container-sm">
        <div className="section-inner">
          <div className="text-center">
            <h2 className="section-title mt-0">Gostou do que viu?</h2>
            <p className="section-paragraph">
              Nosso objetivo é ser uma plataforma de doações independente, autossuficiente e
              personalizada para informar instituições que precisam de doação com base na sua
              localização!
            </p>
            <p className="section-paragraph">
              Queremos ser a ponte facilitadora entre instituições que almejam mudar o mundo de
              pessoas que buscam esta mudança.
            </p>
            <h3 className="section-title mt-0">
              <a style={{ color: '#fff' }} href="mailto:contato@anjolocal.com.br">
                contato@anjolocal.com.br
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="footer-secondary container">
        <div className="site-footer-inner has-top-divider">
          <div className="brand footer-brand">
            <a href="#">
              <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
                <title>April</title>
                <defs>
                  <linearGradient
                    x1="114.674%"
                    y1="39.507%"
                    x2="-52.998%"
                    y2="39.507%"
                    id="logo-footer-a"
                  >
                    <stop stopColor="#8D92FA" offset="0%" />
                    <stop stopColor="#8D92FA" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="93.05%"
                    y1="19.767%"
                    x2="15.034%"
                    y2="85.765%"
                    id="logo-footer-b"
                  >
                    <stop stopColor="#FF3058" offset="0%" />
                    <stop stopColor="#FF6381" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="32.716%"
                    y1="-20.176%"
                    x2="32.716%"
                    y2="148.747%"
                    id="logo-footer-c"
                  >
                    <stop stopColor="#FF97AA" offset="0%" />
                    <stop stopColor="#FF97AA" stopOpacity={0} offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M31.12 7.482C28.327 19.146 19.147 28.326 7.483 31.121A12.04 12.04 0 0 1 .88 24.518C3.674 12.854 12.854 3.674 24.518.879a12.04 12.04 0 0 1 6.603 6.603z"
                    fill="#312ECA"
                  />
                  <path
                    d="M28.874 3.922l-24.91 24.99a12.026 12.026 0 0 1-3.085-4.394C3.674 12.854 12.854 3.674 24.518.879a12.025 12.025 0 0 1 4.356 3.043z"
                    fill="url(#logo-footer-a)"
                  />
                  <g opacity=".88">
                    <path
                      d="M31.12 24.518a12.04 12.04 0 0 1-6.602 6.603C12.854 28.326 3.674 19.146.879 7.482A12.04 12.04 0 0 1 7.482.88c11.664 2.795 20.844 11.975 23.639 23.639z"
                      fill="url(#logo-footer-b)"
                    />
                    <path
                      d="M24.518 31.12C12.854 28.327 3.674 19.147.879 7.483A12.015 12.015 0 0 1 3.46 3.57L28.47 28.5a12.016 12.016 0 0 1-3.951 2.62z"
                      fill="url(#logo-footer-c)"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <ul className="footer-links list-reset">
            <li>
              <a href="#">Quem somos</a>
            </li>
            <li>
              <a href="#">Tecnologias utilizadas</a>
            </li>
            <li>
              <a href="#">
                <strong>Colabore com a gente!</strong>
              </a>
            </li>
          </ul>
          <ul className="footer-social-links list-reset">
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <span className="screen-reader-text">Facebook</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <span className="screen-reader-text">Twitter</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <span className="screen-reader-text">Github</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    transform="scale(0.66667)"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <span className="screen-reader-text">Instagram</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    transform="scale(0.66667)"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <span className="screen-reader-text">Telegram</span>
                <svg
                  width={16}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  style={{
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '1.41421',
                  }}
                >
                  <path
                    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                    transform="scale(0.66667)"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            Copyright © 2020 Anjolocal | Template original por&nbsp;{' '}
            <a href="https://cruip.com/april/" target="_blank" rel="noreferrer">
              Cruip
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
