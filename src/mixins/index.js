const ALD = require('@/utils/ald-stat.js')
const SA = require('@/utils/sensorsdata.js')
import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  // 线上地址  https://api2.tiebaobei.com/api/
  // 测试地址  https://apitest.tiebaobei.com/api/
  data = {
    host: 'https://api2.tiebaobei.com/api/app/',
    sceneText: 1,
    distinctId: SA.store.getDistinctId()
  };
  methods = {
    tap() {}
  };

  onShow() {}

  onLoad() {}

  setSensorsData(eventName, properties) {
    console.log(eventName, properties)

    // SA.track(eventName, properties);
  }
}
