import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { ThemedText } from '../../../../components/ThemedText';

export default function LearnDetailPage() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <></>,
      title: '我的新标题',
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.title}>Detail Page</ThemedText>
        <ThemedText style={styles.text}>This is detail page for item {id}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
