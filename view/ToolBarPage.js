/**
 * Created by songzhiyang on 2017/4/15.
 */

import React, {Component} from 'react';
import {
    View,
    Text, ToolbarAndroid, ToastAndroid,
} from 'react-native';

export default class ToolBarPage extends Component {
    _onActionSelected(position) {
        if (position === 0) {
            ToastAndroid.show('点击了Settings!', ToastAndroid.LONG);
        } else if (position === 1) {
            ToastAndroid.show('点击了Test!', ToastAndroid.LONG);
        }
    }

    render() {
        //ToolBar必须给个高度才能显示
        return (
            <ToolbarAndroid navIcon={require('../image/ic_notification.png')} title={'美办'}
                            actions={[{
                                title: 'Settings',
                                icon: require('../image/ic_notification.png'),
                                show: 'always',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'always',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'ifRoom',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'ifRoom',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'ifRoom',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'ifRoom',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'ifRoom',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'ifRoom',
                                showWithText: true,
                            }, {
                                title: 'Test',
                                icon: require('../image/ic_notification.png'),
                                show: 'ifRoom',
                                showWithText: true,
                            }]}
                            subtitle={'副标题'} style={{height: 56, backgroundColor: 'yellow'}}
                            onActionSelected={(position) => this._onActionSelected(position)}>
                <Text>我只是个标题而已</Text>
            </ToolbarAndroid>
        );
    }
}