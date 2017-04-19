/**
 * Created by songzhiyang on 2017/4/19.
 */

import {
    Dimensions
} from 'react-native';

class WindowOptions {
    width = 0;
    height = 0;
}

export default class DimensionsUtils {
    static getWindowWidth() {
        let windowOptions = Dimensions.get('window');
        return windowOptions.width;
    }

    static getWindowHeight() {
        let windowOptions = Dimensions.get('window');
        return windowOptions.height;
    }

    static getWindownOptions() {
        let windowOptions = Dimensions.get('window');
        return windowOptions;
    }
}