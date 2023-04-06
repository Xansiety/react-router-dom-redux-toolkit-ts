export const baseUrl = "https://rickandmortyapi.com/api";
export const characterUrl = `${baseUrl}/character`;

export const getMorty = () => {
  return fetch(characterUrl)
    .then((res) => res.json())
    .then((res) => res.results[0]);
};
