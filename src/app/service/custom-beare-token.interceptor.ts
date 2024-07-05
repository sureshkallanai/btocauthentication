import { HttpInterceptorFn } from '@angular/common/http';

export const customBeareTokenInterceptor: HttpInterceptorFn = (req, next) => {
  //debugger
  const myToken = "Bearer "+localStorage.getItem("token");
  const cloneRequest = req.clone({
    setHeaders:{
     Authorization:myToken
  }
});
  return next(cloneRequest);
};
