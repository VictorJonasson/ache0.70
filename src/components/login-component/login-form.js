import React, {useContext, useState} from 'react';
import {AccountContext, authenticate} from '../../Cognito/Accounts';
import {StyleSheet} from 'react-native';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {LoginUserIcon, LoginKeyIcon} from '../icon-helper/icon-provider';

export default () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { authenticate } = useContext(AccountContext);

  const onSubmit = () => {
    authenticate(email, password)
      .then(data => {
        console.log('logged in', data);
        navigation.navigate('LandingScreen');
      })
      .catch(err => {
        console.log('Failed to login', err);
      });
  };

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Input
        accessoryLeft={LoginUserIcon}
        style={styles.inputEmail}
        value={email}
        label="Email"
        onChangeText={nextValue => setEmail(nextValue)}
      />

      <Input
        accessoryLeft={LoginKeyIcon}
        style={styles.inputPassword}
        value={password}
        label="Lösenord"
        secureTextEntry={true}
        onChangeText={nextValue => setPassword(nextValue)}
      />

      <Layout
        style={{
          flex: 0,
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          size={'small'}
          style={styles.loginButton}
          onPress={() => onSubmit()}>
          <Text
            style={{
              elevation: 5,
              fontFamily: 'AdventPro-Regular',
            }}
            category={'h5'}
            appearance="alternative">
            Logga in
          </Text>
        </Button>
        <Button
          size={'small'}
          style={styles.loginButton}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text appearance="alternative">Bypass</Text>
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputEmail: {
    width: '80%',
    marginTop: '30%',
    elevation: 3,
  },
  signUp: {
    marginTop: '20%',
  },
  inputPassword: {
    width: '80%',
    marginTop: 20,
    elevation: 3,
  },
  loginButton: {
    marginTop: '20%',
    elevation: 3,
  },
});
