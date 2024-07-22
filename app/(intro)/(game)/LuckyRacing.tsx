import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function LuckyRacing() {
  return (
    <View style={styles.container}>
      <Text>LuckyRacing</Text>
      <Link href="/">return</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});