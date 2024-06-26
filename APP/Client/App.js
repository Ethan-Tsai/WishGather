const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import UserPage from "./screens/UserPage";
import HomePage from "./screens/HomePage";
import KeyboardOverlay from "./components/KeyboardOverlay";
import AddressOverlay from "./components/AddressOverlay";
import HomePage4 from "./screens/HomePage4";
import LogoutOverlay from "./components/LogoutOverlay";
import UserPage1 from "./screens/UserPage1";
import OfferingPage from "./screens/OfferingPage";
import LightInfoOverlay from "./components/LightInfoOverlay";
import UserPage2 from "./screens/UserPage2";
import UserPage3 from "./screens/UserPage3";
import HomePage5 from "./screens/HomePage5";
import OfferingPage1 from "./screens/OfferingPage1";
import OfferingPage2 from "./screens/OfferingPage2";
import OfferingPage3 from "./screens/OfferingPage3";
import UserPage21 from "./screens/UserPage21";
import OfferingPage4 from "./screens/OfferingPage4";
import OfferingPage5 from "./screens/OfferingPage5";
import UserPage31 from "./screens/UserPage31";
import UserPage22 from "./screens/UserPage22";
import UserPage4 from "./screens/UserPage4";
import OfferingPage6 from "./screens/OfferingPage6";
import HomePage1 from "./screens/HomePage1";
import HomePage2 from "./screens/HomePage2";
import HomePage3 from "./screens/HomePage3";
import CartPage from "./screens/CartPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="UserPage"
              component={UserPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KeyboardOverlay"
              component={KeyboardOverlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddressOverlay"
              component={AddressOverlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage4"
              component={HomePage4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogoutOverlay"
              component={LogoutOverlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserPage1"
              component={UserPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfferingPage"
              component={OfferingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LightInfoOverlay"
              component={LightInfoOverlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserPage2"
              component={UserPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserPage3"
              component={UserPage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserPage4"
              component={UserPage4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage5"
              component={HomePage5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfferingPage1"
              component={OfferingPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfferingPage2"
              component={OfferingPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfferingPage3"
              component={OfferingPage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserPage21"
              component={UserPage21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfferingPage4"
              component={OfferingPage4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfferingPage5"
              component={OfferingPage5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserPage31"
              component={UserPage31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserPage22"
              component={UserPage22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfferingPage6"
              component={OfferingPage6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage1"
              component={HomePage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage2"
              component={HomePage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage3"
              component={HomePage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartPage"
              component={CartPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
