/**
 * Created by songzhiyang on 2017/4/20.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    LayoutAnimation,
    UIManager,
    Platform,
} from 'react-native';

export default class ComplexLayoutAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redWidth:120,
            greenWidth:120,
            blueWidth:120,
            headerMarginTop:0,
        }
    }

    _on0Press() {
        this.setState({
            redWidth:120,
            greenWidth:120,
            blueWidth:120,
            headerMarginTop:0
        });
    }

    _on1Press() {
        this.setState({
            blueWidth:170,
            greenWidth:170,
            redWidth:20,
            headerMarginTop:50,
        });
    }

    _on2Press() {
        this.setState({
            redWidth:20,
            greenWidth:20,
            blueWidth:320,
            headerMarginTop:100,
        });
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        console.log('------');
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }

    render() {
        return(
            <View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textStyle} onPress={()=>this._on0Press()}>1</Text>
                    <Text style={styles.textStyle} onPress={()=>this._on1Press()}>2</Text>
                    <Text style={styles.textStyle} onPress={()=>this._on2Press()}>3</Text>
                </View>
                <View style={{marginTop:10,flexDirection:'row'}}>
                    <View style={{backgroundColor:'red',width:this.state.redWidth,height:50}}></View>
                    <View style={{backgroundColor:'green',width:this.state.greenWidth,height:50}}></View>
                    <View style={{backgroundColor:'blue',height:50,width:this.state.blueWidth}}></View>
                </View>
                <View>
                    <Text style={{marginBottom:20,marginTop:this.state.headerMarginTop}}>啦啦啦</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textStyle:{
        padding:10,
        textAlign:'center',
    }
});
