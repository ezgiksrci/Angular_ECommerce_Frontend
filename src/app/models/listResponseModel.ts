/* TS'de yeni versiyonlarla birlikte veriyi initialize etmeyi bekler. Bu yüzden class yerine interface kullandık. */

import { ResponseModel } from './responseModel';

export interface ListResponseModel<T> extends ResponseModel {
  data: T[];
}
