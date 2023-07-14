import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAME} from '../../../constants/enums/routeNamesEnums';
import {styles} from './styles';
import {IMAGES} from '../../../constants/enums/imagesEnums';
import CustomInputField from '../../elements/CustomInputField';
import {ConstantText} from '../../../constants/enums/constantTexts';
import NormalButton from '../../elements/NormalButton';
import {useLoginApiMutation} from '../../../domain/redux/RTKQuery/login';
import {ILogin, ILoginCompo} from '../../../interface/LoginInterface';
import DeviceInfo from 'react-native-device-info';
import {
  appVersion,
  batteryLavel,
  brandName,
  deviceId,
  deviceModal,
} from '../../../utils/deviceInfoUtils';
import AppLoader from '../../elements/AppLoader';

const Login: React.FC<ILoginCompo> = props => {
  const [login, loginResult] = useLoginApiMutation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [userId, setUserId] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const [password, setPassword] = React.useState<string>('');
  const [showPassword, setShowPaaword] = useState(false);
  // const[loginData,setLoginData]=useState<ILogin[]>([])
  const navigation = useNavigation();

  const loginHandler = async () => {
    if (password.length === 0 && userId.length === 0) {
      Alert.alert('Required!', 'Please enter userId and Password');
      return;
    }
    try {
      const payload: ILogin = {
        AppVersion: appVersion(),
        batterypercentage: await batteryLavel(),
        DeviceBrand: brandName(),
        deviceid: await deviceId(),
        DeviceModel: deviceModal(),
        latitude: 55,
        longitude: 55,
        MobileTokenID: '14ebd909de1a7c72',
        Password: password,
        Username: userId,
      };
      await login(payload);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (loginResult.isLoading) {
      setIsLoading(true);
      setError('');
    } else if (loginResult.isSuccess) {
      if (loginResult?.data?.status) {
        console.log('Login successful:', loginResult.data);
        setIsLoading(false);
        navigation.navigate(ROUTE_NAME.PAGE2, { userData: loginResult.data.data,});
      } else {
        console.log('Login failed:', loginResult?.data?.message);
        setIsLoading(false);
        setError(loginResult?.data?.message);
        if (error) {
          Alert.alert('Login Failed', error);
        }
      }
    }
  }, [
    loginResult.isLoading,
    loginResult.isSuccess,
    loginResult.isError,
    loginResult.error,
    error,
  ]);

  return (
    <View style={styles.mainContanier}>
      {isLoading && <AppLoader/>}
      <View style={styles.mainView}>
        <Image source={IMAGES.LOGO} style={styles.imgLogo} />
        <View style={styles.InputView}>
          <CustomInputField
            imageSource={IMAGES.PROFILE}
            placeholder={ConstantText.UserID}
            onChangeText={(userId: string) => setUserId(userId)}
          />
          <CustomInputField
            imageSource={IMAGES.LOCK}
            placeholder={ConstantText.PASSWORD}
            secureTextEntry={!showPassword}
            onChangeText={(userId: string) => setPassword(userId)}
          />
        </View>
        <View style={styles.checkboxView}>
          <CheckBox
            disabled={false}
            value={showPassword}
            onValueChange={() => {
              setShowPaaword(!showPassword);
            }}
          />
          <View style={styles.paaViewTxt}>
            <Text style={styles.TxtStyl}>
              {showPassword ? ConstantText.HIDE : ConstantText.SHOW}
            </Text>
            <Text style={styles.TxtStyl1}>{ConstantText.FORGET}</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <NormalButton title={ConstantText.LOGIN} onPress={loginHandler} />
        </View>
      </View>
    </View>
  );
};

export default Login;
