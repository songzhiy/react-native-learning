/**
 * Created by songzhiyang on 2017/4/21.
 */

import React, {Component} from 'react';
import {
    View, Text, Animated, Image,
} from 'react-native';

export default class AnimatedPage extends Component {

    // constructor(props) {
    //     super(props);
    //     // 初始状态
    //     this.state = {
    //         timingValue:new Animated.Value(0),
    //         translateValue: new Animated.ValueXY({x:0, y:0}), // 二维坐标
    //     };
    // }
    // render() {
    //     return (
    //         <Animated.View // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
    //             style = {{flex: 1,alignItems: 'center',justifyContent: 'center',
    //                 transform: [
    //                     {translateX: this.state.translateValue.x}, // x轴移动
    //                     {translateY: this.state.translateValue.y}, // y轴移动
    //                 ]
    //                 ,opacity:this.state.timingValue,
    //             }}>
    //             <Text>我就是用来测试的</Text>
    //         </Animated.View >
    //     );
    // }
    // startAnimation() {
    //     this.state.translateValue.setValue({x:0, y:0});
    //     Animated.sequence([
    //         Animated.timing(this.state.timingValue,{
    //                     toValue:1,
    //                     duration:3500,
    //                 }),
    //         Animated.decay( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
    //             this.state.translateValue,
    //             {
    //                 velocity: 5, // 起始速度，必填参数。
    //                 deceleration: 0.9, // 速度衰减比例，默认为0.997。
    //             }
    //         )
    //     ]).start();
    // }
    // componentDidMount() {
    //     this.startAnimation();
    // }


    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
            // position: new Animated.ValueXY({x:0,y:0}),
            position: new Animated.Value(0),
            timingValue: new Animated.Value(0),
            composeScale: new Animated.Value(0),
            composeOpacity: new Animated.Value(0),
            rotateValue:new Animated.Value(0),
        };
    }

    componentDidMount() {
        // this._SpringBounced();
        // this._Decay();
        // this._timingAnimated();
        // this._composeAnimation();
        this._roteInterpolateAnimation();
    }

    //时间动画
    _timingAnimated() {
        Animated.timing(this.state.timingValue, {
            toValue: 1,
            duration: 3500,
        }).start();
    }

    //初始速度 减速动画
    _Decay() {
        this.state.position.setValue(0);
        Animated.decay(
            this.state.position,
            {
                velocity: 10,
                deceleration: 0.96,
            }
        ).start();
    }

    //弹性动画
    _SpringBounced() {
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 0.8,
                friction: 1,
            }
        ).start();
    }

    _composeAnimation() {
        this.state.composeOpacity.setValue(0.2);
        this.state.composeScale.setValue(0.1);
        Animated.sequence([
            Animated.delay(3000),
            Animated.parallel([
                Animated.timing(this.state.composeOpacity, {
                    duration: 2000,
                    toValue: 1.0,
                }),
                Animated.spring(this.state.composeScale, {
                    toValue:1.0,
                })
            ]),
        ]).start();
    }

    //利用差值动画实现旋转功能
    _roteInterpolateAnimation() {
        this.state.rotateValue.setValue(0);
        Animated.timing(this.state.rotateValue,{
            duration:2000,
            toValue:1.0,
        }).start();
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center',}}>
                <Animated.Text style={{
                    // transform:[{scale:this.state.bounceValue}],
                    // transform:[{translateX: 0},{translateY:this.state.position.y},],
                    // transform: [{translateX: this.state.position}, {translateY: this.state.position}],
                    // opacity:this.state.timingValue,
                    // transform:[{scale:this.state.composeScale}],opacity:this.state.composeOpacity,
                    transform:[{
                        rotate:this.state.rotateValue.interpolate({
                            inputRange:[0,1],
                            outputRange:['0deg','360deg'],
                        }),
                    }]
                }}>啦啦啦</Animated.Text>
            </View>
        );
    }
}