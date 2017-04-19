/**
 * Created by songzhiyang on 2017/4/17.
 */

import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
} from 'react-native';

export default class CarListViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSorce: new ListView.DataSource({
                rowHasChanged: (r1, r2) => {
                    return r1 !== r2;
                },

                sectionHeaderHasChanged: (s1, s2) => {
                    return s1 !== s2;
                },

                getSectionHeaderData: (dataBlob, sectionID) => {
                    return dataBlob[sectionID];
                },

                getRowData: (dataBlob, sectionID, rowID) => {
                    return dataBlob[sectionID + ":" + rowID];
                }
            }),
        };
    }

    componentDidMount() {
        this._getListViewDataSource();
    }

    _getListViewDataSource() {
        let car = require('../car.json');
        let allData = car.data;
        let dataBlob = {}, sectionIds = [], rowIds = [];
        for (let i = 0; i < allData.length; i++) {
            let sectionCars = allData[i];
            sectionIds.push(i);
            dataBlob[i] = sectionCars.title;
            rowIds[i] = [];
            let allCars = sectionCars.cars;
            for (let j = 0; j < allCars.length; j++) {
                rowIds[i].push(j);
                dataBlob[i + ":" + j] = allCars[j];
            }
        }
        this.setState({
            dataSorce: this.state.dataSorce.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
        });
        console.log(dataBlob);
    }

    _getRenderRow(rowData) {
        return (
            <View>
                <Text>{rowData.name}</Text>
            </View>
        );
    }

    _getSectionHeader(sectionData, sectionId) {
        return (
            <View>
                <Text>{sectionData}</Text>
            </View>
        );
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSorce} renderRow={(rowData) => this._getRenderRow(rowData)}
                      stickySectionHeadersEnabled={true} initialListSize={20}
                      renderSectionHeader={(sectionData, sectionId) => this._getSectionHeader(sectionData, sectionId)}/>
        );
    }
}