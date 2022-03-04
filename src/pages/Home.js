/* eslint-disable no-useless-escape */
import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {Push, configureDB} from '../js/DBConnect'

let db= null;
let param = {
	email: null
}
class Home extends Component {
	constructor()
	{
		super()
		this.state = {
			email: '',
			text: '',
			emailValid: false,         // valid flags for each field
			textValid: false, 
			submitDisabled: true       // separate flag for submit
		}

		this.HandleEmailChange = this.HandleEmailChange.bind(this);
		db = configureDB();
	}

	validateEmail = (email) => {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  );
	  };

	HandleEmailChange(e)
	{
		let validityCheck = this.validateEmail(e.target.value);
		this.setState(() => ({ 
			email: e.target.value,
			emailValid: validityCheck
		 }))//https://stackoverflow.com/questions/35978070/how-to-disable-form-submit-button-until-all-input-fields-are-filled-reactjs-es
	}

	formSubmit(e){
		alert(`Submitted succesfully ${this.state.email}`);
		param.email = this.state.email;
		Push(db, param);
		e.preventDefault();
		return(
			<div id="submitSuccessMessage">
				<div className="text-center mb-3 mt-2">
					<div className="fw-bolder">Form submission successful!</div>
				</div>
			</div>
		)
	}

    render() {
	    return (
		<div className="row ">
	    <div className="medium-12 columns">
			<video className="bg-video" playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop"><source src="assets/mp4/bg.mp4" type="video/mp4" /></video>
			<div className="masthead">
				<div className="masthead-content text-white">
					<div className="container-fluid px-4 px-lg-0">
					<ReactTypingEffect
						text={["Coming Soon.", "We don't need to wait for our website to help you."]}
						staticText = {<h1>StructureKart</h1>}
						cursorRenderer={cursor => <h1>{cursor}</h1>}
						displayTextRenderer={(text) => <h1>{text}</h1>}
						speed = {200}       
					/>
						<form id="contactForm">
							<div className="row input-group-newsletter">
								<div className="col"><input className="form-control" id="email" type="email" onChange={this.HandleEmailChange.bind(this)} placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email"/></div>
								<div className="col-auto"><button className="btn btn-primary" id="submitButton" type="submit" onClick={this.formSubmit.bind(this)} disabled={!this.state.emailValid} >Notify Me!</button></div>
							</div>
							<div className="invalid-feedback mt-2" data-sb-feedback="email:required">An email is required.</div>
							<div className="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>
							<div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
						</form>
					</div>
				</div>
			</div>
			<div className="social-icons">
				<div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
					<a className="btn btn-dark m-3" href="#!"><i className="fab fa-twitter"></i></a>
					<a className="btn btn-dark m-3" href="#!"><i className="fab fa-facebook-f"></i></a>
					<a className="btn btn-dark m-3" href="#!"><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
			<script src="js/scripts.js"></script>
			<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            </div>
        </div>  
	     );
    }
}

export default Home;