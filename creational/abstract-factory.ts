/**
 * 抽象工厂模式
 */
interface Button {
  paint():void
}
interface CheckBox {
  paint(): void
}
interface GUIFactory {
  createButton(): Button
  createCheckBox(): CheckBox
}

class WinButton implements Button {
  paint(): void {}
}

class WinCheckBox implements CheckBox {
  paint() {}
}

class WinFactory implements GUIFactory{
  createButton(): Button {
    return new WinButton()
  }

  createCheckBox(): CheckBox {
    return new WinCheckBox();
  }

}

class MacButton implements Button {
  paint() {
  }
}
class MacCheckbox implements CheckBox {
  paint(): void {
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckBox(): CheckBox {
    return new MacCheckbox();
  }

}

class Application {
  private factory!: GUIFactory
  private button!: Button
  constructor(factory: GUIFactory) {
    this.factory = factory
  }
  createUI() {
    this.button = this.factory.createButton()
  }
  paint() {
    this.button.paint()
  }
}

const winApp = new Application(new WinFactory())
winApp.createUI()
winApp.paint()

const macApp = new Application(new MacFactory())
macApp.createUI()
macApp.paint()

