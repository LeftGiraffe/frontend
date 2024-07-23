import { Stack } from "expo-router";

export default function AppTechLayout() {
  return (
    <Stack>
      <Stack.Screen name="AppTech" options={{ headerShown: false }}/>
    </Stack>
  );
}