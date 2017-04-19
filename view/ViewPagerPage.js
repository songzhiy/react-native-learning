/**
 * Created by songzhiyang on 2017/4/15.
 */

import React, {Component} from "react";
import {Text, View, ViewPagerAndroid} from "react-native";
import GomeViewPager from "./GomeViewPager";
import ViewPagerAdapter from "./adapter/ViewPagerAdapter";

export default class ViewPagerPage extends Component {

    //ViewPager和ToolBar一样 必须给高度才可以
    render() {

        let adapter = new ViewPagerAdapter();
        adapter.initData();

        return (
            <View>
                <ViewPagerAndroid initialPage={0} style={{height: 200}}>
                    <View style={{backgroundColor: 'red'}}>
                        <Text>我是第一页</Text>
                    </View>
                    <View style={{backgroundColor: 'yellow'}}>
                        <Text>我是第二页</Text>
                    </View>
                </ViewPagerAndroid>

                <GomeViewPager viewPagerAdapter={adapter}/>
            </View>
        );
    }

}