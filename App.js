import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HS from './Screen/Home'

const navigator = createStackNavigator(
  {
    myHome: HS,


},
{
  initialRouteName: 'myHome',
  defaultNavigationOptions: {
    title: 'Restaurant Business',
  },
}
);

export default createAppContainer(navigator)
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hey there..r!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
