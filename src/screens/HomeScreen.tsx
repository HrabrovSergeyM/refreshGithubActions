import React, {useEffect, useCallback, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {fetchEvents} from '../store/actions';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = ({navigation}: any) => {
  const {events, loading, error} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [timer, setTimer] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setIsFocused(true);
      dispatch(fetchEvents());
      setTimer(30);
      return () => {
        setIsFocused(false);
      };
    }, [dispatch]),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFocused) {
        console.log(`Следующее обновление списка через ${timer} секунд`);
        if (timer === 0) {
          dispatch(fetchEvents());
          setTimer(30);
        } else {
          setTimer(prevTimer => prevTimer - 1);
        }
      } else {
        console.log('Таймер на паузе');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, isFocused, dispatch]);

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('Details', {item});
      }}>
      <Text style={styles.itemIndex}>{index + 1}.</Text>
      <Text style={styles.itemText}>{item.type}</Text>
    </TouchableOpacity>
  );

  const onRefresh = () => {
    dispatch(fetchEvents());
    setTimer(30);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Public Events</Text>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  itemIndex: {
    fontSize: 16,
    marginRight: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default HomeScreen;
