export function useLocalStorage(key) {
  const storedValue =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;

  // useEffect(() => {
  //   // Do something with the stored value
  //   if (storedValue) {
  //     console.log(storedValue);
  //   }
  // }, [storedValue]);

  return storedValue;
}

export function useLocalStorageSet(name, value) {
  const setValue =
    typeof window !== "undefined" ? localStorage.setItem(name, value) : null;

  return setValue;
}

export const filterElect = (arr, name) => {
  const filteredPrepaid = arr.filter((item) => item.name.includes(name));

  console.log(filteredPrepaid);

  return filteredPrepaid;
};
