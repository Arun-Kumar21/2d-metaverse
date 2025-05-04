
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Space
 * 
 */
export type Space = $Result.DefaultSelection<Prisma.$SpacePayload>
/**
 * Model SpaceElement
 * 
 */
export type SpaceElement = $Result.DefaultSelection<Prisma.$SpaceElementPayload>
/**
 * Model Element
 * 
 */
export type Element = $Result.DefaultSelection<Prisma.$ElementPayload>
/**
 * Model Map
 * 
 */
export type Map = $Result.DefaultSelection<Prisma.$MapPayload>
/**
 * Model MapElements
 * 
 */
export type MapElements = $Result.DefaultSelection<Prisma.$MapElementsPayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  User: 'User'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.space`: Exposes CRUD operations for the **Space** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spaces
    * const spaces = await prisma.space.findMany()
    * ```
    */
  get space(): Prisma.SpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spaceElement`: Exposes CRUD operations for the **SpaceElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpaceElements
    * const spaceElements = await prisma.spaceElement.findMany()
    * ```
    */
  get spaceElement(): Prisma.SpaceElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.element`: Exposes CRUD operations for the **Element** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elements
    * const elements = await prisma.element.findMany()
    * ```
    */
  get element(): Prisma.ElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.map`: Exposes CRUD operations for the **Map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maps
    * const maps = await prisma.map.findMany()
    * ```
    */
  get map(): Prisma.MapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapElements`: Exposes CRUD operations for the **MapElements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapElements
    * const mapElements = await prisma.mapElements.findMany()
    * ```
    */
  get mapElements(): Prisma.MapElementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Space: 'Space',
    SpaceElement: 'SpaceElement',
    Element: 'Element',
    Map: 'Map',
    MapElements: 'MapElements',
    Avatar: 'Avatar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "space" | "spaceElement" | "element" | "map" | "mapElements" | "avatar"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Space: {
        payload: Prisma.$SpacePayload<ExtArgs>
        fields: Prisma.SpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findFirst: {
            args: Prisma.SpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findMany: {
            args: Prisma.SpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          create: {
            args: Prisma.SpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          createMany: {
            args: Prisma.SpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          update: {
            args: Prisma.SpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          deleteMany: {
            args: Prisma.SpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          aggregate: {
            args: Prisma.SpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpace>
          }
          groupBy: {
            args: Prisma.SpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SpaceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SpaceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SpaceCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceCountAggregateOutputType> | number
          }
        }
      }
      SpaceElement: {
        payload: Prisma.$SpaceElementPayload<ExtArgs>
        fields: Prisma.SpaceElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>
          }
          findFirst: {
            args: Prisma.SpaceElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>
          }
          findMany: {
            args: Prisma.SpaceElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>[]
          }
          create: {
            args: Prisma.SpaceElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>
          }
          createMany: {
            args: Prisma.SpaceElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpaceElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>
          }
          update: {
            args: Prisma.SpaceElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>
          }
          deleteMany: {
            args: Prisma.SpaceElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpaceElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>
          }
          aggregate: {
            args: Prisma.SpaceElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpaceElement>
          }
          groupBy: {
            args: Prisma.SpaceElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceElementGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SpaceElementFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SpaceElementAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SpaceElementCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceElementCountAggregateOutputType> | number
          }
        }
      }
      Element: {
        payload: Prisma.$ElementPayload<ExtArgs>
        fields: Prisma.ElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          findFirst: {
            args: Prisma.ElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          findMany: {
            args: Prisma.ElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>[]
          }
          create: {
            args: Prisma.ElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          createMany: {
            args: Prisma.ElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          update: {
            args: Prisma.ElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          deleteMany: {
            args: Prisma.ElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          aggregate: {
            args: Prisma.ElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElement>
          }
          groupBy: {
            args: Prisma.ElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElementGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ElementFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ElementAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ElementCountArgs<ExtArgs>
            result: $Utils.Optional<ElementCountAggregateOutputType> | number
          }
        }
      }
      Map: {
        payload: Prisma.$MapPayload<ExtArgs>
        fields: Prisma.MapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findFirst: {
            args: Prisma.MapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findMany: {
            args: Prisma.MapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          create: {
            args: Prisma.MapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          createMany: {
            args: Prisma.MapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          update: {
            args: Prisma.MapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          deleteMany: {
            args: Prisma.MapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          aggregate: {
            args: Prisma.MapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap>
          }
          groupBy: {
            args: Prisma.MapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MapFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MapAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MapCountArgs<ExtArgs>
            result: $Utils.Optional<MapCountAggregateOutputType> | number
          }
        }
      }
      MapElements: {
        payload: Prisma.$MapElementsPayload<ExtArgs>
        fields: Prisma.MapElementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapElementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapElementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload>
          }
          findFirst: {
            args: Prisma.MapElementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapElementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload>
          }
          findMany: {
            args: Prisma.MapElementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload>[]
          }
          create: {
            args: Prisma.MapElementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload>
          }
          createMany: {
            args: Prisma.MapElementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MapElementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload>
          }
          update: {
            args: Prisma.MapElementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload>
          }
          deleteMany: {
            args: Prisma.MapElementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapElementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MapElementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapElementsPayload>
          }
          aggregate: {
            args: Prisma.MapElementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapElements>
          }
          groupBy: {
            args: Prisma.MapElementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapElementsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MapElementsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MapElementsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MapElementsCountArgs<ExtArgs>
            result: $Utils.Optional<MapElementsCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AvatarFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AvatarAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    space?: SpaceOmit
    spaceElement?: SpaceElementOmit
    element?: ElementOmit
    map?: MapOmit
    mapElements?: MapElementsOmit
    avatar?: AvatarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    space: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | UserCountOutputTypeCountSpaceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
  }


  /**
   * Count Type SpaceCountOutputType
   */

  export type SpaceCountOutputType = {
    elements: number
  }

  export type SpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | SpaceCountOutputTypeCountElementsArgs
  }

  // Custom InputTypes
  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceCountOutputType
     */
    select?: SpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceElementWhereInput
  }


  /**
   * Count Type ElementCountOutputType
   */

  export type ElementCountOutputType = {
    spaces: number
    mapElements: number
  }

  export type ElementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spaces?: boolean | ElementCountOutputTypeCountSpacesArgs
    mapElements?: boolean | ElementCountOutputTypeCountMapElementsArgs
  }

  // Custom InputTypes
  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementCountOutputType
     */
    select?: ElementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeCountSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceElementWhereInput
  }

  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeCountMapElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapElementsWhereInput
  }


  /**
   * Count Type MapCountOutputType
   */

  export type MapCountOutputType = {
    mapElements: number
  }

  export type MapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapElements?: boolean | MapCountOutputTypeCountMapElementsArgs
  }

  // Custom InputTypes
  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapCountOutputType
     */
    select?: MapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountMapElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapElementsWhereInput
  }


  /**
   * Count Type AvatarCountOutputType
   */

  export type AvatarCountOutputType = {
    users: number
  }

  export type AvatarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AvatarCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarCountOutputType
     */
    select?: AvatarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    avatarId: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    avatarId: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    avatarId: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    avatarId?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    avatarId?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    avatarId?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    avatarId: string | null
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    avatarId?: boolean
    role?: boolean
    space?: boolean | User$spaceArgs<ExtArgs>
    avatar?: boolean | User$avatarArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    avatarId?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "avatarId" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | User$spaceArgs<ExtArgs>
    avatar?: boolean | User$avatarArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>[]
      avatar: Prisma.$AvatarPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      avatarId: string | null
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends User$spaceArgs<ExtArgs> = {}>(args?: Subset<T, User$spaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avatar<T extends User$avatarArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.space
   */
  export type User$spaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    cursor?: SpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * User.avatar
   */
  export type User$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Space
   */

  export type AggregateSpace = {
    _count: SpaceCountAggregateOutputType | null
    _avg: SpaceAvgAggregateOutputType | null
    _sum: SpaceSumAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  export type SpaceAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type SpaceSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type SpaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    width: number | null
    height: number | null
    thumbnail: string | null
    creatorId: string | null
  }

  export type SpaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    width: number | null
    height: number | null
    thumbnail: string | null
    creatorId: string | null
  }

  export type SpaceCountAggregateOutputType = {
    id: number
    name: number
    width: number
    height: number
    thumbnail: number
    creatorId: number
    _all: number
  }


  export type SpaceAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type SpaceSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type SpaceMinAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    thumbnail?: true
    creatorId?: true
  }

  export type SpaceMaxAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    thumbnail?: true
    creatorId?: true
  }

  export type SpaceCountAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    thumbnail?: true
    creatorId?: true
    _all?: true
  }

  export type SpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Space to aggregate.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spaces
    **/
    _count?: true | SpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceMaxAggregateInputType
  }

  export type GetSpaceAggregateType<T extends SpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpace[P]>
      : GetScalarType<T[P], AggregateSpace[P]>
  }




  export type SpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithAggregationInput | SpaceOrderByWithAggregationInput[]
    by: SpaceScalarFieldEnum[] | SpaceScalarFieldEnum
    having?: SpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceCountAggregateInputType | true
    _avg?: SpaceAvgAggregateInputType
    _sum?: SpaceSumAggregateInputType
    _min?: SpaceMinAggregateInputType
    _max?: SpaceMaxAggregateInputType
  }

  export type SpaceGroupByOutputType = {
    id: string
    name: string
    width: number
    height: number
    thumbnail: string | null
    creatorId: string
    _count: SpaceCountAggregateOutputType | null
    _avg: SpaceAvgAggregateOutputType | null
    _sum: SpaceSumAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  type GetSpaceGroupByPayload<T extends SpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceGroupByOutputType[P]>
        }
      >
    >


  export type SpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    thumbnail?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    elements?: boolean | Space$elementsArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>



  export type SpaceSelectScalar = {
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    thumbnail?: boolean
    creatorId?: boolean
  }

  export type SpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "width" | "height" | "thumbnail" | "creatorId", ExtArgs["result"]["space"]>
  export type SpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    elements?: boolean | Space$elementsArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Space"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      elements: Prisma.$SpaceElementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      width: number
      height: number
      thumbnail: string | null
      creatorId: string
    }, ExtArgs["result"]["space"]>
    composites: {}
  }

  type SpaceGetPayload<S extends boolean | null | undefined | SpaceDefaultArgs> = $Result.GetResult<Prisma.$SpacePayload, S>

  type SpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceCountAggregateInputType | true
    }

  export interface SpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Space'], meta: { name: 'Space' } }
    /**
     * Find zero or one Space that matches the filter.
     * @param {SpaceFindUniqueArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceFindUniqueArgs>(args: SelectSubset<T, SpaceFindUniqueArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Space that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceFindUniqueOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceFindFirstArgs>(args?: SelectSubset<T, SpaceFindFirstArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spaces
     * const spaces = await prisma.space.findMany()
     * 
     * // Get first 10 Spaces
     * const spaces = await prisma.space.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceWithIdOnly = await prisma.space.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceFindManyArgs>(args?: SelectSubset<T, SpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Space.
     * @param {SpaceCreateArgs} args - Arguments to create a Space.
     * @example
     * // Create one Space
     * const Space = await prisma.space.create({
     *   data: {
     *     // ... data to create a Space
     *   }
     * })
     * 
     */
    create<T extends SpaceCreateArgs>(args: SelectSubset<T, SpaceCreateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spaces.
     * @param {SpaceCreateManyArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceCreateManyArgs>(args?: SelectSubset<T, SpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Space.
     * @param {SpaceDeleteArgs} args - Arguments to delete one Space.
     * @example
     * // Delete one Space
     * const Space = await prisma.space.delete({
     *   where: {
     *     // ... filter to delete one Space
     *   }
     * })
     * 
     */
    delete<T extends SpaceDeleteArgs>(args: SelectSubset<T, SpaceDeleteArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Space.
     * @param {SpaceUpdateArgs} args - Arguments to update one Space.
     * @example
     * // Update one Space
     * const space = await prisma.space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceUpdateArgs>(args: SelectSubset<T, SpaceUpdateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spaces.
     * @param {SpaceDeleteManyArgs} args - Arguments to filter Spaces to delete.
     * @example
     * // Delete a few Spaces
     * const { count } = await prisma.space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceDeleteManyArgs>(args?: SelectSubset<T, SpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceUpdateManyArgs>(args: SelectSubset<T, SpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Space.
     * @param {SpaceUpsertArgs} args - Arguments to update or create a Space.
     * @example
     * // Update or create a Space
     * const space = await prisma.space.upsert({
     *   create: {
     *     // ... data to create a Space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Space we want to update
     *   }
     * })
     */
    upsert<T extends SpaceUpsertArgs>(args: SelectSubset<T, SpaceUpsertArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spaces that matches the filter.
     * @param {SpaceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const space = await prisma.space.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SpaceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Space.
     * @param {SpaceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const space = await prisma.space.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SpaceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceCountArgs} args - Arguments to filter Spaces to count.
     * @example
     * // Count the number of Spaces
     * const count = await prisma.space.count({
     *   where: {
     *     // ... the filter for the Spaces we want to count
     *   }
     * })
    **/
    count<T extends SpaceCountArgs>(
      args?: Subset<T, SpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpaceAggregateArgs>(args: Subset<T, SpaceAggregateArgs>): Prisma.PrismaPromise<GetSpaceAggregateType<T>>

    /**
     * Group by Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceGroupByArgs['orderBy'] }
        : { orderBy?: SpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Space model
   */
  readonly fields: SpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    elements<T extends Space$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Space$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Space model
   */
  interface SpaceFieldRefs {
    readonly id: FieldRef<"Space", 'String'>
    readonly name: FieldRef<"Space", 'String'>
    readonly width: FieldRef<"Space", 'Int'>
    readonly height: FieldRef<"Space", 'Int'>
    readonly thumbnail: FieldRef<"Space", 'String'>
    readonly creatorId: FieldRef<"Space", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Space findUnique
   */
  export type SpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findUniqueOrThrow
   */
  export type SpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findFirst
   */
  export type SpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findFirstOrThrow
   */
  export type SpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findMany
   */
  export type SpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Spaces to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space create
   */
  export type SpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Space.
     */
    data: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
  }

  /**
   * Space createMany
   */
  export type SpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
  }

  /**
   * Space update
   */
  export type SpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Space.
     */
    data: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
    /**
     * Choose, which Space to update.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space updateMany
   */
  export type SpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
  }

  /**
   * Space upsert
   */
  export type SpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Space to update in case it exists.
     */
    where: SpaceWhereUniqueInput
    /**
     * In case the Space found by the `where` argument doesn't exist, create a new Space with this data.
     */
    create: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
    /**
     * In case the Space was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
  }

  /**
   * Space delete
   */
  export type SpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter which Space to delete.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space deleteMany
   */
  export type SpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spaces to delete
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to delete.
     */
    limit?: number
  }

  /**
   * Space findRaw
   */
  export type SpaceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Space aggregateRaw
   */
  export type SpaceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Space.elements
   */
  export type Space$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    where?: SpaceElementWhereInput
    orderBy?: SpaceElementOrderByWithRelationInput | SpaceElementOrderByWithRelationInput[]
    cursor?: SpaceElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[]
  }

  /**
   * Space without action
   */
  export type SpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
  }


  /**
   * Model SpaceElement
   */

  export type AggregateSpaceElement = {
    _count: SpaceElementCountAggregateOutputType | null
    _avg: SpaceElementAvgAggregateOutputType | null
    _sum: SpaceElementSumAggregateOutputType | null
    _min: SpaceElementMinAggregateOutputType | null
    _max: SpaceElementMaxAggregateOutputType | null
  }

  export type SpaceElementAvgAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type SpaceElementSumAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type SpaceElementMinAggregateOutputType = {
    id: string | null
    elementId: string | null
    spaceId: string | null
    x: number | null
    y: number | null
  }

  export type SpaceElementMaxAggregateOutputType = {
    id: string | null
    elementId: string | null
    spaceId: string | null
    x: number | null
    y: number | null
  }

  export type SpaceElementCountAggregateOutputType = {
    id: number
    elementId: number
    spaceId: number
    x: number
    y: number
    _all: number
  }


  export type SpaceElementAvgAggregateInputType = {
    x?: true
    y?: true
  }

  export type SpaceElementSumAggregateInputType = {
    x?: true
    y?: true
  }

  export type SpaceElementMinAggregateInputType = {
    id?: true
    elementId?: true
    spaceId?: true
    x?: true
    y?: true
  }

  export type SpaceElementMaxAggregateInputType = {
    id?: true
    elementId?: true
    spaceId?: true
    x?: true
    y?: true
  }

  export type SpaceElementCountAggregateInputType = {
    id?: true
    elementId?: true
    spaceId?: true
    x?: true
    y?: true
    _all?: true
  }

  export type SpaceElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpaceElement to aggregate.
     */
    where?: SpaceElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?: SpaceElementOrderByWithRelationInput | SpaceElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpaceElements
    **/
    _count?: true | SpaceElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpaceElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpaceElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceElementMaxAggregateInputType
  }

  export type GetSpaceElementAggregateType<T extends SpaceElementAggregateArgs> = {
        [P in keyof T & keyof AggregateSpaceElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpaceElement[P]>
      : GetScalarType<T[P], AggregateSpaceElement[P]>
  }




  export type SpaceElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceElementWhereInput
    orderBy?: SpaceElementOrderByWithAggregationInput | SpaceElementOrderByWithAggregationInput[]
    by: SpaceElementScalarFieldEnum[] | SpaceElementScalarFieldEnum
    having?: SpaceElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceElementCountAggregateInputType | true
    _avg?: SpaceElementAvgAggregateInputType
    _sum?: SpaceElementSumAggregateInputType
    _min?: SpaceElementMinAggregateInputType
    _max?: SpaceElementMaxAggregateInputType
  }

  export type SpaceElementGroupByOutputType = {
    id: string
    elementId: string
    spaceId: string
    x: number
    y: number
    _count: SpaceElementCountAggregateOutputType | null
    _avg: SpaceElementAvgAggregateOutputType | null
    _sum: SpaceElementSumAggregateOutputType | null
    _min: SpaceElementMinAggregateOutputType | null
    _max: SpaceElementMaxAggregateOutputType | null
  }

  type GetSpaceElementGroupByPayload<T extends SpaceElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceElementGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceElementGroupByOutputType[P]>
        }
      >
    >


  export type SpaceElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    elementId?: boolean
    spaceId?: boolean
    x?: boolean
    y?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spaceElement"]>



  export type SpaceElementSelectScalar = {
    id?: boolean
    elementId?: boolean
    spaceId?: boolean
    x?: boolean
    y?: boolean
  }

  export type SpaceElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "elementId" | "spaceId" | "x" | "y", ExtArgs["result"]["spaceElement"]>
  export type SpaceElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }

  export type $SpaceElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpaceElement"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>
      element: Prisma.$ElementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      elementId: string
      spaceId: string
      x: number
      y: number
    }, ExtArgs["result"]["spaceElement"]>
    composites: {}
  }

  type SpaceElementGetPayload<S extends boolean | null | undefined | SpaceElementDefaultArgs> = $Result.GetResult<Prisma.$SpaceElementPayload, S>

  type SpaceElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceElementCountAggregateInputType | true
    }

  export interface SpaceElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpaceElement'], meta: { name: 'SpaceElement' } }
    /**
     * Find zero or one SpaceElement that matches the filter.
     * @param {SpaceElementFindUniqueArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceElementFindUniqueArgs>(args: SelectSubset<T, SpaceElementFindUniqueArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpaceElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceElementFindUniqueOrThrowArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceElementFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpaceElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementFindFirstArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceElementFindFirstArgs>(args?: SelectSubset<T, SpaceElementFindFirstArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpaceElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementFindFirstOrThrowArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceElementFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpaceElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpaceElements
     * const spaceElements = await prisma.spaceElement.findMany()
     * 
     * // Get first 10 SpaceElements
     * const spaceElements = await prisma.spaceElement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceElementWithIdOnly = await prisma.spaceElement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceElementFindManyArgs>(args?: SelectSubset<T, SpaceElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpaceElement.
     * @param {SpaceElementCreateArgs} args - Arguments to create a SpaceElement.
     * @example
     * // Create one SpaceElement
     * const SpaceElement = await prisma.spaceElement.create({
     *   data: {
     *     // ... data to create a SpaceElement
     *   }
     * })
     * 
     */
    create<T extends SpaceElementCreateArgs>(args: SelectSubset<T, SpaceElementCreateArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpaceElements.
     * @param {SpaceElementCreateManyArgs} args - Arguments to create many SpaceElements.
     * @example
     * // Create many SpaceElements
     * const spaceElement = await prisma.spaceElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceElementCreateManyArgs>(args?: SelectSubset<T, SpaceElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpaceElement.
     * @param {SpaceElementDeleteArgs} args - Arguments to delete one SpaceElement.
     * @example
     * // Delete one SpaceElement
     * const SpaceElement = await prisma.spaceElement.delete({
     *   where: {
     *     // ... filter to delete one SpaceElement
     *   }
     * })
     * 
     */
    delete<T extends SpaceElementDeleteArgs>(args: SelectSubset<T, SpaceElementDeleteArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpaceElement.
     * @param {SpaceElementUpdateArgs} args - Arguments to update one SpaceElement.
     * @example
     * // Update one SpaceElement
     * const spaceElement = await prisma.spaceElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceElementUpdateArgs>(args: SelectSubset<T, SpaceElementUpdateArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpaceElements.
     * @param {SpaceElementDeleteManyArgs} args - Arguments to filter SpaceElements to delete.
     * @example
     * // Delete a few SpaceElements
     * const { count } = await prisma.spaceElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceElementDeleteManyArgs>(args?: SelectSubset<T, SpaceElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpaceElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpaceElements
     * const spaceElement = await prisma.spaceElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceElementUpdateManyArgs>(args: SelectSubset<T, SpaceElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpaceElement.
     * @param {SpaceElementUpsertArgs} args - Arguments to update or create a SpaceElement.
     * @example
     * // Update or create a SpaceElement
     * const spaceElement = await prisma.spaceElement.upsert({
     *   create: {
     *     // ... data to create a SpaceElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpaceElement we want to update
     *   }
     * })
     */
    upsert<T extends SpaceElementUpsertArgs>(args: SelectSubset<T, SpaceElementUpsertArgs<ExtArgs>>): Prisma__SpaceElementClient<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpaceElements that matches the filter.
     * @param {SpaceElementFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const spaceElement = await prisma.spaceElement.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SpaceElementFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SpaceElement.
     * @param {SpaceElementAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const spaceElement = await prisma.spaceElement.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SpaceElementAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SpaceElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementCountArgs} args - Arguments to filter SpaceElements to count.
     * @example
     * // Count the number of SpaceElements
     * const count = await prisma.spaceElement.count({
     *   where: {
     *     // ... the filter for the SpaceElements we want to count
     *   }
     * })
    **/
    count<T extends SpaceElementCountArgs>(
      args?: Subset<T, SpaceElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpaceElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpaceElementAggregateArgs>(args: Subset<T, SpaceElementAggregateArgs>): Prisma.PrismaPromise<GetSpaceElementAggregateType<T>>

    /**
     * Group by SpaceElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpaceElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceElementGroupByArgs['orderBy'] }
        : { orderBy?: SpaceElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpaceElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpaceElement model
   */
  readonly fields: SpaceElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpaceElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    element<T extends ElementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElementDefaultArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpaceElement model
   */
  interface SpaceElementFieldRefs {
    readonly id: FieldRef<"SpaceElement", 'String'>
    readonly elementId: FieldRef<"SpaceElement", 'String'>
    readonly spaceId: FieldRef<"SpaceElement", 'String'>
    readonly x: FieldRef<"SpaceElement", 'Int'>
    readonly y: FieldRef<"SpaceElement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SpaceElement findUnique
   */
  export type SpaceElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * Filter, which SpaceElement to fetch.
     */
    where: SpaceElementWhereUniqueInput
  }

  /**
   * SpaceElement findUniqueOrThrow
   */
  export type SpaceElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * Filter, which SpaceElement to fetch.
     */
    where: SpaceElementWhereUniqueInput
  }

  /**
   * SpaceElement findFirst
   */
  export type SpaceElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * Filter, which SpaceElement to fetch.
     */
    where?: SpaceElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?: SpaceElementOrderByWithRelationInput | SpaceElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceElements.
     */
    cursor?: SpaceElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceElements.
     */
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[]
  }

  /**
   * SpaceElement findFirstOrThrow
   */
  export type SpaceElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * Filter, which SpaceElement to fetch.
     */
    where?: SpaceElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?: SpaceElementOrderByWithRelationInput | SpaceElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceElements.
     */
    cursor?: SpaceElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceElements.
     */
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[]
  }

  /**
   * SpaceElement findMany
   */
  export type SpaceElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * Filter, which SpaceElements to fetch.
     */
    where?: SpaceElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?: SpaceElementOrderByWithRelationInput | SpaceElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpaceElements.
     */
    cursor?: SpaceElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceElements.
     */
    skip?: number
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[]
  }

  /**
   * SpaceElement create
   */
  export type SpaceElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * The data needed to create a SpaceElement.
     */
    data: XOR<SpaceElementCreateInput, SpaceElementUncheckedCreateInput>
  }

  /**
   * SpaceElement createMany
   */
  export type SpaceElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpaceElements.
     */
    data: SpaceElementCreateManyInput | SpaceElementCreateManyInput[]
  }

  /**
   * SpaceElement update
   */
  export type SpaceElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * The data needed to update a SpaceElement.
     */
    data: XOR<SpaceElementUpdateInput, SpaceElementUncheckedUpdateInput>
    /**
     * Choose, which SpaceElement to update.
     */
    where: SpaceElementWhereUniqueInput
  }

  /**
   * SpaceElement updateMany
   */
  export type SpaceElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpaceElements.
     */
    data: XOR<SpaceElementUpdateManyMutationInput, SpaceElementUncheckedUpdateManyInput>
    /**
     * Filter which SpaceElements to update
     */
    where?: SpaceElementWhereInput
    /**
     * Limit how many SpaceElements to update.
     */
    limit?: number
  }

  /**
   * SpaceElement upsert
   */
  export type SpaceElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * The filter to search for the SpaceElement to update in case it exists.
     */
    where: SpaceElementWhereUniqueInput
    /**
     * In case the SpaceElement found by the `where` argument doesn't exist, create a new SpaceElement with this data.
     */
    create: XOR<SpaceElementCreateInput, SpaceElementUncheckedCreateInput>
    /**
     * In case the SpaceElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceElementUpdateInput, SpaceElementUncheckedUpdateInput>
  }

  /**
   * SpaceElement delete
   */
  export type SpaceElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    /**
     * Filter which SpaceElement to delete.
     */
    where: SpaceElementWhereUniqueInput
  }

  /**
   * SpaceElement deleteMany
   */
  export type SpaceElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpaceElements to delete
     */
    where?: SpaceElementWhereInput
    /**
     * Limit how many SpaceElements to delete.
     */
    limit?: number
  }

  /**
   * SpaceElement findRaw
   */
  export type SpaceElementFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SpaceElement aggregateRaw
   */
  export type SpaceElementAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SpaceElement without action
   */
  export type SpaceElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
  }


  /**
   * Model Element
   */

  export type AggregateElement = {
    _count: ElementCountAggregateOutputType | null
    _avg: ElementAvgAggregateOutputType | null
    _sum: ElementSumAggregateOutputType | null
    _min: ElementMinAggregateOutputType | null
    _max: ElementMaxAggregateOutputType | null
  }

  export type ElementAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type ElementSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type ElementMinAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
    static: boolean | null
    imageUrl: string | null
  }

  export type ElementMaxAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
    static: boolean | null
    imageUrl: string | null
  }

  export type ElementCountAggregateOutputType = {
    id: number
    width: number
    height: number
    static: number
    imageUrl: number
    _all: number
  }


  export type ElementAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type ElementSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type ElementMinAggregateInputType = {
    id?: true
    width?: true
    height?: true
    static?: true
    imageUrl?: true
  }

  export type ElementMaxAggregateInputType = {
    id?: true
    width?: true
    height?: true
    static?: true
    imageUrl?: true
  }

  export type ElementCountAggregateInputType = {
    id?: true
    width?: true
    height?: true
    static?: true
    imageUrl?: true
    _all?: true
  }

  export type ElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Element to aggregate.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elements
    **/
    _count?: true | ElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElementMaxAggregateInputType
  }

  export type GetElementAggregateType<T extends ElementAggregateArgs> = {
        [P in keyof T & keyof AggregateElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElement[P]>
      : GetScalarType<T[P], AggregateElement[P]>
  }




  export type ElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementWhereInput
    orderBy?: ElementOrderByWithAggregationInput | ElementOrderByWithAggregationInput[]
    by: ElementScalarFieldEnum[] | ElementScalarFieldEnum
    having?: ElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElementCountAggregateInputType | true
    _avg?: ElementAvgAggregateInputType
    _sum?: ElementSumAggregateInputType
    _min?: ElementMinAggregateInputType
    _max?: ElementMaxAggregateInputType
  }

  export type ElementGroupByOutputType = {
    id: string
    width: number
    height: number
    static: boolean
    imageUrl: string
    _count: ElementCountAggregateOutputType | null
    _avg: ElementAvgAggregateOutputType | null
    _sum: ElementSumAggregateOutputType | null
    _min: ElementMinAggregateOutputType | null
    _max: ElementMaxAggregateOutputType | null
  }

  type GetElementGroupByPayload<T extends ElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElementGroupByOutputType[P]>
            : GetScalarType<T[P], ElementGroupByOutputType[P]>
        }
      >
    >


  export type ElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    width?: boolean
    height?: boolean
    static?: boolean
    imageUrl?: boolean
    spaces?: boolean | Element$spacesArgs<ExtArgs>
    mapElements?: boolean | Element$mapElementsArgs<ExtArgs>
    _count?: boolean | ElementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["element"]>



  export type ElementSelectScalar = {
    id?: boolean
    width?: boolean
    height?: boolean
    static?: boolean
    imageUrl?: boolean
  }

  export type ElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "width" | "height" | "static" | "imageUrl", ExtArgs["result"]["element"]>
  export type ElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spaces?: boolean | Element$spacesArgs<ExtArgs>
    mapElements?: boolean | Element$mapElementsArgs<ExtArgs>
    _count?: boolean | ElementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Element"
    objects: {
      spaces: Prisma.$SpaceElementPayload<ExtArgs>[]
      mapElements: Prisma.$MapElementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      width: number
      height: number
      static: boolean
      imageUrl: string
    }, ExtArgs["result"]["element"]>
    composites: {}
  }

  type ElementGetPayload<S extends boolean | null | undefined | ElementDefaultArgs> = $Result.GetResult<Prisma.$ElementPayload, S>

  type ElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElementCountAggregateInputType | true
    }

  export interface ElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Element'], meta: { name: 'Element' } }
    /**
     * Find zero or one Element that matches the filter.
     * @param {ElementFindUniqueArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementFindUniqueArgs>(args: SelectSubset<T, ElementFindUniqueArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Element that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementFindUniqueOrThrowArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementFindUniqueOrThrowArgs>(args: SelectSubset<T, ElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Element that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindFirstArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementFindFirstArgs>(args?: SelectSubset<T, ElementFindFirstArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Element that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindFirstOrThrowArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementFindFirstOrThrowArgs>(args?: SelectSubset<T, ElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elements
     * const elements = await prisma.element.findMany()
     * 
     * // Get first 10 Elements
     * const elements = await prisma.element.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const elementWithIdOnly = await prisma.element.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElementFindManyArgs>(args?: SelectSubset<T, ElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Element.
     * @param {ElementCreateArgs} args - Arguments to create a Element.
     * @example
     * // Create one Element
     * const Element = await prisma.element.create({
     *   data: {
     *     // ... data to create a Element
     *   }
     * })
     * 
     */
    create<T extends ElementCreateArgs>(args: SelectSubset<T, ElementCreateArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elements.
     * @param {ElementCreateManyArgs} args - Arguments to create many Elements.
     * @example
     * // Create many Elements
     * const element = await prisma.element.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElementCreateManyArgs>(args?: SelectSubset<T, ElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Element.
     * @param {ElementDeleteArgs} args - Arguments to delete one Element.
     * @example
     * // Delete one Element
     * const Element = await prisma.element.delete({
     *   where: {
     *     // ... filter to delete one Element
     *   }
     * })
     * 
     */
    delete<T extends ElementDeleteArgs>(args: SelectSubset<T, ElementDeleteArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Element.
     * @param {ElementUpdateArgs} args - Arguments to update one Element.
     * @example
     * // Update one Element
     * const element = await prisma.element.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElementUpdateArgs>(args: SelectSubset<T, ElementUpdateArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elements.
     * @param {ElementDeleteManyArgs} args - Arguments to filter Elements to delete.
     * @example
     * // Delete a few Elements
     * const { count } = await prisma.element.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElementDeleteManyArgs>(args?: SelectSubset<T, ElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elements
     * const element = await prisma.element.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElementUpdateManyArgs>(args: SelectSubset<T, ElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Element.
     * @param {ElementUpsertArgs} args - Arguments to update or create a Element.
     * @example
     * // Update or create a Element
     * const element = await prisma.element.upsert({
     *   create: {
     *     // ... data to create a Element
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Element we want to update
     *   }
     * })
     */
    upsert<T extends ElementUpsertArgs>(args: SelectSubset<T, ElementUpsertArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elements that matches the filter.
     * @param {ElementFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const element = await prisma.element.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ElementFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Element.
     * @param {ElementAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const element = await prisma.element.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ElementAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementCountArgs} args - Arguments to filter Elements to count.
     * @example
     * // Count the number of Elements
     * const count = await prisma.element.count({
     *   where: {
     *     // ... the filter for the Elements we want to count
     *   }
     * })
    **/
    count<T extends ElementCountArgs>(
      args?: Subset<T, ElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Element.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElementAggregateArgs>(args: Subset<T, ElementAggregateArgs>): Prisma.PrismaPromise<GetElementAggregateType<T>>

    /**
     * Group by Element.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElementGroupByArgs['orderBy'] }
        : { orderBy?: ElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Element model
   */
  readonly fields: ElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Element.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spaces<T extends Element$spacesArgs<ExtArgs> = {}>(args?: Subset<T, Element$spacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapElements<T extends Element$mapElementsArgs<ExtArgs> = {}>(args?: Subset<T, Element$mapElementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Element model
   */
  interface ElementFieldRefs {
    readonly id: FieldRef<"Element", 'String'>
    readonly width: FieldRef<"Element", 'Int'>
    readonly height: FieldRef<"Element", 'Int'>
    readonly static: FieldRef<"Element", 'Boolean'>
    readonly imageUrl: FieldRef<"Element", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Element findUnique
   */
  export type ElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element findUniqueOrThrow
   */
  export type ElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element findFirst
   */
  export type ElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elements.
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[]
  }

  /**
   * Element findFirstOrThrow
   */
  export type ElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elements.
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[]
  }

  /**
   * Element findMany
   */
  export type ElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Elements to fetch.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elements.
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[]
  }

  /**
   * Element create
   */
  export type ElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * The data needed to create a Element.
     */
    data: XOR<ElementCreateInput, ElementUncheckedCreateInput>
  }

  /**
   * Element createMany
   */
  export type ElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elements.
     */
    data: ElementCreateManyInput | ElementCreateManyInput[]
  }

  /**
   * Element update
   */
  export type ElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * The data needed to update a Element.
     */
    data: XOR<ElementUpdateInput, ElementUncheckedUpdateInput>
    /**
     * Choose, which Element to update.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element updateMany
   */
  export type ElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elements.
     */
    data: XOR<ElementUpdateManyMutationInput, ElementUncheckedUpdateManyInput>
    /**
     * Filter which Elements to update
     */
    where?: ElementWhereInput
    /**
     * Limit how many Elements to update.
     */
    limit?: number
  }

  /**
   * Element upsert
   */
  export type ElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * The filter to search for the Element to update in case it exists.
     */
    where: ElementWhereUniqueInput
    /**
     * In case the Element found by the `where` argument doesn't exist, create a new Element with this data.
     */
    create: XOR<ElementCreateInput, ElementUncheckedCreateInput>
    /**
     * In case the Element was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElementUpdateInput, ElementUncheckedUpdateInput>
  }

  /**
   * Element delete
   */
  export type ElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter which Element to delete.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element deleteMany
   */
  export type ElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elements to delete
     */
    where?: ElementWhereInput
    /**
     * Limit how many Elements to delete.
     */
    limit?: number
  }

  /**
   * Element findRaw
   */
  export type ElementFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Element aggregateRaw
   */
  export type ElementAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Element.spaces
   */
  export type Element$spacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null
    where?: SpaceElementWhereInput
    orderBy?: SpaceElementOrderByWithRelationInput | SpaceElementOrderByWithRelationInput[]
    cursor?: SpaceElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[]
  }

  /**
   * Element.mapElements
   */
  export type Element$mapElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    where?: MapElementsWhereInput
    orderBy?: MapElementsOrderByWithRelationInput | MapElementsOrderByWithRelationInput[]
    cursor?: MapElementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapElementsScalarFieldEnum | MapElementsScalarFieldEnum[]
  }

  /**
   * Element without action
   */
  export type ElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
  }


  /**
   * Model Map
   */

  export type AggregateMap = {
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  export type MapAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type MapSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type MapMinAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
    name: string | null
    thumbnail: string | null
  }

  export type MapMaxAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
    name: string | null
    thumbnail: string | null
  }

  export type MapCountAggregateOutputType = {
    id: number
    width: number
    height: number
    name: number
    thumbnail: number
    _all: number
  }


  export type MapAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type MapSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type MapMinAggregateInputType = {
    id?: true
    width?: true
    height?: true
    name?: true
    thumbnail?: true
  }

  export type MapMaxAggregateInputType = {
    id?: true
    width?: true
    height?: true
    name?: true
    thumbnail?: true
  }

  export type MapCountAggregateInputType = {
    id?: true
    width?: true
    height?: true
    name?: true
    thumbnail?: true
    _all?: true
  }

  export type MapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Map to aggregate.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maps
    **/
    _count?: true | MapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMaxAggregateInputType
  }

  export type GetMapAggregateType<T extends MapAggregateArgs> = {
        [P in keyof T & keyof AggregateMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap[P]>
      : GetScalarType<T[P], AggregateMap[P]>
  }




  export type MapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
    orderBy?: MapOrderByWithAggregationInput | MapOrderByWithAggregationInput[]
    by: MapScalarFieldEnum[] | MapScalarFieldEnum
    having?: MapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapCountAggregateInputType | true
    _avg?: MapAvgAggregateInputType
    _sum?: MapSumAggregateInputType
    _min?: MapMinAggregateInputType
    _max?: MapMaxAggregateInputType
  }

  export type MapGroupByOutputType = {
    id: string
    width: number
    height: number
    name: string
    thumbnail: string
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  type GetMapGroupByPayload<T extends MapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapGroupByOutputType[P]>
            : GetScalarType<T[P], MapGroupByOutputType[P]>
        }
      >
    >


  export type MapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    width?: boolean
    height?: boolean
    name?: boolean
    thumbnail?: boolean
    mapElements?: boolean | Map$mapElementsArgs<ExtArgs>
    _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>



  export type MapSelectScalar = {
    id?: boolean
    width?: boolean
    height?: boolean
    name?: boolean
    thumbnail?: boolean
  }

  export type MapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "width" | "height" | "name" | "thumbnail", ExtArgs["result"]["map"]>
  export type MapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapElements?: boolean | Map$mapElementsArgs<ExtArgs>
    _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Map"
    objects: {
      mapElements: Prisma.$MapElementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      width: number
      height: number
      name: string
      thumbnail: string
    }, ExtArgs["result"]["map"]>
    composites: {}
  }

  type MapGetPayload<S extends boolean | null | undefined | MapDefaultArgs> = $Result.GetResult<Prisma.$MapPayload, S>

  type MapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapCountAggregateInputType | true
    }

  export interface MapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Map'], meta: { name: 'Map' } }
    /**
     * Find zero or one Map that matches the filter.
     * @param {MapFindUniqueArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapFindUniqueArgs>(args: SelectSubset<T, MapFindUniqueArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Map that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapFindUniqueOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapFindUniqueOrThrowArgs>(args: SelectSubset<T, MapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapFindFirstArgs>(args?: SelectSubset<T, MapFindFirstArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapFindFirstOrThrowArgs>(args?: SelectSubset<T, MapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maps
     * const maps = await prisma.map.findMany()
     * 
     * // Get first 10 Maps
     * const maps = await prisma.map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapWithIdOnly = await prisma.map.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapFindManyArgs>(args?: SelectSubset<T, MapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Map.
     * @param {MapCreateArgs} args - Arguments to create a Map.
     * @example
     * // Create one Map
     * const Map = await prisma.map.create({
     *   data: {
     *     // ... data to create a Map
     *   }
     * })
     * 
     */
    create<T extends MapCreateArgs>(args: SelectSubset<T, MapCreateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maps.
     * @param {MapCreateManyArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapCreateManyArgs>(args?: SelectSubset<T, MapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Map.
     * @param {MapDeleteArgs} args - Arguments to delete one Map.
     * @example
     * // Delete one Map
     * const Map = await prisma.map.delete({
     *   where: {
     *     // ... filter to delete one Map
     *   }
     * })
     * 
     */
    delete<T extends MapDeleteArgs>(args: SelectSubset<T, MapDeleteArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Map.
     * @param {MapUpdateArgs} args - Arguments to update one Map.
     * @example
     * // Update one Map
     * const map = await prisma.map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapUpdateArgs>(args: SelectSubset<T, MapUpdateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maps.
     * @param {MapDeleteManyArgs} args - Arguments to filter Maps to delete.
     * @example
     * // Delete a few Maps
     * const { count } = await prisma.map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapDeleteManyArgs>(args?: SelectSubset<T, MapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapUpdateManyArgs>(args: SelectSubset<T, MapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Map.
     * @param {MapUpsertArgs} args - Arguments to update or create a Map.
     * @example
     * // Update or create a Map
     * const map = await prisma.map.upsert({
     *   create: {
     *     // ... data to create a Map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map we want to update
     *   }
     * })
     */
    upsert<T extends MapUpsertArgs>(args: SelectSubset<T, MapUpsertArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maps that matches the filter.
     * @param {MapFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const map = await prisma.map.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MapFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Map.
     * @param {MapAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const map = await prisma.map.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MapAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapCountArgs} args - Arguments to filter Maps to count.
     * @example
     * // Count the number of Maps
     * const count = await prisma.map.count({
     *   where: {
     *     // ... the filter for the Maps we want to count
     *   }
     * })
    **/
    count<T extends MapCountArgs>(
      args?: Subset<T, MapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapAggregateArgs>(args: Subset<T, MapAggregateArgs>): Prisma.PrismaPromise<GetMapAggregateType<T>>

    /**
     * Group by Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Map model
   */
  readonly fields: MapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapElements<T extends Map$mapElementsArgs<ExtArgs> = {}>(args?: Subset<T, Map$mapElementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Map model
   */
  interface MapFieldRefs {
    readonly id: FieldRef<"Map", 'String'>
    readonly width: FieldRef<"Map", 'Int'>
    readonly height: FieldRef<"Map", 'Int'>
    readonly name: FieldRef<"Map", 'String'>
    readonly thumbnail: FieldRef<"Map", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Map findUnique
   */
  export type MapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findUniqueOrThrow
   */
  export type MapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findFirst
   */
  export type MapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findFirstOrThrow
   */
  export type MapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findMany
   */
  export type MapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Maps to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map create
   */
  export type MapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to create a Map.
     */
    data: XOR<MapCreateInput, MapUncheckedCreateInput>
  }

  /**
   * Map createMany
   */
  export type MapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
  }

  /**
   * Map update
   */
  export type MapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to update a Map.
     */
    data: XOR<MapUpdateInput, MapUncheckedUpdateInput>
    /**
     * Choose, which Map to update.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map updateMany
   */
  export type MapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
  }

  /**
   * Map upsert
   */
  export type MapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The filter to search for the Map to update in case it exists.
     */
    where: MapWhereUniqueInput
    /**
     * In case the Map found by the `where` argument doesn't exist, create a new Map with this data.
     */
    create: XOR<MapCreateInput, MapUncheckedCreateInput>
    /**
     * In case the Map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapUpdateInput, MapUncheckedUpdateInput>
  }

  /**
   * Map delete
   */
  export type MapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter which Map to delete.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map deleteMany
   */
  export type MapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maps to delete
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to delete.
     */
    limit?: number
  }

  /**
   * Map findRaw
   */
  export type MapFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Map aggregateRaw
   */
  export type MapAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Map.mapElements
   */
  export type Map$mapElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    where?: MapElementsWhereInput
    orderBy?: MapElementsOrderByWithRelationInput | MapElementsOrderByWithRelationInput[]
    cursor?: MapElementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapElementsScalarFieldEnum | MapElementsScalarFieldEnum[]
  }

  /**
   * Map without action
   */
  export type MapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
  }


  /**
   * Model MapElements
   */

  export type AggregateMapElements = {
    _count: MapElementsCountAggregateOutputType | null
    _avg: MapElementsAvgAggregateOutputType | null
    _sum: MapElementsSumAggregateOutputType | null
    _min: MapElementsMinAggregateOutputType | null
    _max: MapElementsMaxAggregateOutputType | null
  }

  export type MapElementsAvgAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type MapElementsSumAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type MapElementsMinAggregateOutputType = {
    id: string | null
    mapId: string | null
    elementId: string | null
    x: number | null
    y: number | null
  }

  export type MapElementsMaxAggregateOutputType = {
    id: string | null
    mapId: string | null
    elementId: string | null
    x: number | null
    y: number | null
  }

  export type MapElementsCountAggregateOutputType = {
    id: number
    mapId: number
    elementId: number
    x: number
    y: number
    _all: number
  }


  export type MapElementsAvgAggregateInputType = {
    x?: true
    y?: true
  }

  export type MapElementsSumAggregateInputType = {
    x?: true
    y?: true
  }

  export type MapElementsMinAggregateInputType = {
    id?: true
    mapId?: true
    elementId?: true
    x?: true
    y?: true
  }

  export type MapElementsMaxAggregateInputType = {
    id?: true
    mapId?: true
    elementId?: true
    x?: true
    y?: true
  }

  export type MapElementsCountAggregateInputType = {
    id?: true
    mapId?: true
    elementId?: true
    x?: true
    y?: true
    _all?: true
  }

  export type MapElementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapElements to aggregate.
     */
    where?: MapElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapElements to fetch.
     */
    orderBy?: MapElementsOrderByWithRelationInput | MapElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapElements
    **/
    _count?: true | MapElementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapElementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapElementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapElementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapElementsMaxAggregateInputType
  }

  export type GetMapElementsAggregateType<T extends MapElementsAggregateArgs> = {
        [P in keyof T & keyof AggregateMapElements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapElements[P]>
      : GetScalarType<T[P], AggregateMapElements[P]>
  }




  export type MapElementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapElementsWhereInput
    orderBy?: MapElementsOrderByWithAggregationInput | MapElementsOrderByWithAggregationInput[]
    by: MapElementsScalarFieldEnum[] | MapElementsScalarFieldEnum
    having?: MapElementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapElementsCountAggregateInputType | true
    _avg?: MapElementsAvgAggregateInputType
    _sum?: MapElementsSumAggregateInputType
    _min?: MapElementsMinAggregateInputType
    _max?: MapElementsMaxAggregateInputType
  }

  export type MapElementsGroupByOutputType = {
    id: string
    mapId: string
    elementId: string
    x: number
    y: number
    _count: MapElementsCountAggregateOutputType | null
    _avg: MapElementsAvgAggregateOutputType | null
    _sum: MapElementsSumAggregateOutputType | null
    _min: MapElementsMinAggregateOutputType | null
    _max: MapElementsMaxAggregateOutputType | null
  }

  type GetMapElementsGroupByPayload<T extends MapElementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapElementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapElementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapElementsGroupByOutputType[P]>
            : GetScalarType<T[P], MapElementsGroupByOutputType[P]>
        }
      >
    >


  export type MapElementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mapId?: boolean
    elementId?: boolean
    x?: boolean
    y?: boolean
    map?: boolean | MapDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapElements"]>



  export type MapElementsSelectScalar = {
    id?: boolean
    mapId?: boolean
    elementId?: boolean
    x?: boolean
    y?: boolean
  }

  export type MapElementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mapId" | "elementId" | "x" | "y", ExtArgs["result"]["mapElements"]>
  export type MapElementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map?: boolean | MapDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }

  export type $MapElementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapElements"
    objects: {
      map: Prisma.$MapPayload<ExtArgs>
      element: Prisma.$ElementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mapId: string
      elementId: string
      x: number
      y: number
    }, ExtArgs["result"]["mapElements"]>
    composites: {}
  }

  type MapElementsGetPayload<S extends boolean | null | undefined | MapElementsDefaultArgs> = $Result.GetResult<Prisma.$MapElementsPayload, S>

  type MapElementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapElementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapElementsCountAggregateInputType | true
    }

  export interface MapElementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapElements'], meta: { name: 'MapElements' } }
    /**
     * Find zero or one MapElements that matches the filter.
     * @param {MapElementsFindUniqueArgs} args - Arguments to find a MapElements
     * @example
     * // Get one MapElements
     * const mapElements = await prisma.mapElements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapElementsFindUniqueArgs>(args: SelectSubset<T, MapElementsFindUniqueArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapElements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapElementsFindUniqueOrThrowArgs} args - Arguments to find a MapElements
     * @example
     * // Get one MapElements
     * const mapElements = await prisma.mapElements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapElementsFindUniqueOrThrowArgs>(args: SelectSubset<T, MapElementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementsFindFirstArgs} args - Arguments to find a MapElements
     * @example
     * // Get one MapElements
     * const mapElements = await prisma.mapElements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapElementsFindFirstArgs>(args?: SelectSubset<T, MapElementsFindFirstArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapElements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementsFindFirstOrThrowArgs} args - Arguments to find a MapElements
     * @example
     * // Get one MapElements
     * const mapElements = await prisma.mapElements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapElementsFindFirstOrThrowArgs>(args?: SelectSubset<T, MapElementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapElements
     * const mapElements = await prisma.mapElements.findMany()
     * 
     * // Get first 10 MapElements
     * const mapElements = await prisma.mapElements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapElementsWithIdOnly = await prisma.mapElements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapElementsFindManyArgs>(args?: SelectSubset<T, MapElementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapElements.
     * @param {MapElementsCreateArgs} args - Arguments to create a MapElements.
     * @example
     * // Create one MapElements
     * const MapElements = await prisma.mapElements.create({
     *   data: {
     *     // ... data to create a MapElements
     *   }
     * })
     * 
     */
    create<T extends MapElementsCreateArgs>(args: SelectSubset<T, MapElementsCreateArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapElements.
     * @param {MapElementsCreateManyArgs} args - Arguments to create many MapElements.
     * @example
     * // Create many MapElements
     * const mapElements = await prisma.mapElements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapElementsCreateManyArgs>(args?: SelectSubset<T, MapElementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MapElements.
     * @param {MapElementsDeleteArgs} args - Arguments to delete one MapElements.
     * @example
     * // Delete one MapElements
     * const MapElements = await prisma.mapElements.delete({
     *   where: {
     *     // ... filter to delete one MapElements
     *   }
     * })
     * 
     */
    delete<T extends MapElementsDeleteArgs>(args: SelectSubset<T, MapElementsDeleteArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapElements.
     * @param {MapElementsUpdateArgs} args - Arguments to update one MapElements.
     * @example
     * // Update one MapElements
     * const mapElements = await prisma.mapElements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapElementsUpdateArgs>(args: SelectSubset<T, MapElementsUpdateArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapElements.
     * @param {MapElementsDeleteManyArgs} args - Arguments to filter MapElements to delete.
     * @example
     * // Delete a few MapElements
     * const { count } = await prisma.mapElements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapElementsDeleteManyArgs>(args?: SelectSubset<T, MapElementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapElements
     * const mapElements = await prisma.mapElements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapElementsUpdateManyArgs>(args: SelectSubset<T, MapElementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MapElements.
     * @param {MapElementsUpsertArgs} args - Arguments to update or create a MapElements.
     * @example
     * // Update or create a MapElements
     * const mapElements = await prisma.mapElements.upsert({
     *   create: {
     *     // ... data to create a MapElements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapElements we want to update
     *   }
     * })
     */
    upsert<T extends MapElementsUpsertArgs>(args: SelectSubset<T, MapElementsUpsertArgs<ExtArgs>>): Prisma__MapElementsClient<$Result.GetResult<Prisma.$MapElementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapElements that matches the filter.
     * @param {MapElementsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mapElements = await prisma.mapElements.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MapElementsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MapElements.
     * @param {MapElementsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mapElements = await prisma.mapElements.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MapElementsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MapElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementsCountArgs} args - Arguments to filter MapElements to count.
     * @example
     * // Count the number of MapElements
     * const count = await prisma.mapElements.count({
     *   where: {
     *     // ... the filter for the MapElements we want to count
     *   }
     * })
    **/
    count<T extends MapElementsCountArgs>(
      args?: Subset<T, MapElementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapElementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapElementsAggregateArgs>(args: Subset<T, MapElementsAggregateArgs>): Prisma.PrismaPromise<GetMapElementsAggregateType<T>>

    /**
     * Group by MapElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapElementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapElementsGroupByArgs['orderBy'] }
        : { orderBy?: MapElementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapElementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapElementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapElements model
   */
  readonly fields: MapElementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapElements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapElementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    map<T extends MapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapDefaultArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    element<T extends ElementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElementDefaultArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MapElements model
   */
  interface MapElementsFieldRefs {
    readonly id: FieldRef<"MapElements", 'String'>
    readonly mapId: FieldRef<"MapElements", 'String'>
    readonly elementId: FieldRef<"MapElements", 'String'>
    readonly x: FieldRef<"MapElements", 'Int'>
    readonly y: FieldRef<"MapElements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MapElements findUnique
   */
  export type MapElementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * Filter, which MapElements to fetch.
     */
    where: MapElementsWhereUniqueInput
  }

  /**
   * MapElements findUniqueOrThrow
   */
  export type MapElementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * Filter, which MapElements to fetch.
     */
    where: MapElementsWhereUniqueInput
  }

  /**
   * MapElements findFirst
   */
  export type MapElementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * Filter, which MapElements to fetch.
     */
    where?: MapElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapElements to fetch.
     */
    orderBy?: MapElementsOrderByWithRelationInput | MapElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapElements.
     */
    cursor?: MapElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapElements.
     */
    distinct?: MapElementsScalarFieldEnum | MapElementsScalarFieldEnum[]
  }

  /**
   * MapElements findFirstOrThrow
   */
  export type MapElementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * Filter, which MapElements to fetch.
     */
    where?: MapElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapElements to fetch.
     */
    orderBy?: MapElementsOrderByWithRelationInput | MapElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapElements.
     */
    cursor?: MapElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapElements.
     */
    distinct?: MapElementsScalarFieldEnum | MapElementsScalarFieldEnum[]
  }

  /**
   * MapElements findMany
   */
  export type MapElementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * Filter, which MapElements to fetch.
     */
    where?: MapElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapElements to fetch.
     */
    orderBy?: MapElementsOrderByWithRelationInput | MapElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapElements.
     */
    cursor?: MapElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapElements.
     */
    skip?: number
    distinct?: MapElementsScalarFieldEnum | MapElementsScalarFieldEnum[]
  }

  /**
   * MapElements create
   */
  export type MapElementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * The data needed to create a MapElements.
     */
    data: XOR<MapElementsCreateInput, MapElementsUncheckedCreateInput>
  }

  /**
   * MapElements createMany
   */
  export type MapElementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapElements.
     */
    data: MapElementsCreateManyInput | MapElementsCreateManyInput[]
  }

  /**
   * MapElements update
   */
  export type MapElementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * The data needed to update a MapElements.
     */
    data: XOR<MapElementsUpdateInput, MapElementsUncheckedUpdateInput>
    /**
     * Choose, which MapElements to update.
     */
    where: MapElementsWhereUniqueInput
  }

  /**
   * MapElements updateMany
   */
  export type MapElementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapElements.
     */
    data: XOR<MapElementsUpdateManyMutationInput, MapElementsUncheckedUpdateManyInput>
    /**
     * Filter which MapElements to update
     */
    where?: MapElementsWhereInput
    /**
     * Limit how many MapElements to update.
     */
    limit?: number
  }

  /**
   * MapElements upsert
   */
  export type MapElementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * The filter to search for the MapElements to update in case it exists.
     */
    where: MapElementsWhereUniqueInput
    /**
     * In case the MapElements found by the `where` argument doesn't exist, create a new MapElements with this data.
     */
    create: XOR<MapElementsCreateInput, MapElementsUncheckedCreateInput>
    /**
     * In case the MapElements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapElementsUpdateInput, MapElementsUncheckedUpdateInput>
  }

  /**
   * MapElements delete
   */
  export type MapElementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
    /**
     * Filter which MapElements to delete.
     */
    where: MapElementsWhereUniqueInput
  }

  /**
   * MapElements deleteMany
   */
  export type MapElementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapElements to delete
     */
    where?: MapElementsWhereInput
    /**
     * Limit how many MapElements to delete.
     */
    limit?: number
  }

  /**
   * MapElements findRaw
   */
  export type MapElementsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MapElements aggregateRaw
   */
  export type MapElementsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MapElements without action
   */
  export type MapElementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapElements
     */
    select?: MapElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapElements
     */
    omit?: MapElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementsInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    name: string | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    name: string | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    imageUrl: number
    name: number
    _all: number
  }


  export type AvatarMinAggregateInputType = {
    id?: true
    imageUrl?: true
    name?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    name?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    imageUrl?: true
    name?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: string
    imageUrl: string | null
    name: string | null
    _count: AvatarCountAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    name?: boolean
    users?: boolean | Avatar$usersArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>



  export type AvatarSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    name?: boolean
  }

  export type AvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "name", ExtArgs["result"]["avatar"]>
  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Avatar$usersArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string | null
      name: string | null
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * @param {AvatarFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const avatar = await prisma.avatar.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AvatarFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Avatar.
     * @param {AvatarAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const avatar = await prisma.avatar.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AvatarAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Avatar$usersArgs<ExtArgs> = {}>(args?: Subset<T, Avatar$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'String'>
    readonly imageUrl: FieldRef<"Avatar", 'String'>
    readonly name: FieldRef<"Avatar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data?: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number
  }

  /**
   * Avatar findRaw
   */
  export type AvatarFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Avatar aggregateRaw
   */
  export type AvatarAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Avatar.users
   */
  export type Avatar$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    avatarId: 'avatarId',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    width: 'width',
    height: 'height',
    thumbnail: 'thumbnail',
    creatorId: 'creatorId'
  };

  export type SpaceScalarFieldEnum = (typeof SpaceScalarFieldEnum)[keyof typeof SpaceScalarFieldEnum]


  export const SpaceElementScalarFieldEnum: {
    id: 'id',
    elementId: 'elementId',
    spaceId: 'spaceId',
    x: 'x',
    y: 'y'
  };

  export type SpaceElementScalarFieldEnum = (typeof SpaceElementScalarFieldEnum)[keyof typeof SpaceElementScalarFieldEnum]


  export const ElementScalarFieldEnum: {
    id: 'id',
    width: 'width',
    height: 'height',
    static: 'static',
    imageUrl: 'imageUrl'
  };

  export type ElementScalarFieldEnum = (typeof ElementScalarFieldEnum)[keyof typeof ElementScalarFieldEnum]


  export const MapScalarFieldEnum: {
    id: 'id',
    width: 'width',
    height: 'height',
    name: 'name',
    thumbnail: 'thumbnail'
  };

  export type MapScalarFieldEnum = (typeof MapScalarFieldEnum)[keyof typeof MapScalarFieldEnum]


  export const MapElementsScalarFieldEnum: {
    id: 'id',
    mapId: 'mapId',
    elementId: 'elementId',
    x: 'x',
    y: 'y'
  };

  export type MapElementsScalarFieldEnum = (typeof MapElementsScalarFieldEnum)[keyof typeof MapElementsScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    name: 'name'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    space?: SpaceListRelationFilter
    avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    role?: SortOrder
    space?: SpaceOrderByRelationAggregateInput
    avatar?: AvatarOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatarId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    space?: SpaceListRelationFilter
    avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type SpaceWhereInput = {
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    id?: StringFilter<"Space"> | string
    name?: StringFilter<"Space"> | string
    width?: IntFilter<"Space"> | number
    height?: IntFilter<"Space"> | number
    thumbnail?: StringNullableFilter<"Space"> | string | null
    creatorId?: StringFilter<"Space"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    elements?: SpaceElementListRelationFilter
  }

  export type SpaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thumbnail?: SortOrder
    creatorId?: SortOrder
    creator?: UserOrderByWithRelationInput
    elements?: SpaceElementOrderByRelationAggregateInput
  }

  export type SpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    name?: StringFilter<"Space"> | string
    width?: IntFilter<"Space"> | number
    height?: IntFilter<"Space"> | number
    thumbnail?: StringNullableFilter<"Space"> | string | null
    creatorId?: StringFilter<"Space"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    elements?: SpaceElementListRelationFilter
  }, "id">

  export type SpaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thumbnail?: SortOrder
    creatorId?: SortOrder
    _count?: SpaceCountOrderByAggregateInput
    _avg?: SpaceAvgOrderByAggregateInput
    _max?: SpaceMaxOrderByAggregateInput
    _min?: SpaceMinOrderByAggregateInput
    _sum?: SpaceSumOrderByAggregateInput
  }

  export type SpaceScalarWhereWithAggregatesInput = {
    AND?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    OR?: SpaceScalarWhereWithAggregatesInput[]
    NOT?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Space"> | string
    name?: StringWithAggregatesFilter<"Space"> | string
    width?: IntWithAggregatesFilter<"Space"> | number
    height?: IntWithAggregatesFilter<"Space"> | number
    thumbnail?: StringNullableWithAggregatesFilter<"Space"> | string | null
    creatorId?: StringWithAggregatesFilter<"Space"> | string
  }

  export type SpaceElementWhereInput = {
    AND?: SpaceElementWhereInput | SpaceElementWhereInput[]
    OR?: SpaceElementWhereInput[]
    NOT?: SpaceElementWhereInput | SpaceElementWhereInput[]
    id?: StringFilter<"SpaceElement"> | string
    elementId?: StringFilter<"SpaceElement"> | string
    spaceId?: StringFilter<"SpaceElement"> | string
    x?: IntFilter<"SpaceElement"> | number
    y?: IntFilter<"SpaceElement"> | number
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }

  export type SpaceElementOrderByWithRelationInput = {
    id?: SortOrder
    elementId?: SortOrder
    spaceId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    space?: SpaceOrderByWithRelationInput
    element?: ElementOrderByWithRelationInput
  }

  export type SpaceElementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpaceElementWhereInput | SpaceElementWhereInput[]
    OR?: SpaceElementWhereInput[]
    NOT?: SpaceElementWhereInput | SpaceElementWhereInput[]
    elementId?: StringFilter<"SpaceElement"> | string
    spaceId?: StringFilter<"SpaceElement"> | string
    x?: IntFilter<"SpaceElement"> | number
    y?: IntFilter<"SpaceElement"> | number
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }, "id">

  export type SpaceElementOrderByWithAggregationInput = {
    id?: SortOrder
    elementId?: SortOrder
    spaceId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    _count?: SpaceElementCountOrderByAggregateInput
    _avg?: SpaceElementAvgOrderByAggregateInput
    _max?: SpaceElementMaxOrderByAggregateInput
    _min?: SpaceElementMinOrderByAggregateInput
    _sum?: SpaceElementSumOrderByAggregateInput
  }

  export type SpaceElementScalarWhereWithAggregatesInput = {
    AND?: SpaceElementScalarWhereWithAggregatesInput | SpaceElementScalarWhereWithAggregatesInput[]
    OR?: SpaceElementScalarWhereWithAggregatesInput[]
    NOT?: SpaceElementScalarWhereWithAggregatesInput | SpaceElementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpaceElement"> | string
    elementId?: StringWithAggregatesFilter<"SpaceElement"> | string
    spaceId?: StringWithAggregatesFilter<"SpaceElement"> | string
    x?: IntWithAggregatesFilter<"SpaceElement"> | number
    y?: IntWithAggregatesFilter<"SpaceElement"> | number
  }

  export type ElementWhereInput = {
    AND?: ElementWhereInput | ElementWhereInput[]
    OR?: ElementWhereInput[]
    NOT?: ElementWhereInput | ElementWhereInput[]
    id?: StringFilter<"Element"> | string
    width?: IntFilter<"Element"> | number
    height?: IntFilter<"Element"> | number
    static?: BoolFilter<"Element"> | boolean
    imageUrl?: StringFilter<"Element"> | string
    spaces?: SpaceElementListRelationFilter
    mapElements?: MapElementsListRelationFilter
  }

  export type ElementOrderByWithRelationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    static?: SortOrder
    imageUrl?: SortOrder
    spaces?: SpaceElementOrderByRelationAggregateInput
    mapElements?: MapElementsOrderByRelationAggregateInput
  }

  export type ElementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElementWhereInput | ElementWhereInput[]
    OR?: ElementWhereInput[]
    NOT?: ElementWhereInput | ElementWhereInput[]
    width?: IntFilter<"Element"> | number
    height?: IntFilter<"Element"> | number
    static?: BoolFilter<"Element"> | boolean
    imageUrl?: StringFilter<"Element"> | string
    spaces?: SpaceElementListRelationFilter
    mapElements?: MapElementsListRelationFilter
  }, "id">

  export type ElementOrderByWithAggregationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    static?: SortOrder
    imageUrl?: SortOrder
    _count?: ElementCountOrderByAggregateInput
    _avg?: ElementAvgOrderByAggregateInput
    _max?: ElementMaxOrderByAggregateInput
    _min?: ElementMinOrderByAggregateInput
    _sum?: ElementSumOrderByAggregateInput
  }

  export type ElementScalarWhereWithAggregatesInput = {
    AND?: ElementScalarWhereWithAggregatesInput | ElementScalarWhereWithAggregatesInput[]
    OR?: ElementScalarWhereWithAggregatesInput[]
    NOT?: ElementScalarWhereWithAggregatesInput | ElementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Element"> | string
    width?: IntWithAggregatesFilter<"Element"> | number
    height?: IntWithAggregatesFilter<"Element"> | number
    static?: BoolWithAggregatesFilter<"Element"> | boolean
    imageUrl?: StringWithAggregatesFilter<"Element"> | string
  }

  export type MapWhereInput = {
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    id?: StringFilter<"Map"> | string
    width?: IntFilter<"Map"> | number
    height?: IntFilter<"Map"> | number
    name?: StringFilter<"Map"> | string
    thumbnail?: StringFilter<"Map"> | string
    mapElements?: MapElementsListRelationFilter
  }

  export type MapOrderByWithRelationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    mapElements?: MapElementsOrderByRelationAggregateInput
  }

  export type MapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    width?: IntFilter<"Map"> | number
    height?: IntFilter<"Map"> | number
    name?: StringFilter<"Map"> | string
    thumbnail?: StringFilter<"Map"> | string
    mapElements?: MapElementsListRelationFilter
  }, "id">

  export type MapOrderByWithAggregationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    _count?: MapCountOrderByAggregateInput
    _avg?: MapAvgOrderByAggregateInput
    _max?: MapMaxOrderByAggregateInput
    _min?: MapMinOrderByAggregateInput
    _sum?: MapSumOrderByAggregateInput
  }

  export type MapScalarWhereWithAggregatesInput = {
    AND?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    OR?: MapScalarWhereWithAggregatesInput[]
    NOT?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Map"> | string
    width?: IntWithAggregatesFilter<"Map"> | number
    height?: IntWithAggregatesFilter<"Map"> | number
    name?: StringWithAggregatesFilter<"Map"> | string
    thumbnail?: StringWithAggregatesFilter<"Map"> | string
  }

  export type MapElementsWhereInput = {
    AND?: MapElementsWhereInput | MapElementsWhereInput[]
    OR?: MapElementsWhereInput[]
    NOT?: MapElementsWhereInput | MapElementsWhereInput[]
    id?: StringFilter<"MapElements"> | string
    mapId?: StringFilter<"MapElements"> | string
    elementId?: StringFilter<"MapElements"> | string
    x?: IntFilter<"MapElements"> | number
    y?: IntFilter<"MapElements"> | number
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }

  export type MapElementsOrderByWithRelationInput = {
    id?: SortOrder
    mapId?: SortOrder
    elementId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    map?: MapOrderByWithRelationInput
    element?: ElementOrderByWithRelationInput
  }

  export type MapElementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapElementsWhereInput | MapElementsWhereInput[]
    OR?: MapElementsWhereInput[]
    NOT?: MapElementsWhereInput | MapElementsWhereInput[]
    mapId?: StringFilter<"MapElements"> | string
    elementId?: StringFilter<"MapElements"> | string
    x?: IntFilter<"MapElements"> | number
    y?: IntFilter<"MapElements"> | number
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }, "id">

  export type MapElementsOrderByWithAggregationInput = {
    id?: SortOrder
    mapId?: SortOrder
    elementId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    _count?: MapElementsCountOrderByAggregateInput
    _avg?: MapElementsAvgOrderByAggregateInput
    _max?: MapElementsMaxOrderByAggregateInput
    _min?: MapElementsMinOrderByAggregateInput
    _sum?: MapElementsSumOrderByAggregateInput
  }

  export type MapElementsScalarWhereWithAggregatesInput = {
    AND?: MapElementsScalarWhereWithAggregatesInput | MapElementsScalarWhereWithAggregatesInput[]
    OR?: MapElementsScalarWhereWithAggregatesInput[]
    NOT?: MapElementsScalarWhereWithAggregatesInput | MapElementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapElements"> | string
    mapId?: StringWithAggregatesFilter<"MapElements"> | string
    elementId?: StringWithAggregatesFilter<"MapElements"> | string
    x?: IntWithAggregatesFilter<"MapElements"> | number
    y?: IntWithAggregatesFilter<"MapElements"> | number
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: StringFilter<"Avatar"> | string
    imageUrl?: StringNullableFilter<"Avatar"> | string | null
    name?: StringNullableFilter<"Avatar"> | string | null
    users?: UserListRelationFilter
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    imageUrl?: StringNullableFilter<"Avatar"> | string | null
    name?: StringNullableFilter<"Avatar"> | string | null
    users?: UserListRelationFilter
  }, "id">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avatar"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Avatar"> | string | null
    name?: StringNullableWithAggregatesFilter<"Avatar"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    role: $Enums.Role
    space?: SpaceCreateNestedManyWithoutCreatorInput
    avatar?: AvatarCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    avatarId?: string | null
    role: $Enums.Role
    space?: SpaceUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    space?: SpaceUpdateManyWithoutCreatorNestedInput
    avatar?: AvatarUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    space?: SpaceUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    avatarId?: string | null
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SpaceCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
    creator: UserCreateNestedOneWithoutSpaceInput
    elements?: SpaceElementCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
    creatorId: string
    elements?: SpaceElementUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutSpaceNestedInput
    elements?: SpaceElementUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    elements?: SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceCreateManyInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
    creatorId: string
  }

  export type SpaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpaceUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceElementCreateInput = {
    id?: string
    x: number
    y: number
    space: SpaceCreateNestedOneWithoutElementsInput
    element: ElementCreateNestedOneWithoutSpacesInput
  }

  export type SpaceElementUncheckedCreateInput = {
    id?: string
    elementId: string
    spaceId: string
    x: number
    y: number
  }

  export type SpaceElementUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    space?: SpaceUpdateOneRequiredWithoutElementsNestedInput
    element?: ElementUpdateOneRequiredWithoutSpacesNestedInput
  }

  export type SpaceElementUncheckedUpdateInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type SpaceElementCreateManyInput = {
    id?: string
    elementId: string
    spaceId: string
    x: number
    y: number
  }

  export type SpaceElementUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type SpaceElementUncheckedUpdateManyInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type ElementCreateInput = {
    id?: string
    width: number
    height: number
    static: boolean
    imageUrl: string
    spaces?: SpaceElementCreateNestedManyWithoutElementInput
    mapElements?: MapElementsCreateNestedManyWithoutElementInput
  }

  export type ElementUncheckedCreateInput = {
    id?: string
    width: number
    height: number
    static: boolean
    imageUrl: string
    spaces?: SpaceElementUncheckedCreateNestedManyWithoutElementInput
    mapElements?: MapElementsUncheckedCreateNestedManyWithoutElementInput
  }

  export type ElementUpdateInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
    spaces?: SpaceElementUpdateManyWithoutElementNestedInput
    mapElements?: MapElementsUpdateManyWithoutElementNestedInput
  }

  export type ElementUncheckedUpdateInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
    spaces?: SpaceElementUncheckedUpdateManyWithoutElementNestedInput
    mapElements?: MapElementsUncheckedUpdateManyWithoutElementNestedInput
  }

  export type ElementCreateManyInput = {
    id?: string
    width: number
    height: number
    static: boolean
    imageUrl: string
  }

  export type ElementUpdateManyMutationInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ElementUncheckedUpdateManyInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MapCreateInput = {
    id?: string
    width: number
    height: number
    name: string
    thumbnail: string
    mapElements?: MapElementsCreateNestedManyWithoutMapInput
  }

  export type MapUncheckedCreateInput = {
    id?: string
    width: number
    height: number
    name: string
    thumbnail: string
    mapElements?: MapElementsUncheckedCreateNestedManyWithoutMapInput
  }

  export type MapUpdateInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    mapElements?: MapElementsUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    mapElements?: MapElementsUncheckedUpdateManyWithoutMapNestedInput
  }

  export type MapCreateManyInput = {
    id?: string
    width: number
    height: number
    name: string
    thumbnail: string
  }

  export type MapUpdateManyMutationInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type MapUncheckedUpdateManyInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type MapElementsCreateInput = {
    id?: string
    x: number
    y: number
    map: MapCreateNestedOneWithoutMapElementsInput
    element: ElementCreateNestedOneWithoutMapElementsInput
  }

  export type MapElementsUncheckedCreateInput = {
    id?: string
    mapId: string
    elementId: string
    x: number
    y: number
  }

  export type MapElementsUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    map?: MapUpdateOneRequiredWithoutMapElementsNestedInput
    element?: ElementUpdateOneRequiredWithoutMapElementsNestedInput
  }

  export type MapElementsUncheckedUpdateInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapElementsCreateManyInput = {
    id?: string
    mapId: string
    elementId: string
    x: number
    y: number
  }

  export type MapElementsUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapElementsUncheckedUpdateManyInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarCreateInput = {
    id?: string
    imageUrl?: string | null
    name?: string | null
    users?: UserCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: string
    imageUrl?: string | null
    name?: string | null
    users?: UserUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUpdateInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarCreateManyInput = {
    id?: string
    imageUrl?: string | null
    name?: string | null
  }

  export type AvatarUpdateManyMutationInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvatarUncheckedUpdateManyInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SpaceListRelationFilter = {
    every?: SpaceWhereInput
    some?: SpaceWhereInput
    none?: SpaceWhereInput
  }

  export type AvatarNullableScalarRelationFilter = {
    is?: AvatarWhereInput | null
    isNot?: AvatarWhereInput | null
  }

  export type SpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SpaceElementListRelationFilter = {
    every?: SpaceElementWhereInput
    some?: SpaceElementWhereInput
    none?: SpaceElementWhereInput
  }

  export type SpaceElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thumbnail?: SortOrder
    creatorId?: SortOrder
  }

  export type SpaceAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type SpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thumbnail?: SortOrder
    creatorId?: SortOrder
  }

  export type SpaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thumbnail?: SortOrder
    creatorId?: SortOrder
  }

  export type SpaceSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SpaceScalarRelationFilter = {
    is?: SpaceWhereInput
    isNot?: SpaceWhereInput
  }

  export type ElementScalarRelationFilter = {
    is?: ElementWhereInput
    isNot?: ElementWhereInput
  }

  export type SpaceElementCountOrderByAggregateInput = {
    id?: SortOrder
    elementId?: SortOrder
    spaceId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type SpaceElementAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type SpaceElementMaxOrderByAggregateInput = {
    id?: SortOrder
    elementId?: SortOrder
    spaceId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type SpaceElementMinOrderByAggregateInput = {
    id?: SortOrder
    elementId?: SortOrder
    spaceId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type SpaceElementSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MapElementsListRelationFilter = {
    every?: MapElementsWhereInput
    some?: MapElementsWhereInput
    none?: MapElementsWhereInput
  }

  export type MapElementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElementCountOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    static?: SortOrder
    imageUrl?: SortOrder
  }

  export type ElementAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type ElementMaxOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    static?: SortOrder
    imageUrl?: SortOrder
  }

  export type ElementMinOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    static?: SortOrder
    imageUrl?: SortOrder
  }

  export type ElementSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MapCountOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
  }

  export type MapAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type MapMaxOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
  }

  export type MapMinOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
  }

  export type MapSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type MapScalarRelationFilter = {
    is?: MapWhereInput
    isNot?: MapWhereInput
  }

  export type MapElementsCountOrderByAggregateInput = {
    id?: SortOrder
    mapId?: SortOrder
    elementId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type MapElementsAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type MapElementsMaxOrderByAggregateInput = {
    id?: SortOrder
    mapId?: SortOrder
    elementId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type MapElementsMinOrderByAggregateInput = {
    id?: SortOrder
    mapId?: SortOrder
    elementId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type MapElementsSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
  }

  export type SpaceCreateNestedManyWithoutCreatorInput = {
    create?: XOR<SpaceCreateWithoutCreatorInput, SpaceUncheckedCreateWithoutCreatorInput> | SpaceCreateWithoutCreatorInput[] | SpaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutCreatorInput | SpaceCreateOrConnectWithoutCreatorInput[]
    createMany?: SpaceCreateManyCreatorInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type AvatarCreateNestedOneWithoutUsersInput = {
    create?: XOR<AvatarCreateWithoutUsersInput, AvatarUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUsersInput
    connect?: AvatarWhereUniqueInput
  }

  export type SpaceUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<SpaceCreateWithoutCreatorInput, SpaceUncheckedCreateWithoutCreatorInput> | SpaceCreateWithoutCreatorInput[] | SpaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutCreatorInput | SpaceCreateOrConnectWithoutCreatorInput[]
    createMany?: SpaceCreateManyCreatorInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SpaceUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<SpaceCreateWithoutCreatorInput, SpaceUncheckedCreateWithoutCreatorInput> | SpaceCreateWithoutCreatorInput[] | SpaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutCreatorInput | SpaceCreateOrConnectWithoutCreatorInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutCreatorInput | SpaceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: SpaceCreateManyCreatorInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutCreatorInput | SpaceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutCreatorInput | SpaceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type AvatarUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AvatarCreateWithoutUsersInput, AvatarUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUsersInput
    upsert?: AvatarUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: AvatarWhereInput | boolean
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutUsersInput, AvatarUpdateWithoutUsersInput>, AvatarUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type SpaceUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<SpaceCreateWithoutCreatorInput, SpaceUncheckedCreateWithoutCreatorInput> | SpaceCreateWithoutCreatorInput[] | SpaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutCreatorInput | SpaceCreateOrConnectWithoutCreatorInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutCreatorInput | SpaceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: SpaceCreateManyCreatorInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutCreatorInput | SpaceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutCreatorInput | SpaceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSpaceInput = {
    create?: XOR<UserCreateWithoutSpaceInput, UserUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpaceInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceElementCreateNestedManyWithoutSpaceInput = {
    create?: XOR<SpaceElementCreateWithoutSpaceInput, SpaceElementUncheckedCreateWithoutSpaceInput> | SpaceElementCreateWithoutSpaceInput[] | SpaceElementUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutSpaceInput | SpaceElementCreateOrConnectWithoutSpaceInput[]
    createMany?: SpaceElementCreateManySpaceInputEnvelope
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
  }

  export type SpaceElementUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<SpaceElementCreateWithoutSpaceInput, SpaceElementUncheckedCreateWithoutSpaceInput> | SpaceElementCreateWithoutSpaceInput[] | SpaceElementUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutSpaceInput | SpaceElementCreateOrConnectWithoutSpaceInput[]
    createMany?: SpaceElementCreateManySpaceInputEnvelope
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSpaceNestedInput = {
    create?: XOR<UserCreateWithoutSpaceInput, UserUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpaceInput
    upsert?: UserUpsertWithoutSpaceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpaceInput, UserUpdateWithoutSpaceInput>, UserUncheckedUpdateWithoutSpaceInput>
  }

  export type SpaceElementUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<SpaceElementCreateWithoutSpaceInput, SpaceElementUncheckedCreateWithoutSpaceInput> | SpaceElementCreateWithoutSpaceInput[] | SpaceElementUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutSpaceInput | SpaceElementCreateOrConnectWithoutSpaceInput[]
    upsert?: SpaceElementUpsertWithWhereUniqueWithoutSpaceInput | SpaceElementUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: SpaceElementCreateManySpaceInputEnvelope
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    update?: SpaceElementUpdateWithWhereUniqueWithoutSpaceInput | SpaceElementUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: SpaceElementUpdateManyWithWhereWithoutSpaceInput | SpaceElementUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[]
  }

  export type SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<SpaceElementCreateWithoutSpaceInput, SpaceElementUncheckedCreateWithoutSpaceInput> | SpaceElementCreateWithoutSpaceInput[] | SpaceElementUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutSpaceInput | SpaceElementCreateOrConnectWithoutSpaceInput[]
    upsert?: SpaceElementUpsertWithWhereUniqueWithoutSpaceInput | SpaceElementUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: SpaceElementCreateManySpaceInputEnvelope
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    update?: SpaceElementUpdateWithWhereUniqueWithoutSpaceInput | SpaceElementUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: SpaceElementUpdateManyWithWhereWithoutSpaceInput | SpaceElementUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[]
  }

  export type SpaceCreateNestedOneWithoutElementsInput = {
    create?: XOR<SpaceCreateWithoutElementsInput, SpaceUncheckedCreateWithoutElementsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutElementsInput
    connect?: SpaceWhereUniqueInput
  }

  export type ElementCreateNestedOneWithoutSpacesInput = {
    create?: XOR<ElementCreateWithoutSpacesInput, ElementUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: ElementCreateOrConnectWithoutSpacesInput
    connect?: ElementWhereUniqueInput
  }

  export type SpaceUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<SpaceCreateWithoutElementsInput, SpaceUncheckedCreateWithoutElementsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutElementsInput
    upsert?: SpaceUpsertWithoutElementsInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutElementsInput, SpaceUpdateWithoutElementsInput>, SpaceUncheckedUpdateWithoutElementsInput>
  }

  export type ElementUpdateOneRequiredWithoutSpacesNestedInput = {
    create?: XOR<ElementCreateWithoutSpacesInput, ElementUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: ElementCreateOrConnectWithoutSpacesInput
    upsert?: ElementUpsertWithoutSpacesInput
    connect?: ElementWhereUniqueInput
    update?: XOR<XOR<ElementUpdateToOneWithWhereWithoutSpacesInput, ElementUpdateWithoutSpacesInput>, ElementUncheckedUpdateWithoutSpacesInput>
  }

  export type SpaceElementCreateNestedManyWithoutElementInput = {
    create?: XOR<SpaceElementCreateWithoutElementInput, SpaceElementUncheckedCreateWithoutElementInput> | SpaceElementCreateWithoutElementInput[] | SpaceElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutElementInput | SpaceElementCreateOrConnectWithoutElementInput[]
    createMany?: SpaceElementCreateManyElementInputEnvelope
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
  }

  export type MapElementsCreateNestedManyWithoutElementInput = {
    create?: XOR<MapElementsCreateWithoutElementInput, MapElementsUncheckedCreateWithoutElementInput> | MapElementsCreateWithoutElementInput[] | MapElementsUncheckedCreateWithoutElementInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutElementInput | MapElementsCreateOrConnectWithoutElementInput[]
    createMany?: MapElementsCreateManyElementInputEnvelope
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
  }

  export type SpaceElementUncheckedCreateNestedManyWithoutElementInput = {
    create?: XOR<SpaceElementCreateWithoutElementInput, SpaceElementUncheckedCreateWithoutElementInput> | SpaceElementCreateWithoutElementInput[] | SpaceElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutElementInput | SpaceElementCreateOrConnectWithoutElementInput[]
    createMany?: SpaceElementCreateManyElementInputEnvelope
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
  }

  export type MapElementsUncheckedCreateNestedManyWithoutElementInput = {
    create?: XOR<MapElementsCreateWithoutElementInput, MapElementsUncheckedCreateWithoutElementInput> | MapElementsCreateWithoutElementInput[] | MapElementsUncheckedCreateWithoutElementInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutElementInput | MapElementsCreateOrConnectWithoutElementInput[]
    createMany?: MapElementsCreateManyElementInputEnvelope
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SpaceElementUpdateManyWithoutElementNestedInput = {
    create?: XOR<SpaceElementCreateWithoutElementInput, SpaceElementUncheckedCreateWithoutElementInput> | SpaceElementCreateWithoutElementInput[] | SpaceElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutElementInput | SpaceElementCreateOrConnectWithoutElementInput[]
    upsert?: SpaceElementUpsertWithWhereUniqueWithoutElementInput | SpaceElementUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: SpaceElementCreateManyElementInputEnvelope
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    update?: SpaceElementUpdateWithWhereUniqueWithoutElementInput | SpaceElementUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: SpaceElementUpdateManyWithWhereWithoutElementInput | SpaceElementUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[]
  }

  export type MapElementsUpdateManyWithoutElementNestedInput = {
    create?: XOR<MapElementsCreateWithoutElementInput, MapElementsUncheckedCreateWithoutElementInput> | MapElementsCreateWithoutElementInput[] | MapElementsUncheckedCreateWithoutElementInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutElementInput | MapElementsCreateOrConnectWithoutElementInput[]
    upsert?: MapElementsUpsertWithWhereUniqueWithoutElementInput | MapElementsUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: MapElementsCreateManyElementInputEnvelope
    set?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    disconnect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    delete?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    update?: MapElementsUpdateWithWhereUniqueWithoutElementInput | MapElementsUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: MapElementsUpdateManyWithWhereWithoutElementInput | MapElementsUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: MapElementsScalarWhereInput | MapElementsScalarWhereInput[]
  }

  export type SpaceElementUncheckedUpdateManyWithoutElementNestedInput = {
    create?: XOR<SpaceElementCreateWithoutElementInput, SpaceElementUncheckedCreateWithoutElementInput> | SpaceElementCreateWithoutElementInput[] | SpaceElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SpaceElementCreateOrConnectWithoutElementInput | SpaceElementCreateOrConnectWithoutElementInput[]
    upsert?: SpaceElementUpsertWithWhereUniqueWithoutElementInput | SpaceElementUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: SpaceElementCreateManyElementInputEnvelope
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[]
    update?: SpaceElementUpdateWithWhereUniqueWithoutElementInput | SpaceElementUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: SpaceElementUpdateManyWithWhereWithoutElementInput | SpaceElementUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[]
  }

  export type MapElementsUncheckedUpdateManyWithoutElementNestedInput = {
    create?: XOR<MapElementsCreateWithoutElementInput, MapElementsUncheckedCreateWithoutElementInput> | MapElementsCreateWithoutElementInput[] | MapElementsUncheckedCreateWithoutElementInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutElementInput | MapElementsCreateOrConnectWithoutElementInput[]
    upsert?: MapElementsUpsertWithWhereUniqueWithoutElementInput | MapElementsUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: MapElementsCreateManyElementInputEnvelope
    set?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    disconnect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    delete?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    update?: MapElementsUpdateWithWhereUniqueWithoutElementInput | MapElementsUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: MapElementsUpdateManyWithWhereWithoutElementInput | MapElementsUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: MapElementsScalarWhereInput | MapElementsScalarWhereInput[]
  }

  export type MapElementsCreateNestedManyWithoutMapInput = {
    create?: XOR<MapElementsCreateWithoutMapInput, MapElementsUncheckedCreateWithoutMapInput> | MapElementsCreateWithoutMapInput[] | MapElementsUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutMapInput | MapElementsCreateOrConnectWithoutMapInput[]
    createMany?: MapElementsCreateManyMapInputEnvelope
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
  }

  export type MapElementsUncheckedCreateNestedManyWithoutMapInput = {
    create?: XOR<MapElementsCreateWithoutMapInput, MapElementsUncheckedCreateWithoutMapInput> | MapElementsCreateWithoutMapInput[] | MapElementsUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutMapInput | MapElementsCreateOrConnectWithoutMapInput[]
    createMany?: MapElementsCreateManyMapInputEnvelope
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
  }

  export type MapElementsUpdateManyWithoutMapNestedInput = {
    create?: XOR<MapElementsCreateWithoutMapInput, MapElementsUncheckedCreateWithoutMapInput> | MapElementsCreateWithoutMapInput[] | MapElementsUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutMapInput | MapElementsCreateOrConnectWithoutMapInput[]
    upsert?: MapElementsUpsertWithWhereUniqueWithoutMapInput | MapElementsUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: MapElementsCreateManyMapInputEnvelope
    set?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    disconnect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    delete?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    update?: MapElementsUpdateWithWhereUniqueWithoutMapInput | MapElementsUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: MapElementsUpdateManyWithWhereWithoutMapInput | MapElementsUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: MapElementsScalarWhereInput | MapElementsScalarWhereInput[]
  }

  export type MapElementsUncheckedUpdateManyWithoutMapNestedInput = {
    create?: XOR<MapElementsCreateWithoutMapInput, MapElementsUncheckedCreateWithoutMapInput> | MapElementsCreateWithoutMapInput[] | MapElementsUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MapElementsCreateOrConnectWithoutMapInput | MapElementsCreateOrConnectWithoutMapInput[]
    upsert?: MapElementsUpsertWithWhereUniqueWithoutMapInput | MapElementsUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: MapElementsCreateManyMapInputEnvelope
    set?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    disconnect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    delete?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    connect?: MapElementsWhereUniqueInput | MapElementsWhereUniqueInput[]
    update?: MapElementsUpdateWithWhereUniqueWithoutMapInput | MapElementsUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: MapElementsUpdateManyWithWhereWithoutMapInput | MapElementsUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: MapElementsScalarWhereInput | MapElementsScalarWhereInput[]
  }

  export type MapCreateNestedOneWithoutMapElementsInput = {
    create?: XOR<MapCreateWithoutMapElementsInput, MapUncheckedCreateWithoutMapElementsInput>
    connectOrCreate?: MapCreateOrConnectWithoutMapElementsInput
    connect?: MapWhereUniqueInput
  }

  export type ElementCreateNestedOneWithoutMapElementsInput = {
    create?: XOR<ElementCreateWithoutMapElementsInput, ElementUncheckedCreateWithoutMapElementsInput>
    connectOrCreate?: ElementCreateOrConnectWithoutMapElementsInput
    connect?: ElementWhereUniqueInput
  }

  export type MapUpdateOneRequiredWithoutMapElementsNestedInput = {
    create?: XOR<MapCreateWithoutMapElementsInput, MapUncheckedCreateWithoutMapElementsInput>
    connectOrCreate?: MapCreateOrConnectWithoutMapElementsInput
    upsert?: MapUpsertWithoutMapElementsInput
    connect?: MapWhereUniqueInput
    update?: XOR<XOR<MapUpdateToOneWithWhereWithoutMapElementsInput, MapUpdateWithoutMapElementsInput>, MapUncheckedUpdateWithoutMapElementsInput>
  }

  export type ElementUpdateOneRequiredWithoutMapElementsNestedInput = {
    create?: XOR<ElementCreateWithoutMapElementsInput, ElementUncheckedCreateWithoutMapElementsInput>
    connectOrCreate?: ElementCreateOrConnectWithoutMapElementsInput
    upsert?: ElementUpsertWithoutMapElementsInput
    connect?: ElementWhereUniqueInput
    update?: XOR<XOR<ElementUpdateToOneWithWhereWithoutMapElementsInput, ElementUpdateWithoutMapElementsInput>, ElementUncheckedUpdateWithoutMapElementsInput>
  }

  export type UserCreateNestedManyWithoutAvatarInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput> | UserCreateWithoutAvatarInput[] | UserUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput | UserCreateOrConnectWithoutAvatarInput[]
    createMany?: UserCreateManyAvatarInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAvatarInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput> | UserCreateWithoutAvatarInput[] | UserUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput | UserCreateOrConnectWithoutAvatarInput[]
    createMany?: UserCreateManyAvatarInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput> | UserCreateWithoutAvatarInput[] | UserUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput | UserCreateOrConnectWithoutAvatarInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAvatarInput | UserUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: UserCreateManyAvatarInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAvatarInput | UserUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAvatarInput | UserUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput> | UserCreateWithoutAvatarInput[] | UserUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput | UserCreateOrConnectWithoutAvatarInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAvatarInput | UserUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: UserCreateManyAvatarInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAvatarInput | UserUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAvatarInput | UserUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SpaceCreateWithoutCreatorInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
    elements?: SpaceElementCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
    elements?: SpaceElementUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutCreatorInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutCreatorInput, SpaceUncheckedCreateWithoutCreatorInput>
  }

  export type SpaceCreateManyCreatorInputEnvelope = {
    data: SpaceCreateManyCreatorInput | SpaceCreateManyCreatorInput[]
  }

  export type AvatarCreateWithoutUsersInput = {
    id?: string
    imageUrl?: string | null
    name?: string | null
  }

  export type AvatarUncheckedCreateWithoutUsersInput = {
    id?: string
    imageUrl?: string | null
    name?: string | null
  }

  export type AvatarCreateOrConnectWithoutUsersInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutUsersInput, AvatarUncheckedCreateWithoutUsersInput>
  }

  export type SpaceUpsertWithWhereUniqueWithoutCreatorInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutCreatorInput, SpaceUncheckedUpdateWithoutCreatorInput>
    create: XOR<SpaceCreateWithoutCreatorInput, SpaceUncheckedCreateWithoutCreatorInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutCreatorInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutCreatorInput, SpaceUncheckedUpdateWithoutCreatorInput>
  }

  export type SpaceUpdateManyWithWhereWithoutCreatorInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutCreatorInput>
  }

  export type SpaceScalarWhereInput = {
    AND?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    OR?: SpaceScalarWhereInput[]
    NOT?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    id?: StringFilter<"Space"> | string
    name?: StringFilter<"Space"> | string
    width?: IntFilter<"Space"> | number
    height?: IntFilter<"Space"> | number
    thumbnail?: StringNullableFilter<"Space"> | string | null
    creatorId?: StringFilter<"Space"> | string
  }

  export type AvatarUpsertWithoutUsersInput = {
    update: XOR<AvatarUpdateWithoutUsersInput, AvatarUncheckedUpdateWithoutUsersInput>
    create: XOR<AvatarCreateWithoutUsersInput, AvatarUncheckedCreateWithoutUsersInput>
    where?: AvatarWhereInput
  }

  export type AvatarUpdateToOneWithWhereWithoutUsersInput = {
    where?: AvatarWhereInput
    data: XOR<AvatarUpdateWithoutUsersInput, AvatarUncheckedUpdateWithoutUsersInput>
  }

  export type AvatarUpdateWithoutUsersInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvatarUncheckedUpdateWithoutUsersInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutSpaceInput = {
    id?: string
    username: string
    password: string
    role: $Enums.Role
    avatar?: AvatarCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSpaceInput = {
    id?: string
    username: string
    password: string
    avatarId?: string | null
    role: $Enums.Role
  }

  export type UserCreateOrConnectWithoutSpaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpaceInput, UserUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceElementCreateWithoutSpaceInput = {
    id?: string
    x: number
    y: number
    element: ElementCreateNestedOneWithoutSpacesInput
  }

  export type SpaceElementUncheckedCreateWithoutSpaceInput = {
    id?: string
    elementId: string
    x: number
    y: number
  }

  export type SpaceElementCreateOrConnectWithoutSpaceInput = {
    where: SpaceElementWhereUniqueInput
    create: XOR<SpaceElementCreateWithoutSpaceInput, SpaceElementUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceElementCreateManySpaceInputEnvelope = {
    data: SpaceElementCreateManySpaceInput | SpaceElementCreateManySpaceInput[]
  }

  export type UserUpsertWithoutSpaceInput = {
    update: XOR<UserUpdateWithoutSpaceInput, UserUncheckedUpdateWithoutSpaceInput>
    create: XOR<UserCreateWithoutSpaceInput, UserUncheckedCreateWithoutSpaceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpaceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpaceInput, UserUncheckedUpdateWithoutSpaceInput>
  }

  export type UserUpdateWithoutSpaceInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: AvatarUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSpaceInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SpaceElementUpsertWithWhereUniqueWithoutSpaceInput = {
    where: SpaceElementWhereUniqueInput
    update: XOR<SpaceElementUpdateWithoutSpaceInput, SpaceElementUncheckedUpdateWithoutSpaceInput>
    create: XOR<SpaceElementCreateWithoutSpaceInput, SpaceElementUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceElementUpdateWithWhereUniqueWithoutSpaceInput = {
    where: SpaceElementWhereUniqueInput
    data: XOR<SpaceElementUpdateWithoutSpaceInput, SpaceElementUncheckedUpdateWithoutSpaceInput>
  }

  export type SpaceElementUpdateManyWithWhereWithoutSpaceInput = {
    where: SpaceElementScalarWhereInput
    data: XOR<SpaceElementUpdateManyMutationInput, SpaceElementUncheckedUpdateManyWithoutSpaceInput>
  }

  export type SpaceElementScalarWhereInput = {
    AND?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[]
    OR?: SpaceElementScalarWhereInput[]
    NOT?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[]
    id?: StringFilter<"SpaceElement"> | string
    elementId?: StringFilter<"SpaceElement"> | string
    spaceId?: StringFilter<"SpaceElement"> | string
    x?: IntFilter<"SpaceElement"> | number
    y?: IntFilter<"SpaceElement"> | number
  }

  export type SpaceCreateWithoutElementsInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
    creator: UserCreateNestedOneWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutElementsInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
    creatorId: string
  }

  export type SpaceCreateOrConnectWithoutElementsInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutElementsInput, SpaceUncheckedCreateWithoutElementsInput>
  }

  export type ElementCreateWithoutSpacesInput = {
    id?: string
    width: number
    height: number
    static: boolean
    imageUrl: string
    mapElements?: MapElementsCreateNestedManyWithoutElementInput
  }

  export type ElementUncheckedCreateWithoutSpacesInput = {
    id?: string
    width: number
    height: number
    static: boolean
    imageUrl: string
    mapElements?: MapElementsUncheckedCreateNestedManyWithoutElementInput
  }

  export type ElementCreateOrConnectWithoutSpacesInput = {
    where: ElementWhereUniqueInput
    create: XOR<ElementCreateWithoutSpacesInput, ElementUncheckedCreateWithoutSpacesInput>
  }

  export type SpaceUpsertWithoutElementsInput = {
    update: XOR<SpaceUpdateWithoutElementsInput, SpaceUncheckedUpdateWithoutElementsInput>
    create: XOR<SpaceCreateWithoutElementsInput, SpaceUncheckedCreateWithoutElementsInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutElementsInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutElementsInput, SpaceUncheckedUpdateWithoutElementsInput>
  }

  export type SpaceUpdateWithoutElementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutElementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ElementUpsertWithoutSpacesInput = {
    update: XOR<ElementUpdateWithoutSpacesInput, ElementUncheckedUpdateWithoutSpacesInput>
    create: XOR<ElementCreateWithoutSpacesInput, ElementUncheckedCreateWithoutSpacesInput>
    where?: ElementWhereInput
  }

  export type ElementUpdateToOneWithWhereWithoutSpacesInput = {
    where?: ElementWhereInput
    data: XOR<ElementUpdateWithoutSpacesInput, ElementUncheckedUpdateWithoutSpacesInput>
  }

  export type ElementUpdateWithoutSpacesInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
    mapElements?: MapElementsUpdateManyWithoutElementNestedInput
  }

  export type ElementUncheckedUpdateWithoutSpacesInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
    mapElements?: MapElementsUncheckedUpdateManyWithoutElementNestedInput
  }

  export type SpaceElementCreateWithoutElementInput = {
    id?: string
    x: number
    y: number
    space: SpaceCreateNestedOneWithoutElementsInput
  }

  export type SpaceElementUncheckedCreateWithoutElementInput = {
    id?: string
    spaceId: string
    x: number
    y: number
  }

  export type SpaceElementCreateOrConnectWithoutElementInput = {
    where: SpaceElementWhereUniqueInput
    create: XOR<SpaceElementCreateWithoutElementInput, SpaceElementUncheckedCreateWithoutElementInput>
  }

  export type SpaceElementCreateManyElementInputEnvelope = {
    data: SpaceElementCreateManyElementInput | SpaceElementCreateManyElementInput[]
  }

  export type MapElementsCreateWithoutElementInput = {
    id?: string
    x: number
    y: number
    map: MapCreateNestedOneWithoutMapElementsInput
  }

  export type MapElementsUncheckedCreateWithoutElementInput = {
    id?: string
    mapId: string
    x: number
    y: number
  }

  export type MapElementsCreateOrConnectWithoutElementInput = {
    where: MapElementsWhereUniqueInput
    create: XOR<MapElementsCreateWithoutElementInput, MapElementsUncheckedCreateWithoutElementInput>
  }

  export type MapElementsCreateManyElementInputEnvelope = {
    data: MapElementsCreateManyElementInput | MapElementsCreateManyElementInput[]
  }

  export type SpaceElementUpsertWithWhereUniqueWithoutElementInput = {
    where: SpaceElementWhereUniqueInput
    update: XOR<SpaceElementUpdateWithoutElementInput, SpaceElementUncheckedUpdateWithoutElementInput>
    create: XOR<SpaceElementCreateWithoutElementInput, SpaceElementUncheckedCreateWithoutElementInput>
  }

  export type SpaceElementUpdateWithWhereUniqueWithoutElementInput = {
    where: SpaceElementWhereUniqueInput
    data: XOR<SpaceElementUpdateWithoutElementInput, SpaceElementUncheckedUpdateWithoutElementInput>
  }

  export type SpaceElementUpdateManyWithWhereWithoutElementInput = {
    where: SpaceElementScalarWhereInput
    data: XOR<SpaceElementUpdateManyMutationInput, SpaceElementUncheckedUpdateManyWithoutElementInput>
  }

  export type MapElementsUpsertWithWhereUniqueWithoutElementInput = {
    where: MapElementsWhereUniqueInput
    update: XOR<MapElementsUpdateWithoutElementInput, MapElementsUncheckedUpdateWithoutElementInput>
    create: XOR<MapElementsCreateWithoutElementInput, MapElementsUncheckedCreateWithoutElementInput>
  }

  export type MapElementsUpdateWithWhereUniqueWithoutElementInput = {
    where: MapElementsWhereUniqueInput
    data: XOR<MapElementsUpdateWithoutElementInput, MapElementsUncheckedUpdateWithoutElementInput>
  }

  export type MapElementsUpdateManyWithWhereWithoutElementInput = {
    where: MapElementsScalarWhereInput
    data: XOR<MapElementsUpdateManyMutationInput, MapElementsUncheckedUpdateManyWithoutElementInput>
  }

  export type MapElementsScalarWhereInput = {
    AND?: MapElementsScalarWhereInput | MapElementsScalarWhereInput[]
    OR?: MapElementsScalarWhereInput[]
    NOT?: MapElementsScalarWhereInput | MapElementsScalarWhereInput[]
    id?: StringFilter<"MapElements"> | string
    mapId?: StringFilter<"MapElements"> | string
    elementId?: StringFilter<"MapElements"> | string
    x?: IntFilter<"MapElements"> | number
    y?: IntFilter<"MapElements"> | number
  }

  export type MapElementsCreateWithoutMapInput = {
    id?: string
    x: number
    y: number
    element: ElementCreateNestedOneWithoutMapElementsInput
  }

  export type MapElementsUncheckedCreateWithoutMapInput = {
    id?: string
    elementId: string
    x: number
    y: number
  }

  export type MapElementsCreateOrConnectWithoutMapInput = {
    where: MapElementsWhereUniqueInput
    create: XOR<MapElementsCreateWithoutMapInput, MapElementsUncheckedCreateWithoutMapInput>
  }

  export type MapElementsCreateManyMapInputEnvelope = {
    data: MapElementsCreateManyMapInput | MapElementsCreateManyMapInput[]
  }

  export type MapElementsUpsertWithWhereUniqueWithoutMapInput = {
    where: MapElementsWhereUniqueInput
    update: XOR<MapElementsUpdateWithoutMapInput, MapElementsUncheckedUpdateWithoutMapInput>
    create: XOR<MapElementsCreateWithoutMapInput, MapElementsUncheckedCreateWithoutMapInput>
  }

  export type MapElementsUpdateWithWhereUniqueWithoutMapInput = {
    where: MapElementsWhereUniqueInput
    data: XOR<MapElementsUpdateWithoutMapInput, MapElementsUncheckedUpdateWithoutMapInput>
  }

  export type MapElementsUpdateManyWithWhereWithoutMapInput = {
    where: MapElementsScalarWhereInput
    data: XOR<MapElementsUpdateManyMutationInput, MapElementsUncheckedUpdateManyWithoutMapInput>
  }

  export type MapCreateWithoutMapElementsInput = {
    id?: string
    width: number
    height: number
    name: string
    thumbnail: string
  }

  export type MapUncheckedCreateWithoutMapElementsInput = {
    id?: string
    width: number
    height: number
    name: string
    thumbnail: string
  }

  export type MapCreateOrConnectWithoutMapElementsInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutMapElementsInput, MapUncheckedCreateWithoutMapElementsInput>
  }

  export type ElementCreateWithoutMapElementsInput = {
    id?: string
    width: number
    height: number
    static: boolean
    imageUrl: string
    spaces?: SpaceElementCreateNestedManyWithoutElementInput
  }

  export type ElementUncheckedCreateWithoutMapElementsInput = {
    id?: string
    width: number
    height: number
    static: boolean
    imageUrl: string
    spaces?: SpaceElementUncheckedCreateNestedManyWithoutElementInput
  }

  export type ElementCreateOrConnectWithoutMapElementsInput = {
    where: ElementWhereUniqueInput
    create: XOR<ElementCreateWithoutMapElementsInput, ElementUncheckedCreateWithoutMapElementsInput>
  }

  export type MapUpsertWithoutMapElementsInput = {
    update: XOR<MapUpdateWithoutMapElementsInput, MapUncheckedUpdateWithoutMapElementsInput>
    create: XOR<MapCreateWithoutMapElementsInput, MapUncheckedCreateWithoutMapElementsInput>
    where?: MapWhereInput
  }

  export type MapUpdateToOneWithWhereWithoutMapElementsInput = {
    where?: MapWhereInput
    data: XOR<MapUpdateWithoutMapElementsInput, MapUncheckedUpdateWithoutMapElementsInput>
  }

  export type MapUpdateWithoutMapElementsInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type MapUncheckedUpdateWithoutMapElementsInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type ElementUpsertWithoutMapElementsInput = {
    update: XOR<ElementUpdateWithoutMapElementsInput, ElementUncheckedUpdateWithoutMapElementsInput>
    create: XOR<ElementCreateWithoutMapElementsInput, ElementUncheckedCreateWithoutMapElementsInput>
    where?: ElementWhereInput
  }

  export type ElementUpdateToOneWithWhereWithoutMapElementsInput = {
    where?: ElementWhereInput
    data: XOR<ElementUpdateWithoutMapElementsInput, ElementUncheckedUpdateWithoutMapElementsInput>
  }

  export type ElementUpdateWithoutMapElementsInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
    spaces?: SpaceElementUpdateManyWithoutElementNestedInput
  }

  export type ElementUncheckedUpdateWithoutMapElementsInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    static?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: StringFieldUpdateOperationsInput | string
    spaces?: SpaceElementUncheckedUpdateManyWithoutElementNestedInput
  }

  export type UserCreateWithoutAvatarInput = {
    id?: string
    username: string
    password: string
    role: $Enums.Role
    space?: SpaceCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAvatarInput = {
    id?: string
    username: string
    password: string
    role: $Enums.Role
    space?: SpaceUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAvatarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
  }

  export type UserCreateManyAvatarInputEnvelope = {
    data: UserCreateManyAvatarInput | UserCreateManyAvatarInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutAvatarInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAvatarInput, UserUncheckedUpdateWithoutAvatarInput>
    create: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAvatarInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAvatarInput, UserUncheckedUpdateWithoutAvatarInput>
  }

  export type UserUpdateManyWithWhereWithoutAvatarInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAvatarInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type SpaceCreateManyCreatorInput = {
    id?: string
    name: string
    width: number
    height: number
    thumbnail?: string | null
  }

  export type SpaceUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    elements?: SpaceElementUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    elements?: SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpaceElementCreateManySpaceInput = {
    id?: string
    elementId: string
    x: number
    y: number
  }

  export type SpaceElementUpdateWithoutSpaceInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    element?: ElementUpdateOneRequiredWithoutSpacesNestedInput
  }

  export type SpaceElementUncheckedUpdateWithoutSpaceInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type SpaceElementUncheckedUpdateManyWithoutSpaceInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type SpaceElementCreateManyElementInput = {
    id?: string
    spaceId: string
    x: number
    y: number
  }

  export type MapElementsCreateManyElementInput = {
    id?: string
    mapId: string
    x: number
    y: number
  }

  export type SpaceElementUpdateWithoutElementInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    space?: SpaceUpdateOneRequiredWithoutElementsNestedInput
  }

  export type SpaceElementUncheckedUpdateWithoutElementInput = {
    spaceId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type SpaceElementUncheckedUpdateManyWithoutElementInput = {
    spaceId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapElementsUpdateWithoutElementInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    map?: MapUpdateOneRequiredWithoutMapElementsNestedInput
  }

  export type MapElementsUncheckedUpdateWithoutElementInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapElementsUncheckedUpdateManyWithoutElementInput = {
    mapId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapElementsCreateManyMapInput = {
    id?: string
    elementId: string
    x: number
    y: number
  }

  export type MapElementsUpdateWithoutMapInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    element?: ElementUpdateOneRequiredWithoutMapElementsNestedInput
  }

  export type MapElementsUncheckedUpdateWithoutMapInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapElementsUncheckedUpdateManyWithoutMapInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyAvatarInput = {
    id?: string
    username: string
    password: string
    role: $Enums.Role
  }

  export type UserUpdateWithoutAvatarInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    space?: SpaceUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    space?: SpaceUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAvatarInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}