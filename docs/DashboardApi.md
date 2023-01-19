# SellPassWebApi.DashboardApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdDashboardGeneralGet**](DashboardApi.md#selfShopIdDashboardGeneralGet) | **GET** /self/{shopId}/dashboard/general | 



## selfShopIdDashboardGeneralGet

> selfShopIdDashboardGeneralGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.DashboardApi();
let shopId = 56; // Number | 
let opts = {
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'toDate': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.selfShopIdDashboardGeneralGet(shopId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 
 **fromDate** | **Date**|  | [optional] 
 **toDate** | **Date**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

