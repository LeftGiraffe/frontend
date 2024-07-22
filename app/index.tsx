import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function Index() {
  const [steps, setSteps] = useState(0);
  const [scale] = useState(new Animated.Value(1)); // Animated.Value 초기화

  const incrementSteps = () => {
    setSteps(prevSteps => prevSteps + 1);

    // 걸음 수가 증가할 때마다 애니메이션 실행
    Animated.spring(scale, {
      toValue: 1 + (steps + 1) / 100, // 걸음 수에 비례하여 크기 증가
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);

    const subscription = Accelerometer.addListener(accelerometerData => {
      const { x, y, z } = accelerometerData;
      const speed = Math.sqrt(x * x + y * y + z * z);

      if (speed > 1.2) { // 걸음으로 간주할 속도 임계값 설정
        setSteps(prevSteps => {
          const newSteps = prevSteps + 1;

          // 걸음 수가 증가할 때마다 애니메이션 실행
          Animated.spring(scale, {
            toValue: 1 + newSteps / 100, // 걸음 수에 비례하여 크기 증가
            useNativeDriver: true,
          }).start();

          return newSteps;
        });
      }
    });

    return () => subscription.remove();
  }, [scale]);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);

    // 시뮬레이션 데이터를 사용한 테스트
    const interval = setInterval(() => {
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;
      const speed = Math.sqrt(x * x + y * y + z * z);

      if (speed > 1.2) { // 걸음으로 간주할 속도 임계값 설정
        setSteps(prevSteps => {
          const newSteps = prevSteps + 1;

          // 걸음 수가 증가할 때마다 애니메이션 실행
          Animated.spring(scale, {
            toValue: 1 + newSteps / 100, // 걸음 수에 비례하여 크기 증가
            useNativeDriver: true,
          }).start();

          return newSteps;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [scale]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Steps: {steps}</Text>
      <Animated.View style={[styles.character, { transform: [{ scale }] }]} />
      <Button title="Increment Steps" onPress={incrementSteps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  character: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
});