import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <View style={styles.detailItem}>
        <Ionicons 
          name="time-outline" 
          size={18} 
          color={textStyle?.color || "#6b5b51"} 
        />
        <Text style={[styles.detailText, textStyle]}>{duration}m</Text>
      </View>
      <View style={styles.detailItem}>
        <Ionicons 
          name="bar-chart-outline" 
          size={18} 
          color={textStyle?.color || "#6b5b51"} 
        />
        <Text style={[styles.detailText, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
      </View>
      <View style={styles.detailItem}>
        <Ionicons 
          name="wallet-outline" 
          size={18} 
          color={textStyle?.color || "#6b5b51"} 
        />
        <Text style={[styles.detailText, textStyle]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    gap: 16,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(227, 180, 151, 0.2)",
    borderRadius: 20,
  },
  detailText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6b5b51",
    letterSpacing: 0.5,
  },
});
