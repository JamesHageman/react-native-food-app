import React, {
  Component,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native'
import { observer } from 'mobx-react/native'
import HGroup from '../components/HGroup'

class NewFridgeView extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onNewFridge: PropTypes.func.isRequired,
    newFridge: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  };

  onAddPress = () => {
    this.props.onNewFridge(this.props.newFridge);
  };

  renderDoneBtn = () => {
    const { name } = this.props.newFridge;

    return <TouchableHighlight
      underlayColor="#ccc"
      activeOpacity={0.3}
      onPress={name.length > 0 ? this.onAddPress : null}>
      <View style={styles.button}>
        <Text>+ Add</Text>
      </View>
    </TouchableHighlight>
  };

  renderCancelBtn = () => {
    return <TouchableHighlight
      underlayColor="#ccc"
      activeOpacity={0.3}
      onPress={this.props.onCancel}>
      <View style={styles.button}>
        <Text>Cancel</Text>
      </View>
    </TouchableHighlight>
  };

  render() {
    const { newFridge } = this.props;
    return <View style={styles.container}>
      <Text style={styles.title}>Add a fridge...</Text>
      <View style={styles.stretchHorizontal}>
        <TextInput
          style={styles.input}
          autoFocus
          placeholder={'Fridge name (i.e. "Home")'}
          value={newFridge.name}
          onChangeText={t => newFridge.name = t}/>
      </View>
      <HGroup>
        { this.renderDoneBtn() }
        { this.renderCancelBtn() }
      </HGroup>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  stretchHorizontal: {
    alignSelf: 'stretch'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    height: 50
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12
  }
});

export default observer(NewFridgeView)
