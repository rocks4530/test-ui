import * as jspb from "google-protobuf"

export class Req extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Req.AsObject;
  static toObject(includeInstance: boolean, msg: Req): Req.AsObject;
  static serializeBinaryToWriter(message: Req, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Req;
  static deserializeBinaryFromReader(message: Req, reader: jspb.BinaryReader): Req;
}

export namespace Req {
  export type AsObject = {
    id: number,
  }
}

export class Res extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Res.AsObject;
  static toObject(includeInstance: boolean, msg: Res): Res.AsObject;
  static serializeBinaryToWriter(message: Res, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Res;
  static deserializeBinaryFromReader(message: Res, reader: jspb.BinaryReader): Res;
}

export namespace Res {
  export type AsObject = {
    name: string,
  }
}

