import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('reactNativeLogin', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('reactNativeLogin', { rootTag });
}
