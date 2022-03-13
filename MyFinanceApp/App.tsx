import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView style={{backgroundColor: 'dodgerblue'}}>
    <SafeAreaView style={styles.container}>
          <View style={styles.homeHeaderView}>
            <Text style={styles.welcomeText}>Welcome Landon</Text>
          </View>
          <View style={styles.graphHeader}>
            <Text style={styles.graphText}>Total Payments:</Text>
            <Text style={styles.totalAmountText}>$20,000</Text>
          </View>
          <View style={{margin: 40}}></View>
          <View style={{margin: 40}}></View>
          <View style={{margin: 40}}></View>
          <View style={{margin: 20}}></View>
    </SafeAreaView>
    <SafeAreaView style={styles.containerCard}>
    <View style={styles.cardTopMainView}>
      <View style={styles.leftCard}>
        <Text>Hello My Friend</Text>
      </View>
      <View style={styles.rightCard}>
          <Text>Landon is so cool</Text>
      </View>
    </View>
    <View style={styles.cardBottomMainView}>
      <View style={styles.leftCard}>
        <Text>Hello My Kassidy</Text>
      </View>
      <View style={styles.rightCard}>
          <Text>Landon is so cool</Text>
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'dodgerblue',
    flexDirection: 'column',
  },
  homeHeaderView: { 
    marginTop: '5%'
  },
  welcomeText: {
    fontSize: 25,
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
    fontSize: 30
  },
  containerCard: {
    backgroundColor:'grey',
    flex: 1,
    flexDirection: 'column',
    borderRadius: 20,
    height: '100%'
  },
  cardTopMainView: {
    flexDirection: 'row', 
    justifyContent: "space-between"
  },
  leftCard: {
    // marginTop: 30, 
    // marginBottom:30, 
    // marginRight: 20, 
    // marginLeft: 20, 
    height: '80%',
    width: '40%',
    backgroundColor: 'red', 
    // padding: 35,
    borderRadius: 15
  },
  rightCard: {
    // marginTop: 30, 
    // marginBottom:30, 
    backgroundColor: 'red', 
    // padding: 35, 
    // paddingBottom: 40,
    // marginRight: 20,
    borderRadius: 15,
    height: '200px',
    width: '40%',
  },
  cardBottomMainView: {
    flexDirection: 'row', 
    justifyContent: "space-between"
    // alignItems: 'baseline'
  },

});
