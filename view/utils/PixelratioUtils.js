/**
 * Created by songzhiyang on 2017/4/19.
 */

import {
    PixelRatio,
} from 'react-native';

export default class PixelratioUtils {

    // PixelRatio.get() === 1
    // mdpi Android 设备 (160 dpi)
    // PixelRatio.get() === 1.5
    // hdpi Android 设备 (240 dpi)
    // PixelRatio.get() === 2
    // iPhone 4, 4S
    // iPhone 5, 5c, 5s
    // iPhone 6
    // xhdpi Android 设备 (320 dpi)
    // PixelRatio.get() === 3
    // iPhone 6 plus
    // xxhdpi Android 设备 (480 dpi)
    // PixelRatio.get() === 3.5
    // Nexus 6
    static getPixelratio() {
        return PixelRatio.get();
    }

    static dp2px(dp) {
        return PixelRatio.getPixelSizeForLayoutSize(dp);
    }
}