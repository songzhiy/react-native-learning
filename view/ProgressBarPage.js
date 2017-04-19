/**
 * Created by songzhiyang on 2017/4/14.
 */

import React, {Component} from 'react';
import {
    Button,
    ProgressBarAndroid,
    Text,
    View,
} from 'react-native';

export default class ProgressBarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress:0,
            showLoading:true,
        }
    }

    render() {
        return (
            <View>
                {this._returnView()}
                <ProgressBarAndroid styleAttr={'Horizontal'} progress={this.state.progress} indeterminate={false}/>
                <ProgressBarAndroid styleAttr={'Horizontal'} progress={1} indeterminate={false}/>
                <ProgressBarAndroid styleAttr={'SmallInverse'} color={'green'}/>
                <ProgressBarAndroid styleAttr={'LargeInverse'}/>

                <Button title={'开始下载'} onPress={()=>this._onDown()}/>
            </View>
        );
    }

    _onDown() {
        for (let i=0;i<=1000;i++) {
            this.setState({
               progress:i/1000,
            });
        }
        this.setState({
           showLoading:false,
        });
    }

    _returnView() {
        if (this.state.showLoading) {
            return(<ProgressBarAndroid styleAttr={'Inverse'} color={'red'}/>);
        }
        return null;
    }
}