import { AbstractControl, ValidationErrors } from "@angular/forms";

export function urlValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;

  if (!/[(http(s) ?): \/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value)) {
    return {
      url: true,
    }
  }

  return null;
}
