import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileNavigate from '../ProfileNav';

const ProfileScreen  = ({navigation}) => {
    return(
        <View style= {styles.container}>
            <Text>Profile Page</Text> 
            <ProfileNavigate/>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
