/**
 * Created by songzhiyang on 2017/4/17.
 */

import React, {Component} from 'react';
import {
    View,
    ListView, Text, RefreshControl,
} from 'react-native';

var dataArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
var dataArray1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm'];
var data = dataArray;
var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

export class PullToRefreshPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(dataArray),
            isLoading: false,
        }
    }

    _getRowData(rowData) {
        return (
            <View>
                <Text style={{padding: 20}}>{rowData}</Text>
            </View>
        );
    }

    _getData() {
        data = [...data, ...dataArray];
        this.setState({
            dataSource: ds.cloneWithRows(data),
            isLoading: false
        })
    }

    _getLoadMoreData() {
        data = [...data, ...dataArray1];
        this.setState({
            dataSource: ds.cloneWithRows(data),
        })
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={(rowData) => this._getRowData(rowData)}
                      refreshControl={
                          <RefreshControl progressBackgroundColor={'red'} enabled={true}
                                          refreshing={this.state.isLoading}
                                          onRefresh={() => this._getData()}></RefreshControl>
                      } onEndReached={() => this._getLoadMoreData()} onEndReachedThreshold={10}>
            </ListView>
        );
    }
}
