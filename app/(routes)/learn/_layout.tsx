import { Stack } from 'expo-router';

export default function RoutesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="learn/[id]/page"
        options={{
          headerTitle: '', // 禁用默认路径标题
          headerShown: false, // 隐藏整个标题栏
          headerLeft: () => (
            <View>
              <Text>1</Text>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
