import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BannerTitle from "../components/banner-title";
import Button from "../components/button";
import CategoryTitle from "../components/category-title";
import Footer from "../components/footer";
import Text from "../components/text/text";
import { fetchProducts, selectHeadphones } from "../store/productSlice";
import { spacing } from "../themes/spacing";

export default function Headphone() {
  const dispatch = useDispatch();
  // const status = useSelector(selectStatus);
  const headphones = useSelector(selectHeadphones);
  // console.log("hp", headphones);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onPressProduct = () => {};

  return (
    <ScrollView>
      <BannerTitle />
      <CategoryTitle title="HEADPHONES" />
      <View style={{ margin: spacing[5] }}>
        {headphones.map((headphone) => {
          return (
            <View key={headphone.name} style={{ marginBottom: 60 }}>
              <View
                style={{
                  backgroundColor: "lightgray",
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: spacing[5],
                }}
              >
                <Image
                  source={headphone.featuredImage.source}
                  style={{ width: 172, height: 180 }}
                />
              </View>
              <View style={{ marginTop: spacing[5] }}>
                <Text preset="h4" centered>
                  {headphone.name}
                </Text>
                <Text preset="h4" centered uppercase>
                  headphones
                </Text>
                <Text
                  textColor="#919191"
                  style={{
                    marginTop: spacing[5],
                    marginHorizontal: spacing[7],
                  }}
                >
                  {headphone.description}
                </Text>
              </View>

              <Button
                style={{
                  alignSelf: "center",
                  marginTop: spacing[4],
                }}
                title="SEE PRODUCT"
                onPress={() => onPressProduct(headphone.id)}
              />
            </View>
          );
        })}

        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
