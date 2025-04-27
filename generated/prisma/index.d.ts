
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
 * Model RacesMJC
 * 
 */
export type RacesMJC = $Result.DefaultSelection<Prisma.$RacesMJCPayload>
/**
 * Model CategoriesMJC
 * 
 */
export type CategoriesMJC = $Result.DefaultSelection<Prisma.$CategoriesMJCPayload>
/**
 * Model GendersMJC
 * 
 */
export type GendersMJC = $Result.DefaultSelection<Prisma.$GendersMJCPayload>
/**
 * Model PetMJC
 * 
 */
export type PetMJC = $Result.DefaultSelection<Prisma.$PetMJCPayload>
/**
 * Model UserMJC
 * 
 */
export type UserMJC = $Result.DefaultSelection<Prisma.$UserMJCPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoMJC: {
  adoptado: 'adoptado',
  disponible: 'disponible'
};

export type EstadoMJC = (typeof EstadoMJC)[keyof typeof EstadoMJC]

}

export type EstadoMJC = $Enums.EstadoMJC

export const EstadoMJC: typeof $Enums.EstadoMJC

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RacesMJCS
 * const racesMJCS = await prisma.racesMJC.findMany()
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
   * // Fetch zero or more RacesMJCS
   * const racesMJCS = await prisma.racesMJC.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.racesMJC`: Exposes CRUD operations for the **RacesMJC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RacesMJCS
    * const racesMJCS = await prisma.racesMJC.findMany()
    * ```
    */
  get racesMJC(): Prisma.RacesMJCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriesMJC`: Exposes CRUD operations for the **CategoriesMJC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriesMJCS
    * const categoriesMJCS = await prisma.categoriesMJC.findMany()
    * ```
    */
  get categoriesMJC(): Prisma.CategoriesMJCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gendersMJC`: Exposes CRUD operations for the **GendersMJC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GendersMJCS
    * const gendersMJCS = await prisma.gendersMJC.findMany()
    * ```
    */
  get gendersMJC(): Prisma.GendersMJCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petMJC`: Exposes CRUD operations for the **PetMJC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetMJCS
    * const petMJCS = await prisma.petMJC.findMany()
    * ```
    */
  get petMJC(): Prisma.PetMJCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMJC`: Exposes CRUD operations for the **UserMJC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMJCS
    * const userMJCS = await prisma.userMJC.findMany()
    * ```
    */
  get userMJC(): Prisma.UserMJCDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    RacesMJC: 'RacesMJC',
    CategoriesMJC: 'CategoriesMJC',
    GendersMJC: 'GendersMJC',
    PetMJC: 'PetMJC',
    UserMJC: 'UserMJC'
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
      modelProps: "racesMJC" | "categoriesMJC" | "gendersMJC" | "petMJC" | "userMJC"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RacesMJC: {
        payload: Prisma.$RacesMJCPayload<ExtArgs>
        fields: Prisma.RacesMJCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RacesMJCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RacesMJCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload>
          }
          findFirst: {
            args: Prisma.RacesMJCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RacesMJCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload>
          }
          findMany: {
            args: Prisma.RacesMJCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload>[]
          }
          create: {
            args: Prisma.RacesMJCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload>
          }
          createMany: {
            args: Prisma.RacesMJCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RacesMJCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload>
          }
          update: {
            args: Prisma.RacesMJCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload>
          }
          deleteMany: {
            args: Prisma.RacesMJCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RacesMJCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RacesMJCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesMJCPayload>
          }
          aggregate: {
            args: Prisma.RacesMJCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRacesMJC>
          }
          groupBy: {
            args: Prisma.RacesMJCGroupByArgs<ExtArgs>
            result: $Utils.Optional<RacesMJCGroupByOutputType>[]
          }
          count: {
            args: Prisma.RacesMJCCountArgs<ExtArgs>
            result: $Utils.Optional<RacesMJCCountAggregateOutputType> | number
          }
        }
      }
      CategoriesMJC: {
        payload: Prisma.$CategoriesMJCPayload<ExtArgs>
        fields: Prisma.CategoriesMJCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesMJCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesMJCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload>
          }
          findFirst: {
            args: Prisma.CategoriesMJCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesMJCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload>
          }
          findMany: {
            args: Prisma.CategoriesMJCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload>[]
          }
          create: {
            args: Prisma.CategoriesMJCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload>
          }
          createMany: {
            args: Prisma.CategoriesMJCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesMJCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload>
          }
          update: {
            args: Prisma.CategoriesMJCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesMJCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesMJCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesMJCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesMJCPayload>
          }
          aggregate: {
            args: Prisma.CategoriesMJCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriesMJC>
          }
          groupBy: {
            args: Prisma.CategoriesMJCGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesMJCGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesMJCCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesMJCCountAggregateOutputType> | number
          }
        }
      }
      GendersMJC: {
        payload: Prisma.$GendersMJCPayload<ExtArgs>
        fields: Prisma.GendersMJCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GendersMJCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GendersMJCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload>
          }
          findFirst: {
            args: Prisma.GendersMJCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GendersMJCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload>
          }
          findMany: {
            args: Prisma.GendersMJCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload>[]
          }
          create: {
            args: Prisma.GendersMJCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload>
          }
          createMany: {
            args: Prisma.GendersMJCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GendersMJCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload>
          }
          update: {
            args: Prisma.GendersMJCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload>
          }
          deleteMany: {
            args: Prisma.GendersMJCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GendersMJCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GendersMJCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersMJCPayload>
          }
          aggregate: {
            args: Prisma.GendersMJCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGendersMJC>
          }
          groupBy: {
            args: Prisma.GendersMJCGroupByArgs<ExtArgs>
            result: $Utils.Optional<GendersMJCGroupByOutputType>[]
          }
          count: {
            args: Prisma.GendersMJCCountArgs<ExtArgs>
            result: $Utils.Optional<GendersMJCCountAggregateOutputType> | number
          }
        }
      }
      PetMJC: {
        payload: Prisma.$PetMJCPayload<ExtArgs>
        fields: Prisma.PetMJCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetMJCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetMJCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload>
          }
          findFirst: {
            args: Prisma.PetMJCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetMJCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload>
          }
          findMany: {
            args: Prisma.PetMJCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload>[]
          }
          create: {
            args: Prisma.PetMJCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload>
          }
          createMany: {
            args: Prisma.PetMJCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PetMJCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload>
          }
          update: {
            args: Prisma.PetMJCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload>
          }
          deleteMany: {
            args: Prisma.PetMJCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetMJCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PetMJCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMJCPayload>
          }
          aggregate: {
            args: Prisma.PetMJCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetMJC>
          }
          groupBy: {
            args: Prisma.PetMJCGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetMJCGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetMJCCountArgs<ExtArgs>
            result: $Utils.Optional<PetMJCCountAggregateOutputType> | number
          }
        }
      }
      UserMJC: {
        payload: Prisma.$UserMJCPayload<ExtArgs>
        fields: Prisma.UserMJCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMJCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMJCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload>
          }
          findFirst: {
            args: Prisma.UserMJCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMJCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload>
          }
          findMany: {
            args: Prisma.UserMJCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload>[]
          }
          create: {
            args: Prisma.UserMJCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload>
          }
          createMany: {
            args: Prisma.UserMJCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserMJCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload>
          }
          update: {
            args: Prisma.UserMJCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload>
          }
          deleteMany: {
            args: Prisma.UserMJCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMJCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserMJCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMJCPayload>
          }
          aggregate: {
            args: Prisma.UserMJCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMJC>
          }
          groupBy: {
            args: Prisma.UserMJCGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMJCGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMJCCountArgs<ExtArgs>
            result: $Utils.Optional<UserMJCCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    racesMJC?: RacesMJCOmit
    categoriesMJC?: CategoriesMJCOmit
    gendersMJC?: GendersMJCOmit
    petMJC?: PetMJCOmit
    userMJC?: UserMJCOmit
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
   * Count Type RacesMJCCountOutputType
   */

  export type RacesMJCCountOutputType = {
    petMJC: number
  }

  export type RacesMJCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petMJC?: boolean | RacesMJCCountOutputTypeCountPetMJCArgs
  }

  // Custom InputTypes
  /**
   * RacesMJCCountOutputType without action
   */
  export type RacesMJCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJCCountOutputType
     */
    select?: RacesMJCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RacesMJCCountOutputType without action
   */
  export type RacesMJCCountOutputTypeCountPetMJCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetMJCWhereInput
  }


  /**
   * Count Type CategoriesMJCCountOutputType
   */

  export type CategoriesMJCCountOutputType = {
    petMJC: number
  }

  export type CategoriesMJCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petMJC?: boolean | CategoriesMJCCountOutputTypeCountPetMJCArgs
  }

  // Custom InputTypes
  /**
   * CategoriesMJCCountOutputType without action
   */
  export type CategoriesMJCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJCCountOutputType
     */
    select?: CategoriesMJCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesMJCCountOutputType without action
   */
  export type CategoriesMJCCountOutputTypeCountPetMJCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetMJCWhereInput
  }


  /**
   * Count Type GendersMJCCountOutputType
   */

  export type GendersMJCCountOutputType = {
    petMJC: number
  }

  export type GendersMJCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petMJC?: boolean | GendersMJCCountOutputTypeCountPetMJCArgs
  }

  // Custom InputTypes
  /**
   * GendersMJCCountOutputType without action
   */
  export type GendersMJCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJCCountOutputType
     */
    select?: GendersMJCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GendersMJCCountOutputType without action
   */
  export type GendersMJCCountOutputTypeCountPetMJCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetMJCWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RacesMJC
   */

  export type AggregateRacesMJC = {
    _count: RacesMJCCountAggregateOutputType | null
    _avg: RacesMJCAvgAggregateOutputType | null
    _sum: RacesMJCSumAggregateOutputType | null
    _min: RacesMJCMinAggregateOutputType | null
    _max: RacesMJCMaxAggregateOutputType | null
  }

  export type RacesMJCAvgAggregateOutputType = {
    id_RacesMJC: number | null
  }

  export type RacesMJCSumAggregateOutputType = {
    id_RacesMJC: number | null
  }

  export type RacesMJCMinAggregateOutputType = {
    id_RacesMJC: number | null
    name_RacesMJC: string | null
  }

  export type RacesMJCMaxAggregateOutputType = {
    id_RacesMJC: number | null
    name_RacesMJC: string | null
  }

  export type RacesMJCCountAggregateOutputType = {
    id_RacesMJC: number
    name_RacesMJC: number
    _all: number
  }


  export type RacesMJCAvgAggregateInputType = {
    id_RacesMJC?: true
  }

  export type RacesMJCSumAggregateInputType = {
    id_RacesMJC?: true
  }

  export type RacesMJCMinAggregateInputType = {
    id_RacesMJC?: true
    name_RacesMJC?: true
  }

  export type RacesMJCMaxAggregateInputType = {
    id_RacesMJC?: true
    name_RacesMJC?: true
  }

  export type RacesMJCCountAggregateInputType = {
    id_RacesMJC?: true
    name_RacesMJC?: true
    _all?: true
  }

  export type RacesMJCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RacesMJC to aggregate.
     */
    where?: RacesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RacesMJCS to fetch.
     */
    orderBy?: RacesMJCOrderByWithRelationInput | RacesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RacesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RacesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RacesMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RacesMJCS
    **/
    _count?: true | RacesMJCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RacesMJCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RacesMJCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RacesMJCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RacesMJCMaxAggregateInputType
  }

  export type GetRacesMJCAggregateType<T extends RacesMJCAggregateArgs> = {
        [P in keyof T & keyof AggregateRacesMJC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRacesMJC[P]>
      : GetScalarType<T[P], AggregateRacesMJC[P]>
  }




  export type RacesMJCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RacesMJCWhereInput
    orderBy?: RacesMJCOrderByWithAggregationInput | RacesMJCOrderByWithAggregationInput[]
    by: RacesMJCScalarFieldEnum[] | RacesMJCScalarFieldEnum
    having?: RacesMJCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RacesMJCCountAggregateInputType | true
    _avg?: RacesMJCAvgAggregateInputType
    _sum?: RacesMJCSumAggregateInputType
    _min?: RacesMJCMinAggregateInputType
    _max?: RacesMJCMaxAggregateInputType
  }

  export type RacesMJCGroupByOutputType = {
    id_RacesMJC: number
    name_RacesMJC: string
    _count: RacesMJCCountAggregateOutputType | null
    _avg: RacesMJCAvgAggregateOutputType | null
    _sum: RacesMJCSumAggregateOutputType | null
    _min: RacesMJCMinAggregateOutputType | null
    _max: RacesMJCMaxAggregateOutputType | null
  }

  type GetRacesMJCGroupByPayload<T extends RacesMJCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RacesMJCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RacesMJCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RacesMJCGroupByOutputType[P]>
            : GetScalarType<T[P], RacesMJCGroupByOutputType[P]>
        }
      >
    >


  export type RacesMJCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_RacesMJC?: boolean
    name_RacesMJC?: boolean
    petMJC?: boolean | RacesMJC$petMJCArgs<ExtArgs>
    _count?: boolean | RacesMJCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["racesMJC"]>



  export type RacesMJCSelectScalar = {
    id_RacesMJC?: boolean
    name_RacesMJC?: boolean
  }

  export type RacesMJCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_RacesMJC" | "name_RacesMJC", ExtArgs["result"]["racesMJC"]>
  export type RacesMJCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petMJC?: boolean | RacesMJC$petMJCArgs<ExtArgs>
    _count?: boolean | RacesMJCCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RacesMJCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RacesMJC"
    objects: {
      petMJC: Prisma.$PetMJCPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_RacesMJC: number
      name_RacesMJC: string
    }, ExtArgs["result"]["racesMJC"]>
    composites: {}
  }

  type RacesMJCGetPayload<S extends boolean | null | undefined | RacesMJCDefaultArgs> = $Result.GetResult<Prisma.$RacesMJCPayload, S>

  type RacesMJCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RacesMJCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RacesMJCCountAggregateInputType | true
    }

  export interface RacesMJCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RacesMJC'], meta: { name: 'RacesMJC' } }
    /**
     * Find zero or one RacesMJC that matches the filter.
     * @param {RacesMJCFindUniqueArgs} args - Arguments to find a RacesMJC
     * @example
     * // Get one RacesMJC
     * const racesMJC = await prisma.racesMJC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RacesMJCFindUniqueArgs>(args: SelectSubset<T, RacesMJCFindUniqueArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RacesMJC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RacesMJCFindUniqueOrThrowArgs} args - Arguments to find a RacesMJC
     * @example
     * // Get one RacesMJC
     * const racesMJC = await prisma.racesMJC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RacesMJCFindUniqueOrThrowArgs>(args: SelectSubset<T, RacesMJCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RacesMJC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesMJCFindFirstArgs} args - Arguments to find a RacesMJC
     * @example
     * // Get one RacesMJC
     * const racesMJC = await prisma.racesMJC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RacesMJCFindFirstArgs>(args?: SelectSubset<T, RacesMJCFindFirstArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RacesMJC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesMJCFindFirstOrThrowArgs} args - Arguments to find a RacesMJC
     * @example
     * // Get one RacesMJC
     * const racesMJC = await prisma.racesMJC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RacesMJCFindFirstOrThrowArgs>(args?: SelectSubset<T, RacesMJCFindFirstOrThrowArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RacesMJCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesMJCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RacesMJCS
     * const racesMJCS = await prisma.racesMJC.findMany()
     * 
     * // Get first 10 RacesMJCS
     * const racesMJCS = await prisma.racesMJC.findMany({ take: 10 })
     * 
     * // Only select the `id_RacesMJC`
     * const racesMJCWithId_RacesMJCOnly = await prisma.racesMJC.findMany({ select: { id_RacesMJC: true } })
     * 
     */
    findMany<T extends RacesMJCFindManyArgs>(args?: SelectSubset<T, RacesMJCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RacesMJC.
     * @param {RacesMJCCreateArgs} args - Arguments to create a RacesMJC.
     * @example
     * // Create one RacesMJC
     * const RacesMJC = await prisma.racesMJC.create({
     *   data: {
     *     // ... data to create a RacesMJC
     *   }
     * })
     * 
     */
    create<T extends RacesMJCCreateArgs>(args: SelectSubset<T, RacesMJCCreateArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RacesMJCS.
     * @param {RacesMJCCreateManyArgs} args - Arguments to create many RacesMJCS.
     * @example
     * // Create many RacesMJCS
     * const racesMJC = await prisma.racesMJC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RacesMJCCreateManyArgs>(args?: SelectSubset<T, RacesMJCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RacesMJC.
     * @param {RacesMJCDeleteArgs} args - Arguments to delete one RacesMJC.
     * @example
     * // Delete one RacesMJC
     * const RacesMJC = await prisma.racesMJC.delete({
     *   where: {
     *     // ... filter to delete one RacesMJC
     *   }
     * })
     * 
     */
    delete<T extends RacesMJCDeleteArgs>(args: SelectSubset<T, RacesMJCDeleteArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RacesMJC.
     * @param {RacesMJCUpdateArgs} args - Arguments to update one RacesMJC.
     * @example
     * // Update one RacesMJC
     * const racesMJC = await prisma.racesMJC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RacesMJCUpdateArgs>(args: SelectSubset<T, RacesMJCUpdateArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RacesMJCS.
     * @param {RacesMJCDeleteManyArgs} args - Arguments to filter RacesMJCS to delete.
     * @example
     * // Delete a few RacesMJCS
     * const { count } = await prisma.racesMJC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RacesMJCDeleteManyArgs>(args?: SelectSubset<T, RacesMJCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RacesMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesMJCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RacesMJCS
     * const racesMJC = await prisma.racesMJC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RacesMJCUpdateManyArgs>(args: SelectSubset<T, RacesMJCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RacesMJC.
     * @param {RacesMJCUpsertArgs} args - Arguments to update or create a RacesMJC.
     * @example
     * // Update or create a RacesMJC
     * const racesMJC = await prisma.racesMJC.upsert({
     *   create: {
     *     // ... data to create a RacesMJC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RacesMJC we want to update
     *   }
     * })
     */
    upsert<T extends RacesMJCUpsertArgs>(args: SelectSubset<T, RacesMJCUpsertArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RacesMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesMJCCountArgs} args - Arguments to filter RacesMJCS to count.
     * @example
     * // Count the number of RacesMJCS
     * const count = await prisma.racesMJC.count({
     *   where: {
     *     // ... the filter for the RacesMJCS we want to count
     *   }
     * })
    **/
    count<T extends RacesMJCCountArgs>(
      args?: Subset<T, RacesMJCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RacesMJCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RacesMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesMJCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RacesMJCAggregateArgs>(args: Subset<T, RacesMJCAggregateArgs>): Prisma.PrismaPromise<GetRacesMJCAggregateType<T>>

    /**
     * Group by RacesMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesMJCGroupByArgs} args - Group by arguments.
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
      T extends RacesMJCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RacesMJCGroupByArgs['orderBy'] }
        : { orderBy?: RacesMJCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RacesMJCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRacesMJCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RacesMJC model
   */
  readonly fields: RacesMJCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RacesMJC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RacesMJCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petMJC<T extends RacesMJC$petMJCArgs<ExtArgs> = {}>(args?: Subset<T, RacesMJC$petMJCArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RacesMJC model
   */
  interface RacesMJCFieldRefs {
    readonly id_RacesMJC: FieldRef<"RacesMJC", 'Int'>
    readonly name_RacesMJC: FieldRef<"RacesMJC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RacesMJC findUnique
   */
  export type RacesMJCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * Filter, which RacesMJC to fetch.
     */
    where: RacesMJCWhereUniqueInput
  }

  /**
   * RacesMJC findUniqueOrThrow
   */
  export type RacesMJCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * Filter, which RacesMJC to fetch.
     */
    where: RacesMJCWhereUniqueInput
  }

  /**
   * RacesMJC findFirst
   */
  export type RacesMJCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * Filter, which RacesMJC to fetch.
     */
    where?: RacesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RacesMJCS to fetch.
     */
    orderBy?: RacesMJCOrderByWithRelationInput | RacesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RacesMJCS.
     */
    cursor?: RacesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RacesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RacesMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RacesMJCS.
     */
    distinct?: RacesMJCScalarFieldEnum | RacesMJCScalarFieldEnum[]
  }

  /**
   * RacesMJC findFirstOrThrow
   */
  export type RacesMJCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * Filter, which RacesMJC to fetch.
     */
    where?: RacesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RacesMJCS to fetch.
     */
    orderBy?: RacesMJCOrderByWithRelationInput | RacesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RacesMJCS.
     */
    cursor?: RacesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RacesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RacesMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RacesMJCS.
     */
    distinct?: RacesMJCScalarFieldEnum | RacesMJCScalarFieldEnum[]
  }

  /**
   * RacesMJC findMany
   */
  export type RacesMJCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * Filter, which RacesMJCS to fetch.
     */
    where?: RacesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RacesMJCS to fetch.
     */
    orderBy?: RacesMJCOrderByWithRelationInput | RacesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RacesMJCS.
     */
    cursor?: RacesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RacesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RacesMJCS.
     */
    skip?: number
    distinct?: RacesMJCScalarFieldEnum | RacesMJCScalarFieldEnum[]
  }

  /**
   * RacesMJC create
   */
  export type RacesMJCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * The data needed to create a RacesMJC.
     */
    data: XOR<RacesMJCCreateInput, RacesMJCUncheckedCreateInput>
  }

  /**
   * RacesMJC createMany
   */
  export type RacesMJCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RacesMJCS.
     */
    data: RacesMJCCreateManyInput | RacesMJCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RacesMJC update
   */
  export type RacesMJCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * The data needed to update a RacesMJC.
     */
    data: XOR<RacesMJCUpdateInput, RacesMJCUncheckedUpdateInput>
    /**
     * Choose, which RacesMJC to update.
     */
    where: RacesMJCWhereUniqueInput
  }

  /**
   * RacesMJC updateMany
   */
  export type RacesMJCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RacesMJCS.
     */
    data: XOR<RacesMJCUpdateManyMutationInput, RacesMJCUncheckedUpdateManyInput>
    /**
     * Filter which RacesMJCS to update
     */
    where?: RacesMJCWhereInput
    /**
     * Limit how many RacesMJCS to update.
     */
    limit?: number
  }

  /**
   * RacesMJC upsert
   */
  export type RacesMJCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * The filter to search for the RacesMJC to update in case it exists.
     */
    where: RacesMJCWhereUniqueInput
    /**
     * In case the RacesMJC found by the `where` argument doesn't exist, create a new RacesMJC with this data.
     */
    create: XOR<RacesMJCCreateInput, RacesMJCUncheckedCreateInput>
    /**
     * In case the RacesMJC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RacesMJCUpdateInput, RacesMJCUncheckedUpdateInput>
  }

  /**
   * RacesMJC delete
   */
  export type RacesMJCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
    /**
     * Filter which RacesMJC to delete.
     */
    where: RacesMJCWhereUniqueInput
  }

  /**
   * RacesMJC deleteMany
   */
  export type RacesMJCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RacesMJCS to delete
     */
    where?: RacesMJCWhereInput
    /**
     * Limit how many RacesMJCS to delete.
     */
    limit?: number
  }

  /**
   * RacesMJC.petMJC
   */
  export type RacesMJC$petMJCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    where?: PetMJCWhereInput
    orderBy?: PetMJCOrderByWithRelationInput | PetMJCOrderByWithRelationInput[]
    cursor?: PetMJCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetMJCScalarFieldEnum | PetMJCScalarFieldEnum[]
  }

  /**
   * RacesMJC without action
   */
  export type RacesMJCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesMJC
     */
    select?: RacesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RacesMJC
     */
    omit?: RacesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesMJCInclude<ExtArgs> | null
  }


  /**
   * Model CategoriesMJC
   */

  export type AggregateCategoriesMJC = {
    _count: CategoriesMJCCountAggregateOutputType | null
    _avg: CategoriesMJCAvgAggregateOutputType | null
    _sum: CategoriesMJCSumAggregateOutputType | null
    _min: CategoriesMJCMinAggregateOutputType | null
    _max: CategoriesMJCMaxAggregateOutputType | null
  }

  export type CategoriesMJCAvgAggregateOutputType = {
    id_CategoriesMJC: number | null
  }

  export type CategoriesMJCSumAggregateOutputType = {
    id_CategoriesMJC: number | null
  }

  export type CategoriesMJCMinAggregateOutputType = {
    id_CategoriesMJC: number | null
    name_CategoriesMJC: string | null
  }

  export type CategoriesMJCMaxAggregateOutputType = {
    id_CategoriesMJC: number | null
    name_CategoriesMJC: string | null
  }

  export type CategoriesMJCCountAggregateOutputType = {
    id_CategoriesMJC: number
    name_CategoriesMJC: number
    _all: number
  }


  export type CategoriesMJCAvgAggregateInputType = {
    id_CategoriesMJC?: true
  }

  export type CategoriesMJCSumAggregateInputType = {
    id_CategoriesMJC?: true
  }

  export type CategoriesMJCMinAggregateInputType = {
    id_CategoriesMJC?: true
    name_CategoriesMJC?: true
  }

  export type CategoriesMJCMaxAggregateInputType = {
    id_CategoriesMJC?: true
    name_CategoriesMJC?: true
  }

  export type CategoriesMJCCountAggregateInputType = {
    id_CategoriesMJC?: true
    name_CategoriesMJC?: true
    _all?: true
  }

  export type CategoriesMJCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesMJC to aggregate.
     */
    where?: CategoriesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesMJCS to fetch.
     */
    orderBy?: CategoriesMJCOrderByWithRelationInput | CategoriesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriesMJCS
    **/
    _count?: true | CategoriesMJCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesMJCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesMJCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMJCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMJCMaxAggregateInputType
  }

  export type GetCategoriesMJCAggregateType<T extends CategoriesMJCAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriesMJC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriesMJC[P]>
      : GetScalarType<T[P], AggregateCategoriesMJC[P]>
  }




  export type CategoriesMJCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesMJCWhereInput
    orderBy?: CategoriesMJCOrderByWithAggregationInput | CategoriesMJCOrderByWithAggregationInput[]
    by: CategoriesMJCScalarFieldEnum[] | CategoriesMJCScalarFieldEnum
    having?: CategoriesMJCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesMJCCountAggregateInputType | true
    _avg?: CategoriesMJCAvgAggregateInputType
    _sum?: CategoriesMJCSumAggregateInputType
    _min?: CategoriesMJCMinAggregateInputType
    _max?: CategoriesMJCMaxAggregateInputType
  }

  export type CategoriesMJCGroupByOutputType = {
    id_CategoriesMJC: number
    name_CategoriesMJC: string
    _count: CategoriesMJCCountAggregateOutputType | null
    _avg: CategoriesMJCAvgAggregateOutputType | null
    _sum: CategoriesMJCSumAggregateOutputType | null
    _min: CategoriesMJCMinAggregateOutputType | null
    _max: CategoriesMJCMaxAggregateOutputType | null
  }

  type GetCategoriesMJCGroupByPayload<T extends CategoriesMJCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesMJCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesMJCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesMJCGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesMJCGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesMJCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_CategoriesMJC?: boolean
    name_CategoriesMJC?: boolean
    petMJC?: boolean | CategoriesMJC$petMJCArgs<ExtArgs>
    _count?: boolean | CategoriesMJCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriesMJC"]>



  export type CategoriesMJCSelectScalar = {
    id_CategoriesMJC?: boolean
    name_CategoriesMJC?: boolean
  }

  export type CategoriesMJCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_CategoriesMJC" | "name_CategoriesMJC", ExtArgs["result"]["categoriesMJC"]>
  export type CategoriesMJCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petMJC?: boolean | CategoriesMJC$petMJCArgs<ExtArgs>
    _count?: boolean | CategoriesMJCCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesMJCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriesMJC"
    objects: {
      petMJC: Prisma.$PetMJCPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_CategoriesMJC: number
      name_CategoriesMJC: string
    }, ExtArgs["result"]["categoriesMJC"]>
    composites: {}
  }

  type CategoriesMJCGetPayload<S extends boolean | null | undefined | CategoriesMJCDefaultArgs> = $Result.GetResult<Prisma.$CategoriesMJCPayload, S>

  type CategoriesMJCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesMJCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesMJCCountAggregateInputType | true
    }

  export interface CategoriesMJCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriesMJC'], meta: { name: 'CategoriesMJC' } }
    /**
     * Find zero or one CategoriesMJC that matches the filter.
     * @param {CategoriesMJCFindUniqueArgs} args - Arguments to find a CategoriesMJC
     * @example
     * // Get one CategoriesMJC
     * const categoriesMJC = await prisma.categoriesMJC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesMJCFindUniqueArgs>(args: SelectSubset<T, CategoriesMJCFindUniqueArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriesMJC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesMJCFindUniqueOrThrowArgs} args - Arguments to find a CategoriesMJC
     * @example
     * // Get one CategoriesMJC
     * const categoriesMJC = await prisma.categoriesMJC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesMJCFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesMJCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesMJC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesMJCFindFirstArgs} args - Arguments to find a CategoriesMJC
     * @example
     * // Get one CategoriesMJC
     * const categoriesMJC = await prisma.categoriesMJC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesMJCFindFirstArgs>(args?: SelectSubset<T, CategoriesMJCFindFirstArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesMJC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesMJCFindFirstOrThrowArgs} args - Arguments to find a CategoriesMJC
     * @example
     * // Get one CategoriesMJC
     * const categoriesMJC = await prisma.categoriesMJC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesMJCFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesMJCFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriesMJCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesMJCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriesMJCS
     * const categoriesMJCS = await prisma.categoriesMJC.findMany()
     * 
     * // Get first 10 CategoriesMJCS
     * const categoriesMJCS = await prisma.categoriesMJC.findMany({ take: 10 })
     * 
     * // Only select the `id_CategoriesMJC`
     * const categoriesMJCWithId_CategoriesMJCOnly = await prisma.categoriesMJC.findMany({ select: { id_CategoriesMJC: true } })
     * 
     */
    findMany<T extends CategoriesMJCFindManyArgs>(args?: SelectSubset<T, CategoriesMJCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriesMJC.
     * @param {CategoriesMJCCreateArgs} args - Arguments to create a CategoriesMJC.
     * @example
     * // Create one CategoriesMJC
     * const CategoriesMJC = await prisma.categoriesMJC.create({
     *   data: {
     *     // ... data to create a CategoriesMJC
     *   }
     * })
     * 
     */
    create<T extends CategoriesMJCCreateArgs>(args: SelectSubset<T, CategoriesMJCCreateArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriesMJCS.
     * @param {CategoriesMJCCreateManyArgs} args - Arguments to create many CategoriesMJCS.
     * @example
     * // Create many CategoriesMJCS
     * const categoriesMJC = await prisma.categoriesMJC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesMJCCreateManyArgs>(args?: SelectSubset<T, CategoriesMJCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriesMJC.
     * @param {CategoriesMJCDeleteArgs} args - Arguments to delete one CategoriesMJC.
     * @example
     * // Delete one CategoriesMJC
     * const CategoriesMJC = await prisma.categoriesMJC.delete({
     *   where: {
     *     // ... filter to delete one CategoriesMJC
     *   }
     * })
     * 
     */
    delete<T extends CategoriesMJCDeleteArgs>(args: SelectSubset<T, CategoriesMJCDeleteArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriesMJC.
     * @param {CategoriesMJCUpdateArgs} args - Arguments to update one CategoriesMJC.
     * @example
     * // Update one CategoriesMJC
     * const categoriesMJC = await prisma.categoriesMJC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesMJCUpdateArgs>(args: SelectSubset<T, CategoriesMJCUpdateArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriesMJCS.
     * @param {CategoriesMJCDeleteManyArgs} args - Arguments to filter CategoriesMJCS to delete.
     * @example
     * // Delete a few CategoriesMJCS
     * const { count } = await prisma.categoriesMJC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesMJCDeleteManyArgs>(args?: SelectSubset<T, CategoriesMJCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriesMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesMJCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriesMJCS
     * const categoriesMJC = await prisma.categoriesMJC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesMJCUpdateManyArgs>(args: SelectSubset<T, CategoriesMJCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriesMJC.
     * @param {CategoriesMJCUpsertArgs} args - Arguments to update or create a CategoriesMJC.
     * @example
     * // Update or create a CategoriesMJC
     * const categoriesMJC = await prisma.categoriesMJC.upsert({
     *   create: {
     *     // ... data to create a CategoriesMJC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriesMJC we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesMJCUpsertArgs>(args: SelectSubset<T, CategoriesMJCUpsertArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriesMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesMJCCountArgs} args - Arguments to filter CategoriesMJCS to count.
     * @example
     * // Count the number of CategoriesMJCS
     * const count = await prisma.categoriesMJC.count({
     *   where: {
     *     // ... the filter for the CategoriesMJCS we want to count
     *   }
     * })
    **/
    count<T extends CategoriesMJCCountArgs>(
      args?: Subset<T, CategoriesMJCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesMJCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriesMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesMJCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesMJCAggregateArgs>(args: Subset<T, CategoriesMJCAggregateArgs>): Prisma.PrismaPromise<GetCategoriesMJCAggregateType<T>>

    /**
     * Group by CategoriesMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesMJCGroupByArgs} args - Group by arguments.
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
      T extends CategoriesMJCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesMJCGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesMJCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesMJCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesMJCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriesMJC model
   */
  readonly fields: CategoriesMJCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriesMJC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesMJCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petMJC<T extends CategoriesMJC$petMJCArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesMJC$petMJCArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoriesMJC model
   */
  interface CategoriesMJCFieldRefs {
    readonly id_CategoriesMJC: FieldRef<"CategoriesMJC", 'Int'>
    readonly name_CategoriesMJC: FieldRef<"CategoriesMJC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoriesMJC findUnique
   */
  export type CategoriesMJCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesMJC to fetch.
     */
    where: CategoriesMJCWhereUniqueInput
  }

  /**
   * CategoriesMJC findUniqueOrThrow
   */
  export type CategoriesMJCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesMJC to fetch.
     */
    where: CategoriesMJCWhereUniqueInput
  }

  /**
   * CategoriesMJC findFirst
   */
  export type CategoriesMJCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesMJC to fetch.
     */
    where?: CategoriesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesMJCS to fetch.
     */
    orderBy?: CategoriesMJCOrderByWithRelationInput | CategoriesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesMJCS.
     */
    cursor?: CategoriesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesMJCS.
     */
    distinct?: CategoriesMJCScalarFieldEnum | CategoriesMJCScalarFieldEnum[]
  }

  /**
   * CategoriesMJC findFirstOrThrow
   */
  export type CategoriesMJCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesMJC to fetch.
     */
    where?: CategoriesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesMJCS to fetch.
     */
    orderBy?: CategoriesMJCOrderByWithRelationInput | CategoriesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesMJCS.
     */
    cursor?: CategoriesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesMJCS.
     */
    distinct?: CategoriesMJCScalarFieldEnum | CategoriesMJCScalarFieldEnum[]
  }

  /**
   * CategoriesMJC findMany
   */
  export type CategoriesMJCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesMJCS to fetch.
     */
    where?: CategoriesMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesMJCS to fetch.
     */
    orderBy?: CategoriesMJCOrderByWithRelationInput | CategoriesMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriesMJCS.
     */
    cursor?: CategoriesMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesMJCS.
     */
    skip?: number
    distinct?: CategoriesMJCScalarFieldEnum | CategoriesMJCScalarFieldEnum[]
  }

  /**
   * CategoriesMJC create
   */
  export type CategoriesMJCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriesMJC.
     */
    data: XOR<CategoriesMJCCreateInput, CategoriesMJCUncheckedCreateInput>
  }

  /**
   * CategoriesMJC createMany
   */
  export type CategoriesMJCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriesMJCS.
     */
    data: CategoriesMJCCreateManyInput | CategoriesMJCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriesMJC update
   */
  export type CategoriesMJCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriesMJC.
     */
    data: XOR<CategoriesMJCUpdateInput, CategoriesMJCUncheckedUpdateInput>
    /**
     * Choose, which CategoriesMJC to update.
     */
    where: CategoriesMJCWhereUniqueInput
  }

  /**
   * CategoriesMJC updateMany
   */
  export type CategoriesMJCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriesMJCS.
     */
    data: XOR<CategoriesMJCUpdateManyMutationInput, CategoriesMJCUncheckedUpdateManyInput>
    /**
     * Filter which CategoriesMJCS to update
     */
    where?: CategoriesMJCWhereInput
    /**
     * Limit how many CategoriesMJCS to update.
     */
    limit?: number
  }

  /**
   * CategoriesMJC upsert
   */
  export type CategoriesMJCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriesMJC to update in case it exists.
     */
    where: CategoriesMJCWhereUniqueInput
    /**
     * In case the CategoriesMJC found by the `where` argument doesn't exist, create a new CategoriesMJC with this data.
     */
    create: XOR<CategoriesMJCCreateInput, CategoriesMJCUncheckedCreateInput>
    /**
     * In case the CategoriesMJC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesMJCUpdateInput, CategoriesMJCUncheckedUpdateInput>
  }

  /**
   * CategoriesMJC delete
   */
  export type CategoriesMJCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
    /**
     * Filter which CategoriesMJC to delete.
     */
    where: CategoriesMJCWhereUniqueInput
  }

  /**
   * CategoriesMJC deleteMany
   */
  export type CategoriesMJCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesMJCS to delete
     */
    where?: CategoriesMJCWhereInput
    /**
     * Limit how many CategoriesMJCS to delete.
     */
    limit?: number
  }

  /**
   * CategoriesMJC.petMJC
   */
  export type CategoriesMJC$petMJCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    where?: PetMJCWhereInput
    orderBy?: PetMJCOrderByWithRelationInput | PetMJCOrderByWithRelationInput[]
    cursor?: PetMJCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetMJCScalarFieldEnum | PetMJCScalarFieldEnum[]
  }

  /**
   * CategoriesMJC without action
   */
  export type CategoriesMJCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesMJC
     */
    select?: CategoriesMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesMJC
     */
    omit?: CategoriesMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesMJCInclude<ExtArgs> | null
  }


  /**
   * Model GendersMJC
   */

  export type AggregateGendersMJC = {
    _count: GendersMJCCountAggregateOutputType | null
    _avg: GendersMJCAvgAggregateOutputType | null
    _sum: GendersMJCSumAggregateOutputType | null
    _min: GendersMJCMinAggregateOutputType | null
    _max: GendersMJCMaxAggregateOutputType | null
  }

  export type GendersMJCAvgAggregateOutputType = {
    id_GendersMJC: number | null
  }

  export type GendersMJCSumAggregateOutputType = {
    id_GendersMJC: number | null
  }

  export type GendersMJCMinAggregateOutputType = {
    id_GendersMJC: number | null
    name_GendersMJC: string | null
  }

  export type GendersMJCMaxAggregateOutputType = {
    id_GendersMJC: number | null
    name_GendersMJC: string | null
  }

  export type GendersMJCCountAggregateOutputType = {
    id_GendersMJC: number
    name_GendersMJC: number
    _all: number
  }


  export type GendersMJCAvgAggregateInputType = {
    id_GendersMJC?: true
  }

  export type GendersMJCSumAggregateInputType = {
    id_GendersMJC?: true
  }

  export type GendersMJCMinAggregateInputType = {
    id_GendersMJC?: true
    name_GendersMJC?: true
  }

  export type GendersMJCMaxAggregateInputType = {
    id_GendersMJC?: true
    name_GendersMJC?: true
  }

  export type GendersMJCCountAggregateInputType = {
    id_GendersMJC?: true
    name_GendersMJC?: true
    _all?: true
  }

  export type GendersMJCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GendersMJC to aggregate.
     */
    where?: GendersMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GendersMJCS to fetch.
     */
    orderBy?: GendersMJCOrderByWithRelationInput | GendersMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GendersMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GendersMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GendersMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GendersMJCS
    **/
    _count?: true | GendersMJCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GendersMJCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GendersMJCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GendersMJCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GendersMJCMaxAggregateInputType
  }

  export type GetGendersMJCAggregateType<T extends GendersMJCAggregateArgs> = {
        [P in keyof T & keyof AggregateGendersMJC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGendersMJC[P]>
      : GetScalarType<T[P], AggregateGendersMJC[P]>
  }




  export type GendersMJCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GendersMJCWhereInput
    orderBy?: GendersMJCOrderByWithAggregationInput | GendersMJCOrderByWithAggregationInput[]
    by: GendersMJCScalarFieldEnum[] | GendersMJCScalarFieldEnum
    having?: GendersMJCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GendersMJCCountAggregateInputType | true
    _avg?: GendersMJCAvgAggregateInputType
    _sum?: GendersMJCSumAggregateInputType
    _min?: GendersMJCMinAggregateInputType
    _max?: GendersMJCMaxAggregateInputType
  }

  export type GendersMJCGroupByOutputType = {
    id_GendersMJC: number
    name_GendersMJC: string
    _count: GendersMJCCountAggregateOutputType | null
    _avg: GendersMJCAvgAggregateOutputType | null
    _sum: GendersMJCSumAggregateOutputType | null
    _min: GendersMJCMinAggregateOutputType | null
    _max: GendersMJCMaxAggregateOutputType | null
  }

  type GetGendersMJCGroupByPayload<T extends GendersMJCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GendersMJCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GendersMJCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GendersMJCGroupByOutputType[P]>
            : GetScalarType<T[P], GendersMJCGroupByOutputType[P]>
        }
      >
    >


  export type GendersMJCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_GendersMJC?: boolean
    name_GendersMJC?: boolean
    petMJC?: boolean | GendersMJC$petMJCArgs<ExtArgs>
    _count?: boolean | GendersMJCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gendersMJC"]>



  export type GendersMJCSelectScalar = {
    id_GendersMJC?: boolean
    name_GendersMJC?: boolean
  }

  export type GendersMJCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_GendersMJC" | "name_GendersMJC", ExtArgs["result"]["gendersMJC"]>
  export type GendersMJCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petMJC?: boolean | GendersMJC$petMJCArgs<ExtArgs>
    _count?: boolean | GendersMJCCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GendersMJCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GendersMJC"
    objects: {
      petMJC: Prisma.$PetMJCPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_GendersMJC: number
      name_GendersMJC: string
    }, ExtArgs["result"]["gendersMJC"]>
    composites: {}
  }

  type GendersMJCGetPayload<S extends boolean | null | undefined | GendersMJCDefaultArgs> = $Result.GetResult<Prisma.$GendersMJCPayload, S>

  type GendersMJCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GendersMJCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GendersMJCCountAggregateInputType | true
    }

  export interface GendersMJCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GendersMJC'], meta: { name: 'GendersMJC' } }
    /**
     * Find zero or one GendersMJC that matches the filter.
     * @param {GendersMJCFindUniqueArgs} args - Arguments to find a GendersMJC
     * @example
     * // Get one GendersMJC
     * const gendersMJC = await prisma.gendersMJC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GendersMJCFindUniqueArgs>(args: SelectSubset<T, GendersMJCFindUniqueArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GendersMJC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GendersMJCFindUniqueOrThrowArgs} args - Arguments to find a GendersMJC
     * @example
     * // Get one GendersMJC
     * const gendersMJC = await prisma.gendersMJC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GendersMJCFindUniqueOrThrowArgs>(args: SelectSubset<T, GendersMJCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GendersMJC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersMJCFindFirstArgs} args - Arguments to find a GendersMJC
     * @example
     * // Get one GendersMJC
     * const gendersMJC = await prisma.gendersMJC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GendersMJCFindFirstArgs>(args?: SelectSubset<T, GendersMJCFindFirstArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GendersMJC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersMJCFindFirstOrThrowArgs} args - Arguments to find a GendersMJC
     * @example
     * // Get one GendersMJC
     * const gendersMJC = await prisma.gendersMJC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GendersMJCFindFirstOrThrowArgs>(args?: SelectSubset<T, GendersMJCFindFirstOrThrowArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GendersMJCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersMJCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GendersMJCS
     * const gendersMJCS = await prisma.gendersMJC.findMany()
     * 
     * // Get first 10 GendersMJCS
     * const gendersMJCS = await prisma.gendersMJC.findMany({ take: 10 })
     * 
     * // Only select the `id_GendersMJC`
     * const gendersMJCWithId_GendersMJCOnly = await prisma.gendersMJC.findMany({ select: { id_GendersMJC: true } })
     * 
     */
    findMany<T extends GendersMJCFindManyArgs>(args?: SelectSubset<T, GendersMJCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GendersMJC.
     * @param {GendersMJCCreateArgs} args - Arguments to create a GendersMJC.
     * @example
     * // Create one GendersMJC
     * const GendersMJC = await prisma.gendersMJC.create({
     *   data: {
     *     // ... data to create a GendersMJC
     *   }
     * })
     * 
     */
    create<T extends GendersMJCCreateArgs>(args: SelectSubset<T, GendersMJCCreateArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GendersMJCS.
     * @param {GendersMJCCreateManyArgs} args - Arguments to create many GendersMJCS.
     * @example
     * // Create many GendersMJCS
     * const gendersMJC = await prisma.gendersMJC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GendersMJCCreateManyArgs>(args?: SelectSubset<T, GendersMJCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GendersMJC.
     * @param {GendersMJCDeleteArgs} args - Arguments to delete one GendersMJC.
     * @example
     * // Delete one GendersMJC
     * const GendersMJC = await prisma.gendersMJC.delete({
     *   where: {
     *     // ... filter to delete one GendersMJC
     *   }
     * })
     * 
     */
    delete<T extends GendersMJCDeleteArgs>(args: SelectSubset<T, GendersMJCDeleteArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GendersMJC.
     * @param {GendersMJCUpdateArgs} args - Arguments to update one GendersMJC.
     * @example
     * // Update one GendersMJC
     * const gendersMJC = await prisma.gendersMJC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GendersMJCUpdateArgs>(args: SelectSubset<T, GendersMJCUpdateArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GendersMJCS.
     * @param {GendersMJCDeleteManyArgs} args - Arguments to filter GendersMJCS to delete.
     * @example
     * // Delete a few GendersMJCS
     * const { count } = await prisma.gendersMJC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GendersMJCDeleteManyArgs>(args?: SelectSubset<T, GendersMJCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GendersMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersMJCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GendersMJCS
     * const gendersMJC = await prisma.gendersMJC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GendersMJCUpdateManyArgs>(args: SelectSubset<T, GendersMJCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GendersMJC.
     * @param {GendersMJCUpsertArgs} args - Arguments to update or create a GendersMJC.
     * @example
     * // Update or create a GendersMJC
     * const gendersMJC = await prisma.gendersMJC.upsert({
     *   create: {
     *     // ... data to create a GendersMJC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GendersMJC we want to update
     *   }
     * })
     */
    upsert<T extends GendersMJCUpsertArgs>(args: SelectSubset<T, GendersMJCUpsertArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GendersMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersMJCCountArgs} args - Arguments to filter GendersMJCS to count.
     * @example
     * // Count the number of GendersMJCS
     * const count = await prisma.gendersMJC.count({
     *   where: {
     *     // ... the filter for the GendersMJCS we want to count
     *   }
     * })
    **/
    count<T extends GendersMJCCountArgs>(
      args?: Subset<T, GendersMJCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GendersMJCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GendersMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersMJCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GendersMJCAggregateArgs>(args: Subset<T, GendersMJCAggregateArgs>): Prisma.PrismaPromise<GetGendersMJCAggregateType<T>>

    /**
     * Group by GendersMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersMJCGroupByArgs} args - Group by arguments.
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
      T extends GendersMJCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GendersMJCGroupByArgs['orderBy'] }
        : { orderBy?: GendersMJCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GendersMJCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGendersMJCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GendersMJC model
   */
  readonly fields: GendersMJCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GendersMJC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GendersMJCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petMJC<T extends GendersMJC$petMJCArgs<ExtArgs> = {}>(args?: Subset<T, GendersMJC$petMJCArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GendersMJC model
   */
  interface GendersMJCFieldRefs {
    readonly id_GendersMJC: FieldRef<"GendersMJC", 'Int'>
    readonly name_GendersMJC: FieldRef<"GendersMJC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GendersMJC findUnique
   */
  export type GendersMJCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * Filter, which GendersMJC to fetch.
     */
    where: GendersMJCWhereUniqueInput
  }

  /**
   * GendersMJC findUniqueOrThrow
   */
  export type GendersMJCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * Filter, which GendersMJC to fetch.
     */
    where: GendersMJCWhereUniqueInput
  }

  /**
   * GendersMJC findFirst
   */
  export type GendersMJCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * Filter, which GendersMJC to fetch.
     */
    where?: GendersMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GendersMJCS to fetch.
     */
    orderBy?: GendersMJCOrderByWithRelationInput | GendersMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GendersMJCS.
     */
    cursor?: GendersMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GendersMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GendersMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GendersMJCS.
     */
    distinct?: GendersMJCScalarFieldEnum | GendersMJCScalarFieldEnum[]
  }

  /**
   * GendersMJC findFirstOrThrow
   */
  export type GendersMJCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * Filter, which GendersMJC to fetch.
     */
    where?: GendersMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GendersMJCS to fetch.
     */
    orderBy?: GendersMJCOrderByWithRelationInput | GendersMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GendersMJCS.
     */
    cursor?: GendersMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GendersMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GendersMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GendersMJCS.
     */
    distinct?: GendersMJCScalarFieldEnum | GendersMJCScalarFieldEnum[]
  }

  /**
   * GendersMJC findMany
   */
  export type GendersMJCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * Filter, which GendersMJCS to fetch.
     */
    where?: GendersMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GendersMJCS to fetch.
     */
    orderBy?: GendersMJCOrderByWithRelationInput | GendersMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GendersMJCS.
     */
    cursor?: GendersMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GendersMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GendersMJCS.
     */
    skip?: number
    distinct?: GendersMJCScalarFieldEnum | GendersMJCScalarFieldEnum[]
  }

  /**
   * GendersMJC create
   */
  export type GendersMJCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * The data needed to create a GendersMJC.
     */
    data: XOR<GendersMJCCreateInput, GendersMJCUncheckedCreateInput>
  }

  /**
   * GendersMJC createMany
   */
  export type GendersMJCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GendersMJCS.
     */
    data: GendersMJCCreateManyInput | GendersMJCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GendersMJC update
   */
  export type GendersMJCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * The data needed to update a GendersMJC.
     */
    data: XOR<GendersMJCUpdateInput, GendersMJCUncheckedUpdateInput>
    /**
     * Choose, which GendersMJC to update.
     */
    where: GendersMJCWhereUniqueInput
  }

  /**
   * GendersMJC updateMany
   */
  export type GendersMJCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GendersMJCS.
     */
    data: XOR<GendersMJCUpdateManyMutationInput, GendersMJCUncheckedUpdateManyInput>
    /**
     * Filter which GendersMJCS to update
     */
    where?: GendersMJCWhereInput
    /**
     * Limit how many GendersMJCS to update.
     */
    limit?: number
  }

  /**
   * GendersMJC upsert
   */
  export type GendersMJCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * The filter to search for the GendersMJC to update in case it exists.
     */
    where: GendersMJCWhereUniqueInput
    /**
     * In case the GendersMJC found by the `where` argument doesn't exist, create a new GendersMJC with this data.
     */
    create: XOR<GendersMJCCreateInput, GendersMJCUncheckedCreateInput>
    /**
     * In case the GendersMJC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GendersMJCUpdateInput, GendersMJCUncheckedUpdateInput>
  }

  /**
   * GendersMJC delete
   */
  export type GendersMJCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
    /**
     * Filter which GendersMJC to delete.
     */
    where: GendersMJCWhereUniqueInput
  }

  /**
   * GendersMJC deleteMany
   */
  export type GendersMJCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GendersMJCS to delete
     */
    where?: GendersMJCWhereInput
    /**
     * Limit how many GendersMJCS to delete.
     */
    limit?: number
  }

  /**
   * GendersMJC.petMJC
   */
  export type GendersMJC$petMJCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    where?: PetMJCWhereInput
    orderBy?: PetMJCOrderByWithRelationInput | PetMJCOrderByWithRelationInput[]
    cursor?: PetMJCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetMJCScalarFieldEnum | PetMJCScalarFieldEnum[]
  }

  /**
   * GendersMJC without action
   */
  export type GendersMJCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersMJC
     */
    select?: GendersMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GendersMJC
     */
    omit?: GendersMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersMJCInclude<ExtArgs> | null
  }


  /**
   * Model PetMJC
   */

  export type AggregatePetMJC = {
    _count: PetMJCCountAggregateOutputType | null
    _avg: PetMJCAvgAggregateOutputType | null
    _sum: PetMJCSumAggregateOutputType | null
    _min: PetMJCMinAggregateOutputType | null
    _max: PetMJCMaxAggregateOutputType | null
  }

  export type PetMJCAvgAggregateOutputType = {
    id_PetMJC: number | null
    fk_RacesMJC: number | null
    fk_CategoriesMJC: number | null
    fk_GendersMJC: number | null
  }

  export type PetMJCSumAggregateOutputType = {
    id_PetMJC: number | null
    fk_RacesMJC: number | null
    fk_CategoriesMJC: number | null
    fk_GendersMJC: number | null
  }

  export type PetMJCMinAggregateOutputType = {
    id_PetMJC: number | null
    name_PetsMJC: string | null
    photoMJC: string | null
    estadoMJC: $Enums.EstadoMJC | null
    fk_RacesMJC: number | null
    fk_CategoriesMJC: number | null
    fk_GendersMJC: number | null
  }

  export type PetMJCMaxAggregateOutputType = {
    id_PetMJC: number | null
    name_PetsMJC: string | null
    photoMJC: string | null
    estadoMJC: $Enums.EstadoMJC | null
    fk_RacesMJC: number | null
    fk_CategoriesMJC: number | null
    fk_GendersMJC: number | null
  }

  export type PetMJCCountAggregateOutputType = {
    id_PetMJC: number
    name_PetsMJC: number
    photoMJC: number
    estadoMJC: number
    fk_RacesMJC: number
    fk_CategoriesMJC: number
    fk_GendersMJC: number
    _all: number
  }


  export type PetMJCAvgAggregateInputType = {
    id_PetMJC?: true
    fk_RacesMJC?: true
    fk_CategoriesMJC?: true
    fk_GendersMJC?: true
  }

  export type PetMJCSumAggregateInputType = {
    id_PetMJC?: true
    fk_RacesMJC?: true
    fk_CategoriesMJC?: true
    fk_GendersMJC?: true
  }

  export type PetMJCMinAggregateInputType = {
    id_PetMJC?: true
    name_PetsMJC?: true
    photoMJC?: true
    estadoMJC?: true
    fk_RacesMJC?: true
    fk_CategoriesMJC?: true
    fk_GendersMJC?: true
  }

  export type PetMJCMaxAggregateInputType = {
    id_PetMJC?: true
    name_PetsMJC?: true
    photoMJC?: true
    estadoMJC?: true
    fk_RacesMJC?: true
    fk_CategoriesMJC?: true
    fk_GendersMJC?: true
  }

  export type PetMJCCountAggregateInputType = {
    id_PetMJC?: true
    name_PetsMJC?: true
    photoMJC?: true
    estadoMJC?: true
    fk_RacesMJC?: true
    fk_CategoriesMJC?: true
    fk_GendersMJC?: true
    _all?: true
  }

  export type PetMJCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetMJC to aggregate.
     */
    where?: PetMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMJCS to fetch.
     */
    orderBy?: PetMJCOrderByWithRelationInput | PetMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetMJCS
    **/
    _count?: true | PetMJCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetMJCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetMJCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMJCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMJCMaxAggregateInputType
  }

  export type GetPetMJCAggregateType<T extends PetMJCAggregateArgs> = {
        [P in keyof T & keyof AggregatePetMJC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetMJC[P]>
      : GetScalarType<T[P], AggregatePetMJC[P]>
  }




  export type PetMJCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetMJCWhereInput
    orderBy?: PetMJCOrderByWithAggregationInput | PetMJCOrderByWithAggregationInput[]
    by: PetMJCScalarFieldEnum[] | PetMJCScalarFieldEnum
    having?: PetMJCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetMJCCountAggregateInputType | true
    _avg?: PetMJCAvgAggregateInputType
    _sum?: PetMJCSumAggregateInputType
    _min?: PetMJCMinAggregateInputType
    _max?: PetMJCMaxAggregateInputType
  }

  export type PetMJCGroupByOutputType = {
    id_PetMJC: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC: $Enums.EstadoMJC
    fk_RacesMJC: number
    fk_CategoriesMJC: number
    fk_GendersMJC: number
    _count: PetMJCCountAggregateOutputType | null
    _avg: PetMJCAvgAggregateOutputType | null
    _sum: PetMJCSumAggregateOutputType | null
    _min: PetMJCMinAggregateOutputType | null
    _max: PetMJCMaxAggregateOutputType | null
  }

  type GetPetMJCGroupByPayload<T extends PetMJCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetMJCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetMJCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetMJCGroupByOutputType[P]>
            : GetScalarType<T[P], PetMJCGroupByOutputType[P]>
        }
      >
    >


  export type PetMJCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_PetMJC?: boolean
    name_PetsMJC?: boolean
    photoMJC?: boolean
    estadoMJC?: boolean
    fk_RacesMJC?: boolean
    fk_CategoriesMJC?: boolean
    fk_GendersMJC?: boolean
    races?: boolean | RacesMJCDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesMJCDefaultArgs<ExtArgs>
    Genders?: boolean | GendersMJCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petMJC"]>



  export type PetMJCSelectScalar = {
    id_PetMJC?: boolean
    name_PetsMJC?: boolean
    photoMJC?: boolean
    estadoMJC?: boolean
    fk_RacesMJC?: boolean
    fk_CategoriesMJC?: boolean
    fk_GendersMJC?: boolean
  }

  export type PetMJCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_PetMJC" | "name_PetsMJC" | "photoMJC" | "estadoMJC" | "fk_RacesMJC" | "fk_CategoriesMJC" | "fk_GendersMJC", ExtArgs["result"]["petMJC"]>
  export type PetMJCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    races?: boolean | RacesMJCDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesMJCDefaultArgs<ExtArgs>
    Genders?: boolean | GendersMJCDefaultArgs<ExtArgs>
  }

  export type $PetMJCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetMJC"
    objects: {
      races: Prisma.$RacesMJCPayload<ExtArgs>
      categories: Prisma.$CategoriesMJCPayload<ExtArgs>
      Genders: Prisma.$GendersMJCPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_PetMJC: number
      name_PetsMJC: string
      photoMJC: string
      estadoMJC: $Enums.EstadoMJC
      fk_RacesMJC: number
      fk_CategoriesMJC: number
      fk_GendersMJC: number
    }, ExtArgs["result"]["petMJC"]>
    composites: {}
  }

  type PetMJCGetPayload<S extends boolean | null | undefined | PetMJCDefaultArgs> = $Result.GetResult<Prisma.$PetMJCPayload, S>

  type PetMJCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetMJCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetMJCCountAggregateInputType | true
    }

  export interface PetMJCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetMJC'], meta: { name: 'PetMJC' } }
    /**
     * Find zero or one PetMJC that matches the filter.
     * @param {PetMJCFindUniqueArgs} args - Arguments to find a PetMJC
     * @example
     * // Get one PetMJC
     * const petMJC = await prisma.petMJC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetMJCFindUniqueArgs>(args: SelectSubset<T, PetMJCFindUniqueArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetMJC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetMJCFindUniqueOrThrowArgs} args - Arguments to find a PetMJC
     * @example
     * // Get one PetMJC
     * const petMJC = await prisma.petMJC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetMJCFindUniqueOrThrowArgs>(args: SelectSubset<T, PetMJCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetMJC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMJCFindFirstArgs} args - Arguments to find a PetMJC
     * @example
     * // Get one PetMJC
     * const petMJC = await prisma.petMJC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetMJCFindFirstArgs>(args?: SelectSubset<T, PetMJCFindFirstArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetMJC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMJCFindFirstOrThrowArgs} args - Arguments to find a PetMJC
     * @example
     * // Get one PetMJC
     * const petMJC = await prisma.petMJC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetMJCFindFirstOrThrowArgs>(args?: SelectSubset<T, PetMJCFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetMJCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMJCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetMJCS
     * const petMJCS = await prisma.petMJC.findMany()
     * 
     * // Get first 10 PetMJCS
     * const petMJCS = await prisma.petMJC.findMany({ take: 10 })
     * 
     * // Only select the `id_PetMJC`
     * const petMJCWithId_PetMJCOnly = await prisma.petMJC.findMany({ select: { id_PetMJC: true } })
     * 
     */
    findMany<T extends PetMJCFindManyArgs>(args?: SelectSubset<T, PetMJCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetMJC.
     * @param {PetMJCCreateArgs} args - Arguments to create a PetMJC.
     * @example
     * // Create one PetMJC
     * const PetMJC = await prisma.petMJC.create({
     *   data: {
     *     // ... data to create a PetMJC
     *   }
     * })
     * 
     */
    create<T extends PetMJCCreateArgs>(args: SelectSubset<T, PetMJCCreateArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetMJCS.
     * @param {PetMJCCreateManyArgs} args - Arguments to create many PetMJCS.
     * @example
     * // Create many PetMJCS
     * const petMJC = await prisma.petMJC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetMJCCreateManyArgs>(args?: SelectSubset<T, PetMJCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PetMJC.
     * @param {PetMJCDeleteArgs} args - Arguments to delete one PetMJC.
     * @example
     * // Delete one PetMJC
     * const PetMJC = await prisma.petMJC.delete({
     *   where: {
     *     // ... filter to delete one PetMJC
     *   }
     * })
     * 
     */
    delete<T extends PetMJCDeleteArgs>(args: SelectSubset<T, PetMJCDeleteArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetMJC.
     * @param {PetMJCUpdateArgs} args - Arguments to update one PetMJC.
     * @example
     * // Update one PetMJC
     * const petMJC = await prisma.petMJC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetMJCUpdateArgs>(args: SelectSubset<T, PetMJCUpdateArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetMJCS.
     * @param {PetMJCDeleteManyArgs} args - Arguments to filter PetMJCS to delete.
     * @example
     * // Delete a few PetMJCS
     * const { count } = await prisma.petMJC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetMJCDeleteManyArgs>(args?: SelectSubset<T, PetMJCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMJCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetMJCS
     * const petMJC = await prisma.petMJC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetMJCUpdateManyArgs>(args: SelectSubset<T, PetMJCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PetMJC.
     * @param {PetMJCUpsertArgs} args - Arguments to update or create a PetMJC.
     * @example
     * // Update or create a PetMJC
     * const petMJC = await prisma.petMJC.upsert({
     *   create: {
     *     // ... data to create a PetMJC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetMJC we want to update
     *   }
     * })
     */
    upsert<T extends PetMJCUpsertArgs>(args: SelectSubset<T, PetMJCUpsertArgs<ExtArgs>>): Prisma__PetMJCClient<$Result.GetResult<Prisma.$PetMJCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMJCCountArgs} args - Arguments to filter PetMJCS to count.
     * @example
     * // Count the number of PetMJCS
     * const count = await prisma.petMJC.count({
     *   where: {
     *     // ... the filter for the PetMJCS we want to count
     *   }
     * })
    **/
    count<T extends PetMJCCountArgs>(
      args?: Subset<T, PetMJCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetMJCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMJCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetMJCAggregateArgs>(args: Subset<T, PetMJCAggregateArgs>): Prisma.PrismaPromise<GetPetMJCAggregateType<T>>

    /**
     * Group by PetMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMJCGroupByArgs} args - Group by arguments.
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
      T extends PetMJCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetMJCGroupByArgs['orderBy'] }
        : { orderBy?: PetMJCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetMJCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetMJCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetMJC model
   */
  readonly fields: PetMJCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetMJC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetMJCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    races<T extends RacesMJCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RacesMJCDefaultArgs<ExtArgs>>): Prisma__RacesMJCClient<$Result.GetResult<Prisma.$RacesMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends CategoriesMJCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesMJCDefaultArgs<ExtArgs>>): Prisma__CategoriesMJCClient<$Result.GetResult<Prisma.$CategoriesMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Genders<T extends GendersMJCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GendersMJCDefaultArgs<ExtArgs>>): Prisma__GendersMJCClient<$Result.GetResult<Prisma.$GendersMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PetMJC model
   */
  interface PetMJCFieldRefs {
    readonly id_PetMJC: FieldRef<"PetMJC", 'Int'>
    readonly name_PetsMJC: FieldRef<"PetMJC", 'String'>
    readonly photoMJC: FieldRef<"PetMJC", 'String'>
    readonly estadoMJC: FieldRef<"PetMJC", 'EstadoMJC'>
    readonly fk_RacesMJC: FieldRef<"PetMJC", 'Int'>
    readonly fk_CategoriesMJC: FieldRef<"PetMJC", 'Int'>
    readonly fk_GendersMJC: FieldRef<"PetMJC", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PetMJC findUnique
   */
  export type PetMJCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * Filter, which PetMJC to fetch.
     */
    where: PetMJCWhereUniqueInput
  }

  /**
   * PetMJC findUniqueOrThrow
   */
  export type PetMJCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * Filter, which PetMJC to fetch.
     */
    where: PetMJCWhereUniqueInput
  }

  /**
   * PetMJC findFirst
   */
  export type PetMJCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * Filter, which PetMJC to fetch.
     */
    where?: PetMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMJCS to fetch.
     */
    orderBy?: PetMJCOrderByWithRelationInput | PetMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetMJCS.
     */
    cursor?: PetMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetMJCS.
     */
    distinct?: PetMJCScalarFieldEnum | PetMJCScalarFieldEnum[]
  }

  /**
   * PetMJC findFirstOrThrow
   */
  export type PetMJCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * Filter, which PetMJC to fetch.
     */
    where?: PetMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMJCS to fetch.
     */
    orderBy?: PetMJCOrderByWithRelationInput | PetMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetMJCS.
     */
    cursor?: PetMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetMJCS.
     */
    distinct?: PetMJCScalarFieldEnum | PetMJCScalarFieldEnum[]
  }

  /**
   * PetMJC findMany
   */
  export type PetMJCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * Filter, which PetMJCS to fetch.
     */
    where?: PetMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMJCS to fetch.
     */
    orderBy?: PetMJCOrderByWithRelationInput | PetMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetMJCS.
     */
    cursor?: PetMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMJCS.
     */
    skip?: number
    distinct?: PetMJCScalarFieldEnum | PetMJCScalarFieldEnum[]
  }

  /**
   * PetMJC create
   */
  export type PetMJCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * The data needed to create a PetMJC.
     */
    data: XOR<PetMJCCreateInput, PetMJCUncheckedCreateInput>
  }

  /**
   * PetMJC createMany
   */
  export type PetMJCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetMJCS.
     */
    data: PetMJCCreateManyInput | PetMJCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetMJC update
   */
  export type PetMJCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * The data needed to update a PetMJC.
     */
    data: XOR<PetMJCUpdateInput, PetMJCUncheckedUpdateInput>
    /**
     * Choose, which PetMJC to update.
     */
    where: PetMJCWhereUniqueInput
  }

  /**
   * PetMJC updateMany
   */
  export type PetMJCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetMJCS.
     */
    data: XOR<PetMJCUpdateManyMutationInput, PetMJCUncheckedUpdateManyInput>
    /**
     * Filter which PetMJCS to update
     */
    where?: PetMJCWhereInput
    /**
     * Limit how many PetMJCS to update.
     */
    limit?: number
  }

  /**
   * PetMJC upsert
   */
  export type PetMJCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * The filter to search for the PetMJC to update in case it exists.
     */
    where: PetMJCWhereUniqueInput
    /**
     * In case the PetMJC found by the `where` argument doesn't exist, create a new PetMJC with this data.
     */
    create: XOR<PetMJCCreateInput, PetMJCUncheckedCreateInput>
    /**
     * In case the PetMJC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetMJCUpdateInput, PetMJCUncheckedUpdateInput>
  }

  /**
   * PetMJC delete
   */
  export type PetMJCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
    /**
     * Filter which PetMJC to delete.
     */
    where: PetMJCWhereUniqueInput
  }

  /**
   * PetMJC deleteMany
   */
  export type PetMJCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetMJCS to delete
     */
    where?: PetMJCWhereInput
    /**
     * Limit how many PetMJCS to delete.
     */
    limit?: number
  }

  /**
   * PetMJC without action
   */
  export type PetMJCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMJC
     */
    select?: PetMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMJC
     */
    omit?: PetMJCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMJCInclude<ExtArgs> | null
  }


  /**
   * Model UserMJC
   */

  export type AggregateUserMJC = {
    _count: UserMJCCountAggregateOutputType | null
    _avg: UserMJCAvgAggregateOutputType | null
    _sum: UserMJCSumAggregateOutputType | null
    _min: UserMJCMinAggregateOutputType | null
    _max: UserMJCMaxAggregateOutputType | null
  }

  export type UserMJCAvgAggregateOutputType = {
    idUserMJC: number | null
  }

  export type UserMJCSumAggregateOutputType = {
    idUserMJC: number | null
  }

  export type UserMJCMinAggregateOutputType = {
    idUserMJC: number | null
    fullnameMJC: string | null
    email: string | null
    password: string | null
  }

  export type UserMJCMaxAggregateOutputType = {
    idUserMJC: number | null
    fullnameMJC: string | null
    email: string | null
    password: string | null
  }

  export type UserMJCCountAggregateOutputType = {
    idUserMJC: number
    fullnameMJC: number
    email: number
    password: number
    _all: number
  }


  export type UserMJCAvgAggregateInputType = {
    idUserMJC?: true
  }

  export type UserMJCSumAggregateInputType = {
    idUserMJC?: true
  }

  export type UserMJCMinAggregateInputType = {
    idUserMJC?: true
    fullnameMJC?: true
    email?: true
    password?: true
  }

  export type UserMJCMaxAggregateInputType = {
    idUserMJC?: true
    fullnameMJC?: true
    email?: true
    password?: true
  }

  export type UserMJCCountAggregateInputType = {
    idUserMJC?: true
    fullnameMJC?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserMJCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMJC to aggregate.
     */
    where?: UserMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMJCS to fetch.
     */
    orderBy?: UserMJCOrderByWithRelationInput | UserMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMJCS
    **/
    _count?: true | UserMJCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMJCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMJCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMJCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMJCMaxAggregateInputType
  }

  export type GetUserMJCAggregateType<T extends UserMJCAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMJC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMJC[P]>
      : GetScalarType<T[P], AggregateUserMJC[P]>
  }




  export type UserMJCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMJCWhereInput
    orderBy?: UserMJCOrderByWithAggregationInput | UserMJCOrderByWithAggregationInput[]
    by: UserMJCScalarFieldEnum[] | UserMJCScalarFieldEnum
    having?: UserMJCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMJCCountAggregateInputType | true
    _avg?: UserMJCAvgAggregateInputType
    _sum?: UserMJCSumAggregateInputType
    _min?: UserMJCMinAggregateInputType
    _max?: UserMJCMaxAggregateInputType
  }

  export type UserMJCGroupByOutputType = {
    idUserMJC: number
    fullnameMJC: string
    email: string
    password: string
    _count: UserMJCCountAggregateOutputType | null
    _avg: UserMJCAvgAggregateOutputType | null
    _sum: UserMJCSumAggregateOutputType | null
    _min: UserMJCMinAggregateOutputType | null
    _max: UserMJCMaxAggregateOutputType | null
  }

  type GetUserMJCGroupByPayload<T extends UserMJCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMJCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMJCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMJCGroupByOutputType[P]>
            : GetScalarType<T[P], UserMJCGroupByOutputType[P]>
        }
      >
    >


  export type UserMJCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUserMJC?: boolean
    fullnameMJC?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["userMJC"]>



  export type UserMJCSelectScalar = {
    idUserMJC?: boolean
    fullnameMJC?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserMJCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUserMJC" | "fullnameMJC" | "email" | "password", ExtArgs["result"]["userMJC"]>

  export type $UserMJCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMJC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idUserMJC: number
      fullnameMJC: string
      email: string
      password: string
    }, ExtArgs["result"]["userMJC"]>
    composites: {}
  }

  type UserMJCGetPayload<S extends boolean | null | undefined | UserMJCDefaultArgs> = $Result.GetResult<Prisma.$UserMJCPayload, S>

  type UserMJCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMJCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMJCCountAggregateInputType | true
    }

  export interface UserMJCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMJC'], meta: { name: 'UserMJC' } }
    /**
     * Find zero or one UserMJC that matches the filter.
     * @param {UserMJCFindUniqueArgs} args - Arguments to find a UserMJC
     * @example
     * // Get one UserMJC
     * const userMJC = await prisma.userMJC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMJCFindUniqueArgs>(args: SelectSubset<T, UserMJCFindUniqueArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMJC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMJCFindUniqueOrThrowArgs} args - Arguments to find a UserMJC
     * @example
     * // Get one UserMJC
     * const userMJC = await prisma.userMJC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMJCFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMJCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMJC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMJCFindFirstArgs} args - Arguments to find a UserMJC
     * @example
     * // Get one UserMJC
     * const userMJC = await prisma.userMJC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMJCFindFirstArgs>(args?: SelectSubset<T, UserMJCFindFirstArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMJC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMJCFindFirstOrThrowArgs} args - Arguments to find a UserMJC
     * @example
     * // Get one UserMJC
     * const userMJC = await prisma.userMJC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMJCFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMJCFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMJCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMJCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMJCS
     * const userMJCS = await prisma.userMJC.findMany()
     * 
     * // Get first 10 UserMJCS
     * const userMJCS = await prisma.userMJC.findMany({ take: 10 })
     * 
     * // Only select the `idUserMJC`
     * const userMJCWithIdUserMJCOnly = await prisma.userMJC.findMany({ select: { idUserMJC: true } })
     * 
     */
    findMany<T extends UserMJCFindManyArgs>(args?: SelectSubset<T, UserMJCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMJC.
     * @param {UserMJCCreateArgs} args - Arguments to create a UserMJC.
     * @example
     * // Create one UserMJC
     * const UserMJC = await prisma.userMJC.create({
     *   data: {
     *     // ... data to create a UserMJC
     *   }
     * })
     * 
     */
    create<T extends UserMJCCreateArgs>(args: SelectSubset<T, UserMJCCreateArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMJCS.
     * @param {UserMJCCreateManyArgs} args - Arguments to create many UserMJCS.
     * @example
     * // Create many UserMJCS
     * const userMJC = await prisma.userMJC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMJCCreateManyArgs>(args?: SelectSubset<T, UserMJCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserMJC.
     * @param {UserMJCDeleteArgs} args - Arguments to delete one UserMJC.
     * @example
     * // Delete one UserMJC
     * const UserMJC = await prisma.userMJC.delete({
     *   where: {
     *     // ... filter to delete one UserMJC
     *   }
     * })
     * 
     */
    delete<T extends UserMJCDeleteArgs>(args: SelectSubset<T, UserMJCDeleteArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMJC.
     * @param {UserMJCUpdateArgs} args - Arguments to update one UserMJC.
     * @example
     * // Update one UserMJC
     * const userMJC = await prisma.userMJC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMJCUpdateArgs>(args: SelectSubset<T, UserMJCUpdateArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMJCS.
     * @param {UserMJCDeleteManyArgs} args - Arguments to filter UserMJCS to delete.
     * @example
     * // Delete a few UserMJCS
     * const { count } = await prisma.userMJC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMJCDeleteManyArgs>(args?: SelectSubset<T, UserMJCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMJCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMJCS
     * const userMJC = await prisma.userMJC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMJCUpdateManyArgs>(args: SelectSubset<T, UserMJCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMJC.
     * @param {UserMJCUpsertArgs} args - Arguments to update or create a UserMJC.
     * @example
     * // Update or create a UserMJC
     * const userMJC = await prisma.userMJC.upsert({
     *   create: {
     *     // ... data to create a UserMJC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMJC we want to update
     *   }
     * })
     */
    upsert<T extends UserMJCUpsertArgs>(args: SelectSubset<T, UserMJCUpsertArgs<ExtArgs>>): Prisma__UserMJCClient<$Result.GetResult<Prisma.$UserMJCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMJCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMJCCountArgs} args - Arguments to filter UserMJCS to count.
     * @example
     * // Count the number of UserMJCS
     * const count = await prisma.userMJC.count({
     *   where: {
     *     // ... the filter for the UserMJCS we want to count
     *   }
     * })
    **/
    count<T extends UserMJCCountArgs>(
      args?: Subset<T, UserMJCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMJCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMJCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMJCAggregateArgs>(args: Subset<T, UserMJCAggregateArgs>): Prisma.PrismaPromise<GetUserMJCAggregateType<T>>

    /**
     * Group by UserMJC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMJCGroupByArgs} args - Group by arguments.
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
      T extends UserMJCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMJCGroupByArgs['orderBy'] }
        : { orderBy?: UserMJCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMJCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMJCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMJC model
   */
  readonly fields: UserMJCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMJC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMJCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserMJC model
   */
  interface UserMJCFieldRefs {
    readonly idUserMJC: FieldRef<"UserMJC", 'Int'>
    readonly fullnameMJC: FieldRef<"UserMJC", 'String'>
    readonly email: FieldRef<"UserMJC", 'String'>
    readonly password: FieldRef<"UserMJC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserMJC findUnique
   */
  export type UserMJCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * Filter, which UserMJC to fetch.
     */
    where: UserMJCWhereUniqueInput
  }

  /**
   * UserMJC findUniqueOrThrow
   */
  export type UserMJCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * Filter, which UserMJC to fetch.
     */
    where: UserMJCWhereUniqueInput
  }

  /**
   * UserMJC findFirst
   */
  export type UserMJCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * Filter, which UserMJC to fetch.
     */
    where?: UserMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMJCS to fetch.
     */
    orderBy?: UserMJCOrderByWithRelationInput | UserMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMJCS.
     */
    cursor?: UserMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMJCS.
     */
    distinct?: UserMJCScalarFieldEnum | UserMJCScalarFieldEnum[]
  }

  /**
   * UserMJC findFirstOrThrow
   */
  export type UserMJCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * Filter, which UserMJC to fetch.
     */
    where?: UserMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMJCS to fetch.
     */
    orderBy?: UserMJCOrderByWithRelationInput | UserMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMJCS.
     */
    cursor?: UserMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMJCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMJCS.
     */
    distinct?: UserMJCScalarFieldEnum | UserMJCScalarFieldEnum[]
  }

  /**
   * UserMJC findMany
   */
  export type UserMJCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * Filter, which UserMJCS to fetch.
     */
    where?: UserMJCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMJCS to fetch.
     */
    orderBy?: UserMJCOrderByWithRelationInput | UserMJCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMJCS.
     */
    cursor?: UserMJCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMJCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMJCS.
     */
    skip?: number
    distinct?: UserMJCScalarFieldEnum | UserMJCScalarFieldEnum[]
  }

  /**
   * UserMJC create
   */
  export type UserMJCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * The data needed to create a UserMJC.
     */
    data: XOR<UserMJCCreateInput, UserMJCUncheckedCreateInput>
  }

  /**
   * UserMJC createMany
   */
  export type UserMJCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMJCS.
     */
    data: UserMJCCreateManyInput | UserMJCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMJC update
   */
  export type UserMJCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * The data needed to update a UserMJC.
     */
    data: XOR<UserMJCUpdateInput, UserMJCUncheckedUpdateInput>
    /**
     * Choose, which UserMJC to update.
     */
    where: UserMJCWhereUniqueInput
  }

  /**
   * UserMJC updateMany
   */
  export type UserMJCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMJCS.
     */
    data: XOR<UserMJCUpdateManyMutationInput, UserMJCUncheckedUpdateManyInput>
    /**
     * Filter which UserMJCS to update
     */
    where?: UserMJCWhereInput
    /**
     * Limit how many UserMJCS to update.
     */
    limit?: number
  }

  /**
   * UserMJC upsert
   */
  export type UserMJCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * The filter to search for the UserMJC to update in case it exists.
     */
    where: UserMJCWhereUniqueInput
    /**
     * In case the UserMJC found by the `where` argument doesn't exist, create a new UserMJC with this data.
     */
    create: XOR<UserMJCCreateInput, UserMJCUncheckedCreateInput>
    /**
     * In case the UserMJC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMJCUpdateInput, UserMJCUncheckedUpdateInput>
  }

  /**
   * UserMJC delete
   */
  export type UserMJCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
    /**
     * Filter which UserMJC to delete.
     */
    where: UserMJCWhereUniqueInput
  }

  /**
   * UserMJC deleteMany
   */
  export type UserMJCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMJCS to delete
     */
    where?: UserMJCWhereInput
    /**
     * Limit how many UserMJCS to delete.
     */
    limit?: number
  }

  /**
   * UserMJC without action
   */
  export type UserMJCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMJC
     */
    select?: UserMJCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMJC
     */
    omit?: UserMJCOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RacesMJCScalarFieldEnum: {
    id_RacesMJC: 'id_RacesMJC',
    name_RacesMJC: 'name_RacesMJC'
  };

  export type RacesMJCScalarFieldEnum = (typeof RacesMJCScalarFieldEnum)[keyof typeof RacesMJCScalarFieldEnum]


  export const CategoriesMJCScalarFieldEnum: {
    id_CategoriesMJC: 'id_CategoriesMJC',
    name_CategoriesMJC: 'name_CategoriesMJC'
  };

  export type CategoriesMJCScalarFieldEnum = (typeof CategoriesMJCScalarFieldEnum)[keyof typeof CategoriesMJCScalarFieldEnum]


  export const GendersMJCScalarFieldEnum: {
    id_GendersMJC: 'id_GendersMJC',
    name_GendersMJC: 'name_GendersMJC'
  };

  export type GendersMJCScalarFieldEnum = (typeof GendersMJCScalarFieldEnum)[keyof typeof GendersMJCScalarFieldEnum]


  export const PetMJCScalarFieldEnum: {
    id_PetMJC: 'id_PetMJC',
    name_PetsMJC: 'name_PetsMJC',
    photoMJC: 'photoMJC',
    estadoMJC: 'estadoMJC',
    fk_RacesMJC: 'fk_RacesMJC',
    fk_CategoriesMJC: 'fk_CategoriesMJC',
    fk_GendersMJC: 'fk_GendersMJC'
  };

  export type PetMJCScalarFieldEnum = (typeof PetMJCScalarFieldEnum)[keyof typeof PetMJCScalarFieldEnum]


  export const UserMJCScalarFieldEnum: {
    idUserMJC: 'idUserMJC',
    fullnameMJC: 'fullnameMJC',
    email: 'email',
    password: 'password'
  };

  export type UserMJCScalarFieldEnum = (typeof UserMJCScalarFieldEnum)[keyof typeof UserMJCScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const RacesMJCOrderByRelevanceFieldEnum: {
    name_RacesMJC: 'name_RacesMJC'
  };

  export type RacesMJCOrderByRelevanceFieldEnum = (typeof RacesMJCOrderByRelevanceFieldEnum)[keyof typeof RacesMJCOrderByRelevanceFieldEnum]


  export const CategoriesMJCOrderByRelevanceFieldEnum: {
    name_CategoriesMJC: 'name_CategoriesMJC'
  };

  export type CategoriesMJCOrderByRelevanceFieldEnum = (typeof CategoriesMJCOrderByRelevanceFieldEnum)[keyof typeof CategoriesMJCOrderByRelevanceFieldEnum]


  export const GendersMJCOrderByRelevanceFieldEnum: {
    name_GendersMJC: 'name_GendersMJC'
  };

  export type GendersMJCOrderByRelevanceFieldEnum = (typeof GendersMJCOrderByRelevanceFieldEnum)[keyof typeof GendersMJCOrderByRelevanceFieldEnum]


  export const PetMJCOrderByRelevanceFieldEnum: {
    name_PetsMJC: 'name_PetsMJC',
    photoMJC: 'photoMJC'
  };

  export type PetMJCOrderByRelevanceFieldEnum = (typeof PetMJCOrderByRelevanceFieldEnum)[keyof typeof PetMJCOrderByRelevanceFieldEnum]


  export const UserMJCOrderByRelevanceFieldEnum: {
    fullnameMJC: 'fullnameMJC',
    email: 'email',
    password: 'password'
  };

  export type UserMJCOrderByRelevanceFieldEnum = (typeof UserMJCOrderByRelevanceFieldEnum)[keyof typeof UserMJCOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'EstadoMJC'
   */
  export type EnumEstadoMJCFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoMJC'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RacesMJCWhereInput = {
    AND?: RacesMJCWhereInput | RacesMJCWhereInput[]
    OR?: RacesMJCWhereInput[]
    NOT?: RacesMJCWhereInput | RacesMJCWhereInput[]
    id_RacesMJC?: IntFilter<"RacesMJC"> | number
    name_RacesMJC?: StringFilter<"RacesMJC"> | string
    petMJC?: PetMJCListRelationFilter
  }

  export type RacesMJCOrderByWithRelationInput = {
    id_RacesMJC?: SortOrder
    name_RacesMJC?: SortOrder
    petMJC?: PetMJCOrderByRelationAggregateInput
    _relevance?: RacesMJCOrderByRelevanceInput
  }

  export type RacesMJCWhereUniqueInput = Prisma.AtLeast<{
    id_RacesMJC?: number
    AND?: RacesMJCWhereInput | RacesMJCWhereInput[]
    OR?: RacesMJCWhereInput[]
    NOT?: RacesMJCWhereInput | RacesMJCWhereInput[]
    name_RacesMJC?: StringFilter<"RacesMJC"> | string
    petMJC?: PetMJCListRelationFilter
  }, "id_RacesMJC">

  export type RacesMJCOrderByWithAggregationInput = {
    id_RacesMJC?: SortOrder
    name_RacesMJC?: SortOrder
    _count?: RacesMJCCountOrderByAggregateInput
    _avg?: RacesMJCAvgOrderByAggregateInput
    _max?: RacesMJCMaxOrderByAggregateInput
    _min?: RacesMJCMinOrderByAggregateInput
    _sum?: RacesMJCSumOrderByAggregateInput
  }

  export type RacesMJCScalarWhereWithAggregatesInput = {
    AND?: RacesMJCScalarWhereWithAggregatesInput | RacesMJCScalarWhereWithAggregatesInput[]
    OR?: RacesMJCScalarWhereWithAggregatesInput[]
    NOT?: RacesMJCScalarWhereWithAggregatesInput | RacesMJCScalarWhereWithAggregatesInput[]
    id_RacesMJC?: IntWithAggregatesFilter<"RacesMJC"> | number
    name_RacesMJC?: StringWithAggregatesFilter<"RacesMJC"> | string
  }

  export type CategoriesMJCWhereInput = {
    AND?: CategoriesMJCWhereInput | CategoriesMJCWhereInput[]
    OR?: CategoriesMJCWhereInput[]
    NOT?: CategoriesMJCWhereInput | CategoriesMJCWhereInput[]
    id_CategoriesMJC?: IntFilter<"CategoriesMJC"> | number
    name_CategoriesMJC?: StringFilter<"CategoriesMJC"> | string
    petMJC?: PetMJCListRelationFilter
  }

  export type CategoriesMJCOrderByWithRelationInput = {
    id_CategoriesMJC?: SortOrder
    name_CategoriesMJC?: SortOrder
    petMJC?: PetMJCOrderByRelationAggregateInput
    _relevance?: CategoriesMJCOrderByRelevanceInput
  }

  export type CategoriesMJCWhereUniqueInput = Prisma.AtLeast<{
    id_CategoriesMJC?: number
    AND?: CategoriesMJCWhereInput | CategoriesMJCWhereInput[]
    OR?: CategoriesMJCWhereInput[]
    NOT?: CategoriesMJCWhereInput | CategoriesMJCWhereInput[]
    name_CategoriesMJC?: StringFilter<"CategoriesMJC"> | string
    petMJC?: PetMJCListRelationFilter
  }, "id_CategoriesMJC">

  export type CategoriesMJCOrderByWithAggregationInput = {
    id_CategoriesMJC?: SortOrder
    name_CategoriesMJC?: SortOrder
    _count?: CategoriesMJCCountOrderByAggregateInput
    _avg?: CategoriesMJCAvgOrderByAggregateInput
    _max?: CategoriesMJCMaxOrderByAggregateInput
    _min?: CategoriesMJCMinOrderByAggregateInput
    _sum?: CategoriesMJCSumOrderByAggregateInput
  }

  export type CategoriesMJCScalarWhereWithAggregatesInput = {
    AND?: CategoriesMJCScalarWhereWithAggregatesInput | CategoriesMJCScalarWhereWithAggregatesInput[]
    OR?: CategoriesMJCScalarWhereWithAggregatesInput[]
    NOT?: CategoriesMJCScalarWhereWithAggregatesInput | CategoriesMJCScalarWhereWithAggregatesInput[]
    id_CategoriesMJC?: IntWithAggregatesFilter<"CategoriesMJC"> | number
    name_CategoriesMJC?: StringWithAggregatesFilter<"CategoriesMJC"> | string
  }

  export type GendersMJCWhereInput = {
    AND?: GendersMJCWhereInput | GendersMJCWhereInput[]
    OR?: GendersMJCWhereInput[]
    NOT?: GendersMJCWhereInput | GendersMJCWhereInput[]
    id_GendersMJC?: IntFilter<"GendersMJC"> | number
    name_GendersMJC?: StringFilter<"GendersMJC"> | string
    petMJC?: PetMJCListRelationFilter
  }

  export type GendersMJCOrderByWithRelationInput = {
    id_GendersMJC?: SortOrder
    name_GendersMJC?: SortOrder
    petMJC?: PetMJCOrderByRelationAggregateInput
    _relevance?: GendersMJCOrderByRelevanceInput
  }

  export type GendersMJCWhereUniqueInput = Prisma.AtLeast<{
    id_GendersMJC?: number
    AND?: GendersMJCWhereInput | GendersMJCWhereInput[]
    OR?: GendersMJCWhereInput[]
    NOT?: GendersMJCWhereInput | GendersMJCWhereInput[]
    name_GendersMJC?: StringFilter<"GendersMJC"> | string
    petMJC?: PetMJCListRelationFilter
  }, "id_GendersMJC">

  export type GendersMJCOrderByWithAggregationInput = {
    id_GendersMJC?: SortOrder
    name_GendersMJC?: SortOrder
    _count?: GendersMJCCountOrderByAggregateInput
    _avg?: GendersMJCAvgOrderByAggregateInput
    _max?: GendersMJCMaxOrderByAggregateInput
    _min?: GendersMJCMinOrderByAggregateInput
    _sum?: GendersMJCSumOrderByAggregateInput
  }

  export type GendersMJCScalarWhereWithAggregatesInput = {
    AND?: GendersMJCScalarWhereWithAggregatesInput | GendersMJCScalarWhereWithAggregatesInput[]
    OR?: GendersMJCScalarWhereWithAggregatesInput[]
    NOT?: GendersMJCScalarWhereWithAggregatesInput | GendersMJCScalarWhereWithAggregatesInput[]
    id_GendersMJC?: IntWithAggregatesFilter<"GendersMJC"> | number
    name_GendersMJC?: StringWithAggregatesFilter<"GendersMJC"> | string
  }

  export type PetMJCWhereInput = {
    AND?: PetMJCWhereInput | PetMJCWhereInput[]
    OR?: PetMJCWhereInput[]
    NOT?: PetMJCWhereInput | PetMJCWhereInput[]
    id_PetMJC?: IntFilter<"PetMJC"> | number
    name_PetsMJC?: StringFilter<"PetMJC"> | string
    photoMJC?: StringFilter<"PetMJC"> | string
    estadoMJC?: EnumEstadoMJCFilter<"PetMJC"> | $Enums.EstadoMJC
    fk_RacesMJC?: IntFilter<"PetMJC"> | number
    fk_CategoriesMJC?: IntFilter<"PetMJC"> | number
    fk_GendersMJC?: IntFilter<"PetMJC"> | number
    races?: XOR<RacesMJCScalarRelationFilter, RacesMJCWhereInput>
    categories?: XOR<CategoriesMJCScalarRelationFilter, CategoriesMJCWhereInput>
    Genders?: XOR<GendersMJCScalarRelationFilter, GendersMJCWhereInput>
  }

  export type PetMJCOrderByWithRelationInput = {
    id_PetMJC?: SortOrder
    name_PetsMJC?: SortOrder
    photoMJC?: SortOrder
    estadoMJC?: SortOrder
    fk_RacesMJC?: SortOrder
    fk_CategoriesMJC?: SortOrder
    fk_GendersMJC?: SortOrder
    races?: RacesMJCOrderByWithRelationInput
    categories?: CategoriesMJCOrderByWithRelationInput
    Genders?: GendersMJCOrderByWithRelationInput
    _relevance?: PetMJCOrderByRelevanceInput
  }

  export type PetMJCWhereUniqueInput = Prisma.AtLeast<{
    id_PetMJC?: number
    AND?: PetMJCWhereInput | PetMJCWhereInput[]
    OR?: PetMJCWhereInput[]
    NOT?: PetMJCWhereInput | PetMJCWhereInput[]
    name_PetsMJC?: StringFilter<"PetMJC"> | string
    photoMJC?: StringFilter<"PetMJC"> | string
    estadoMJC?: EnumEstadoMJCFilter<"PetMJC"> | $Enums.EstadoMJC
    fk_RacesMJC?: IntFilter<"PetMJC"> | number
    fk_CategoriesMJC?: IntFilter<"PetMJC"> | number
    fk_GendersMJC?: IntFilter<"PetMJC"> | number
    races?: XOR<RacesMJCScalarRelationFilter, RacesMJCWhereInput>
    categories?: XOR<CategoriesMJCScalarRelationFilter, CategoriesMJCWhereInput>
    Genders?: XOR<GendersMJCScalarRelationFilter, GendersMJCWhereInput>
  }, "id_PetMJC">

  export type PetMJCOrderByWithAggregationInput = {
    id_PetMJC?: SortOrder
    name_PetsMJC?: SortOrder
    photoMJC?: SortOrder
    estadoMJC?: SortOrder
    fk_RacesMJC?: SortOrder
    fk_CategoriesMJC?: SortOrder
    fk_GendersMJC?: SortOrder
    _count?: PetMJCCountOrderByAggregateInput
    _avg?: PetMJCAvgOrderByAggregateInput
    _max?: PetMJCMaxOrderByAggregateInput
    _min?: PetMJCMinOrderByAggregateInput
    _sum?: PetMJCSumOrderByAggregateInput
  }

  export type PetMJCScalarWhereWithAggregatesInput = {
    AND?: PetMJCScalarWhereWithAggregatesInput | PetMJCScalarWhereWithAggregatesInput[]
    OR?: PetMJCScalarWhereWithAggregatesInput[]
    NOT?: PetMJCScalarWhereWithAggregatesInput | PetMJCScalarWhereWithAggregatesInput[]
    id_PetMJC?: IntWithAggregatesFilter<"PetMJC"> | number
    name_PetsMJC?: StringWithAggregatesFilter<"PetMJC"> | string
    photoMJC?: StringWithAggregatesFilter<"PetMJC"> | string
    estadoMJC?: EnumEstadoMJCWithAggregatesFilter<"PetMJC"> | $Enums.EstadoMJC
    fk_RacesMJC?: IntWithAggregatesFilter<"PetMJC"> | number
    fk_CategoriesMJC?: IntWithAggregatesFilter<"PetMJC"> | number
    fk_GendersMJC?: IntWithAggregatesFilter<"PetMJC"> | number
  }

  export type UserMJCWhereInput = {
    AND?: UserMJCWhereInput | UserMJCWhereInput[]
    OR?: UserMJCWhereInput[]
    NOT?: UserMJCWhereInput | UserMJCWhereInput[]
    idUserMJC?: IntFilter<"UserMJC"> | number
    fullnameMJC?: StringFilter<"UserMJC"> | string
    email?: StringFilter<"UserMJC"> | string
    password?: StringFilter<"UserMJC"> | string
  }

  export type UserMJCOrderByWithRelationInput = {
    idUserMJC?: SortOrder
    fullnameMJC?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _relevance?: UserMJCOrderByRelevanceInput
  }

  export type UserMJCWhereUniqueInput = Prisma.AtLeast<{
    idUserMJC?: number
    AND?: UserMJCWhereInput | UserMJCWhereInput[]
    OR?: UserMJCWhereInput[]
    NOT?: UserMJCWhereInput | UserMJCWhereInput[]
    fullnameMJC?: StringFilter<"UserMJC"> | string
    email?: StringFilter<"UserMJC"> | string
    password?: StringFilter<"UserMJC"> | string
  }, "idUserMJC">

  export type UserMJCOrderByWithAggregationInput = {
    idUserMJC?: SortOrder
    fullnameMJC?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserMJCCountOrderByAggregateInput
    _avg?: UserMJCAvgOrderByAggregateInput
    _max?: UserMJCMaxOrderByAggregateInput
    _min?: UserMJCMinOrderByAggregateInput
    _sum?: UserMJCSumOrderByAggregateInput
  }

  export type UserMJCScalarWhereWithAggregatesInput = {
    AND?: UserMJCScalarWhereWithAggregatesInput | UserMJCScalarWhereWithAggregatesInput[]
    OR?: UserMJCScalarWhereWithAggregatesInput[]
    NOT?: UserMJCScalarWhereWithAggregatesInput | UserMJCScalarWhereWithAggregatesInput[]
    idUserMJC?: IntWithAggregatesFilter<"UserMJC"> | number
    fullnameMJC?: StringWithAggregatesFilter<"UserMJC"> | string
    email?: StringWithAggregatesFilter<"UserMJC"> | string
    password?: StringWithAggregatesFilter<"UserMJC"> | string
  }

  export type RacesMJCCreateInput = {
    name_RacesMJC: string
    petMJC?: PetMJCCreateNestedManyWithoutRacesInput
  }

  export type RacesMJCUncheckedCreateInput = {
    id_RacesMJC?: number
    name_RacesMJC: string
    petMJC?: PetMJCUncheckedCreateNestedManyWithoutRacesInput
  }

  export type RacesMJCUpdateInput = {
    name_RacesMJC?: StringFieldUpdateOperationsInput | string
    petMJC?: PetMJCUpdateManyWithoutRacesNestedInput
  }

  export type RacesMJCUncheckedUpdateInput = {
    id_RacesMJC?: IntFieldUpdateOperationsInput | number
    name_RacesMJC?: StringFieldUpdateOperationsInput | string
    petMJC?: PetMJCUncheckedUpdateManyWithoutRacesNestedInput
  }

  export type RacesMJCCreateManyInput = {
    id_RacesMJC?: number
    name_RacesMJC: string
  }

  export type RacesMJCUpdateManyMutationInput = {
    name_RacesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type RacesMJCUncheckedUpdateManyInput = {
    id_RacesMJC?: IntFieldUpdateOperationsInput | number
    name_RacesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesMJCCreateInput = {
    name_CategoriesMJC: string
    petMJC?: PetMJCCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesMJCUncheckedCreateInput = {
    id_CategoriesMJC?: number
    name_CategoriesMJC: string
    petMJC?: PetMJCUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesMJCUpdateInput = {
    name_CategoriesMJC?: StringFieldUpdateOperationsInput | string
    petMJC?: PetMJCUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesMJCUncheckedUpdateInput = {
    id_CategoriesMJC?: IntFieldUpdateOperationsInput | number
    name_CategoriesMJC?: StringFieldUpdateOperationsInput | string
    petMJC?: PetMJCUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesMJCCreateManyInput = {
    id_CategoriesMJC?: number
    name_CategoriesMJC: string
  }

  export type CategoriesMJCUpdateManyMutationInput = {
    name_CategoriesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesMJCUncheckedUpdateManyInput = {
    id_CategoriesMJC?: IntFieldUpdateOperationsInput | number
    name_CategoriesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type GendersMJCCreateInput = {
    name_GendersMJC: string
    petMJC?: PetMJCCreateNestedManyWithoutGendersInput
  }

  export type GendersMJCUncheckedCreateInput = {
    id_GendersMJC?: number
    name_GendersMJC: string
    petMJC?: PetMJCUncheckedCreateNestedManyWithoutGendersInput
  }

  export type GendersMJCUpdateInput = {
    name_GendersMJC?: StringFieldUpdateOperationsInput | string
    petMJC?: PetMJCUpdateManyWithoutGendersNestedInput
  }

  export type GendersMJCUncheckedUpdateInput = {
    id_GendersMJC?: IntFieldUpdateOperationsInput | number
    name_GendersMJC?: StringFieldUpdateOperationsInput | string
    petMJC?: PetMJCUncheckedUpdateManyWithoutGendersNestedInput
  }

  export type GendersMJCCreateManyInput = {
    id_GendersMJC?: number
    name_GendersMJC: string
  }

  export type GendersMJCUpdateManyMutationInput = {
    name_GendersMJC?: StringFieldUpdateOperationsInput | string
  }

  export type GendersMJCUncheckedUpdateManyInput = {
    id_GendersMJC?: IntFieldUpdateOperationsInput | number
    name_GendersMJC?: StringFieldUpdateOperationsInput | string
  }

  export type PetMJCCreateInput = {
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    races: RacesMJCCreateNestedOneWithoutPetMJCInput
    categories: CategoriesMJCCreateNestedOneWithoutPetMJCInput
    Genders: GendersMJCCreateNestedOneWithoutPetMJCInput
  }

  export type PetMJCUncheckedCreateInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_RacesMJC: number
    fk_CategoriesMJC: number
    fk_GendersMJC: number
  }

  export type PetMJCUpdateInput = {
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    races?: RacesMJCUpdateOneRequiredWithoutPetMJCNestedInput
    categories?: CategoriesMJCUpdateOneRequiredWithoutPetMJCNestedInput
    Genders?: GendersMJCUpdateOneRequiredWithoutPetMJCNestedInput
  }

  export type PetMJCUncheckedUpdateInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_RacesMJC?: IntFieldUpdateOperationsInput | number
    fk_CategoriesMJC?: IntFieldUpdateOperationsInput | number
    fk_GendersMJC?: IntFieldUpdateOperationsInput | number
  }

  export type PetMJCCreateManyInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_RacesMJC: number
    fk_CategoriesMJC: number
    fk_GendersMJC: number
  }

  export type PetMJCUpdateManyMutationInput = {
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
  }

  export type PetMJCUncheckedUpdateManyInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_RacesMJC?: IntFieldUpdateOperationsInput | number
    fk_CategoriesMJC?: IntFieldUpdateOperationsInput | number
    fk_GendersMJC?: IntFieldUpdateOperationsInput | number
  }

  export type UserMJCCreateInput = {
    fullnameMJC: string
    email: string
    password: string
  }

  export type UserMJCUncheckedCreateInput = {
    idUserMJC?: number
    fullnameMJC: string
    email: string
    password: string
  }

  export type UserMJCUpdateInput = {
    fullnameMJC?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserMJCUncheckedUpdateInput = {
    idUserMJC?: IntFieldUpdateOperationsInput | number
    fullnameMJC?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserMJCCreateManyInput = {
    idUserMJC?: number
    fullnameMJC: string
    email: string
    password: string
  }

  export type UserMJCUpdateManyMutationInput = {
    fullnameMJC?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserMJCUncheckedUpdateManyInput = {
    idUserMJC?: IntFieldUpdateOperationsInput | number
    fullnameMJC?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PetMJCListRelationFilter = {
    every?: PetMJCWhereInput
    some?: PetMJCWhereInput
    none?: PetMJCWhereInput
  }

  export type PetMJCOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RacesMJCOrderByRelevanceInput = {
    fields: RacesMJCOrderByRelevanceFieldEnum | RacesMJCOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RacesMJCCountOrderByAggregateInput = {
    id_RacesMJC?: SortOrder
    name_RacesMJC?: SortOrder
  }

  export type RacesMJCAvgOrderByAggregateInput = {
    id_RacesMJC?: SortOrder
  }

  export type RacesMJCMaxOrderByAggregateInput = {
    id_RacesMJC?: SortOrder
    name_RacesMJC?: SortOrder
  }

  export type RacesMJCMinOrderByAggregateInput = {
    id_RacesMJC?: SortOrder
    name_RacesMJC?: SortOrder
  }

  export type RacesMJCSumOrderByAggregateInput = {
    id_RacesMJC?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CategoriesMJCOrderByRelevanceInput = {
    fields: CategoriesMJCOrderByRelevanceFieldEnum | CategoriesMJCOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesMJCCountOrderByAggregateInput = {
    id_CategoriesMJC?: SortOrder
    name_CategoriesMJC?: SortOrder
  }

  export type CategoriesMJCAvgOrderByAggregateInput = {
    id_CategoriesMJC?: SortOrder
  }

  export type CategoriesMJCMaxOrderByAggregateInput = {
    id_CategoriesMJC?: SortOrder
    name_CategoriesMJC?: SortOrder
  }

  export type CategoriesMJCMinOrderByAggregateInput = {
    id_CategoriesMJC?: SortOrder
    name_CategoriesMJC?: SortOrder
  }

  export type CategoriesMJCSumOrderByAggregateInput = {
    id_CategoriesMJC?: SortOrder
  }

  export type GendersMJCOrderByRelevanceInput = {
    fields: GendersMJCOrderByRelevanceFieldEnum | GendersMJCOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GendersMJCCountOrderByAggregateInput = {
    id_GendersMJC?: SortOrder
    name_GendersMJC?: SortOrder
  }

  export type GendersMJCAvgOrderByAggregateInput = {
    id_GendersMJC?: SortOrder
  }

  export type GendersMJCMaxOrderByAggregateInput = {
    id_GendersMJC?: SortOrder
    name_GendersMJC?: SortOrder
  }

  export type GendersMJCMinOrderByAggregateInput = {
    id_GendersMJC?: SortOrder
    name_GendersMJC?: SortOrder
  }

  export type GendersMJCSumOrderByAggregateInput = {
    id_GendersMJC?: SortOrder
  }

  export type EnumEstadoMJCFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMJC | EnumEstadoMJCFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMJC[]
    notIn?: $Enums.EstadoMJC[]
    not?: NestedEnumEstadoMJCFilter<$PrismaModel> | $Enums.EstadoMJC
  }

  export type RacesMJCScalarRelationFilter = {
    is?: RacesMJCWhereInput
    isNot?: RacesMJCWhereInput
  }

  export type CategoriesMJCScalarRelationFilter = {
    is?: CategoriesMJCWhereInput
    isNot?: CategoriesMJCWhereInput
  }

  export type GendersMJCScalarRelationFilter = {
    is?: GendersMJCWhereInput
    isNot?: GendersMJCWhereInput
  }

  export type PetMJCOrderByRelevanceInput = {
    fields: PetMJCOrderByRelevanceFieldEnum | PetMJCOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PetMJCCountOrderByAggregateInput = {
    id_PetMJC?: SortOrder
    name_PetsMJC?: SortOrder
    photoMJC?: SortOrder
    estadoMJC?: SortOrder
    fk_RacesMJC?: SortOrder
    fk_CategoriesMJC?: SortOrder
    fk_GendersMJC?: SortOrder
  }

  export type PetMJCAvgOrderByAggregateInput = {
    id_PetMJC?: SortOrder
    fk_RacesMJC?: SortOrder
    fk_CategoriesMJC?: SortOrder
    fk_GendersMJC?: SortOrder
  }

  export type PetMJCMaxOrderByAggregateInput = {
    id_PetMJC?: SortOrder
    name_PetsMJC?: SortOrder
    photoMJC?: SortOrder
    estadoMJC?: SortOrder
    fk_RacesMJC?: SortOrder
    fk_CategoriesMJC?: SortOrder
    fk_GendersMJC?: SortOrder
  }

  export type PetMJCMinOrderByAggregateInput = {
    id_PetMJC?: SortOrder
    name_PetsMJC?: SortOrder
    photoMJC?: SortOrder
    estadoMJC?: SortOrder
    fk_RacesMJC?: SortOrder
    fk_CategoriesMJC?: SortOrder
    fk_GendersMJC?: SortOrder
  }

  export type PetMJCSumOrderByAggregateInput = {
    id_PetMJC?: SortOrder
    fk_RacesMJC?: SortOrder
    fk_CategoriesMJC?: SortOrder
    fk_GendersMJC?: SortOrder
  }

  export type EnumEstadoMJCWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMJC | EnumEstadoMJCFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMJC[]
    notIn?: $Enums.EstadoMJC[]
    not?: NestedEnumEstadoMJCWithAggregatesFilter<$PrismaModel> | $Enums.EstadoMJC
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoMJCFilter<$PrismaModel>
    _max?: NestedEnumEstadoMJCFilter<$PrismaModel>
  }

  export type UserMJCOrderByRelevanceInput = {
    fields: UserMJCOrderByRelevanceFieldEnum | UserMJCOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserMJCCountOrderByAggregateInput = {
    idUserMJC?: SortOrder
    fullnameMJC?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMJCAvgOrderByAggregateInput = {
    idUserMJC?: SortOrder
  }

  export type UserMJCMaxOrderByAggregateInput = {
    idUserMJC?: SortOrder
    fullnameMJC?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMJCMinOrderByAggregateInput = {
    idUserMJC?: SortOrder
    fullnameMJC?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMJCSumOrderByAggregateInput = {
    idUserMJC?: SortOrder
  }

  export type PetMJCCreateNestedManyWithoutRacesInput = {
    create?: XOR<PetMJCCreateWithoutRacesInput, PetMJCUncheckedCreateWithoutRacesInput> | PetMJCCreateWithoutRacesInput[] | PetMJCUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutRacesInput | PetMJCCreateOrConnectWithoutRacesInput[]
    createMany?: PetMJCCreateManyRacesInputEnvelope
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
  }

  export type PetMJCUncheckedCreateNestedManyWithoutRacesInput = {
    create?: XOR<PetMJCCreateWithoutRacesInput, PetMJCUncheckedCreateWithoutRacesInput> | PetMJCCreateWithoutRacesInput[] | PetMJCUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutRacesInput | PetMJCCreateOrConnectWithoutRacesInput[]
    createMany?: PetMJCCreateManyRacesInputEnvelope
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PetMJCUpdateManyWithoutRacesNestedInput = {
    create?: XOR<PetMJCCreateWithoutRacesInput, PetMJCUncheckedCreateWithoutRacesInput> | PetMJCCreateWithoutRacesInput[] | PetMJCUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutRacesInput | PetMJCCreateOrConnectWithoutRacesInput[]
    upsert?: PetMJCUpsertWithWhereUniqueWithoutRacesInput | PetMJCUpsertWithWhereUniqueWithoutRacesInput[]
    createMany?: PetMJCCreateManyRacesInputEnvelope
    set?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    disconnect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    delete?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    update?: PetMJCUpdateWithWhereUniqueWithoutRacesInput | PetMJCUpdateWithWhereUniqueWithoutRacesInput[]
    updateMany?: PetMJCUpdateManyWithWhereWithoutRacesInput | PetMJCUpdateManyWithWhereWithoutRacesInput[]
    deleteMany?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetMJCUncheckedUpdateManyWithoutRacesNestedInput = {
    create?: XOR<PetMJCCreateWithoutRacesInput, PetMJCUncheckedCreateWithoutRacesInput> | PetMJCCreateWithoutRacesInput[] | PetMJCUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutRacesInput | PetMJCCreateOrConnectWithoutRacesInput[]
    upsert?: PetMJCUpsertWithWhereUniqueWithoutRacesInput | PetMJCUpsertWithWhereUniqueWithoutRacesInput[]
    createMany?: PetMJCCreateManyRacesInputEnvelope
    set?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    disconnect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    delete?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    update?: PetMJCUpdateWithWhereUniqueWithoutRacesInput | PetMJCUpdateWithWhereUniqueWithoutRacesInput[]
    updateMany?: PetMJCUpdateManyWithWhereWithoutRacesInput | PetMJCUpdateManyWithWhereWithoutRacesInput[]
    deleteMany?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
  }

  export type PetMJCCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PetMJCCreateWithoutCategoriesInput, PetMJCUncheckedCreateWithoutCategoriesInput> | PetMJCCreateWithoutCategoriesInput[] | PetMJCUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutCategoriesInput | PetMJCCreateOrConnectWithoutCategoriesInput[]
    createMany?: PetMJCCreateManyCategoriesInputEnvelope
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
  }

  export type PetMJCUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PetMJCCreateWithoutCategoriesInput, PetMJCUncheckedCreateWithoutCategoriesInput> | PetMJCCreateWithoutCategoriesInput[] | PetMJCUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutCategoriesInput | PetMJCCreateOrConnectWithoutCategoriesInput[]
    createMany?: PetMJCCreateManyCategoriesInputEnvelope
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
  }

  export type PetMJCUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PetMJCCreateWithoutCategoriesInput, PetMJCUncheckedCreateWithoutCategoriesInput> | PetMJCCreateWithoutCategoriesInput[] | PetMJCUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutCategoriesInput | PetMJCCreateOrConnectWithoutCategoriesInput[]
    upsert?: PetMJCUpsertWithWhereUniqueWithoutCategoriesInput | PetMJCUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: PetMJCCreateManyCategoriesInputEnvelope
    set?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    disconnect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    delete?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    update?: PetMJCUpdateWithWhereUniqueWithoutCategoriesInput | PetMJCUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PetMJCUpdateManyWithWhereWithoutCategoriesInput | PetMJCUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
  }

  export type PetMJCUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PetMJCCreateWithoutCategoriesInput, PetMJCUncheckedCreateWithoutCategoriesInput> | PetMJCCreateWithoutCategoriesInput[] | PetMJCUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutCategoriesInput | PetMJCCreateOrConnectWithoutCategoriesInput[]
    upsert?: PetMJCUpsertWithWhereUniqueWithoutCategoriesInput | PetMJCUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: PetMJCCreateManyCategoriesInputEnvelope
    set?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    disconnect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    delete?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    update?: PetMJCUpdateWithWhereUniqueWithoutCategoriesInput | PetMJCUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PetMJCUpdateManyWithWhereWithoutCategoriesInput | PetMJCUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
  }

  export type PetMJCCreateNestedManyWithoutGendersInput = {
    create?: XOR<PetMJCCreateWithoutGendersInput, PetMJCUncheckedCreateWithoutGendersInput> | PetMJCCreateWithoutGendersInput[] | PetMJCUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutGendersInput | PetMJCCreateOrConnectWithoutGendersInput[]
    createMany?: PetMJCCreateManyGendersInputEnvelope
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
  }

  export type PetMJCUncheckedCreateNestedManyWithoutGendersInput = {
    create?: XOR<PetMJCCreateWithoutGendersInput, PetMJCUncheckedCreateWithoutGendersInput> | PetMJCCreateWithoutGendersInput[] | PetMJCUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutGendersInput | PetMJCCreateOrConnectWithoutGendersInput[]
    createMany?: PetMJCCreateManyGendersInputEnvelope
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
  }

  export type PetMJCUpdateManyWithoutGendersNestedInput = {
    create?: XOR<PetMJCCreateWithoutGendersInput, PetMJCUncheckedCreateWithoutGendersInput> | PetMJCCreateWithoutGendersInput[] | PetMJCUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutGendersInput | PetMJCCreateOrConnectWithoutGendersInput[]
    upsert?: PetMJCUpsertWithWhereUniqueWithoutGendersInput | PetMJCUpsertWithWhereUniqueWithoutGendersInput[]
    createMany?: PetMJCCreateManyGendersInputEnvelope
    set?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    disconnect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    delete?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    update?: PetMJCUpdateWithWhereUniqueWithoutGendersInput | PetMJCUpdateWithWhereUniqueWithoutGendersInput[]
    updateMany?: PetMJCUpdateManyWithWhereWithoutGendersInput | PetMJCUpdateManyWithWhereWithoutGendersInput[]
    deleteMany?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
  }

  export type PetMJCUncheckedUpdateManyWithoutGendersNestedInput = {
    create?: XOR<PetMJCCreateWithoutGendersInput, PetMJCUncheckedCreateWithoutGendersInput> | PetMJCCreateWithoutGendersInput[] | PetMJCUncheckedCreateWithoutGendersInput[]
    connectOrCreate?: PetMJCCreateOrConnectWithoutGendersInput | PetMJCCreateOrConnectWithoutGendersInput[]
    upsert?: PetMJCUpsertWithWhereUniqueWithoutGendersInput | PetMJCUpsertWithWhereUniqueWithoutGendersInput[]
    createMany?: PetMJCCreateManyGendersInputEnvelope
    set?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    disconnect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    delete?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    connect?: PetMJCWhereUniqueInput | PetMJCWhereUniqueInput[]
    update?: PetMJCUpdateWithWhereUniqueWithoutGendersInput | PetMJCUpdateWithWhereUniqueWithoutGendersInput[]
    updateMany?: PetMJCUpdateManyWithWhereWithoutGendersInput | PetMJCUpdateManyWithWhereWithoutGendersInput[]
    deleteMany?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
  }

  export type RacesMJCCreateNestedOneWithoutPetMJCInput = {
    create?: XOR<RacesMJCCreateWithoutPetMJCInput, RacesMJCUncheckedCreateWithoutPetMJCInput>
    connectOrCreate?: RacesMJCCreateOrConnectWithoutPetMJCInput
    connect?: RacesMJCWhereUniqueInput
  }

  export type CategoriesMJCCreateNestedOneWithoutPetMJCInput = {
    create?: XOR<CategoriesMJCCreateWithoutPetMJCInput, CategoriesMJCUncheckedCreateWithoutPetMJCInput>
    connectOrCreate?: CategoriesMJCCreateOrConnectWithoutPetMJCInput
    connect?: CategoriesMJCWhereUniqueInput
  }

  export type GendersMJCCreateNestedOneWithoutPetMJCInput = {
    create?: XOR<GendersMJCCreateWithoutPetMJCInput, GendersMJCUncheckedCreateWithoutPetMJCInput>
    connectOrCreate?: GendersMJCCreateOrConnectWithoutPetMJCInput
    connect?: GendersMJCWhereUniqueInput
  }

  export type EnumEstadoMJCFieldUpdateOperationsInput = {
    set?: $Enums.EstadoMJC
  }

  export type RacesMJCUpdateOneRequiredWithoutPetMJCNestedInput = {
    create?: XOR<RacesMJCCreateWithoutPetMJCInput, RacesMJCUncheckedCreateWithoutPetMJCInput>
    connectOrCreate?: RacesMJCCreateOrConnectWithoutPetMJCInput
    upsert?: RacesMJCUpsertWithoutPetMJCInput
    connect?: RacesMJCWhereUniqueInput
    update?: XOR<XOR<RacesMJCUpdateToOneWithWhereWithoutPetMJCInput, RacesMJCUpdateWithoutPetMJCInput>, RacesMJCUncheckedUpdateWithoutPetMJCInput>
  }

  export type CategoriesMJCUpdateOneRequiredWithoutPetMJCNestedInput = {
    create?: XOR<CategoriesMJCCreateWithoutPetMJCInput, CategoriesMJCUncheckedCreateWithoutPetMJCInput>
    connectOrCreate?: CategoriesMJCCreateOrConnectWithoutPetMJCInput
    upsert?: CategoriesMJCUpsertWithoutPetMJCInput
    connect?: CategoriesMJCWhereUniqueInput
    update?: XOR<XOR<CategoriesMJCUpdateToOneWithWhereWithoutPetMJCInput, CategoriesMJCUpdateWithoutPetMJCInput>, CategoriesMJCUncheckedUpdateWithoutPetMJCInput>
  }

  export type GendersMJCUpdateOneRequiredWithoutPetMJCNestedInput = {
    create?: XOR<GendersMJCCreateWithoutPetMJCInput, GendersMJCUncheckedCreateWithoutPetMJCInput>
    connectOrCreate?: GendersMJCCreateOrConnectWithoutPetMJCInput
    upsert?: GendersMJCUpsertWithoutPetMJCInput
    connect?: GendersMJCWhereUniqueInput
    update?: XOR<XOR<GendersMJCUpdateToOneWithWhereWithoutPetMJCInput, GendersMJCUpdateWithoutPetMJCInput>, GendersMJCUncheckedUpdateWithoutPetMJCInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumEstadoMJCFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMJC | EnumEstadoMJCFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMJC[]
    notIn?: $Enums.EstadoMJC[]
    not?: NestedEnumEstadoMJCFilter<$PrismaModel> | $Enums.EstadoMJC
  }

  export type NestedEnumEstadoMJCWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMJC | EnumEstadoMJCFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMJC[]
    notIn?: $Enums.EstadoMJC[]
    not?: NestedEnumEstadoMJCWithAggregatesFilter<$PrismaModel> | $Enums.EstadoMJC
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoMJCFilter<$PrismaModel>
    _max?: NestedEnumEstadoMJCFilter<$PrismaModel>
  }

  export type PetMJCCreateWithoutRacesInput = {
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    categories: CategoriesMJCCreateNestedOneWithoutPetMJCInput
    Genders: GendersMJCCreateNestedOneWithoutPetMJCInput
  }

  export type PetMJCUncheckedCreateWithoutRacesInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_CategoriesMJC: number
    fk_GendersMJC: number
  }

  export type PetMJCCreateOrConnectWithoutRacesInput = {
    where: PetMJCWhereUniqueInput
    create: XOR<PetMJCCreateWithoutRacesInput, PetMJCUncheckedCreateWithoutRacesInput>
  }

  export type PetMJCCreateManyRacesInputEnvelope = {
    data: PetMJCCreateManyRacesInput | PetMJCCreateManyRacesInput[]
    skipDuplicates?: boolean
  }

  export type PetMJCUpsertWithWhereUniqueWithoutRacesInput = {
    where: PetMJCWhereUniqueInput
    update: XOR<PetMJCUpdateWithoutRacesInput, PetMJCUncheckedUpdateWithoutRacesInput>
    create: XOR<PetMJCCreateWithoutRacesInput, PetMJCUncheckedCreateWithoutRacesInput>
  }

  export type PetMJCUpdateWithWhereUniqueWithoutRacesInput = {
    where: PetMJCWhereUniqueInput
    data: XOR<PetMJCUpdateWithoutRacesInput, PetMJCUncheckedUpdateWithoutRacesInput>
  }

  export type PetMJCUpdateManyWithWhereWithoutRacesInput = {
    where: PetMJCScalarWhereInput
    data: XOR<PetMJCUpdateManyMutationInput, PetMJCUncheckedUpdateManyWithoutRacesInput>
  }

  export type PetMJCScalarWhereInput = {
    AND?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
    OR?: PetMJCScalarWhereInput[]
    NOT?: PetMJCScalarWhereInput | PetMJCScalarWhereInput[]
    id_PetMJC?: IntFilter<"PetMJC"> | number
    name_PetsMJC?: StringFilter<"PetMJC"> | string
    photoMJC?: StringFilter<"PetMJC"> | string
    estadoMJC?: EnumEstadoMJCFilter<"PetMJC"> | $Enums.EstadoMJC
    fk_RacesMJC?: IntFilter<"PetMJC"> | number
    fk_CategoriesMJC?: IntFilter<"PetMJC"> | number
    fk_GendersMJC?: IntFilter<"PetMJC"> | number
  }

  export type PetMJCCreateWithoutCategoriesInput = {
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    races: RacesMJCCreateNestedOneWithoutPetMJCInput
    Genders: GendersMJCCreateNestedOneWithoutPetMJCInput
  }

  export type PetMJCUncheckedCreateWithoutCategoriesInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_RacesMJC: number
    fk_GendersMJC: number
  }

  export type PetMJCCreateOrConnectWithoutCategoriesInput = {
    where: PetMJCWhereUniqueInput
    create: XOR<PetMJCCreateWithoutCategoriesInput, PetMJCUncheckedCreateWithoutCategoriesInput>
  }

  export type PetMJCCreateManyCategoriesInputEnvelope = {
    data: PetMJCCreateManyCategoriesInput | PetMJCCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type PetMJCUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PetMJCWhereUniqueInput
    update: XOR<PetMJCUpdateWithoutCategoriesInput, PetMJCUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PetMJCCreateWithoutCategoriesInput, PetMJCUncheckedCreateWithoutCategoriesInput>
  }

  export type PetMJCUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PetMJCWhereUniqueInput
    data: XOR<PetMJCUpdateWithoutCategoriesInput, PetMJCUncheckedUpdateWithoutCategoriesInput>
  }

  export type PetMJCUpdateManyWithWhereWithoutCategoriesInput = {
    where: PetMJCScalarWhereInput
    data: XOR<PetMJCUpdateManyMutationInput, PetMJCUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type PetMJCCreateWithoutGendersInput = {
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    races: RacesMJCCreateNestedOneWithoutPetMJCInput
    categories: CategoriesMJCCreateNestedOneWithoutPetMJCInput
  }

  export type PetMJCUncheckedCreateWithoutGendersInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_RacesMJC: number
    fk_CategoriesMJC: number
  }

  export type PetMJCCreateOrConnectWithoutGendersInput = {
    where: PetMJCWhereUniqueInput
    create: XOR<PetMJCCreateWithoutGendersInput, PetMJCUncheckedCreateWithoutGendersInput>
  }

  export type PetMJCCreateManyGendersInputEnvelope = {
    data: PetMJCCreateManyGendersInput | PetMJCCreateManyGendersInput[]
    skipDuplicates?: boolean
  }

  export type PetMJCUpsertWithWhereUniqueWithoutGendersInput = {
    where: PetMJCWhereUniqueInput
    update: XOR<PetMJCUpdateWithoutGendersInput, PetMJCUncheckedUpdateWithoutGendersInput>
    create: XOR<PetMJCCreateWithoutGendersInput, PetMJCUncheckedCreateWithoutGendersInput>
  }

  export type PetMJCUpdateWithWhereUniqueWithoutGendersInput = {
    where: PetMJCWhereUniqueInput
    data: XOR<PetMJCUpdateWithoutGendersInput, PetMJCUncheckedUpdateWithoutGendersInput>
  }

  export type PetMJCUpdateManyWithWhereWithoutGendersInput = {
    where: PetMJCScalarWhereInput
    data: XOR<PetMJCUpdateManyMutationInput, PetMJCUncheckedUpdateManyWithoutGendersInput>
  }

  export type RacesMJCCreateWithoutPetMJCInput = {
    name_RacesMJC: string
  }

  export type RacesMJCUncheckedCreateWithoutPetMJCInput = {
    id_RacesMJC?: number
    name_RacesMJC: string
  }

  export type RacesMJCCreateOrConnectWithoutPetMJCInput = {
    where: RacesMJCWhereUniqueInput
    create: XOR<RacesMJCCreateWithoutPetMJCInput, RacesMJCUncheckedCreateWithoutPetMJCInput>
  }

  export type CategoriesMJCCreateWithoutPetMJCInput = {
    name_CategoriesMJC: string
  }

  export type CategoriesMJCUncheckedCreateWithoutPetMJCInput = {
    id_CategoriesMJC?: number
    name_CategoriesMJC: string
  }

  export type CategoriesMJCCreateOrConnectWithoutPetMJCInput = {
    where: CategoriesMJCWhereUniqueInput
    create: XOR<CategoriesMJCCreateWithoutPetMJCInput, CategoriesMJCUncheckedCreateWithoutPetMJCInput>
  }

  export type GendersMJCCreateWithoutPetMJCInput = {
    name_GendersMJC: string
  }

  export type GendersMJCUncheckedCreateWithoutPetMJCInput = {
    id_GendersMJC?: number
    name_GendersMJC: string
  }

  export type GendersMJCCreateOrConnectWithoutPetMJCInput = {
    where: GendersMJCWhereUniqueInput
    create: XOR<GendersMJCCreateWithoutPetMJCInput, GendersMJCUncheckedCreateWithoutPetMJCInput>
  }

  export type RacesMJCUpsertWithoutPetMJCInput = {
    update: XOR<RacesMJCUpdateWithoutPetMJCInput, RacesMJCUncheckedUpdateWithoutPetMJCInput>
    create: XOR<RacesMJCCreateWithoutPetMJCInput, RacesMJCUncheckedCreateWithoutPetMJCInput>
    where?: RacesMJCWhereInput
  }

  export type RacesMJCUpdateToOneWithWhereWithoutPetMJCInput = {
    where?: RacesMJCWhereInput
    data: XOR<RacesMJCUpdateWithoutPetMJCInput, RacesMJCUncheckedUpdateWithoutPetMJCInput>
  }

  export type RacesMJCUpdateWithoutPetMJCInput = {
    name_RacesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type RacesMJCUncheckedUpdateWithoutPetMJCInput = {
    id_RacesMJC?: IntFieldUpdateOperationsInput | number
    name_RacesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesMJCUpsertWithoutPetMJCInput = {
    update: XOR<CategoriesMJCUpdateWithoutPetMJCInput, CategoriesMJCUncheckedUpdateWithoutPetMJCInput>
    create: XOR<CategoriesMJCCreateWithoutPetMJCInput, CategoriesMJCUncheckedCreateWithoutPetMJCInput>
    where?: CategoriesMJCWhereInput
  }

  export type CategoriesMJCUpdateToOneWithWhereWithoutPetMJCInput = {
    where?: CategoriesMJCWhereInput
    data: XOR<CategoriesMJCUpdateWithoutPetMJCInput, CategoriesMJCUncheckedUpdateWithoutPetMJCInput>
  }

  export type CategoriesMJCUpdateWithoutPetMJCInput = {
    name_CategoriesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesMJCUncheckedUpdateWithoutPetMJCInput = {
    id_CategoriesMJC?: IntFieldUpdateOperationsInput | number
    name_CategoriesMJC?: StringFieldUpdateOperationsInput | string
  }

  export type GendersMJCUpsertWithoutPetMJCInput = {
    update: XOR<GendersMJCUpdateWithoutPetMJCInput, GendersMJCUncheckedUpdateWithoutPetMJCInput>
    create: XOR<GendersMJCCreateWithoutPetMJCInput, GendersMJCUncheckedCreateWithoutPetMJCInput>
    where?: GendersMJCWhereInput
  }

  export type GendersMJCUpdateToOneWithWhereWithoutPetMJCInput = {
    where?: GendersMJCWhereInput
    data: XOR<GendersMJCUpdateWithoutPetMJCInput, GendersMJCUncheckedUpdateWithoutPetMJCInput>
  }

  export type GendersMJCUpdateWithoutPetMJCInput = {
    name_GendersMJC?: StringFieldUpdateOperationsInput | string
  }

  export type GendersMJCUncheckedUpdateWithoutPetMJCInput = {
    id_GendersMJC?: IntFieldUpdateOperationsInput | number
    name_GendersMJC?: StringFieldUpdateOperationsInput | string
  }

  export type PetMJCCreateManyRacesInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_CategoriesMJC: number
    fk_GendersMJC: number
  }

  export type PetMJCUpdateWithoutRacesInput = {
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    categories?: CategoriesMJCUpdateOneRequiredWithoutPetMJCNestedInput
    Genders?: GendersMJCUpdateOneRequiredWithoutPetMJCNestedInput
  }

  export type PetMJCUncheckedUpdateWithoutRacesInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_CategoriesMJC?: IntFieldUpdateOperationsInput | number
    fk_GendersMJC?: IntFieldUpdateOperationsInput | number
  }

  export type PetMJCUncheckedUpdateManyWithoutRacesInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_CategoriesMJC?: IntFieldUpdateOperationsInput | number
    fk_GendersMJC?: IntFieldUpdateOperationsInput | number
  }

  export type PetMJCCreateManyCategoriesInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_RacesMJC: number
    fk_GendersMJC: number
  }

  export type PetMJCUpdateWithoutCategoriesInput = {
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    races?: RacesMJCUpdateOneRequiredWithoutPetMJCNestedInput
    Genders?: GendersMJCUpdateOneRequiredWithoutPetMJCNestedInput
  }

  export type PetMJCUncheckedUpdateWithoutCategoriesInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_RacesMJC?: IntFieldUpdateOperationsInput | number
    fk_GendersMJC?: IntFieldUpdateOperationsInput | number
  }

  export type PetMJCUncheckedUpdateManyWithoutCategoriesInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_RacesMJC?: IntFieldUpdateOperationsInput | number
    fk_GendersMJC?: IntFieldUpdateOperationsInput | number
  }

  export type PetMJCCreateManyGendersInput = {
    id_PetMJC?: number
    name_PetsMJC: string
    photoMJC: string
    estadoMJC?: $Enums.EstadoMJC
    fk_RacesMJC: number
    fk_CategoriesMJC: number
  }

  export type PetMJCUpdateWithoutGendersInput = {
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    races?: RacesMJCUpdateOneRequiredWithoutPetMJCNestedInput
    categories?: CategoriesMJCUpdateOneRequiredWithoutPetMJCNestedInput
  }

  export type PetMJCUncheckedUpdateWithoutGendersInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_RacesMJC?: IntFieldUpdateOperationsInput | number
    fk_CategoriesMJC?: IntFieldUpdateOperationsInput | number
  }

  export type PetMJCUncheckedUpdateManyWithoutGendersInput = {
    id_PetMJC?: IntFieldUpdateOperationsInput | number
    name_PetsMJC?: StringFieldUpdateOperationsInput | string
    photoMJC?: StringFieldUpdateOperationsInput | string
    estadoMJC?: EnumEstadoMJCFieldUpdateOperationsInput | $Enums.EstadoMJC
    fk_RacesMJC?: IntFieldUpdateOperationsInput | number
    fk_CategoriesMJC?: IntFieldUpdateOperationsInput | number
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