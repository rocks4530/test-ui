/**
 * @fileoverview gRPC-Web generated client stub for com.awesome.model
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.awesome = {};
proto.com.awesome.model = require('./User_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.awesome.model.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.awesome.model.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.awesome.model.Req,
 *   !proto.com.awesome.model.Res>}
 */
const methodInfo_User_GetName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.awesome.model.Res,
  /** @param {!proto.com.awesome.model.Req} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.awesome.model.Res.deserializeBinary
);


/**
 * @param {!proto.com.awesome.model.Req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.awesome.model.Res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.awesome.model.Res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.awesome.model.UserClient.prototype.getName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.awesome.model.User/GetName',
      request,
      metadata || {},
      methodInfo_User_GetName,
      callback);
};


/**
 * @param {!proto.com.awesome.model.Req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.awesome.model.Res>}
 *     A native promise that resolves to the response
 */
proto.com.awesome.model.UserPromiseClient.prototype.getName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.awesome.model.User/GetName',
      request,
      metadata || {},
      methodInfo_User_GetName);
};


module.exports = proto.com.awesome.model;

