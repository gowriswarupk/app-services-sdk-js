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
 * 
 * @export
 * @interface ArtifactMetaData
 */
export interface ArtifactMetaData {
    /**
     * 
     * @type {string}
     * @memberof ArtifactMetaData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactMetaData
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactMetaData
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactMetaData
     */
    createdOn: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactMetaData
     */
    modifiedBy: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactMetaData
     */
    modifiedOn: string;
    /**
     * The ID of a single artifact.
     * @type {string}
     * @memberof ArtifactMetaData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactMetaData
     */
    version: string;
    /**
     * 
     * @type {ArtifactType}
     * @memberof ArtifactMetaData
     */
    type: ArtifactType;
    /**
     * 
     * @type {number}
     * @memberof ArtifactMetaData
     */
    globalId: number;
    /**
     * 
     * @type {ArtifactState}
     * @memberof ArtifactMetaData
     */
    state: ArtifactState;
    /**
     * 
     * @type {Array<string>}
     * @memberof ArtifactMetaData
     */
    labels?: Array<string>;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     * @type {{ [key: string]: string; }}
     * @memberof ArtifactMetaData
     */
    properties?: { [key: string]: string; };
    /**
     * An ID of a single artifact group.
     * @type {string}
     * @memberof ArtifactMetaData
     */
    groupId?: string;
    /**
     * 
     * @type {number}
     * @memberof ArtifactMetaData
     */
    contentId: number;
}


