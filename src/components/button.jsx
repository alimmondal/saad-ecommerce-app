import { Pressable, StyleSheet } from "react-native";
import { colors } from "../themes/colors";
import Text from "./text/text";

const Button = ({ title, type = "primary", onPress, style, fullWidth }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.wrapper,
        fullWidth && { width: "100%" },
        type === "primary" && styles.primary,
        type === "secondary" && styles.secondary,
        style,
      ]}
    >
      <Text textColor={type === "primary" ? colors.white : colors.black}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    width: 160,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
  },
});
