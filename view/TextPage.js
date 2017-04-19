import React, {Component} from "react";
import {Text, View, StyleSheet, ScrollView,AppState,NetInfo} from "react-native";
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";
import Person from './adapter/Person'
export default class TextPage extends Component {

    _onAppStateChangeListener() {
        console.log(AppState.currentState);
    }

    _onNetInfoChangeListener() {
        NetInfo.isConnectionExpensive().then((isExpensive) => console.log('isExpensive -- '+isExpensive));
        NetInfo.fetch().done((state) => console.log('net state -- ' + state));
        NetInfo.isConnected.fetch().done((isConnected) => console.log('isConnected -- ' + isConnected));
    }

    componentDidMount() {
        let person = new Person();
        ToastAndroid.show(person.getName(),ToastAndroid.SHORT);

        AppState.addEventListener('change',this._onAppStateChangeListener);
        NetInfo.addEventListener('change',this._onNetInfoChangeListener)
    }

    componentWillUnmount() {
        AppState.removeEventListener('change',this._onAppStateChangeListener);
        NetInfo.removeEventListener('change',this._onNetInfoChangeListener);
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={styles.outText}>I am root text!<Text style={styles.inText}>I am child
                        text!</Text></Text>
                    <Text style={styles.outText}>Second Lines</Text>
                    <Text style={{color: 'red'}}>My Text One红色</Text>
                    <Text style={{color: 'green', fontSize: 24}}>My Text Two 绿色和字体大小</Text>
                    <Text style={{color: 'green', fontFamily: 'Cochin'}}>My Text Three 绿色和字体名称</Text>
                    <Text style={{color: 'pink', fontWeight: 'bold'}}>My Text Four 粉色和加粗</Text>
                    <Text style={{color: 'gray', fontStyle: 'italic'}}>My Text Five 灰色和斜体</Text>
                    <Text style={{fontStyle: 'italic', textAlign: 'center'}}>My Text Six 居中和斜体</Text>
                    <Text style={{padding: 20}} numberOfLines={1}>测试行数My Text Six居中和斜体<Text
                        style={{fontStyle: 'italic', textAlign: 'center'}}>My Text Six居中和斜体</Text></Text>
                    <Text style={{paddingLeft: 50, paddingTop: 50}}>设置文本的间距，距左，距顶部50</Text>
                    <Text style={{lineHeight: 50}} numberOfLines={2}>测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
                        测试行高</Text>
                    <Text style={{lineHeight: 50}} numberOfLines={2}>测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
                        测试行高</Text>
                    <Text style={{lineHeight: 50}} numberOfLines={2}>测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
                        测试行高</Text>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    outText: {
        color: 'red',
        fontSize: 24,
        padding: 40,
        textAlign: 'justify',
        backgroundColor: '#fff333',
        // textDecorationLine:'underline',
    },
    inText: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold',
    }
});