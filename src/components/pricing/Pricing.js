"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SectionName from "@/components/common/sectionTitle/SectionName";
import SectionDesc from "@/components/common/sectionTitle/SectionDesc";
import PricingCard from "@/components/common/cards/PricingCard";
import copy from "@/assets/images/copy.png";

import SectionTitleTwo from "@/components/common/sectionTitle/SectionTitleTwo";
import { pricingData } from "@/lib/pricingData";
import CopyToClipboard from "react-copy-to-clipboard";
import Confetti from "react-confetti-boom";

const Pricing = ({ styleNum, styleNum2 }) => {
  const [textToCopy, _] = React.useState("ES1300730100580206970190"); // The text you want to copy
  const [copyStatus, setCopyStatus] = React.useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
  };

  // ----- Change classname define in home page
  let sectionDescClass;
  let subTitle2;
  let subTitleClass;
  let titleClass;
  switch (styleNum) {
    case 0:
      sectionDescClass = "text-lg-end";
      break;

    case 1:
      subTitle2 = true;
      subTitleClass = "custom-jakarta text-primary";
      sectionDescClass = "text-lg-end custom-jakarta custom-font-style-2 mb-2";
      break;
    case 2:
      subTitle2 = true;
      subTitleClass = "text-primary";
      titleClass = "custom-jakarta";
      sectionDescClass = "text-lg-end custom-jakarta custom-font-style-2 mb-2";
      break;
    case 3:
      subTitle2 = true;
      break;
    default:
      break;
  }
  // ----- Change classname define in home page

  return (
    <section
      id="pricing"
      className="pricing-section pricing-1 pb-50 pb-lg-100 pb-xxl-120"
    >
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
          <div className="col-lg-4">
            <div className="section-title section-title-style-2">
              <SectionName name={"Confirma tu asistencia"} className={""} />
              <SectionTitleTwo
                title={"Celebra"}
                subTitle={"con nosotros"}
                titleClass={titleClass}
                subTitleClass={subTitleClass}
              />
            </div>
            {/* -- section-title -- */}
          </div>
          <div className="col-lg-5">
            <div className="highlights-text">
              <SectionDesc
                desc={
                  "Celebrar una boda son muchísimos preparativos. Rogamos vuestra participación para confirmar lo antes posible al menos un mes antes de la fecha de la boda. 🎉"
                }
                className={sectionDescClass}
              />
            </div>
          </div>
        </div>{" "}
        {/* -- row --*/}
        <div className="swiper pricing-swiper wow slideInUp">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={20}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                769: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 30,
                },

                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 30,
                },
              }}
            >
              {pricingData.map(
                ({ id, card_name, features, icon, link, price }) => {
                  return (
                    <SwiperSlide key={id} className="swiper-slide">
                      <PricingCard
                        id={id}
                        card_name={card_name}
                        features={features}
                        icon={icon}
                        link={link}
                        price={price}
                        styleNum2={styleNum2}
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
          {/* -- swiper-wrapper -- */}
        </div>
        {/* -- swiper -- */}
        <div className="gift">
          <p className="text">Tu presencia ya es nuestro mayor regalo 🎉 </p>
          <p className="text">
            Pero si quieres aportar al proyecto que iniciamos juntos 😍 nos
            tomaremos un mojito 🍹 a tu salud en nuestro viaje de novios.
          </p>
          <p> ¡Gracias por acompañarnos en este día tan especial! 🚀</p>
          <p>
            <strong>Cuenta Bancaria</strong>
          </p>
          <p className="bank-account">
            ES13 0073 0100 5802 0697 0190{" "}
            <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
              <img src={copy.src} />
            </CopyToClipboard>
          </p>
          {copyStatus && <p>Texto copiado. Te agradecemos la aportación 🙌</p>}
          {copyStatus && <Confetti mode="boom" particleCount={500} />}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
