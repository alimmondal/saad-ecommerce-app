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
import { fetchProducts, selectEarphone } from "../store/productSlice";
import { spacing } from "../themes/spacing";

export default function Earphone() {
  const dispatch = useDispatch();
  // const status = useSelector(selectStatus);
  const earphones = useSelector(selectEarphone);
  // console.log("ep", earphones);
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
        {earphones.map((earphone) => {
          return (
            <View key={earphone.name} style={{ marginBottom: 60 }}>
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
                  source={earphone.featuredImage.source}
                  style={{ width: 172, height: 180 }}
                />
              </View>
              <View style={{ marginTop: spacing[5] }}>
                <Text preset="h4" centered>
                  {earphone.name}
                </Text>
                <Text preset="h4" centered uppercase>
                  earphones
                </Text>
                <Text
                  textColor="#919191"
                  style={{
                    marginTop: spacing[5],
                    marginHorizontal: spacing[7],
                  }}
                >
                  {earphone.description}
                </Text>
              </View>

              <Button
                style={{
                  alignSelf: "center",
                  marginTop: spacing[4],
                }}
                title="SEE PRODUCT"
                onPress={() => onPressProduct(earphone.id)}
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
