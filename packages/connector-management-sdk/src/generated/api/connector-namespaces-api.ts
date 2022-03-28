/* tslint:disable */
/* eslint-disable */
/**
 * Connector Service Fleet Manager
 * Connector Service Fleet Manager is a Rest API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ConnectorNamespace } from '../model';
// @ts-ignore
import { ConnectorNamespaceEvalRequest } from '../model';
// @ts-ignore
import { ConnectorNamespaceList } from '../model';
// @ts-ignore
import { ConnectorNamespacePatchRequest } from '../model';
// @ts-ignore
import { ConnectorNamespaceRequest } from '../model';
/**
 * ConnectorNamespacesApi - axios parameter creator
 * @export
 */
export const ConnectorNamespacesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new connector namespace
         * @summary Create a new connector namespace
         * @param {ConnectorNamespaceRequest} connectorNamespaceRequest Connector namespace data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConnectorNamespace: async (connectorNamespaceRequest: ConnectorNamespaceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorNamespaceRequest' is not null or undefined
            assertParamExists('createConnectorNamespace', 'connectorNamespaceRequest', connectorNamespaceRequest)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_namespaces`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(connectorNamespaceRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new evaluation connector namespace
         * @summary Create a new short lived evaluation connector namespace
         * @param {ConnectorNamespaceEvalRequest} connectorNamespaceEvalRequest Connector namespace data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEvaluationNamespace: async (connectorNamespaceEvalRequest: ConnectorNamespaceEvalRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorNamespaceEvalRequest' is not null or undefined
            assertParamExists('createEvaluationNamespace', 'connectorNamespaceEvalRequest', connectorNamespaceEvalRequest)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_namespaces/eval`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(connectorNamespaceEvalRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a connector namespace
         * @summary Delete a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConnectorNamespace: async (connectorNamespaceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorNamespaceId' is not null or undefined
            assertParamExists('deleteConnectorNamespace', 'connectorNamespaceId', connectorNamespaceId)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_namespaces/{connector_namespace_id}`
                .replace(`{${"connector_namespace_id"}}`, encodeURIComponent(String(connectorNamespaceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a connector namespace
         * @summary Get a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectorNamespace: async (connectorNamespaceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorNamespaceId' is not null or undefined
            assertParamExists('getConnectorNamespace', 'connectorNamespaceId', connectorNamespaceId)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_namespaces/{connector_namespace_id}`
                .replace(`{${"connector_namespace_id"}}`, encodeURIComponent(String(connectorNamespaceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of connector namespaces
         * @summary Returns a list of connector namespaces
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the &#x60;order by&#x60; clause of an SQL statement. Each query can be ordered by any of the &#x60;ConnectorType&#x60; fields. For example, to return all Connector types ordered by their name, use the following syntax:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  To return all Connector types ordered by their name _and_ version, use the following syntax:  &#x60;&#x60;&#x60;sql name asc, version asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results are ordered by name.
         * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the &#x60;where&#x60; clause of a SQL statement. Allowed fields in the search are &#x60;name&#x60;, &#x60;description&#x60;, &#x60;version&#x60;, &#x60;label&#x60;, and &#x60;channel&#x60;. Allowed operators are &#x60;&lt;&gt;&#x60;, &#x60;&#x3D;&#x60;, or &#x60;LIKE&#x60;. Allowed conjunctive operators are &#x60;AND&#x60; and &#x60;OR&#x60;. However, you can use a maximum of 10 conjunctions in a search query.  Examples:  To return a Connector Type with the name &#x60;aws-sqs-source&#x60; and the channel &#x60;stable&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name &#x3D; aws-sqs-source and channel &#x3D; stable &#x60;&#x60;&#x60;[p-]  To return a Kafka instance with a name that starts with &#x60;aws&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name like aws%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the Connector Type that the user has permission to see are returned.  Note. If the query is invalid, an error is returned. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConnectorNamespaces: async (page?: string, size?: string, orderBy?: string, search?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_namespaces`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * udpate a connector namespace
         * @summary udpate a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {ConnectorNamespacePatchRequest} connectorNamespacePatchRequest Data to update namespace with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConnectorNamespaceById: async (connectorNamespaceId: string, connectorNamespacePatchRequest: ConnectorNamespacePatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorNamespaceId' is not null or undefined
            assertParamExists('updateConnectorNamespaceById', 'connectorNamespaceId', connectorNamespaceId)
            // verify required parameter 'connectorNamespacePatchRequest' is not null or undefined
            assertParamExists('updateConnectorNamespaceById', 'connectorNamespacePatchRequest', connectorNamespacePatchRequest)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_namespaces/{connector_namespace_id}`
                .replace(`{${"connector_namespace_id"}}`, encodeURIComponent(String(connectorNamespaceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(connectorNamespacePatchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConnectorNamespacesApi - functional programming interface
 * @export
 */
export const ConnectorNamespacesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConnectorNamespacesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new connector namespace
         * @summary Create a new connector namespace
         * @param {ConnectorNamespaceRequest} connectorNamespaceRequest Connector namespace data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConnectorNamespace(connectorNamespaceRequest: ConnectorNamespaceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorNamespace>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConnectorNamespace(connectorNamespaceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new evaluation connector namespace
         * @summary Create a new short lived evaluation connector namespace
         * @param {ConnectorNamespaceEvalRequest} connectorNamespaceEvalRequest Connector namespace data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEvaluationNamespace(connectorNamespaceEvalRequest: ConnectorNamespaceEvalRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorNamespace>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEvaluationNamespace(connectorNamespaceEvalRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a connector namespace
         * @summary Delete a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteConnectorNamespace(connectorNamespaceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConnectorNamespace(connectorNamespaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a connector namespace
         * @summary Get a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConnectorNamespace(connectorNamespaceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorNamespace>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConnectorNamespace(connectorNamespaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of connector namespaces
         * @summary Returns a list of connector namespaces
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the &#x60;order by&#x60; clause of an SQL statement. Each query can be ordered by any of the &#x60;ConnectorType&#x60; fields. For example, to return all Connector types ordered by their name, use the following syntax:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  To return all Connector types ordered by their name _and_ version, use the following syntax:  &#x60;&#x60;&#x60;sql name asc, version asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results are ordered by name.
         * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the &#x60;where&#x60; clause of a SQL statement. Allowed fields in the search are &#x60;name&#x60;, &#x60;description&#x60;, &#x60;version&#x60;, &#x60;label&#x60;, and &#x60;channel&#x60;. Allowed operators are &#x60;&lt;&gt;&#x60;, &#x60;&#x3D;&#x60;, or &#x60;LIKE&#x60;. Allowed conjunctive operators are &#x60;AND&#x60; and &#x60;OR&#x60;. However, you can use a maximum of 10 conjunctions in a search query.  Examples:  To return a Connector Type with the name &#x60;aws-sqs-source&#x60; and the channel &#x60;stable&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name &#x3D; aws-sqs-source and channel &#x3D; stable &#x60;&#x60;&#x60;[p-]  To return a Kafka instance with a name that starts with &#x60;aws&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name like aws%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the Connector Type that the user has permission to see are returned.  Note. If the query is invalid, an error is returned. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listConnectorNamespaces(page?: string, size?: string, orderBy?: string, search?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorNamespaceList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listConnectorNamespaces(page, size, orderBy, search, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * udpate a connector namespace
         * @summary udpate a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {ConnectorNamespacePatchRequest} connectorNamespacePatchRequest Data to update namespace with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConnectorNamespaceById(connectorNamespaceId: string, connectorNamespacePatchRequest: ConnectorNamespacePatchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConnectorNamespaceById(connectorNamespaceId, connectorNamespacePatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConnectorNamespacesApi - factory interface
 * @export
 */
export const ConnectorNamespacesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConnectorNamespacesApiFp(configuration)
    return {
        /**
         * Create a new connector namespace
         * @summary Create a new connector namespace
         * @param {ConnectorNamespaceRequest} connectorNamespaceRequest Connector namespace data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConnectorNamespace(connectorNamespaceRequest: ConnectorNamespaceRequest, options?: any): AxiosPromise<ConnectorNamespace> {
            return localVarFp.createConnectorNamespace(connectorNamespaceRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new evaluation connector namespace
         * @summary Create a new short lived evaluation connector namespace
         * @param {ConnectorNamespaceEvalRequest} connectorNamespaceEvalRequest Connector namespace data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEvaluationNamespace(connectorNamespaceEvalRequest: ConnectorNamespaceEvalRequest, options?: any): AxiosPromise<ConnectorNamespace> {
            return localVarFp.createEvaluationNamespace(connectorNamespaceEvalRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a connector namespace
         * @summary Delete a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConnectorNamespace(connectorNamespaceId: string, options?: any): AxiosPromise<Error> {
            return localVarFp.deleteConnectorNamespace(connectorNamespaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a connector namespace
         * @summary Get a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectorNamespace(connectorNamespaceId: string, options?: any): AxiosPromise<ConnectorNamespace> {
            return localVarFp.getConnectorNamespace(connectorNamespaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of connector namespaces
         * @summary Returns a list of connector namespaces
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the &#x60;order by&#x60; clause of an SQL statement. Each query can be ordered by any of the &#x60;ConnectorType&#x60; fields. For example, to return all Connector types ordered by their name, use the following syntax:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  To return all Connector types ordered by their name _and_ version, use the following syntax:  &#x60;&#x60;&#x60;sql name asc, version asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results are ordered by name.
         * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the &#x60;where&#x60; clause of a SQL statement. Allowed fields in the search are &#x60;name&#x60;, &#x60;description&#x60;, &#x60;version&#x60;, &#x60;label&#x60;, and &#x60;channel&#x60;. Allowed operators are &#x60;&lt;&gt;&#x60;, &#x60;&#x3D;&#x60;, or &#x60;LIKE&#x60;. Allowed conjunctive operators are &#x60;AND&#x60; and &#x60;OR&#x60;. However, you can use a maximum of 10 conjunctions in a search query.  Examples:  To return a Connector Type with the name &#x60;aws-sqs-source&#x60; and the channel &#x60;stable&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name &#x3D; aws-sqs-source and channel &#x3D; stable &#x60;&#x60;&#x60;[p-]  To return a Kafka instance with a name that starts with &#x60;aws&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name like aws%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the Connector Type that the user has permission to see are returned.  Note. If the query is invalid, an error is returned. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConnectorNamespaces(page?: string, size?: string, orderBy?: string, search?: string, options?: any): AxiosPromise<ConnectorNamespaceList> {
            return localVarFp.listConnectorNamespaces(page, size, orderBy, search, options).then((request) => request(axios, basePath));
        },
        /**
         * udpate a connector namespace
         * @summary udpate a connector namespace
         * @param {string} connectorNamespaceId The id of the connector namespace
         * @param {ConnectorNamespacePatchRequest} connectorNamespacePatchRequest Data to update namespace with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConnectorNamespaceById(connectorNamespaceId: string, connectorNamespacePatchRequest: ConnectorNamespacePatchRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateConnectorNamespaceById(connectorNamespaceId, connectorNamespacePatchRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConnectorNamespacesApi - interface
 * @export
 * @interface ConnectorNamespacesApi
 */
export interface ConnectorNamespacesApiInterface {
    /**
     * Create a new connector namespace
     * @summary Create a new connector namespace
     * @param {ConnectorNamespaceRequest} connectorNamespaceRequest Connector namespace data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApiInterface
     */
    createConnectorNamespace(connectorNamespaceRequest: ConnectorNamespaceRequest, options?: AxiosRequestConfig): AxiosPromise<ConnectorNamespace>;

    /**
     * Create a new evaluation connector namespace
     * @summary Create a new short lived evaluation connector namespace
     * @param {ConnectorNamespaceEvalRequest} connectorNamespaceEvalRequest Connector namespace data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApiInterface
     */
    createEvaluationNamespace(connectorNamespaceEvalRequest: ConnectorNamespaceEvalRequest, options?: AxiosRequestConfig): AxiosPromise<ConnectorNamespace>;

    /**
     * Delete a connector namespace
     * @summary Delete a connector namespace
     * @param {string} connectorNamespaceId The id of the connector namespace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApiInterface
     */
    deleteConnectorNamespace(connectorNamespaceId: string, options?: AxiosRequestConfig): AxiosPromise<Error>;

    /**
     * Get a connector namespace
     * @summary Get a connector namespace
     * @param {string} connectorNamespaceId The id of the connector namespace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApiInterface
     */
    getConnectorNamespace(connectorNamespaceId: string, options?: AxiosRequestConfig): AxiosPromise<ConnectorNamespace>;

    /**
     * Returns a list of connector namespaces
     * @summary Returns a list of connector namespaces
     * @param {string} [page] Page index
     * @param {string} [size] Number of items in each page
     * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the &#x60;order by&#x60; clause of an SQL statement. Each query can be ordered by any of the &#x60;ConnectorType&#x60; fields. For example, to return all Connector types ordered by their name, use the following syntax:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  To return all Connector types ordered by their name _and_ version, use the following syntax:  &#x60;&#x60;&#x60;sql name asc, version asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results are ordered by name.
     * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the &#x60;where&#x60; clause of a SQL statement. Allowed fields in the search are &#x60;name&#x60;, &#x60;description&#x60;, &#x60;version&#x60;, &#x60;label&#x60;, and &#x60;channel&#x60;. Allowed operators are &#x60;&lt;&gt;&#x60;, &#x60;&#x3D;&#x60;, or &#x60;LIKE&#x60;. Allowed conjunctive operators are &#x60;AND&#x60; and &#x60;OR&#x60;. However, you can use a maximum of 10 conjunctions in a search query.  Examples:  To return a Connector Type with the name &#x60;aws-sqs-source&#x60; and the channel &#x60;stable&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name &#x3D; aws-sqs-source and channel &#x3D; stable &#x60;&#x60;&#x60;[p-]  To return a Kafka instance with a name that starts with &#x60;aws&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name like aws%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the Connector Type that the user has permission to see are returned.  Note. If the query is invalid, an error is returned. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApiInterface
     */
    listConnectorNamespaces(page?: string, size?: string, orderBy?: string, search?: string, options?: AxiosRequestConfig): AxiosPromise<ConnectorNamespaceList>;

    /**
     * udpate a connector namespace
     * @summary udpate a connector namespace
     * @param {string} connectorNamespaceId The id of the connector namespace
     * @param {ConnectorNamespacePatchRequest} connectorNamespacePatchRequest Data to update namespace with
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApiInterface
     */
    updateConnectorNamespaceById(connectorNamespaceId: string, connectorNamespacePatchRequest: ConnectorNamespacePatchRequest, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ConnectorNamespacesApi - object-oriented interface
 * @export
 * @class ConnectorNamespacesApi
 * @extends {BaseAPI}
 */
export class ConnectorNamespacesApi extends BaseAPI implements ConnectorNamespacesApiInterface {
    /**
     * Create a new connector namespace
     * @summary Create a new connector namespace
     * @param {ConnectorNamespaceRequest} connectorNamespaceRequest Connector namespace data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApi
     */
    public createConnectorNamespace(connectorNamespaceRequest: ConnectorNamespaceRequest, options?: AxiosRequestConfig) {
        return ConnectorNamespacesApiFp(this.configuration).createConnectorNamespace(connectorNamespaceRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new evaluation connector namespace
     * @summary Create a new short lived evaluation connector namespace
     * @param {ConnectorNamespaceEvalRequest} connectorNamespaceEvalRequest Connector namespace data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApi
     */
    public createEvaluationNamespace(connectorNamespaceEvalRequest: ConnectorNamespaceEvalRequest, options?: AxiosRequestConfig) {
        return ConnectorNamespacesApiFp(this.configuration).createEvaluationNamespace(connectorNamespaceEvalRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a connector namespace
     * @summary Delete a connector namespace
     * @param {string} connectorNamespaceId The id of the connector namespace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApi
     */
    public deleteConnectorNamespace(connectorNamespaceId: string, options?: AxiosRequestConfig) {
        return ConnectorNamespacesApiFp(this.configuration).deleteConnectorNamespace(connectorNamespaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a connector namespace
     * @summary Get a connector namespace
     * @param {string} connectorNamespaceId The id of the connector namespace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApi
     */
    public getConnectorNamespace(connectorNamespaceId: string, options?: AxiosRequestConfig) {
        return ConnectorNamespacesApiFp(this.configuration).getConnectorNamespace(connectorNamespaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of connector namespaces
     * @summary Returns a list of connector namespaces
     * @param {string} [page] Page index
     * @param {string} [size] Number of items in each page
     * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the &#x60;order by&#x60; clause of an SQL statement. Each query can be ordered by any of the &#x60;ConnectorType&#x60; fields. For example, to return all Connector types ordered by their name, use the following syntax:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  To return all Connector types ordered by their name _and_ version, use the following syntax:  &#x60;&#x60;&#x60;sql name asc, version asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results are ordered by name.
     * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the &#x60;where&#x60; clause of a SQL statement. Allowed fields in the search are &#x60;name&#x60;, &#x60;description&#x60;, &#x60;version&#x60;, &#x60;label&#x60;, and &#x60;channel&#x60;. Allowed operators are &#x60;&lt;&gt;&#x60;, &#x60;&#x3D;&#x60;, or &#x60;LIKE&#x60;. Allowed conjunctive operators are &#x60;AND&#x60; and &#x60;OR&#x60;. However, you can use a maximum of 10 conjunctions in a search query.  Examples:  To return a Connector Type with the name &#x60;aws-sqs-source&#x60; and the channel &#x60;stable&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name &#x3D; aws-sqs-source and channel &#x3D; stable &#x60;&#x60;&#x60;[p-]  To return a Kafka instance with a name that starts with &#x60;aws&#x60;, use the following syntax:  &#x60;&#x60;&#x60; name like aws%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the Connector Type that the user has permission to see are returned.  Note. If the query is invalid, an error is returned. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApi
     */
    public listConnectorNamespaces(page?: string, size?: string, orderBy?: string, search?: string, options?: AxiosRequestConfig) {
        return ConnectorNamespacesApiFp(this.configuration).listConnectorNamespaces(page, size, orderBy, search, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * udpate a connector namespace
     * @summary udpate a connector namespace
     * @param {string} connectorNamespaceId The id of the connector namespace
     * @param {ConnectorNamespacePatchRequest} connectorNamespacePatchRequest Data to update namespace with
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorNamespacesApi
     */
    public updateConnectorNamespaceById(connectorNamespaceId: string, connectorNamespacePatchRequest: ConnectorNamespacePatchRequest, options?: AxiosRequestConfig) {
        return ConnectorNamespacesApiFp(this.configuration).updateConnectorNamespaceById(connectorNamespaceId, connectorNamespacePatchRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
