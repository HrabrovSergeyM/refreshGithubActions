import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

const DetailsScreen = ({route}: any) => {
  const {item} = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding: 16}}>
      <Text style={styles.label}>Type:</Text>
      <Text style={styles.value}>{item.type}</Text>
      <Text style={styles.label}>Repo:</Text>
      <Text style={styles.value}>{item.repo.name}</Text>
      <Text style={styles.label}>Actor:</Text>
      <Text style={styles.value}>{item.actor.login}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default DetailsScreen;
