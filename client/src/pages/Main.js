import React, {useEffect} from "react";
import "./Main.css"

const MainPage = () => {

    useEffect(()=> console.log("component mounted!"),[])
    return (
        <>
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll" href="#page-top">Portfolio</a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll active" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#service">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#work">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#blog">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="home" className="intro route bg-image">
    <div className="overlay-itro"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="intro-title mb-4">I am Anissa Shanks</h1>
          <p className="intro-subtitle"><span className="text-slider-items">Project Manager, Front End Developer, Designer, Legal Eagle,Entrepreneur</span><strong className="text-slider"></strong></p>
        </div>
      </div>
    </div>
  </div>

  <main id="main">

    
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="assets/img/me and Sass.png" className="img-fluid rounded b-shadow-a" alt="Sassy"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Anissa Shanks</span></p>
                        <p><span className="title-s">Profile: </span> <span>Technical Project Manager and Web Developer</span></p>
                        <p><span className="title-s">Email: </span> <span>anissa.shanks@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>(323) 926-0167</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "85%"}}  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS3</span> <span className="pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>MySQL</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar"style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor
                      at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt.
                    </p>
                    <p className="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                    </p>
                    <p className="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      Nulla porttitor accumsan
                      tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div className="section-counter paralax-mf bg-image" style={{backgroundImage: "url(https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6391/6391844cv18d.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-checkmark-round"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">15</p>
                <span className="counter-text"> CODING PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ios-calendar-outline"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">12</p>
                <span className="counter-text">YEARS OF PROJECT MANAGEMENT EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ios-people"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">10000</p>
                <span className="counter-text">CONTENT PIECES APPROVED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ribbon-a"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">35</p>
                <span className="counter-text">THIRD PARTY CLIENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Portfolio
              </h3>
              <p className="subtitle-a">
                My journey to becoming a Full Stack Web Developer
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/Kobe 24 8_revised.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/Kobe 24 8_revised.jpg" alt="Kobe Mamba Out" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Quiz: "Do You Have Mamba Mentality?"</h2>
                    <div className="w-more">
                      <span className="w-ctegory">App Development: Quiz</span> / <span className="w-date">July. 2020</span>
                      <p>Quiz on facts about Kobe's career and a 24 second countdown timer for each question.</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/thunder-light.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/thunder-light.jpg" alt="purple thunder and lightening image" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Weather App</h2>
                    <div className="w-more">
                      <span className="w-ctegory">App</span> / <span className="w-date">July. 2020</span>
                      <p>Weather app using local storage and API to allow user to input a city which displays a 5 day forecast.</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/Express Bartender home page.png" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/Express Bartender home page.png" alt="" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Express Bartender</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">11 Sep. 2020</span>
                      <p>Media Responsive Web application showing users how to be their own Mixologist at home.</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="assets/img/Express Bartender home page.png"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/Express Bartender home page.png" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/Express Bartender home page.png" alt="Express Bartender home page" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Project 3</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">Oct. 2020</span>
                      <p>Tentative project using MongoDB, React, HTML, CSS, Javascript, jQuery, API's</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/Houston skyline.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/Houston skyline.jpg" alt="Houston Skyline" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Future Project</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">Oct. 2020</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/Hollywood at Sunset.png" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/Hollywood at Sunset.png" alt="Hollywood sign at sunset" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Future Project</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">Nov. 2020</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    
    <div className="testimonials paralax-mf bg-image" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-mf" className="owl-carousel owl-theme">
              <div className="testimonial-box">
                <div className="author-test">
                  <img src="assets/img/derrick pic.png" alt="Derrick picture" className="rounded-circle b-shadow-a"/>
                  <span className="author">Derrick Plummer - SVP SKDKnickerbocker</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Anissa's discipline and intellect, and skills have allowed her to be a strong leader,
                    and an exceptional manager. The way she approaches projects has led many to remark
                    on her outstanding leadership. Without a doubt her work ethic, passion, ability to multitask,
                    and creative thinking is helping her colleagues to succeed.
                  </p>
                  <span className="comit"><i className="fa fa-quote-right"></i></span>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="author-test">
                  <img src="assets/img/Tasha pic.png" alt="Tasha pic" className="rounded-circle b-shadow-a"/>
                  <span className="author">Tasha Austin - Principal at Deloitte</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Anissa is a very committed and dedicated professional who always delivers value and has significant impact
                    on any project she is involved in. She has gained recognition for dynamic leadership, creativity, vision, 
                    and good judgement. She is a true leader who always has a distinctive point of view and is well respected
                    by her peers, clients, and those she impacts in the community and abroad. 
                  </p>
                  <span className="comit"><i className="fa fa-quote-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send A Message
                      </h5>
                    </div>
                    <div>
                      <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 text-center mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                  
                      <ul className="list-ico">
                        <li><span className="ion-ios-location"></span> St. Louis, MO</li>
                        <li><span className="ion-ios-telephone"></span> (323) 926-0167</li>
                        <li><span className="ion-email"></span> anissa.shanks@gmail.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-pinterest"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="copyright-box">
            <p className="copyright">&copy; Copyright <strong>Anissa Shanks and DevFolio</strong>. All Rights Reserved</p>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">Anissa Shanks & BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>
    )
}


export default MainPage;