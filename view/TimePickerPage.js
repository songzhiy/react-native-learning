/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TimePickerAndroid,
    ToastAndroid,
} from 'react-native';

var time = {
    action:null,
    hour:0,
    minute:0,
};

export default class TimePickerPage extends Component {

    async _showTimePicker() {
        time = await TimePickerAndroid.open({
            is24Hour:true,
        });
        if (time.action !== TimePickerAndroid.dismissedAction) {
            ToastAndroid.show(time.hour + ":" + time.minute,ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <View>
                <Text style={{padding: 10, textAlign: 'center'}} onPress={() => this._showTimePicker()}>点击我，弹出一个时间选择器!</Text>
            </View>
        );
    }
}