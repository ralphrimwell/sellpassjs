# SellPassWebApi.CustomizationApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdCustomizationDesignPut**](CustomizationApi.md#selfShopIdCustomizationDesignPut) | **PUT** /self/{shopId}/customization/design | 
[**selfShopIdCustomizationGet**](CustomizationApi.md#selfShopIdCustomizationGet) | **GET** /self/{shopId}/customization | 
[**selfShopIdCustomizationLinksPut**](CustomizationApi.md#selfShopIdCustomizationLinksPut) | **PUT** /self/{shopId}/customization/links | 
[**selfShopIdCustomizationLogoPost**](CustomizationApi.md#selfShopIdCustomizationLogoPost) | **POST** /self/{shopId}/customization/logo | 
[**selfShopIdCustomizationSeoFaviconPost**](CustomizationApi.md#selfShopIdCustomizationSeoFaviconPost) | **POST** /self/{shopId}/customization/seo/favicon | 
[**selfShopIdCustomizationSeoImagePost**](CustomizationApi.md#selfShopIdCustomizationSeoImagePost) | **POST** /self/{shopId}/customization/seo/image | 
[**selfShopIdCustomizationSeoPut**](CustomizationApi.md#selfShopIdCustomizationSeoPut) | **PUT** /self/{shopId}/customization/seo | 
[**selfShopIdCustomizationStorefrontBackgroundPost**](CustomizationApi.md#selfShopIdCustomizationStorefrontBackgroundPost) | **POST** /self/{shopId}/customization/storefront/background | 
[**selfShopIdCustomizationStorefrontPut**](CustomizationApi.md#selfShopIdCustomizationStorefrontPut) | **PUT** /self/{shopId}/customization/storefront | 
[**selfShopIdCustomizationWidgetsPut**](CustomizationApi.md#selfShopIdCustomizationWidgetsPut) | **PUT** /self/{shopId}/customization/widgets | 



## selfShopIdCustomizationDesignPut

> selfShopIdCustomizationDesignPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'changeShopDesignRequest': new SellPassWebApi.ChangeShopDesignRequest() // ChangeShopDesignRequest | 
};
apiInstance.selfShopIdCustomizationDesignPut(shopId, opts, (error, data, response) => {
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


## selfShopIdCustomizationGet

> selfShopIdCustomizationGet(shopId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
apiInstance.selfShopIdCustomizationGet(shopId, (error, data, response) => {
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


## selfShopIdCustomizationLinksPut

> selfShopIdCustomizationLinksPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'changeSocialLinksRequest': new SellPassWebApi.ChangeSocialLinksRequest() // ChangeSocialLinksRequest | 
};
apiInstance.selfShopIdCustomizationLinksPut(shopId, opts, (error, data, response) => {
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


## selfShopIdCustomizationLogoPost

> selfShopIdCustomizationLogoPost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdCustomizationLogoPost(shopId, opts, (error, data, response) => {
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


## selfShopIdCustomizationSeoFaviconPost

> selfShopIdCustomizationSeoFaviconPost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdCustomizationSeoFaviconPost(shopId, opts, (error, data, response) => {
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


## selfShopIdCustomizationSeoImagePost

> selfShopIdCustomizationSeoImagePost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdCustomizationSeoImagePost(shopId, opts, (error, data, response) => {
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


## selfShopIdCustomizationSeoPut

> selfShopIdCustomizationSeoPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'changeSeoRequest': new SellPassWebApi.ChangeSeoRequest() // ChangeSeoRequest | 
};
apiInstance.selfShopIdCustomizationSeoPut(shopId, opts, (error, data, response) => {
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
 **changeSeoRequest** | [**ChangeSeoRequest**](ChangeSeoRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdCustomizationStorefrontBackgroundPost

> selfShopIdCustomizationStorefrontBackgroundPost(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.selfShopIdCustomizationStorefrontBackgroundPost(shopId, opts, (error, data, response) => {
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


## selfShopIdCustomizationStorefrontPut

> selfShopIdCustomizationStorefrontPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'changeStorefrontText': new SellPassWebApi.ChangeStorefrontText() // ChangeStorefrontText | 
};
apiInstance.selfShopIdCustomizationStorefrontPut(shopId, opts, (error, data, response) => {
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


## selfShopIdCustomizationWidgetsPut

> selfShopIdCustomizationWidgetsPut(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CustomizationApi();
let shopId = 56; // Number | 
let opts = {
  'changeWidgetsRequest': new SellPassWebApi.ChangeWidgetsRequest() // ChangeWidgetsRequest | 
};
apiInstance.selfShopIdCustomizationWidgetsPut(shopId, opts, (error, data, response) => {
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
 **changeWidgetsRequest** | [**ChangeWidgetsRequest**](ChangeWidgetsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

