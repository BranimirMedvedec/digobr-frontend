export type Group = {
  code: string;
  colorRgb: string;
  score: number;
};

export type GroupWithPlace = Group & {
  place: number;
};
