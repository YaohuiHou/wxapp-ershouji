import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  // 线上地址  https://api2.tiebaobei.com/api/
  // 测试地址  https://apitest.tiebaobei.com/api/
  data = {
    host: 'https://api2.tiebaobei.com/api/app/'
  };
  methods = {
    tap() {}
  };

  onShow() {}

  onLoad() {}
}
