import React, { useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { menuList } from "@/lib/menuList";

const NavbarOffcanvas = () => {
  const pathName = usePathname();
  // Remove offcanvas opacity background when change router
  useEffect(() => {
    const offcanvas_backdrop = document.querySelector(".offcanvas-backdrop");
    if (offcanvas_backdrop) {
      if (offcanvas_backdrop.classList.contains("show")) {
        offcanvas_backdrop.classList.remove("offcanvas-backdrop", "show");
      }
    }
  }, [pathName]);

  const closeOffcanvas = () => {
    // Seleccionar el botón de cierre del offcanvas
    const closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
    if (closeButton) {
      // Forzar el clic en el botón de cierre
      closeButton.click();
    }
  };

  return (
    <div
      className="offcanvas offcanvas-top"
      id="navContentmenu"
      data-bs-backdrop="static"
      tabIndex="-1"
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body d-flex justify-content-center">
        <ul className="navbar-nav custom-navbar-nav mb-2 mb-lg-0">
          {menuList.map(({ id, isDropdown, name, path }) => {
            return (
              <li
                key={id}
                className={`nav-item ${isDropdown && "dropdown offcanvas-pages-dropdown"} `}
              >
                <Link
                  className={`nav-link ${isDropdown && "dropdown-toggle"} `}
                  href={path}
                  aria-label="nav-links"
                  onClick={closeOffcanvas}
                  data-bs-toggle={`${isDropdown && "dropdown"}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarOffcanvas;
