/**
 * Created by songzhiyang on 2017/4/19.
 */

import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView,AppRegistry,
} from 'react-native';
import AsyncStorageUtils from "./utils/AsyncStorageUtils";
import DimensionsUtils from "./utils/DimensionsUtils";
import PixelratioUtils from "./utils/PixelratioUtils";
import VibrateUtils from "./utils/VibrateUtils";

export default class APITest extends Component {

    async _setValues() {
        AsyncStorageUtils.setItemPromise('class', '1111').then((value) => console.log('success'))
            .catch((error) => console.log(error.message)).done();
        AsyncStorageUtils.setItem('key','222222222222');
    }

    async _getValues() {
        AsyncStorageUtils.getItemPromise('class').then((value) => console.log('result -- ' + value))
            .catch((error) => console.log('error -- ' + error.message)).done();
        let value = await AsyncStorageUtils.getItem('key');
        console.log('value -- ' + value);
    }

    async _deleteValue() {
        AsyncStorageUtils.removeItemPromise('class').then((value) => console.log('success'))
            .catch((error) => console.log('error -- ' + error.message)).done();
        AsyncStorageUtils.removeItem('key');
    }

    async _getAllKeys() {
        AsyncStorageUtils.getAllKeysPromise().then((keys) => console.log(keys))
            .catch((error) => console.log('error -- ' + error.message)).done();
        let allKeys = await AsyncStorageUtils.getAllKeys();
        console.log('async -- ' + allKeys);
    }

    _clearAllItems() {
        AsyncStorageUtils.clearAllItems().then((value)=>console.log('success'))
            .catch((error) => console.log('error -- ' + error.message)).done();
    }

    _getWindowOptions() {
        let windowOptions = DimensionsUtils.getWindownOptions();
        console.log('width -- ' + windowOptions.width + ' -- height -- ' + windowOptions.height);
    }

    _getPixelratio() {
        let pixelratio = PixelratioUtils.getPixelratio();
        console.log('pixelratio -- ' + pixelratio);
    }

    _dp2px() {
        let px = PixelratioUtils.dp2px(100);
        console.log('dp2px -- ' + px);
    }

    _vibrate() {
        VibrateUtils.vibrate(1000)
    }

    _getRegistryOptions() {
        let appkeys = AppRegistry.getAppKeys();
        console.log('appkeys -- ' + appkeys);
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={styles.textStyle} onPress={() => this._setValues()}>存放数据</Text>
                    <Text style={styles.textStyle} onPress={() => this._getValues()}>获取数据</Text>
                    <Text style={styles.textStyle} onPress={() => this._deleteValue()}>删除数据</Text>
                    <Text style={styles.textStyle} onPress={() => this._getAllKeys()}>获取所有的keys</Text>
                    <Text style={styles.textStyle} onPress={() => this._clearAllItems()}>清除所有数据</Text>
                    <Text style={styles.textStyle} onPress={() => this._getWindowOptions()}>获取屏幕的宽高</Text>
                    <Text style={styles.textStyle} onPress={() => this._getPixelratio()}>获取屏幕的像素密度</Text>
                    <Text style={styles.textStyle} onPress={() => this._dp2px()}>dp2px</Text>
                    <Text style={styles.textStyle} onPress={() => this._vibrate()}>vibrate</Text>
                    <Text style={styles.textStyle} onPress={() => this._getRegistryOptions()}>appregistry</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 10,
        textAlign: 'center'
    }
});