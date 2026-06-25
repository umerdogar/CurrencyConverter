import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { splashStyles as styles } from "./styles";

interface Props {
  onReady: () => void;
}

const SplashScreen = ({ onReady }: Props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();

    // Small delay so animation is visible before API call resolves
    setTimeout(() => {
      onReady();
    }, 500);
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.iconContainer, { opacity: fadeAnim }]}>
        <Animated.Text style={[styles.icon, { transform: [{ rotate }] }]}>
          💱
        </Animated.Text>
      </Animated.View>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Currency Converter
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
        Loading rates...
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
