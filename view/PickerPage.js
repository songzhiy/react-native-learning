/**
 * Created by songzhiyang on 2017/4/15.
 */

import React,{Component} from 'react';
import {
    View,
    Text, Picker,
} from 'react-native';

export default class PickerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue:'',
        }
    }

    _onValueChanged(value,position) {
        console.log("value -- " + value + " position --" + position);
        this.setState({
            selectValue:value,
        });
        //state的赋值是一个异步的过程
        console.log(this.state.selectValue);
    }

    render() {
        return(
            <Picker prompt={'科目'} mode={'dialog'} selectedValue={this.state.selectValue} onValueChange={(value,position) => this._onValueChanged(value,position)}>
                <Picker.Item label="Java" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker>
        );
    }
}