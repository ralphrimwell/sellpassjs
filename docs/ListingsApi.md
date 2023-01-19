# SellPassWebApi.ListingsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdListingsGet**](ListingsApi.md#selfShopIdListingsGet) | **GET** /self/{shopId}/listings | 
[**selfShopIdListingsPositionPut**](ListingsApi.md#selfShopIdListingsPositionPut) | **PUT** /self/{shopId}/listings/position | 



## selfShopIdListingsGet

> selfShopIdListingsGet(shopId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ListingsApi();
let shopId = 56; // Number | 
apiInstance.selfShopIdListingsGet(shopId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdListingsPositionPut

> selfShopIdListingsPositionPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ListingsApi();
let shopId = 56; // Number | 
let opts = {
  'modifyListingsPositionRequest': new SellPassWebApi.ModifyListingsPositionRequest() // ModifyListingsPositionRequest | 
};
apiInstance.selfShopIdListingsPositionPut(shopId, opts, (error, data, response) => {
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
 **modifyListingsPositionRequest** | [**ModifyListingsPositionRequest**](ModifyListingsPositionRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

