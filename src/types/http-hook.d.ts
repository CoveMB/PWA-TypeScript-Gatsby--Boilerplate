import { AxiosResponse } from 'axios';

type AxiosInstanceTypes = 'internalInstance' | 'externalInstance';

// Http Hook Reducer
type HttpState = {
  loading: boolean,
  error?: string,
  data?: any
};

type HttpActionType = 'CLEAR' | 'ERROR' | 'RESPONSE'| 'SEND';

type HttpAction = {
  type: HttpActionType,
  errorMessage?: string,
  responseData?: any
};

// Http options
type HttpMethods = 'GET' | 'POST' | 'PATCH';

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

// Http Hook Functions
type ClearHttpState = () => void;

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

// Http Hook
type UseHttp = <M>(
  initialRequest?: HttpRequestParams
) => {
  isLoading: boolean,
  httpData: M,
  httpError?: string,
  sendRequest: SendRequest,
  clearHttpState: ClearHttpState
};
