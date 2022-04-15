import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return null
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return {
      email: true,
    }
  }

  return null;
}
