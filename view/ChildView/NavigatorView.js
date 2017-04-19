/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    Navigator,
    View,
    Text,
} from 'react-native';
import TuijianPage from "./TuijianPage";

export default class NavigatorView extends Component {

    constructor(props) {
        super(props);
        this.replace = this.replace.bind(this);
    }

    _renderScene(router, navigator) {
        return <router.component navigator={navigator} {...router.componentProps}/>
    }

    _configScene(router, routStack) {
        if (router.type === 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                renderScene={(router, navigator) => this._renderScene(router, navigator)}
                configureScene={(router, routStack) => this._configScene(router, routStack)}
                initialRoute={{component:TuijianPage}}/>
        );
    }

    replace(component) {
        this.refs.navigator.replace(component);
    }
}