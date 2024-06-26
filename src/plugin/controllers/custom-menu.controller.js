import { Disposable } from "@univerjs/core"

import { SingleButtonOperation } from '../commands/operations/single-button.operation'
import { DropdownListFirstItemOperation, DropdownListSecondItemOperation } from "../commands/operations/dropdown-list.operation"

export class CustomMenuController extends Disposable {
  constructor(
    injector,
    commandService,
    menuService,
    componentManager
  ) {
    super()
    this._injector = injector
    this._commandService = commandService
    this._menuService = menuService
    this._componentManager = componentManager

    this._initCommands()
    this._registerComponents()
    this._initMenus()
  }

  _initCommands() {
    [
      SingleButtonOperation,
      DropdownListFirstItemOperation,
      DropdownListSecondItemOperation,
    ].forEach((c) => {
      this.disposeWithMe(this._commandService.registerCommand(c))
    })
  }

  _registerComponents() {
    const componentManager = this._componentManager
    this.disposeWithMe(componentManager.register("ButtonIcon", Buttonic))
  }

  _initMenus() {}
}
