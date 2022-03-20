import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, Modal, Pressable} from 'react-native';

export function SpentThisMonth() {
    return (
            <View style={{backgroundColor: 'green'}}>
                <View>
                    <Text style={styles.graphText}>Current Balance:</Text>
                    <Text style={styles.totalAmountText}>$20,000</Text>
                </View>
                <View style={styles.tableView}>
                    <View style={styles.tableMiddleViewLeft}>
                        <Text style={styles.tableMiddleTextHeader}>Month Paycheck:</Text>
                        <Text style={styles.tableMiddleText}>$5,000</Text>
                    </View>
                    <View style={styles.tableMiddleViewRight}>
                        <Text style={styles.tableMiddleTextHeader}>Spent:</Text>
                        <Text style={styles.tableMiddleText}>$1,200</Text>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    graphText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: '10%',
        marginLeft: 10
    },
    totalAmountText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '4%',
        fontSize: 35
    },
    tableView: {
        flexDirection: 'row',
        backgroundColor: 'red',
        borderRadius: 20,
        marginRight: 13,
        marginLeft: 13,
        marginTop: 20,
    },
    tableMiddleViewLeft: {
        backgroundColor: 'red', 
        width: '45%', 
        margin: 13,
    },
    tableMiddleViewRight: {
        backgroundColor: 'red', 
        width: '45%', 
        margin: 13, 
        marginLeft: 0,
    },
    tableMiddleTextHeader:{
        paddingTop: 10, 
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    tableMiddleText: {
        paddingTop: 10, 
        textAlign: 'center', 
        fontSize: 40, 
        color: 'white'
    }
});

export default SpentThisMonth;