# SellPassWebApi.FeedbacksApi

All URIs are relative to *https://dev.sellpass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**selfShopIdFeedbacksAppealsGet**](FeedbacksApi.md#selfShopIdFeedbacksAppealsGet) | **GET** /self/{shopId}/feedbacks/appeals | 
[**selfShopIdFeedbacksFeedbackIdAnswerPost**](FeedbacksApi.md#selfShopIdFeedbacksFeedbackIdAnswerPost) | **POST** /self/{shopId}/feedbacks/{feedbackId}/answer | 
[**selfShopIdFeedbacksFeedbackIdAppealPost**](FeedbacksApi.md#selfShopIdFeedbacksFeedbackIdAppealPost) | **POST** /self/{shopId}/feedbacks/{feedbackId}/appeal | 
[**selfShopIdFeedbacksFeedbackIdGet**](FeedbacksApi.md#selfShopIdFeedbacksFeedbackIdGet) | **GET** /self/{shopId}/feedbacks/{feedbackId} | 
[**selfShopIdFeedbacksGet**](FeedbacksApi.md#selfShopIdFeedbacksGet) | **GET** /self/{shopId}/feedbacks | 



## selfShopIdFeedbacksAppealsGet

> selfShopIdFeedbacksAppealsGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.FeedbacksApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdFeedbacksAppealsGet(shopId, opts, (error, data, response) => {
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


## selfShopIdFeedbacksFeedbackIdAnswerPost

> selfShopIdFeedbacksFeedbackIdAnswerPost(shopId, feedbackId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.FeedbacksApi();
let shopId = 56; // Number | 
let feedbackId = 789; // Number | 
let opts = {
  'answerFeedbackRequest': new SellPassWebApi.AnswerFeedbackRequest() // AnswerFeedbackRequest | 
};
apiInstance.selfShopIdFeedbacksFeedbackIdAnswerPost(shopId, feedbackId, opts, (error, data, response) => {
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
 **feedbackId** | **Number**|  | 
 **answerFeedbackRequest** | [**AnswerFeedbackRequest**](AnswerFeedbackRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdFeedbacksFeedbackIdAppealPost

> selfShopIdFeedbacksFeedbackIdAppealPost(shopId, feedbackId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.FeedbacksApi();
let shopId = 56; // Number | 
let feedbackId = 789; // Number | 
let opts = {
  'appealFeedbackRequest': new SellPassWebApi.AppealFeedbackRequest() // AppealFeedbackRequest | 
};
apiInstance.selfShopIdFeedbacksFeedbackIdAppealPost(shopId, feedbackId, opts, (error, data, response) => {
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
 **feedbackId** | **Number**|  | 
 **appealFeedbackRequest** | [**AppealFeedbackRequest**](AppealFeedbackRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## selfShopIdFeedbacksFeedbackIdGet

> selfShopIdFeedbacksFeedbackIdGet(shopId, feedbackId)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.FeedbacksApi();
let shopId = 56; // Number | 
let feedbackId = 789; // Number | 
apiInstance.selfShopIdFeedbacksFeedbackIdGet(shopId, feedbackId, (error, data, response) => {
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
 **feedbackId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## selfShopIdFeedbacksGet

> selfShopIdFeedbacksGet(shopId, opts)



### Example

```javascript
import SellPassWebApi from 'sell_pass_web_api';
let defaultClient = SellPassWebApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SellPassWebApi.FeedbacksApi();
let shopId = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchString': "searchString_example" // String | 
};
apiInstance.selfShopIdFeedbacksGet(shopId, opts, (error, data, response) => {
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

