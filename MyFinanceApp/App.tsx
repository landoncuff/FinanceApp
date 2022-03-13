import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
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
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    flexDirection: 'column'
  },
  homeHeaderView: { 
    // color: 'red',
    // flex: 1,
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
    backgroundColor:'red',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  }
});
