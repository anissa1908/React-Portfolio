import React from "react";
import bootstrap from "boostrap";
import font-awesome from "font-awesome";
import ionicons from "ionicons.min.css";
import owl carousel from "owl carousel";
import venobox from "venobox.css";


function HomePage () {

const styles= {
    body {
        background-color: black;
        color: #4e4e4e;
      }

    
      h1,
      /* h2, */
      h3,
      h4,
      h5,
      h6 {
        color: rgb(238, 38, 161);
      }
      
      h2{
        color: darkslategrey;
      }
      
      
      a {
        color: #1e1e1e;
        transition: all 0.5s ease-in-out;
      }
      
      a:hover {
        color: #0078ff;
        text-decoration: none;
        transition: all 0.5s ease-in-out;
      }
      
      .p-r {
        position: relative;
      }
      
      .color-a {
        color: #0078ff;
      }
      
      .color-d {
        color: #f5f5f5;
      }
      
      .color-text-a {
        color: #4e4e4e;
      }
      
      .box-shadow, .paralax-mf, .service-box, .work-box, .card-blog {
        box-shadow: 0 13px 8px -10px rgba(0, 0, 0, 0.1);
      }
      
      .box-shadow-a, .button:hover {
        box-shadow: 0 0 0 4px #cde1f8;
      }
      
      .display-5 {
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 1.1;
      }
      
      .display-6 {
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.1;
      }
      
      .avatar {
        width: 32px;
        height: 32px;
        margin-right: 4px;
        overflow: hidden;
      }
      
      .bg-image {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
      }
      
      @media (max-width: 1024px) {
        .bg-image {
          background-attachment: scroll;
        }
      }
      
      .overlay-mf {
        background-color: lightpink;
      }
      
      .overlay-mf {
        position: absolute;
        top: 0;
        left: 0px;
        padding: 0;
        height: 100%;
        width: 100%;
        opacity: .7;
      }
      
      .paralax-mf {
        position: relative;
        padding: 8rem 0;
      }
      
      .display-table {
        width: 100%;
        height: 100%;
        display: table;
      }
      
      .table-cell {
        display: table-cell;
        vertical-align: middle;
      }
      
      /*--/ Sections /--*/
      .sect-4 {
        padding: 4rem 0;
      }
      
      .sect-pt4 {
        padding-top: 4rem;
      }
      
      .sect-mt4 {
        margin-top: 4rem;
      }
      
      /*--/ Title s /--*/
      .title-s {
        font-weight: 600;
        color: #1e1e1e;
        font-size: 1.1rem;
      }
      
      /*--/ Title A /--*/
      .title-box {
        margin-bottom: 4rem;
      }
      
      .title-a {
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
      }
      
      .subtitle-a {
        color: #4e4e4e;
      }
      
      .line-mf {
        width: 40px;
        height: 5px;
        background-color: rgb(6, 153, 38);
        margin: 0 auto;
      }
      
      /*--/ Title Left /--*/
      .title-box-2 {
        margin-bottom: 3rem;
      }
      
      .title-left {
        font-size: 2rem;
        position: relative;
      }
      
      .title-left:before {
        content: '';
        position: absolute;
        height: 3px;
        background-color: #0078ff;
        width: 100px;
        bottom: -12px;
      }
      
      /*------/ Box /------*/
      .box-pl2 {
        padding-left: 2rem;
      }
      
      .box-shadow-full {
        padding: 3rem 1.25rem;
        position: relative;
        background-color: #fff;
        margin-bottom: 3rem;
        z-index: 2;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
      }
      
      @media (min-width: 768px) {
        .box-shadow-full {
          padding: 3rem;
        }
      }
      
      /*------/ Socials /------*/
      .socials {
        padding: 1.5rem 0;
      }
      
      .socials ul li {
        display: inline-block;
      }
      
      .socials .ico-circle {
        height: 40px;
        width: 40px;
        font-size: 1.7rem;
        border-radius: 50%;
        line-height: 1.4;
        margin: 0 15px 0 0;
        box-shadow: 0 0 0 3px #0078ff;
        transition: all 500ms ease;
      }
      
      .socials .ico-circle:hover {
        background-color: #0078ff;
        color: #fff;
        box-shadow: 0 0 0 3px #cde1f8;
        transition: all 500ms ease;
      }
      
      /*------/ Ul resect /------*/
      .ul-resect, .socials ul, .list-ico, .blog-wrapper .post-meta ul, .box-comments .list-comments, .widget-sidebar .list-sidebar, .widget-tags ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
      }
      
      .list-ico {
        line-height: 2;
      }
      
      .list-ico span {
        color: #0078ff;
        margin-right: 10px;
      }
      
      /*------/ Ico Circle /------*/
      .ico-circle {
        height: 100px;
        width: 100px;
        font-size: 2rem;
        border-radius: 50%;
        line-height: 1.55;
        margin: 0 auto;
        text-align: center;
        box-shadow: 0 0 0 10px #0078ff;
        display: block;
      }
      
      /*------/ Owl Carousel /------*/
      .owl-theme .owl-dots {
        text-align: center;
        margin-top: 18px;
      }
      
      .owl-theme .owl-dots .owl-dot {
        display: inline-block;
      }
      
      .owl-theme .owl-dots .owl-dot span {
        width: 18px;
        height: 7px;
        margin: 5px 5px;
        background: #cde1f8;
        border: 0px solid #cde1f8;
        display: block;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
      }
      
      .owl-theme .owl-dots .owl-dot:hover span {
        background-color: #cde1f8;
      }
      
      .owl-theme .owl-dots .owl-dot.active span {
        background-color: #1B1B1B;
        width: 25px;
      }
      
      /*--/ Scrolltop s /--*/
      .scrolltop-mf {
        position: relative;
        display: none;
      }
      
      .scrolltop-mf span {
        z-index: 999;
        position: fixed;
        width: 42px;
        height: 42px;
        background-color: #0078ff;
        opacity: .7;
        font-size: 1.6rem;
        line-height: 1.5;
        text-align: center;
        color: #fff;
        top: auto;
        left: auto;
        right: 30px;
        bottom: 50px;
        cursor: pointer;
        border-radius: 50%;
      }
      
      /*------/ Back to top button /------*/
      .back-to-top {
        position: fixed;
        display: none;
        background: #0078ff;
        color: #fff;
        width: 44px;
        height: 44px;
        text-align: center;
        line-height: 1;
        font-size: 16px;
        border-radius: 50%;
        right: 15px;
        bottom: 15px;
        transition: background 0.5s;
        z-index: 11;
      }
      
      .back-to-top i {
        padding-top: 12px;
        color: #fff;
      }
      
      @media (max-width: 768px) {
        .back-to-top {
          bottom: 15px;
        }
      }
      
      /*------/ Prelaoder /------*/
      #preloader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        overflow: hidden;
        background: #fff;
      }
      
      #preloader:before {
        content: "";
        position: fixed;
        top: calc(50% - 30px);
        left: calc(50% - 30px);
        border: 6px solid #f2f2f2;
        border-top: 6px solid #0078ff;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        -webkit-animation: animate-preloader 1s linear infinite;
        animation: animate-preloader 1s linear infinite;
      }
      
      @-webkit-keyframes animate-preloader {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes animate-preloader {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      /*------/ Button /------*/
      .button {
        display: inline-block;
        padding: .3rem .6rem;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 1rem;
        border-radius: .3rem;
        border: 1px solid transparent;
        transition: all 500ms ease;
        cursor: pointer;
      }
      
      .button:focus {
        outline: 0;
      }
      
      .button:hover {
        background-color: #0062d3;
        color: #fff;
        transition: all 500ms ease;
      }
      
      .button-a {
        background-color: #0078ff;
        color: #fff;
        border-color: #cde1f8;
      }
      
      .button-big {
        padding: .9rem 2.3rem;
        font-size: 1.2rem;
      }
      
      .button-rouded {
        border-radius: 5rem;
      }
      
      .btn-lg {
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
      }
      
      /*--------------------------------------------------------------
      # Nav Bar
      --------------------------------------------------------------*/
      .navbar-b {
        transition: all .5s ease-in-out;
        background-color: transparent;
        padding-top: 1.563rem;
        padding-bottom: 1.563rem;
      }
      
      .navbar-b.navbar-reduce {
        box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
      }
      
      .navbar-b.navbar-trans .nav-item, .navbar-b.navbar-reduce .nav-item {
        position: relative;
        padding-right: 10px;
        padding-left: 0;
      }
      
      @media (min-width: 768px) {
        .navbar-b.navbar-trans .nav-item, .navbar-b.navbar-reduce .nav-item {
          padding-left: 10px;
        }
      }
      
      .navbar-b.navbar-trans .nav-link, .navbar-b.navbar-reduce .nav-link {
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
      }
      
      .navbar-b.navbar-trans .nav-link:before, .navbar-b.navbar-reduce .nav-link:before {
        content: '';
        position: absolute;
        margin-left: 0px;
        width: 0%;
        bottom: 0;
        left: 0;
        height: 2px;
        transition: all 500ms ease;
      }
      
      @media (min-width: 768px) {
        .navbar-b.navbar-trans .nav-link:before, .navbar-b.navbar-reduce .nav-link:before {
          margin-left: 18px;
        }
      }
      
      .navbar-b.navbar-trans .nav-link:hover, .navbar-b.navbar-reduce .nav-link:hover {
        color: #1B1B1B;
      }
      
      .navbar-b.navbar-trans .nav-link:hover:before, .navbar-b.navbar-reduce .nav-link:hover:before {
        width: 35px;
      }
      
      .navbar-b.navbar-trans .show > .nav-link:before,
      .navbar-b.navbar-trans .active > .nav-link:before,
      .navbar-b.navbar-trans .nav-link.show:before,
      .navbar-b.navbar-trans .nav-link.active:before, .navbar-b.navbar-reduce .show > .nav-link:before,
      .navbar-b.navbar-reduce .active > .nav-link:before,
      .navbar-b.navbar-reduce .nav-link.show:before,
      .navbar-b.navbar-reduce .nav-link.active:before {
        width: 35px;
      }
      
      .navbar-b.navbar-trans .nav-link:before {
        background-color: #fff;
      }
      
      .navbar-b.navbar-trans .nav-link:hover {
        color: #fff;
      }
      
      .navbar-b.navbar-trans .show > .nav-link,
      .navbar-b.navbar-trans .active > .nav-link,
      .navbar-b.navbar-trans .nav-link.show,
      .navbar-b.navbar-trans .nav-link.active {
        color: #fff;
      }
      
      .navbar-b.navbar-reduce {
        transition: all .5s ease-in-out;
        background-color: black;
        padding-top: 15px;
        padding-bottom: 15px;
      }
      
      .navbar-b.navbar-reduce .nav-link {
        color: rgb(238, 38, 161);
      }
      
      .navbar-b.navbar-reduce .nav-link:before {
        background-color: rgb(6, 153, 38);
      }
      
      .navbar-b.navbar-reduce .nav-link:hover {
        color: #0078ff;
      }
      
      .navbar-b.navbar-reduce .show > .nav-link,
      .navbar-b.navbar-reduce .active > .nav-link,
      .navbar-b.navbar-reduce .nav-link.show,
      .navbar-b.navbar-reduce .nav-link.active {
        color: rgb(238, 38, 161);
      }
      
      .navbar-b.navbar-reduce .navbar-brand {
        color: rgb(6, 153, 38);
      }
      
      .navbar-b.navbar-reduce .navbar-toggler span {
        background-color: #1B1B1B;
      }
      
      .navbar-b .navbar-brand {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 600;
      }
      
      .navbar-b .navbar-nav .dropdown-item.show .dropdown-menu,
      .navbar-b .dropdown.show .dropdown-menu,
      .navbar-b .dropdown-btn.show .dropdown-menu {
        transform: translate3d(0px, 0px, 0px);
        visibility: visible !important;
      }
      
      .navbar-b .dropdown-menu {
        margin: 1.12rem 0 0;
        border-radius: 0;
      }
      
      .navbar-b .dropdown-menu .dropdown-item {
        padding: .7rem 1.7rem;
        transition: all 500ms ease;
      }
      
      .navbar-b .dropdown-menu .dropdown-item:hover {
        background-color: #0078ff;
        color: #fff;
        transition: all 500ms ease;
      }
      
      .navbar-b .dropdown-menu .dropdown-item.active {
        background-color: #0078ff;
      }
      
      /*--/ Hamburger Navbar /--*/
      .navbar-toggler {
        position: relative;
      }
      
      .navbar-toggler:focus,
      .navbar-toggler:active {
        outline: 0;
      }
      
      .navbar-toggler span {
        display: block;
        background-color: #fff;
        height: 3px;
        width: 25px;
        margin-top: 4px;
        margin-bottom: 4px;
        transform: rotate(0deg);
        left: 0;
        opacity: 1;
      }
      
      .navbar-toggler span:nth-child(1),
      .navbar-toggler span:nth-child(3) {
        transition: transform .35s ease-in-out;
      }
      
      .navbar-toggler:not(.collapsed) span:nth-child(1) {
        position: absolute;
        left: 12px;
        top: 10px;
        transform: rotate(135deg);
        opacity: 0.9;
      }
      
      .navbar-toggler:not(.collapsed) span:nth-child(2) {
        height: 12px;
        visibility: hidden;
        background-color: transparent;
      }
      
      .navbar-toggler:not(.collapsed) span:nth-child(3) {
        position: absolute;
        left: 12px;
        top: 10px;
        transform: rotate(-135deg);
        opacity: 0.9;
      }
      
      /*--------------------------------------------------------------
      # Intro Section
      --------------------------------------------------------------*/
      .intro {
        height: 100vh;
        position: relative;
        color: #fff;
      }
      
      .intro .intro-content {
        text-align: center;
        position: absolute;
      }
      
      .intro .overlay-itro {
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0px;
        padding: 0;
        height: 100%;
        width: 100%;
        opacity: .9;
      }
      
      .intro .intro-title {
        color: #fff;
        font-weight: 600;
        font-size: 3rem;
      }
      
      @media (min-width: 768px) {
        .intro .intro-title {
          font-size: 4.5rem;
        }
      }
      
      .intro .intro-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
      }
      
      @media (min-width: 768px) {
        .intro .intro-subtitle {
          font-size: 2.5rem;
        }
      }
      
      .intro .text-slider-items {
        display: none;
      }
      
      .intro-single {
        height: 350px;
      }
      
      .intro-single .intro-content {
        margin-top: 30px;
      }
      
      .intro-single .intro-title {
        text-transform: uppercase;
        font-size: 3rem;
      }
      
      @media (min-width: 768px) {
        .intro-single .intro-title {
          font-size: 3.5rem;
        }
      }
      
      .intro-single .breadcrumb {
        background-color: transparent;
        color: #0078ff;
      }
      
      .intro-single .breadcrumb .breadcrumb-item:before {
        color: #cde1f8;
      }
      
      .intro-single .breadcrumb .breadcrumb-item.active {
        color: #cde1f8;
      }
      
      .intro-single .breadcrumb a {
        color: #fff;
      }
      
      /*--------------------------------------------------------------
      # About
      --------------------------------------------------------------*/
      .about-mf .box-shadow-full {
        padding-top: 4rem;
        padding-bottom: 4rem;
      }
      
      .about-mf .about-img {
        margin-bottom: 2rem;
      }
      
      .about-mf .about-img img {
        margin-left: 10px;
      }
      
      @media (min-width: 767px) {
        .about-mf .box-pl2 {
          margin-top: 3rem;
          padding-left: 0rem;
        }
      }
      
      .skill-mf span {
        color: #4e4e4e;
      }
      
      .skill-mf .progress {
        background-color: #cde1f8;
        margin: .5rem 0 1.2rem 0;
        border-radius: 0;
        height: .7rem;
      }
      
      .skill-mf .progress .progress-bar {
        height: .7rem;
        background-color: #0078ff;
      }
      
      /*--------------------------------------------------------------
      # Services
      --------------------------------------------------------------*/
      .service-box {
        background-color: #fff;
        padding: 2.5rem 1.3rem;
        border-radius: 1rem;
        margin-bottom: 3rem;
      }
      
      .service-box:hover .ico-circle {
        transition: all 500ms ease;
        color: #fff;
        background-color: #0078ff;
        box-shadow: 0 0 0 10px #cde1f8;
      }
      
      .service-box .service-ico {
        margin-bottom: 1rem;
        color: #1e1e1e;
      }
      
      .service-box .ico-circle {
        transition: all 500ms ease;
        font-size: 4rem;
      }
      
      .service-box .s-title {
        font-size: 1.4rem;
        text-transform: uppercase;
        text-align: center;
        padding: .4rem 0;
      }
      
      .service-box .s-description {
        color: #4e4e4e;
      }
      
      /*--------------------------------------------------------------
      # Counter
      --------------------------------------------------------------*/
      .counter-box {
        color:rgb(6, 153, 38);
        text-align: center;
      }
      
      @media (min-width: 577px) {
        .counter-box {
          margin-bottom: 1.8rem;
        }
      }
      
      .counter-ico {
        margin-bottom: 1rem;
      }
      
      .counter-ico .ico-circle {
        height: 60px;
        width: 60px;
        line-height: 1.8;
        box-shadow: 0 0 0 10px rgb(6, 153, 38);
      }
      
      .counter-num .counter {
        font-size: 2rem;
        margin-bottom: 0;
      }
      
      /*--------------------------------------------------------------
      # Portfolio
      --------------------------------------------------------------*/
      .work-box {
        margin-bottom: 3rem;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: #fff;
      }
      
      .work-box:hover img {
        transform: scale(1.3);
      }
      
      .work-img {
        display: block;
        overflow: hidden;
      }
      
      .work-img img {
        transition: all 1s;
      }
      
      .work-content {
        padding: 2rem 3% 1rem 4%;
      }
      
      .work-content .w-more {
        color: #4e4e4e;
        font-size: .8rem;
      }
      
      .work-content .w-more .w-ctegory {
        color: #0078ff;
      }
      
      .work-content .w-like {
        font-size: 2.5rem;
        color: #0078ff;
        float: right;
      }
      
      .work-content .w-like a {
        color: #0078ff;
      }
      
      .work-content .w-like .num-like {
        font-size: .7rem;
      }
      
      .w-title {
        font-size: 1.2rem;
      }
      
      /*--------------------------------------------------------------
      # Portfolio Details
      --------------------------------------------------------------*/
      .portfolio-details {
        padding-top: 30px;
      }
      
      .portfolio-details .portfolio-details-container {
        position: relative;
      }
      
      .portfolio-details .portfolio-details-carousel {
        position: relative;
        z-index: 1;
      }
      
      .portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
        margin-top: 5px;
        text-align: left;
      }
      
      .portfolio-details .portfolio-details-carousel .owl-dot {
        display: inline-block;
        margin: 0 10px 0 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ddd !important;
      }
      
      .portfolio-details .portfolio-details-carousel .owl-dot.active {
        background-color: #0078ff !important;
      }
      
      .portfolio-details .portfolio-info {
        padding: 30px;
        position: absolute;
        right: 0;
        bottom: -70px;
        background: #fff;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
        z-index: 2;
      }
      
      .portfolio-details .portfolio-info h3 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
      }
      
      .portfolio-details .portfolio-info ul {
        list-style: none;
        padding: 0;
        font-size: 15px;
      }
      
      .portfolio-details .portfolio-info ul li + li {
        margin-top: 10px;
      }
      
      .portfolio-details .portfolio-description {
        padding-top: 50px;
      }
      
      .portfolio-details .portfolio-description h2 {
        width: 50%;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      
      .portfolio-details .portfolio-description p {
        padding: 0 0 0 0;
      }
      
      @media (max-width: 768px) {
        .portfolio-details .portfolio-description h2 {
          width: 100%;
        }
        .portfolio-details .portfolio-info {
          position: static;
          margin-top: 30px;
        }
      }
      
      /*--------------------------------------------------------------
      # Testimonials
      --------------------------------------------------------------*/
      .testimonials .owl-carousel .owl-item img {
        width: auto;
      }
      
      .testimonial-box {
        color: #fff;
        text-align: center;
      }
      
      .testimonial-box .author-test {
        margin-top: 1rem;
      }
      
      .testimonial-box .author-test img {
        margin: 0 auto;
      }
      
      .testimonial-box .author {
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin: 1rem 0;
        display: block;
        font-size: 1.4rem;
      }
      
      .testimonial-box .comit {
        font-size: 2rem;
        color: #0078ff;
        background-color: #fff;
        width: 52px;
        height: 52px;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        line-height: 1.6;
      }
      
      @media (min-width: 768px) {
        .testimonial-box .description {
          padding: 0 5rem;
        }
      }
      
      @media (min-width: 992px) {
        .testimonial-box .description {
          padding: 0 8rem;
        }
      }
      
      @media (min-width: 1200px) {
        .testimonial-box .description {
          padding: 0 13rem;
        }
      }
      
      /*--------------------------------------------------------------
      # Contact
      --------------------------------------------------------------*/
      .footer-paralax {
        padding: 4rem 0 0 0;
      }
      
      .contact-mf {
        margin-top: 4rem;
      }
      
      @media (min-width: 767px) {
        .contact-mf .box-pl2 {
          margin-top: 3rem;
          padding-left: 0rem;
        }
      }
      
      .php-email-form .validate {
        display: none;
        color: red;
        margin: 0 0 15px 0;
        font-weight: 400;
        font-size: 13px;
      }
      
      .php-email-form .error-message {
        display: none;
        color: #fff;
        background: #ed3c0d;
        text-align: center;
        padding: 15px;
        font-weight: 600;
      }
      
      .php-email-form .sent-message {
        display: none;
        color: #fff;
        background: #18d26e;
        text-align: center;
        padding: 15px;
        font-weight: 600;
      }
      
      .php-email-form .loading {
        display: none;
        background: #fff;
        text-align: center;
        padding: 15px;
      }
      
      .php-email-form .loading:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        margin: 0 10px -6px 0;
        border: 3px solid #18d26e;
        border-top-color: #eee;
        -webkit-animation: animate-loading 1s linear infinite;
        animation: animate-loading 1s linear infinite;
      }
      
      .php-email-form input, .php-email-form textarea {
        border-radius: 0;
        box-shadow: none;
        font-size: 14px;
      }
      
      .php-email-form input::focus, .php-email-form textarea::focus {
        background-color: #0078ff;
      }
      
      .php-email-form input {
        padding: 20px 15px;
      }
      
      .php-email-form textarea {
        padding: 12px 15px;
        margin-bottom: 0;
      }
      
      .php-email-form button[type="submit"] {
        background: #0078ff;
        border: 0;
        padding: 10px 24px;
        color: #fff;
        transition: 0.4s;
      }
      
      .php-email-form button[type="submit"]:hover {
        background: #3393ff;
      }
      
      @-webkit-keyframes animate-loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes animate-loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      /*--------------------------------------------------------------
      # Blog
      --------------------------------------------------------------*/
      @media (min-width: 767px) {
        .card-blog {
          margin-bottom: 3rem;
        }
      }
      
      .card-blog .card-body {
        position: relative;
      }
      
      .card-blog .card-category-box {
        position: absolute;
        text-align: center;
        top: -16px;
        left: 15px;
        right: 15px;
        line-height: 25px;
        overflow: hidden;
      }
      
      .card-blog .card-category {
        display: inline-block;
        color: #fff;
        padding: 0 15px 5px;
        overflow: hidden;
        background-color: #0078ff;
        border-radius: 4px;
      }
      
      .card-blog .card-category .category {
        color: #fff;
        display: inline-block;
        text-transform: uppercase;
        font-size: .7rem;
        letter-spacing: .1px;
        margin-bottom: 0;
      }
      
      .card-blog .card-title {
        font-size: 1.3rem;
        margin-top: .6rem;
      }
      
      .card-blog .card-description {
        color: #4e4e4e;
      }
      
      .card-blog .post-author {
        display: inline-block;
      }
      
      .card-blog .post-date {
        color: #4e4e4e;
        display: inline-block;
        float: right;
      }
      
      /*--------------------------------------------------------------
      # Blog Single
      --------------------------------------------------------------*/
      .post-box,
      .form-comments,
      .box-comments,
      .widget-sidebar {
        padding: 2rem;
        background-color: #fff;
        margin-bottom: 3rem;
      }
      
      @media (min-width: 768px) {
        .post-box,
        .form-comments,
        .box-comments,
        .widget-sidebar {
          padding: 3rem;
        }
      }
      
      .blog-wrapper .article-title {
        font-size: 1.5rem;
      }
      
      @media (min-width: 768px) {
        .blog-wrapper .article-title {
          font-size: 1.9rem;
        }
      }
      
      .blog-wrapper .post-meta {
        margin: 1rem 0;
      }
      
      .blog-wrapper .post-meta ul {
        border-left: 4px solid #0078ff;
        margin-top: 1rem;
      }
      
      .blog-wrapper .post-meta ul li {
        display: inline-block;
        margin-left: 15px;
      }
      
      .blog-wrapper .post-meta ul a {
        color: #0078ff;
      }
      
      .blog-wrapper .post-meta ul span {
        color: #1e1e1e;
      }
      
      .blog-wrapper .blockquote {
        border-left: 4px solid #0078ff;
        padding: 18px;
        font-style: italic;
      }
      
      /*------/ Comments /------*/
      .box-comments .list-comments li {
        padding-bottom: 40px;
      }
      
      .box-comments .list-comments .comment-avatar {
        display: table-cell;
        vertical-align: top;
      }
      
      .box-comments .list-comments .comment-avatar img {
        width: 80px;
        height: 80px;
      }
      
      .box-comments .list-comments .comment-author {
        font-size: 1.3rem;
      }
      
      @media (min-width: 768px) {
        .box-comments .list-comments .comment-author {
          font-size: 1.5rem;
        }
      }
      
      .box-comments .list-comments .comment-details {
        display: table-cell;
        vertical-align: top;
        padding-left: 25px;
      }
      
      .box-comments .list-comments a {
        color: #0078ff;
      }
      
      .box-comments .list-comments span {
        color: #1e1e1e;
        font-style: italic;
      }
      
      .box-comments .comment-children {
        margin-left: 40px;
      }
      
      /*------/ Sidebar /------*/
      .widget-sidebar .sidebar-title {
        font-size: 1.6rem;
        font-weight: 600;
        border-left: 5px solid #0078ff;
        padding-left: 15px;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }
      
      .widget-sidebar .list-sidebar li {
        position: relative;
        padding: 6px 0 6px 24px;
      }
      
      .widget-sidebar .list-sidebar li:before {
        position: absolute;
        content: "";
        width: 10px;
        height: 1px;
        left: 0;
        background-color: #0078ff;
        top: 20px;
      }
      
      .sidebar-search input {
        background-color: #fff;
        border-radius: 0;
        transition: all 0.5s ease-in-out;
      }
      
      .sidebar-search .btn-search {
        background-color: #0078ff;
        border-color: #0078ff;
        border-radius: 0;
        padding-left: 20px;
        padding-right: 20px;
      }
      
      .widget-tags ul li {
        display: inline-block;
        background-color: #0078ff;
        padding: .2rem .6rem;
        margin-bottom: .5rem;
        border-radius: 15px;
      }
      
      .widget-tags ul li a {
        color: #fff;
      }
      
      /*--------------------------------------------------------------
      # Footer
      --------------------------------------------------------------*/
      footer {
        text-align: center;
        color: rgb(6, 153, 38);
        padding: 25px 0;
        background: black;
      }
      
      footer .copyright {
        margin-bottom: .3rem;
      }
      
      footer .credits {
        margin-bottom: 0;
      }
      
      footer .credits a {
        color: #fff;
      }
      
}

return (
    <>
    <body id="page-top">

<!-- ======= Header/ Navbar ======= -->
<nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand js-scroll" href="#page-top">Portfolio</a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll active" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll" href="#service">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll" href="#work">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll" href="#blog">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- ======= Intro Section ======= -->
<div id="home" class="intro route bg-image" style="background-image: url(assets/img/Anissa\ pic\ 4.jpg)">
  <div class="overlay-itro"></div>
  <div class="intro-content display-table">
    <div class="table-cell">
      <div class="container">
        <!--<p class="display-6 color-d">Hello, world!</p>-->
        <h1 class="intro-title mb-4">I am Anissa Shanks</h1>
        <p class="intro-subtitle"><span class="text-slider-items">Project Manager, Front End Developer, Designer, Legal Eagle,Entrepreneur</span><strong class="text-slider"></strong></p>
        <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
      </div>
    </div>
  </div>
</div><!-- End Intro Section -->

<main id="main">

  <!-- ======= About Section ======= -->
  <section id="about" class="about-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="box-shadow-full">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-sm-6 col-md-5">
                    <div class="about-img">
                      <img src="assets/img/me and Sass.png" class="img-fluid rounded b-shadow-a" alt="Sassy">
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-7">
                    <div class="about-info">
                      <p><span class="title-s">Name: </span> <span>Anissa Shanks</span></p>
                      <p><span class="title-s">Profile: </span> <span>Technical Project Manager and Web Developer</span></p>
                      <p><span class="title-s">Email: </span> <span>anissa.shanks@gmail.com</span></p>
                      <p><span class="title-s">Phone: </span> <span>(323) 926-0167</span></p>
                    </div>
                  </div>
                </div>
                <div class="skill-mf">
                  <p class="title-s">Skill</p>
                  <span>HTML</span> <span class="pull-right">85%</span>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>CSS3</span> <span class="pull-right">80%</span>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>MySQL</span> <span class="pull-right">85%</span>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>JAVASCRIPT</span> <span class="pull-right">90%</span>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-me pt-4 pt-md-0">
                  <div class="title-box-2">
                    <h5 class="title-left">
                      About me
                    </h5>
                  </div>
                  <p class="lead">
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                    imperdiet et, porttitor
                    at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                    porttitor accumsan tincidunt.
                  </p>
                  <p class="lead">
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                    porttitor volutpat. Vestibulum
                    ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                  </p>
                  <p class="lead">
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
  </section><!-- End About Section -->

  <!-- ======= Services Section ======= -->
  <section id="service" class="services-mf pt-5 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Services
            </h3>
            <p class="subtitle-a">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="service-box">
            <div class="service-ico">
              <span class="ico-circle"><i class="ion-monitor"></i></span>
            </div>
            <div class="service-content">
              <h2 class="s-title">Web Design</h2>
              <p class="s-description text-center">
                While progressing through UCLA's bootcamp, I found my passion for front end web development
                through work on various class projects. My work on Express Bartender had rave reviews!
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-box">
            <div class="service-ico">
              <span class="ico-circle"><i class="ion-code-working"></i></span>
            </div>
            <div class="service-content">
              <h2 class="s-title">Web Development</h2>
              <p class="s-description text-center">
                As a new full stack web developer student, my project management skills were utilized as I lead
                our teams to create dynamic mobile responsive web sites and apps.                 
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-box">
            <div class="service-ico">
              <span class="ico-circle"><i class="ion-camera"></i></span>
            </div>
            <div class="service-content">
              <h2 class="s-title">Licensing</h2>
              <p class="s-description text-center">
                I have handled multi-million dollar licensing projects for major Hollywood Studios including Disney,
                Universal Studios, Netflix and Dreamworks.                  
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-box">
            <div class="service-ico">
              <span class="ico-circle"><i class="ion-android-phone-portrait"></i></span>
            </div>
            <div class="service-content">
              <h2 class="s-title">Responsive Design</h2>
              <p class="s-description text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-box">
            <div class="service-ico">
              <span class="ico-circle"><i class="ion-paintbrush"></i></span>
            </div>
            <div class="service-content">
              <h2 class="s-title">Clients</h2>
              <p class="s-description text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-box">
            <div class="service-ico">
              <span class="ico-circle"><i class="ion-stats-bars"></i></span>
            </div>
            <div class="service-content">
              <h2 class="s-title">Project Management</h2>
              <p class="s-description text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </section>End Services Section --> 

  <!-- ======= Counter Section ======= -->
  <div class="section-counter paralax-mf bg-image" style="background-image: url(https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6391/6391844cv18d.jpg)">
    <div class="overlay-mf"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-lg-3">
          <div class="counter-box counter-box pt-4 pt-md-0">
            <div class="counter-ico">
              <span class="ico-circle"><i class="ion-checkmark-round"></i></span>
            </div>
            <div class="counter-num">
              <p class="counter">15</p>
              <span class="counter-text"> CODING PROJECTS COMPLETED</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-lg-3">
          <div class="counter-box pt-4 pt-md-0">
            <div class="counter-ico">
              <span class="ico-circle"><i class="ion-ios-calendar-outline"></i></span>
            </div>
            <div class="counter-num">
              <p class="counter">12</p>
              <span class="counter-text">YEARS OF PROJECT MANAGEMENT EXPERIENCE</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-lg-3">
          <div class="counter-box pt-4 pt-md-0">
            <div class="counter-ico">
              <span class="ico-circle"><i class="ion-ios-people"></i></span>
            </div>
            <div class="counter-num">
              <p class="counter">10000</p>
              <span class="counter-text">CONTENT PIECES APPROVED</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-lg-3">
          <div class="counter-box pt-4 pt-md-0">
            <div class="counter-ico">
              <span class="ico-circle"><i class="ion-ribbon-a"></i></span>
            </div>
            <div class="counter-num">
              <p class="counter">35</p>
              <span class="counter-text">THIRD PARTY CLIENTS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- End Counter Section -->

  <!-- ======= Portfolio Section ======= -->
  <section id="work" class="portfolio-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Portfolio
            </h3>
            <p class="subtitle-a">
              My journey to becoming a Full Stack Web Developer
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/Kobe 24 8_revised.jpg" data-gall="portfolioGallery" class="venobox">
              <div class="work-img">
                <img src="assets/img/Kobe 24 8_revised.jpg" alt="Kobe Mamba Out" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Quiz: "Do You Have Mamba Mentality?"</h2>
                  <div class="w-more">
                    <span class="w-ctegory">App Development: Quiz</span> / <span class="w-date">July. 2020</span>
                    <p>Quiz on facts about Kobe's career and a 24 second countdown timer for each question.</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href="portfolio-details.html"> <span class="ion-ios-plus-outline"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/thunder-light.jpg" data-gall="portfolioGallery" class="venobox">
              <div class="work-img">
                <img src="assets/img/thunder-light.jpg" alt="purple thunder and lightening image" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Weather App</h2>
                  <div class="w-more">
                    <span class="w-ctegory">App</span> / <span class="w-date">July. 2020</span>
                    <p>Weather app using local storage and API to allow user to input a city which displays a 5 day forecast.</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href="portfolio-details.html"> <span class="ion-ios-plus-outline"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/Express Bartender home page.png" data-gall="portfolioGallery" class="venobox">
              <div class="work-img">
                <img src="assets/img/Express Bartender home page.png" alt="" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Express Bartender</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">11 Sep. 2020</span>
                    <p>Media Responsive Web application showing users how to be their own Mixologist at home.</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href="assets/img/Express Bartender home page.png"> <span class="ion-ios-plus-outline"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/Express Bartender home page.png" data-gall="portfolioGallery" class="venobox">
              <div class="work-img">
                <img src="assets/img/Express Bartender home page.png" alt="Express Bartender home page" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Project 3</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">Oct. 2020</span>
                    <p>Tentative project using MongoDB, React, HTML, CSS, Javascript, jQuery, API's</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href="portfolio-details.html"> <span class="ion-ios-plus-outline"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/Houston skyline.jpg" data-gall="portfolioGallery" class="venobox">
              <div class="work-img">
                <img src="assets/img/Houston skyline.jpg" alt="Houston Skyline" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Future Project</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">Oct. 2020</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href="portfolio-details.html"> <span class="ion-ios-plus-outline"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/Hollywood at Sunset.png" data-gall="portfolioGallery" class="venobox">
              <div class="work-img">
                <img src="assets/img/Hollywood at Sunset.png" alt="Hollywood sign at sunset" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Future Project</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">Nov. 2020</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href="portfolio-details.html"> <span class="ion-ios-plus-outline"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section><!-- End Portfolio Section -->

  <!-- ======= Testimonials Section ======= -->
  <div class="testimonials paralax-mf bg-image" style="background-image: url(assets/img/overlay-bg.jpg)">
    <div class="overlay-mf"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="testimonial-mf" class="owl-carousel owl-theme">
            <div class="testimonial-box">
              <div class="author-test">
                <img src="assets/img/derrick pic.png" alt="Derrick picture" class="rounded-circle b-shadow-a">
                <span class="author">Derrick Plummer - SVP SKDKnickerbocker</span>
              </div>
              <div class="content-test">
                <p class="description lead">
                  Anissa's discipline and intellect, and skills have allowed her to be a strong leader,
                  and an exceptional manager. The way she approaches projects has led many to remark
                  on her outstanding leadership. Without a doubt her work ethic, passion, ability to multitask,
                  and creative thinking is helping her colleagues to succeed.
                </p>
                <span class="comit"><i class="fa fa-quote-right"></i></span>
              </div>
            </div>
            <div class="testimonial-box">
              <div class="author-test">
                <img src="assets/img/Tasha pic.png" alt="Tasha pic" class="rounded-circle b-shadow-a">
                <span class="author">Tasha Austin - Principal at Deloitte</span>
              </div>
              <div class="content-test">
                <p class="description lead">
                  Anissa is a very committed and dedicated professional who always delivers value and has significant impact
                  on any project she is involved in. She has gained recognition for dynamic leadership, creativity, vision, 
                  and good judgement. She is a true leader who always has a distinctive point of view and is well respected
                  by her peers, clients, and those she impacts in the community and abroad. 
                </p>
                <span class="comit"><i class="fa fa-quote-right"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- End Testimonials Section -->

  <!-- ======= Blog Section ======= -->

  <!-- Entering Bootstrap Carousel with additional images-->

<section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Clients

              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="..." class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="...">
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
      <!-- <div class="row">
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"><img src="assets/img/post-1.jpg" alt="" class="img-fluid"></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Travel</h6>
                </div>
              </div>
              <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                  <span class="author">Morgan Freeman</span>
                </a>
              </div>
              <div class="post-date">
                <span class="ion-ios-clock-outline"></span> 10 min
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"><img src="assets/img/post-2.jpg" alt="" class="img-fluid"></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Web Design</h6>
                </div>
              </div>
              <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                  <span class="author">Morgan Freeman</span>
                </a>
              </div>
              <div class="post-date">
                <span class="ion-ios-clock-outline"></span> 10 min
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"><img src="assets/img/post-3.jpg" alt="" class="img-fluid"></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Web Design</h6>
                </div>
              </div>
              <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                  <span class="author">Morgan Freeman</span>
                </a>
              </div>
              <div class="post-date">
                <span class="ion-ios-clock-outline"></span> 10 min
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div> 
  </section>

  <!-- ======= Contact Section ======= -->
  <section class="paralax-mf footer-paralax bg-image sect-mt4 route" style="background-image: url(assets/img/overlay-bg.jpg)">
    <div class="overlay-mf"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="contact-mf">
            <div id="contact" class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="title-box-2">
                    <h5 class="title-left">
                      Send A Message
                    </h5>
                  </div>
                  <div>
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                      <div class="row">
                        <div class="col-md-12 mb-3">
                          <div class="form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                          </div>
                        </div>
                        <div class="col-md-12 mb-3">
                          <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                          </div>
                        </div>
                        <div class="col-md-12 mb-3">
                          <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validate"></div>
                          </div>
                        </div>
                        <div class="col-md-12 text-center mb-3">
                          <div class="loading">Loading</div>
                          <div class="error-message"></div>
                          <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="col-md-12 text-center">
                          <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="title-box-2 pt-4 pt-md-0">
                    <h5 class="title-left">
                      Get in Touch
                    </h5>
                  </div>
                  <div class="more-info">
                
                    <ul class="list-ico">
                      <li><span class="ion-ios-location"></span> St. Louis, MO</li>
                      <li><span class="ion-ios-telephone"></span> (323) 926-0167</li>
                      <li><span class="ion-email"></span> anissa.shanks@gmail.com</li>
                    </ul>
                  </div>
                  <div class="socials">
                    <ul>
                      <li><a href=""><span class="ico-circle"><i class="ion-social-facebook"></i></span></a></li>
                      <li><a href=""><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                      <li><a href=""><span class="ico-circle"><i class="ion-social-twitter"></i></span></a></li>
                      <li><a href=""><span class="ico-circle"><i class="ion-social-pinterest"></i></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End Contact Section -->

</main><!-- End #main -->

<!-- ======= Footer ======= -->
<footer>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="copyright-box">
          <p class="copyright">&copy; Copyright <strong>Anissa Shanks and DevFolio</strong>. All Rights Reserved</p>
          <div class="credits">
            <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
          -->
            Designed by <a href="https://bootstrapmade.com/">Anissa Shanks & BootstrapMade</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer><!-- End  Footer -->

<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<div id="preloader"></div>

<!-- Vendor JS Files -->
<script src="assets/vendor/jquery/jquery.min.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>
<script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
<script src="assets/vendor/counterup/jquery.counterup.min.js"></script>
<script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
<script src="assets/vendor/typed.js/typed.min.js"></script>
<script src="assets/vendor/venobox/venobox.min.js"></script>

<!-- Template Main JS File -->
<script src="assets/js/main.js"></script>

</body>

</html>
)

</>
}
    