/**
 * Created by songzhiyang on 2017/4/15.
 */

import React, {Component} from 'react';
import {
    View,
    ListView, Text,
} from 'react-native';

var dataBlob = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    '0:0': 'row00',
    '0:1': 'row01',
    '0:2': 'row02',
    '0:3': 'row03',
    '0:4': 'row04',
    '0:5': 'row05',
    '1:0': 'row10',
    '1:1': 'row11',
    '1:2': 'row12',
    '1:3': 'row13',
    '1:4': 'row14',
    '1:5': 'row15',
    '2:0': 'row20',
    '2:1': 'row21',
    '2:2': 'row22',
    '2:3': 'row23',
    '2:4': 'row24',
    '2:5': 'row25',
    '3:0': 'row30',
    '3:1': 'row31',
    '3:2': 'row32',
    '3:3': 'row33',
    '3:4': 'row34',
    '3:5': 'row35',
}, sectionIds = [0, 1, 2, 3], rowIds = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]];
var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => {
        console.log("rowHasChanged");
        return r1 !== r2;
    },
    sectionHeaderHasChanged: (s1, s2) => {
        console.log("sectionHeaderHasChanged");
        return s1 !== s2;
    },
    getSectionHeaderData: (dataBlob, sectionID) => {
        console.log("getSectionHeaderData");
        return dataBlob[sectionID];
    },
    getRowData: (dataBlob, sectionId, rowId) => {
        console.log("getRowData");
        return dataBlob[sectionId + ':' + rowId];
    },
});

export default class ListViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSorce : ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
        }
    }

    _onEndReached() {
        console.log("------已经到底啦 下拉加载更多啦");
    }

    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSorce} renderRow={(rowData) => {
                    return (
                        <Text style={{padding: 20, textAlign: 'center'}}>{rowData}</Text>
                    );
                {/*}} renderHeader={() => {*/}
                    {/*return (*/}
                        {/*<Text>我是header</Text>*/}
                    {/*);*/}
                {/*}} renderFooter={() => {*/}
                    {/*return (*/}
                        {/*<Text>我是footer</Text>*/}
                    {/*);*/}
                }} contentContainerStyle={{justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}} stickySectionHeadersEnabled={true} initialListSize={10}
                          onEndReachedThreshold={1000} onEndReached={() => this._onEndReached()}
                          // renderSectionHeader={(sectionData, sectionID) => {
                          //     return (
                          //         <View>
                          //             <Text>{sectionData}---{sectionID}</Text>
                          //         </View>
                          //     );
                          // }}
                />
            </View>
        );
    }
}