const ALD = require('@/utils/ald-stat.js')
import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  // 线上地址  https://api2.tiebaobei.com/api/
  // 测试地址  https://apitest.tiebaobei.com/api/
  data = {
    host: 'https://api2.tiebaobei.com/api/app/',
    sceneText: 1,
    distinctId: '',
    globleCallTel: '400-009-9032'
  };
  methods = {
    tap() {}
  };

  onShow() {}

  onLoad() {
    this.distinctId = this.$wxapp.sensors.store.getDistinctId()
  }

  setSensorsData(parent, eventName, properties) {
    // parent.sensors.track(eventName, properties)
    console.log(properties.tonnage, properties.price, '吨位')
    parent.sensors.track(eventName, {
      eq_id: String(properties.eq_id), // ：(设备id) 字符串
      category: String(properties.category), // ：(机型) 字符串
      brand: String(properties.brand), // ：(品牌) 字符串
      model: String(properties.model), // ：( 型号) 字符串
      out_date: String(properties.out_date), // ：(出厂年限) 字符串
      tonnage: Number(properties.tonnage), // ：(吨位) 数值
      hours: Number(properties.hours), // ：(使用小时数) 数值
      parking_place: String(properties.parking_place), // ：(停放地点) 字符串
      price: Number(properties.price), // ：(价格) 数值
      real_name: properties.real_name, // ：(城市经理姓名) 字符串
      Category: properties.Category, // ："设备详情页"
      Label: properties.Label, // ："卖家说区域"
      Action: properties.Action // ：(留空)
    })
    // parent.sensors.track(eventName, properties)

    /*
    {
      eq_id: String(properties.eq_id), // ：(设备id) 字符串
      category: String(properties.category), // ：(机型) 字符串
      brand: String(properties.brand), // ：(品牌) 字符串
      model: String(properties.model), // ：( 型号) 字符串
      out_date: String(properties.out_date), // ：(出厂年限) 字符串
      tonnage: Number(properties.tonnage), // ：(吨位) 数值
      hours: Number(properties.hours), // ：(使用小时数) 数值
      parking_place: String(properties.parking_place), // ：(停放地点) 字符串
      price: Number(properties.price), // ：(价格) 数值
      real_name: properties.real_name, // ：(城市经理姓名) 字符串
      Category: properties.Category, // ："设备详情页"
      Label: properties.Label, // ："卖家说区域"
      Action: properties.Action // ：(留空)
    }
    */
  }
}
