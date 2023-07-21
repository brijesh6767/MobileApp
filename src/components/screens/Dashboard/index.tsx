import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {COLORS} from '../../../constants/colors/Colors';
import {IMAGES} from '../../../constants/enums/imagesEnums';
import {styles} from './styles';
import {ConstantText} from '../../../constants/enums/constantTexts';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAME} from '../../../constants/enums/routeNamesEnums';
import {RemoveLocallyData} from '../../../utils/helperFunction';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [showTime, setShowTime] = React.useState(false);

  const updateTime = () => {
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
