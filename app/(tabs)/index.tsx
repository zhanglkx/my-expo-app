import { Image, StyleSheet, Platform, Alert, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';

export default function HomeScreen() {
  useEffect(() => {
    if (__DEV__) {
      console.log('开发模式日志测试111');
      Alert.alert('Component Mounted', 'Testing if useEffect is triggered');
    }
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          <Text>Edit </Text>
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>
          <Text> to see changes. Press </Text>
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>
          <Text> to open developer tools.</Text>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          <Text>
            Tap the Explore tab to learn more about what&apos;s included in this starter app.
          </Text>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          <Text>When you&apos;re ready, run </Text>
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>
          <Text> to get a fresh </Text>
          <ThemedText type="defaultSemiBold">app</ThemedText>
          <Text> directory. This will move the current </Text>
          <ThemedText type="defaultSemiBold">app</ThemedText>
          <Text> to </Text>
          <ThemedText type="defaultSemiBold">app-example</ThemedText>
          <Text>.</Text>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    bottom: 0,
    height: 178,
    left: 0,
    position: 'absolute',
    width: 290,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});
