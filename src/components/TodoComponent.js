import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodoComponent({todo, navigation}) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('TodoDetails', {
                    todo,
                });
            }}>
            <View style={styles.todoItem}>
                <View>
                    <Text>{todo.title}</Text>
                </View>
                <View>
                    <Icon name="chevron-down" size={24} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'lightgrey',
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
});
