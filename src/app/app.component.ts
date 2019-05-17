
import { Component } from '@angular/core';
import * as grpcWeb from 'grpc-web';
import { UserClient } from '../grpc/User_grpc_web_pb';
import { Req, Res } from '../grpc/User_pb';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ui';
  // client = new UserClient('https://envoy-proxy.apps.internal:8082', null, null);
  client = new UserClient('http://localhost:8081', null, null);
  request = new Req();

  constructor(private logger: NGXLogger) {
    this.logger.debug('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');
  }


  onClick() {
    this.request.setId(1);

    const call = this.client.getName(this.request, null,
      (err: grpcWeb.Error, response: Res) => {
        console.log(response);
        console.log(err);
        console.log(call);
        alert(err.message);
        alert(response.getName());
        this.logger.debug(err.message);
      });
    call.on('status', (status: grpcWeb.Status) => {
      alert(status.details);
      console.log(status);
      this.logger.debug(status.details);
    });
    console.log('button-clicked');
  }
}
