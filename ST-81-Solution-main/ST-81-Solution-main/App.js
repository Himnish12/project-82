import*as React from "react"
import{NavigationContainer} from "@react-Navigation/native"
import DrawerNavigator from "./navigation/DrawerNavigator"

export default function App (){
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}