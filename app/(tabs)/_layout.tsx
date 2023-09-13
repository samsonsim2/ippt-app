import { Tabs } from "expo-router";
import { s } from "react-native-wind";
import { COLORS } from "../../constants";
 
 
export default ()=>{
    return(     
        <Tabs    screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarStyle: {
                borderTopColor: "black",
                backgroundColor: "black",
                
            },
            
            
            
          }} >
            <Tabs.Screen  name="home"/>
            <Tabs.Screen name="progress"/>
            <Tabs.Screen name="chart"/>
        </Tabs>
     
    )
}