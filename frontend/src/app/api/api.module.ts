import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';
import { CitiesService } from './api/cities.service';
import { ConversationsService } from './api/conversations.service';
import { CountriesService } from './api/countries.service';
import { HiddensService } from './api/hiddens.service';
import { IntrospectionService } from './api/introspection.service';
import { MatchesService } from './api/matches.service';
import { MessagesService } from './api/messages.service';
import { ProfilesService } from './api/profiles.service';
import { RpcLoginService } from './api/rpcLogin.service';
import { RpcMeService } from './api/rpcMe.service';
import { RpcRefreshTokenService } from './api/rpcRefreshToken.service';
import { RpcSearchCitiesService } from './api/rpcSearchCities.service';
import { RpcSearchConversationsService } from './api/rpcSearchConversations.service';
import { RpcSearchCountriesService } from './api/rpcSearchCountries.service';
import { RpcSearchHiddensService } from './api/rpcSearchHiddens.service';
import { RpcSearchMatchesService } from './api/rpcSearchMatches.service';
import { RpcSearchMessagesService } from './api/rpcSearchMessages.service';
import { RpcSearchProfilesService } from './api/rpcSearchProfiles.service';
import { RpcSearchUisetupsService } from './api/rpcSearchUisetups.service';
import { RpcSearchUserlocationsService } from './api/rpcSearchUserlocations.service';
import { RpcSignupService } from './api/rpcSignup.service';
import { UisetupsService } from './api/uisetups.service';
import { UserlocationsService } from './api/userlocations.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: [],
  providers: [
    CitiesService,
    ConversationsService,
    CountriesService,
    HiddensService,
    IntrospectionService,
    MatchesService,
    MessagesService,
    ProfilesService,
    RpcLoginService,
    RpcMeService,
    RpcRefreshTokenService,
    RpcSearchCitiesService,
    RpcSearchConversationsService,
    RpcSearchCountriesService,
    RpcSearchHiddensService,
    RpcSearchMatchesService,
    RpcSearchMessagesService,
    RpcSearchProfilesService,
    RpcSearchUisetupsService,
    RpcSearchUserlocationsService,
    RpcSignupService,
    UisetupsService,
    UserlocationsService
  ]
})
export class ApiModule {
  public static forRoot(
    configurationFactory: () => Configuration
  ): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ApiModule
  ) {
    if (parentModule) {
      throw new Error(
        'ApiModule is already loaded. Import your base AppModule only.'
      );
    }
  }
}
