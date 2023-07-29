import {Image, Text, View, useWindowDimensions} from 'react-native';
import React, {useEffect, useState, memo} from 'react';
import {styles} from './styles';
import BackButton from '../../elements/BackButton';
import {ConstantText} from '../../../constants/enums/constantTexts';
import {IMAGES} from '../../../constants/enums/imagesEnums';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  getDataFomLocalStore,
  getTitleOfTab,
} from '../../../utils/helperFunction';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../../elements/Card';

const MyJob = () => {
  const [syncLocalData, setSyncLocalData] = useState<any[]>([]);
  const checkInData = syncLocalData.filter(item => item.Status === 'CheckIn');
  //console.log('yash',pendingStatus)

  useEffect(() => {
    fetchSyncData();
  }, []);
  const fetchSyncData = async () => {
    try {
      const data = await getDataFomLocalStore('syncAllData');
      const parsedData = JSON.parse(data ?? '');
      setSyncLocalData(JSON.parse(parsedData));
    } catch (error) {
      console.log('Error while fetching user data:', error);
    }
  };

  const onEmptyList=()=>{
    return(
      <View style={styles.emptyView}>
        <Text style={styles.txt}>Data Not Found</Text>
      </View>
    )
  }

  const FirstRoute = () => (
    <View style={styles.screenStyl}>
      <FlatList
        data={syncLocalData}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.PreBookingID}
        ListEmptyComponent={() => <Text>Data Not Found</Text>}
      />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.screenStyl}>
      {checkInData ? (
        <FlatList
          data={checkInData}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={item => item.PreBookingID}
          ListEmptyComponent={onEmptyList}
        />
      ) : null}
    </View>
  );

  const renderScene = SceneMap({
    PENDING: FirstRoute,
    CHECKIN: SecondRoute,
    COMPLETED: SecondRoute,
    BOOKINGCOMPLETED: SecondRoute,
    CANCELLED: SecondRoute,
    NOTAVAILABLE: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'PENDING', title: 'PENDING'},
    {key: 'CHECKIN', title: 'CHECKIN'},
    {key: 'COMPLETED', title: 'COMPLETED'},
    {key: 'BOOKINGCOMPLETED', title: 'BOOKING-COMPLETED'},
    {key: 'CANCELLED', title: 'CANCELLED'},
    {key: 'NOTAVAILABLE', title: 'NOTAVAILABLE'},
  ]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerView}>
        <BackButton />
        <Text style={styles.myProfile}>{ConstantText.MY_JOB}</Text>
        <Image source={IMAGES.LOGO} style={styles.imgLogo} />
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={true}
        initialLayout={{width: layout.width}}
        renderTabBar={(props: any) => {
          return (
            <View>
              <TabBar
                {...props}
                style={{backgroundColor: 'white', height: 50}}
                indicatorStyle={{backgroundColor: 'black'}}
                scrollEnabled
                labelStyle={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'bold',
                  width: '100%',
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default memo(MyJob);
