/**
 * Created by songzhiyang on 2017/4/15.
 */

import React,{Component} from 'react';
import {
    View,
    Text, DrawerLayoutAndroid,
} from 'react-native';
import ImagePage from "./ImagePage";
import TextPage from "./TextPage";

export default class DrawerViewPage extends Component {

    render(){
        var navigator = (
            <View>
                <Text style={{textAlign:'center'}}>标题栏</Text>
                <Text style={{marginLeft:10,marginTop:15}} onPress={()=>this._jump2Page(ImagePage,'Bottom')}>1、ImagePage</Text>
                <Text style={{marginLeft:10,marginTop:15}} onPress={()=>this._jump2Page(TextPage,'Bottom')}>2、TextPage</Text>
            </View>
        );

        return(
            <DrawerLayoutAndroid drawerWidth={200} drawerPosition={DrawerLayoutAndroid.positions.Right} renderNavigationView={()=>navigator}>
                <View>
                    <Text>第一行测试数据</Text>
                    <Text>第二行测试数据</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    _jump2Page(componentName,type='Normal') {
        this.props.navigator.push({
            component:componentName,
            type:type,
        });
    }
}