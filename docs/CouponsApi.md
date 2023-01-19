# SellPassWebApi.CouponsApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdCouponsCouponIdDelete**](CouponsApi.md#selfShopIdCouponsCouponIdDelete) | **DELETE** /self/{shopId}/coupons/{couponId} | Delete Coupon
[**selfShopIdCouponsCouponIdGet**](CouponsApi.md#selfShopIdCouponsCouponIdGet) | **GET** /self/{shopId}/coupons/{couponId} | Get Coupon
[**selfShopIdCouponsCouponIdPut**](CouponsApi.md#selfShopIdCouponsCouponIdPut) | **PUT** /self/{shopId}/coupons/{couponId} | Edit Coupon
[**selfShopIdCouponsGet**](CouponsApi.md#selfShopIdCouponsGet) | **GET** /self/{shopId}/coupons | Get All
[**selfShopIdCouponsPost**](CouponsApi.md#selfShopIdCouponsPost) | **POST** /self/{shopId}/coupons | Create Coupon



## selfShopIdCouponsCouponIdDelete

> selfShopIdCouponsCouponIdDelete(shopId, couponId)

Delete Coupon

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CouponsApi();
let shopId = 56; // Number | 
let couponId = 789; // Number | 
apiInstance.selfShopIdCouponsCouponIdDelete(shopId, couponId, (error, data, response) => {
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
 **couponId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdCouponsCouponIdGet

> selfShopIdCouponsCouponIdGet(shopId, couponId)

Get Coupon

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CouponsApi();
let shopId = 56; // Number | 
let couponId = 789; // Number | 
apiInstance.selfShopIdCouponsCouponIdGet(shopId, couponId, (error, data, response) => {
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
 **couponId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdCouponsCouponIdPut

> selfShopIdCouponsCouponIdPut(shopId, couponId, opts)

Edit Coupon

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CouponsApi();
let shopId = 56; // Number | 
let couponId = 789; // Number | 
let opts = {
  'createCouponRequest': new SellPassWebApi.CreateCouponRequest() // CreateCouponRequest | 
};
apiInstance.selfShopIdCouponsCouponIdPut(shopId, couponId, opts, (error, data, response) => {
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
 **couponId** | **Number**|  | 
 **createCouponRequest** | [**CreateCouponRequest**](CreateCouponRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdCouponsGet

> selfShopIdCouponsGet(shopId, opts)

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

let apiInstance = new SellPassWebApi.CouponsApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdCouponsGet(shopId, opts, (error, data, response) => {
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


## selfShopIdCouponsPost

> selfShopIdCouponsPost(shopId, opts)

Create Coupon

### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.CouponsApi();
let shopId = 56; // Number | 
let opts = {
  'createCouponRequest': new SellPassWebApi.CreateCouponRequest() // CreateCouponRequest | 
};
apiInstance.selfShopIdCouponsPost(shopId, opts, (error, data, response) => {
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
 **createCouponRequest** | [**CreateCouponRequest**](CreateCouponRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

