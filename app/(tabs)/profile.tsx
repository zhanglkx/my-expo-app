import { Image, ScrollView, StyleSheet, View, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { useSafeAreaInsets, EdgeInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const stats = [
  { label: 'Posts', value: '128' },
  { label: 'Followers', value: '12.4k' },
  { label: 'Following', value: '348' },
];

const activities = [
  {
    title: 'Photography',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 24,
  },
  {
    title: 'Travel',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 18,
  },
  {
    title: 'Food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 42,
  },
];

// 定义样式类型
type Styles = {
  actionButtons: ViewStyle;
  activitiesContent: ViewStyle;
  activitiesSection: ViewStyle;
  activityCard: ViewStyle;
  activityCount: TextStyle;
  activityImage: ImageStyle;
  activityOverlay: ViewStyle;
  activityTitle: TextStyle;
  avatar: ImageStyle;
  avatarContainer: ViewStyle;
  bio: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
  header: ViewStyle;
  headerInfo: ViewStyle;
  name: TextStyle;
  sectionTitle: TextStyle;
  shareButton: ViewStyle;
  statItem: ViewStyle;
  statLabel: TextStyle;
  statsContainer: ViewStyle;
  statValue: TextStyle;
};

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView 
      style={[styles.container, { paddingTop: insets.top }]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.contentContainer,
        paddingBottom: insets.bottom + 20,
      }}
    >
      {/* Profile Header */}
      <ThemedView style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }}
            style={styles.avatar}
          />
        </View>
        <ThemedView style={styles.headerInfo}>
          <ThemedText type="title" style={styles.name}>John Doe</ThemedText>
          <ThemedText style={styles.bio}>
            Professional photographer & world traveler 📸 ✈️
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Stats */}
      <ThemedView style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <ThemedView key={stat.label} style={styles.statItem}>
            <ThemedText type="defaultSemiBold" style={styles.statValue}>
              {stat.value}
            </ThemedText>
            <ThemedText style={styles.statLabel}>{stat.label}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>

      {/* Action Buttons */}
      <ThemedView style={styles.actionButtons}>
        <ThemedView 
          style={[
            styles.button, 
            { 
              backgroundColor: colors.tint,
              shadowColor: colors.tint,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 4,
            }
          ]}
        >
          <ThemedText style={styles.buttonText}>Edit Profile</ThemedText>
        </ThemedView>
        <ThemedView 
          style={[
            styles.button, 
            styles.shareButton,
            {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 8,
              elevation: 4,
            }
          ]}
        >
          <ThemedText style={styles.buttonText}>Share Profile</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Activities */}
      <ThemedView style={styles.activitiesSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Activities
        </ThemedText>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.activitiesContent}
        >
          {activities.map((activity, index) => (
            <ThemedView 
              key={activity.title} 
              style={[
                styles.activityCard,
                {
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.15,
                  shadowRadius: 8,
                  elevation: 4,
                }
              ]}
            >
              <Image source={{ uri: activity.image }} style={styles.activityImage} />
              <BlurView intensity={80} style={styles.activityOverlay}>
                <ThemedText type="defaultSemiBold" style={styles.activityTitle}>
                  {activity.title}
                </ThemedText>
                <ThemedText style={styles.activityCount}>
                  {activity.count} posts
                </ThemedText>
              </BlurView>
            </ThemedView>
          ))}
        </ScrollView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 12,
    marginBottom: 12,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:20,
    backgroundColor:'#fff',
    boxShadow:'0 4px 8px rgba(0,0,0,0.1)',  
  },
  activitiesContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 0,
  },
  activitiesSection: {
    borderRadius: 20,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  activityCard: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 20,
    marginRight: 20,
    overflow: 'hidden',
    width: 220,
    height: 280,
  },
  activityCount: {
    fontSize: 14,
    opacity: 0.9,
    color: '#fff',
  },
  activityImage: {
    height: '100%',
    width: '100%',
  },
  activityOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  activityTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 6,
  },
  avatar: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  avatarContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  bio: {
    marginTop: 8,
    opacity: 0.7,
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    alignItems: 'center',
    borderRadius: 16,
    flex: 1,
    padding: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 17,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20, // 基础内边距
  },
  header: {
    flexDirection: 'row',
    padding: 24,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 24,
    paddingVertical: 8,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
  },
  sectionTitle: {
    paddingTop: 30,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: 24,
  },
  shareButton: {
    backgroundColor: '#666',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 14,
    marginTop: 8,
    opacity: 0.7,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    paddingHorizontal: 40,
    marginTop: 8,
    backgroundColor:'#fff',
    boxShadow:'0 4px 8px rgba(0,0,0,0.1)',  
    borderRadius:20,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
  },
});
