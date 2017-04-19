/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    View, Text, Clipboard, ToastAndroid
} from 'react-native';

export default class ClipboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clipboardText : '',
        }
    }

    async _copyText2Clipboard() {
        let text = '哈哈，我就是用来测试粘贴版本的';
        console.log(text);
        Clipboard.setString(text);
        try {
            var textString = await Clipboard.getString();
            this.setState({
                clipboardText:textString,
            });
        } catch (e) {
            this.setState({
                clipboardText:e.message,
            })
        }
        ToastAndroid.show(text,ToastAndroid.LONG);

        this._asyncFunctionTest();
    }

    _asyncFunctionTest() {
        console.log('----------------');
        this._countNumber().then(()=>console.log('test'));
        console.log('----------------');
    }

    async _countNumber() {
        var number1 = await 1+1;
        console.log(number1);
        var number2 = await number1+1;
        console.log(number2);
        var number3 = await number2+1;
        console.log(number3);
    }

    render() {
        return(
            <View>
                <Text>{this.state.clipboardText}</Text>
                <Text style={{marginTop: 20}} onPress={() => this._copyText2Clipboard()}>哈哈，我就是用来测试粘贴版本的</Text>
            </View>
        );
    }
}