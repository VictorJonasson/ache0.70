import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Layout, Text, Icon} from '@ui-kitten/components';
import UserPool from '../../Cognito/UserPool';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {
  LoginUserIcon,
  LoginKeyIcon,
  AlertIcon,
} from '../icon-helper/icon-provider';
import {useNavigation, useNavigationState} from '@react-navigation/native';

const SignupForm = props => {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [passwordMessage, setPasswordMessage] = useState(
    'Måste bestå av minst 8 tecken',
  );
  const [emailMessage, setEmailMessage] = useState();

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        <AlertIcon />
        <Text style={styles.captionText}>{passwordMessage}</Text>
      </View>
    );
  };
  const renderEmailCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {emailMessage ? <AlertIcon /> : null}
        <Text style={styles.captionText}>{emailMessage}</Text>
      </View>
    );
  };

  const onSubmit = () => {
    console.log('kör onsubmit');
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        console.log('onsubmit gick fel');
      } else {
        console.log('Submittat ' + data);
      }
    });
  };
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  function validatePassword() {
    if (!password.localeCompare(password1)) {
      if (password.match(/\W/)) {
        if (password.length >= 8) {
          if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            console.log('Password validerat');
          } else {
            console.log('innehåller inte');
            setPasswordMessage('Måste bestå av minst 1 stor bokstav');
          }
        } else {
          setPasswordMessage('Måste bestå av minst 8 tecken');
        }
      } else {
        setPasswordMessage('Lösenord måste innehålla ett specialtecken');
      }
    } else {
      console.log('matchar inte');
      setPasswordMessage('Lösenorden stämmer ej överens');
    }
  }

  function changeBoolOnLandingScreen(props) {
    props.dataSetHasNoAccountOnLandingScreen();
    onSubmit(props);
  }

  function validateEmail() {
    const validationRule =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.match(validationRule)) {
      console.log('Email validerat');
    } else {
      console.log('email dont pass');
      setEmailMessage('Mailadressen är felformularead');
    }
  }

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
        caption={renderEmailCaption}
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Input
        size={'small'}
        value={password}
        label="Lösenord"
        style={styles.inputPassword}
        accessoryLeft={LoginKeyIcon}
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPassword(nextValue)}
      />
      <Input
        size={'small'}
        caption={renderCaption}
        value={password1}
        label="Upprepa Lösenord"
        style={styles.inputPassword}
        accessoryLeft={LoginKeyIcon}
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPassword1(nextValue)}
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
          onPress={props => {
            validateEmail();
            validatePassword();
            changeBoolOnLandingScreen(props);
          }}>
          <Text
            category={'h5'}
            style={{
              fontFamily: 'AdventPro-Regular',
            }}
            appearance="alternative">
            Registrera
          </Text>
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
    color: 'red',
    elevation: 3,
  },
  loginButton: {
    marginTop: '20%',
    color: '#8F9BB3',
    elevation: 3,
  },
  captionContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
});

export default SignupForm;
