/* tslint:disable */
/* eslint-disable */
/**
 * Apicurio Registry API [v2]
 * Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.  The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata.   The supported artifact types include: - Apache Avro schema - AsyncAPI specification - Google protocol buffers - GraphQL schema - JSON Schema - Kafka Connect schema - OpenAPI specification - Web Services Description Language - XML Schema Definition   **Important**: The Apicurio Registry REST API is available from `https://MY-REGISTRY-URL/apis/registry/v2` by default. Therefore you must prefix all API operation paths with `../apis/registry/v2` in this case. For example: `../apis/registry/v2/ids/globalIds/{globalId}`. 
 *
 * The version of the OpenAPI document: 2.1.0-SNAPSHOT
 * Contact: apicurio@lists.jboss.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ArtifactState } from './artifact-state';
import { ArtifactType } from './artifact-type';

/**
 * Models a single artifact from the result set returned when searching for artifacts.
 * @export
 * @interface SearchedVersion
 */
export interface SearchedVersion {
    /**
     * 
     * @type {string}
     * @memberof SearchedVersion
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchedVersion
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchedVersion
     */
    createdOn: string;
    /**
     * 
     * @type {string}
     * @memberof SearchedVersion
     */
    createdBy: string;
    /**
     * 
     * @type {ArtifactType}
     * @memberof SearchedVersion
     */
    type: ArtifactType;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchedVersion
     */
    labels?: Array<string>;
    /**
     * 
     * @type {ArtifactState}
     * @memberof SearchedVersion
     */
    state: ArtifactState;
    /**
     * 
     * @type {number}
     * @memberof SearchedVersion
     */
    globalId: number;
    /**
     * 
     * @type {string}
     * @memberof SearchedVersion
     */
    version: string;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     * @type {{ [key: string]: string; }}
     * @memberof SearchedVersion
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof SearchedVersion
     */
    contentId: number;
}


