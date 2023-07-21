import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getDataFomLocalStore} from '../../../utils/helperFunction';
import {IMAGES} from '../../../constants/enums/imagesEnums';
import {styles} from './styles';

import {useMyProfileMutation} from '../../../domain/redux/RTKQuery/myProfile';

const MyProfile: React.FC = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState<any | null>([]);
  const [myProfileApi, myProfileApiResult] = useMyProfileMutation();

  useEffect(() => {
    if (userData?.[0]?.PhlebotomistID) {
      profileData();
    }
  }, [userData]);

  const profileData = async () => {
    try {
      const formData = new FormData();
      formData.append('PhelbotomistID', userData?.[0]?.PhlebotomistID);
      await myProfileApi(formData);
    } catch (error) {
      console.log('API Error:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const data = await getDataFomLocalStore('data');
      const parsedData = JSON.parse(data ?? '');
      setUserData(parsedData);
    } catch (error) {
      console.log('Error while fetching user data:', error);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const ProfileData = myProfileApiResult?.data;

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerView}>
        <Pressable onPress={handleGoBack}>
          <Image source={IMAGES.BACKICON} style={styles.imgLogo} />
        </Pressable>
        <Text style={styles.myProfile}>Profile</Text>
      </View>
      <View style={styles.imageMain}>
        <View style={styles.imageView}>
          <Pressable style={styles.imageContainer}>
            {IMAGES.MYPROFILE ? (
              <Image source={IMAGES.MYPROFILE} style={styles.image} />
            ) : (
              <View style={styles.imagePlaceholder} />
            )}
          </Pressable>
          <View style={styles.nameView}>
            <Text style={styles.textStyle}>
              Name:{' '}
              <Text style={{color: '#1D79CB'}}>
                {ProfileData?.data[0]?.NAME}
              </Text>
            </Text>
            <View style={styles.marginTop} />
            <Text style={styles.textStyle}>
              Age:{' '}
              <Text style={{color: '#1D79CB'}}>
                {ProfileData?.data[0]?.age}
              </Text>
            </Text>
            <View style={styles.marginTop} />
            <Text style={styles.textStyle}>
              Gender:{' '}
              <Text style={{color: '#1D79CB'}}>
                <Text style={{color: '#1D79CB'}}>
                  {ProfileData?.data[0]?.gender}
                </Text>
              </Text>
            </Text>
            <View style={styles.marginTop} />
            <Text style={styles.textStyle}>
              Mobile No:{' '}
              <Text style={{color: '#1D79CB'}}>
                <Text style={{color: '#1D79CB'}}>
                  {ProfileData?.data[0]?.mobile}
                </Text>
              </Text>
            </Text>
            <View style={styles.marginTop} />
            <Text style={styles.textStyle}>
              D.O.B:{' '}
              <Text style={{color: '#1D79CB'}}>
                {ProfileData?.data[0]?.dob}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.emailView}>
          <Text style={styles.textStyle}>
            Email:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.email}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Blood Group:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.bloodgroup}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Address:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.address}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Qualification:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.Qualification}
            </Text>
          </Text>
          <View style={styles.emailTop} />
        </View>
        <View style={styles.farmView}>
          <View style={styles.detailsView}>
            <Text style={styles.farmDetails}>Farm Details</Text>
          </View>
          <Text style={styles.textStyle}>
            Document Type:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.DucumentType}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Document No:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.DucumentNo}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Vehicel No:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.Vehicle_num}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Driving Licence:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.DrivingLicence}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Pan No:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.panno}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Joining Date:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.joiningdate}
            </Text>
          </Text>
          <View style={styles.emailTop} />
          <Text style={styles.textStyle}>
            Working City:{' '}
            <Text style={{color: '#1D79CB'}}>
              {ProfileData?.data[0]?.workingcity}
            </Text>
          </Text>
          <View style={styles.emailTop} />
        </View>
      </View>
    </View>
  );
};

export default MyProfile;
