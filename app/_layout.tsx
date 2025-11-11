import { Stack } from 'expo-router';
import React from 'react';
import { IconButton, Provider as PaperProvider } from 'react-native-paper';
import { FavoritesProvider } from '../src/contexts/FavoritesContext';
import { ThemeProvider, useThemeContext } from '../src/contexts/ThemeContext';

function InnerLayout() {
  const { theme, toggleTheme} = useThemeContext();

  return (
    <PaperProvider theme={theme}>
      <FavoritesProvider>
        <Stack>
          <Stack.Screen name="index" options={{
            title: 'Lista de Itens',
            headerRight: () => <IconButton icon="theme-light-dark" onPress={toggleTheme} />
            }} />
          <Stack.Screen name="favorites" options={{ title: 'Favoritos' }} />
        </Stack>
      </FavoritesProvider>
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <InnerLayout />
    </ThemeProvider>
  );
}