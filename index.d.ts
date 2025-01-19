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

export interface IJtdDict<T extends IJtdMetadata = IJtdMetadata> {
  [name: string]: IJtd<T>;
}

/**
 * The JTD with embedded definitions.
 *
 * @see https://tools.ietf.org/html/rfc8927 RFC8927
 * @see https://jsontypedef.com/docs/jtd-in-5-minutes JTD in 5 minutes
 */
export interface IJtdRoot<T extends IJtdMetadata = IJtdMetadata> extends IJtd<T> {
  definitions?: IJtdDict<T>;
}

/**
 * The definition of a type.
 */
export interface IJtd<T extends IJtdMetadata = IJtdMetadata> {
  metadata?: T;
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

export interface IJtdMinDict<T extends IJtdMinMetadata = IJtdMinMetadata> {
  [name: string]: IJtdMin<T>;
}

/**
 * The JTD with embedded definitions.
 *
 * @see https://tools.ietf.org/html/rfc8927 RFC8927
 * @see https://jsontypedef.com/docs/jtd-in-5-minutes JTD in 5 minutes
 */
export interface IJtdMinRoot<T extends IJtdMinMetadata = IJtdMinMetadata> extends IJtdMin<T> {
  def?: IJtdMinDict<T>; // definitions
}

/**
 * The definition of a type.
 */
export interface IJtdMin<T extends IJtdMinMetadata = IJtdMinMetadata> {
  md?: T; // metadata
  rq?: boolean; // opposite of nullable - required
  ref?: string;
  t?: JtdMinType | string; // type
  em?: Array<string>; // enum
  el?: IJtdMin<T>; //elements
  v?: IJtdMin<T>; // values
  p?: IJtdMinDict<T>; // properties
  d?: string; // discriminator
  mp?: IJtdMinDict<T>; // mapping
  args?: IJtdMinDict<T>; // arguments
}

export interface IJtdMinMetadata {
  n?: string; // name
  re?: boolean; // rootElement
  id?: boolean; // id
}
