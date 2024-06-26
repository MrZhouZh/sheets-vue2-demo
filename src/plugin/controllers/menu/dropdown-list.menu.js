import { MenuItemType, MenuPosition } from '@univerjs/ui'
import { DropdownListFirstItemOperation, DropdownListSecondItemOperation } from '../../commands/operations/dropdown-list.operation'

const CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID = 'custom-menu.operation.dropdown-list';

export function CustomMenuItemDropdownListMainButtonFactory() {
  return {
    id: CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID,
    // type: MenuItemType.SUBITEMS,
    type: 3,
    icon: 'MainButtonIcon',
    tooltip: 'customMenu.dropdownList',
    title: 'customMenu.dropdown',
    // positions: [MenuPosition.TOOLBAR_START, MenuPosition.CONTEXT_MENU],
    positions: ['uiToolbar.start', 'contextMenu'],
  }
}

export function CustomMenuItemDropdownListFirstItemFactory() {
  return {
    id: DropdownListFirstItemOperation.id,
    // type: MenuItemType.BUTTON,
    type: 0,
    title: 'customMenu.itemOne',
    icon: 'ItemIcon',
    positions: [CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID],
  }
}

export function CustomMenuItemDropdownListSecondItemFactory(){
  return {
      id: DropdownListSecondItemOperation.id,
      // type: MenuItemType.BUTTON,
      type: 0,
      title: 'customMenu.itemTwo',
      icon: 'ItemIcon',
      positions: [CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID],
  };
}
