/**
 * Created by songzhiyang on 2017/4/14.
 */
import React, {Component} from 'react';
import {
    ScrollView,
    Text, TextInput,
    View, StyleSheet, Image,
} from 'react-native';

export default class TextInputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textContent: '',
        }
    }

    render() {
        return (
            <ScrollView keyboardDismissMode={'on-drag'}>
                <View>
                    <TextInput style={{width: 200, borderWidth: 2, borderColor: 'gray'}}
                               onChangeText={(value) => this._textChanged(value)}
                    />
                    <Text style={{backgroundColor: 'yellow', height: 50}}>{this.state.textContent}</Text>
                    <Text style={{textAlign: 'center', marginTop: 30}}>多行输入的案例</Text>
                    <TextInput style={{height: 50, borderWidth: 1, borderColor: 'gray'}} multiline={true}
                               defaultValue={'多行输入的案例'}/>
                    <Text style={{textAlign: 'center', marginTop: 30}}>自动获取焦点案例</Text>
                    <TextInput autoFocus={true} placeholder={'自动获取焦点'} autoCorrect={true} onBlur={this._onLoseFocus}/>
                    <Text style={{textAlign: 'center', marginTop: 30}}>不可编辑案例</Text>
                    <TextInput placeholder={'不可编辑案例'} editable={false}/>

                    <Text style={{textAlign: 'center', fontSize: 24}}>模拟一下QQ登录的页面</Text>
                    <View>
                        <View style={styles.viewContainer}>
                            <Image source={require('../image/ic_notification.png')} style={{width: 60, height: 60}}/>
                        </View>
                        <View style={{backgroundColor: "#f4f4f4", marginTop: 10, height: 1}}/>
                        <TextInput style={{
                            height: 50,
                            padding: 10,
                            textAlign: 'center',
                        }}
                                   placeholder={'美办号/手机号/邮箱'} underlineColorAndroid={'transparent'}/>
                        <View style={{backgroundColor: "#f4f4f4", height: 1}}/>
                        <TextInput
                            style={{
                                height: 50,
                                padding: 10,
                                textAlign: 'center',
                            }}
                            placeholder={'密码'} keyboardType={'numeric'}
                            secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                        <View style={{backgroundColor: "#f4f4f4", height: 1}}/>
                        <Text style={{
                            textAlign: 'center',
                            backgroundColor: '#63B8FF',
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 10,
                            padding: 10,
                        }}>登录</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }

    _textChanged(value) {
        console.log(value);
        this.setState({
            textContent: value,
        })
    }

    _onLoseFocus() {
        console.log('失去焦点了');
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    }
});