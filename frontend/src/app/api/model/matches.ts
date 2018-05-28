export interface Matches {
    /**
     * Note: This is a Primary Key.<pk/>
     */
    idsString?: string;
    leftLiked?: boolean;
    rightLiked?: boolean;
    /**
     * Note: This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    leftUserId?: string;
    /**
     * Note: This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    rightUserId?: string;
}
