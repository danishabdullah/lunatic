export interface Profile {
  readonly id: number;
  name: string;
  self_summary: string;
  gender: string;
  show_as_masculine: boolean;
  show_as_feminine: boolean;
  show_as_other_gender: boolean;
  relationship_status: string;
  languages: string[];
  age: string;
  display_picture: string;
  // country: string;
  educational_institution: string;
  educational_modifier: string;
  is_student: boolean;
  diet: string;
  body_type: string;
  smokes: string;
  drinks: string;
  uses_drugs: string;
  zodiac: string;
  zodiac_attitude: string;
  children: boolean;
  wants_children: string;
  has_dog: boolean;
  has_cat: boolean;
  height_in_cm: number;
  what_do_I_do: string;
  i_am_good_at: string;
  people_first_notice: string;
  fave_books: string;
  fave_movies: string;
  fave_shows: string;
  fave_music: string;
  fave_food: string;
  fave_blogs: string;
  fave_comics: string;
  fave_research_papers: string;
  what_do_I_think_about: string;
  ideal_use_of_freetime: string;
  things_cant_do_without: string;
  most_private_shareables: string;
  message_me_if: string;
  orientation: string[];
  show_me_to_non_straight_only: boolean;
  search_intention: string[];
  search_age_range_lowest: number;
  search_age_range_highest: number;
  search_genders: string[];
  search_single_only: boolean;
  search_only_non_monogamous: boolean;
  readonly owner_id: number;
}
