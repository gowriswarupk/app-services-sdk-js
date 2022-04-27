/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.10.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const TopicOrderKey = {
    Name: 'name',
    Partitions: 'partitions',
    RetentionMs: 'retention.ms',
    RetentionBytes: 'retention.bytes'
} as const;

export type TopicOrderKey = typeof TopicOrderKey[keyof typeof TopicOrderKey];



