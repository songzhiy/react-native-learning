/**
 * Created by songzhiyang on 2017/4/19.
 */

import {
    AsyncStorage,
} from 'react-native';

export default class AsyncStorageUtils {
    static setItemPromise(key, value) {
        return AsyncStorage.setItem(key, value);
    }

    static async setItem(key,value) {
        await AsyncStorage.setItem(key,value);
    }

    static getItemPromise(key) {
        return AsyncStorage.getItem(key);
    }

    static async getItem(key) {
        return await AsyncStorage.getItem(key);
    }

    static removeItemPromise(key) {
        return AsyncStorage.removeItem(key);
    }

    static async removeItem(key) {
        await AsyncStorage.removeItem(key);
    }

    static getAllKeysPromise() {
        return AsyncStorage.getAllKeys();
    }

    static async getAllKeys() {
        return await AsyncStorage.getAllKeys();
    }

    static clearAllItems() {
        return AsyncStorage.clear();
    }
}