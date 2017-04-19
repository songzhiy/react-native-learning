/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    View, Text, DatePickerAndroid, ToastAndroid
} from 'react-native';

var dateObj = {
    action: null,
    year: 1970,
    month: 0,
    day: 0,
};

export default class DatePickerPage extends Component {


    async _showDatePickerView() {
        try {
            dateObj = await DatePickerAndroid.open({
                date: new Date(),
                minDate: new Date(1991, 1, 1),
                maxDate: new Date(2017, 11, 31),
                mode: 'spinner',
            });
        } catch (e) {
            console.log(e.message);
        }
        ;
        if (dateObj.action !== DatePickerAndroid.dismissedAction) {
            ToastAndroid.show(dateObj.year + "-" + dateObj.month + "-" + dateObj.day, ToastAndroid.SHORT);
        }

    }

    render() {
        return (
            <View>
                <Text style={{padding: 10, textAlign: 'center'}} onPress={() => this._showDatePickerView()}>点击我，弹出一个DatePickerView</Text>
            </View>
        );
    }
}