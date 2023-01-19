# SellPassWebApi.PaymentsShopSettingsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdSettingsPaymentsCashappPut**](PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsCashappPut) | **PUT** /self/{shopId}/settings/payments/cashapp | 
[**selfShopIdSettingsPaymentsCoinbasecommercePut**](PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsCoinbasecommercePut) | **PUT** /self/{shopId}/settings/payments/coinbasecommerce | 
[**selfShopIdSettingsPaymentsPaypalFfPut**](PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsPaypalFfPut) | **PUT** /self/{shopId}/settings/payments/paypal-ff | 
[**selfShopIdSettingsPaymentsPaypalemailPut**](PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsPaypalemailPut) | **PUT** /self/{shopId}/settings/payments/paypalemail | 
[**selfShopIdSettingsPaymentsStripeconnectPut**](PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsStripeconnectPut) | **PUT** /self/{shopId}/settings/payments/stripeconnect | 
[**selfShopIdSettingsPaymentsVirtualPaymentsPut**](PaymentsShopSettingsApi.md#selfShopIdSettingsPaymentsVirtualPaymentsPut) | **PUT** /self/{shopId}/settings/payments/virtual-payments | 



## selfShopIdSettingsPaymentsCashappPut

> selfShopIdSettingsPaymentsCashappPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PaymentsShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeCashappRequest': new SellPassWebApi.ChangeCashappRequest() // ChangeCashappRequest | 
};
apiInstance.selfShopIdSettingsPaymentsCashappPut(shopId, opts, (error, data, response) => {
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
 **changeCashappRequest** | [**ChangeCashappRequest**](ChangeCashappRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsPaymentsCoinbasecommercePut

> selfShopIdSettingsPaymentsCoinbasecommercePut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PaymentsShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeCoinbaseCommerceRequest': new SellPassWebApi.ChangeCoinbaseCommerceRequest() // ChangeCoinbaseCommerceRequest | 
};
apiInstance.selfShopIdSettingsPaymentsCoinbasecommercePut(shopId, opts, (error, data, response) => {
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
 **changeCoinbaseCommerceRequest** | [**ChangeCoinbaseCommerceRequest**](ChangeCoinbaseCommerceRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsPaymentsPaypalFfPut

> selfShopIdSettingsPaymentsPaypalFfPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PaymentsShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changePayPalFFRequest': new SellPassWebApi.ChangePayPalFFRequest() // ChangePayPalFFRequest | 
};
apiInstance.selfShopIdSettingsPaymentsPaypalFfPut(shopId, opts, (error, data, response) => {
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
 **changePayPalFFRequest** | [**ChangePayPalFFRequest**](ChangePayPalFFRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsPaymentsPaypalemailPut

> selfShopIdSettingsPaymentsPaypalemailPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PaymentsShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changePayPalEmailRequest': new SellPassWebApi.ChangePayPalEmailRequest() // ChangePayPalEmailRequest | 
};
apiInstance.selfShopIdSettingsPaymentsPaypalemailPut(shopId, opts, (error, data, response) => {
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
 **changePayPalEmailRequest** | [**ChangePayPalEmailRequest**](ChangePayPalEmailRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsPaymentsStripeconnectPut

> selfShopIdSettingsPaymentsStripeconnectPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PaymentsShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeStripeConnectRequest': new SellPassWebApi.ChangeStripeConnectRequest() // ChangeStripeConnectRequest | 
};
apiInstance.selfShopIdSettingsPaymentsStripeconnectPut(shopId, opts, (error, data, response) => {
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
 **changeStripeConnectRequest** | [**ChangeStripeConnectRequest**](ChangeStripeConnectRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsPaymentsVirtualPaymentsPut

> selfShopIdSettingsPaymentsVirtualPaymentsPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.PaymentsShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeVirtualPaymentsRequest': new SellPassWebApi.ChangeVirtualPaymentsRequest() // ChangeVirtualPaymentsRequest | 
};
apiInstance.selfShopIdSettingsPaymentsVirtualPaymentsPut(shopId, opts, (error, data, response) => {
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
 **changeVirtualPaymentsRequest** | [**ChangeVirtualPaymentsRequest**](ChangeVirtualPaymentsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

