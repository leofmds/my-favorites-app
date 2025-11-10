import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface FavoritesContextProps {
  favorites: number[];
  addFavorite: (item: number) => void;
  removeFavorite: (item: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorite = useCallback((item: number) => {
    setFavorites((prev) => [...prev, item]);
  }, []);

  const removeFavorite = useCallback((item: number) => {
    setFavorites((prev) => prev.filter((fav) => fav !== item));
  }, []);

  const value = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
    }),
    [favorites, addFavorite, removeFavorite]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de FavoritesProvider');
  }
  return context;
};