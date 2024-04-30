import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  
  const jwt = localStorage.getItem('jwt');

  if (jwt != null) {
    req = req.clone({
      setHeaders: { Authorization: "Bearer " + jwt },
    });
  }

  return next(req);
};
