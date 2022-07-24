import style from './style.module.scss'
import { useState } from "react";
import useDimension from '../../../hook/useDimension';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const browserWidth = useDimension()

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav>
      {(toggleMenu || browserWidth > 500) && (
        <ul className={style.liste}>
          <li className={style.items}>Accueil</li>
          <li className={style.items}>Services</li>
          <li className={style.items}>Contact</li>
        </ul>
      )}
      {browserWidth < 500 && <button onClick={toggleNav} className={style.btn}>Menu</button>}
    </nav>
  );
}