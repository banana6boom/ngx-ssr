# @banana6boom/ngx-ssr-cache

Add Angular 14+ support

_Fork of [@ngx-ssr/cache](https://www.npmjs.com/package/@ngx-ssr/cache)_

Install package

```bash
npm i @banana6boom/ngx-ssr-cache
```

Import the `NgxSsrCacheModule` module to cache all GET requests

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxSsrCacheModule } from '@banana6boom/ngx-ssr-cache';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxSsrCacheModule.configLruCache({ maxAge: 10 * 60_000, maxSize: 50 }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

HTML caching is also available for express

```ts
import { ngExpressEngine } from '@nguniversal/express-engine';
import { LRUCache } from '@banana6boom/ngx-ssr-cache';
import { withCache } from '@banana6boom/ngx-ssr-cache/express';

server.engine(
  'html',
  withCache(
    new LRUCache({ maxAge: 10 * 60_000, maxSize: 100 }),
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  )
);
```
