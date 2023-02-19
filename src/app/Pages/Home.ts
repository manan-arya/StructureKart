/* eslint-disable */
import {Component} from "@angular/core";
import {workDetails} from "WorkText";
import { SignupComponent } from "app/examples/signup/signup.component";
import { ContactForm } from "app/components/ContactForm";

@Component({
  selector: "Home-Component",
  templateUrl: "./Home.html",
  styleUrls: ["./Home.css"]
})

export class HomeComponent {
  public GoToContact($event) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  public HasImage()
  {

  }

  public friendlist = workDetails;
}

