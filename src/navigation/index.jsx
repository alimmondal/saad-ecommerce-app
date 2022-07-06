import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import Earphone from "../screens/earPhone";
import Headphone from "../screens/headphone";
import Home from "../screens/home";
import Details from "../screens/product-details";
import Speakers from "../screens/speakers";
import { colors } from "../themes/colors";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
const HeadphoneStack = createNativeStackNavigator();
function HeadphoneStackScreen() {
  return (
    <HeadphoneStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphoneStack.Screen name="Headphone" component={Headphone} />
      <HeadphoneStack.Screen name="Details" component={Details} />
    </HeadphoneStack.Navigator>
  );
}

const EarphoneStack = createNativeStackNavigator();
function EarphoneStackScreen() {
  return (
    <EarphoneStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphoneStack.Screen name="Earphone" component={Earphone} />
      <EarphoneStack.Screen name="Details" component={Details} />
    </EarphoneStack.Navigator>
  );
}
const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily={"Ionicons"} name="home" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HeadphoneTab"
          component={HeadphoneStackScreen}
          options={{
            title: "Headphone",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="headphones"
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="EarphoneTab"
          component={EarphoneStackScreen}
          options={{
            title: "Earphone",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"SimpleLineIcons"}
                name="earphones-alt"
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SpeakersTab"
          component={SpeakersStackScreen}
          options={{
            title: "Speakers",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="speaker"
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={CartStackScreen}
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily={"Ionicons"} name="cart" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
