import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/error.gif";
import { Helmet } from "react-helmet";
import "./page-not-found.scss";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>FunBox test | Страница не найдена</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <div className="pnf">
        <img src={ image } alt="Page not found" className="pnf__pic" />
        <h1>Страница не найдена</h1>
        <p>
          К сожалению, данной страницы на сайте больше нет.
          Возможно, она переименована, перенесена в другой раздел или удалена.
        </p>
        <Link to="/">Перейти на главную</Link>
      </div>
    </>
  );
};

export default PageNotFound;