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

import { SearchArgs } from '../model/searchargs';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class RpcSearchHiddensService {
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
   * @param args
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public rpcSearchHiddensPost(
    args: SearchArgs,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public rpcSearchHiddensPost(
    args: SearchArgs,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public rpcSearchHiddensPost(
    args: SearchArgs,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public rpcSearchHiddensPost(
    args: SearchArgs,
    prefer?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (args === null || args === undefined) {
      throw new Error(
        'Required parameter args was null or undefined when calling rpcSearchHiddensPost.'
      );
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
      'application/vnd.pgrst.object+json'
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

    return this.httpClient.post<any>(
      `${this.basePath}/rpc/search_hiddens`,
      args,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
