import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AbaHome from "../abahome/abahome";
import AbaCalendar from "../abacalendar/abacalendar";
import AbaProfile from "../abaprofile/abaprofile.jsx";
import { Image } from "react-native";
import icon from "../../constants/icon.js"

const Tab = createBottomTabNavigator();


function Main(){
 return <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={AbaHome} options={{
            headerTitleAlign: "center",
            headerShadowVisible: false, // applied here
            tabBarShowLabel: false,
            headerTitle: ()=>{
                return <Image source={icon.logo} style={{width:125, height:29}}/>
            },
            tabBarIcon: ({focused}) =>{
                return <Image source={icon.home} style={{width: 25, height:25, opacity: focused ? 1: 0.3 }} />
            }
        }}/>
        <Tab.Screen name="Calendar" component={AbaCalendar}  options={{
            headerTitleAlign: "center",
            headerShadowVisible: false, // applied here
            tabBarShowLabel: false,
            headerTitle: ()=>{
                return <Image source={icon.logo} style={{width:125, height:29}}/>
            },
            tabBarIcon: ({focused}) =>{
                return <Image source={icon.calendar} style={{width: 25, height:25, opacity: focused ? 1: 0.3}} />
            }
        }}/>
        <Tab.Screen name="Profile" component={AbaProfile}  options={{
            headerTitleAlign: "center",
            headerShadowVisible: false, // applied here
            tabBarShowLabel: false,
            headerTitle: (focused)=>{
                return <Image source={icon.logo} style={{width:125, height:29}}/>
            },
            tabBarIcon: ({focused}) =>{
                return <Image source={icon.profile} style={{width: 25, height:25,  opacity: focused ? 1: 0.3}} />
            }
        }}/>
    </Tab.Navigator>
 </NavigationContainer>
}

export default Main;