export interface Conversations {
    /**
     * Note: This is a Primary Key.<pk/>
     */
    id?: string;
    success?: boolean;
    feedback?: string;
    feedbackType?: Conversations.FeedbackTypeEnum;
    feedbackTheme?: string;
    feedbackReceivedAt?: string;
    markedAsSpam?: boolean;
    markedAsBot?: boolean;
    markedAsFake?: boolean;
    markedAsImpersonation?: boolean;
    /**
     * Note: This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    originUserId?: string;
    /**
     * Note: This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    targetUserId?: string;
}
export namespace Conversations {
    export type FeedbackTypeEnum = 'positive' | 'negative' | 'neutral';
    export const FeedbackTypeEnum = {
        Positive: 'positive' as FeedbackTypeEnum,
        Negative: 'negative' as FeedbackTypeEnum,
        Neutral: 'neutral' as FeedbackTypeEnum
    }
}
