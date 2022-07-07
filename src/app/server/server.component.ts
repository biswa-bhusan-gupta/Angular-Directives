import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .cl {
        color: darkblue;
      }
    `
  ]
})
export class ServerComponent {
  log = ["Java", "C++"];
  serverName = "";

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  serverCreated = false;
  creationStatus = "Server is not Created";

  createServer() {
    // UPDATES VALUES ON CLICK EVENT
    this.creationStatus = "Server Created! Name is " + this.serverName;
    this.serverCreated = true;
    this.log.push(this.serverName);
  }
}
