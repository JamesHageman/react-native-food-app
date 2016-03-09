import React, {
  Component,
  View
} from 'react-native'
import { observer } from 'mobx-react/native';

class HGroup extends Component {
  render() {
    return <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
      { this.props.children }
    </View>
  }
}

export default observer(HGroup)
