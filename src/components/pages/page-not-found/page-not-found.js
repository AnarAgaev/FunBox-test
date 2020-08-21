import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../../images/error.gif";
import { Helmet } from "react-helmet";
import "./page-not-found.scss";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Страница не найдена</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Container className="pnf">
        <Row>
          <Col lg={8}>
            <img src={ image } alt="Page not found" className="pnf-pic" />
            <h1>Страница не найдена</h1>
            <h3 className="pb-5">
              К сожалению, данной страницы на сайте больше нет.
              Возможно, она переименована, перенесена в другой раздел или удалена.
            </h3>
            <Link to="/" className="button">Перейти на главную</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageNotFound;