import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, Modal, Pressable} from 'react-native';
import SpentThisMonth from './spentThisMonth';

export function HomeScreen() {
    //* Create state for Modal
    const [spentModalState, setSpentModalState] = useState(false);
    const [savedModalState, setSavedModalState] = useState(false);
    const [earnedModalState, setEarnedModalState] = useState(false);
    const [paycheckModalState, setPaycheckModalState] = useState(false);
    const [paymentModalState, setPaymentModalState] = useState(false);

    return (
        <React.Fragment>
        <SafeAreaView style={{backgroundColor: 'dodgerblue'}}></SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.welcomeText}>Welcome Landon</Text>
                </View>
                <View style={styles.graphHeader}>
                    <Text style={styles.graphText}>Total Payments:</Text>
                    <Text style={styles.totalAmountText}>$20,000</Text>
                </View>
            </View>
      {/* New section */}
        <View style={styles.containerCard}>   
            <View style={styles.cardMainView}>
                <View style={styles.topButtonRow}>
                    <View style={styles.topLeftCard}>
                        <Pressable onPress={() => setSpentModalState(true)}>
                            <Text style={styles.moneyHeaderText}>Spent This Month</Text>
                            <Text style={styles.moneyText}>$1200</Text>
                        </Pressable>
                    </View>
                    <View style={styles.topRightCard}>
                        <Pressable onPress={() => setSavedModalState(true)}>
                            <Text style={styles.moneyHeaderText}>Saved This Month</Text>
                            <Text style={styles.moneyText}>$1200</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.middlebuttonRows}>
                    <View style={styles.topLeftCard}>
                        <Pressable onPress={() => setEarnedModalState(true)}>
                            <Text style={styles.moneyHeaderText}>Earned This Month</Text>
                            <Text style={styles.moneyText}>$1200</Text>
                        </Pressable>
                    </View>
                    <View style={styles.topRightCard}>
                        <Pressable onPress={() => setPaycheckModalState(true)}>
                            <Text style={styles.moneyHeaderText}>Enter Paycheck</Text>
                            <Text style={styles.moneyText}>$1200</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.newButtonRow}>
                    <Pressable onPress={() => setPaymentModalState(true)}>
                        <Text style={styles.newPaymentText}>Create New Payment</Text>
                    </Pressable>
                </View>
            </View>
        </View>

            {/* This is Modal for spent this month button*/}
            <Modal visible={spentModalState} animationType="slide" presentationStyle="pageSheet">
                {/* Will close the modal from the modal screen */}
                <Pressable onPress={() => setSpentModalState(false)} style={styles.modalPressable}>
                <Text style={styles.modalCloseText}>Close</Text>
                </Pressable>
                {/* the modal screen that is displayed when pressed */}
                <SpentThisMonth />
            </Modal>

            {/* This is Modal for Saved this month button*/}
            <Modal visible={savedModalState} animationType="slide" presentationStyle="pageSheet">
                {/* Will close the modal from the modal screen */}
                <Pressable onPress={() => setSavedModalState(false)} style={styles.modalPressable}>
                <Text style={styles.modalCloseText}>Close</Text>
                </Pressable>
                {/* the modal screen that is displayed when pressed */}
                <SpentThisMonth />
            </Modal>

            {/* This is Modal for earned this month button*/}
            <Modal visible={earnedModalState} animationType="slide" presentationStyle="pageSheet">
                {/* Will close the modal from the modal screen */}
                <Pressable onPress={() => setEarnedModalState(false)} style={styles.modalPressable}>
                <Text style={styles.modalCloseText}>Close</Text>
                </Pressable>
                {/* the modal screen that is displayed when pressed */}
                <SpentThisMonth />
            </Modal>

            {/* This is Modal for paycheck this month button*/}
            <Modal visible={paycheckModalState} animationType="slide" presentationStyle="pageSheet">
                {/* Will close the modal from the modal screen */}
                <Pressable onPress={() => setPaycheckModalState(false)} style={styles.modalPressable}>
                <Text style={styles.modalCloseText}>Close</Text>
                </Pressable>
                {/* the modal screen that is displayed when pressed */}
                <SpentThisMonth />
            </Modal>

            {/* This is Modal for payment this month button*/}
            <Modal visible={paymentModalState} animationType="fade" presentationStyle="pageSheet">
                {/* Will close the modal from the modal screen */}
                <Pressable onPress={() => setPaymentModalState(false)} style={styles.modalPressable}>
                <Text style={styles.modalCloseText}>Close</Text>
                </Pressable>
                {/* the modal screen that is displayed when pressed */}
                <SpentThisMonth />
            </Modal>
        </React.Fragment>

    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'dodgerblue', 
      flex: 1, 
      flexDirection: 'column'
    },
    welcomeText: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    graphHeader: {
      // flex: 2
    },
    graphText: {
      color: 'white',
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: '10%',
      marginLeft: '10%'
    },
    totalAmountText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '4%',
      fontSize: 35
    },
    containerCard: {
      backgroundColor:'dodgerblue',
      flex: 1,
      flexDirection: 'column',
    },
    cardMainView: {
      backgroundColor: 'grey', 
      flex: 1, 
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      flexDirection: 'column',
    },
    topButtonRow: {
      flexDirection: 'row',
      marginBottom: 20,
      marginTop: 15
    },
    middlebuttonRows: {
      flexDirection: 'row',
      marginBottom: 50
    },
    newButtonRow: {
      flexDirection: 'row',
      justifyContent: 'center', 
      textAlign: 'center', 
      backgroundColor: 'red',
      borderRadius: 20,
      marginRight: 13,
      marginLeft: 13
    },
    topLeftCard: {
      backgroundColor: 'red', 
      width: '45%', 
      height: '90%', 
      margin: 13,
      borderRadius: 20,
    },
    topRightCard: {
      backgroundColor: 'red', 
      width: '45%', 
      height: '90%', 
      margin: 13, 
      borderRadius: 20, 
      marginLeft: 0,
    },
    newPaymentText: {
      padding: 10, 
      fontSize: 25, 
      textAlign: 'center', 
      paddingTop: 10,
      fontWeight: 'bold',
      marginBottom: 8,
      marginTop: 8
    },
    moneyText: {
      paddingTop: 10, 
      textAlign: 'center', 
      fontSize: 40, 
      color: 'white'
    },
    moneyHeaderText: {
      paddingTop: 10, 
      textAlign: 'center', 
      fontSize: 20, 
      fontWeight: 'bold'
    },
    modalPressable:{
        flexDirection: "row", 
        backgroundColor: 'dodgerblue'
    },
    modalCloseText: {
        margin: 15, 
        fontWeight: "bold", 
        color: 'white'
    }
  });

  export default HomeScreen;