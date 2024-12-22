import React from "react";
import Image from "next/image";
import Link from "next/link";

import SectionName from "@/components/common/sectionTitle/SectionName";
import SectionDesc from "@/components/common/sectionTitle/SectionDesc";
import SectionTitleTwo from "@/components/common/sectionTitle/SectionTitleTwo";
import { acommodations } from "@/lib/sponsorData2";

const Sponsor = () => {
  return (
    <section
      id="sponsor"
      className="sponsor-section sponsor-2 position-relative pt-50 pt-lg-100 pt-xxl-120"
    >
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-40 mb-lg-70">
          <div className="col-lg-4">
            <div className="section-title wow fadeInRight">
              <SectionName
                name={"Quédate en Almería el finde"}
                className={""}
              />
              <SectionTitleTwo
                title={"Alojamientos"}
                subTitle={"Recomendados"}
                titleClass={""}
                subTitleClass={"text-primary"}
              />
            </div>
            {/* -- section-title -- */}
          </div>
          <div className="col-lg-5">
            <div className="highlights-text wow fadeInLeft">
              <SectionDesc
                desc={
                  "Los que venís de fuera o simplemente queréis disfrutar de un fin de semana diferente, os recomendamos estos alojamientos cerca del lugar de la celebración y con un precio especial. 🏨🌟"
                }
                className={
                  "custom-jakarta custom-font-style-2 mb-2 text-lg-end"
                }
              />
            </div>
          </div>
        </div>
        {/* -- row -- */}

        {acommodations.map(
          ({
            id,
            name,
            address,
            pricing,
            google_maps,
            content,
            booking,
            discount,
            image,
          }) => {
            return (
              <div
                key={id}
                className={`row gy-4 gy-lg-0 justify-content-lg-between ${id !== 3 && "mb-60 mb-lg-100"} `}
              >
                <div className="col-lg-5">
                  <div className="sponsors-type">
                    <h2 className={`fw-extra-bold mb-0 custom-sans-serif`}>
                      {name}
                    </h2>
                  </div>
                  <Image src={image} width={350} height={240} />
                </div>

                <div className="col-lg-7">
                  <div className="row align-items-center mt-4">
                    <div className="col" key={id}>
                      <p className="custom-jakarta custom-font-style-2 mb-2">
                        📍 <a href={google_maps}>{address}</a>
                      </p>
                      <p className="custom-jakarta custom-font-style-2 mb-2">
                        {pricing}
                      </p>
                      <p className="custom-jakarta custom-font-style-2 mb-2">
                        {discount}
                      </p>
                      <p className="custom-jakarta custom-font-style-2 mb-2">
                        {booking}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
        <div className={`row gy-4 gy-lg-0 justify-content-lg-between `}>
          <div className="col-lg-5">
            <div className="sponsors-type">
              <h2 className={`fw-extra-bold mb-0 custom-sans-serif`}>
                Otras opciones
              </h2>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row  g-20 g-lg-30 align-items-center">
              <div className="col">
                <ul className="hotel-list">
                  <li>🏢 Otros hoteles por la zona</li>
                  <ul>
                    <li>Hotel Elba</li>
                    <li>Hotel Vertical</li>
                  </ul>
                  <li>🌴 Si te quedas por el centro de Almeria</li>
                  <ul>
                    <li>Hotel Catedral</li>
                    <li>Aire Hotel & Ancient Baths</li>
                    <li>Hotel Nuevo Torreluz</li>
                  </ul>

                  <li>🏖️ ¿Quieres disfrutar del cabo?</li>
                  <ul>
                    <li>Hotel Barceló Cabo de Gata</li>
                    <li>Hotel de Naturaleza Rodalquilar & Spa Cabo de Gata</li>
                    <li>Hotel Los Escullos </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
