# SellPassWebApi.GroupsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdGroupsGet**](GroupsApi.md#selfShopIdGroupsGet) | **GET** /self/{shopId}/groups | 
[**selfShopIdGroupsGroupIdDelete**](GroupsApi.md#selfShopIdGroupsGroupIdDelete) | **DELETE** /self/{shopId}/groups/{groupId} | 
[**selfShopIdGroupsGroupIdGet**](GroupsApi.md#selfShopIdGroupsGroupIdGet) | **GET** /self/{shopId}/groups/{groupId} | 
[**selfShopIdGroupsGroupIdPut**](GroupsApi.md#selfShopIdGroupsGroupIdPut) | **PUT** /self/{shopId}/groups/{groupId} | 
[**selfShopIdGroupsGroupIdThumbnailPost**](GroupsApi.md#selfShopIdGroupsGroupIdThumbnailPost) | **POST** /self/{shopId}/groups/{groupId}/thumbnail | 
[**selfShopIdGroupsPost**](GroupsApi.md#selfShopIdGroupsPost) | **POST** /self/{shopId}/groups | 



## selfShopIdGroupsGet

> selfShopIdGroupsGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GroupsApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdGroupsGet(shopId, opts, (error, data, response) => {
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


## selfShopIdGroupsGroupIdDelete

> selfShopIdGroupsGroupIdDelete(shopId, groupId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GroupsApi();
let shopId = 56; // Number | 
let groupId = 789; // Number | 
apiInstance.selfShopIdGroupsGroupIdDelete(shopId, groupId, (error, data, response) => {
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
 **groupId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdGroupsGroupIdGet

> selfShopIdGroupsGroupIdGet(shopId, groupId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GroupsApi();
let shopId = 56; // Number | 
let groupId = 789; // Number | 
apiInstance.selfShopIdGroupsGroupIdGet(shopId, groupId, (error, data, response) => {
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
 **groupId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdGroupsGroupIdPut

> selfShopIdGroupsGroupIdPut(shopId, groupId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GroupsApi();
let shopId = 56; // Number | 
let groupId = 789; // Number | 
let opts = {
  'createGroupRequest': new SellPassWebApi.CreateGroupRequest() // CreateGroupRequest | 
};
apiInstance.selfShopIdGroupsGroupIdPut(shopId, groupId, opts, (error, data, response) => {
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
 **groupId** | **Number**|  | 
 **createGroupRequest** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdGroupsGroupIdThumbnailPost

> selfShopIdGroupsGroupIdThumbnailPost(shopId, groupId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GroupsApi();
let shopId = 56; // Number | 
let groupId = 789; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdGroupsGroupIdThumbnailPost(shopId, groupId, opts, (error, data, response) => {
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
 **groupId** | **Number**|  | 
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## selfShopIdGroupsPost

> selfShopIdGroupsPost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GroupsApi();
let shopId = 56; // Number | 
let opts = {
  'createGroupRequest': new SellPassWebApi.CreateGroupRequest() // CreateGroupRequest | 
};
apiInstance.selfShopIdGroupsPost(shopId, opts, (error, data, response) => {
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
 **createGroupRequest** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

