import {Component} from "@angular/core";
import {workDetails} from "WorkText";

@Component({
    selector: 'Home-Component',
    templateUrl: './Home.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class HomeComponent {
	public GoToContact($event){
		window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
	}

    public friendlist = workDetails;
}

