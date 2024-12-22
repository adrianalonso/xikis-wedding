import Image from "next/image";
import React from "react";
import ButtonOutline from "@/components/common/buttons/ButtonOutline";
import ShopIcon from "@/components/common/icons/ShopIcon";
import ButtonFill from "@/components/common/buttons/ButtonFill";
import TicketIcon from "@/components/common/icons/TicketIcon";
import SectionName from "@/components/common/sectionTitle/SectionName";
import SectionDesc from "@/components/common/sectionTitle/SectionDesc";

import about_img_7 from "@/assets/images/home-7/about-7-image.jpeg";
import SectionTitleTwo from "@/components/common/sectionTitle/SectionTitleTwo";
import CheckIcon from "../common/icons/CheckIcon";
import RightArrow from "../common/icons/RightArrow";
import NextIcon from "../common/icons/NextIcon";

const AboutFour = () => {
  return (
    <section className="about-section about-3 py-50 py-lg-100 py-xxl-120">
      <div className="container">
        <div className="row gx-80 gy-lg-0 gy-40 align-items-center">
          <div className="col-lg-6">
            <div className="about-3-image wow fadeInRight">
              <Image
                src={about_img_7}
                width={520}
                className="img-fluid rounded-5"
                alt="about-image"
              />
            </div>
          </div>
          {/* -- col-5 -- */}
          <div className="col-lg-6 wow fadeInLeft">
            <div className="section-title mb-30 mb-xxl-40">
              <SectionName name={"Save the date"} className={"fs-3"} />
              <SectionTitleTwo
                title={"El gran día"}
                subTitle={"ha llegado "}
                titleClass={""}
                subTitleClass={"text-primary"}
              />
              <SectionDesc
                desc={
                  "Queremos darte la bienvenida y, sobre todo, agradecerte de corazón por formar parte de este momento tan especial en nuestras vidas. Sabemos que para muchxs de vosotrxs venir supone un gran esfuerzo, y eso hace que vuestra presencia sea aún más significativa para nosotros. 🌍❤️"
                }
                className={"custom-jakarta custom-font-style-2 mb-0 mt-30"}
              />
              <SectionDesc
                desc={
                  "Nuestro objetivo es que este día sea inolvidable, una auténtica celebración de amor, alegría y buenos momentos. Y, sinceramente, no sería lo mismo sin ti. 🌟❤️"
                }
                className={"custom-jakarta custom-font-style-2 mb-0 mt-30"}
              />
            </div>
            {/* -- section-title -- */}
            <div className="about-3-text d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-lg-center mb-40 mb-lg-60">
              <div>
                <h4 className="fw-extra-bold custom-jakarta">
                  28 de Junio de 2025
                </h4>
                <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">
                  12:00
                </p>
              </div>
              <div>
                <h4 className="text-uppercase custom-jakarta fw-extra-bold">
                  Lugar del Evento
                </h4>
                <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">
                  Casa Rafael, Huércal de Almería
                </p>
              </div>
            </div>
            {/* -- about-3-text -- */}

            <div className="d-block d-md-flex gap-4">
              <ButtonFill
                className={"btn-rounded"}
                target={"_blank"}
                link={"https://forms.gle/f2XmNr8q3j7mF5tN6"}
              >
                <TicketIcon height={"25"} width={"25"} />
                Confimar Asistencia
              </ButtonFill>

              <ButtonFill
                className={"btn-rounded btn-secondary"}
                target={"_blank"}
                link={"https://maps.app.goo.gl/6hv1NnfXBMGhP1637"}
              >
                <NextIcon height={"25"} width={"25"} />
                Lugar de celebracion
              </ButtonFill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFour;
