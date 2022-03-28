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



/**
 * 
 * @export
 * @interface ConnectorNamespaceQuota
 */
export interface ConnectorNamespaceQuota {
    /**
     * 
     * @type {number}
     * @memberof ConnectorNamespaceQuota
     */
    'connectors'?: number;
    /**
     * Memory quota for limits or requests
     * @type {string}
     * @memberof ConnectorNamespaceQuota
     */
    'memory_requests'?: string;
    /**
     * Memory quota for limits or requests
     * @type {string}
     * @memberof ConnectorNamespaceQuota
     */
    'memory_limits'?: string;
    /**
     * CPU quota for limits or requests
     * @type {string}
     * @memberof ConnectorNamespaceQuota
     */
    'cpu_requests'?: string;
    /**
     * CPU quota for limits or requests
     * @type {string}
     * @memberof ConnectorNamespaceQuota
     */
    'cpu_limits'?: string;
}

