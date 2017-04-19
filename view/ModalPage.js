/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet, Button, ToastAndroid, Alert, TextInput,
} from 'react-native';

export default class ModalPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
            isTransparent: false,
            animationType: 'none',
            showText: '弹出Modal',
            transparentText: '透明Modal',
        };
    }

    _getButtons() {
        var buttons = [{
            text: '确定',
            onPress: () => ToastAndroid.show('Alert 确定', ToastAndroid.SHORT),
        }, {
            text: '取消',
            onPress: () => ToastAndroid.show('Alert 取消', ToastAndroid.SHORT),
        }];
        return buttons;
    }

    _showAlert() {
        Alert.alert(
            '我是标题',
            '我是内容',
            this._getButtons(),
        )
    }

    _showModal(isShow) {
        this.setState({
            isShowing: isShow,
        })
    }

    _onModalShow() {
        ToastAndroid.show('Modal onShow()', ToastAndroid.SHORT);
    }

    _onModalDismiss() {
        this._showModal(false);
        ToastAndroid.show('Modal onDismiss()', ToastAndroid.SHORT);
    }

    _transparentModal() {
        let transparent = this.state.isTransparent;
        this.setState({
            isTransparent: !transparent,
            transparentText: transparent ? '透明Modal' : '非透明Modal',
        })
    }

    _updateAnimationType(type) {
        this.setState({
            animationType: type,
        })
    }

    _onInputTextChanged(text) {
        if (text === 'none') {
            this._updateAnimationType('none');
        } else if (text === 'slide') {
            this._updateAnimationType('slide');
        } else if (text === 'fade') {
            this._updateAnimationType('fade');
        }
    }

    render() {
        return (
            <View style={{backgroundColor: 'red'}}>
                <Text style={styles.textStyle} onPress={() => this._showModal(true)}>{this.state.showText}</Text>
                <Text style={styles.textStyle}
                      onPress={() => this._transparentModal()}>{this.state.transparentText}</Text>
                <Text style={styles.textStyle}>请输入AnimationType(slide,fade,none),默认为none</Text>
                <TextInput onchange={(text) => this._onInputTextChanged(text)}></TextInput>
                <Text style={styles.textStyle} onPress={() => this._showAlert()}>弹出Alert</Text>
                <Modal animationType={this.state.animationType} transparent={this.state.isTransparent}
                       onShow={() => this._onModalShow()} visible={this.state.isShowing}
                       onRequestClose={() => this._onModalDismiss()}>
                    <View>
                        <Text>我就是个Model</Text>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 10,
        textAlign: 'center',
    }
});