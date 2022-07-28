import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";
import Text from "./text/text";

export default function Footer() {
  return (
    <View style={{ padding: spacing[3], alignItems: "center" }}>
      <Image
        source={require("../../assets/images/hman.jpg")}
        style={{ alignSelf: "center", width: "100%", height: 300 }}
      />
      <View style={{ paddingVertical: spacing[4] }}>
        <Text centered preset="h4" uppercase>
          Bringing you the
        </Text>
        <Text centered preset="h4" uppercase>
          <Text preset="h4" textColor={colors.primary}>
            Best{" "}
          </Text>
          audio gear
        </Text>
      </View>
      <Text centered textColor="#c3c3c3">
        Loacated at the heart of the New York City.AudioPhile is the premier
        store for high end headphones, earphones, speakers, and audio
        accessories. We have 3 large showroom and luxury demonstration room
        available for you to browse and experience a wide range of our products.
        Stop by our store to meet some of the fantastic people who make
        audiophile the best place to buy your portable audio equipment
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
