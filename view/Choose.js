/**
 *
 * Created by songzhiyang on 2017/4/14.
 */

import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import TextPage from "./TextPage";
import ImagePage from "./ImagePage";
import TextInputPage from "./TextInputPage";
import ProgressBarPage from "./ProgressBarPage";
import DrawerViewPage from "./DrawerViewPage";
import ScrollViewPage from "./ScrollViewPage";
import ToolBarPage from "./ToolBarPage";
import SwitchButtonPage from "./SwitchButtonPage";
import PickerPage from "./PickerPage";
import ViewPagerPage from "./ViewPagerPage";
import TouchablePage from "./TouchablePage";
import ListViewPage from "./ListViewPage";
import CarListViewPage from "./CarListViewPage";
import {PullToRefreshPage} from "./PullToRefreshPage";
import {WebViewPage} from "./WebViewPage";
import NavigatorPage from "./NavigatorPage";
import ClipboardPage from "./ClipboardPage";
import DatePickerPage from "./DatePickerPage";
import StatusBarPage from "./StatusBarPage";
import TimePickerPage from "./TimePickerPage";
import ModalPage from "./ModalPage";
import APITest from "./APITest";
import LayoutAnimationPage from "./LayoutAnimationPage";
import ComplexLayoutAnimation from "./ComplexLayoutAnimation";
import AnimatedPage from "./AnimatedPage";

export default class Choose extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text>请选择你需要的项目</Text>
                    <Text
                        style={styles.button}
                        onPress={() => this._navigator(TextPage, '文字', 'Bottom')}>Text & AppState & NetInfo</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ImagePage, '图片测试')}>Image</Text>
                    <Text style={styles.button} onPress={() => this._navigator(TextInputPage, '输入框测试')}>TextInput</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ProgressBarPage, '进度条测试')}>ProgressBar</Text>
                    <Text style={styles.button} onPress={() => this._navigator(DrawerViewPage, 'DrawerView测试')}>DrawerView</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ScrollViewPage, 'ScrollView测试')}>ScrollView</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ToolBarPage, 'ToolBar测试')}>ToolBar</Text>
                    <Text style={styles.button} onPress={() => this._navigator(SwitchButtonPage, 'Switch测试')}>SwitchButton</Text>
                    <Text style={styles.button} onPress={() => this._navigator(PickerPage, 'Picker测试')}>Picker</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ViewPagerPage, 'ViewPager测试')}>ViewPager</Text>
                    <Text style={styles.button} onPress={() => this._navigator(TouchablePage, 'Touchable测试')}>Touchable</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ListViewPage, 'ListView测试')}>ListView</Text>
                    <Text style={styles.button} onPress={() => this._navigator(CarListViewPage, 'CarListView测试')}>复杂ListViewDemo</Text>
                    <Text style={styles.button} onPress={() => this._navigator(PullToRefreshPage, 'PullToRefreshPage测试')}>下拉加载更多</Text>
                    <Text style={styles.button} onPress={() => this._navigator(WebViewPage, 'WebView测试')}>WebView</Text>
                    <Text style={styles.button} onPress={() => this._navigator(NavigatorPage, 'NavigatorPage测试')}>Navigator+DrawerView</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ClipboardPage, 'ClipboardPage测试')}>ClipboardTest</Text>
                    <Text style={styles.button} onPress={() => this._navigator(DatePickerPage, 'DatePickerPage测试')}>DatePicker</Text>
                    <Text style={styles.button} onPress={() => this._navigator(StatusBarPage, 'StatusBarPage测试')}>StatusBar</Text>
                    <Text style={styles.button} onPress={() => this._navigator(TimePickerPage, 'TimePickerPage测试')}>TimePicker</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ModalPage, 'ModalPage测试')}>Modal & Alert</Text>
                    <Text style={styles.button} onPress={() => this._navigator(APITest, 'APITest')}>APITest</Text>
                    <Text style={styles.button} onPress={() => this._navigator(LayoutAnimationPage, 'LayoutAnimationPage')}>LayoutAnimation</Text>
                    <Text style={styles.button} onPress={() => this._navigator(ComplexLayoutAnimation, 'ComplexLayoutAnimation')}>ComplexLayoutAnimation</Text>
                    <Text style={styles.button} onPress={() => this._navigator(AnimatedPage, 'AnimatedPage')}>AnimatedPage</Text>
                </View>
            </ScrollView>
        )
    }

    _navigator(componentName, name, type = 'Normal') {
        this.props.navigator.push({
            component: componentName,
            passProps: {
                name: name
            },
            type: type,
        })
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginTop: 10,
        borderColor:'azure',
        backgroundColor:'azure',
        borderWidth:2,
        borderRadius:5,
        textAlign:'center',
    }
});