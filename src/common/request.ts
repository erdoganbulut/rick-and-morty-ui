const fetchRequest = <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> =>
  fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);

const request = {
  get: <TResponse>(url: string) => fetchRequest<TResponse>(url),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    fetchRequest<TResponse>(url, { method: 'POST', body }),
};

export enum ERequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export default request;
