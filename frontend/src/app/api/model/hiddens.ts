export interface Hiddens {
    /**
     * Note: This is a Primary Key.<pk/>
     */
    id?: string;
    /**
     * Note: This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    byUser?: string;
    /**
     * Note: This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    hiddenUser?: string;
}
