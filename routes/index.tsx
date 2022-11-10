import { Platform } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'
import { PlusCircle } from 'phosphor-react-native'

import { Matches } from '../screen/Matches'
import { Groups } from '../screen/Groups'

const { Navigator, Screen } = createBottomTabNavigator()

export function Routes() {

  const { colors, sizes } = useTheme()

  const size = sizes[6]

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: colors.yellow[500],
      tabBarInactiveTintColor: colors.gray[300],
      tabBarStyle: {
        position: 'absolute',
        height: sizes[20],
        borderTopWidth: 0,
        backgroundColor: colors.gray[800]
      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? -10 : 0
      }
    }}>
        <Screen
          name='Matches'
          component={Matches}
          options={{
            tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
            tabBarLabel: 'Partidas',
          }}
        />

        <Screen
          name='Groups'
          component={Groups}
          options={{
            tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
            tabBarLabel: 'Grupos',
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}