/* eslint-disable */
import {Component, OnInit, Inject, Renderer2, ElementRef, ViewChild} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import {DOCUMENT, LocationStrategy, PlatformLocation, Location} from "@angular/common";

import {NavbarComponent} from "./shared/navbar/navbar.component";
import {filter, Subscription} from "rxjs";

import {FirebaseApp, initializeApp} from "firebase/app";

import { BrandName } from "Globals";


@Component({
  selector: "app-root2",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

export class AppComponent implements OnInit {
  CompanyName : string;
  private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    ngOnInit() {
      const navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();
      });
      this.renderer.listen("window", "scroll", (event) => {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
          // add logic
          navbar.classList.remove("navbar-transparent");
        } else {
          // remove logic
          navbar.classList.add("navbar-transparent");
        }
      });
      const ua = window.navigator.userAgent;
      const trident = ua.indexOf("Trident/");
      if (trident > 0) {
        // IE 11 => return version number
        const rv = ua.indexOf("rv:");
        var version = parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
      }
      if (version) {
        const body = document.getElementsByTagName("body")[0];
        body.classList.add("ie-background");
      }

      // TODO: Replace the following with your app's Firebase project configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCgw6cha5BYt8DvGsPEd3QWtAs0ujSRnKk",
        authDomain: "structurekart.firebaseapp.com",
        projectId: "structurekart",
        storageBucket: "structurekart.appspot.com",
        messagingSenderId: "984958261982",
        appId: "1:984958261982:web:8a157e6ec2cb6e780dc04f",
        measurementId: "G-SZ39E5SFXJ",
      };

      app = initializeApp(firebaseConfig);

      this.CompanyName = BrandName;
    }
    removeFooter() {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if (titlee === "signup" || titlee === "nucleoicons") {
        return false;
      } else {
        return true;
      }
    }
}

export var app : FirebaseApp;

