import { Stack } from "expo-router";

export default function IntroLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(appTech)" options={{ headerShown: false }}/>
      <Stack.Screen name="(game)" options={{ headerShown: false }}/>
    </Stack>
  );
}