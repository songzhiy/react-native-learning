/**
 * Created by songzhiyang on 2017/4/15.
 */

import React, {Component, PropTypes} from 'react';
import {} from 'react-native';
import {View} from "react-native";
import {Image} from "react-native";
import {Text} from "react-native";

export default class ChildViewComponent extends Component {

    static propTypes = {
        icon_uri: PropTypes.string.isRequired,
        icon_name: PropTypes.string.isRequired,
    };

    render() {
        return (
            <View>
                <Image source={{uri: this.props.icon_uri}} style={{width: 50, height: 50}}/>
                <Text style={{textAlign: 'center', marginTop: 5}}>{this.props.icon_name}</Text>
            </View>
        )
    }
}