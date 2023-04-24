// Open/Closed Principle 开闭原则

// class Order {
//   transportWay!: string

//   getWeight(): number {
//     return 5
//   }
//   getTotal(): number {
//     return 10
//   }
//   getPostagePrice() {
//     if (this.transportWay === 'sfe') {
//       return Math.max(20, this.getWeight() * 3)
//     }
//     if (this.transportWay === 'ztc') {}
//     if (this.transportWay === 'ems') {
//       return 15
//     }
//   }
// }

interface Transport {
  getCost(order: Order): number
}

class Order {
  transportWay!: Transport
  getWeight() {
    return 3
  }
  getTransportCost() {
    return this.transportWay.getCost(this)
  }
}

class SFE implements Transport {
  getCost(order: Order): number {
    return Math.max(20, order.getWeight())
  }
}

class EMS implements Transport {
  getCost(order: Order): number {
    return 15
  }
}

class ZTO implements Transport {
  getCost(order: Order): number {
    if (order.getWeight() > 100) return 0
    return 20
  }
}