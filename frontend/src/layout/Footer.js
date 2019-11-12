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
        <footer class="page-footer font-small indigo">
          <div class="container">
            <div class="row text-center d-flex justify-content-center pt-5 mb-3">
              <div class="col-md-2 mb-3">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!">
                    <GitHubIcon />
                  </a>
                </h6>
              </div>

              <div class="col-md-2 mb-3">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!">
                    <LinkedInIcon />
                  </a>
                </h6>
              </div>

              <div class="col-md-2 mb-3">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!">
                    <FacebookIcon />
                  </a>
                </h6>
              </div>

              <div class="col-md-2 mb-3">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!">
                    <InstagramIcon />
                  </a>
                </h6>
              </div>

              <div class="col-md-2 mb-3">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!">
                    <TwitterIcon />
                  </a>
                </h6>
              </div>
            </div>

            <hr class="rgba-white-light" style={{ margin: "0 15%;" }} />

            <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
              <div class="col-md-8 col-12 mt-5">
                <p style={{ "line-height": "1.7rem" }}>
                  Sistema de biblioteca desenvolvido para a disciplina de engenharia de software.
                  Utilizando o padrão MVC, foi desenvolvida uma API (Interface de programação de
                  aplicações) em NodeJS e uma interface gráfica em ReactJS.
                </p>
              </div>
            </div>

            <hr class="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%;" }} />

            <div class="row pb-3">
              <div class="col-md-12">
                <div class="mb-5 flex-center">
                  <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                  </a>

                  <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
                  </a>

                  <a class="gplus-ic">
                    <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                  </a>

                  <a class="li-ic">
                    <i class="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                  </a>

                  <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
                  </a>

                  <a class="pin-ic">
                    <i class="fab fa-pinterest fa-lg white-text"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a> MIT</a>
          </div>
        </footer>
      </div>
    );
  }
}
