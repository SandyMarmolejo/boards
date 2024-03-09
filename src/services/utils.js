export async function addData(API_URL, valueChange, token) {
    const isRefresh = await HasTokenBeenRefreshed();
    if (isRefresh) {
      return await addData(API_URL, valueChange, store.state.dataUser.auth.access_token);
    }
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(valueChange),
    };
    const resp = await fetch(API_URL, requestOptions);
    const data = await resp.json();
    return dataReturn(resp, data);
  }
  
  export async function getData(API_URL, token) {
    const isRefresh = await HasTokenBeenRefreshed();
    if (isRefresh) {
      return await getData(API_URL, store.state.dataUser.auth.access_token);
    }
  
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await fetch(API_URL, requestOptions);
    const data = await resp.json();
    return dataReturn(resp, data);
  }
  
  export async function addData2(API_URL, valueChange) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(valueChange),
    };
    const resp = await fetch(API_URL, requestOptions);
    const data = await resp.json();
    return dataReturn(resp, data);
  }