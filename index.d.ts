// https://github.com/smikhalevski/jtdc/blob/master/packages/types/src/main/jtd-types.ts
/**
 * JTD standard data types.
 */
export const enum JtdType {
  BOOLEAN = 'boolean',
  STRING = 'string',

  /**
   * JSON strings containing an RFC3339 timestamp.
   *
   * ```ts
   * "1985-04-12T23:20:50.52Z"
   * ```
   */
  TIMESTAMP = 'timestamp',
  FLOAT32 = 'float32',
  FLOAT64 = 'float64',
  INT8 = 'int8',
  UINT8 = 'uint8',
  INT16 = 'int16',
  UINT16 = 'uint16',
  INT32 = 'int32',
  UINT32 = 'uint32',
  UNKNOWN = "unknown"
}

export interface IJtdDict {
  [name: string]: IJtd;
}

/**
 * The JTD with embedded definitions.
 *
 * @see https://tools.ietf.org/html/rfc8927 RFC8927
 * @see https://jsontypedef.com/docs/jtd-in-5-minutes JTD in 5 minutes
 */
export interface IJtdRoot extends IJtd {
  definitions?: IJtdDict;
}

/**
 * The definition of a type.
 */
export interface IJtd {
  metadata?: IJtdMetadata;
  nullable?: boolean;
  ref?: string;
  type?: JtdType | string;
  enum?: Array<string>;
  elements?: IJtd;
  values?: IJtd;
  properties?: IJtdDict;
  optionalProperties?: IJtdDict;
  discriminator?: string;
  mapping?: IJtdDict;
  arguments?: IJtdDict
}

export interface IJtdMetadata {
  name?: string,
  rootElement?: boolean,
  id?: boolean,
}
///--- min

// https://github.com/smikhalevski/jtdc/blob/master/packages/types/src/main/jtd-types.ts
/**
 * JTD standard data types.
 */
 export const enum JtdMinType {
  BOOLEAN = "b",
  STRING = "st",

  /**
   * JSON strings containing an RFC3339 timestamp.
   *
   * ```ts
   * "1985-04-12T23:20:50.52Z"
   * ```
   */
  TIMESTAMP = "tz",
  FLOAT32 = "f32",
  FLOAT64 = "f64",
  INT8 = "i8",
  UINT8 = "ui8",
  INT16 = "i16",
  UINT16 = "ui16",
  INT32 = "i32",
  UINT32 = "ui32",
  UNKNOWN = "u",
}

export interface IJtdMinDict {
  [name: string]: IJtdMin;
}

/**
 * The JTD with embedded definitions.
 *
 * @see https://tools.ietf.org/html/rfc8927 RFC8927
 * @see https://jsontypedef.com/docs/jtd-in-5-minutes JTD in 5 minutes
 */
export interface IJtdMinRoot extends IJtdMin {
  def?: IJtdMinDict; // definitions
}

/**
 * The definition of a type.
 */
export interface IJtdMin<T = any> {
  md?: IJtdMinMetadata<T>; // metadata
  rq?: boolean; // opposite of nullable - required
  ref?: string;
  t?: JtdMinType | string; // type
  em?: Array<string>; // enum
  el?: IJtdMin; //elements
  v?: IJtdMin; // values
  p?: IJtdMinDict; // properties
  d?: string; // discriminator
  mp?: IJtdMinDict; // mapping
  args?: IJtdMinDict; // arguments
}

export type IJtdMinMetadata<T = any> = T & {
  n?: string; // name
  re?: boolean; // rootElement
  id?: boolean; // id
}
