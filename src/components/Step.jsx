import "./Step.css";

const Step = () => {
  return (
    <div className="step-container">
      <div className="step-content-top">
        <h1 id="how-to-buy">HOW TO BUY</h1>
      </div>
      <div className="step-content-bottom">
        <div className="stepOne">
          <div className="step">
            <span>1</span>
          </div>
          <div>
            <h3>Cüzdanı Bağla</h3>
            <p>
              Bu web sayfasının üst kısmında bulunan ön satış aracını bulun ve
              tercih ettiğiniz cüzdanı bağlayın.
            </p>
          </div>
        </div>
        <div className="stepTwo">
          <div className="step">
            <span>2</span>
          </div>
          <div>
            <h3>Pumpfun üzerinden $PATI'yı seçin.</h3>
            <p>
              Bağlantı kurduktan sonra Pumpfun üzerinden satışa
              katılabilirsiniz. Arama çubuğuna PATI yazın{" "}
            </p>
          </div>
        </div>
        <div className="stepThree">
          <div className="step">
            <span>3</span>
          </div>
          <div>
            <h3>Token Satın Al</h3>
            <p>
              $PATI ile takas etmek istediğiniz SOL miktarını girin ve işlemi
              cüzdanınızda onaylayın. Detaylı anlatım için youtube linkine
              tıklayabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
