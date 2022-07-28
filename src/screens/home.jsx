import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import BannerTitle from "../components/banner-title";
import Button from "../components/button";
import Text from "../components/text/text";
import {
  fetchProducts,
  selectFeaturedProducts,
  selectStatus,
} from "../store/productSlice";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

const CategoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginVertical: spacing[8],
        marginHorizontal: spacing[5],
        borderRadius: spacing[4],
        backgroundColor: "lightgrey",
        alignItems: "center",
        padding: spacing[5],
      }}
    >
      <Image source={image} style={{ top: -60, width: 150, height: 150 }} />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: -30,
        }}
      >
        <Text preset="h5">{title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: spacing[4],
        }}
      >
        <Text
          preset="title"
          textColor="#7c7c7c"
          centered
          style={{ marginRight: spacing[2] }}
        >
          SHOP
        </Text>
        <AntDesign name="right" size={20} color="orange" />
      </View>
    </Pressable>
  );
};

const FeaturedProduct = ({ name, image, category }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        marginVertical: spacing[8],
        backgroundColor: colors.primary,
        borderRadius: spacing[4],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#d8d8d8",
          borderRadius: 400,
          height: 320,
          width: width - 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#d8d8d8",
            borderRadius: 400,
            height: 280,
            width: width - 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={image.source}
            resizeMode="contain"
            style={styles.imageView}
          />
        </View>
      </View>

      <View style={{ paddingBottom: spacing[8], marginTop: -spacing[7] }}>
        <Text preset="h3" centered uppercase white>
          {name}
        </Text>
        <Text white centered style={{ width: 240, marginTop: spacing[4] }}>
          upgrade to premium speakers that are phenomenally build to deliver
          truly remarkable sound
        </Text>

        <Button
          title={"SEE PRODUCT"}
          style={{
            backgroundColor: colors.black,
            alignSelf: "center",
            marginTop: spacing[4],
          }}
        />
      </View>
    </View>
  );
};

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const featuredProducts = useSelector(selectFeaturedProducts);
  // console.log("fp", featuredProducts);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status === "loading") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    // <SafeAreaView>
    <ScrollView>
      <BannerTitle />
      <View style={{ backgroundColor: colors.black }}>
        <Image
          source={require("../../assets/images/p3.png")}
          style={{
            alignSelf: "center",
            width: "100%",
            height: 500,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            width: width - 20,
            top: 130,
          }}
        >
          <Text white preset="h3" centered>
            WELCOME
          </Text>
          <Text centered style={{ color: "lightgrey", marginTop: 4 }}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
        </View>
      </View>
      <View style={{ paddingVertical: spacing[8] }}>
        <CategoryBox
          title="HEADPHONES"
          image={require("../../assets/images/p4.png")}
          onPress={() => {
            navigation.navigate("HeadphoneTab");
          }}
        />
        <CategoryBox
          title="SPEAKERS"
          image={require("../../assets/images/s1.png")}
          onPress={() => {
            navigation.navigate("SpeakersTab");
          }}
        />
        <CategoryBox
          title="EARPHONES"
          image={require("../../assets/images/e2.png")}
          onPress={() => {
            navigation.navigate("EarphoneTab");
          }}
        />
      </View>

      <View
        style={{
          paddingVertical: spacing[8],
          paddingHorizontal: spacing[4],
        }}
      >
        {featuredProducts.map((product) => (
          <FeaturedProduct
            key={product.id}
            name={product.name}
            category={product.category}
            image={product.featuredImage}
          />
        ))}
      </View>
    </ScrollView>
    //  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    // alignSelf: "center",
    width: 172,
    height: 180,
  },
});
