# SellPassWebApi.PublicPageInfoApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2PublicShopsShopIdAnnouncementsAnnouncementPathGet**](PublicPageInfoApi.md#v2PublicShopsShopIdAnnouncementsAnnouncementPathGet) | **GET** /v2/public/shops/{shopId}/announcements/{announcementPath} | Get all the needed information for announcement page of the shop
[**v2PublicShopsShopIdFaqsGet**](PublicPageInfoApi.md#v2PublicShopsShopIdFaqsGet) | **GET** /v2/public/shops/{shopId}/faqs | Get all the needed information for faqs page of the shop
[**v2PublicShopsShopIdFeedbacksGet**](PublicPageInfoApi.md#v2PublicShopsShopIdFeedbacksGet) | **GET** /v2/public/shops/{shopId}/feedbacks | Get all the needed information for feedbacks page of the shop
[**v2PublicShopsShopIdListingsGet**](PublicPageInfoApi.md#v2PublicShopsShopIdListingsGet) | **GET** /v2/public/shops/{shopId}/listings | Get all the needed information for products page of the shop
[**v2PublicShopsShopIdListingsListingPathGet**](PublicPageInfoApi.md#v2PublicShopsShopIdListingsListingPathGet) | **GET** /v2/public/shops/{shopId}/listings/{listingPath} | Get all the needed information for product page of the shop
[**v2PublicShopsShopIdMainGet**](PublicPageInfoApi.md#v2PublicShopsShopIdMainGet) | **GET** /v2/public/shops/{shopId}/main | Get all the needed information for main page of the shop



## v2PublicShopsShopIdAnnouncementsAnnouncementPathGet

> GetAnnouncementDetailsResponseBaseResponse v2PublicShopsShopIdAnnouncementsAnnouncementPathGet(shopId, announcementPath)

Get all the needed information for announcement page of the shop

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PublicPageInfoApi();
let shopId = 789; // Number | 
let announcementPath = "announcementPath_example"; // String | 
apiInstance.v2PublicShopsShopIdAnnouncementsAnnouncementPathGet(shopId, announcementPath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 
 **announcementPath** | **String**|  | 

### Return type

[**GetAnnouncementDetailsResponseBaseResponse**](GetAnnouncementDetailsResponseBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v2PublicShopsShopIdFaqsGet

> GetFaqsDetailsResponseBaseResponse v2PublicShopsShopIdFaqsGet(shopId)

Get all the needed information for faqs page of the shop

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PublicPageInfoApi();
let shopId = 789; // Number | 
apiInstance.v2PublicShopsShopIdFaqsGet(shopId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 

### Return type

[**GetFaqsDetailsResponseBaseResponse**](GetFaqsDetailsResponseBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v2PublicShopsShopIdFeedbacksGet

> GetFeedbacksDetailsResponseBaseResponse v2PublicShopsShopIdFeedbacksGet(shopId)

Get all the needed information for feedbacks page of the shop

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PublicPageInfoApi();
let shopId = 56; // Number | 
apiInstance.v2PublicShopsShopIdFeedbacksGet(shopId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 

### Return type

[**GetFeedbacksDetailsResponseBaseResponse**](GetFeedbacksDetailsResponseBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v2PublicShopsShopIdListingsGet

> GetProductsPageResponseBaseResponse v2PublicShopsShopIdListingsGet(shopId)

Get all the needed information for products page of the shop

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PublicPageInfoApi();
let shopId = 789; // Number | 
apiInstance.v2PublicShopsShopIdListingsGet(shopId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 

### Return type

[**GetProductsPageResponseBaseResponse**](GetProductsPageResponseBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v2PublicShopsShopIdListingsListingPathGet

> GetProductPageResponseBaseResponse v2PublicShopsShopIdListingsListingPathGet(shopId, listingPath)

Get all the needed information for product page of the shop

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PublicPageInfoApi();
let shopId = 789; // Number | 
let listingPath = "listingPath_example"; // String | 
apiInstance.v2PublicShopsShopIdListingsListingPathGet(shopId, listingPath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 
 **listingPath** | **String**|  | 

### Return type

[**GetProductPageResponseBaseResponse**](GetProductPageResponseBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v2PublicShopsShopIdMainGet

> GetMainDetailsResponseBaseResponse v2PublicShopsShopIdMainGet(shopId)

Get all the needed information for main page of the shop

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PublicPageInfoApi();
let shopId = 789; // Number | 
apiInstance.v2PublicShopsShopIdMainGet(shopId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Number**|  | 

### Return type

[**GetMainDetailsResponseBaseResponse**](GetMainDetailsResponseBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

