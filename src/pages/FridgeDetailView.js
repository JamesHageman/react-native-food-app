import React, {
  Component,
  View,
  TouchableHighlight,
  Text,
  PropTypes,
  StyleSheet
} from 'react-native'

import { observer } from 'mobx-react/native';
import HGroup from '../components/HGroup'

class FridgeDetailView extends Component {
  static propTypes = {
    fridge: PropTypes.object.isRequired
  };

  render() {
    return <View style={styles.container}>
      <HGroup>
        <TouchableHighlight
          onPress={this.props.onBack}>
          <Text style={styles.title}>Fridge Detail View</Text>
        </TouchableHighlight>
      </HGroup>
      <Text>{JSON.stringify(this.props.fridge)}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  header: {

  },
  headerTitle: {
    color: 'black'
  },
  backText: {
    marginLeft: 8,
    color: 'black'
  },
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
  addFridge: {
    padding: 15,
    borderWidth: 1
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
  },
  row: {
    borderWidth: 1,
    height: 70,
    padding: 20
  }
});

export default observer(FridgeDetailView)
