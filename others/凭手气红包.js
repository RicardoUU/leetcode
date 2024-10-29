class RedPackage {
  money = 0; //  总金额
  count = 0;
  _remain = 0; //  剩余金额

  constructor(money, count) {
    this.money = money;
    this.count = count;
    this._remain = money;
  }

  openRedPackge() {
    //  已经抢完了
    if (this.count <= 0) {
      console.log("红包已经被抢完啦~");
      return;
    }


    //  只剩一个红包
    if (this.count === 1) {
      this.count--;
      console.log(this._remain);
      return;
    }

    //  随机生成一个比例，剩余金额/总金额，math.random()生成的是0-1之间的随机数
    const ratio = Math.random() * (this._remain / this.money); //  随机生成一个比例，remain/money是剩余金额占总金额的比例，
    //  这里会涉及到一个JS计算精度的问题
    //  正常应该用第三方库或者字符串算法实现一个精准的加减乘除
    //  这里为了简单就这么直接做了
    let youGet = (this.money * ratio).toFixed(2);
    const tempRemain = +(this._remain - youGet).toFixed(2);
    const allLeast = this.count * 0.01;   //  每个人至少能抢到0.01元

    //  如果剩余的金额不够每人一分钱，那么需要减少本次获得的金额
    if (tempRemain < allLeast) {
      youGet = +(this._remain - allLeast).toFixed(2); //  保证每个人至少能抢到0.01元
      this._remain = allLeast;
    } else {
      this._remain = tempRemain;
    }
    console.log(youGet);
    this.count--;
  }
}
