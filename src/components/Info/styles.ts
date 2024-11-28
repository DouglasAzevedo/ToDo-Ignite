import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  infoGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  taskCompleted: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  circleCounter: {
    width: 25,
    height: 25,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12.5,
  },
  counter: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
});
