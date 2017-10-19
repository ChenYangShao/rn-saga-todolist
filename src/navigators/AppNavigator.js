import { StackNavigator } from 'react-navigation'

import ListScreen from '../components/screen/List'
import DetailScreen from '../components/screen/Detail'

export default StackNavigator({
  List: {
    screen: ListScreen,
    // initialRouteName: 'List',
    navigationOptions: () => ({
      title: 'todo',
    }),
  },
  Detail: {
    screen: DetailScreen,
  },
})
