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

import { Profiles } from '../model/profiles';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ProfilesService {
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
   * @param name
   * @param selfSummary
   * @param gender
   * @param genderType
   * @param relationshipStatus
   * @param speaks
   * @param dob
   * @param displayPicture
   * @param album
   * @param educationalStage
   * @param educationalModifier
   * @param isStudent
   * @param diet
   * @param bodyType
   * @param smokes
   * @param drinks
   * @param usesDrugs
   * @param zodiac
   * @param zodiacAttitude
   * @param children
   * @param wantsChildren
   * @param hasDog
   * @param hasCat
   * @param heightInCm
   * @param whatDoIDo
   * @param iAmGoodAt
   * @param peopleFirstNotice
   * @param faveBooks
   * @param faveMovies
   * @param faveShows
   * @param faveMusic
   * @param faveFood
   * @param faveBlogs
   * @param faveComics
   * @param faveResearchPapers
   * @param whatDoIThinkAbout
   * @param idealUseOfFreetime
   * @param thingsCantDoWithout
   * @param mostPrivateShareables
   * @param messageMeIf
   * @param orientation
   * @param showMeToNonStraightOnly
   * @param searchIntention
   * @param searchRadiusInKm
   * @param searchAgeRangeLowest
   * @param searchAgeRangeHighest
   * @param searchGenders
   * @param searchSingleOnly
   * @param searchOnlyNonMonogamous
   * @param countryIso
   * @param cityId
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public profilesDelete(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public profilesDelete(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public profilesDelete(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public profilesDelete(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
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
    if (name !== undefined) {
      queryParameters = queryParameters.set('name', <any>name);
    }
    if (selfSummary !== undefined) {
      queryParameters = queryParameters.set('self_summary', <any>selfSummary);
    }
    if (gender !== undefined) {
      queryParameters = queryParameters.set('gender', <any>gender);
    }
    if (genderType !== undefined) {
      queryParameters = queryParameters.set('gender_type', <any>genderType);
    }
    if (relationshipStatus !== undefined) {
      queryParameters = queryParameters.set(
        'relationship_status',
        <any>relationshipStatus
      );
    }
    if (speaks !== undefined) {
      queryParameters = queryParameters.set('speaks', <any>speaks);
    }
    if (dob !== undefined) {
      queryParameters = queryParameters.set('dob', <any>dob);
    }
    if (displayPicture !== undefined) {
      queryParameters = queryParameters.set(
        'display_picture',
        <any>displayPicture
      );
    }
    if (album !== undefined) {
      queryParameters = queryParameters.set('album', <any>album);
    }
    if (educationalStage !== undefined) {
      queryParameters = queryParameters.set(
        'educational_stage',
        <any>educationalStage
      );
    }
    if (educationalModifier !== undefined) {
      queryParameters = queryParameters.set(
        'educational_modifier',
        <any>educationalModifier
      );
    }
    if (isStudent !== undefined) {
      queryParameters = queryParameters.set('is_student', <any>isStudent);
    }
    if (diet !== undefined) {
      queryParameters = queryParameters.set('diet', <any>diet);
    }
    if (bodyType !== undefined) {
      queryParameters = queryParameters.set('body_type', <any>bodyType);
    }
    if (smokes !== undefined) {
      queryParameters = queryParameters.set('smokes', <any>smokes);
    }
    if (drinks !== undefined) {
      queryParameters = queryParameters.set('drinks', <any>drinks);
    }
    if (usesDrugs !== undefined) {
      queryParameters = queryParameters.set('uses_drugs', <any>usesDrugs);
    }
    if (zodiac !== undefined) {
      queryParameters = queryParameters.set('zodiac', <any>zodiac);
    }
    if (zodiacAttitude !== undefined) {
      queryParameters = queryParameters.set(
        'zodiac_attitude',
        <any>zodiacAttitude
      );
    }
    if (children !== undefined) {
      queryParameters = queryParameters.set('children', <any>children);
    }
    if (wantsChildren !== undefined) {
      queryParameters = queryParameters.set(
        'wants_children',
        <any>wantsChildren
      );
    }
    if (hasDog !== undefined) {
      queryParameters = queryParameters.set('has_dog', <any>hasDog);
    }
    if (hasCat !== undefined) {
      queryParameters = queryParameters.set('has_cat', <any>hasCat);
    }
    if (heightInCm !== undefined) {
      queryParameters = queryParameters.set('height_in_cm', <any>heightInCm);
    }
    if (whatDoIDo !== undefined) {
      queryParameters = queryParameters.set('what_do_i_do', <any>whatDoIDo);
    }
    if (iAmGoodAt !== undefined) {
      queryParameters = queryParameters.set('i_am_good_at', <any>iAmGoodAt);
    }
    if (peopleFirstNotice !== undefined) {
      queryParameters = queryParameters.set(
        'people_first_notice',
        <any>peopleFirstNotice
      );
    }
    if (faveBooks !== undefined) {
      queryParameters = queryParameters.set('fave_books', <any>faveBooks);
    }
    if (faveMovies !== undefined) {
      queryParameters = queryParameters.set('fave_movies', <any>faveMovies);
    }
    if (faveShows !== undefined) {
      queryParameters = queryParameters.set('fave_shows', <any>faveShows);
    }
    if (faveMusic !== undefined) {
      queryParameters = queryParameters.set('fave_music', <any>faveMusic);
    }
    if (faveFood !== undefined) {
      queryParameters = queryParameters.set('fave_food', <any>faveFood);
    }
    if (faveBlogs !== undefined) {
      queryParameters = queryParameters.set('fave_blogs', <any>faveBlogs);
    }
    if (faveComics !== undefined) {
      queryParameters = queryParameters.set('fave_comics', <any>faveComics);
    }
    if (faveResearchPapers !== undefined) {
      queryParameters = queryParameters.set(
        'fave_research_papers',
        <any>faveResearchPapers
      );
    }
    if (whatDoIThinkAbout !== undefined) {
      queryParameters = queryParameters.set(
        'what_do_i_think_about',
        <any>whatDoIThinkAbout
      );
    }
    if (idealUseOfFreetime !== undefined) {
      queryParameters = queryParameters.set(
        'ideal_use_of_freetime',
        <any>idealUseOfFreetime
      );
    }
    if (thingsCantDoWithout !== undefined) {
      queryParameters = queryParameters.set(
        'things_cant_do_without',
        <any>thingsCantDoWithout
      );
    }
    if (mostPrivateShareables !== undefined) {
      queryParameters = queryParameters.set(
        'most_private_shareables',
        <any>mostPrivateShareables
      );
    }
    if (messageMeIf !== undefined) {
      queryParameters = queryParameters.set('message_me_if', <any>messageMeIf);
    }
    if (orientation !== undefined) {
      queryParameters = queryParameters.set('orientation', <any>orientation);
    }
    if (showMeToNonStraightOnly !== undefined) {
      queryParameters = queryParameters.set(
        'show_me_to_non_straight_only',
        <any>showMeToNonStraightOnly
      );
    }
    if (searchIntention !== undefined) {
      queryParameters = queryParameters.set(
        'search_intention',
        <any>searchIntention
      );
    }
    if (searchRadiusInKm !== undefined) {
      queryParameters = queryParameters.set(
        'search_radius_in_km',
        <any>searchRadiusInKm
      );
    }
    if (searchAgeRangeLowest !== undefined) {
      queryParameters = queryParameters.set(
        'search_age_range_lowest',
        <any>searchAgeRangeLowest
      );
    }
    if (searchAgeRangeHighest !== undefined) {
      queryParameters = queryParameters.set(
        'search_age_range_highest',
        <any>searchAgeRangeHighest
      );
    }
    if (searchGenders !== undefined) {
      queryParameters = queryParameters.set(
        'search_genders',
        <any>searchGenders
      );
    }
    if (searchSingleOnly !== undefined) {
      queryParameters = queryParameters.set(
        'search_single_only',
        <any>searchSingleOnly
      );
    }
    if (searchOnlyNonMonogamous !== undefined) {
      queryParameters = queryParameters.set(
        'search_only_non_monogamous',
        <any>searchOnlyNonMonogamous
      );
    }
    if (countryIso !== undefined) {
      queryParameters = queryParameters.set('country_iso', <any>countryIso);
    }
    if (cityId !== undefined) {
      queryParameters = queryParameters.set('city_id', <any>cityId);
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

    return this.httpClient.delete<any>(`${this.basePath}/profiles`, {
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
   * @param name
   * @param selfSummary
   * @param gender
   * @param genderType
   * @param relationshipStatus
   * @param speaks
   * @param dob
   * @param displayPicture
   * @param album
   * @param educationalStage
   * @param educationalModifier
   * @param isStudent
   * @param diet
   * @param bodyType
   * @param smokes
   * @param drinks
   * @param usesDrugs
   * @param zodiac
   * @param zodiacAttitude
   * @param children
   * @param wantsChildren
   * @param hasDog
   * @param hasCat
   * @param heightInCm
   * @param whatDoIDo
   * @param iAmGoodAt
   * @param peopleFirstNotice
   * @param faveBooks
   * @param faveMovies
   * @param faveShows
   * @param faveMusic
   * @param faveFood
   * @param faveBlogs
   * @param faveComics
   * @param faveResearchPapers
   * @param whatDoIThinkAbout
   * @param idealUseOfFreetime
   * @param thingsCantDoWithout
   * @param mostPrivateShareables
   * @param messageMeIf
   * @param orientation
   * @param showMeToNonStraightOnly
   * @param searchIntention
   * @param searchRadiusInKm
   * @param searchAgeRangeLowest
   * @param searchAgeRangeHighest
   * @param searchGenders
   * @param searchSingleOnly
   * @param searchOnlyNonMonogamous
   * @param countryIso
   * @param cityId
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
  public profilesGet(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Profiles>;
  public profilesGet(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Profiles>>;
  public profilesGet(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    select?: string,
    order?: string,
    range?: string,
    rangeUnit?: string,
    offset?: string,
    limit?: string,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Profiles>>;
  public profilesGet(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
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
    if (name !== undefined) {
      queryParameters = queryParameters.set('name', <any>name);
    }
    if (selfSummary !== undefined) {
      queryParameters = queryParameters.set('self_summary', <any>selfSummary);
    }
    if (gender !== undefined) {
      queryParameters = queryParameters.set('gender', <any>gender);
    }
    if (genderType !== undefined) {
      queryParameters = queryParameters.set('gender_type', <any>genderType);
    }
    if (relationshipStatus !== undefined) {
      queryParameters = queryParameters.set(
        'relationship_status',
        <any>relationshipStatus
      );
    }
    if (speaks !== undefined) {
      queryParameters = queryParameters.set('speaks', <any>speaks);
    }
    if (dob !== undefined) {
      queryParameters = queryParameters.set('dob', <any>dob);
    }
    if (displayPicture !== undefined) {
      queryParameters = queryParameters.set(
        'display_picture',
        <any>displayPicture
      );
    }
    if (album !== undefined) {
      queryParameters = queryParameters.set('album', <any>album);
    }
    if (educationalStage !== undefined) {
      queryParameters = queryParameters.set(
        'educational_stage',
        <any>educationalStage
      );
    }
    if (educationalModifier !== undefined) {
      queryParameters = queryParameters.set(
        'educational_modifier',
        <any>educationalModifier
      );
    }
    if (isStudent !== undefined) {
      queryParameters = queryParameters.set('is_student', <any>isStudent);
    }
    if (diet !== undefined) {
      queryParameters = queryParameters.set('diet', <any>diet);
    }
    if (bodyType !== undefined) {
      queryParameters = queryParameters.set('body_type', <any>bodyType);
    }
    if (smokes !== undefined) {
      queryParameters = queryParameters.set('smokes', <any>smokes);
    }
    if (drinks !== undefined) {
      queryParameters = queryParameters.set('drinks', <any>drinks);
    }
    if (usesDrugs !== undefined) {
      queryParameters = queryParameters.set('uses_drugs', <any>usesDrugs);
    }
    if (zodiac !== undefined) {
      queryParameters = queryParameters.set('zodiac', <any>zodiac);
    }
    if (zodiacAttitude !== undefined) {
      queryParameters = queryParameters.set(
        'zodiac_attitude',
        <any>zodiacAttitude
      );
    }
    if (children !== undefined) {
      queryParameters = queryParameters.set('children', <any>children);
    }
    if (wantsChildren !== undefined) {
      queryParameters = queryParameters.set(
        'wants_children',
        <any>wantsChildren
      );
    }
    if (hasDog !== undefined) {
      queryParameters = queryParameters.set('has_dog', <any>hasDog);
    }
    if (hasCat !== undefined) {
      queryParameters = queryParameters.set('has_cat', <any>hasCat);
    }
    if (heightInCm !== undefined) {
      queryParameters = queryParameters.set('height_in_cm', <any>heightInCm);
    }
    if (whatDoIDo !== undefined) {
      queryParameters = queryParameters.set('what_do_i_do', <any>whatDoIDo);
    }
    if (iAmGoodAt !== undefined) {
      queryParameters = queryParameters.set('i_am_good_at', <any>iAmGoodAt);
    }
    if (peopleFirstNotice !== undefined) {
      queryParameters = queryParameters.set(
        'people_first_notice',
        <any>peopleFirstNotice
      );
    }
    if (faveBooks !== undefined) {
      queryParameters = queryParameters.set('fave_books', <any>faveBooks);
    }
    if (faveMovies !== undefined) {
      queryParameters = queryParameters.set('fave_movies', <any>faveMovies);
    }
    if (faveShows !== undefined) {
      queryParameters = queryParameters.set('fave_shows', <any>faveShows);
    }
    if (faveMusic !== undefined) {
      queryParameters = queryParameters.set('fave_music', <any>faveMusic);
    }
    if (faveFood !== undefined) {
      queryParameters = queryParameters.set('fave_food', <any>faveFood);
    }
    if (faveBlogs !== undefined) {
      queryParameters = queryParameters.set('fave_blogs', <any>faveBlogs);
    }
    if (faveComics !== undefined) {
      queryParameters = queryParameters.set('fave_comics', <any>faveComics);
    }
    if (faveResearchPapers !== undefined) {
      queryParameters = queryParameters.set(
        'fave_research_papers',
        <any>faveResearchPapers
      );
    }
    if (whatDoIThinkAbout !== undefined) {
      queryParameters = queryParameters.set(
        'what_do_i_think_about',
        <any>whatDoIThinkAbout
      );
    }
    if (idealUseOfFreetime !== undefined) {
      queryParameters = queryParameters.set(
        'ideal_use_of_freetime',
        <any>idealUseOfFreetime
      );
    }
    if (thingsCantDoWithout !== undefined) {
      queryParameters = queryParameters.set(
        'things_cant_do_without',
        <any>thingsCantDoWithout
      );
    }
    if (mostPrivateShareables !== undefined) {
      queryParameters = queryParameters.set(
        'most_private_shareables',
        <any>mostPrivateShareables
      );
    }
    if (messageMeIf !== undefined) {
      queryParameters = queryParameters.set('message_me_if', <any>messageMeIf);
    }
    if (orientation !== undefined) {
      queryParameters = queryParameters.set('orientation', <any>orientation);
    }
    if (showMeToNonStraightOnly !== undefined) {
      queryParameters = queryParameters.set(
        'show_me_to_non_straight_only',
        <any>showMeToNonStraightOnly
      );
    }
    if (searchIntention !== undefined) {
      queryParameters = queryParameters.set(
        'search_intention',
        <any>searchIntention
      );
    }
    if (searchRadiusInKm !== undefined) {
      queryParameters = queryParameters.set(
        'search_radius_in_km',
        <any>searchRadiusInKm
      );
    }
    if (searchAgeRangeLowest !== undefined) {
      queryParameters = queryParameters.set(
        'search_age_range_lowest',
        <any>searchAgeRangeLowest
      );
    }
    if (searchAgeRangeHighest !== undefined) {
      queryParameters = queryParameters.set(
        'search_age_range_highest',
        <any>searchAgeRangeHighest
      );
    }
    if (searchGenders !== undefined) {
      queryParameters = queryParameters.set(
        'search_genders',
        <any>searchGenders
      );
    }
    if (searchSingleOnly !== undefined) {
      queryParameters = queryParameters.set(
        'search_single_only',
        <any>searchSingleOnly
      );
    }
    if (searchOnlyNonMonogamous !== undefined) {
      queryParameters = queryParameters.set(
        'search_only_non_monogamous',
        <any>searchOnlyNonMonogamous
      );
    }
    if (countryIso !== undefined) {
      queryParameters = queryParameters.set('country_iso', <any>countryIso);
    }
    if (cityId !== undefined) {
      queryParameters = queryParameters.set('city_id', <any>cityId);
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

    return this.httpClient.get<Profiles>(`${this.basePath}/profiles`, {
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
   * @param name
   * @param selfSummary
   * @param gender
   * @param genderType
   * @param relationshipStatus
   * @param speaks
   * @param dob
   * @param displayPicture
   * @param album
   * @param educationalStage
   * @param educationalModifier
   * @param isStudent
   * @param diet
   * @param bodyType
   * @param smokes
   * @param drinks
   * @param usesDrugs
   * @param zodiac
   * @param zodiacAttitude
   * @param children
   * @param wantsChildren
   * @param hasDog
   * @param hasCat
   * @param heightInCm
   * @param whatDoIDo
   * @param iAmGoodAt
   * @param peopleFirstNotice
   * @param faveBooks
   * @param faveMovies
   * @param faveShows
   * @param faveMusic
   * @param faveFood
   * @param faveBlogs
   * @param faveComics
   * @param faveResearchPapers
   * @param whatDoIThinkAbout
   * @param idealUseOfFreetime
   * @param thingsCantDoWithout
   * @param mostPrivateShareables
   * @param messageMeIf
   * @param orientation
   * @param showMeToNonStraightOnly
   * @param searchIntention
   * @param searchRadiusInKm
   * @param searchAgeRangeLowest
   * @param searchAgeRangeHighest
   * @param searchGenders
   * @param searchSingleOnly
   * @param searchOnlyNonMonogamous
   * @param countryIso
   * @param cityId
   * @param profiles profiles
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public profilesPatch(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    profiles?: Profiles,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public profilesPatch(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    profiles?: Profiles,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public profilesPatch(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    profiles?: Profiles,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public profilesPatch(
    id?: string,
    name?: string,
    selfSummary?: string,
    gender?: string,
    genderType?: string,
    relationshipStatus?: string,
    speaks?: string,
    dob?: string,
    displayPicture?: string,
    album?: string,
    educationalStage?: string,
    educationalModifier?: string,
    isStudent?: string,
    diet?: string,
    bodyType?: string,
    smokes?: string,
    drinks?: string,
    usesDrugs?: string,
    zodiac?: string,
    zodiacAttitude?: string,
    children?: string,
    wantsChildren?: string,
    hasDog?: string,
    hasCat?: string,
    heightInCm?: string,
    whatDoIDo?: string,
    iAmGoodAt?: string,
    peopleFirstNotice?: string,
    faveBooks?: string,
    faveMovies?: string,
    faveShows?: string,
    faveMusic?: string,
    faveFood?: string,
    faveBlogs?: string,
    faveComics?: string,
    faveResearchPapers?: string,
    whatDoIThinkAbout?: string,
    idealUseOfFreetime?: string,
    thingsCantDoWithout?: string,
    mostPrivateShareables?: string,
    messageMeIf?: string,
    orientation?: string,
    showMeToNonStraightOnly?: string,
    searchIntention?: string,
    searchRadiusInKm?: string,
    searchAgeRangeLowest?: string,
    searchAgeRangeHighest?: string,
    searchGenders?: string,
    searchSingleOnly?: string,
    searchOnlyNonMonogamous?: string,
    countryIso?: string,
    cityId?: string,
    profiles?: Profiles,
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
    if (name !== undefined) {
      queryParameters = queryParameters.set('name', <any>name);
    }
    if (selfSummary !== undefined) {
      queryParameters = queryParameters.set('self_summary', <any>selfSummary);
    }
    if (gender !== undefined) {
      queryParameters = queryParameters.set('gender', <any>gender);
    }
    if (genderType !== undefined) {
      queryParameters = queryParameters.set('gender_type', <any>genderType);
    }
    if (relationshipStatus !== undefined) {
      queryParameters = queryParameters.set(
        'relationship_status',
        <any>relationshipStatus
      );
    }
    if (speaks !== undefined) {
      queryParameters = queryParameters.set('speaks', <any>speaks);
    }
    if (dob !== undefined) {
      queryParameters = queryParameters.set('dob', <any>dob);
    }
    if (displayPicture !== undefined) {
      queryParameters = queryParameters.set(
        'display_picture',
        <any>displayPicture
      );
    }
    if (album !== undefined) {
      queryParameters = queryParameters.set('album', <any>album);
    }
    if (educationalStage !== undefined) {
      queryParameters = queryParameters.set(
        'educational_stage',
        <any>educationalStage
      );
    }
    if (educationalModifier !== undefined) {
      queryParameters = queryParameters.set(
        'educational_modifier',
        <any>educationalModifier
      );
    }
    if (isStudent !== undefined) {
      queryParameters = queryParameters.set('is_student', <any>isStudent);
    }
    if (diet !== undefined) {
      queryParameters = queryParameters.set('diet', <any>diet);
    }
    if (bodyType !== undefined) {
      queryParameters = queryParameters.set('body_type', <any>bodyType);
    }
    if (smokes !== undefined) {
      queryParameters = queryParameters.set('smokes', <any>smokes);
    }
    if (drinks !== undefined) {
      queryParameters = queryParameters.set('drinks', <any>drinks);
    }
    if (usesDrugs !== undefined) {
      queryParameters = queryParameters.set('uses_drugs', <any>usesDrugs);
    }
    if (zodiac !== undefined) {
      queryParameters = queryParameters.set('zodiac', <any>zodiac);
    }
    if (zodiacAttitude !== undefined) {
      queryParameters = queryParameters.set(
        'zodiac_attitude',
        <any>zodiacAttitude
      );
    }
    if (children !== undefined) {
      queryParameters = queryParameters.set('children', <any>children);
    }
    if (wantsChildren !== undefined) {
      queryParameters = queryParameters.set(
        'wants_children',
        <any>wantsChildren
      );
    }
    if (hasDog !== undefined) {
      queryParameters = queryParameters.set('has_dog', <any>hasDog);
    }
    if (hasCat !== undefined) {
      queryParameters = queryParameters.set('has_cat', <any>hasCat);
    }
    if (heightInCm !== undefined) {
      queryParameters = queryParameters.set('height_in_cm', <any>heightInCm);
    }
    if (whatDoIDo !== undefined) {
      queryParameters = queryParameters.set('what_do_i_do', <any>whatDoIDo);
    }
    if (iAmGoodAt !== undefined) {
      queryParameters = queryParameters.set('i_am_good_at', <any>iAmGoodAt);
    }
    if (peopleFirstNotice !== undefined) {
      queryParameters = queryParameters.set(
        'people_first_notice',
        <any>peopleFirstNotice
      );
    }
    if (faveBooks !== undefined) {
      queryParameters = queryParameters.set('fave_books', <any>faveBooks);
    }
    if (faveMovies !== undefined) {
      queryParameters = queryParameters.set('fave_movies', <any>faveMovies);
    }
    if (faveShows !== undefined) {
      queryParameters = queryParameters.set('fave_shows', <any>faveShows);
    }
    if (faveMusic !== undefined) {
      queryParameters = queryParameters.set('fave_music', <any>faveMusic);
    }
    if (faveFood !== undefined) {
      queryParameters = queryParameters.set('fave_food', <any>faveFood);
    }
    if (faveBlogs !== undefined) {
      queryParameters = queryParameters.set('fave_blogs', <any>faveBlogs);
    }
    if (faveComics !== undefined) {
      queryParameters = queryParameters.set('fave_comics', <any>faveComics);
    }
    if (faveResearchPapers !== undefined) {
      queryParameters = queryParameters.set(
        'fave_research_papers',
        <any>faveResearchPapers
      );
    }
    if (whatDoIThinkAbout !== undefined) {
      queryParameters = queryParameters.set(
        'what_do_i_think_about',
        <any>whatDoIThinkAbout
      );
    }
    if (idealUseOfFreetime !== undefined) {
      queryParameters = queryParameters.set(
        'ideal_use_of_freetime',
        <any>idealUseOfFreetime
      );
    }
    if (thingsCantDoWithout !== undefined) {
      queryParameters = queryParameters.set(
        'things_cant_do_without',
        <any>thingsCantDoWithout
      );
    }
    if (mostPrivateShareables !== undefined) {
      queryParameters = queryParameters.set(
        'most_private_shareables',
        <any>mostPrivateShareables
      );
    }
    if (messageMeIf !== undefined) {
      queryParameters = queryParameters.set('message_me_if', <any>messageMeIf);
    }
    if (orientation !== undefined) {
      queryParameters = queryParameters.set('orientation', <any>orientation);
    }
    if (showMeToNonStraightOnly !== undefined) {
      queryParameters = queryParameters.set(
        'show_me_to_non_straight_only',
        <any>showMeToNonStraightOnly
      );
    }
    if (searchIntention !== undefined) {
      queryParameters = queryParameters.set(
        'search_intention',
        <any>searchIntention
      );
    }
    if (searchRadiusInKm !== undefined) {
      queryParameters = queryParameters.set(
        'search_radius_in_km',
        <any>searchRadiusInKm
      );
    }
    if (searchAgeRangeLowest !== undefined) {
      queryParameters = queryParameters.set(
        'search_age_range_lowest',
        <any>searchAgeRangeLowest
      );
    }
    if (searchAgeRangeHighest !== undefined) {
      queryParameters = queryParameters.set(
        'search_age_range_highest',
        <any>searchAgeRangeHighest
      );
    }
    if (searchGenders !== undefined) {
      queryParameters = queryParameters.set(
        'search_genders',
        <any>searchGenders
      );
    }
    if (searchSingleOnly !== undefined) {
      queryParameters = queryParameters.set(
        'search_single_only',
        <any>searchSingleOnly
      );
    }
    if (searchOnlyNonMonogamous !== undefined) {
      queryParameters = queryParameters.set(
        'search_only_non_monogamous',
        <any>searchOnlyNonMonogamous
      );
    }
    if (countryIso !== undefined) {
      queryParameters = queryParameters.set('country_iso', <any>countryIso);
    }
    if (cityId !== undefined) {
      queryParameters = queryParameters.set('city_id', <any>cityId);
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

    return this.httpClient.patch<any>(`${this.basePath}/profiles`, profiles, {
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
   * @param profiles profiles
   * @param prefer Preference
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public profilesPost(
    profiles?: Profiles,
    prefer?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public profilesPost(
    profiles?: Profiles,
    prefer?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public profilesPost(
    profiles?: Profiles,
    prefer?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public profilesPost(
    profiles?: Profiles,
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

    return this.httpClient.post<any>(`${this.basePath}/profiles`, profiles, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}
