import React, {
  Component,
  PropTypes,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native'

import { observer } from 'mobx-react/native'
import FridgeList from '../components/FridgeList'
import Modal from 'react-native-modalbox'
import NewFridgeView from './NewFridgeView'
import FridgeDetailView from './FridgeDetailView'
import { addFridge } from '../state'

class FridgeListView extends Component {
  static PropTypes = {
    state: PropTypes.shape({
      addFridgeActive: PropTypes.bool,
      fridges: PropTypes.array
    }).isRequired
  };

  handleNewFridge = (fridge) => {
    const { state } = this.props.data;
    state.addFridgeActive = false;
    addFridge(state, fridge);
  };

  setAddFridgeActive = active => {
    this.props.data.state.addFridgeActive = active
  };

  renderAddFridgeBtn = () => {
    return <TouchableHighlight underlayColor="white" activeOpacity={0.3}
      onPress={() => this.setAddFridgeActive(true)} style={styles.addFridge}>
        <Text>Add a fridge...</Text>
    </TouchableHighlight>
  };

  renderAddFridge = () => {
    const {state} = this.props.data
    return <Modal
      swipeToClose
      isOpen={state.addFridgeActive}
      onClosed={() => this.setAddFridgeActive(false)}
      animationDuration={200}>
      <NewFridgeView
        newFridge={state.newFridge}
        onCancel={() => this.setAddFridgeActive(false)}
        onNewFridge={this.handleNewFridge}/>
    </Modal>
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          FoodTrackr
        </Text>

        <View style={{
            marginBottom: 20
          }}>
          { this.renderAddFridgeBtn() }
        </View>


        <FridgeList fridges={this.props.data.state.fridges}
          onSelectFridge={fridge => this.props.toRoute({
            component: FridgeDetailView,
            name: fridge.name,
            passProps: { fridge: fridge }
          })}/>
        { this.renderAddFridge() }
      </View>
    );
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

export default observer(FridgeListView);
