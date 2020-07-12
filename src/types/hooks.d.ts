import { AxiosResponse } from 'axios';

type HttpMethods = 'GET' | 'POST' | 'PATCH';

type AxiosInstanceTypes = 'internalInstance' | 'externalInstance';

type HttpHeaders = {
  'Content-Type'?: 'application/json',
  Authorization?: string
};

type HttpRequestParams = {
  url: string,
  method: HttpMethods,
  body?: Records<string, string>,
  headers?: HttpHeaders
};

type HttpState<M> = {
  loading: boolean,
  error?: string,
  data?: M
};

type HttpActionType = 'CLEAR' | 'ERROR' | 'RESPONSE'| 'SEND';

type ClearHttpState = () => void;

type HttpReducer = (
  curHttpState: HttpState,
  action: {
    type: HttpActionType,
    errorMessage?: string,
    responseData?: any
  }) => HttpState;

type ExecuteRequest = <M>(
  {
    url, method, body, headers
  }: HttpRequestParams,
  axiosInstance: AxiosInstanceTypes,
  token: string
) => Promise<AxiosResponse<M>>;

type SendRequest = <M>(
  requestParameters: HttpRequestParams,
  external?: boolean
) => Promise<AxiosResponse<M>>;

type UseHttp = <M>(
  initialRequest?: HttpRequestParams
) => {
  isLoading: boolean,
  httpData: M,
  httpError: string,
  sendRequest: SendRequest,
  clearHttpState: ClearHttpState
};
