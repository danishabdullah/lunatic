interface Option {
  [index: string]: string;
}

export interface UIOption {
  options: Option;
}

export interface UIOptions {
  [index: string]: UIOption;
}
