import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../themes/colors";

const Button = ({ title, onPress, customStyles }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 165,
    height: 45,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
  },
});
