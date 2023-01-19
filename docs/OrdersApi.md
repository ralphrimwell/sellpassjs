# SellPassWebApi.OrdersApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdInvoicesGet**](OrdersApi.md#selfShopIdInvoicesGet) | **GET** /self/{shopId}/invoices | Get all invoices
[**selfShopIdInvoicesInvoiceIdGet**](OrdersApi.md#selfShopIdInvoicesInvoiceIdGet) | **GET** /self/{shopId}/invoices/{invoiceId} | Get invoice
[**selfShopIdInvoicesInvoiceIdProcessPost**](OrdersApi.md#selfShopIdInvoicesInvoiceIdProcessPost) | **POST** /self/{shopId}/invoices/{invoiceId}/process | Process invoice
[**selfShopIdInvoicesInvoiceIdReplacementPost**](OrdersApi.md#selfShopIdInvoicesInvoiceIdReplacementPost) | **POST** /self/{shopId}/invoices/{invoiceId}/replacement | Replace invoice
[**selfShopIdInvoicesInvoiceIdResendPost**](OrdersApi.md#selfShopIdInvoicesInvoiceIdResendPost) | **POST** /self/{shopId}/invoices/{invoiceId}/resend | Resend email to customer



## selfShopIdInvoicesGet

> selfShopIdInvoicesGet(shopId, opts)

Get all invoices

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.OrdersApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdInvoicesGet(shopId, opts, (error, data, response) => {
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


## selfShopIdInvoicesInvoiceIdGet

> selfShopIdInvoicesInvoiceIdGet(shopId, invoiceId)

Get invoice

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.OrdersApi();
let shopId = 56; // Number | 
let invoiceId = "invoiceId_example"; // String | 
apiInstance.selfShopIdInvoicesInvoiceIdGet(shopId, invoiceId, (error, data, response) => {
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
 **invoiceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdInvoicesInvoiceIdProcessPost

> selfShopIdInvoicesInvoiceIdProcessPost(shopId, invoiceId)

Process invoice

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.OrdersApi();
let shopId = 56; // Number | 
let invoiceId = "invoiceId_example"; // String | 
apiInstance.selfShopIdInvoicesInvoiceIdProcessPost(shopId, invoiceId, (error, data, response) => {
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
 **invoiceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdInvoicesInvoiceIdReplacementPost

> selfShopIdInvoicesInvoiceIdReplacementPost(shopId, invoiceId, opts)

Replace invoice

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.OrdersApi();
let shopId = 56; // Number | 
let invoiceId = "invoiceId_example"; // String | 
let opts = {
  'replacementRequest': new SellPassWebApi.ReplacementRequest() // ReplacementRequest | 
};
apiInstance.selfShopIdInvoicesInvoiceIdReplacementPost(shopId, invoiceId, opts, (error, data, response) => {
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
 **invoiceId** | **String**|  | 
 **replacementRequest** | [**ReplacementRequest**](ReplacementRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdInvoicesInvoiceIdResendPost

> selfShopIdInvoicesInvoiceIdResendPost(shopId, invoiceId, opts)

Resend email to customer

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.OrdersApi();
let shopId = 56; // Number | 
let invoiceId = "invoiceId_example"; // String | 
let opts = {
  'resendInvoiceRequest': new SellPassWebApi.ResendInvoiceRequest() // ResendInvoiceRequest | 
};
apiInstance.selfShopIdInvoicesInvoiceIdResendPost(shopId, invoiceId, opts, (error, data, response) => {
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
 **invoiceId** | **String**|  | 
 **resendInvoiceRequest** | [**ResendInvoiceRequest**](ResendInvoiceRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

