# SellPassWebApi.CategoriesApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdCategoriesCategoryIdDelete**](CategoriesApi.md#selfShopIdCategoriesCategoryIdDelete) | **DELETE** /self/{shopId}/categories/{categoryId} | Delete Category
[**selfShopIdCategoriesCategoryIdGet**](CategoriesApi.md#selfShopIdCategoriesCategoryIdGet) | **GET** /self/{shopId}/categories/{categoryId} | Get Category
[**selfShopIdCategoriesCategoryIdPut**](CategoriesApi.md#selfShopIdCategoriesCategoryIdPut) | **PUT** /self/{shopId}/categories/{categoryId} | Edit Category
[**selfShopIdCategoriesGet**](CategoriesApi.md#selfShopIdCategoriesGet) | **GET** /self/{shopId}/categories | Get All
[**selfShopIdCategoriesPost**](CategoriesApi.md#selfShopIdCategoriesPost) | **POST** /self/{shopId}/categories | Create Category



## selfShopIdCategoriesCategoryIdDelete

> selfShopIdCategoriesCategoryIdDelete(shopId, categoryId)

Delete Category

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CategoriesApi();
let shopId = 56; // Number | 
let categoryId = 789; // Number | 
apiInstance.selfShopIdCategoriesCategoryIdDelete(shopId, categoryId, (error, data, response) => {
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
 **categoryId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdCategoriesCategoryIdGet

> selfShopIdCategoriesCategoryIdGet(shopId, categoryId)

Get Category

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CategoriesApi();
let shopId = 56; // Number | 
let categoryId = 789; // Number | 
apiInstance.selfShopIdCategoriesCategoryIdGet(shopId, categoryId, (error, data, response) => {
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
 **categoryId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdCategoriesCategoryIdPut

> selfShopIdCategoriesCategoryIdPut(shopId, categoryId, opts)

Edit Category

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CategoriesApi();
let shopId = 56; // Number | 
let categoryId = 789; // Number | 
let opts = {
  'createCategoryRequest': new SellPassWebApi.CreateCategoryRequest() // CreateCategoryRequest | 
};
apiInstance.selfShopIdCategoriesCategoryIdPut(shopId, categoryId, opts, (error, data, response) => {
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
 **categoryId** | **Number**|  | 
 **createCategoryRequest** | [**CreateCategoryRequest**](CreateCategoryRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdCategoriesGet

> selfShopIdCategoriesGet(shopId, opts)

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

let apiInstance = new SellPassWebApi.CategoriesApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdCategoriesGet(shopId, opts, (error, data, response) => {
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


## selfShopIdCategoriesPost

> selfShopIdCategoriesPost(shopId, opts)

Create Category

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CategoriesApi();
let shopId = 56; // Number | 
let opts = {
  'createCategoryRequest': new SellPassWebApi.CreateCategoryRequest() // CreateCategoryRequest | 
};
apiInstance.selfShopIdCategoriesPost(shopId, opts, (error, data, response) => {
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
 **createCategoryRequest** | [**CreateCategoryRequest**](CreateCategoryRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

