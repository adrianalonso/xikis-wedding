import React from "react";
import Image from "next/image";
import StarBig from "@/components/common/icons/StarBig";
import EventCounter1 from "@/components/common/eventCounter/EventCounterOne";

import hero_img_1 from "@/assets/images/home-7/hero-image-1.jpg";
import hero_img_2 from "@/assets/images/home-7/hero-image-2.jpg";
import author_img_1 from "@/assets/images/home-7/hero-author-1.png";
import author_img_2 from "@/assets/images/home-7/hero-author-2.png";
import author_img_3 from "@/assets/images/home-7/hero-author-3.png";

const BannerFour = () => {
  return (
    <section className="hero-section hero-7">
      <div className="hero-wrapper mx-auto position-relative parallax">
        <div className="container">
          <div className="row gx-80 gy-50 gy-lg-0 align-items-center">
            <div className="col-lg-4 col-xl-5">
              <div className="d-flex align-items-end gap-30 position-relative wow fadeInRight py-lg-40">
                <div className="hero-image-mask">
                  <Image
                    src={hero_img_1}
                    className="img-fluid"
                    alt="img"
                    width={260}
                  />
                </div>
                <div className="hero-image-mask">
                  <Image src={hero_img_2} className="img-fluid" alt="img" />
                </div>
                <div className="star-icons d-flex align-items-end gap-0 position-absolute end-50">
                  <span className="star-icon-big">
                    <StarBig height={"87"} width={"87"} />
                  </span>
                  <span className="star-icon-small">
                    <StarBig height={"23"} width={"23"} />
                  </span>
                </div>
              </div>
            </div>
            {/* -- col-6 -- */}
            <div className="col-lg-8 col-xl-7 wow fadeInLeft">
              <h1 className="fs-100 custom-font-jakarta text-primary fw-extra-bold mb-4 mb-lg-30 mb-xxl-40 lh-1">
                Adri & Marisol Wedding
              </h1>
              <p className="custom-jakarta custom-font-style-2 mb-4">
                🎉 ¡Bienvenidos al festival de nuestras vidas!
              </p>
              <p className="custom-jakarta custom-font-style-2 mb-4">
                Aquí comienza la aventura de Adri y Marisol, una historia
                cargada de momentos épicos, música que nos mueve el alma y un
                amor que vibra al ritmo de nuestros corazones. 💃🕺{" "}
              </p>
              <p className="custom-jakarta custom-font-style-2 ">
                ¡Gracias por ser parte de nuestra fiesta! 🎶❤️
              </p>
              <EventCounter1 styleNum={0} />
              {/* -- hero-counter -- */}

              <div className="d-flex flex-column flex-md-row gap-4 align-items-md-center">
                <div className="author-wrapper d-flex gap-3 gap-lg-20 py-10 align-items-center">
                  <div className="author-image d-flex gap-0 ps-10">
                    <Image
                      className="hero-author"
                      src={author_img_1}
                      alt="img"
                    />
                    <Image
                      className="hero-author ms-n3"
                      src={author_img_2}
                      alt="img"
                    />
                    <div className="circle hero-author ms-n3">
                      <h4 className="text-white fw-extra-bold mb-0">2</h4>
                    </div>
                  </div>
                  <h3 className="hero-author-title custom-font-jakarta mb-0 fw-extra-bold pe-10">
                    Maestros de Ceromonia
                  </h3>
                </div>
                {/* -- author-wrapper -- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
