/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    Navigator,
    View, StyleSheet,
    Text, DrawerLayoutAndroid,
} from 'react-native';
import NavigatorView from "./ChildView/NavigatorView";
import ShipinPage from "./ChildView/ShipinPage";
import YinyuePage from "./ChildView/YinyuePage";
import TushuPage from "./ChildView/TushuPage";

export default class NavigatorPage extends Component {

    _replaceView(component) {
        this.refs.drawerLayout.closeDrawer();
        this.refs.navigatorView.replace(component);
    }

    constructor(props) {
        super(props);
        this._getNavigationView = this._getNavigationView.bind(this);
    }

    _getNavigationView() {
        return (
            <View style={{
                height: '100%',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Text style={styles.textStyle} onPress={
                    () => this._replaceView(
                        {
                            component: ShipinPage,
                            type: 'Bottom'
                        })
                }>推荐</Text>
                <Text style={styles.textStyle} onPress={() => this._replaceView(
                    {
                        component: ShipinPage,
                        type: 'Bottom'
                    }
                )}>视频</Text>
                <Text style={styles.textStyle} onPress={() => this._replaceView(
                    {
                        component: YinyuePage,
                        type: 'Right'
                    })}>音乐</Text>
                <Text style={styles.textStyle} onPress={() => this._replaceView(
                    {
                        component: TushuPage,
                        type: 'Bottom'
                    })}>图书</Text>
            </View>
        );
    }

    render() {
        return (
            <DrawerLayoutAndroid ref="drawerLayout" renderNavigationView={this._getNavigationView} drawerWidth={300}>
                <NavigatorView ref="navigatorView"/>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
    }
});