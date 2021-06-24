import { Component, OnInit } from '@angular/core';
import {
  ScrollToService,
  ScrollToConfigOptions,
} from '@nicky-lenaers/ngx-scroll-to'; //paso3
import * as $ from 'jQuery';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {
    this.navbarTransition();
  }

  //metodo de scroll

  scrollTrigger(target) {
    const config: ScrollToConfigOptions = {
      target: target,
      easing: 'easeOutElastic',
      duration: 400,
    };

    this.scrollToService.scrollTo(config);
  }

  //metodo de animacion barra de navegacion
  navbarTransition() {
    $(() => {
      let navbar = $('#navbar'); //select navbar
      let startChange = $('#bg-out').offset().top
      console.log(startChange)

      //animation when the user do scroll
      $(window).scroll(() => {
        if ($(window).scrollTop() <= (startChange - 100)) {
          //remove class when the navbar are top
          navbar.removeClass('navbar-styles');
          navbar.removeClass('navbar-light');
          navbar.addClass('navbar-dark');
        } else {
          //add class when the user doit scroll
          navbar.addClass('navbar-styles');
          navbar.removeClass('navbar-dark');
          navbar.addClass('navbar-light');
        }
      });
    });
  }
}
