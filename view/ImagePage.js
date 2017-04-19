import React, {Component,PropTypes} from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import ChildViewComponent from "./ChildViewComponent";

export default class ImagePage extends Component {
    render() {
        let path = '../image/ic_notification.png';
        let netPath = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        let netPath1 = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
        return (
            <ScrollView>
                <View style={{marginLeft: 10, marginTop: 10}}>
                    <Text>测试本地图片</Text>
                    {/*//这个路径必须是一个静态路径，不能动态生成，不能用上面的path进行处理*/}
                    <Image source={require('../image/ic_notification.png')}/>
                    <Text>测试APK中的图片</Text>
                    <Image source={{uri: 'ic_launcher'}} style={{width: 40, height: 40}}/>
                    <Text>测试加载网络图片</Text>
                    <Image source={{uri: netPath1}} style={{width: 100, height: 100}}/>
                    <Text>测试背景图片的效果</Text>
                    <Image source={netPath} onload={this._loadImageSuccess()} resizeMode={'cover'} style={{width:200, height:200,opacity:0.8}}><Text>哈哈 我就是文字</Text></Image>

                    <Text style={{textAlign:'center',fontSize:24}}>学习一下美团的首页顶部效果呗</Text>
                    <View style={styles.viewContainer}>
                        <ChildViewComponent icon_name={'美食'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'电影'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'酒店'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'KTV'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'外卖'} icon_uri={netPath1}/>
                    </View>
                    <View style={styles.viewContainer}>
                        <ChildViewComponent icon_name={'优惠买单'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'周边游'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'休闲娱乐'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'今日新单'} icon_uri={netPath1}/>
                        <ChildViewComponent icon_name={'丽人'} icon_uri={netPath1}/>
                    </View>
                </View>
            </ScrollView>
        )
    }

    _loadImageSuccess() {
        console.log('加载图片成功');
    }
}

const styles = StyleSheet.create({
    viewContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:20,
        marginTop:10,
    }
});
