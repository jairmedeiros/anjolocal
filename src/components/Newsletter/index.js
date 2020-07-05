import './styles.scss';

const Newsletter = () => {
  return (
    <section className="newsletter section text-light">
      <div className="container-sm">
        <div className="newsletter-inner section-inner">
          <div className="newsletter-header text-center">
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
            <h3 className="section-title mt-0">contato@anjolocal.com.br</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
