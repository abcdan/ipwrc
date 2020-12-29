import { TestBed } from '@angular/core/testing';

import { HttpClientInterceptor } from './http-client.interceptor';

describe('HttpClientInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClientInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpClientInterceptor = TestBed.inject(HttpClientInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
