import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { Messages } from '../model/messages';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class MessagesService {
  protected basePath = 'http://localhost:8080/rest/';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional()
    @Inject(BASE_PATH)
    basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (let consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   *
   * @param id
   * @param content
   * @param conversationId
   * @param from
   * @param to
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public messagesDelete(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public messagesDelete(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public messagesDelete(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public messagesDelete(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    prefer?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (id !== undefined) {
      queryParameters = queryParameters.set('id', <any>id);
    }
    if (content !== undefined) {
      queryParameters = queryParameters.set('content', <any>content);
    }
    if (conversationId !== undefined) {
      queryParameters = queryParameters.set(
        'conversation_id',
        <any>conversationId
      );
    }
    if (from !== undefined) {
      queryParameters = queryParameters.set('from', <any>from);
    }
    if (to !== undefined) {
      queryParameters = queryParameters.set('to', <any>to);
    }

    let headers = this.defaultHeaders;
    if (prefer !== undefined && prefer !== null) {
      headers = headers.set('Prefer', String(prefer));
    }

    // authentication (bearer) required
    if (this.configuration.apiKeys['Authorization']) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];

    return this.httpClient.delete<any>(`${this.basePath}/messages`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   *
   *
   * @param id
   * @param content
   * @param conversationId
   * @param from
   * @param to
   * @param select Filtering Columns
   * @param order Ordering
   * @param range Limiting and Pagination
   * @param rangeUnit Limiting and Pagination
   * @param offset Limiting and Pagination
   * @param limit Limiting and Pagination
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public messagesGet(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Messages>;
  public messagesGet(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Messages>>;
  public messagesGet(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Messages>>;
  public messagesGet(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (id !== undefined) {
      queryParameters = queryParameters.set('id', <any>id);
    }
    if (content !== undefined) {
      queryParameters = queryParameters.set('content', <any>content);
    }
    if (conversationId !== undefined) {
      queryParameters = queryParameters.set(
        'conversation_id',
        <any>conversationId
      );
    }
    if (from !== undefined) {
      queryParameters = queryParameters.set('from', <any>from);
    }
    if (to !== undefined) {
      queryParameters = queryParameters.set('to', <any>to);
    }
    if (select !== undefined) {
      queryParameters = queryParameters.set('select', <any>select);
    }
    if (order !== undefined) {
      queryParameters = queryParameters.set('order', <any>order);
    }
    if (offset !== undefined) {
      queryParameters = queryParameters.set('offset', <any>offset);
    }
    if (limit !== undefined) {
      queryParameters = queryParameters.set('limit', <any>limit);
    }

    let headers = this.defaultHeaders;
    if (range !== undefined && range !== null) {
      headers = headers.set('Range', String(range));
    }
    if (rangeUnit !== undefined && rangeUnit !== null) {
      headers = headers.set('Range-Unit', String(rangeUnit));
    }
    if (prefer !== undefined && prefer !== null) {
      headers = headers.set('Prefer', String(prefer));
    }

    // authentication (bearer) required
    if (this.configuration.apiKeys['Authorization']) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];

    return this.httpClient.get<Messages>(`${this.basePath}/messages`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   *
   *
   * @param id
   * @param content
   * @param conversationId
   * @param from
   * @param to
   * @param messages messages
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public messagesPatch(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    messages?: Messages,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public messagesPatch(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    messages?: Messages,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public messagesPatch(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    messages?: Messages,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public messagesPatch(
    id?: string,
    content?: string,
    conversationId?: string,
    from?: string,
    to?: string,
    messages?: Messages,
    prefer?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (id !== undefined) {
      queryParameters = queryParameters.set('id', <any>id);
    }
    if (content !== undefined) {
      queryParameters = queryParameters.set('content', <any>content);
    }
    if (conversationId !== undefined) {
      queryParameters = queryParameters.set(
        'conversation_id',
        <any>conversationId
      );
    }
    if (from !== undefined) {
      queryParameters = queryParameters.set('from', <any>from);
    }
    if (to !== undefined) {
      queryParameters = queryParameters.set('to', <any>to);
    }

    let headers = this.defaultHeaders;
    if (prefer !== undefined && prefer !== null) {
      headers = headers.set('Prefer', String(prefer));
    }

    // authentication (bearer) required
    if (this.configuration.apiKeys['Authorization']) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.patch<any>(`${this.basePath}/messages`, messages, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   *
   *
   * @param messages messages
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public messagesPost(
    messages?: Messages,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public messagesPost(
    messages?: Messages,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public messagesPost(
    messages?: Messages,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public messagesPost(
    messages?: Messages,
    prefer?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;
    if (prefer !== undefined && prefer !== null) {
      headers = headers.set('Prefer', String(prefer));
    }

    // authentication (bearer) required
    if (this.configuration.apiKeys['Authorization']) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json',
      'application/vnd.pgrst.object+json',
      'text/csv'
    ];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<any>(`${this.basePath}/messages`, messages, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}
