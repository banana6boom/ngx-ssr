# @banana6boom/ngx-ssr-timeout

Add 14+ Angular support

Install package

```bash
npm i @banana6boom/ngx-ssr-timeout
```

Use `NgxSsrTimeoutModule` to set timeouts for all requests

```ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NgxSsrTimeoutModule } from '@banana6boom/ngx-ssr-timeout';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NgxSsrTimeoutModule.forRoot({ timeout: 500 }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
```
