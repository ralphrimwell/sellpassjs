# SellPassWebApi.ProductsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdProductsBulkDeletePost**](ProductsApi.md#selfShopIdProductsBulkDeletePost) | **POST** /self/{shopId}/products/bulk/delete | 
[**selfShopIdProductsBulkUpdateCustomFieldsPut**](ProductsApi.md#selfShopIdProductsBulkUpdateCustomFieldsPut) | **PUT** /self/{shopId}/products/bulk/update/custom-fields | 
[**selfShopIdProductsBulkUpdateCustomerNotePut**](ProductsApi.md#selfShopIdProductsBulkUpdateCustomerNotePut) | **PUT** /self/{shopId}/products/bulk/update/customer-note | 
[**selfShopIdProductsBulkUpdateDiscordIntegrationPut**](ProductsApi.md#selfShopIdProductsBulkUpdateDiscordIntegrationPut) | **PUT** /self/{shopId}/products/bulk/update/discord-integration | 
[**selfShopIdProductsBulkUpdateVisibilityPut**](ProductsApi.md#selfShopIdProductsBulkUpdateVisibilityPut) | **PUT** /self/{shopId}/products/bulk/update/visibility | 
[**selfShopIdProductsGet**](ProductsApi.md#selfShopIdProductsGet) | **GET** /self/{shopId}/products | 
[**selfShopIdProductsProductIdDelete**](ProductsApi.md#selfShopIdProductsProductIdDelete) | **DELETE** /self/{shopId}/products/{productId} | 



## selfShopIdProductsBulkDeletePost

> selfShopIdProductsBulkDeletePost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsApi();
let shopId = 56; // Number | 
let opts = {
  'bulkBaseUpdateRequest': new SellPassWebApi.BulkBaseUpdateRequest() // BulkBaseUpdateRequest | 
};
apiInstance.selfShopIdProductsBulkDeletePost(shopId, opts, (error, data, response) => {
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
 **bulkBaseUpdateRequest** | [**BulkBaseUpdateRequest**](BulkBaseUpdateRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdProductsBulkUpdateCustomFieldsPut

> selfShopIdProductsBulkUpdateCustomFieldsPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsApi();
let shopId = 56; // Number | 
let opts = {
  'bulkCustomFieldsUpdate': new SellPassWebApi.BulkCustomFieldsUpdate() // BulkCustomFieldsUpdate | 
};
apiInstance.selfShopIdProductsBulkUpdateCustomFieldsPut(shopId, opts, (error, data, response) => {
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
 **bulkCustomFieldsUpdate** | [**BulkCustomFieldsUpdate**](BulkCustomFieldsUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdProductsBulkUpdateCustomerNotePut

> selfShopIdProductsBulkUpdateCustomerNotePut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsApi();
let shopId = 56; // Number | 
let opts = {
  'bulkCustomerNoteUpdate': new SellPassWebApi.BulkCustomerNoteUpdate() // BulkCustomerNoteUpdate | 
};
apiInstance.selfShopIdProductsBulkUpdateCustomerNotePut(shopId, opts, (error, data, response) => {
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
 **bulkCustomerNoteUpdate** | [**BulkCustomerNoteUpdate**](BulkCustomerNoteUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdProductsBulkUpdateDiscordIntegrationPut

> selfShopIdProductsBulkUpdateDiscordIntegrationPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsApi();
let shopId = 56; // Number | 
let opts = {
  'bulkDiscordIntegrationUpdate': new SellPassWebApi.BulkDiscordIntegrationUpdate() // BulkDiscordIntegrationUpdate | 
};
apiInstance.selfShopIdProductsBulkUpdateDiscordIntegrationPut(shopId, opts, (error, data, response) => {
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
 **bulkDiscordIntegrationUpdate** | [**BulkDiscordIntegrationUpdate**](BulkDiscordIntegrationUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdProductsBulkUpdateVisibilityPut

> selfShopIdProductsBulkUpdateVisibilityPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsApi();
let shopId = 56; // Number | 
let opts = {
  'bulkVisibilityUpdate': new SellPassWebApi.BulkVisibilityUpdate() // BulkVisibilityUpdate | 
};
apiInstance.selfShopIdProductsBulkUpdateVisibilityPut(shopId, opts, (error, data, response) => {
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
 **bulkVisibilityUpdate** | [**BulkVisibilityUpdate**](BulkVisibilityUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdProductsGet

> selfShopIdProductsGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdProductsGet(shopId, opts, (error, data, response) => {
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


## selfShopIdProductsProductIdDelete

> selfShopIdProductsProductIdDelete(shopId, productId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.ProductsApi();
let shopId = 56; // Number | 
let productId = 789; // Number | 
apiInstance.selfShopIdProductsProductIdDelete(shopId, productId, (error, data, response) => {
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

