import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { ThemedText } from '../../../../components/ThemedText';

export default function LearnDetailPage() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: '新的页面标题', // 自定义标题
      headerShown: true, // 确保标题栏显示
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button title="返回" onPress={() => router.back()} />
        <Button title="去首页" onPress={() => router.navigate('/(tabs)')} />
        <Button title="去新页面" onPress={() => router.navigate('/(routes)/explore/feeed')} />
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
