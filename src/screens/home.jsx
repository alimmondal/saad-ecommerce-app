import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import BannerTitle from "../components/banner-title";
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

export default function Home() {
  // const dispatch = useDispatch();
  // const status = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  // const featuredProducts = useSelector(selectFeaturedProducts);
  // console.log("fp", featuredProducts);
  const { width, height } = useWindowDimensions();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          <Text white preset="h2" centered>
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
        />
        <CategoryBox
          title="SPEAKERS"
          image={require("../../assets/images/s1.png")}
        />
        <CategoryBox
          title="EARPHONES"
          image={require("../../assets/images/e2.png")}
        />
      </View>

      <View>
        {/* {isLoading && <Text>Loading...</Text>}
        {error && <Text>{error}</Text>} */}
        {/* {products &&
          products.map((product) => {
            return (
              <View>
                <Text>{product.id}</Text>
                <Text style={{ color: "black" }}>{product.name}</Text>
              </View>
            );
          })} */}
      </View>
    </ScrollView>
    //  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    alignSelf: "center",
    width: "100%",
    height: 500,
    // resizeMode: "stretch",
  },
});
