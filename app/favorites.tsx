import { Link } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useFavorites } from '../src/contexts/FavoritesContext';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  return (
    <>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Card style={{ margin: 10, padding: 10 }}>
            <Text variant="titleLarge">Favorito: {item}</Text>
          </Card>
        )}
      />
      <Link href="/" style={{ margin: 20 }} asChild>
        <Button mode="contained">Voltar</Button>
      </Link>
    </>
  );
}