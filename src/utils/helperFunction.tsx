import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreDataLocally = async (key: any, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getDataFomLocalStore = async (key: any) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const RemoveLocallyData = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};


export const getTitleOfTab =(route:any)=>{
if(route.key ==='PENDING'){
  return 'PENDING';
}
else if (route.key ==='CHECKIN'){
  return 'CHECKIN';
}
else if (route.key ==='COMPLETED'){
  return 'COMPLETED';
}
else if (route.key ==='BOOKINGCOMPLETED'){
  return 'BOOKINGCOMPLETED';
}
else if (route.key ==='CANCELLED'){
  return 'CANCELLED';
}
else if (route.key ==='NOTAVAILABLE'){
  return 'NOTAVAILABLE';
}

}




