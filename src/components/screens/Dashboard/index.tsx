import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {COLORS} from '../../../constants/colors/Colors';
import {IMAGES} from '../../../constants/enums/imagesEnums';
import {styles} from './styles';
import {ConstantText} from '../../../constants/enums/constantTexts';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAME} from '../../../constants/enums/routeNamesEnums';
import {RemoveLocallyData, StoreDataLocally} from '../../../utils/helperFunction';
import {useSyncUpdateMutation} from '../../../domain/redux/RTKQuery/syncUpdate';
import {ISyncUpdate} from '../../../interface/LoginInterface';
import {getDataFomLocalStore} from '../../../utils/helperFunction';
import {
  appVersion,
  batteryLavel,
  brandName,
  deviceId,
  deviceModal,
} from '../../../utils/deviceInfoUtils';
const Dashboard: React.FC = () => {
  const [syncUpdateApi, syncUpdateApiResult] = useSyncUpdateMutation();
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [showTime, setShowTime] = React.useState(false);
  const [userData, setUserData] = useState<any | null>([]);
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(false);
  //console.log('@@@!!hdbyashhdbhc', syncUpdateApiResult);

  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const data = await getDataFomLocalStore('data');
      const parsedData = JSON.parse(data ?? '');
      setUserData(parsedData);
      console.log('User Data:', parsedData);
    } catch (error) {
      console.log('Error while fetching user data:', error);
    }
  };

  const updateTime = async () => {
    try {
      const payload: ISyncUpdate = {
        AppVersion: appVersion(),
        batterypercentage: await batteryLavel(),
        DeviceBrand: brandName(),
        deviceid: await deviceId(),
        DeviceModel: deviceModal(),
        latitude: 55,
        longitude: 55,
        PhlebotomistID: userData?.[0]?.PhlebotomistID,
      };
      await syncUpdateApi(payload);
    } catch (error) {
      console.log('error', error);
    }
    setCurrentTime(new Date());
    setShowTime(true);
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await RemoveLocallyData('data');
              navigation.navigate(ROUTE_NAME.LOGIN);
            } catch (error) {
              console.log('Error clearing data:', error);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  const saveUserDataLocally = async () => {
    try {
      if (syncUpdateApiResult && syncUpdateApiResult.data) {
        await StoreDataLocally(
          'syncAllData',
          JSON.stringify(syncUpdateApiResult?.data),
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (syncUpdateApiResult.isLoading) {
      setIsLoading(true);
      setError('');
    } else if (syncUpdateApiResult.isSuccess) {
     
        console.log('SYNC DATA####:', syncUpdateApiResult.data);
        saveUserDataLocally();
        setIsLoading(false);
      } 
      else if(syncUpdateApiResult.isError){
        setIsLoading(false);
          setError('Somthing went wrong');
          Alert.alert('Failed!!', error);
        }
      
    
  }, [
    syncUpdateApiResult.isLoading,
    syncUpdateApiResult.isSuccess,
    syncUpdateApiResult.isError,
    syncUpdateApiResult.error,
    error,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image source={IMAGES.LOGO} style={styles.imgLogo} />
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE_NAME.MY_PROFILE)}
          style={[styles.column, styles.firstColumn]}>
          <Image source={IMAGES.MYPROFILE} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.MY_PROFILE}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE_NAME.MY_JOB)}
          style={styles.column}>
          <Image source={IMAGES.MYJOB} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.MY_JOB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Under Development!', ' please wait..... ')
          }
          style={[styles.column, styles.lastColumn]}>
          <Image source={IMAGES.COMINGSOON} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.COMMING_SOON}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={updateTime}
          style={[styles.column, styles.firstColumn]}>
          <Image source={IMAGES.SYNCUPDATE} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.SYNC_UPDATE}</Text>
          {showTime && (
            <Text style={styles.clockText}>{formatTime(currentTime)}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Under Development!', ' please wait..... ')
          }
          style={styles.column}>
          <Image source={IMAGES.COMINGSOON} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.COMMING_SOON}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Under Development!', ' please wait..... ')
          }
          style={[styles.column, styles.lastColumn]}>
          <Image source={IMAGES.COMINGSOON} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.COMMING_SOON}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Under Development!', ' please wait..... ')
          }
          style={[styles.column, styles.firstColumn]}>
          <Image source={IMAGES.COMINGSOON} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.COMMING_SOON}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Under Development!', ' please wait..... ')
          }
          style={styles.column}>
          <Image source={IMAGES.COMINGSOON} style={styles.instyl} />
          <Text style={styles.text}>{ConstantText.COMMING_SOON}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={[styles.column, styles.lastColumn]}>
          <Image source={IMAGES.SIGNOUT} style={styles.instyl} />

          <Text style={styles.text}>{ConstantText.SIGN_OUT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
