import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import UserScreen from '../screens/UserScreen';
import loading from '../screens/loading';
import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCadi2l0aZPKPJoZy6PO-MKfjCACVYdgEc",
    authDomain: "myapp1-3faa9.firebaseapp.com",
    databaseURL: "https://myapp1-3faa9.firebaseio.com",
    projectId: "myapp1-3faa9",
    storageBucket: "myapp1-3faa9.appspot.com",
    messagingSenderId: "962718156409",
    appId: "1:962718156409:web:914d0f616216d050e2b6a8",
    measurementId: "G-XJTLV0WTZ1"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const screens = {
    loading: {
        screen: loading,
        navigationOptions: {
            title: 'loading',
            headerLeft: null,
        } 
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login',
            headerLeft: null,
        } 
    },
    Signup: {
        screen: SignupScreen,
        navigationOptions: {
            title: 'Signup',
            headerLeft: null,
        } 
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            title: 'ForgetPassword',
            headerLeft: null,
        } 
    },
    User: {
        screen: UserScreen,
        navigationOptions: {
            title: 'User',
            headerLeft: null,
        } 
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'green', height: 90, }
    }
}, {
    initialRouteName: 'LoginScreen',
  });

export default createAppContainer(HomeStack); 