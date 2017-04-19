/**
 * Created by songzhiyang on 2017/4/19.
 */

import ViewPagerBean from "./ViewPagerBean";
import React, {Component} from 'react';
import {
    View,
    Image, Text,
} from 'react-native';
import ChildViewComponent from "../ChildViewComponent";


var viewPagerBeans = [];

export default class ViewPagerAdapter {

    initData() {
        let path = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
        let viewPagerBean = new ViewPagerBean();
        viewPagerBean.initData([path, path], ['111', '111']);
        viewPagerBeans.push(viewPagerBean);
        let viewPagerBean1 = new ViewPagerBean();
        viewPagerBean1.initData([path, path], ['222', '222']);
        viewPagerBeans.push(viewPagerBean1);
        let viewPagerBean2 = new ViewPagerBean();
        viewPagerBean2.initData([path, path], ['333', '333']);
        viewPagerBeans.push(viewPagerBean2);
        let viewPagerBean3 = new ViewPagerBean();
        viewPagerBean3.initData([path, path], ['444', '444']);
        viewPagerBeans.push(viewPagerBean3);
    }

    getDataBeans() {
        return viewPagerBeans;
    }

    initViewPage(position) {
        let viewPagerBean = viewPagerBeans[position];
        let dataBean = viewPagerBean.getDataBeans();
        console.log(dataBean);
        let path = dataBean[0].string_path;
        let name = dataBean[0].string_name;
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}} key={'viewpager' + position}>
                <View>
                    <ChildViewComponent icon_uri={path} icon_name={name}/>
                </View>
            </View>
        );
    }
}