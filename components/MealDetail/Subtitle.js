import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  const iconName = children === "Ingredients" ? "restaurant-outline" : "list-outline";
  
  return (
    <View style={styles.subtitleContainer}>
      <View style={styles.titleRow}>
        <Ionicons name={iconName} size={24} color="#e2b497" />
        <Text style={styles.subtitle}>{children}</Text>
      </View>
      <View style={styles.underline} />
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginTop: 20,
    marginBottom: 12,
    marginHorizontal: 8,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  underline: {
    height: 3,
    backgroundColor: "#e2b497",
    borderRadius: 2,
    width: "100%",
  },
});
