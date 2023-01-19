# SellPassWebApi.BlacklistApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdBlacklistBlockedItemIdDelete**](BlacklistApi.md#selfShopIdBlacklistBlockedItemIdDelete) | **DELETE** /self/{shopId}/blacklist/{blockedItemId} | Delete Blocked Item
[**selfShopIdBlacklistBlockedItemIdGet**](BlacklistApi.md#selfShopIdBlacklistBlockedItemIdGet) | **GET** /self/{shopId}/blacklist/{blockedItemId} | Get Blocked Item
[**selfShopIdBlacklistBlockedItemIdPut**](BlacklistApi.md#selfShopIdBlacklistBlockedItemIdPut) | **PUT** /self/{shopId}/blacklist/{blockedItemId} | Edit Blocked Item
[**selfShopIdBlacklistGet**](BlacklistApi.md#selfShopIdBlacklistGet) | **GET** /self/{shopId}/blacklist | Get All
[**selfShopIdBlacklistPost**](BlacklistApi.md#selfShopIdBlacklistPost) | **POST** /self/{shopId}/blacklist | Create Blocked Item



## selfShopIdBlacklistBlockedItemIdDelete

> selfShopIdBlacklistBlockedItemIdDelete(shopId, blockedItemId)

Delete Blocked Item

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.BlacklistApi();
let shopId = 56; // Number | 
let blockedItemId = 789; // Number | 
apiInstance.selfShopIdBlacklistBlockedItemIdDelete(shopId, blockedItemId, (error, data, response) => {
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
 **blockedItemId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdBlacklistBlockedItemIdGet

> selfShopIdBlacklistBlockedItemIdGet(shopId, blockedItemId)

Get Blocked Item

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.BlacklistApi();
let shopId = 56; // Number | 
let blockedItemId = 789; // Number | 
apiInstance.selfShopIdBlacklistBlockedItemIdGet(shopId, blockedItemId, (error, data, response) => {
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
 **blockedItemId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdBlacklistBlockedItemIdPut

> selfShopIdBlacklistBlockedItemIdPut(shopId, blockedItemId, opts)

Edit Blocked Item

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.BlacklistApi();
let shopId = 56; // Number | 
let blockedItemId = 789; // Number | 
let opts = {
  'createBlockedItemRequest': new SellPassWebApi.CreateBlockedItemRequest() // CreateBlockedItemRequest | 
};
apiInstance.selfShopIdBlacklistBlockedItemIdPut(shopId, blockedItemId, opts, (error, data, response) => {
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
 **blockedItemId** | **Number**|  | 
 **createBlockedItemRequest** | [**CreateBlockedItemRequest**](CreateBlockedItemRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdBlacklistGet

> selfShopIdBlacklistGet(shopId, opts)

Get All

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.BlacklistApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdBlacklistGet(shopId, opts, (error, data, response) => {
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


## selfShopIdBlacklistPost

> selfShopIdBlacklistPost(shopId, opts)

Create Blocked Item

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.BlacklistApi();
let shopId = 56; // Number | 
let opts = {
  'createBlockedItemRequest': new SellPassWebApi.CreateBlockedItemRequest() // CreateBlockedItemRequest | 
};
apiInstance.selfShopIdBlacklistPost(shopId, opts, (error, data, response) => {
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
 **createBlockedItemRequest** | [**CreateBlockedItemRequest**](CreateBlockedItemRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

