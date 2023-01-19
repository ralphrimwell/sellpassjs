# SellPassWebApi.DesignShopSettingsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdSettingsDesignLinksPut**](DesignShopSettingsApi.md#selfShopIdSettingsDesignLinksPut) | **PUT** /self/{shopId}/settings/design/links | 
[**selfShopIdSettingsDesignLogoPost**](DesignShopSettingsApi.md#selfShopIdSettingsDesignLogoPost) | **POST** /self/{shopId}/settings/design/logo | 
[**selfShopIdSettingsDesignPut**](DesignShopSettingsApi.md#selfShopIdSettingsDesignPut) | **PUT** /self/{shopId}/settings/design | 
[**selfShopIdSettingsDesignStorefrontLogoPost**](DesignShopSettingsApi.md#selfShopIdSettingsDesignStorefrontLogoPost) | **POST** /self/{shopId}/settings/design/storefront/logo | 
[**selfShopIdSettingsDesignStorefrontPut**](DesignShopSettingsApi.md#selfShopIdSettingsDesignStorefrontPut) | **PUT** /self/{shopId}/settings/design/storefront | 



## selfShopIdSettingsDesignLinksPut

> selfShopIdSettingsDesignLinksPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.DesignShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeSocialLinksRequest': new SellPassWebApi.ChangeSocialLinksRequest() // ChangeSocialLinksRequest | 
};
apiInstance.selfShopIdSettingsDesignLinksPut(shopId, opts, (error, data, response) => {
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
 **changeSocialLinksRequest** | [**ChangeSocialLinksRequest**](ChangeSocialLinksRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsDesignLogoPost

> selfShopIdSettingsDesignLogoPost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.DesignShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdSettingsDesignLogoPost(shopId, opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## selfShopIdSettingsDesignPut

> selfShopIdSettingsDesignPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.DesignShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeShopDesignRequest': new SellPassWebApi.ChangeShopDesignRequest() // ChangeShopDesignRequest | 
};
apiInstance.selfShopIdSettingsDesignPut(shopId, opts, (error, data, response) => {
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
 **changeShopDesignRequest** | [**ChangeShopDesignRequest**](ChangeShopDesignRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdSettingsDesignStorefrontLogoPost

> selfShopIdSettingsDesignStorefrontLogoPost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.DesignShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdSettingsDesignStorefrontLogoPost(shopId, opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## selfShopIdSettingsDesignStorefrontPut

> selfShopIdSettingsDesignStorefrontPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.DesignShopSettingsApi();
let shopId = 56; // Number | 
let opts = {
  'changeStorefrontText': new SellPassWebApi.ChangeStorefrontText() // ChangeStorefrontText | 
};
apiInstance.selfShopIdSettingsDesignStorefrontPut(shopId, opts, (error, data, response) => {
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
 **changeStorefrontText** | [**ChangeStorefrontText**](ChangeStorefrontText.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

