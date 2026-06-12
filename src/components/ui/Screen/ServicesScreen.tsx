import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SERVICES } from '../../../data/service';

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Services</Text>

      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    marginTop: 5,
    color: 'green',
  },
});