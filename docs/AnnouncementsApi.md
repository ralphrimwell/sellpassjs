# SellPassWebApi.AnnouncementsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdAnnouncementsAnnouncementIdDelete**](AnnouncementsApi.md#selfShopIdAnnouncementsAnnouncementIdDelete) | **DELETE** /self/{shopId}/announcements/{announcementId} | Delete Announcement
[**selfShopIdAnnouncementsAnnouncementIdPut**](AnnouncementsApi.md#selfShopIdAnnouncementsAnnouncementIdPut) | **PUT** /self/{shopId}/announcements/{announcementId} | Edit Announcement
[**selfShopIdAnnouncementsGet**](AnnouncementsApi.md#selfShopIdAnnouncementsGet) | **GET** /self/{shopId}/announcements | Get all
[**selfShopIdAnnouncementsPost**](AnnouncementsApi.md#selfShopIdAnnouncementsPost) | **POST** /self/{shopId}/announcements | Create Announcement



## selfShopIdAnnouncementsAnnouncementIdDelete

> selfShopIdAnnouncementsAnnouncementIdDelete(shopId, announcementId)

Delete Announcement

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.AnnouncementsApi();
let shopId = 56; // Number | 
let announcementId = 789; // Number | 
apiInstance.selfShopIdAnnouncementsAnnouncementIdDelete(shopId, announcementId, (error, data, response) => {
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
 **announcementId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdAnnouncementsAnnouncementIdPut

> selfShopIdAnnouncementsAnnouncementIdPut(shopId, announcementId, opts)

Edit Announcement

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.AnnouncementsApi();
let shopId = 56; // Number | 
let announcementId = 789; // Number | 
let opts = {
  'createAnnouncementRequest': new SellPassWebApi.CreateAnnouncementRequest() // CreateAnnouncementRequest | 
};
apiInstance.selfShopIdAnnouncementsAnnouncementIdPut(shopId, announcementId, opts, (error, data, response) => {
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
 **announcementId** | **Number**|  | 
 **createAnnouncementRequest** | [**CreateAnnouncementRequest**](CreateAnnouncementRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdAnnouncementsGet

> selfShopIdAnnouncementsGet(shopId, opts)

Get all

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.AnnouncementsApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdAnnouncementsGet(shopId, opts, (error, data, response) => {
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


## selfShopIdAnnouncementsPost

> selfShopIdAnnouncementsPost(shopId, opts)

Create Announcement

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.AnnouncementsApi();
let shopId = 56; // Number | 
let opts = {
  'createAnnouncementRequest': new SellPassWebApi.CreateAnnouncementRequest() // CreateAnnouncementRequest | 
};
apiInstance.selfShopIdAnnouncementsPost(shopId, opts, (error, data, response) => {
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
 **createAnnouncementRequest** | [**CreateAnnouncementRequest**](CreateAnnouncementRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

