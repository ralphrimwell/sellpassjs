# SellPassWebApi.ProductsV2Api

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdV2ProductsBulkUpdatePaymentMethodsPut**](ProductsV2Api.md#selfShopIdV2ProductsBulkUpdatePaymentMethodsPut) | **PUT** /self/{shopId}/v2/products/bulk/update/payment-methods | Bulk payment-methods update
[**selfShopIdV2ProductsGet**](ProductsV2Api.md#selfShopIdV2ProductsGet) | **GET** /self/{shopId}/v2/products | Get products
[**selfShopIdV2ProductsPost**](ProductsV2Api.md#selfShopIdV2ProductsPost) | **POST** /self/{shopId}/v2/products | Create a new product
[**selfShopIdV2ProductsProductIdGet**](ProductsV2Api.md#selfShopIdV2ProductsProductIdGet) | **GET** /self/{shopId}/v2/products/{productId} | Get product
[**selfShopIdV2ProductsProductIdPut**](ProductsV2Api.md#selfShopIdV2ProductsProductIdPut) | **PUT** /self/{shopId}/v2/products/{productId} | Update product
[**selfShopIdV2ProductsProductIdSeoImagePost**](ProductsV2Api.md#selfShopIdV2ProductsProductIdSeoImagePost) | **POST** /self/{shopId}/v2/products/{productId}/seo/image | Update seo image
[**selfShopIdV2ProductsProductIdThumbnailPost**](ProductsV2Api.md#selfShopIdV2ProductsProductIdThumbnailPost) | **POST** /self/{shopId}/v2/products/{productId}/thumbnail | Update product thumbnail



## selfShopIdV2ProductsBulkUpdatePaymentMethodsPut

> selfShopIdV2ProductsBulkUpdatePaymentMethodsPut(shopId, opts)

Bulk payment-methods update

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsV2Api();
let shopId = 56; // Number | 
let opts = {
  'bulkPaymentMethodsUpdate': new SellPassWebApi.BulkPaymentMethodsUpdate() // BulkPaymentMethodsUpdate | 
};
apiInstance.selfShopIdV2ProductsBulkUpdatePaymentMethodsPut(shopId, opts, (error, data, response) => {
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
 **bulkPaymentMethodsUpdate** | [**BulkPaymentMethodsUpdate**](BulkPaymentMethodsUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdV2ProductsGet

> selfShopIdV2ProductsGet(shopId, opts)

Get products

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsV2Api();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.selfShopIdV2ProductsGet(shopId, opts, (error, data, response) => {
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
 **orderBy** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdV2ProductsPost

> Int64BaseResponse selfShopIdV2ProductsPost(shopId, opts)

Create a new product

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsV2Api();
let shopId = 56; // Number | 
let opts = {
  'createProductV2Request': new SellPassWebApi.CreateProductV2Request() // CreateProductV2Request | 
};
apiInstance.selfShopIdV2ProductsPost(shopId, opts, (error, data, response) => {
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
 **createProductV2Request** | [**CreateProductV2Request**](CreateProductV2Request.md)|  | [optional] 

### Return type

[**Int64BaseResponse**](Int64BaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## selfShopIdV2ProductsProductIdGet

> selfShopIdV2ProductsProductIdGet(shopId, productId)

Get product

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsV2Api();
let shopId = 56; // Number | 
let productId = 789; // Number | 
apiInstance.selfShopIdV2ProductsProductIdGet(shopId, productId, (error, data, response) => {
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
 **productId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdV2ProductsProductIdPut

> selfShopIdV2ProductsProductIdPut(shopId, productId, opts)

Update product

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsV2Api();
let shopId = 56; // Number | 
let productId = 789; // Number | 
let opts = {
  'createProductV2Request': new SellPassWebApi.CreateProductV2Request() // CreateProductV2Request | 
};
apiInstance.selfShopIdV2ProductsProductIdPut(shopId, productId, opts, (error, data, response) => {
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
 **productId** | **Number**|  | 
 **createProductV2Request** | [**CreateProductV2Request**](CreateProductV2Request.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdV2ProductsProductIdSeoImagePost

> ObjectBaseResponse selfShopIdV2ProductsProductIdSeoImagePost(shopId, productId, opts)

Update seo image

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsV2Api();
let shopId = 56; // Number | 
let productId = 789; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdV2ProductsProductIdSeoImagePost(shopId, productId, opts, (error, data, response) => {
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
 **productId** | **Number**|  | 
 **file** | **File**|  | [optional] 

### Return type

[**ObjectBaseResponse**](ObjectBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: text/plain, application/json, text/json


## selfShopIdV2ProductsProductIdThumbnailPost

> ObjectBaseResponse selfShopIdV2ProductsProductIdThumbnailPost(shopId, productId, opts)

Update product thumbnail

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsV2Api();
let shopId = 56; // Number | 
let productId = 789; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdV2ProductsProductIdThumbnailPost(shopId, productId, opts, (error, data, response) => {
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
 **productId** | **Number**|  | 
 **file** | **File**|  | [optional] 

### Return type

[**ObjectBaseResponse**](ObjectBaseResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: text/plain, application/json, text/json

