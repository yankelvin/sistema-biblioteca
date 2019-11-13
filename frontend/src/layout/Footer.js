import React from "react";

// Material Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="page-footer font-small indigo">
          <div className="container">
            <div className="row text-center d-flex justify-content-center pt-5 mb-3">
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!">
                    <GitHubIcon />
                  </a>
                </h6>
              </div>

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!">
                    <LinkedInIcon />
                  </a>
                </h6>
              </div>

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!">
                    <FacebookIcon />
                  </a>
                </h6>
              </div>

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!">
                    <InstagramIcon />
                  </a>
                </h6>
              </div>

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!">
                    <TwitterIcon />
                  </a>
                </h6>
              </div>
            </div>

            <hr className="rgba-white-light" style={{ margin: "0 15%" }} />

            <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
              <div className="col-md-8 col-12 mt-5">
                <p style={{ lineHeight: "1.7rem" }}>
                  Sistema de biblioteca desenvolvido para a disciplina de engenharia de software.
                  Utilizando o padrão MVC, foi desenvolvida uma API (Interface de programação de
                  aplicações) em NodeJS e uma interface gráfica em ReactJS.
                </p>
              </div>
            </div>

            <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />

            <div className="row pb-3">
              <div className="col-md-12">
                <div className="mb-5 flex-center">
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                  </a>

                  <a className="tw-ic">
                    <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                  </a>

                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                  </a>

                  <a className="li-ic">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                  </a>

                  <a className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                  </a>

                  <a className="pin-ic">
                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a> MIT</a>
          </div>
        </footer>
      </div>
    );
  }
}
