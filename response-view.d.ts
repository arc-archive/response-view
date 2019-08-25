/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   response-view.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {html, css, LitElement} from 'lit-element';

export {ResponseView};

declare namespace UiElements {

  /**
   * An element to display HTTP response view.
   *
   * It accepts request data object to render additional information in the
   * status bar (method & URL).
   *
   * ## Data model
   *
   * ## Request data model
   *
   * The request is ARC (Advanced REST client) request data model. It expects
   * the following properties:
   * - url (`String`) - Request URL
   * - method (`String`) - Request HTTP method.
   * - headers (`String|undefined`) - HTTP headers string
   * - payload (`String|FormData|File|ArrayBuffer|undefined`) Request body
   *
   * ## Response data model
   *
   * The response is ARC response data model:
   * - status (`Number`) - Response status code
   * - statusText (`String`) - Response status text. Can be empty string.
   * - payload (`String|Document|ArrayBuffer|Blob|undefined`) - Response body
   * - headers (`String|undefined`) - Response headers
   *
   * Response object is created by `advanced-rest-client/xhr-simple-request`.
   * However, any transport library can generate similar object.
   *
   * ## Advanced transport properties
   *
   * When using own transport libraries or server side transport you may have
   * access to more information about the request and response like redirects
   * and timings. The response status view can render additional UI for this
   * data.
   * To enable this feature, set `isXhr` to false and any of the following
   * properties:
   *
   * - sentHttpMessage `String` - Raw HTTP message sent to server
   * - redirects `Array<Object>` - A list of redirect information. Each object has
   * the following properties:
   *  - status (`Number`) - Response status code
   *  - statusText (`String`) - Response status text. Can be empty string.
   *  - headers (`String|undefined`) - Response headers
   *  - payload (`String|Document|ArrayBuffer|Blob|undefined`) - Response body
   * - redirectTimings `Array<Object>` - List of HAR 1.2 timing objects for
   * each redirected request. The order must corresponds with order in `redirects`
   * array.
   * - timings `Object` - HAR 1.2 timings object
   *
   * Read [response-status-view]
   * (https://elements.advancedrestclient.com/elements/response-status-view)
   * element documentation for more details.
   *
   * ## Error reporting
   *
   * If there's a request error set `isError` property and the `responseError`
   * that is an `Error` object.
   */
  class ResponseView extends LitElement {

    /**
     * ARC request object
     *
     * Properties -
     * - url (`String`) - Request URL
     * - method (`String`) - Request HTTP method.
     * - headers (`String|undefined`) - HTTP headers string
     * - payload (`String|FormData|File|ArrayBuffer|undefined`) Request body
     */
    request: object|null|undefined;

    /**
     * ARC response object.
     *
     * Properties -
     * - status (`Number`) - Response status code
     * - statusText (`String`) - Response status text. Can be empty string.
     * - headers (`String|undefined`) - Response headers
     * - payload (`String|Document|ArrayBuffer|Blob|undefined`) - Response body
     */
    response: {status: String|null, statusText: String|null, headers?: String|null, payload?: String|Document|ArrayBuffer|Blob|null};

    /**
     * An Error object associated with the request if the response was errored.
     * It should have a `message` property set to the human readable
     * explenation of the error.
     * If not set the default message will be displaed.
     *
     * `isError` must be set with thit object.
     */
    responseError: Error|null;

    /**
     * Response body.
     *
     * Ths value is computed from `response` property.
     */
    responseBody: String|FormData|File|ArrayBuffer|null|undefined;

    /**
     * Returned status code.
     * Ths value is computed from `response` property.
     */
    statusCode: number|null|undefined;

    /**
     * Returned status message (if any).
     * Ths value is computed from `response` property.
     */
    statusMessage: string|null|undefined;

    /**
     * Request headers sent to the server.
     * Ths value is computed from `request` property.
     */
    requestHeaders: string|null|undefined;

    /**
     * Returned from the server headers.
     * Ths value is computed from `response` property.
     */
    responseHeaders: string|null|undefined;

    /**
     * The response content type header if present
     * Ths value is computed from `response` property.
     */
    contentType: string|null|undefined;

    /**
     * If available, the request / response timings as defined in HAR 1.2
     * spec.
     */
    responseTimings: object|null|undefined;

    /**
     * The total time of the request / response load.
     */
    loadingTime: number|null|undefined;

    /**
     * If this information available, the source HTTP message sent to
     * the remote machine.
     */
    sentHttpMessage: string|null|undefined;

    /**
     * List of ordered redirects.
     * Each object has the following properties:
     * - status (`Number`) - Response status code
     * - statusText (`String`) - Response status text. Can be empty string.
     * - headers (`String|undefined`) - Response headers
     * - payload (`String|Document|ArrayBuffer|Blob|undefined`) - Response body
     */
    redirects: any[]|null|undefined;

    /**
     * If timings stats are available for redirects, the list of the
     * `timings` objects as defined in HAR 1.2 specification.
     * The list should be ordered list.
     */
    redirectTimings: any[]|null|undefined;

    /**
     * Computed value, false if the response is set and it is a HEAD type
     * request (which can't have the response).
     */
    _hasResponse: boolean|null|undefined;

    /**
     * Set to `true` if the response has error object set.
     */
    isError: boolean|null|undefined;

    /**
     * If true it means that the request has been made by the basic
     * transport and advanced details of the request/response like
     * redirects, timings, source message are not available.
     * It this case it will hide unused tabs.
     */
    isXhr: boolean|null|undefined;

    /**
     * A request URL that has been used to make a request
     */
    requestUrl: string|null|undefined;

    /**
     * A HTTP method used to make a request
     */
    requestMethod: string|null|undefined;

    /**
     * Response's character encoding.
     * This value is set when the response is changed. Can be undefined in which case
     * default `utf-8` is used.
     * It is read from `content-type` header value, e.g.: `Content-Type: text/html; charset=iso-8859-1`
     */
    _charset: string|null|undefined;
    constructor();
    render(): any;
    _errorTemplate(): any;
    _responseTemplate(): any;

    /**
     * Resets the initial variables for the Response change handler.
     */
    _reset(): void;

    /**
     * Propagate response properties when response object changes.
     *
     * @param response The response object
     */
    _responseChanged(response: object|null): void;

    /**
     * Reads content-type header from the response headers.
     *
     * @param headers Headers received from the server
     * @returns When present an array where first item is
     * the content type and second is charset value. Otherwise empty array.
     */
    _readContentType(headers: String|null): Array<String|null>|null;

    /**
     * Propagate request data when the `request` object changes.
     *
     * @param request The ARC request object
     */
    _requestChanged(request: object|null): void;

    /**
     * Computes if the response panel should be displayed.
     * If the request method is `HEAD` then it never can have response.
     *
     * @param request ARC request object.
     */
    _computeHasResponse(request: object|null): Boolean|null;

    /**
     * Computes charset value from the `content-type` header.
     *
     * @param contentType Content type header string
     */
    _computeCharset(contentType: String|null): String|null|undefined;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "response-view": UiElements.ResponseView;
  }
}
