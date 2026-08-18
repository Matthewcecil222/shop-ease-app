import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="#FFFFFF" />
        </View>
      </View>

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john.doe@example.com</Text>

      <View style={styles.menuContainer}>
        <MenuItem icon="person-outline" label="My Profile" />
        <MenuItem icon="location-outline" label="Shipping Address" />
        <MenuItem icon="card-outline" label="Payment Methods" />
        <MenuItem icon="settings-outline" label="Settings" />
        <MenuItem icon="help-circle-outline" label="Help & Support" />
        <MenuItem icon="log-out-outline" label="Log Out" />
      </View>
    </View>
  );
}

function MenuItem({ icon, label }) {
  return (
    <View style={styles.menuItem}>
      <Ionicons name={icon} size={22} color="#1A1A1A" />
      <Text style={styles.menuLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={18} color="#CCCCCC" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 40,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#7F00FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 30,
  },
  menuContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    color: '#1A1A1A',
    marginLeft: 14,
    fontWeight: '500',
  },
});
