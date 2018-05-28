import { Countries } from './countries';

export interface Cities {
    /**
     * Note: This is a Primary Key.<pk/>
     */
    id?: string;
    name?: string;
    asciiName?: string;
    alternateNames?: string;
    latitude?: string;
    longitude?: string;
    timezone?: string;
    /**
     * Note: This is a Foreign Key to `country.iso`.<fk table='country' column='iso'/>
     */
    countryIso?: Countries.IsoEnum;
}
