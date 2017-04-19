/**
 * Created by songzhiyang on 2017/4/19.
 */

import DataBean from "./DataBean";

export default class ViewPagerBean {

    dataBeans=[];

    initData(paths,names) {
        for (let i=0;i<paths.length;i++) {
            let dataBean = new DataBean();
            dataBean.string_name = names[i];
            dataBean.string_path = paths[i];
            this.dataBeans.push(dataBean);
        }
    }

    getDataBeans() {
        return this.dataBeans;
    }

}