import StartingPage from './components/StartingPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/home/HomeScreen';
import SignUp from './components/auth/SignUp';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import VerifySignUpOtp from './components/auth/VerifySignUpOtp';
import VerifyPasswordOtp from './components/auth/VerifyPasswordOtp';
import ResetPassword from './components/auth/ResetPassword';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UploadScreen from './components/upload/UploadScreen';
import ScanScreen from './components/scan/ScanScreen';
import NotifyScreen from './components/notifications/NotifyScreen';
import ProfileScreen from './components/profile/ProfileScreen';
import UploadPhoto from './components/upload/UploadPhoto';
import Upload1 from './components/upload/Upload1';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Upload2 from './components/upload/Upload2';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='homeTab'
        component={HomeScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name='upload'
        component={UploadScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'cloud-upload' : 'cloud-upload-outline'} size={size} color={color} />
          ),
          tabBarLabel: 'Upload'
        }}
        listeners={({navigation})=>({
          tabPress:(e)=>{
            e.preventDefault();
            navigation.navigate('upload1')
          }
        })}
      />
      <Tab.Screen
        name='scan'
        component={ScanScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'scan' : 'scan-outline'} size={size} color={color} />
          ),
          tabBarLabel: 'Scan'
        }}
      />
      <Tab.Screen
        name='notify'
        component={NotifyScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={size} color={color} />
          ),
          tabBarLabel: 'Notifications'
        }}
      />
      <Tab.Screen
        name='profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
          ),
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  );
};
function CancelButton(){
  const navigation = useNavigation();
  return <TouchableOpacity  onPress={()=>navigation.goBack()}>
    <Text style={[styles.cancelButtonText]}>Cancel</Text>
  </TouchableOpacity>
}
const styles = StyleSheet.create({
  cancelButtonText: {
    color: 'red', // Customize the text color
    fontSize: 16, // Customize the font size
  },
});
const AppNavigator = ()=>{
  return <Stack.Navigator>
    <Stack.Screen name='startingPage' component={StartingPage} options={{headerShown:false}}/>
    <Stack.Screen name='signUp' component={SignUp} options={{headerShown:false}}/>
    <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
    <Stack.Screen name='verifySignUpOtp' component={VerifySignUpOtp} options={{headerShown:false}}/>
    <Stack.Screen name='verifyPasswordOtp' component={VerifyPasswordOtp} options={{headerShown:false}}/>
    <Stack.Screen name='resetPassword' component={ResetPassword} options={{headerShown:false}}/>
    <Stack.Screen name='forgotPassword' component={ForgotPassword} options={{headerShown:false}}/>
    <Stack.Screen name='upload1' component={Upload1} options={
      {
        // headerShown:false,
        headerStyle:{
          height:20,
          backgroundColor: 'white',
          justifyContent:'center',
          alignItems:'center'
        },
        title:'',
        headerLeft:()=><CancelButton/>,
        headerRight:()=><View><Text>1/2</Text></View>
      }
    } />
    <Stack.Screen name='upload2' component={Upload2} options={
      {
        // headerShown:false,
        headerStyle:{
          height:20,
          backgroundColor: 'white',
          justifyContent:'center',
          alignItems:'center'
        },
        title:'',
        headerLeft:()=><CancelButton/>,
        headerRight:()=><View><Text>2/2</Text></View>
      }
    } />
    <Stack.Screen name='home' component={HomeTabs} options={{headerShown:false}}/>
  </Stack.Navigator>
}
export default function App() {
  return (
    <>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </>
  );
}
