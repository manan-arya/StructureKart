import { Injectable, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../src/app/app.component";

@Injectable({
  providedIn: "root",
})
export class FetchDataServiceService  {
  firebaseConfig: any;
  fireApp: any;
  database: any;

  constructor() {
    this.fireApp = app;
    // Initialize Realtime Database and get a reference to the service
    this.database = getDatabase(this.fireApp, "https://structurekart-default-rtdb.asia-southeast1.firebasedatabase.app/");
  }

  writeUserData(name, email, desc): any {
    let out = set(ref(this.database, name), {
      email: email,
      description: desc,
    });
  }
}
