import { Link } from 'expo-router';
import { View, Button, StyleSheet } from 'react-native';

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <Link href="/AppTech" asChild>
        <Button title="Go to AppTech" />
      </Link>
      <Link href="/JumpGame" asChild>
        <Button title="Go to JumpGame" />
      </Link>
      <Link href="/LongWalk" asChild>
        <Button title="Go to LongWalk" />
      </Link>
      <Link href="/LuckyRacing" asChild>
        <Button title="Go to LuckyRacing" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});