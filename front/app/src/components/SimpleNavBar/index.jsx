import { Link } from "react-router-dom";

import style from "./index.module.css";

export default function NavBar() {
  return (
    <header className={style.header}>
      <div className={style.sectionOne}>
        <div className={style.logoAndSB}>
          <Link to={"/"} className={style.logoLink}>
            <p className={style.plus}>
              <b>Plus</b>
            </p>
            <p className={style.hardware}>hardware</p>
          </Link>
        </div>
        <nav className={style.navButtons}></nav>
      </div>
      <div className={style.sectionTwo}></div>
    </header>
  );
}
