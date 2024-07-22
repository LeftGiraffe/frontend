import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function LongWalk() {
  return (
    <View style={styles.container}>
      <Text>LongWalk</Text>
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