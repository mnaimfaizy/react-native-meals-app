import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint, index) => (
    <View key={dataPoint} style={styles.listItem}>
      <View style={styles.bulletContainer}>
        <Ionicons name="checkmark-circle" size={20} color="#351401" />
      </View>
      <Text style={styles.itemText}>
        {dataPoint}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 6,
    marginHorizontal: 8,
    backgroundColor: "#e2b497",
    shadowColor: "#351401",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  bulletContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  itemText: {
    flex: 1,
    color: "#351401",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
  },
});
