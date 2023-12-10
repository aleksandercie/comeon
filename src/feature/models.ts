export type GameType = {
  name: string;
  categoryIds: number[];
  code: string;
  description: string;
  icon: string;
};

export type GamesSliceType = SliceType & {
  data: null | GameType[];
};

export type CategoriesType = {
  id: number;
  name: string;
};

export type CategoriesSliceType = SliceType & {
  data: null | CategoriesType[];
};

export type StateType = {
  games: GamesSliceType;
  categories: CategoriesSliceType;
  auth: AuthType;
};

export type SliceType = {
  loading: boolean;
  error: null | string;
};

export type AuthType = {
  status: string;
  player: {
    name: string;
    avatar: string;
    event: string;
  };
};

export type AuthSliceType = SliceType & {
  data: null | AuthType;
};
