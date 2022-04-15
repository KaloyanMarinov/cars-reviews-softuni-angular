import { AbstractControl, ValidationErrors } from "@angular/forms";

export function yearValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null

  if (!/^(19|20)\d{2}$/.test(value)) {
    return {
      year: true,
    }
  }

  return null;
}
