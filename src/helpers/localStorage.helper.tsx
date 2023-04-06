export const persistItemLocalStorage = <T,>(key: string, value: T) => {
  // define elements to persist in local storage, NO SENSITIVE DATA
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearItemLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
