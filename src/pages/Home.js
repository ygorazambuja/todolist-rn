import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import TodoComponent from '../components/TodoComponent';

import {addTodo} from '../store/actions/todoActions';

const Home = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.title}>Todos</Text>
            </View>

            <View style={styles.flatListComponent}>
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate('NewTodo');
                    }}>
                    <Text style={styles.buttonText}>New Todo</Text>
                </TouchableOpacity>
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
    flatListComponent: {
        height: Dimensions.get('window').height - 175,
    },
    button: {
        height: 40,
        backgroundColor: 'indigo',
    },
    buttonText: {
        margin: 5,
        padding: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
