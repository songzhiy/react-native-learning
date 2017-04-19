/**
 * Created by songzhiyang on 2017/4/19.
 */

import {
    Vibration,
} from 'react-native';

export default class VibrateUtils {
    static vibrate(time) {
        Vibration.vibrate(time);
    }
}