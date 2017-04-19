/**
 * Created by songzhiyang on 2017/4/15.
 */

import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet, TouchableOpacity, TouchableNativeFeedback,
} from 'react-native';

export default class TouchablePage extends Component {
    render() {

        //TouchableNativeFeedback可能会遇到水波纹点击崩溃的问题 原因是没有嵌套view 具体原因不明 => https://github.com/facebook/react-native/issues/5823
        return (
            <View>
                <TouchableHighlight style={{backgroundColor: 'yellow'}} underlayColor={'green'} activeOpacity={0.5}
                                    onPress={() => {
                                    }}>
                    <View style={{padding: 10}}>
                        <Text>TouchableHighlight---设置底色高亮</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity style={{backgroundColor: 'green'}} activeOpacity={0.2}>
                    <Text style={{padding: 10}}>TouchableOpacity---降低透明度</Text>
                </TouchableOpacity>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red', false)} onPress={() => {
                }}>
                    <View>
                        <Text style={{padding: 10}}>TouchableNativeFeedback---特殊效果，如水波纹</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
