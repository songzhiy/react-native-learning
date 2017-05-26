/**
 * Created by songzhiyang on 2017/4/20.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    LayoutAnimation,
    Platform,
    UIManager,
    InteractionManager, ScrollView,
} from 'react-native';

var animation = {
    duration: 500,
    create: {
        type: LayoutAnimation.Types.linear,//线性
        property: LayoutAnimation.Properties.scaleXY,//由小变大
    },
    update: {
        type: LayoutAnimation.Types.spring,//一种曲线
        property: LayoutAnimation.Properties.scaleXY,//由小变大
    },
    delete: {
        type: LayoutAnimation.Types.linear,//线性
        property: LayoutAnimation.Properties.opacity,//淡入淡出
    }
}

export default class LayoutAnimationPage extends Component {
    timer = null;
    interval = null;

    constructor(props) {
        super(props);
        this.state = {
            views: [],
            number: 0,
        }
        this._doCommonOperation = this._doCommonOperation.bind(this);
        this._doInteraction = this._doInteraction.bind(this);
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.timer = setTimeout(()=>console.log('setTimeOut -- 10000'),10000);
        this.interval = setInterval(() => console.log('setInterval -- 2000'),2000);
    }

    componentWillUnmount() {
        if (this.timer !== null) {
            clearTimeout(this.timer);
        }
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
    }

    componentWillUpdate() {
        // LayoutAnimation.easeInEaseOut();
        let config = LayoutAnimation.create(2000, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity);
        LayoutAnimation.configureNext(animation);
        this._doCommonOperation();//这种操作会使得动画停止着 先执行打印的操作
        // this._doInteraction();//这种操作会打印一部分操作，然后完成动画，继续打印
    }

    _onViewLayout() {
        console.log('onLayout');
    }

    _addViews() {
        this.setState({
            number: this.state.number + 1,
        });
        this.state.views.push(<View key={'child_' + this.state.number} onLayout={this._onViewLayout}><Text
            style={{padding: 10, textAlign: 'center'}}>{this.state.number}</Text></View>)
    }

    _doInteraction() {
        InteractionManager.runAfterInteractions(() => {
            for (let i = 0; i < 10000; i++) {
                console.log(i);
            }
        });
    }

    _doCommonOperation() {
        for (let i = 0; i < 10000; i++) {
            console.log(i);
        }
    }

    _removeViews() {
        this.setState({
            number: this.state.number - 1,
        });
        this.state.views.pop();
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{padding: 10, textAlign: 'center'}} onPress={() => this._addViews()}>add</Text>
                    <Text style={{padding: 10, textAlign: 'center'}} onPress={() => this._removeViews()}>remove</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        {this.state.views}
                    </View>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text><Text
                    style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>

                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>
                    <Text style={{padding: 10, textAlign: 'center'}}>测试填充数据</Text>


                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>
                    <Text>测试填充数据</Text>


                </View>
            </ScrollView>
        )
    }
}