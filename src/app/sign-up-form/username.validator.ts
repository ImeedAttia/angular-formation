import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Usernamevalidator{
  static cannotContainSpace(controll : AbstractControl) : ValidationErrors | null {
    if ((controll.value as string).indexOf(' ') >= 0 )
      return {
        cannotContainSpace: true
      }
    return null;
  }
}

