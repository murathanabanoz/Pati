import logo from "../assets/pati-logo.png";
import "./Section.css";

const Section = () => {
  return (
    <>
      <div className="section-container">
        <div className="section-content">
          <div className="content-left">
            <img src={logo} alt="Logo" className="content-logo" />
          </div>
          <div className="content-right">
            <div>
              Pati Coin | Hayvan dostlarımızın yanında hayvan hakları için
              blockchain teknolojisiyle fark yaratıyoruz. 💙 Destek olun,
              birlikte daha güzel bir dünya inşa edelim! 🐕🐈
            </div>
            <div>
              Hayvanlar, tıpkı insanlar gibi yaşam hakkına sahip, hisleri olan
              canlılardır. Onlara zarar vermek, kötü koşullarda yaşatmak ya da
              istismar etmek, yalnızca vicdani bir suç değil, aynı zamanda
              insanlık onuruna da aykırıdır. Hayvan haklarını korumak; sokaktaki
              bir köpeği aç bırakmamak, bir kediyi tekmelemekten kaçınmak ya da
              deneylerde canlı hayvanları kullanmamak kadar basit, ama bir o
              kadar da önemlidir.
            </div>
            <div>
              Onların sessiz çığlıklarını duymak, yaşam alanlarına saygı
              göstermek ve onlara zarar verenlere karşı durmak, herkesin görevi
              olmalıdır. Unutmayalım, dünya sadece bize ait değil; hayvanlarla
              paylaştığımız bu gezegeni korumak, gelecek nesiller için en büyük
              sorumluluğumuzdur. 🌍🐾
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
