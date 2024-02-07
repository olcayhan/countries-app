export type Continent = {
  code: string;
  name: string;
};

export type Country = {
  code: string;
  name: string;
  continent: Continent;
  phone: string;
  emoji: string;
};
