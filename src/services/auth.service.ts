export const baseUrl = "https://rickandmortyapi.com/api";
export const characterUrl = `${baseUrl}/character`;

export const getMorty = () => {
  return fetch(`${characterUrl}/1`).then((res) => res.json());
};
