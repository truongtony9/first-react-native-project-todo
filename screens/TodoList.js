import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newTodo: ''
    };
  }

  handleChange = text => {
    this.setState({ newTodo: text });
  };

  addHandlePress = () => {
    const list = [...this.state.list, this.state.newTodo];
    this.setState({ list, newTodo: '' });
  };

  deleteHandlePress = item => {
    let list = this.state.list.slice();
    list.splice(item, 1);
    this.setState({ list });
  };

  render() {
    return (
      <View>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange}
          onSubmitEditing={this.addHandlePress}
          placeholder="Type Here..."
          style={{
            height: 25,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            alignItems: 'center'
          }}
        />

        <TouchableOpacity onPress={this.addHandlePress} style={styles.button}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        <View>
          {this.state.list.map((todo, ind) => {
            return (
              <View>
                <Text
                  style={styles.toDoList}
                  key={ind}
                  onPress={this.deleteHandlePress}
                >
                  {todo}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  toDoList: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    margin: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  }
});

export default TodoList;
