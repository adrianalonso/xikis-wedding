"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SwiperIcon from "@/components/common/icons/SwiperIcon";
import SectionName from "@/components/common/sectionTitle/SectionName";
import SectionDesc from "@/components/common/sectionTitle/SectionDesc";
import LineUpSwiper from "@/components/common/LineUpSwiper";
import TopUpArrow from "@/components/common/icons/TopUpArrow";
import SectionTitleTwo from "@/components/common/sectionTitle/SectionTitleTwo";

import ellipse_img from "@/assets/images/home-1/ellipse-2.png";
import { singerData2 } from "@/lib/singerData2";

const LineUpThree = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();

  return (
    <section
      id="line-up"
      className="lineup-section lineup-2 subscription-2 pt-40 pb-100 pt-lg-100 pb-lg-130 pt-xxl-120 pb-xxl-180 mb-20"
    >
      <div className="container">
        <div className="row gx-80 gy-30 align-items-center">
          <div className="col-lg-4">
            <div className="lineup-right-content mt-3 mt-lg-0 wow fadeInRight">
              <div className="section-title mb-4 mb-lg-30 mb-xxl-40">
                <SectionName name={"Lo del hyphe"} className={""} />
                <SectionTitleTwo
                  title={"Mesas"}
                  subTitle={"Reveladas"}
                  titleClass={""}
                  subTitleClass={"text-primary"}
                />
              </div>
              {/* <!-- section-title --> */}
              <SectionDesc
                desc={
                  "En nuestro gran día, cada mesa lleva el nombre de una canción que significa algo especial para nosotros. Queremos compartir con vosotros un adelanto de esta banda sonora única para que empecéis a entrar en ambiente y disfrutéis de la música que nos acompaña."
                }
                className={"custom-jakarta custom-font-style-2 mb-4 mb-lg-30"}
              />
              <SectionDesc
                desc={
                  "El día del evento descubriréis el nombre de vuesta mesa. Se admiten apuestas"
                }
                className={"custom-jakarta custom-font-style-2 mb-4 mb-lg-30"}
              />
            </div>
            {/* <!-- lineup-right-content --> */}
          </div>
          {/* <!-- col-5 --> */}
          <div className="col-lg-8">
            <div className="swiper-custom-progress position-relative wow fadeInLeft">
              <LineUpSwiper
                data={singerData2}
                nextRef={nextRef}
                prevRef={prevRef}
                setInit={setInit}
                cardColor={"lineup-image-style-2"}
              />
              {/* <!-- swiper --> */}
              <div className="lineup-swiper-pagination"></div>
              <SwiperIcon nextRef={nextRef} prevRef={prevRef} />

              <div className="ellipse-image-2">
                <Image src={ellipse_img} className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
          {/* <!-- col-7 --*/}
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container -->	 */}
    </section>
  );
};

export default LineUpThree;
