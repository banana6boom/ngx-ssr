import {
  Directive,
  Inject,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { IS_SERVER_PLATFORM } from './tokens';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ifIsServer]',
})
export class IfIsServerDirective {
  constructor(
    @Inject(IS_SERVER_PLATFORM) isServer: boolean,
    templateRef: TemplateRef<any>,
    viewContainer: ViewContainerRef
  ) {
    if (isServer) {
      viewContainer.createEmbeddedView(templateRef);
    }
  }
}
