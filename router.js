import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LogIn from './screens/login.js';
import SignUp from './screens/signUp.js';
import Landing from './screens/landing.js'
import Home from './screens/home.js'
import House from './screens/house.js'
import HouseForm from './screens/houseForm.js'
import ActivityForm from './screens/activityForm.js'
import Activity from './screens/activity.js'
import PetForm from './screens/petForm.js'
import Pets from './screens/pets.js'
import Activities from './screens/activities.js'
import Owner from './screens/owners.js'
import OwnerInfo from './screens/ownerInfo.js'

import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


const RouterComponent = () => {

    return (
        <Router>
            <Stack key="root" showNavigationBar={false}>
                <Scene key="landing" component={Landing} title="" initial />
                <Scene key="login" renderLeftButton={() => null} component={LogIn} title="" />
                <Scene key="signUp" renderLeftButton={() => null} component={SignUp} title="" />
                <Scene key="home" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={Home} title="" />
                <Scene key="house" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={House} title="" />
                <Scene key="houseForm" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={HouseForm} title="" />
                <Scene key="activityForm" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={ActivityForm} title="" />
                <Scene key="activity" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={Activity} title="" />
                <Scene key="petForm" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={PetForm} title="" />
                <Scene key="pets" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={Pets} title="" />
                <Scene key="activities" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={Activities} title="" />
                <Scene key="owner" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={Owner} title="" />
                <Scene key="ownerInfo" renderLeftButton={() => <TouchableOpacity onPress={() => Actions.popTo('home')}><Image source={require('./public/psDog.png')} style={{width: 50, height: 40, marginLeft: 5}}/></TouchableOpacity>} component={OwnerInfo} title="" />
            </Stack>
        </Router>
    )
}

export default RouterComponent;
