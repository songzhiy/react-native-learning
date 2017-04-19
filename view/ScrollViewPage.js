/**
 * Created by songzhiyang on 2017/4/15.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView, ProgressBarAndroid, RefreshControl,
} from 'react-native';

export default class ScrollViewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLoading:false,
        }
    }

    _onRefreshing() {
        console.log('刷新中....');
    }

    _onScroll(event) {
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        if (y+height>contentHeight) {
            this.setState({
                showLoading:true,
            });
        }
    }

    render() {
        var refreshView = (
            <RefreshControl refreshing={this.state.showLoading} onRefresh={this._onRefreshing} title={'刷新中..'}>
            </RefreshControl>
        );

        return (
            <ScrollView refreshControl={refreshView} onScroll={(event)=>this._onScroll(event)}>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <ScrollView horizontal={true}>
                    <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                    <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                    <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                    <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                    <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                    <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                </ScrollView>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
                <Text style={{textAlign: 'center', padding: 20}}>测试数据</Text>
            </ScrollView>
        );
    }
}