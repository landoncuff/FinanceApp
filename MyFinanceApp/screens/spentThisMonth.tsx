import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, Modal, Pressable} from 'react-native';

export function SpentThisMonth() {
    return (
            <View style={{backgroundColor: 'green', height: '100%'}}>
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
                <View style={{marginTop: '10%', backgroundColor: 'Yellow', flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text>Landon is Cool</Text>
                    <Text>Landon is Cool</Text>
                </View>
                {/* <View style={{margin: 70}}></View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.categoryLogo}>
                        <Text style={styles.tableMiddleTextHeader}>Month Paycheck:</Text>
                    </View>
                    <View style={styles.categoryText}>
                        <Text style={styles.tableMiddleTextHeader}>Spent:</Text>
                    </View>
                </View> */}
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
        marginTop: '10%',
        fontSize: 35
    },
    tableView: {
        flexDirection: 'row',
        backgroundColor: 'red',
        borderRadius: 20,
        marginRight: 13,
        marginLeft: 13,
        marginTop: '15%',
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
        // paddingTop: 10, 
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    tableMiddleText: {
        paddingTop: 10, 
        textAlign: 'center', 
        fontSize: 40, 
        color: 'white'
    },
    categoryLogo: {
        backgroundColor: 'red', 
        width: '13%', 
        margin: 13,
        borderRadius: 20,
    },
    categoryText: {
        backgroundColor: 'red', 
        width: '55%', 
        margin: 13,
        marginTop: 18, 
        marginLeft: 0,
        borderRadius: 20,
        justifyContent: 'center',
    }
});

export default SpentThisMonth;