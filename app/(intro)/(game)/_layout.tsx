import { Stack } from "expo-router";

export default function GameLayout() {
  return (
    <Stack>
      <Stack.Screen name="JumpGame" options={{ headerShown: false }}/>
      <Stack.Screen name="LongWalk" options={{ headerShown: false }}/>
      <Stack.Screen name="LuckyRacing" options={{ headerShown: false }}/>
    </Stack>
  );
}