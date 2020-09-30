import {
  Dispatch, useCallback, useEffect, useState
} from 'react';

export default function useLocalStorage(
  key: string,
): [string, Dispatch<unknown>] {

  const [ value, setValue ] = useState(
    () => JSON.parse(window.localStorage.getItem(key) || '""')
  );

  const setItem = useCallback(
    (valueToSet: string): void => {

      window.localStorage.setItem(key, JSON.stringify(valueToSet));

    }, [ key ]
  );

  const handleStorageEvent = useCallback(
    (event: StorageEvent) => {

      if (event.key === key && JSON.stringify(event.newValue) !== JSON.stringify(value)) {

        setValue(event.newValue);

      }

    },
    [ value, key ]
  );

  useEffect(() => {

    const oldValue = window.localStorage.getItem(key);

    if (JSON.stringify(value) !== JSON.stringify(oldValue)) {

      setItem(value);

    }

  }, [ value, key, setItem ]);

  useEffect(() => {

    window.addEventListener('storage', handleStorageEvent);

    return () => window.removeEventListener('storage', handleStorageEvent);

  }, [ handleStorageEvent ]);

  return [ value, setValue ];

}
