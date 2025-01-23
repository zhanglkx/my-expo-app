import { Stack } from 'expo-router';

export default function LearnLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: '学习',
          headerStyle: {
            backgroundColor: 'white',
            shadowColor: 'transparent', // iOS
            elevation: 0, // Android
          },
          headerShadowVisible: false, // 全平台移除阴影
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="[id]/page"
        options={{
          headerShown: false,
          headerBackTitle: '1', // 设置为空字符串，只显示箭头
          headerTitleStyle: {
            fontSize: 18,
          },
          headerLeft: () => <></>,
        }}
      />
    </Stack>
  );
}
