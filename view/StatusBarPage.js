/**
 * Created by songzhiyang on 2017/4/18.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
} from 'react-native';

export default class StatusBarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden:false,
            translucent:false,
    }
    }

    _hidden() {
        this.setState({
            hidden:!this.state.hidden,
        })
    }

    _transparent() {
        this.setState({
            translucent:!this.state.translucent,
        })
    }

    render() {
        return(
            <View>
                <StatusBar hidden={this.state.hidden} backgroundColor={'red'} translucent={this.state.translucent}/>
                <Text style={styles.textStyle} onPress={() => this._hidden()}>隐藏</Text>
                <Text style={styles.textStyle} onPress={() => this._transparent()}>透明</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle : {
        padding:10,
        textAlign:'center'
    }
});