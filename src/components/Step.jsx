import "./Step.css";

const Step = () => {
  return (
    <div className="step-container">
      <div className="step-content-top">
        <h1 id="how-to-buy">Nasıl Satın Alırım</h1>
      </div>
      <div className="step-content-bottom">
        <div className="stepOne">
          <div className="step">
            <span>1</span>
          </div>
          <div>
            <h3>Hesap Oluştur</h3>
            <p>
              Bu web sayfasının üst kısmında bulunan satın al butonunu bulun ve
              bir Pumpfun hesabı oluşturun.
            </p>
          </div>
        </div>
        <div className="stepTwo">
          <div className="step">
            <span>2</span>
          </div>
          <div>
            <h3> Pumpfun Cüzdana Aktarma</h3>
            <p>
              Binance, Paribu gibi borsa hesabımızdan $SOL alıp pumpfun
              cüzdanımıza aktarıyoruz.
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
