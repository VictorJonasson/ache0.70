import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import UsersComponent from "../components/usersComponent";

const ProfileScreen = () => (
  <Layout
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Profil</Text>
      <UsersComponent></UsersComponent>
  </Layout>
);

export default ProfileScreen;
