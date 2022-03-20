import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, Modal, Pressable} from 'react-native';
import SpentThisMonth from './screens/spentThisMonth';
import HomeScreen from './screens/homeScreen';

export default function App() {
  return (
    <HomeScreen />
  );
}
