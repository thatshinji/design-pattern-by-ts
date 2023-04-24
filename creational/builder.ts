/**
 * 生成器模式
 */

interface Builder {
  productPartA(): void
  productPartB(): void
  productPartC(): void
}

class Product1 {
  parts: string[] = []
  listParts() {
    console.log(this.parts.join(''))
  }
}

class ConcreateBuilder1 implements Builder {
  private product!: Product1

  constructor() {
    this.reset()
  }
  reset() {
    this.product = new Product1()
  }
  productPartA(): void {
    this.product.parts.push('partA')
  }

  productPartB(): void {
    this.product.parts.push('partB')
  }

  productPartC(): void {
    this.product.parts.push('partC')
  }

  getProduct(): Product1 {
    const result = this.product
    this.reset()
    return result
  }
}

class Director {
  public builder!: Builder

  public setBuilder(builder: Builder) {
    this.builder = builder
  }
  public buildMVPProduct() {
    this.builder.productPartA()
  }
  public buildFullFetureProduct() {
    this.builder.productPartA()
    this.builder.productPartB()
    this.builder.productPartC()
  }
}

function generateClient(director:Director) {
  const builder = new ConcreateBuilder1()
  director.setBuilder(builder)
  director.buildMVPProduct()
  director.buildFullFetureProduct()

  builder.getProduct().listParts()
}

const director = new Director()
generateClient(director)
