import { AbstractControl, ValidatorFn } from "@angular/forms";

export function confirmPasswords(passwordFormControl: AbstractControl) {
  const validtorFn: ValidatorFn = (confirmPasswordFormControl: AbstractControl) => {
    if (passwordFormControl.value !== confirmPasswordFormControl.value) {
      return {
        confirmPasswords: true
      }
    }

    return null;
  }

  return validtorFn;
}
