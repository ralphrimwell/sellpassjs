# SellPassWebApi.GeneralShopSettingsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdSettingsCurrencyPut**](GeneralShopSettingsApi.md#selfShopIdSettingsCurrencyPut) | **PUT** /self/{shopId}/settings/currency | 
[**selfShopIdSettingsGet**](GeneralShopSettingsApi.md#selfShopIdSettingsGet) | **GET** /self/{shopId}/settings | 
[**selfShopIdSettingsNamePut**](GeneralShopSettingsApi.md#selfShopIdSettingsNamePut) | **PUT** /self/{shopId}/settings/name | 
[**selfShopIdSettingsPopupPut**](GeneralShopSettingsApi.md#selfShopIdSettingsPopupPut) | **PUT** /self/{shopId}/settings/popup | 
[**selfShopIdSettingsStatusPut**](GeneralShopSettingsApi.md#selfShopIdSettingsStatusPut) | **PUT** /self/{shopId}/settings/status | 
[**selfShopIdSettingsSubdomainPut**](GeneralShopSettingsApi.md#selfShopIdSettingsSubdomainPut) | **PUT** /self/{shopId}/settings/subdomain | 
[**selfShopIdSettingsTermsPut**](GeneralShopSettingsApi.md#selfShopIdSettingsTermsPut) | **PUT** /self/{shopId}/settings/terms | 
[**selfShopIdSettingsTimezonePut**](GeneralShopSettingsApi.md#selfShopIdSettingsTimezonePut) | **PUT** /self/{shopId}/settings/timezone | 



## selfShopIdSettingsCurrencyPut

> selfShopIdSettingsCurrencyPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeShopCurrencyRequest': new SellPassWebApi.ChangeShopCurrencyRequest() // ChangeShopCurrencyRequest | 
};
apiInstance.selfShopIdSettingsCurrencyPut(shopId, opts, (error, data, response) => {
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
 **changeShopCurrencyRequest** | [**ChangeShopCurrencyRequest**](ChangeShopCurrencyRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsGet

> selfShopIdSettingsGet(shopId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
apiInstance.selfShopIdSettingsGet(shopId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdSettingsNamePut

> selfShopIdSettingsNamePut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeShopNameRequest': new SellPassWebApi.ChangeShopNameRequest() // ChangeShopNameRequest | 
};
apiInstance.selfShopIdSettingsNamePut(shopId, opts, (error, data, response) => {
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
 **changeShopNameRequest** | [**ChangeShopNameRequest**](ChangeShopNameRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsPopupPut

> selfShopIdSettingsPopupPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeShopPopupRequest': new SellPassWebApi.ChangeShopPopupRequest() // ChangeShopPopupRequest | 
};
apiInstance.selfShopIdSettingsPopupPut(shopId, opts, (error, data, response) => {
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
 **changeShopPopupRequest** | [**ChangeShopPopupRequest**](ChangeShopPopupRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsStatusPut

> selfShopIdSettingsStatusPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeShopStatusRequest': new SellPassWebApi.ChangeShopStatusRequest() // ChangeShopStatusRequest | 
};
apiInstance.selfShopIdSettingsStatusPut(shopId, opts, (error, data, response) => {
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
 **changeShopStatusRequest** | [**ChangeShopStatusRequest**](ChangeShopStatusRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsSubdomainPut

> selfShopIdSettingsSubdomainPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeSubDomainRequest': new SellPassWebApi.ChangeSubDomainRequest() // ChangeSubDomainRequest | 
};
apiInstance.selfShopIdSettingsSubdomainPut(shopId, opts, (error, data, response) => {
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
 **changeSubDomainRequest** | [**ChangeSubDomainRequest**](ChangeSubDomainRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsTermsPut

> selfShopIdSettingsTermsPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeTermsRequest': new SellPassWebApi.ChangeTermsRequest() // ChangeTermsRequest | 
};
apiInstance.selfShopIdSettingsTermsPut(shopId, opts, (error, data, response) => {
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
 **changeTermsRequest** | [**ChangeTermsRequest**](ChangeTermsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsTimezonePut

> selfShopIdSettingsTimezonePut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.GeneralShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeShopTimezoneRequest': new SellPassWebApi.ChangeShopTimezoneRequest() // ChangeShopTimezoneRequest | 
};
apiInstance.selfShopIdSettingsTimezonePut(shopId, opts, (error, data, response) => {
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
 **changeShopTimezoneRequest** | [**ChangeShopTimezoneRequest**](ChangeShopTimezoneRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

