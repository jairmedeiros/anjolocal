import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState, useRef } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import { Modal } from '../../../../components/common';
import { showModal, hideModal } from '../../../../components/common/Modal/actions';

function Hero() {
  // TODO: Mandar informacoes de e-mail via store para ser recebido no Modal
  const { register, watch, setError, trigger, clearErrors, errors } = useForm({
    mode: 'onChange',
  });
  const node = useRef();
  const watchEmailHero = watch('emailHero', '');
  const dispatch = useDispatch();
  const modalId = 'newsletter-hero';
  const currentModal = useSelector((state) => state.modal.currents).find(
    (modalFetched) => modalFetched && modalFetched.id === modalId,
  );
  const [width, setWidth] = useState(undefined);

  if (!currentModal) {
    dispatch(hideModal(modalId));
  }

  useEffect(() => {
    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    function handleClickOutsideModal(e) {
      if (!node.current.contains(e.target)) {
        clearErrors('emailHero');
      }
    }

    if (errors.emailHero) {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    } else {
      document.addEventListener('mousedown', handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
      window.removeEventListener('resize', handleResize);
    };
  }, [clearErrors, errors, width]);

  async function handleClick(e) {
    e.preventDefault();
    const result = await trigger('emailHero');

    if (result) {
      if (currentModal.hide) {
        dispatch(showModal(modalId));
      } else {
        dispatch(hideModal(modalId));
      }
    }
  }

  return (
    <section className="hero">
      <Modal id={modalId}>Testing</Modal>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">Seja a esperança de alguém</h1>
            <p className="hero-paragraph">
              Localize instituições em nosso site, utilize nossos bots ou assine nossa newsletter.
              Conheça instituições que precisam de você!
            </p>
            <div className="hero-form field field-grouped">
              <div className="control control-expanded">
                <input
                  className="input"
                  type="email"
                  name="emailHero"
                  ref={useMergedRef(
                    register({
                      required: 'Insira um e-mail válido.',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Precisamos que seja um e-mail válido.',
                      },
                    }),
                    node,
                  )}
                  placeholder="Digite seu email…"
                />
                {width > 789 && errors.emailHero && (
                  <div className="hero-input-error">{errors.emailHero.message}</div>
                )}
              </div>
              <div className="control">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="button button-block button-primary button-shadow hero-button"
                >
                  Assinar
                </button>
              </div>
              {width < 789 && errors.emailHero && (
                <div className="hero-input-error">{errors.emailHero.message}</div>
              )}
            </div>
          </div>
          <div className="hero-illustration">
            <div className="hero-shape hero-shape-1">
              <svg
                width={40}
                height={40}
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: 'visible' }}
              >
                <circle
                  className="anime-element fadeup-animation"
                  cx={20}
                  cy={20}
                  r={20}
                  fill="#FFD8CD"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="hero-shape hero-shape-2">
              <svg
                width={88}
                height={88}
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: 'visible' }}
              >
                <circle
                  className="anime-element fadeup-animation"
                  cx={44}
                  cy={44}
                  r={44}
                  fill="#FFD2DA"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="hero-main-shape">
              <svg
                width={940}
                height={647}
                viewBox="0 0 940 647"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="hero-illustration-a">
                    <stop stopColor="#c54c82" offset="0%" />
                    <stop stopColor="#a94caf" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="89.764%"
                    y1="16.809%"
                    x2="11.987%"
                    y2="82.178%"
                    id="hero-illustration-b"
                  >
                    <stop stopColor="#FC8464" offset="0%" />
                    <stop stopColor="#FB5C32" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="100%"
                    y1="23.096%"
                    x2="4.439%"
                    y2="96.586%"
                    id="hero-illustration-c"
                  >
                    <stop stopColor="#2c858d" offset="0%" />
                    <stop stopColor="#35a6b0" offset="100%" />
                  </linearGradient>
                  <filter
                    x="-13%"
                    y="-150%"
                    width="126.1%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    id="hero-illustration-d"
                  >
                    <feGaussianBlur stdDeviation={32} in="SourceGraphic" />
                  </filter>
                  <linearGradient
                    x1="0%"
                    y1="100%"
                    x2="46.694%"
                    y2="42.915%"
                    id="hero-illustration-f"
                  >
                    <stop stopColor="#EEF1FA" offset="0%" />
                    <stop stopColor="#FFF" offset="100%" />
                  </linearGradient>
                  <rect id="hero-illustration-e" width={800} height={450} rx={4} />
                  <linearGradient
                    x1="100%"
                    y1="-12.816%"
                    x2="0%"
                    y2="-12.816%"
                    id="hero-illustration-g"
                  >
                    <stop stopColor="#D2DAF0" stopOpacity={0} offset="0%" />
                    <stop stopColor="#D2DAF0" offset="50.045%" />
                    <stop stopColor="#D2DAF0" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="116.514%"
                    y1="-21.201%"
                    x2="0%"
                    y2="100%"
                    id="hero-illustration-h"
                  >
                    <stop stopColor="#55EBD0" offset="0%" />
                    <stop stopColor="#a94caf" offset="100%" />
                  </linearGradient>
                  <path id="hero-illustration-j" d="M0 0h308v288H0z" />
                  <filter
                    x="-15.6%"
                    y="-12.5%"
                    width="139%"
                    height="141.7%"
                    filterUnits="objectBoundingBox"
                    id="hero-illustration-i"
                  >
                    <feOffset dx={12} dy={24} in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation={16}
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <circle id="hero-illustration-k" cx={16} cy={16} r={16} />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-m">
                    <stop stopColor="#C6FDF3" offset="0%" />
                    <stop stopColor="#C6FDF3" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="2.875%"
                    y1="89.028%"
                    x2="99.412%"
                    y2="6.885%"
                    id="hero-illustration-n"
                  >
                    <stop stopColor="#83F0DD" offset="0%" />
                    <stop stopColor="#1ADAB7" offset="50.924%" />
                    <stop stopColor="#55EBD0" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="1.569%"
                    x2="50%"
                    y2="97.315%"
                    id="hero-illustration-o"
                  >
                    <stop stopColor="#FF97AA" offset="0%" />
                    <stop stopColor="#FF6381" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-p">
                    <stop stopColor="#FCAC96" offset="0%" />
                    <stop stopColor="#FC8464" offset="100%" />
                  </linearGradient>
                  <circle id="hero-illustration-r" cx={28} cy={28} r={28} />
                  <filter
                    x="-85.7%"
                    y="-64.3%"
                    width="314.3%"
                    height="314.3%"
                    filterUnits="objectBoundingBox"
                    id="hero-illustration-q"
                  >
                    <feOffset dx={12} dy={24} in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation={16}
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <circle id="hero-illustration-t" cx={36} cy={36} r={36} />
                  <filter
                    x="-66.7%"
                    y="-50%"
                    width="266.7%"
                    height="266.7%"
                    filterUnits="objectBoundingBox"
                    id="hero-illustration-s"
                  >
                    <feOffset dx={12} dy={24} in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation={16}
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <circle id="hero-illustration-v" cx={28} cy={28} r={28} />
                  <filter
                    x="-85.7%"
                    y="-64.3%"
                    width="314.3%"
                    height="314.3%"
                    filterUnits="objectBoundingBox"
                    id="hero-illustration-u"
                  >
                    <feOffset dx={12} dy={24} in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation={16}
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <circle id="hero-illustration-x" cx={24} cy={24} r={24} />
                  <filter
                    x="-100%"
                    y="-75%"
                    width="350%"
                    height="350%"
                    filterUnits="objectBoundingBox"
                    id="hero-illustration-w"
                  >
                    <feOffset dx={12} dy={24} in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation={16}
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    className="anime-element stroke-animation"
                    d="M600,300 C600,465.685425 465.685425,600 300,600 C134.314575,600 1.3749042e-14,465.685425 3.60373576e-15,300 C-6.54157051e-15,134.314575 134.314575,-1.29473326e-14 300,-2.30926389e-14 C465.685425,-3.32379452e-14 600,134.314575 600,300 Z"
                    fill="url(#hero-illustration-a)"
                    stroke="#a94caf"
                  />
                  <g transform="translate(435 518)">
                    <circle
                      className="anime-element fadeup-animation"
                      fill="url(#hero-illustration-b)"
                      cx={106}
                      cy={32}
                      r={32}
                    />
                    <circle
                      className="anime-element fadeup-animation"
                      fill="url(#hero-illustration-c)"
                      cx={12}
                      cy={117}
                      r={12}
                    />
                  </g>
                  <image
                    className="anime-element fadeleft-animation"
                    x={-80}
                    y={40}
                    width={760}
                    xlinkHref="/static/images/illustration-01.png"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
