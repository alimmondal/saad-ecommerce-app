import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }else{
    return (
    <Provider store={store}>
        <SafeAreaProvider>
              <Navigation/>
      <StatusBar/>
        <FlashMessage
          position="top"
          floating
          StatusBarHeight={30}
        />
      </SafeAreaProvider>
    </Provider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
