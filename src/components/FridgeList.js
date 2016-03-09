import React, {
  Component,
  TouchableHighlight,
  View,
  Text,
  ListView,
  PropTypes,
  StyleSheet
} from 'react-native'

import { observer } from 'mobx-react/native';
import { autorunAsync } from 'mobx'

class FridgeList extends Component {
  static PropTypes = {
    fridges: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props)
    console.log(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      ds: ds
    };

    autorunAsync(() => {
      this.setState({
        ds: ds.cloneWithRows(props.fridges.toJSON())
      })
    })
  }

  renderRow = fridge => {
    console.log('row', fridge)
    return <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#ccc"
      style={styles.row}
      onPress={this.props.onSelectFridge.bind(null, fridge)}>
      <Text>Row: {fridge.name}</Text>
    </TouchableHighlight>;
  };

  render() {
    return <View style={{ alignSelf: 'stretch', flex: 1}}>
      <ListView
        style={{backgroundColor: 'white', flex: 1}}
        dataSource={this.state.ds}
        renderRow={this.renderRow}/>
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
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 70,
    padding: 20
  }
});

export default observer(FridgeList)
