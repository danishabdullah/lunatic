import { Countries } from './countries';

export interface Profiles {
    /**
     * Note: This is a Primary Key.<pk/>
     */
    id?: string;
    name?: string;
    selfSummary?: string;
    gender?: string;
    genderType?: Profiles.GenderTypeEnum;
    relationshipStatus?: Profiles.RelationshipStatusEnum;
    speaks?: string;
    dob?: string;
    displayPicture?: string;
    album?: string;
    educationalStage?: Profiles.EducationalStageEnum;
    educationalModifier?: Profiles.EducationalModifierEnum;
    isStudent?: boolean;
    diet?: Profiles.DietEnum;
    bodyType?: Profiles.BodyTypeEnum;
    smokes?: Profiles.SmokesEnum;
    drinks?: Profiles.DrinksEnum;
    usesDrugs?: Profiles.UsesDrugsEnum;
    zodiac?: Profiles.ZodiacEnum;
    zodiacAttitude?: Profiles.ZodiacAttitudeEnum;
    children?: boolean;
    wantsChildren?: Profiles.WantsChildrenEnum;
    hasDog?: boolean;
    hasCat?: boolean;
    heightInCm?: number;
    whatDoIDo?: string;
    iAmGoodAt?: string;
    peopleFirstNotice?: string;
    faveBooks?: string;
    faveMovies?: string;
    faveShows?: string;
    faveMusic?: string;
    faveFood?: string;
    faveBlogs?: string;
    faveComics?: string;
    faveResearchPapers?: string;
    whatDoIThinkAbout?: string;
    idealUseOfFreetime?: string;
    thingsCantDoWithout?: string;
    mostPrivateShareables?: string;
    messageMeIf?: string;
    orientation?: string;
    showMeToNonStraightOnly?: boolean;
    searchIntention?: string;
    searchRadiusInKm?: string;
    searchAgeRangeLowest?: string;
    searchAgeRangeHighest?: string;
    searchGenders?: string;
    searchSingleOnly?: boolean;
    searchOnlyNonMonogamous?: boolean;
    /**
     * Note: This is a Foreign Key to `country.iso`.<fk table='country' column='iso'/>
     */
    countryIso?: Countries.IsoEnum;
    /**
     * Note: This is a Foreign Key to `city.id`.<fk table='city' column='id'/>
     */
    cityId?: string;
}
export namespace Profiles {
    export type GenderTypeEnum = 'masculine' | 'feminine' | 'both' | 'other';
    export const GenderTypeEnum = {
        Masculine: 'masculine' as GenderTypeEnum,
        Feminine: 'feminine' as GenderTypeEnum,
        Both: 'both' as GenderTypeEnum,
        Other: 'other' as GenderTypeEnum
    }
    export type RelationshipStatusEnum = 'single' | 'seeing someone' | 'married' | 'open relationship' | 'non-monogamous' | 'it is complicated';
    export const RelationshipStatusEnum = {
        Single: 'single' as RelationshipStatusEnum,
        SeeingSomeone: 'seeing someone' as RelationshipStatusEnum,
        Married: 'married' as RelationshipStatusEnum,
        OpenRelationship: 'open relationship' as RelationshipStatusEnum,
        NonMonogamous: 'non-monogamous' as RelationshipStatusEnum,
        ItIsComplicated: 'it is complicated' as RelationshipStatusEnum
    }
    export type EducationalStageEnum = 'high school' | 'professional college' | 'university' | 'post grad' | 'space camp' | 'monster university' | 'university of life';
    export const EducationalStageEnum = {
        HighSchool: 'high school' as EducationalStageEnum,
        ProfessionalCollege: 'professional college' as EducationalStageEnum,
        University: 'university' as EducationalStageEnum,
        PostGrad: 'post grad' as EducationalStageEnum,
        SpaceCamp: 'space camp' as EducationalStageEnum,
        MonsterUniversity: 'monster university' as EducationalStageEnum,
        UniversityOfLife: 'university of life' as EducationalStageEnum
    }
    export type EducationalModifierEnum = 'graduated from' | 'working on' | 'actively avoiding' | 'dropped out of';
    export const EducationalModifierEnum = {
        GraduatedFrom: 'graduated from' as EducationalModifierEnum,
        WorkingOn: 'working on' as EducationalModifierEnum,
        ActivelyAvoiding: 'actively avoiding' as EducationalModifierEnum,
        DroppedOutOf: 'dropped out of' as EducationalModifierEnum
    }
    export type DietEnum = 'omnivore' | 'vegetarian' | 'pescatarian' | 'vegan' | 'carnivore' | 'halal' | 'kosher' | 'paleo' | 'keto' | 'gluten free' | 'pizza';
    export const DietEnum = {
        Omnivore: 'omnivore' as DietEnum,
        Vegetarian: 'vegetarian' as DietEnum,
        Pescatarian: 'pescatarian' as DietEnum,
        Vegan: 'vegan' as DietEnum,
        Carnivore: 'carnivore' as DietEnum,
        Halal: 'halal' as DietEnum,
        Kosher: 'kosher' as DietEnum,
        Paleo: 'paleo' as DietEnum,
        Keto: 'keto' as DietEnum,
        GlutenFree: 'gluten free' as DietEnum,
        Pizza: 'pizza' as DietEnum
    }
    export type BodyTypeEnum = 'rather not say' | 'thin' | 'average' | 'a little extra' | 'curvy' | 'fit' | 'jacked' | 'used up' | 'full figured';
    export const BodyTypeEnum = {
        RatherNotSay: 'rather not say' as BodyTypeEnum,
        Thin: 'thin' as BodyTypeEnum,
        Average: 'average' as BodyTypeEnum,
        ALittleExtra: 'a little extra' as BodyTypeEnum,
        Curvy: 'curvy' as BodyTypeEnum,
        Fit: 'fit' as BodyTypeEnum,
        Jacked: 'jacked' as BodyTypeEnum,
        UsedUp: 'used up' as BodyTypeEnum,
        FullFigured: 'full figured' as BodyTypeEnum
    }
    export type SmokesEnum = 'rarely' | 'often' | 'sometimes' | 'never' | 'socially' | 'on special occasions';
    export const SmokesEnum = {
        Rarely: 'rarely' as SmokesEnum,
        Often: 'often' as SmokesEnum,
        Sometimes: 'sometimes' as SmokesEnum,
        Never: 'never' as SmokesEnum,
        Socially: 'socially' as SmokesEnum,
        OnSpecialOccasions: 'on special occasions' as SmokesEnum
    }
    export type DrinksEnum = 'rarely' | 'often' | 'sometimes' | 'never' | 'socially' | 'on special occasions';
    export const DrinksEnum = {
        Rarely: 'rarely' as DrinksEnum,
        Often: 'often' as DrinksEnum,
        Sometimes: 'sometimes' as DrinksEnum,
        Never: 'never' as DrinksEnum,
        Socially: 'socially' as DrinksEnum,
        OnSpecialOccasions: 'on special occasions' as DrinksEnum
    }
    export type UsesDrugsEnum = 'rarely' | 'often' | 'sometimes' | 'never' | 'socially' | 'on special occasions';
    export const UsesDrugsEnum = {
        Rarely: 'rarely' as UsesDrugsEnum,
        Often: 'often' as UsesDrugsEnum,
        Sometimes: 'sometimes' as UsesDrugsEnum,
        Never: 'never' as UsesDrugsEnum,
        Socially: 'socially' as UsesDrugsEnum,
        OnSpecialOccasions: 'on special occasions' as UsesDrugsEnum
    }
    export type ZodiacEnum = 'aquarius' | 'aries' | 'cancer' | 'capricorn' | 'gemini' | 'leo' | 'libra' | 'pisces' | 'saggitarius' | 'scorpio' | 'taurus' | 'virgo' | 'hell no';
    export const ZodiacEnum = {
        Aquarius: 'aquarius' as ZodiacEnum,
        Aries: 'aries' as ZodiacEnum,
        Cancer: 'cancer' as ZodiacEnum,
        Capricorn: 'capricorn' as ZodiacEnum,
        Gemini: 'gemini' as ZodiacEnum,
        Leo: 'leo' as ZodiacEnum,
        Libra: 'libra' as ZodiacEnum,
        Pisces: 'pisces' as ZodiacEnum,
        Saggitarius: 'saggitarius' as ZodiacEnum,
        Scorpio: 'scorpio' as ZodiacEnum,
        Taurus: 'taurus' as ZodiacEnum,
        Virgo: 'virgo' as ZodiacEnum,
        HellNo: 'hell no' as ZodiacEnum
    }
    export type ZodiacAttitudeEnum = 'totally into it' | 'laughing about it' | 'weirded out by it' | 'dont care whatsoever about it' | 'actively ignoring it' | 'somewhat bothered by it' | 'questioning it' | 'at peace with it' | 'rather disturbed by it' | 'it is mostly a culture thing' | 'preachy about it';
    export const ZodiacAttitudeEnum = {
        TotallyIntoIt: 'totally into it' as ZodiacAttitudeEnum,
        LaughingAboutIt: 'laughing about it' as ZodiacAttitudeEnum,
        WeirdedOutByIt: 'weirded out by it' as ZodiacAttitudeEnum,
        DontCareWhatsoeverAboutIt: 'dont care whatsoever about it' as ZodiacAttitudeEnum,
        ActivelyIgnoringIt: 'actively ignoring it' as ZodiacAttitudeEnum,
        SomewhatBotheredByIt: 'somewhat bothered by it' as ZodiacAttitudeEnum,
        QuestioningIt: 'questioning it' as ZodiacAttitudeEnum,
        AtPeaceWithIt: 'at peace with it' as ZodiacAttitudeEnum,
        RatherDisturbedByIt: 'rather disturbed by it' as ZodiacAttitudeEnum,
        ItIsMostlyACultureThing: 'it is mostly a culture thing' as ZodiacAttitudeEnum,
        PreachyAboutIt: 'preachy about it' as ZodiacAttitudeEnum
    }
    export type WantsChildrenEnum = 'unsure' | 'yes' | 'no' | 'maybe later';
    export const WantsChildrenEnum = {
        Unsure: 'unsure' as WantsChildrenEnum,
        Yes: 'yes' as WantsChildrenEnum,
        No: 'no' as WantsChildrenEnum,
        MaybeLater: 'maybe later' as WantsChildrenEnum
    }
}
