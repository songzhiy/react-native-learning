/**
 * Created by songzhiyang on 2017/4/18.
 */

import React,{Component} from 'react';
import {
    ViewPagerAndroid,
    View,
    Text,
} from 'react-native';
import ChildViewComponent from "./ChildViewComponent";
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";

export default class GomeViewPager extends Component {

    position = 0;

    _onPageSelected(event) {
        ToastAndroid.show('当前 --- 第' + event.nativeEvent.position + '页', ToastAndroid.LONG);
        this.position = event.nativeEvent.position;
    }

    _generateViews(viewPagerAdapter) {
        let views = [];
        for (let i=0;i<viewPagerAdapter.getDataBeans().length;i++) {
            views.push(viewPagerAdapter.initViewPage(i));
        }
        return(
            views
        );
    }

    render() {
        return(
            <ViewPagerAndroid initialPage={0} style={{height: 200}} onPageSelected={(event) => this._onPageSelected(event)}>

                {this._generateViews(this.props.viewPagerAdapter)}

                {/*<View>*/}
                    {/*<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="美食"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="电影"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="酒店"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="KTV"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="外卖"/>*/}
                    {/*</View>*/}
                    {/*<View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="优惠买单"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="周边游"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="休闲娱乐"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="近日新单"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="丽人"/>*/}
                    {/*</View>*/}
                {/*</View>*/}
                {/*<View>*/}
                    {/*<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="购物"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="火车票"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="生活服务"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="旅游"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="汽车服务"/>*/}
                    {/*</View>*/}
                    {/*<View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="足疗按摩"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="小吃快餐"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="景点门票"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="境外游"/>*/}
                        {/*<ChildViewComponent icon_uri={path} icon_name="全部分类"/>*/}
                    {/*</View>*/}
                {/*</View>*/}
            </ViewPagerAndroid>
        )
    }
}