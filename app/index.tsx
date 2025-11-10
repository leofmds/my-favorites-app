import { Link } from 'expo-router';
import React from 'react';
import { FlatList, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useFavorites } from '../src/contexts/FavoritesContext';

export default function HomeScreen() {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const numbers = [1, 2, 3, 4, 5];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {
          const isFav = favorites.includes(item);
          return (
            <Card style={{ margin: 10, padding: 10 }}>
              <Text variant="titleLarge">Item {item}</Text>
              <Button
                mode={isFav ? 'outlined' : 'contained'}
                onPress={() => (isFav ? removeFavorite(item) : addFavorite(item))}
              >
                {isFav ? 'Remover' : 'Favoritar'}
              </Button>
            </Card>
          );
        }}
      />

      <View style={{ margin: 20 }}>
        <Link href="/favorites" asChild>
          <Button mode="contained">Ver Favoritos</Button>
        </Link>
      </View>
    </View>
  );
}