import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import TodoComponent from '../components/TodoComponent';

import {addTodo} from '../store/actions/todoActions';

const Home = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.title}>Todos</Text>
            </View>

            <View style={{maxHeight: 200}}>
                <FlatList
                    data={props.todos}
                    keyExtractor={(item) => item.key.toString()}
                    renderItem={({item}) => {
                        return (
                            <TodoComponent
                                navigation={props.navigation}
                                todo={item}
                            />
                        );
                    }}
                />
            </View>
            <View>
                <Button
                    title="New Todo"
                    onPress={() => {
                        props.navigation.navigate('NewTodo');
                    }}
                />
            </View>
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

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    mainContainer: {
        padding: 20,
        justifyContent: 'center',
    },
    flatListComponent: {},
});
