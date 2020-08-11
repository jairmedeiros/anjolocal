import './styles.scss';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../../../components/common';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  shown: PropTypes.bool.isRequired,
  setShown: PropTypes.func.isRequired,
};

function NewsletterModal({ data, shown, setShown }) {
  const currentLocation = useSelector((state) => state.geolocation);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });

  let location = '';
  if (currentLocation && currentLocation.state && currentLocation.city) {
    location = `${currentLocation.city}, ${currentLocation.state}`;
  }

  function handleClickClose(e) {
    e.preventDefault();
    setShown(false);
  }

  function handleSubmitNewsletter(formData) {
    console.log(formData);
  }

  return (
    <Modal shown={shown} setShown={setShown}>
      <div className="news-modal-title">
        <div className="news-modal-title-text">
          Uma newsletter pra chamar de sua, <strong>saindo do forno! 🧑‍🍳</strong>
          <div className="news-modal-title-detail">
            Informações opcionais aprimoram a personalização. <a href="#">Saiba mais</a>
          </div>
        </div>
        <button onClick={handleClickClose} className="news-modal-close" type="button">
          <img className="news-modal-close-icon" src="/static/images/multiply.svg" alt="Fechar" />
        </button>
      </div>
      <form onSubmit={handleSubmit(handleSubmitNewsletter)} className="hero-form newsletter-form">
        <div className="control control-expanded control-newsletter">
          <label htmlFor="nameNewsletter">
            Como devemos te chamar?
            <span className="news-modal-title-detail"> (Opcional)</span>
            <input
              className="input"
              type="text"
              name="name"
              id="nameNewsletter"
              ref={register()}
              maxLength={60}
              placeholder="Digite seu nome..."
            />
          </label>
          {errors.name && <div className="hero-input-error">{errors.name.message}</div>}
        </div>

        <div className="control control-expanded control-newsletter">
          <label htmlFor="emailNewsletter">
            O e-mail é este mesmo?
            <input
              className="input"
              type="email"
              id="emailNewsletter"
              name="emailNewsletter"
              ref={register({
                required: 'Insira um e-mail.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Precisamos que seja um e-mail válido.',
                },
              })}
              maxLength={60}
              placeholder="Digite seu email…"
              defaultValue={data.email}
            />
          </label>
          {errors.emailNewsletter && (
            <div className="hero-input-error">{errors.emailNewsletter.message}</div>
          )}
        </div>

        <div className="control control-expanded control-newsletter">
          <label htmlFor="locationNewsletter">
            Quer se informar de qual localidade?
            <span className="news-modal-title-detail"> (Opcional)</span>
            <input
              className="input"
              type="text"
              id="locationNewsletter"
              name="location"
              ref={register({
                pattern: {
                  value: /^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]*)+(, )+([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]*)$/i,
                  message: "Siga a formatação: 'Cidade, Estado'",
                },
              })}
              placeholder="Digite um endereço..."
              maxLength={60}
              defaultValue={location}
            />
          </label>
          {errors.location && <div className="hero-input-error">{errors.location.message}</div>}
        </div>
        <div className="control button-newsletter">
          <button type="submit" className="button button-block button-primary button-shadow">
            Assinar
          </button>
        </div>
      </form>
    </Modal>
  );
}

NewsletterModal.propTypes = propTypes;

export default NewsletterModal;
