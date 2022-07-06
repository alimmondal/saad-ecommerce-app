import { StyleSheet, View } from "react-native";
import { colors } from "../themes/colors";
import Text from "./text/text";

export default function BannerTitle() {
  return (
    <View style={styles.container}>
      <Text preset="h4" style={{ color: colors.white }}>
        audiophile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
