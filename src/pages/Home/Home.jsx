import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./Home.css";
import homeImg1 from "../../images/home-img1.svg";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="home-container-layout">
        <div>
          <img src={homeImg1} className="home-image-banner" alt="banner" />
        </div>

        <div className="home-container-content">
          <p className="left-text margin">
            <span className="home-container-header">Follow</span>
            <small className="home-container-small-header">
              PEOPLE AROUND THE GLOBE
            </small>
          </p>
          <p className="left-text margin">
            <span className="home-container-header">Connect</span>
            <small className="home-container-small-header">
              WITH YOUR FRIENDS
            </small>
          </p>
          <p className="left-text margin">
            <span className="home-container-header">Share</span>
            <small className="home-container-small-header">
              WHAT YOU THINKING
            </small>
          </p>
          <button
            className="login-primary-btn home-container-btn"
            onClick={() => {
              navigate("/explore");
            }}
          >
            See Cool Stuffs
          </button>
          <p
            className="home-container-login-link center-text orange-color"
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account ?
          </p>
        </div>
      </div>
    </>
  );
};
