import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="restaurant" size={80} color="#e2b497" />
        </View>
        <Text style={styles.title}>Delicious</Text>
        <Text style={styles.subtitle}>Food Recipes</Text>
        <View style={styles.divider} />
        <Text style={styles.tagline}>Discover & Cook Amazing Meals</Text>
      </Animated.View>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#351401",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    padding: 40,
  },
  iconContainer: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 100,
    backgroundColor: "rgba(227, 180, 151, 0.15)",
    borderWidth: 2,
    borderColor: "#e2b497",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#e2b497",
    letterSpacing: 2,
    marginTop: 20,
    fontStyle: "italic",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    letterSpacing: 4,
    marginTop: 8,
    fontWeight: "300",
  },
  divider: {
    width: 150,
    height: 3,
    backgroundColor: "#e2b497",
    marginVertical: 24,
    borderRadius: 2,
  },
  tagline: {
    fontSize: 16,
    color: "#ddd",
    letterSpacing: 1.5,
    textAlign: "center",
    fontWeight: "400",
  },
});
