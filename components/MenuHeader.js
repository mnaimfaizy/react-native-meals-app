import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function MenuHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.decorativeTop}>
        <View style={styles.ornament} />
        <Ionicons name="restaurant-outline" size={32} color="#e2b497" />
        <View style={styles.ornament} />
      </View>
      
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.restaurantName}>Delicious</Text>
      <Text style={styles.subtitle}>Food Collection</Text>
      
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Ionicons name="leaf-outline" size={16} color="#e2b497" />
        <View style={styles.dividerLine} />
      </View>
      
      <Text style={styles.menuTitle}>— Our Menu —</Text>
      <Text style={styles.description}>
        Explore our curated collection of recipes from around the world
      </Text>
    </View>
  );
}

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a1a0f",
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    marginBottom: 8,
  },
  decorativeTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 16,
  },
  ornament: {
    width: 40,
    height: 2,
    backgroundColor: "#e2b497",
  },
  welcomeText: {
    fontSize: 14,
    color: "#ccc",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  restaurantName: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#e2b497",
    letterSpacing: 3,
    fontStyle: "italic",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    letterSpacing: 3,
    fontWeight: "300",
    marginBottom: 20,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 16,
  },
  dividerLine: {
    width: 60,
    height: 1,
    backgroundColor: "#e2b497",
  },
  menuTitle: {
    fontSize: 20,
    color: "#e2b497",
    letterSpacing: 2,
    marginBottom: 8,
    fontWeight: "600",
  },
  description: {
    fontSize: 13,
    color: "#bbb",
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 280,
    fontStyle: "italic",
  },
});
