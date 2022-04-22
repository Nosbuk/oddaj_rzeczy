import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { Decoration } from "../Generic/Decoration";

export const HomeHeader = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav__main">
          <li className="header__nav__main__link">
            <Link to="/zaloguj">Zaloguj</Link>
          </li>
          <li className="header__nav__main__link">
            <Link to="/zarejestruj">Zarejestruj</Link>
          </li>
        </ul>
        <ul className="header__nav__scroll">
          <li className="header__nav__scroll__link">
            <LinkScroll to="/">Start</LinkScroll>
          </li>
          <li className="header__nav__scroll__link">
            <LinkScroll to="/">O co chodzi?</LinkScroll>
          </li>
          <li className="header__nav__scroll__link">
            <LinkScroll to="/">O nas</LinkScroll>
          </li>
          <li className="header__nav__scroll__link">
            <LinkScroll to="/">Fundacja i organizacje</LinkScroll>
          </li>
          <li className="header__nav__scroll__link">
            <LinkScroll to="/">Kontakt</LinkScroll>
          </li>
        </ul>
      </nav>
      <div className="header__CTA">
        <h4 className="header__CTA__headline">
          Zacznij pomagać!
          <br /> Oddaj niechciane rzeczy w zaufane ręce
        </h4>
        <Decoration />
        <div className="buttons-row">
          <Link to="/oddaj-rzeczy">
            <button className="button">ODDAJ RZECZY</button>
          </Link>
          <Link to="/oddaj-rzeczy">
            <button className="button">ZORGANIZUJ ZBIÓRKĘ</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
