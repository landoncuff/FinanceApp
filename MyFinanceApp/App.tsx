import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

export default function App() {
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
                  <Text style={styles.moneyHeaderText}>Spent This Month</Text>
                  <Text style={styles.moneyText}>$1200</Text>
                </View>
                <View style={styles.topRightCard}>
                  <Text style={styles.moneyHeaderText}>Saved This Month</Text>
                  <Text style={styles.moneyText}>$1200</Text>
                </View>
              </View>
              <View style={styles.middlebuttonRows}>
                <View style={styles.topLeftCard}>
                  <Text style={styles.moneyHeaderText}>Earned This Month</Text>
                  <Text style={styles.moneyText}>$1200</Text>
                </View>
                <View style={styles.topRightCard}>
                  <Text style={styles.moneyHeaderText}>Enter Paycheck</Text>
                  <Text style={styles.moneyText}>$1200</Text>
                </View>
              </View>
              <View style={styles.newButtonRow}>
                  <Text style={styles.newPaymentText}>Create New Payment</Text>
              </View>
          </View>
      </View>
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
  }
});
