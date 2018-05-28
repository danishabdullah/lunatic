export interface Messages {
    /**
     * Note: This is a Primary Key.<pk/>
     */
    id?: string;
    content?: string;
    /**
     * Note: This is a Foreign Key to `conversation.id`.<fk table='conversation' column='id'/>
     */
    conversationId?: string;
    from?: string;
    to?: string;
}
