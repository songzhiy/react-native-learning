/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Navigator, StyleSheet} from "react-native";
import Choose from "./view/Choose";
import * as Platform from "react-native/Libraries/Utilities/Platform.android";
import * as BackAndroid from "react-native/Libraries/Utilities/BackAndroid.android";

export default class CodeProject extends Component {

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress',this._onBackPress);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress',this._onBackPress);
        }
    }

    _onBackPress = () => {
        const navigator = this.refs.navigator;
        const router = navigator.getCurrentRoutes();
        if (router.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                style={{flex:1}}
                initialRoute={{component:Choose}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }

    //设置弹出配置
    configureScene(route,routStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passProps}/>
    }

    // //静态设置
    // renderScene(route, navigator) {
    //     if (route.name == 'TextPage') {
    //         return <TextPage navigator={navigator} {...route.passProps}/>
    //     } else if (route.name == 'ImagePage') {
    //         return <ImagePage navigator={navigator} {...route.passProps}/>
    //     }
    // }
}

AppRegistry.registerComponent('CodeProject', () => CodeProject);
