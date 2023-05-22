import { useEffect } from "react";

export default function useFetch(fetchFunction, setFunction, cardId) {
  useEffect(() => {
    fetchFunction(cardId).then((data) => {
      for (const element in data) {
        setFunction((prevState) => ({
          ...prevState,
          [element]: data[element],
        }));
      }
    });
  }, [cardId, fetchFunction, setFunction]);
}
