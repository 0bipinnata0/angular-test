import { FormControl } from '@angular/forms';
export class FormDateControl extends FormControl {
  override setValue(
    value: string,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ) {
    super.setValue(value, options);
  }
}
