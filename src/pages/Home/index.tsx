import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Painel de Vendas</h1>
          <p className="lead">Analise o desempenho das vendas por diferentes perspectivas</p>
          <hr />
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Acessar painel
          </Link>
            <p></p>
            <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
            <p>Semana Spring React 4.0 - 6 a 12 de setembro/2021</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;