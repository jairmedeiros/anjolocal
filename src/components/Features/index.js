import './styles.scss';

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <div className="features-inner section-inner">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">Como funciona o Anjolocal?</h2>
              <p className="section-paragraph">
                Nosso sistema possui várias alternativas de utilização para que você encontre
                diversas instituições, além de cadastra-las em nosso banco de dados.
              </p>
            </div>
          </div>
          <div className="features-wrap">
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: '#ffd2da' }}>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <image x={28} y={26} width={32} xlinkHref="/static/images/feature-01.png" />
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">Pesquisa eficiente</h4>
                <p className="text-sm">
                  Aqui no site é possível buscar instituições pelo seu nome, bairro, cidade e/ou
                  estado.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: '#ffd8cd' }}>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <image x={28} y={26} width={32} xlinkHref="/static/images/feature-02.png" />
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">Bots e Chatbots</h4>
                <p className="text-sm">
                  Desenvolvemos bots que estão presentes no Facebook Messenger, Telegram e Twitter.
                  Mande um &quot;Oi!&quot; para nós agora e tenha um conteúdo personalizado.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: '#c6fdf3' }}>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <image x={28} y={26} width={32} xlinkHref="/static/images/feature-03.png" />
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">Newsletter</h4>
                <p className="text-sm">
                  Possuímos uma newsletter, onde você receberá toda semana informações sobre novas
                  instituições e conteúdos exclusivos.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: '#e0e1fe' }}>
                  <svg width={88} height={88} xmlns="http://www.w3.org/2000/svg">
                    <image x={28} y={26} width={32} xlinkHref="/static/images/feature-04.png" />
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">Cadastro seguro</h4>
                <p className="text-sm">
                  Para estar presente em nosso banco de dados, basta clicar no botão{' '}
                  <i>&quot;Preciso de doação&quot;</i>. Cadastrando o CNPJ garantirá, uma maior
                  visibilidade em nossas listas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
