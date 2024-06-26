import { LocaleService, Plugin, UniverInstanceType } from '@univerjs/core'
import { Inject, Injector } from '@wendellhu/redi';
import { enUS, zhCN } from './locale'

const SHEET_CUSTOM_MENU_PLUGIN = 'SHEET_CUSTOM_MENU_PLUGIN'

export class UniverSheetsCustomMenuPlugin extends Plugin {
  static type = 2
  static pluginName = SHEET_CUSTOM_MENU_PLUGIN

  constructor(_injector, _localeService) {
    super()

    this._localeService.load({
      enUS,
      zhCN,
    })
  }

  onStarting(injector) {
    [
      // []
    ].forEach((d) => injector.add(d));
  }
}
