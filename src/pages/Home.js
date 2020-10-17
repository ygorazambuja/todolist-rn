import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';

import {addTodo} from '../store/actions/todoActions';

const Home = (props) => {
    const [input, setInput] = useState('');
    return (
        <View style={{alignItems: 'center'}}>
            <View>
                <Text>Todos</Text>
            </View>
            <View style={{flexDirection: 'row', margin: 'auto'}}>
                <TextInput
                    style={{borderWidth: 1}}
                    onChangeText={(input) => {
                        setInput(input);
                    }}
                    placeholder="Adicionar novo Todo"></TextInput>
                <Button
                    title="Adiciona"
                    onPress={() => {
                        const todo = {
                            title: input,
                            date: new Date().toISOString(),
                        };
                        props.add(todo);
                        console.log(props.todos);
                    }}></Button>
            </View>
            <View>
                <Text>{input}</Text>
            </View>
            <View></View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
