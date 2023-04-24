// Interface Segregation Principle 接口隔离原则

// bad case
// interface Pay {
//   createOrder(id: string): string
//   checkOrder(orderId: string): boolean
//   pay(order: string, price: number): boolean
// }
//
// class WechatPay implements Pay {
//   checkOrder(orderId: string): boolean {
//     return false;
//   }
//   createOrder(id: string): string {
//     return "";
//   }
//   pay(order: string, price: number): boolean {
//     return false;
//   }
// }
//
// class AliPay implements Pay {
//   checkOrder(orderId: string): boolean {
//     return false;
//   }
//   createOrder(id: string): string {
//     return "";
//   }
//   pay(order: string, price: number): boolean {
//     return false;
//   }
// }
//
// class IAP implements Pay {
//   checkOrder(orderId: string): boolean {
//     return false;
//   }
//   createOrder(id: string): string {
//     return "";
//   }
//   pay(order: string, price: number): boolean {
//     return false;
//   }
// }

// good case
interface OrderInterface {
  createOrder(id: string): string

  checkOrder(orderId: string): boolean
}

interface PayInterface {
  pay(order: string, price: number): boolean
}

class WechatPay implements OrderInterface, PayInterface {
  checkOrder(orderId: string): boolean {
    return false;
  }
  createOrder(id: string): string {
    return "";
  }
  pay(order: string, price: number): boolean {
    return false;
  }
}

class IAP implements OrderInterface {
  checkOrder(orderId: string): boolean {
    return false;
  }
  createOrder(id: string): string {
    return "";
  }
}