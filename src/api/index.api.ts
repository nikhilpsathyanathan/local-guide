export const API = {
  getHosts: (country: string, city: string, lang: string) =>
    `https://www.withlocals.com/api/v1/hosts/search?location.country=${country}&location.city=${city}&lang=${lang}&page=1`,
};
