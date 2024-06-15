import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CheckboxFromUtil({
  checked,
  setChecked,
  color,
  title,
}) {
  const styles = StyleSheet.create({
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 999,
      borderWidth: 2,
      borderColor: color,
      backgroundColor: "transparent",
    },
    checkboxChecked: {
      borderWidth: 7,
      borderColor: color,
    },
    appContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    appTitle: {
      marginVertical: 16,
      fontWeight: "bold",
      fontSize: 24,
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkboxLabel: {
      marginLeft: 8,
      fontWeight: "500",
      fontSize: 18,
    },
  });
  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={styles.checkboxContainer}
      className=" p-2"
    >
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      ></Pressable>
      <Text style={styles.checkboxLabel}>{title}</Text>
    </TouchableOpacity>
  );
}
