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

import { Conversations } from '../model/conversations';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ConversationsService {
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
   * @param success
   * @param feedback
   * @param feedbackType
   * @param feedbackTheme
   * @param feedbackReceivedAt
   * @param markedAsSpam
   * @param markedAsBot
   * @param markedAsFake
   * @param markedAsImpersonation
   * @param originUserId
   * @param targetUserId
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public conversationsDelete(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public conversationsDelete(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public conversationsDelete(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public conversationsDelete(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
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
    if (success !== undefined) {
      queryParameters = queryParameters.set('success', <any>success);
    }
    if (feedback !== undefined) {
      queryParameters = queryParameters.set('feedback', <any>feedback);
    }
    if (feedbackType !== undefined) {
      queryParameters = queryParameters.set('feedback_type', <any>feedbackType);
    }
    if (feedbackTheme !== undefined) {
      queryParameters = queryParameters.set(
        'feedback_theme',
        <any>feedbackTheme
      );
    }
    if (feedbackReceivedAt !== undefined) {
      queryParameters = queryParameters.set(
        'feedback_received_at',
        <any>feedbackReceivedAt
      );
    }
    if (markedAsSpam !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_spam',
        <any>markedAsSpam
      );
    }
    if (markedAsBot !== undefined) {
      queryParameters = queryParameters.set('marked_as_bot', <any>markedAsBot);
    }
    if (markedAsFake !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_fake',
        <any>markedAsFake
      );
    }
    if (markedAsImpersonation !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_impersonation',
        <any>markedAsImpersonation
      );
    }
    if (originUserId !== undefined) {
      queryParameters = queryParameters.set(
        'origin_user_id',
        <any>originUserId
      );
    }
    if (targetUserId !== undefined) {
      queryParameters = queryParameters.set(
        'target_user_id',
        <any>targetUserId
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

    return this.httpClient.delete<any>(`${this.basePath}/conversations`, {
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
   * @param success
   * @param feedback
   * @param feedbackType
   * @param feedbackTheme
   * @param feedbackReceivedAt
   * @param markedAsSpam
   * @param markedAsBot
   * @param markedAsFake
   * @param markedAsImpersonation
   * @param originUserId
   * @param targetUserId
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
  public conversationsGet(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Conversations>;
  public conversationsGet(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Conversations>>;
  public conversationsGet(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Conversations>>;
  public conversationsGet(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
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
    if (success !== undefined) {
      queryParameters = queryParameters.set('success', <any>success);
    }
    if (feedback !== undefined) {
      queryParameters = queryParameters.set('feedback', <any>feedback);
    }
    if (feedbackType !== undefined) {
      queryParameters = queryParameters.set('feedback_type', <any>feedbackType);
    }
    if (feedbackTheme !== undefined) {
      queryParameters = queryParameters.set(
        'feedback_theme',
        <any>feedbackTheme
      );
    }
    if (feedbackReceivedAt !== undefined) {
      queryParameters = queryParameters.set(
        'feedback_received_at',
        <any>feedbackReceivedAt
      );
    }
    if (markedAsSpam !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_spam',
        <any>markedAsSpam
      );
    }
    if (markedAsBot !== undefined) {
      queryParameters = queryParameters.set('marked_as_bot', <any>markedAsBot);
    }
    if (markedAsFake !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_fake',
        <any>markedAsFake
      );
    }
    if (markedAsImpersonation !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_impersonation',
        <any>markedAsImpersonation
      );
    }
    if (originUserId !== undefined) {
      queryParameters = queryParameters.set(
        'origin_user_id',
        <any>originUserId
      );
    }
    if (targetUserId !== undefined) {
      queryParameters = queryParameters.set(
        'target_user_id',
        <any>targetUserId
      );
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

    return this.httpClient.get<Conversations>(
      `${this.basePath}/conversations`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *
   * @param id
   * @param success
   * @param feedback
   * @param feedbackType
   * @param feedbackTheme
   * @param feedbackReceivedAt
   * @param markedAsSpam
   * @param markedAsBot
   * @param markedAsFake
   * @param markedAsImpersonation
   * @param originUserId
   * @param targetUserId
   * @param conversations conversations
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public conversationsPatch(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    conversations?: Conversations,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public conversationsPatch(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    conversations?: Conversations,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public conversationsPatch(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    conversations?: Conversations,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public conversationsPatch(
    id?: string,
    success?: string,
    feedback?: string,
    feedbackType?: string,
    feedbackTheme?: string,
    feedbackReceivedAt?: string,
    markedAsSpam?: string,
    markedAsBot?: string,
    markedAsFake?: string,
    markedAsImpersonation?: string,
    originUserId?: string,
    targetUserId?: string,
    conversations?: Conversations,
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
    if (success !== undefined) {
      queryParameters = queryParameters.set('success', <any>success);
    }
    if (feedback !== undefined) {
      queryParameters = queryParameters.set('feedback', <any>feedback);
    }
    if (feedbackType !== undefined) {
      queryParameters = queryParameters.set('feedback_type', <any>feedbackType);
    }
    if (feedbackTheme !== undefined) {
      queryParameters = queryParameters.set(
        'feedback_theme',
        <any>feedbackTheme
      );
    }
    if (feedbackReceivedAt !== undefined) {
      queryParameters = queryParameters.set(
        'feedback_received_at',
        <any>feedbackReceivedAt
      );
    }
    if (markedAsSpam !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_spam',
        <any>markedAsSpam
      );
    }
    if (markedAsBot !== undefined) {
      queryParameters = queryParameters.set('marked_as_bot', <any>markedAsBot);
    }
    if (markedAsFake !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_fake',
        <any>markedAsFake
      );
    }
    if (markedAsImpersonation !== undefined) {
      queryParameters = queryParameters.set(
        'marked_as_impersonation',
        <any>markedAsImpersonation
      );
    }
    if (originUserId !== undefined) {
      queryParameters = queryParameters.set(
        'origin_user_id',
        <any>originUserId
      );
    }
    if (targetUserId !== undefined) {
      queryParameters = queryParameters.set(
        'target_user_id',
        <any>targetUserId
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

    return this.httpClient.patch<any>(
      `${this.basePath}/conversations`,
      conversations,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *
   * @param conversations conversations
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public conversationsPost(
    conversations?: Conversations,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public conversationsPost(
    conversations?: Conversations,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public conversationsPost(
    conversations?: Conversations,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public conversationsPost(
    conversations?: Conversations,
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

    return this.httpClient.post<any>(
      `${this.basePath}/conversations`,
      conversations,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
