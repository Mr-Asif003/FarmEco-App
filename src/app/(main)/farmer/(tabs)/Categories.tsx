import { FlatList, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../../components/molecules/Header';

// import auth from '../../../firebaseConfig'
import { db, auth } from '@/src/app/firebaseConfig';
import { useRouter } from 'expo-router';
import { doc, getDoc } from "firebase/firestore";

//icons
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import CropTypeSelection from '../(productListing)/CropTypes';
import SelectFruits from '../(productListing)/SelectFruits';

const Categories = () => {
  const router=useRouter();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));//to get collection from user i write this code
          if (userDoc.exists()) {
            const userData = userDoc.data();//to get data from user i write this code
            setUserName(userData.name || "User"); // Fallback to "User" if name is not set
          } else {
            console.warn("User data not found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.warn("No authenticated user.");
      }
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header userName={''} />
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.mainitems}>
          <View style={styles.userNameContainer}>
            <Text style={styles.HiText}>Hi</Text>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.chooseText}>Choose What are your looking for !</Text>
          </View>
          <View style={styles.categoriesContainer}>

            <View style={styles.selectCategoriesContainer} >



              <View style={styles.TopContainer}>
               
                <View style={styles.sellContainer}>
                  <View style={styles.sell}>

                    <View style={styles.title}><Text style={styles.titletext}>Sell</Text></View>
                    <View style={styles.option}>

                      <TouchableOpacity style={styles.threeDotView} onPress={()=>{
                        alert('Click the plus button add your sell your product now')
                      }}>
                        <Entypo name="dots-three-vertical" color="#000" size={24} />
                      </TouchableOpacity>


                      <TouchableOpacity style={styles.buttonView} onPress={()=>router.push('../(productListing)/SelectVeg')}>
                      <Octicons name="plus-circle" color="#000" size={24} />
                      </TouchableOpacity>

                    </View>

                  </View>
                </View>
                <View style={styles.iconcontainer}></View>

              </View>



              <View style={styles.TopContainer}>
               
               <View style={styles.sellContainer}>
                 <View style={styles.sell}>

                   <View style={styles.title}><Text style={styles.titletext}>Pre   List</Text></View>
                   <View style={styles.option}>

                     <TouchableOpacity style={styles.threeDotView}>
                       <Entypo name="dots-three-vertical" color="#000" size={24} />
                     </TouchableOpacity>


                     <TouchableOpacity style={styles.buttonView}>
                     <Octicons name="plus-circle" color="#000" size={24} />
                     </TouchableOpacity>

                   </View>

                 </View>
               </View>
               <View style={styles.iconcontainer}></View>

             </View>


             <View style={styles.TopContainer}>
               
               <View style={styles.sellContainer}>
                 <View style={styles.sell}>

                   <View style={styles.title}><Text style={{fontSize:18,fontWeight:'500'}}>Your      Upcoming Delivries</Text></View>
                   <View style={styles.option}>

                     <TouchableOpacity style={styles.threeDotView}>
                       <Entypo name="dots-three-vertical" color="#000" size={24} />
                     </TouchableOpacity>


                     <TouchableOpacity style={styles.buttonView}>

                     </TouchableOpacity>

                   </View>

                 </View>
               </View>
               <View style={styles.iconcontainer}></View>

             </View>


             <View style={styles.TopContainer}>
               
               <View style={styles.sellContainer}>
                 <View style={styles.sell}>

                   <View style={styles.title}><Text style={{fontSize:23}}>My     PreLists</Text></View>
                   <View style={styles.option}>

                     <TouchableOpacity style={styles.threeDotView}>
                       <Entypo name="dots-three-vertical" color="#000" size={24} />
                     </TouchableOpacity>


                     <TouchableOpacity style={styles.buttonView}>

                     </TouchableOpacity>

                   </View>

                 </View>
               </View>
               <View style={styles.iconcontainer}></View>

             </View>
               


 






            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#28Ac60'
  },
  headerContainer: {
    height: '14%',
  },
  MainContainer: {
    display: 'flex',
    height: 2000,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 10,
    margin: 5,
    marginBottom: 0,


  },
  mainitems: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    elevation: 3,
  },
  userNameContainer: {

  },
  chooseText: {
fontSize:20,
  fontWeight:'500'
  },
  HiText: {
  fontSize:25,
  fontWeight:'400'
  },
  userName: {
fontSize:25,
  fontWeight:'600'
  },
  categoriesContainer: {

    flex: 1,
    display: 'flex',
   

  },
  selectCategoriesContainer: {
    height: 400,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopContainer: {
   height:200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    marginBottom:0,
    marginTop:0,
  },

  sellContainer: {
    marginBottom:-170,
    height: 130,
    width: 130,
    backgroundColor: 'aqua',
  
    borderRadius: 20,
    padding: 5
  },
  sell: {
    height: '100%',
    width: '100%',
    flex: 1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  presell: {

  },
  upcomingDelivries: {

  },
  buttonView: {
    display:'flex',
    height: 35,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding:2,
    elevation:5,
    shadowOffset:{height:50,width:20},
    shadowOpacity:10,
  },
  option: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '30%'
  },
  title: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletext: {
    fontSize: 30,
    fontWeight: '600',

  },
  threeDotView: {
    padding: 5,
    marginTop: 4
  },
  iconcontainer: {
   
    height: 70,
    backgroundColor: 'green',
    width: 70,
    borderRadius: 50,

  },







})

export default Categories;

{/* <View style={styles.sell}>

<View style={styles.title}><Text style={styles.titletext}>Sell</Text></View>
<View style={styles.option}>

  <TouchableOpacity style={styles.threeDotView}>
    <Entypo name="dots-three-vertical" color="#000" size={24} />
  </TouchableOpacity>


  <TouchableOpacity style={styles.buttonView}>

  </TouchableOpacity>

</View>

</View> */}