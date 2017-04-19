/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    ViewPagerAndroid, ScrollView, StyleSheet,
} from 'react-native';

export default class TuijianPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0,
        }
    }

    render() {
        return (
            <View>
                <ScrollView horizontal={true}>
                    <Text style={{
                        fontWeight: this.state.currentPosition == 0 ? 'bold' : "normal",
                        padding: 10
                    }}>小电影</Text>
                    <Text style={{
                        fontWeight: this.state.currentPosition == 1 ? 'bold' : "normal",
                        padding: 10
                    }}>日本片</Text>
                    <Text style={{
                        fontWeight: this.state.currentPosition == 2 ? 'bold' : "normal",
                        padding: 10
                    }}>韩国片</Text>
                    <Text style={{
                        fontWeight: this.state.currentPosition == 3 ? 'bold' : "normal",
                        padding: 10
                    }}>美国片</Text>
                    <Text style={{
                        fontWeight: this.state.currentPosition == 4 ? 'bold' : "normal",
                        padding: 10
                    }}>欧洲片</Text>
                    <Text style={{
                        fontWeight: this.state.currentPosition == 5 ? 'bold' : "normal",
                        padding: 10
                    }}>中国片</Text>
                    <Text style={{
                        fontWeight: this.state.currentPosition == 6 ? 'bold' : "normal",
                        padding: 10
                    }}>火星片</Text>
                </ScrollView>
                <ViewPagerAndroid onPageSelected={(event) => this._onPageSelected(event)} initialPage={0} style={{height:200}}>
                    <View>
                        <Text>小电影</Text>
                    </View>
                    <View>
                        <Text>日本片</Text>
                    </View>
                    <View>
                        <Text>韩国片</Text>
                    </View>
                    <View>
                        <Text>美国片</Text>
                    </View>
                    <View>
                        <Text>欧洲片</Text>
                    </View>
                    <View>
                        <Text>中国片</Text>
                    </View>
                    <View>
                        <Text>火星片</Text>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }

    _onPageSelected(event) {
        this.setState({
            currentPosition: event.nativeEvent.position,
        });
    }
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
    }
});