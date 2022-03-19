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
              <View style={styles.buttonRows}>
                <View style={styles.topLeftCard}>
                  <Text style={{padding: 10}}>Hello</Text>
                </View>
                <View style={styles.topRightCard}>
                  <Text style={{padding: 10}}>Hello</Text>
                </View>
              </View>
              <View style={styles.buttonRows}>
                <View style={styles.topLeftCard}>
                  <Text style={{padding: 10}}>Hello</Text>
                </View>
                <View style={styles.topRightCard}>
                  <Text style={{padding: 10}}>Hello</Text>
                </View>
              </View>
              <View style={styles.buttonRows}>
                <View style={styles.bottomMoneyButton}>
                  <Text style={{padding: 10}}>Hello</Text>
                </View>
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
    // justifyContent: 'space-evenly'
  },
  buttonRows: {
    flexDirection: 'row',
    marginBottom: 70
    // justifyContent: 'space-evenly'
  },
  topLeftCard: {
    backgroundColor: 'red', 
    width: '45%', 
    height: '170%', 
    margin: 13, 
    borderRadius: 20,
  },
  topRightCard: {
    backgroundColor: 'red', 
    width: '45%', 
    height: '170%', 
    margin: 13, 
    borderRadius: 20, 
    marginLeft: 0,
  },
  bottomMoneyButton: {
    backgroundColor: 'red', 
    width: '93%', 
    height: '170%', 
    margin: 13, 
    borderRadius: 20, 
  }
});
