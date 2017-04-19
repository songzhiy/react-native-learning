/**
 * Created by songzhiyang on 2017/4/15.
 */

import React, {Component} from 'react';
import {
    View,
    Text, Switch,
} from 'react-native';

export default class SwitchButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchState: false,
            switchDescription:'已关闭',
        }
    }

    _onValueChanged(value) {
        console.log(value);
        this.setState({
            switchState: value,
            switchDescription:value?'已开启':'已关闭',
        })
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Switch disabled={true}/>
                    <Text style={{marginLeft: 5}}>无法点击的开关</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Switch value={this.state.switchState} onValueChange={(value) => this._onValueChanged(value)}/>
                    <Text style={{marginLeft: 5}}>{this.state.switchDescription}</Text>
                </View>
            </View>
        );
    }
}