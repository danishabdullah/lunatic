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

import { Hiddens } from '../model/hiddens';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class HiddensService {
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
   * @param byUser
   * @param hiddenUser
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public hiddensDelete(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public hiddensDelete(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public hiddensDelete(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public hiddensDelete(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
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
    if (byUser !== undefined) {
      queryParameters = queryParameters.set('by_user', <any>byUser);
    }
    if (hiddenUser !== undefined) {
      queryParameters = queryParameters.set('hidden_user', <any>hiddenUser);
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

    return this.httpClient.delete<any>(`${this.basePath}/hiddens`, {
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
   * @param byUser
   * @param hiddenUser
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
  public hiddensGet(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Hiddens>;
  public hiddensGet(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Hiddens>>;
  public hiddensGet(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Hiddens>>;
  public hiddensGet(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
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
    if (byUser !== undefined) {
      queryParameters = queryParameters.set('by_user', <any>byUser);
    }
    if (hiddenUser !== undefined) {
      queryParameters = queryParameters.set('hidden_user', <any>hiddenUser);
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

    return this.httpClient.get<Hiddens>(`${this.basePath}/hiddens`, {
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
   * @param byUser
   * @param hiddenUser
   * @param hiddens hiddens
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public hiddensPatch(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    hiddens?: Hiddens,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public hiddensPatch(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    hiddens?: Hiddens,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public hiddensPatch(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    hiddens?: Hiddens,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public hiddensPatch(
    id?: string,
    byUser?: string,
    hiddenUser?: string,
    hiddens?: Hiddens,
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
    if (byUser !== undefined) {
      queryParameters = queryParameters.set('by_user', <any>byUser);
    }
    if (hiddenUser !== undefined) {
      queryParameters = queryParameters.set('hidden_user', <any>hiddenUser);
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

    return this.httpClient.patch<any>(`${this.basePath}/hiddens`, hiddens, {
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
   * @param hiddens hiddens
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public hiddensPost(
    hiddens?: Hiddens,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public hiddensPost(
    hiddens?: Hiddens,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public hiddensPost(
    hiddens?: Hiddens,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public hiddensPost(
    hiddens?: Hiddens,
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

    return this.httpClient.post<any>(`${this.basePath}/hiddens`, hiddens, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}
