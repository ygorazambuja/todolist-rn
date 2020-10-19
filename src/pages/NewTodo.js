import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../store/actions/todoActions';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({
        key: uuidv4(),
        title: '',
        description: '',
        createdAt: moment(),
    });
    return (
        <View style={{padding: 20}}>
            <TextInput
                placeholder={'Title'}
                onChangeText={(e) => setTodo({...todo, title: e})}
                style={styles.inputField}
            />
            <TextInput
                placeholder={'Description'}
                onChangeText={(e) => setTodo({...todo, description: e})}
                style={styles.inputField}
            />
            <Text>created at {todo.createdAt.toString()}</Text>
            <Button
                title="Add"
                onPress={() => {
                    props.add(todo);
                    props.navigation.navigate('Home');
                }}
            />
        </View>
    );
};
const mapStateToProps = (state) => {
    return {
        todos: state.todosReducer.todos,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: (todo) => dispatch(addTodo(todo)),
    };
};

const styles = StyleSheet.create({
    inputField: {
        fontSize: 20,
        padding: 20,
        borderWidth: 0.9,
        borderRadius: 25,
        marginBottom: 5,
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
