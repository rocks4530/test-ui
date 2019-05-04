import { Component } from '@angular/core';
import * as grpcWeb from 'grpc-web';
import { UserClient } from '../grpc/User_grpc_web_pb';
import { Req, Res } from '../grpc/User_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ui';
  client = new UserClient('http://localhost:8081', null, null);
  request = new Req();

  onClick() {
    this.request.setId(1);
    const call = this.client.getName(this.request, null,
      (err: grpcWeb.Error, response: Res) => {
        console.log(response);
        console.log(err);
        console.log(call);
      });
    call.on('status', (status: grpcWeb.Status) => {
      console.log(status);
    });
    console.log('button-clicked');
  }
}
