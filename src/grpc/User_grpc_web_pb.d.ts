import * as grpcWeb from 'grpc-web';

import {
  Req,
  Res} from './User_pb';

export class UserClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getName(
    request: Req,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Res) => void
  ): grpcWeb.ClientReadableStream<Res>;

}

export class UserPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getName(
    request: Req,
    metadata?: grpcWeb.Metadata
  ): Promise<Res>;

}

