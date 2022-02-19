import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Convert from "../../screens/convert/Convert";
import Stories from "../../screens/stories/Stories";
import About from "../../screens/about/About";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator();

const BottomTabMenu = () => {
    return (
        <Tab.Navigator initialRouteName="convert" screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10
                },
                tabBarIcon: ({color, size}) => {
                    size = 20;
                    if (route.name == "convert") {
                        return (
                            <IconMC name="account-cash" color={color} size={size} />
                        )
                    }
                    if (route.name == "stories") {
                        return (
                            <IconMC name="history" color={color} size={size} />
                        )
                    }
                    if (route.name == "about") {
                        return (
                            <IconMC name="information-outline" color={color} size={size} />
                        )
                    }
                },
                tabBarActiveTintColor: "#4500BC",
                tabBarInactiveTintColor: "#C8C8C8"
            })
        }>
            <Tab.Screen options={{title: 'Конвертация'}} name="convert" component={Convert} />
            <Tab.Screen options={{title: 'История'}} name="stories" component={Stories} />
            <Tab.Screen options={{title: 'О программе'}} name="about" component={About} />
        </Tab.Navigator>
    );
};

export default BottomTabMenu;
