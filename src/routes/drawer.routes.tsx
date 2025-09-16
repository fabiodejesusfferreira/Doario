import { createDrawerNavigator } from "@react-navigation/drawer";

const { Screen, Navigator } = createDrawerNavigator();

import Home from "../screens/Home";
import Campanhas from "../screens/Campanhas";

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          headerTintColor: "blue",
          headerShown: false,
          swipeEdgeWidth: 80
        }}
      />

      <Screen name="campanhas" component={Campanhas} />
    </Navigator>
  );
}
