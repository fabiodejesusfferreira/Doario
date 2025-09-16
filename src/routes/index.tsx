import { NavigationContainer } from '@react-navigation/native'
import { DrawerRoutes } from './drawer.routes';

// caixa de contextos
export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer >
  )
}