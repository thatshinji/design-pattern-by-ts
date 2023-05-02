/**
 * 组合模式
 */

interface Graphic {
  move(x: number, y: number): void
  draw(): void
}

class Dot implements Graphic {
  x!: number
  y!:number
  constructor(x:number, y:number) {
    this.x = x
    this.y = y
  }
  draw(): void {
    console.log(this.x, this.y)
  }

  move(x: number, y: number): void {
    this.x += x
    this.y += y
  }
}

class Circle extends Dot {
  radius!: number
  constructor(x:number, y: number, radius: number) {
    super(x, y);
    this.x = x
    this.y = y
    this.radius = radius
  }
  draw() {
    console.log(this.radius, this.x, this.y)
  }
}

class CompoundGraphic implements Graphic {
  children!: Graphic[]
  add(child: Graphic) {
    this.children.push(child)
  }
  remove(child: Graphic) {
    this.children.pop()
  }
  move(x: number, y: number) {
    this.children.forEach((child) => {
      child.move(x, y)
    })
  }
  draw() {}
}

class ImageEditor {
  all!: Graphic[]

  load() {
    const all = new CompoundGraphic()
    all.add(new Dot(1, 2))
    all.add(new Circle(1, 2, 2.5))
    all.add(new Dot(10, 10))
  }
  groupSelected(components: Graphic[]) {
   const group = new CompoundGraphic()
   components.forEach((component) => {
     group.add(component)
   })
  }
}
