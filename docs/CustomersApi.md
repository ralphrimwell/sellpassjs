# SellPassWebApi.CustomersApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdCustomersCustomerIdGet**](CustomersApi.md#selfShopIdCustomersCustomerIdGet) | **GET** /self/{shopId}/customers/{customerId} | 
[**selfShopIdCustomersCustomerIdIpsGet**](CustomersApi.md#selfShopIdCustomersCustomerIdIpsGet) | **GET** /self/{shopId}/customers/{customerId}/ips | 
[**selfShopIdCustomersGet**](CustomersApi.md#selfShopIdCustomersGet) | **GET** /self/{shopId}/customers | 
[**selfShopIdCustomersStatsGet**](CustomersApi.md#selfShopIdCustomersStatsGet) | **GET** /self/{shopId}/customers/stats | 



## selfShopIdCustomersCustomerIdGet

> selfShopIdCustomersCustomerIdGet(shopId, customerId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomersApi();
let shopId = 56; // Number | 
let customerId = 789; // Number | 
apiInstance.selfShopIdCustomersCustomerIdGet(shopId, customerId, (error, data, response) => {
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
 **customerId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdCustomersCustomerIdIpsGet

> selfShopIdCustomersCustomerIdIpsGet(shopId, customerId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomersApi();
let shopId = 56; // Number | 
let customerId = 789; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56 // Number | 
};
apiInstance.selfShopIdCustomersCustomerIdIpsGet(shopId, customerId, opts, (error, data, response) => {
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
 **customerId** | **Number**|  | 
 **pageNumber** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdCustomersGet

> selfShopIdCustomersGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomersApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdCustomersGet(shopId, opts, (error, data, response) => {
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
 **pageNumber** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **searchString** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdCustomersStatsGet

> selfShopIdCustomersStatsGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomersApi();
let shopId = 56; // Number | 
let opts = {
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'toDate': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.selfShopIdCustomersStatsGet(shopId, opts, (error, data, response) => {
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

