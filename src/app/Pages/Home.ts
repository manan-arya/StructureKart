import { Component } from '@angular/core';

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
		window.scrollTo(0,0);
	}
}

