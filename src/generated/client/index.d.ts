
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Subcategory
 * 
 */
export type Subcategory = $Result.DefaultSelection<Prisma.$SubcategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Tool
 * 
 */
export type Tool = $Result.DefaultSelection<Prisma.$ToolPayload>
/**
 * Model ToolTag
 * 
 */
export type ToolTag = $Result.DefaultSelection<Prisma.$ToolTagPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model CollectionItem
 * 
 */
export type CollectionItem = $Result.DefaultSelection<Prisma.$CollectionItemPayload>
/**
 * Model UserNote
 * 
 */
export type UserNote = $Result.DefaultSelection<Prisma.$UserNotePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  BETA: 'BETA',
  DEAD: 'DEAD'
};

export type Status = (typeof Status)[keyof typeof Status]


export const BusinessModel: {
  FREE: 'FREE',
  FREEMIUM: 'FREEMIUM',
  PAID: 'PAID'
};

export type BusinessModel = (typeof BusinessModel)[keyof typeof BusinessModel]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type BusinessModel = $Enums.BusinessModel

export const BusinessModel: typeof $Enums.BusinessModel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategory`: Exposes CRUD operations for the **Subcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategories
    * const subcategories = await prisma.subcategory.findMany()
    * ```
    */
  get subcategory(): Prisma.SubcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **Tool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tool.findMany()
    * ```
    */
  get tool(): Prisma.ToolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolTag`: Exposes CRUD operations for the **ToolTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolTags
    * const toolTags = await prisma.toolTag.findMany()
    * ```
    */
  get toolTag(): Prisma.ToolTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionItem`: Exposes CRUD operations for the **CollectionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionItems
    * const collectionItems = await prisma.collectionItem.findMany()
    * ```
    */
  get collectionItem(): Prisma.CollectionItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userNote`: Exposes CRUD operations for the **UserNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserNotes
    * const userNotes = await prisma.userNote.findMany()
    * ```
    */
  get userNote(): Prisma.UserNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Category: 'Category',
    Subcategory: 'Subcategory',
    Tag: 'Tag',
    Tool: 'Tool',
    ToolTag: 'ToolTag',
    Favorite: 'Favorite',
    Collection: 'Collection',
    CollectionItem: 'CollectionItem',
    UserNote: 'UserNote',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "subcategory" | "tag" | "tool" | "toolTag" | "favorite" | "collection" | "collectionItem" | "userNote" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Subcategory: {
        payload: Prisma.$SubcategoryPayload<ExtArgs>
        fields: Prisma.SubcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findFirst: {
            args: Prisma.SubcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findMany: {
            args: Prisma.SubcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          create: {
            args: Prisma.SubcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          createMany: {
            args: Prisma.SubcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubcategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          delete: {
            args: Prisma.SubcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          update: {
            args: Prisma.SubcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubcategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          aggregate: {
            args: Prisma.SubcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategory>
          }
          groupBy: {
            args: Prisma.SubcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Tool: {
        payload: Prisma.$ToolPayload<ExtArgs>
        fields: Prisma.ToolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findFirst: {
            args: Prisma.ToolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findMany: {
            args: Prisma.ToolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          create: {
            args: Prisma.ToolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          createMany: {
            args: Prisma.ToolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          delete: {
            args: Prisma.ToolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          update: {
            args: Prisma.ToolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          deleteMany: {
            args: Prisma.ToolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          upsert: {
            args: Prisma.ToolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTool>
          }
          groupBy: {
            args: Prisma.ToolGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolCountArgs<ExtArgs>
            result: $Utils.Optional<ToolCountAggregateOutputType> | number
          }
        }
      }
      ToolTag: {
        payload: Prisma.$ToolTagPayload<ExtArgs>
        fields: Prisma.ToolTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          findFirst: {
            args: Prisma.ToolTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          findMany: {
            args: Prisma.ToolTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>[]
          }
          create: {
            args: Prisma.ToolTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          createMany: {
            args: Prisma.ToolTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>[]
          }
          delete: {
            args: Prisma.ToolTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          update: {
            args: Prisma.ToolTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          deleteMany: {
            args: Prisma.ToolTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>[]
          }
          upsert: {
            args: Prisma.ToolTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          aggregate: {
            args: Prisma.ToolTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolTag>
          }
          groupBy: {
            args: Prisma.ToolTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolTagCountArgs<ExtArgs>
            result: $Utils.Optional<ToolTagCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      CollectionItem: {
        payload: Prisma.$CollectionItemPayload<ExtArgs>
        fields: Prisma.CollectionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>
          }
          findFirst: {
            args: Prisma.CollectionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>
          }
          findMany: {
            args: Prisma.CollectionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>[]
          }
          create: {
            args: Prisma.CollectionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>
          }
          createMany: {
            args: Prisma.CollectionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>[]
          }
          delete: {
            args: Prisma.CollectionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>
          }
          update: {
            args: Prisma.CollectionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>
          }
          deleteMany: {
            args: Prisma.CollectionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>[]
          }
          upsert: {
            args: Prisma.CollectionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionItemPayload>
          }
          aggregate: {
            args: Prisma.CollectionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionItem>
          }
          groupBy: {
            args: Prisma.CollectionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionItemCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionItemCountAggregateOutputType> | number
          }
        }
      }
      UserNote: {
        payload: Prisma.$UserNotePayload<ExtArgs>
        fields: Prisma.UserNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          findFirst: {
            args: Prisma.UserNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          findMany: {
            args: Prisma.UserNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>[]
          }
          create: {
            args: Prisma.UserNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          createMany: {
            args: Prisma.UserNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>[]
          }
          delete: {
            args: Prisma.UserNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          update: {
            args: Prisma.UserNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          deleteMany: {
            args: Prisma.UserNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>[]
          }
          upsert: {
            args: Prisma.UserNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          aggregate: {
            args: Prisma.UserNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserNote>
          }
          groupBy: {
            args: Prisma.UserNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserNoteCountArgs<ExtArgs>
            result: $Utils.Optional<UserNoteCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    subcategory?: SubcategoryOmit
    tag?: TagOmit
    tool?: ToolOmit
    toolTag?: ToolTagOmit
    favorite?: FavoriteOmit
    collection?: CollectionOmit
    collectionItem?: CollectionItemOmit
    userNote?: UserNoteOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    tools: number
    favorites: number
    collections: number
    userNotes: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | UserCountOutputTypeCountToolsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
    userNotes?: boolean | UserCountOutputTypeCountUserNotesArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
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
  export type UserCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcategories: number
    tools: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryCountOutputTypeCountSubcategoriesArgs
    tools?: boolean | CategoryCountOutputTypeCountToolsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }


  /**
   * Count Type SubcategoryCountOutputType
   */

  export type SubcategoryCountOutputType = {
    tools: number
  }

  export type SubcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | SubcategoryCountOutputTypeCountToolsArgs
  }

  // Custom InputTypes
  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryCountOutputType
     */
    select?: SubcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tools: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | TagCountOutputTypeCountToolsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolTagWhereInput
  }


  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    tags: number
    favorites: number
    collectionItems: number
    userNotes: number
    auditLogs: number
  }

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ToolCountOutputTypeCountTagsArgs
    favorites?: boolean | ToolCountOutputTypeCountFavoritesArgs
    collectionItems?: boolean | ToolCountOutputTypeCountCollectionItemsArgs
    userNotes?: boolean | ToolCountOutputTypeCountUserNotesArgs
    auditLogs?: boolean | ToolCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolTagWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountCollectionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionItemWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountUserNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoteWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    items: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CollectionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionItemWhereInput
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tools?: boolean | User$toolsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    userNotes?: boolean | User$userNotesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | User$toolsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    userNotes?: boolean | User$userNotesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tools: Prisma.$ToolPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
      userNotes: Prisma.$UserNotePayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      password: string | null
      image: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    tools<T extends User$toolsArgs<ExtArgs> = {}>(args?: Subset<T, User$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userNotes<T extends User$userNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$userNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.tools
   */
  export type User$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User.userNotes
   */
  export type User$userNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    where?: UserNoteWhereInput
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    cursor?: UserNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
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
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    iconUrl: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    iconUrl: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    iconUrl: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    iconUrl?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    iconUrl?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    iconUrl?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    iconUrl: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    iconUrl?: boolean
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    tools?: boolean | Category$toolsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    iconUrl?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    iconUrl?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    iconUrl?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "iconUrl", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    tools?: boolean | Category$toolsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subcategories: Prisma.$SubcategoryPayload<ExtArgs>[]
      tools: Prisma.$ToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      iconUrl: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategories<T extends Category$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tools<T extends Category$toolsArgs<ExtArgs> = {}>(args?: Subset<T, Category$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly iconUrl: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.subcategories
   */
  export type Category$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    cursor?: SubcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Category.tools
   */
  export type Category$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Subcategory
   */

  export type AggregateSubcategory = {
    _count: SubcategoryCountAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  export type SubcategoryMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
  }

  export type SubcategoryMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
  }

  export type SubcategoryCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    _all: number
  }


  export type SubcategoryMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
  }

  export type SubcategoryMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
  }

  export type SubcategoryCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    _all?: true
  }

  export type SubcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategory to aggregate.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subcategories
    **/
    _count?: true | SubcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoryMaxAggregateInputType
  }

  export type GetSubcategoryAggregateType<T extends SubcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategory[P]>
      : GetScalarType<T[P], AggregateSubcategory[P]>
  }




  export type SubcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithAggregationInput | SubcategoryOrderByWithAggregationInput[]
    by: SubcategoryScalarFieldEnum[] | SubcategoryScalarFieldEnum
    having?: SubcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoryCountAggregateInputType | true
    _min?: SubcategoryMinAggregateInputType
    _max?: SubcategoryMaxAggregateInputType
  }

  export type SubcategoryGroupByOutputType = {
    id: string
    categoryId: string
    name: string
    _count: SubcategoryCountAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  type GetSubcategoryGroupByPayload<T extends SubcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tools?: boolean | Subcategory$toolsArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
  }

  export type SubcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name", ExtArgs["result"]["subcategory"]>
  export type SubcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tools?: boolean | Subcategory$toolsArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SubcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subcategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      tools: Prisma.$ToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      name: string
    }, ExtArgs["result"]["subcategory"]>
    composites: {}
  }

  type SubcategoryGetPayload<S extends boolean | null | undefined | SubcategoryDefaultArgs> = $Result.GetResult<Prisma.$SubcategoryPayload, S>

  type SubcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoryCountAggregateInputType | true
    }

  export interface SubcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subcategory'], meta: { name: 'Subcategory' } }
    /**
     * Find zero or one Subcategory that matches the filter.
     * @param {SubcategoryFindUniqueArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubcategoryFindUniqueArgs>(args: SelectSubset<T, SubcategoryFindUniqueArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubcategoryFindUniqueOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubcategoryFindFirstArgs>(args?: SelectSubset<T, SubcategoryFindFirstArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategories
     * const subcategories = await prisma.subcategory.findMany()
     * 
     * // Get first 10 Subcategories
     * const subcategories = await prisma.subcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubcategoryFindManyArgs>(args?: SelectSubset<T, SubcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategory.
     * @param {SubcategoryCreateArgs} args - Arguments to create a Subcategory.
     * @example
     * // Create one Subcategory
     * const Subcategory = await prisma.subcategory.create({
     *   data: {
     *     // ... data to create a Subcategory
     *   }
     * })
     * 
     */
    create<T extends SubcategoryCreateArgs>(args: SelectSubset<T, SubcategoryCreateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategories.
     * @param {SubcategoryCreateManyArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubcategoryCreateManyArgs>(args?: SelectSubset<T, SubcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subcategories and returns the data saved in the database.
     * @param {SubcategoryCreateManyAndReturnArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubcategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubcategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subcategory.
     * @param {SubcategoryDeleteArgs} args - Arguments to delete one Subcategory.
     * @example
     * // Delete one Subcategory
     * const Subcategory = await prisma.subcategory.delete({
     *   where: {
     *     // ... filter to delete one Subcategory
     *   }
     * })
     * 
     */
    delete<T extends SubcategoryDeleteArgs>(args: SelectSubset<T, SubcategoryDeleteArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategory.
     * @param {SubcategoryUpdateArgs} args - Arguments to update one Subcategory.
     * @example
     * // Update one Subcategory
     * const subcategory = await prisma.subcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubcategoryUpdateArgs>(args: SelectSubset<T, SubcategoryUpdateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategories.
     * @param {SubcategoryDeleteManyArgs} args - Arguments to filter Subcategories to delete.
     * @example
     * // Delete a few Subcategories
     * const { count } = await prisma.subcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubcategoryDeleteManyArgs>(args?: SelectSubset<T, SubcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubcategoryUpdateManyArgs>(args: SelectSubset<T, SubcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories and returns the data updated in the database.
     * @param {SubcategoryUpdateManyAndReturnArgs} args - Arguments to update many Subcategories.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubcategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubcategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subcategory.
     * @param {SubcategoryUpsertArgs} args - Arguments to update or create a Subcategory.
     * @example
     * // Update or create a Subcategory
     * const subcategory = await prisma.subcategory.upsert({
     *   create: {
     *     // ... data to create a Subcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategory we want to update
     *   }
     * })
     */
    upsert<T extends SubcategoryUpsertArgs>(args: SelectSubset<T, SubcategoryUpsertArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryCountArgs} args - Arguments to filter Subcategories to count.
     * @example
     * // Count the number of Subcategories
     * const count = await prisma.subcategory.count({
     *   where: {
     *     // ... the filter for the Subcategories we want to count
     *   }
     * })
    **/
    count<T extends SubcategoryCountArgs>(
      args?: Subset<T, SubcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcategoryAggregateArgs>(args: Subset<T, SubcategoryAggregateArgs>): Prisma.PrismaPromise<GetSubcategoryAggregateType<T>>

    /**
     * Group by Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryGroupByArgs} args - Group by arguments.
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
      T extends SubcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubcategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subcategory model
   */
  readonly fields: SubcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tools<T extends Subcategory$toolsArgs<ExtArgs> = {}>(args?: Subset<T, Subcategory$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subcategory model
   */
  interface SubcategoryFieldRefs {
    readonly id: FieldRef<"Subcategory", 'String'>
    readonly categoryId: FieldRef<"Subcategory", 'String'>
    readonly name: FieldRef<"Subcategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subcategory findUnique
   */
  export type SubcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findUniqueOrThrow
   */
  export type SubcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findFirst
   */
  export type SubcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findFirstOrThrow
   */
  export type SubcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findMany
   */
  export type SubcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategories to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory create
   */
  export type SubcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Subcategory.
     */
    data: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
  }

  /**
   * Subcategory createMany
   */
  export type SubcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
  }

  /**
   * Subcategory createManyAndReturn
   */
  export type SubcategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory update
   */
  export type SubcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Subcategory.
     */
    data: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
    /**
     * Choose, which Subcategory to update.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory updateMany
   */
  export type SubcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
  }

  /**
   * Subcategory updateManyAndReturn
   */
  export type SubcategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory upsert
   */
  export type SubcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Subcategory to update in case it exists.
     */
    where: SubcategoryWhereUniqueInput
    /**
     * In case the Subcategory found by the `where` argument doesn't exist, create a new Subcategory with this data.
     */
    create: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
    /**
     * In case the Subcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
  }

  /**
   * Subcategory delete
   */
  export type SubcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter which Subcategory to delete.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory deleteMany
   */
  export type SubcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategories to delete
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to delete.
     */
    limit?: number
  }

  /**
   * Subcategory.tools
   */
  export type Subcategory$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Subcategory without action
   */
  export type SubcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tools?: boolean | Tag$toolsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | Tag$toolsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      tools: Prisma.$ToolTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tools<T extends Tag$toolsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.tools
   */
  export type Tag$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    where?: ToolTagWhereInput
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    cursor?: ToolTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  export type ToolMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    url: string | null
    categoryId: string | null
    subcategoryId: string | null
    shortDesc: string | null
    longDesc: string | null
    aiSummary: string | null
    developer: string | null
    status: $Enums.Status | null
    businessModel: $Enums.BusinessModel | null
    startingPrice: string | null
    hasApi: boolean | null
    docsUrl: string | null
    githubUrl: string | null
    logoUrl: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    url: string | null
    categoryId: string | null
    subcategoryId: string | null
    shortDesc: string | null
    longDesc: string | null
    aiSummary: string | null
    developer: string | null
    status: $Enums.Status | null
    businessModel: $Enums.BusinessModel | null
    startingPrice: string | null
    hasApi: boolean | null
    docsUrl: string | null
    githubUrl: string | null
    logoUrl: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    url: number
    categoryId: number
    subcategoryId: number
    shortDesc: number
    longDesc: number
    aiSummary: number
    developer: number
    status: number
    businessModel: number
    startingPrice: number
    hasApi: number
    docsUrl: number
    githubUrl: number
    logoUrl: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ToolMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    url?: true
    categoryId?: true
    subcategoryId?: true
    shortDesc?: true
    longDesc?: true
    aiSummary?: true
    developer?: true
    status?: true
    businessModel?: true
    startingPrice?: true
    hasApi?: true
    docsUrl?: true
    githubUrl?: true
    logoUrl?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    url?: true
    categoryId?: true
    subcategoryId?: true
    shortDesc?: true
    longDesc?: true
    aiSummary?: true
    developer?: true
    status?: true
    businessModel?: true
    startingPrice?: true
    hasApi?: true
    docsUrl?: true
    githubUrl?: true
    logoUrl?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    url?: true
    categoryId?: true
    subcategoryId?: true
    shortDesc?: true
    longDesc?: true
    aiSummary?: true
    developer?: true
    status?: true
    businessModel?: true
    startingPrice?: true
    hasApi?: true
    docsUrl?: true
    githubUrl?: true
    logoUrl?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tool to aggregate.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tools
    **/
    _count?: true | ToolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolMaxAggregateInputType
  }

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
        [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>
  }




  export type ToolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithAggregationInput | ToolOrderByWithAggregationInput[]
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum
    having?: ToolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolCountAggregateInputType | true
    _min?: ToolMinAggregateInputType
    _max?: ToolMaxAggregateInputType
  }

  export type ToolGroupByOutputType = {
    id: string
    name: string
    slug: string
    url: string
    categoryId: string | null
    subcategoryId: string | null
    shortDesc: string | null
    longDesc: string | null
    aiSummary: string | null
    developer: string | null
    status: $Enums.Status
    businessModel: $Enums.BusinessModel
    startingPrice: string | null
    hasApi: boolean
    docsUrl: string | null
    githubUrl: string | null
    logoUrl: string | null
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: ToolCountAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  type GetToolGroupByPayload<T extends ToolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolGroupByOutputType[P]>
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
        }
      >
    >


  export type ToolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    shortDesc?: boolean
    longDesc?: boolean
    aiSummary?: boolean
    developer?: boolean
    status?: boolean
    businessModel?: boolean
    startingPrice?: boolean
    hasApi?: boolean
    docsUrl?: boolean
    githubUrl?: boolean
    logoUrl?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Tool$categoryArgs<ExtArgs>
    subcategory?: boolean | Tool$subcategoryArgs<ExtArgs>
    createdBy?: boolean | Tool$createdByArgs<ExtArgs>
    tags?: boolean | Tool$tagsArgs<ExtArgs>
    favorites?: boolean | Tool$favoritesArgs<ExtArgs>
    collectionItems?: boolean | Tool$collectionItemsArgs<ExtArgs>
    userNotes?: boolean | Tool$userNotesArgs<ExtArgs>
    auditLogs?: boolean | Tool$auditLogsArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    shortDesc?: boolean
    longDesc?: boolean
    aiSummary?: boolean
    developer?: boolean
    status?: boolean
    businessModel?: boolean
    startingPrice?: boolean
    hasApi?: boolean
    docsUrl?: boolean
    githubUrl?: boolean
    logoUrl?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Tool$categoryArgs<ExtArgs>
    subcategory?: boolean | Tool$subcategoryArgs<ExtArgs>
    createdBy?: boolean | Tool$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    shortDesc?: boolean
    longDesc?: boolean
    aiSummary?: boolean
    developer?: boolean
    status?: boolean
    businessModel?: boolean
    startingPrice?: boolean
    hasApi?: boolean
    docsUrl?: boolean
    githubUrl?: boolean
    logoUrl?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Tool$categoryArgs<ExtArgs>
    subcategory?: boolean | Tool$subcategoryArgs<ExtArgs>
    createdBy?: boolean | Tool$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    shortDesc?: boolean
    longDesc?: boolean
    aiSummary?: boolean
    developer?: boolean
    status?: boolean
    businessModel?: boolean
    startingPrice?: boolean
    hasApi?: boolean
    docsUrl?: boolean
    githubUrl?: boolean
    logoUrl?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ToolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "url" | "categoryId" | "subcategoryId" | "shortDesc" | "longDesc" | "aiSummary" | "developer" | "status" | "businessModel" | "startingPrice" | "hasApi" | "docsUrl" | "githubUrl" | "logoUrl" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["tool"]>
  export type ToolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Tool$categoryArgs<ExtArgs>
    subcategory?: boolean | Tool$subcategoryArgs<ExtArgs>
    createdBy?: boolean | Tool$createdByArgs<ExtArgs>
    tags?: boolean | Tool$tagsArgs<ExtArgs>
    favorites?: boolean | Tool$favoritesArgs<ExtArgs>
    collectionItems?: boolean | Tool$collectionItemsArgs<ExtArgs>
    userNotes?: boolean | Tool$userNotesArgs<ExtArgs>
    auditLogs?: boolean | Tool$auditLogsArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Tool$categoryArgs<ExtArgs>
    subcategory?: boolean | Tool$subcategoryArgs<ExtArgs>
    createdBy?: boolean | Tool$createdByArgs<ExtArgs>
  }
  export type ToolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Tool$categoryArgs<ExtArgs>
    subcategory?: boolean | Tool$subcategoryArgs<ExtArgs>
    createdBy?: boolean | Tool$createdByArgs<ExtArgs>
  }

  export type $ToolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tool"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      subcategory: Prisma.$SubcategoryPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      tags: Prisma.$ToolTagPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      collectionItems: Prisma.$CollectionItemPayload<ExtArgs>[]
      userNotes: Prisma.$UserNotePayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      url: string
      categoryId: string | null
      subcategoryId: string | null
      shortDesc: string | null
      longDesc: string | null
      aiSummary: string | null
      developer: string | null
      status: $Enums.Status
      businessModel: $Enums.BusinessModel
      startingPrice: string | null
      hasApi: boolean
      docsUrl: string | null
      githubUrl: string | null
      logoUrl: string | null
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tool"]>
    composites: {}
  }

  type ToolGetPayload<S extends boolean | null | undefined | ToolDefaultArgs> = $Result.GetResult<Prisma.$ToolPayload, S>

  type ToolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolCountAggregateInputType | true
    }

  export interface ToolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tool'], meta: { name: 'Tool' } }
    /**
     * Find zero or one Tool that matches the filter.
     * @param {ToolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolFindUniqueArgs>(args: SelectSubset<T, ToolFindUniqueArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolFindFirstArgs>(args?: SelectSubset<T, ToolFindFirstArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolFindManyArgs>(args?: SelectSubset<T, ToolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tool.
     * @param {ToolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     * 
     */
    create<T extends ToolCreateArgs>(args: SelectSubset<T, ToolCreateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tools.
     * @param {ToolCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolCreateManyArgs>(args?: SelectSubset<T, ToolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tools and returns the data saved in the database.
     * @param {ToolCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tool.
     * @param {ToolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     * 
     */
    delete<T extends ToolDeleteArgs>(args: SelectSubset<T, ToolDeleteArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tool.
     * @param {ToolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolUpdateArgs>(args: SelectSubset<T, ToolUpdateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tools.
     * @param {ToolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolDeleteManyArgs>(args?: SelectSubset<T, ToolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolUpdateManyArgs>(args: SelectSubset<T, ToolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {ToolUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToolUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tool.
     * @param {ToolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     */
    upsert<T extends ToolUpsertArgs>(args: SelectSubset<T, ToolUpsertArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends ToolCountArgs>(
      args?: Subset<T, ToolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolAggregateArgs>(args: Subset<T, ToolAggregateArgs>): Prisma.PrismaPromise<GetToolAggregateType<T>>

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolGroupByArgs} args - Group by arguments.
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
      T extends ToolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolGroupByArgs['orderBy'] }
        : { orderBy?: ToolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tool model
   */
  readonly fields: ToolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Tool$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Tool$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategory<T extends Tool$subcategoryArgs<ExtArgs> = {}>(args?: Subset<T, Tool$subcategoryArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Tool$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Tool$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends Tool$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Tool$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Tool$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Tool$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collectionItems<T extends Tool$collectionItemsArgs<ExtArgs> = {}>(args?: Subset<T, Tool$collectionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userNotes<T extends Tool$userNotesArgs<ExtArgs> = {}>(args?: Subset<T, Tool$userNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Tool$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Tool$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tool model
   */
  interface ToolFieldRefs {
    readonly id: FieldRef<"Tool", 'String'>
    readonly name: FieldRef<"Tool", 'String'>
    readonly slug: FieldRef<"Tool", 'String'>
    readonly url: FieldRef<"Tool", 'String'>
    readonly categoryId: FieldRef<"Tool", 'String'>
    readonly subcategoryId: FieldRef<"Tool", 'String'>
    readonly shortDesc: FieldRef<"Tool", 'String'>
    readonly longDesc: FieldRef<"Tool", 'String'>
    readonly aiSummary: FieldRef<"Tool", 'String'>
    readonly developer: FieldRef<"Tool", 'String'>
    readonly status: FieldRef<"Tool", 'Status'>
    readonly businessModel: FieldRef<"Tool", 'BusinessModel'>
    readonly startingPrice: FieldRef<"Tool", 'String'>
    readonly hasApi: FieldRef<"Tool", 'Boolean'>
    readonly docsUrl: FieldRef<"Tool", 'String'>
    readonly githubUrl: FieldRef<"Tool", 'String'>
    readonly logoUrl: FieldRef<"Tool", 'String'>
    readonly createdById: FieldRef<"Tool", 'String'>
    readonly createdAt: FieldRef<"Tool", 'DateTime'>
    readonly updatedAt: FieldRef<"Tool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tool findUnique
   */
  export type ToolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findUniqueOrThrow
   */
  export type ToolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findFirst
   */
  export type ToolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findFirstOrThrow
   */
  export type ToolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findMany
   */
  export type ToolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool create
   */
  export type ToolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to create a Tool.
     */
    data: XOR<ToolCreateInput, ToolUncheckedCreateInput>
  }

  /**
   * Tool createMany
   */
  export type ToolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
  }

  /**
   * Tool createManyAndReturn
   */
  export type ToolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tool update
   */
  export type ToolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to update a Tool.
     */
    data: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
    /**
     * Choose, which Tool to update.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool updateMany
   */
  export type ToolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
  }

  /**
   * Tool updateManyAndReturn
   */
  export type ToolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tool upsert
   */
  export type ToolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The filter to search for the Tool to update in case it exists.
     */
    where: ToolWhereUniqueInput
    /**
     * In case the Tool found by the `where` argument doesn't exist, create a new Tool with this data.
     */
    create: XOR<ToolCreateInput, ToolUncheckedCreateInput>
    /**
     * In case the Tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
  }

  /**
   * Tool delete
   */
  export type ToolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter which Tool to delete.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool deleteMany
   */
  export type ToolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to delete
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to delete.
     */
    limit?: number
  }

  /**
   * Tool.category
   */
  export type Tool$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Tool.subcategory
   */
  export type Tool$subcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    where?: SubcategoryWhereInput
  }

  /**
   * Tool.createdBy
   */
  export type Tool$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Tool.tags
   */
  export type Tool$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    where?: ToolTagWhereInput
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    cursor?: ToolTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * Tool.favorites
   */
  export type Tool$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Tool.collectionItems
   */
  export type Tool$collectionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    where?: CollectionItemWhereInput
    orderBy?: CollectionItemOrderByWithRelationInput | CollectionItemOrderByWithRelationInput[]
    cursor?: CollectionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionItemScalarFieldEnum | CollectionItemScalarFieldEnum[]
  }

  /**
   * Tool.userNotes
   */
  export type Tool$userNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    where?: UserNoteWhereInput
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    cursor?: UserNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * Tool.auditLogs
   */
  export type Tool$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Tool without action
   */
  export type ToolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
  }


  /**
   * Model ToolTag
   */

  export type AggregateToolTag = {
    _count: ToolTagCountAggregateOutputType | null
    _min: ToolTagMinAggregateOutputType | null
    _max: ToolTagMaxAggregateOutputType | null
  }

  export type ToolTagMinAggregateOutputType = {
    toolId: string | null
    tagId: string | null
  }

  export type ToolTagMaxAggregateOutputType = {
    toolId: string | null
    tagId: string | null
  }

  export type ToolTagCountAggregateOutputType = {
    toolId: number
    tagId: number
    _all: number
  }


  export type ToolTagMinAggregateInputType = {
    toolId?: true
    tagId?: true
  }

  export type ToolTagMaxAggregateInputType = {
    toolId?: true
    tagId?: true
  }

  export type ToolTagCountAggregateInputType = {
    toolId?: true
    tagId?: true
    _all?: true
  }

  export type ToolTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolTag to aggregate.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolTags
    **/
    _count?: true | ToolTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolTagMaxAggregateInputType
  }

  export type GetToolTagAggregateType<T extends ToolTagAggregateArgs> = {
        [P in keyof T & keyof AggregateToolTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolTag[P]>
      : GetScalarType<T[P], AggregateToolTag[P]>
  }




  export type ToolTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolTagWhereInput
    orderBy?: ToolTagOrderByWithAggregationInput | ToolTagOrderByWithAggregationInput[]
    by: ToolTagScalarFieldEnum[] | ToolTagScalarFieldEnum
    having?: ToolTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolTagCountAggregateInputType | true
    _min?: ToolTagMinAggregateInputType
    _max?: ToolTagMaxAggregateInputType
  }

  export type ToolTagGroupByOutputType = {
    toolId: string
    tagId: string
    _count: ToolTagCountAggregateOutputType | null
    _min: ToolTagMinAggregateOutputType | null
    _max: ToolTagMaxAggregateOutputType | null
  }

  type GetToolTagGroupByPayload<T extends ToolTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolTagGroupByOutputType[P]>
            : GetScalarType<T[P], ToolTagGroupByOutputType[P]>
        }
      >
    >


  export type ToolTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    tagId?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolTag"]>

  export type ToolTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    tagId?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolTag"]>

  export type ToolTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    tagId?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolTag"]>

  export type ToolTagSelectScalar = {
    toolId?: boolean
    tagId?: boolean
  }

  export type ToolTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"toolId" | "tagId", ExtArgs["result"]["toolTag"]>
  export type ToolTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ToolTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ToolTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ToolTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolTag"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      toolId: string
      tagId: string
    }, ExtArgs["result"]["toolTag"]>
    composites: {}
  }

  type ToolTagGetPayload<S extends boolean | null | undefined | ToolTagDefaultArgs> = $Result.GetResult<Prisma.$ToolTagPayload, S>

  type ToolTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolTagCountAggregateInputType | true
    }

  export interface ToolTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolTag'], meta: { name: 'ToolTag' } }
    /**
     * Find zero or one ToolTag that matches the filter.
     * @param {ToolTagFindUniqueArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolTagFindUniqueArgs>(args: SelectSubset<T, ToolTagFindUniqueArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolTagFindUniqueOrThrowArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagFindFirstArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolTagFindFirstArgs>(args?: SelectSubset<T, ToolTagFindFirstArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagFindFirstOrThrowArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolTags
     * const toolTags = await prisma.toolTag.findMany()
     * 
     * // Get first 10 ToolTags
     * const toolTags = await prisma.toolTag.findMany({ take: 10 })
     * 
     * // Only select the `toolId`
     * const toolTagWithToolIdOnly = await prisma.toolTag.findMany({ select: { toolId: true } })
     * 
     */
    findMany<T extends ToolTagFindManyArgs>(args?: SelectSubset<T, ToolTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolTag.
     * @param {ToolTagCreateArgs} args - Arguments to create a ToolTag.
     * @example
     * // Create one ToolTag
     * const ToolTag = await prisma.toolTag.create({
     *   data: {
     *     // ... data to create a ToolTag
     *   }
     * })
     * 
     */
    create<T extends ToolTagCreateArgs>(args: SelectSubset<T, ToolTagCreateArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolTags.
     * @param {ToolTagCreateManyArgs} args - Arguments to create many ToolTags.
     * @example
     * // Create many ToolTags
     * const toolTag = await prisma.toolTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolTagCreateManyArgs>(args?: SelectSubset<T, ToolTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolTags and returns the data saved in the database.
     * @param {ToolTagCreateManyAndReturnArgs} args - Arguments to create many ToolTags.
     * @example
     * // Create many ToolTags
     * const toolTag = await prisma.toolTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolTags and only return the `toolId`
     * const toolTagWithToolIdOnly = await prisma.toolTag.createManyAndReturn({
     *   select: { toolId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolTag.
     * @param {ToolTagDeleteArgs} args - Arguments to delete one ToolTag.
     * @example
     * // Delete one ToolTag
     * const ToolTag = await prisma.toolTag.delete({
     *   where: {
     *     // ... filter to delete one ToolTag
     *   }
     * })
     * 
     */
    delete<T extends ToolTagDeleteArgs>(args: SelectSubset<T, ToolTagDeleteArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolTag.
     * @param {ToolTagUpdateArgs} args - Arguments to update one ToolTag.
     * @example
     * // Update one ToolTag
     * const toolTag = await prisma.toolTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolTagUpdateArgs>(args: SelectSubset<T, ToolTagUpdateArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolTags.
     * @param {ToolTagDeleteManyArgs} args - Arguments to filter ToolTags to delete.
     * @example
     * // Delete a few ToolTags
     * const { count } = await prisma.toolTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolTagDeleteManyArgs>(args?: SelectSubset<T, ToolTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolTags
     * const toolTag = await prisma.toolTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolTagUpdateManyArgs>(args: SelectSubset<T, ToolTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolTags and returns the data updated in the database.
     * @param {ToolTagUpdateManyAndReturnArgs} args - Arguments to update many ToolTags.
     * @example
     * // Update many ToolTags
     * const toolTag = await prisma.toolTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolTags and only return the `toolId`
     * const toolTagWithToolIdOnly = await prisma.toolTag.updateManyAndReturn({
     *   select: { toolId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToolTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolTag.
     * @param {ToolTagUpsertArgs} args - Arguments to update or create a ToolTag.
     * @example
     * // Update or create a ToolTag
     * const toolTag = await prisma.toolTag.upsert({
     *   create: {
     *     // ... data to create a ToolTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolTag we want to update
     *   }
     * })
     */
    upsert<T extends ToolTagUpsertArgs>(args: SelectSubset<T, ToolTagUpsertArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagCountArgs} args - Arguments to filter ToolTags to count.
     * @example
     * // Count the number of ToolTags
     * const count = await prisma.toolTag.count({
     *   where: {
     *     // ... the filter for the ToolTags we want to count
     *   }
     * })
    **/
    count<T extends ToolTagCountArgs>(
      args?: Subset<T, ToolTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolTagAggregateArgs>(args: Subset<T, ToolTagAggregateArgs>): Prisma.PrismaPromise<GetToolTagAggregateType<T>>

    /**
     * Group by ToolTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagGroupByArgs} args - Group by arguments.
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
      T extends ToolTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolTagGroupByArgs['orderBy'] }
        : { orderBy?: ToolTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolTag model
   */
  readonly fields: ToolTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ToolTag model
   */
  interface ToolTagFieldRefs {
    readonly toolId: FieldRef<"ToolTag", 'String'>
    readonly tagId: FieldRef<"ToolTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ToolTag findUnique
   */
  export type ToolTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag findUniqueOrThrow
   */
  export type ToolTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag findFirst
   */
  export type ToolTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolTags.
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolTags.
     */
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * ToolTag findFirstOrThrow
   */
  export type ToolTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolTags.
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolTags.
     */
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * ToolTag findMany
   */
  export type ToolTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTags to fetch.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolTags.
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolTags.
     */
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * ToolTag create
   */
  export type ToolTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolTag.
     */
    data: XOR<ToolTagCreateInput, ToolTagUncheckedCreateInput>
  }

  /**
   * ToolTag createMany
   */
  export type ToolTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolTags.
     */
    data: ToolTagCreateManyInput | ToolTagCreateManyInput[]
  }

  /**
   * ToolTag createManyAndReturn
   */
  export type ToolTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * The data used to create many ToolTags.
     */
    data: ToolTagCreateManyInput | ToolTagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolTag update
   */
  export type ToolTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolTag.
     */
    data: XOR<ToolTagUpdateInput, ToolTagUncheckedUpdateInput>
    /**
     * Choose, which ToolTag to update.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag updateMany
   */
  export type ToolTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolTags.
     */
    data: XOR<ToolTagUpdateManyMutationInput, ToolTagUncheckedUpdateManyInput>
    /**
     * Filter which ToolTags to update
     */
    where?: ToolTagWhereInput
    /**
     * Limit how many ToolTags to update.
     */
    limit?: number
  }

  /**
   * ToolTag updateManyAndReturn
   */
  export type ToolTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * The data used to update ToolTags.
     */
    data: XOR<ToolTagUpdateManyMutationInput, ToolTagUncheckedUpdateManyInput>
    /**
     * Filter which ToolTags to update
     */
    where?: ToolTagWhereInput
    /**
     * Limit how many ToolTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolTag upsert
   */
  export type ToolTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolTag to update in case it exists.
     */
    where: ToolTagWhereUniqueInput
    /**
     * In case the ToolTag found by the `where` argument doesn't exist, create a new ToolTag with this data.
     */
    create: XOR<ToolTagCreateInput, ToolTagUncheckedCreateInput>
    /**
     * In case the ToolTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolTagUpdateInput, ToolTagUncheckedUpdateInput>
  }

  /**
   * ToolTag delete
   */
  export type ToolTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter which ToolTag to delete.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag deleteMany
   */
  export type ToolTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolTags to delete
     */
    where?: ToolTagWhereInput
    /**
     * Limit how many ToolTags to delete.
     */
    limit?: number
  }

  /**
   * ToolTag without action
   */
  export type ToolTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    toolId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    toolId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    toolId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    toolId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    toolId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    toolId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    toolId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toolId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toolId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toolId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    toolId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "toolId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      toolId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly toolId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isPublic: boolean | null
    createdAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isPublic: boolean | null
    createdAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    isPublic: number
    createdAt: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isPublic?: true
    createdAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isPublic?: true
    createdAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isPublic?: true
    createdAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    userId: string
    name: string
    isPublic: boolean
    createdAt: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isPublic?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Collection$itemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isPublic?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isPublic?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    isPublic?: boolean
    createdAt?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "isPublic" | "createdAt", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Collection$itemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$CollectionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      isPublic: boolean
      createdAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Collection$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly userId: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly isPublic: FieldRef<"Collection", 'Boolean'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection.items
   */
  export type Collection$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    where?: CollectionItemWhereInput
    orderBy?: CollectionItemOrderByWithRelationInput | CollectionItemOrderByWithRelationInput[]
    cursor?: CollectionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionItemScalarFieldEnum | CollectionItemScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model CollectionItem
   */

  export type AggregateCollectionItem = {
    _count: CollectionItemCountAggregateOutputType | null
    _min: CollectionItemMinAggregateOutputType | null
    _max: CollectionItemMaxAggregateOutputType | null
  }

  export type CollectionItemMinAggregateOutputType = {
    collectionId: string | null
    toolId: string | null
  }

  export type CollectionItemMaxAggregateOutputType = {
    collectionId: string | null
    toolId: string | null
  }

  export type CollectionItemCountAggregateOutputType = {
    collectionId: number
    toolId: number
    _all: number
  }


  export type CollectionItemMinAggregateInputType = {
    collectionId?: true
    toolId?: true
  }

  export type CollectionItemMaxAggregateInputType = {
    collectionId?: true
    toolId?: true
  }

  export type CollectionItemCountAggregateInputType = {
    collectionId?: true
    toolId?: true
    _all?: true
  }

  export type CollectionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionItem to aggregate.
     */
    where?: CollectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionItems to fetch.
     */
    orderBy?: CollectionItemOrderByWithRelationInput | CollectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionItems
    **/
    _count?: true | CollectionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionItemMaxAggregateInputType
  }

  export type GetCollectionItemAggregateType<T extends CollectionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionItem[P]>
      : GetScalarType<T[P], AggregateCollectionItem[P]>
  }




  export type CollectionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionItemWhereInput
    orderBy?: CollectionItemOrderByWithAggregationInput | CollectionItemOrderByWithAggregationInput[]
    by: CollectionItemScalarFieldEnum[] | CollectionItemScalarFieldEnum
    having?: CollectionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionItemCountAggregateInputType | true
    _min?: CollectionItemMinAggregateInputType
    _max?: CollectionItemMaxAggregateInputType
  }

  export type CollectionItemGroupByOutputType = {
    collectionId: string
    toolId: string
    _count: CollectionItemCountAggregateOutputType | null
    _min: CollectionItemMinAggregateOutputType | null
    _max: CollectionItemMaxAggregateOutputType | null
  }

  type GetCollectionItemGroupByPayload<T extends CollectionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionItemGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionItemGroupByOutputType[P]>
        }
      >
    >


  export type CollectionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collectionId?: boolean
    toolId?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionItem"]>

  export type CollectionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collectionId?: boolean
    toolId?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionItem"]>

  export type CollectionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collectionId?: boolean
    toolId?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionItem"]>

  export type CollectionItemSelectScalar = {
    collectionId?: boolean
    toolId?: boolean
  }

  export type CollectionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"collectionId" | "toolId", ExtArgs["result"]["collectionItem"]>
  export type CollectionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type CollectionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type CollectionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $CollectionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionItem"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      collectionId: string
      toolId: string
    }, ExtArgs["result"]["collectionItem"]>
    composites: {}
  }

  type CollectionItemGetPayload<S extends boolean | null | undefined | CollectionItemDefaultArgs> = $Result.GetResult<Prisma.$CollectionItemPayload, S>

  type CollectionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionItemCountAggregateInputType | true
    }

  export interface CollectionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionItem'], meta: { name: 'CollectionItem' } }
    /**
     * Find zero or one CollectionItem that matches the filter.
     * @param {CollectionItemFindUniqueArgs} args - Arguments to find a CollectionItem
     * @example
     * // Get one CollectionItem
     * const collectionItem = await prisma.collectionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionItemFindUniqueArgs>(args: SelectSubset<T, CollectionItemFindUniqueArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionItemFindUniqueOrThrowArgs} args - Arguments to find a CollectionItem
     * @example
     * // Get one CollectionItem
     * const collectionItem = await prisma.collectionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionItemFindFirstArgs} args - Arguments to find a CollectionItem
     * @example
     * // Get one CollectionItem
     * const collectionItem = await prisma.collectionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionItemFindFirstArgs>(args?: SelectSubset<T, CollectionItemFindFirstArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionItemFindFirstOrThrowArgs} args - Arguments to find a CollectionItem
     * @example
     * // Get one CollectionItem
     * const collectionItem = await prisma.collectionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionItems
     * const collectionItems = await prisma.collectionItem.findMany()
     * 
     * // Get first 10 CollectionItems
     * const collectionItems = await prisma.collectionItem.findMany({ take: 10 })
     * 
     * // Only select the `collectionId`
     * const collectionItemWithCollectionIdOnly = await prisma.collectionItem.findMany({ select: { collectionId: true } })
     * 
     */
    findMany<T extends CollectionItemFindManyArgs>(args?: SelectSubset<T, CollectionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionItem.
     * @param {CollectionItemCreateArgs} args - Arguments to create a CollectionItem.
     * @example
     * // Create one CollectionItem
     * const CollectionItem = await prisma.collectionItem.create({
     *   data: {
     *     // ... data to create a CollectionItem
     *   }
     * })
     * 
     */
    create<T extends CollectionItemCreateArgs>(args: SelectSubset<T, CollectionItemCreateArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionItems.
     * @param {CollectionItemCreateManyArgs} args - Arguments to create many CollectionItems.
     * @example
     * // Create many CollectionItems
     * const collectionItem = await prisma.collectionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionItemCreateManyArgs>(args?: SelectSubset<T, CollectionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollectionItems and returns the data saved in the database.
     * @param {CollectionItemCreateManyAndReturnArgs} args - Arguments to create many CollectionItems.
     * @example
     * // Create many CollectionItems
     * const collectionItem = await prisma.collectionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollectionItems and only return the `collectionId`
     * const collectionItemWithCollectionIdOnly = await prisma.collectionItem.createManyAndReturn({
     *   select: { collectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollectionItem.
     * @param {CollectionItemDeleteArgs} args - Arguments to delete one CollectionItem.
     * @example
     * // Delete one CollectionItem
     * const CollectionItem = await prisma.collectionItem.delete({
     *   where: {
     *     // ... filter to delete one CollectionItem
     *   }
     * })
     * 
     */
    delete<T extends CollectionItemDeleteArgs>(args: SelectSubset<T, CollectionItemDeleteArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionItem.
     * @param {CollectionItemUpdateArgs} args - Arguments to update one CollectionItem.
     * @example
     * // Update one CollectionItem
     * const collectionItem = await prisma.collectionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionItemUpdateArgs>(args: SelectSubset<T, CollectionItemUpdateArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionItems.
     * @param {CollectionItemDeleteManyArgs} args - Arguments to filter CollectionItems to delete.
     * @example
     * // Delete a few CollectionItems
     * const { count } = await prisma.collectionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionItemDeleteManyArgs>(args?: SelectSubset<T, CollectionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionItems
     * const collectionItem = await prisma.collectionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionItemUpdateManyArgs>(args: SelectSubset<T, CollectionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionItems and returns the data updated in the database.
     * @param {CollectionItemUpdateManyAndReturnArgs} args - Arguments to update many CollectionItems.
     * @example
     * // Update many CollectionItems
     * const collectionItem = await prisma.collectionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollectionItems and only return the `collectionId`
     * const collectionItemWithCollectionIdOnly = await prisma.collectionItem.updateManyAndReturn({
     *   select: { collectionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollectionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollectionItem.
     * @param {CollectionItemUpsertArgs} args - Arguments to update or create a CollectionItem.
     * @example
     * // Update or create a CollectionItem
     * const collectionItem = await prisma.collectionItem.upsert({
     *   create: {
     *     // ... data to create a CollectionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionItem we want to update
     *   }
     * })
     */
    upsert<T extends CollectionItemUpsertArgs>(args: SelectSubset<T, CollectionItemUpsertArgs<ExtArgs>>): Prisma__CollectionItemClient<$Result.GetResult<Prisma.$CollectionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollectionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionItemCountArgs} args - Arguments to filter CollectionItems to count.
     * @example
     * // Count the number of CollectionItems
     * const count = await prisma.collectionItem.count({
     *   where: {
     *     // ... the filter for the CollectionItems we want to count
     *   }
     * })
    **/
    count<T extends CollectionItemCountArgs>(
      args?: Subset<T, CollectionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionItemAggregateArgs>(args: Subset<T, CollectionItemAggregateArgs>): Prisma.PrismaPromise<GetCollectionItemAggregateType<T>>

    /**
     * Group by CollectionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionItemGroupByArgs} args - Group by arguments.
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
      T extends CollectionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionItemGroupByArgs['orderBy'] }
        : { orderBy?: CollectionItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionItem model
   */
  readonly fields: CollectionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CollectionItem model
   */
  interface CollectionItemFieldRefs {
    readonly collectionId: FieldRef<"CollectionItem", 'String'>
    readonly toolId: FieldRef<"CollectionItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CollectionItem findUnique
   */
  export type CollectionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * Filter, which CollectionItem to fetch.
     */
    where: CollectionItemWhereUniqueInput
  }

  /**
   * CollectionItem findUniqueOrThrow
   */
  export type CollectionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * Filter, which CollectionItem to fetch.
     */
    where: CollectionItemWhereUniqueInput
  }

  /**
   * CollectionItem findFirst
   */
  export type CollectionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * Filter, which CollectionItem to fetch.
     */
    where?: CollectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionItems to fetch.
     */
    orderBy?: CollectionItemOrderByWithRelationInput | CollectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionItems.
     */
    cursor?: CollectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionItems.
     */
    distinct?: CollectionItemScalarFieldEnum | CollectionItemScalarFieldEnum[]
  }

  /**
   * CollectionItem findFirstOrThrow
   */
  export type CollectionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * Filter, which CollectionItem to fetch.
     */
    where?: CollectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionItems to fetch.
     */
    orderBy?: CollectionItemOrderByWithRelationInput | CollectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionItems.
     */
    cursor?: CollectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionItems.
     */
    distinct?: CollectionItemScalarFieldEnum | CollectionItemScalarFieldEnum[]
  }

  /**
   * CollectionItem findMany
   */
  export type CollectionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * Filter, which CollectionItems to fetch.
     */
    where?: CollectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionItems to fetch.
     */
    orderBy?: CollectionItemOrderByWithRelationInput | CollectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionItems.
     */
    cursor?: CollectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionItems.
     */
    distinct?: CollectionItemScalarFieldEnum | CollectionItemScalarFieldEnum[]
  }

  /**
   * CollectionItem create
   */
  export type CollectionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionItem.
     */
    data: XOR<CollectionItemCreateInput, CollectionItemUncheckedCreateInput>
  }

  /**
   * CollectionItem createMany
   */
  export type CollectionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionItems.
     */
    data: CollectionItemCreateManyInput | CollectionItemCreateManyInput[]
  }

  /**
   * CollectionItem createManyAndReturn
   */
  export type CollectionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * The data used to create many CollectionItems.
     */
    data: CollectionItemCreateManyInput | CollectionItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionItem update
   */
  export type CollectionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionItem.
     */
    data: XOR<CollectionItemUpdateInput, CollectionItemUncheckedUpdateInput>
    /**
     * Choose, which CollectionItem to update.
     */
    where: CollectionItemWhereUniqueInput
  }

  /**
   * CollectionItem updateMany
   */
  export type CollectionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionItems.
     */
    data: XOR<CollectionItemUpdateManyMutationInput, CollectionItemUncheckedUpdateManyInput>
    /**
     * Filter which CollectionItems to update
     */
    where?: CollectionItemWhereInput
    /**
     * Limit how many CollectionItems to update.
     */
    limit?: number
  }

  /**
   * CollectionItem updateManyAndReturn
   */
  export type CollectionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * The data used to update CollectionItems.
     */
    data: XOR<CollectionItemUpdateManyMutationInput, CollectionItemUncheckedUpdateManyInput>
    /**
     * Filter which CollectionItems to update
     */
    where?: CollectionItemWhereInput
    /**
     * Limit how many CollectionItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionItem upsert
   */
  export type CollectionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionItem to update in case it exists.
     */
    where: CollectionItemWhereUniqueInput
    /**
     * In case the CollectionItem found by the `where` argument doesn't exist, create a new CollectionItem with this data.
     */
    create: XOR<CollectionItemCreateInput, CollectionItemUncheckedCreateInput>
    /**
     * In case the CollectionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionItemUpdateInput, CollectionItemUncheckedUpdateInput>
  }

  /**
   * CollectionItem delete
   */
  export type CollectionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
    /**
     * Filter which CollectionItem to delete.
     */
    where: CollectionItemWhereUniqueInput
  }

  /**
   * CollectionItem deleteMany
   */
  export type CollectionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionItems to delete
     */
    where?: CollectionItemWhereInput
    /**
     * Limit how many CollectionItems to delete.
     */
    limit?: number
  }

  /**
   * CollectionItem without action
   */
  export type CollectionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionItem
     */
    select?: CollectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionItem
     */
    omit?: CollectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionItemInclude<ExtArgs> | null
  }


  /**
   * Model UserNote
   */

  export type AggregateUserNote = {
    _count: UserNoteCountAggregateOutputType | null
    _min: UserNoteMinAggregateOutputType | null
    _max: UserNoteMaxAggregateOutputType | null
  }

  export type UserNoteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    toolId: string | null
    content: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserNoteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    toolId: string | null
    content: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserNoteCountAggregateOutputType = {
    id: number
    userId: number
    toolId: number
    content: number
    isPrivate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserNoteMinAggregateInputType = {
    id?: true
    userId?: true
    toolId?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserNoteMaxAggregateInputType = {
    id?: true
    userId?: true
    toolId?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserNoteCountAggregateInputType = {
    id?: true
    userId?: true
    toolId?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNote to aggregate.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserNotes
    **/
    _count?: true | UserNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserNoteMaxAggregateInputType
  }

  export type GetUserNoteAggregateType<T extends UserNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserNote[P]>
      : GetScalarType<T[P], AggregateUserNote[P]>
  }




  export type UserNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoteWhereInput
    orderBy?: UserNoteOrderByWithAggregationInput | UserNoteOrderByWithAggregationInput[]
    by: UserNoteScalarFieldEnum[] | UserNoteScalarFieldEnum
    having?: UserNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserNoteCountAggregateInputType | true
    _min?: UserNoteMinAggregateInputType
    _max?: UserNoteMaxAggregateInputType
  }

  export type UserNoteGroupByOutputType = {
    id: string
    userId: string
    toolId: string
    content: string
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserNoteCountAggregateOutputType | null
    _min: UserNoteMinAggregateOutputType | null
    _max: UserNoteMaxAggregateOutputType | null
  }

  type GetUserNoteGroupByPayload<T extends UserNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserNoteGroupByOutputType[P]>
            : GetScalarType<T[P], UserNoteGroupByOutputType[P]>
        }
      >
    >


  export type UserNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toolId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNote"]>

  export type UserNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toolId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNote"]>

  export type UserNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toolId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNote"]>

  export type UserNoteSelectScalar = {
    id?: boolean
    userId?: boolean
    toolId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "toolId" | "content" | "isPrivate" | "createdAt" | "updatedAt", ExtArgs["result"]["userNote"]>
  export type UserNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type UserNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type UserNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $UserNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserNote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      toolId: string
      content: string
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userNote"]>
    composites: {}
  }

  type UserNoteGetPayload<S extends boolean | null | undefined | UserNoteDefaultArgs> = $Result.GetResult<Prisma.$UserNotePayload, S>

  type UserNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserNoteCountAggregateInputType | true
    }

  export interface UserNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserNote'], meta: { name: 'UserNote' } }
    /**
     * Find zero or one UserNote that matches the filter.
     * @param {UserNoteFindUniqueArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserNoteFindUniqueArgs>(args: SelectSubset<T, UserNoteFindUniqueArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserNoteFindUniqueOrThrowArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteFindFirstArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserNoteFindFirstArgs>(args?: SelectSubset<T, UserNoteFindFirstArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteFindFirstOrThrowArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserNotes
     * const userNotes = await prisma.userNote.findMany()
     * 
     * // Get first 10 UserNotes
     * const userNotes = await prisma.userNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userNoteWithIdOnly = await prisma.userNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserNoteFindManyArgs>(args?: SelectSubset<T, UserNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserNote.
     * @param {UserNoteCreateArgs} args - Arguments to create a UserNote.
     * @example
     * // Create one UserNote
     * const UserNote = await prisma.userNote.create({
     *   data: {
     *     // ... data to create a UserNote
     *   }
     * })
     * 
     */
    create<T extends UserNoteCreateArgs>(args: SelectSubset<T, UserNoteCreateArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserNotes.
     * @param {UserNoteCreateManyArgs} args - Arguments to create many UserNotes.
     * @example
     * // Create many UserNotes
     * const userNote = await prisma.userNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserNoteCreateManyArgs>(args?: SelectSubset<T, UserNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserNotes and returns the data saved in the database.
     * @param {UserNoteCreateManyAndReturnArgs} args - Arguments to create many UserNotes.
     * @example
     * // Create many UserNotes
     * const userNote = await prisma.userNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserNotes and only return the `id`
     * const userNoteWithIdOnly = await prisma.userNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserNote.
     * @param {UserNoteDeleteArgs} args - Arguments to delete one UserNote.
     * @example
     * // Delete one UserNote
     * const UserNote = await prisma.userNote.delete({
     *   where: {
     *     // ... filter to delete one UserNote
     *   }
     * })
     * 
     */
    delete<T extends UserNoteDeleteArgs>(args: SelectSubset<T, UserNoteDeleteArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserNote.
     * @param {UserNoteUpdateArgs} args - Arguments to update one UserNote.
     * @example
     * // Update one UserNote
     * const userNote = await prisma.userNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserNoteUpdateArgs>(args: SelectSubset<T, UserNoteUpdateArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserNotes.
     * @param {UserNoteDeleteManyArgs} args - Arguments to filter UserNotes to delete.
     * @example
     * // Delete a few UserNotes
     * const { count } = await prisma.userNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserNoteDeleteManyArgs>(args?: SelectSubset<T, UserNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserNotes
     * const userNote = await prisma.userNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserNoteUpdateManyArgs>(args: SelectSubset<T, UserNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserNotes and returns the data updated in the database.
     * @param {UserNoteUpdateManyAndReturnArgs} args - Arguments to update many UserNotes.
     * @example
     * // Update many UserNotes
     * const userNote = await prisma.userNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserNotes and only return the `id`
     * const userNoteWithIdOnly = await prisma.userNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, UserNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserNote.
     * @param {UserNoteUpsertArgs} args - Arguments to update or create a UserNote.
     * @example
     * // Update or create a UserNote
     * const userNote = await prisma.userNote.upsert({
     *   create: {
     *     // ... data to create a UserNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserNote we want to update
     *   }
     * })
     */
    upsert<T extends UserNoteUpsertArgs>(args: SelectSubset<T, UserNoteUpsertArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteCountArgs} args - Arguments to filter UserNotes to count.
     * @example
     * // Count the number of UserNotes
     * const count = await prisma.userNote.count({
     *   where: {
     *     // ... the filter for the UserNotes we want to count
     *   }
     * })
    **/
    count<T extends UserNoteCountArgs>(
      args?: Subset<T, UserNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserNoteAggregateArgs>(args: Subset<T, UserNoteAggregateArgs>): Prisma.PrismaPromise<GetUserNoteAggregateType<T>>

    /**
     * Group by UserNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteGroupByArgs} args - Group by arguments.
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
      T extends UserNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserNoteGroupByArgs['orderBy'] }
        : { orderBy?: UserNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserNote model
   */
  readonly fields: UserNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserNote model
   */
  interface UserNoteFieldRefs {
    readonly id: FieldRef<"UserNote", 'String'>
    readonly userId: FieldRef<"UserNote", 'String'>
    readonly toolId: FieldRef<"UserNote", 'String'>
    readonly content: FieldRef<"UserNote", 'String'>
    readonly isPrivate: FieldRef<"UserNote", 'Boolean'>
    readonly createdAt: FieldRef<"UserNote", 'DateTime'>
    readonly updatedAt: FieldRef<"UserNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserNote findUnique
   */
  export type UserNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote findUniqueOrThrow
   */
  export type UserNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote findFirst
   */
  export type UserNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotes.
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotes.
     */
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * UserNote findFirstOrThrow
   */
  export type UserNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotes.
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotes.
     */
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * UserNote findMany
   */
  export type UserNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNotes to fetch.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserNotes.
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotes.
     */
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * UserNote create
   */
  export type UserNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserNote.
     */
    data: XOR<UserNoteCreateInput, UserNoteUncheckedCreateInput>
  }

  /**
   * UserNote createMany
   */
  export type UserNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserNotes.
     */
    data: UserNoteCreateManyInput | UserNoteCreateManyInput[]
  }

  /**
   * UserNote createManyAndReturn
   */
  export type UserNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * The data used to create many UserNotes.
     */
    data: UserNoteCreateManyInput | UserNoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserNote update
   */
  export type UserNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserNote.
     */
    data: XOR<UserNoteUpdateInput, UserNoteUncheckedUpdateInput>
    /**
     * Choose, which UserNote to update.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote updateMany
   */
  export type UserNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserNotes.
     */
    data: XOR<UserNoteUpdateManyMutationInput, UserNoteUncheckedUpdateManyInput>
    /**
     * Filter which UserNotes to update
     */
    where?: UserNoteWhereInput
    /**
     * Limit how many UserNotes to update.
     */
    limit?: number
  }

  /**
   * UserNote updateManyAndReturn
   */
  export type UserNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * The data used to update UserNotes.
     */
    data: XOR<UserNoteUpdateManyMutationInput, UserNoteUncheckedUpdateManyInput>
    /**
     * Filter which UserNotes to update
     */
    where?: UserNoteWhereInput
    /**
     * Limit how many UserNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserNote upsert
   */
  export type UserNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserNote to update in case it exists.
     */
    where: UserNoteWhereUniqueInput
    /**
     * In case the UserNote found by the `where` argument doesn't exist, create a new UserNote with this data.
     */
    create: XOR<UserNoteCreateInput, UserNoteUncheckedCreateInput>
    /**
     * In case the UserNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserNoteUpdateInput, UserNoteUncheckedUpdateInput>
  }

  /**
   * UserNote delete
   */
  export type UserNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter which UserNote to delete.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote deleteMany
   */
  export type UserNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNotes to delete
     */
    where?: UserNoteWhereInput
    /**
     * Limit how many UserNotes to delete.
     */
    limit?: number
  }

  /**
   * UserNote without action
   */
  export type UserNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    toolId: string | null
    userId: string | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    toolId: string | null
    userId: string | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    toolId: number
    userId: number
    field: number
    oldValue: number
    newValue: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    toolId?: true
    userId?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    toolId?: true
    userId?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    toolId?: true
    userId?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    toolId: string
    userId: string | null
    field: string
    oldValue: string | null
    newValue: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    userId?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    userId?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    userId?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    toolId?: boolean
    userId?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toolId" | "userId" | "field" | "oldValue" | "newValue" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      toolId: string
      userId: string | null
      field: string
      oldValue: string | null
      newValue: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly toolId: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly field: FieldRef<"AuditLog", 'String'>
    readonly oldValue: FieldRef<"AuditLog", 'String'>
    readonly newValue: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    iconUrl: 'iconUrl'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubcategoryScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name'
  };

  export type SubcategoryScalarFieldEnum = (typeof SubcategoryScalarFieldEnum)[keyof typeof SubcategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ToolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    url: 'url',
    categoryId: 'categoryId',
    subcategoryId: 'subcategoryId',
    shortDesc: 'shortDesc',
    longDesc: 'longDesc',
    aiSummary: 'aiSummary',
    developer: 'developer',
    status: 'status',
    businessModel: 'businessModel',
    startingPrice: 'startingPrice',
    hasApi: 'hasApi',
    docsUrl: 'docsUrl',
    githubUrl: 'githubUrl',
    logoUrl: 'logoUrl',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum]


  export const ToolTagScalarFieldEnum: {
    toolId: 'toolId',
    tagId: 'tagId'
  };

  export type ToolTagScalarFieldEnum = (typeof ToolTagScalarFieldEnum)[keyof typeof ToolTagScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    toolId: 'toolId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    isPublic: 'isPublic',
    createdAt: 'createdAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const CollectionItemScalarFieldEnum: {
    collectionId: 'collectionId',
    toolId: 'toolId'
  };

  export type CollectionItemScalarFieldEnum = (typeof CollectionItemScalarFieldEnum)[keyof typeof CollectionItemScalarFieldEnum]


  export const UserNoteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    toolId: 'toolId',
    content: 'content',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserNoteScalarFieldEnum = (typeof UserNoteScalarFieldEnum)[keyof typeof UserNoteScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    toolId: 'toolId',
    userId: 'userId',
    field: 'field',
    oldValue: 'oldValue',
    newValue: 'newValue',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'BusinessModel'
   */
  export type EnumBusinessModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessModel'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tools?: ToolListRelationFilter
    favorites?: FavoriteListRelationFilter
    collections?: CollectionListRelationFilter
    userNotes?: UserNoteListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tools?: ToolOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
    userNotes?: UserNoteOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tools?: ToolListRelationFilter
    favorites?: FavoriteListRelationFilter
    collections?: CollectionListRelationFilter
    userNotes?: UserNoteListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    iconUrl?: StringNullableFilter<"Category"> | string | null
    subcategories?: SubcategoryListRelationFilter
    tools?: ToolListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    subcategories?: SubcategoryOrderByRelationAggregateInput
    tools?: ToolOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    iconUrl?: StringNullableFilter<"Category"> | string | null
    subcategories?: SubcategoryListRelationFilter
    tools?: ToolListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    iconUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type SubcategoryWhereInput = {
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    id?: StringFilter<"Subcategory"> | string
    categoryId?: StringFilter<"Subcategory"> | string
    name?: StringFilter<"Subcategory"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tools?: ToolListRelationFilter
  }

  export type SubcategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    category?: CategoryOrderByWithRelationInput
    tools?: ToolOrderByRelationAggregateInput
  }

  export type SubcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    categoryId?: StringFilter<"Subcategory"> | string
    name?: StringFilter<"Subcategory"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tools?: ToolListRelationFilter
  }, "id">

  export type SubcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    _count?: SubcategoryCountOrderByAggregateInput
    _max?: SubcategoryMaxOrderByAggregateInput
    _min?: SubcategoryMinOrderByAggregateInput
  }

  export type SubcategoryScalarWhereWithAggregatesInput = {
    AND?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    OR?: SubcategoryScalarWhereWithAggregatesInput[]
    NOT?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subcategory"> | string
    categoryId?: StringWithAggregatesFilter<"Subcategory"> | string
    name?: StringWithAggregatesFilter<"Subcategory"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    tools?: ToolTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tools?: ToolTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    tools?: ToolTagListRelationFilter
  }, "id" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type ToolWhereInput = {
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    id?: StringFilter<"Tool"> | string
    name?: StringFilter<"Tool"> | string
    slug?: StringFilter<"Tool"> | string
    url?: StringFilter<"Tool"> | string
    categoryId?: StringNullableFilter<"Tool"> | string | null
    subcategoryId?: StringNullableFilter<"Tool"> | string | null
    shortDesc?: StringNullableFilter<"Tool"> | string | null
    longDesc?: StringNullableFilter<"Tool"> | string | null
    aiSummary?: StringNullableFilter<"Tool"> | string | null
    developer?: StringNullableFilter<"Tool"> | string | null
    status?: EnumStatusFilter<"Tool"> | $Enums.Status
    businessModel?: EnumBusinessModelFilter<"Tool"> | $Enums.BusinessModel
    startingPrice?: StringNullableFilter<"Tool"> | string | null
    hasApi?: BoolFilter<"Tool"> | boolean
    docsUrl?: StringNullableFilter<"Tool"> | string | null
    githubUrl?: StringNullableFilter<"Tool"> | string | null
    logoUrl?: StringNullableFilter<"Tool"> | string | null
    createdById?: StringNullableFilter<"Tool"> | string | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subcategory?: XOR<SubcategoryNullableScalarRelationFilter, SubcategoryWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tags?: ToolTagListRelationFilter
    favorites?: FavoriteListRelationFilter
    collectionItems?: CollectionItemListRelationFilter
    userNotes?: UserNoteListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type ToolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subcategoryId?: SortOrderInput | SortOrder
    shortDesc?: SortOrderInput | SortOrder
    longDesc?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    developer?: SortOrderInput | SortOrder
    status?: SortOrder
    businessModel?: SortOrder
    startingPrice?: SortOrderInput | SortOrder
    hasApi?: SortOrder
    docsUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    subcategory?: SubcategoryOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    tags?: ToolTagOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    collectionItems?: CollectionItemOrderByRelationAggregateInput
    userNotes?: UserNoteOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type ToolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    name?: StringFilter<"Tool"> | string
    url?: StringFilter<"Tool"> | string
    categoryId?: StringNullableFilter<"Tool"> | string | null
    subcategoryId?: StringNullableFilter<"Tool"> | string | null
    shortDesc?: StringNullableFilter<"Tool"> | string | null
    longDesc?: StringNullableFilter<"Tool"> | string | null
    aiSummary?: StringNullableFilter<"Tool"> | string | null
    developer?: StringNullableFilter<"Tool"> | string | null
    status?: EnumStatusFilter<"Tool"> | $Enums.Status
    businessModel?: EnumBusinessModelFilter<"Tool"> | $Enums.BusinessModel
    startingPrice?: StringNullableFilter<"Tool"> | string | null
    hasApi?: BoolFilter<"Tool"> | boolean
    docsUrl?: StringNullableFilter<"Tool"> | string | null
    githubUrl?: StringNullableFilter<"Tool"> | string | null
    logoUrl?: StringNullableFilter<"Tool"> | string | null
    createdById?: StringNullableFilter<"Tool"> | string | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subcategory?: XOR<SubcategoryNullableScalarRelationFilter, SubcategoryWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tags?: ToolTagListRelationFilter
    favorites?: FavoriteListRelationFilter
    collectionItems?: CollectionItemListRelationFilter
    userNotes?: UserNoteListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "slug">

  export type ToolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subcategoryId?: SortOrderInput | SortOrder
    shortDesc?: SortOrderInput | SortOrder
    longDesc?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    developer?: SortOrderInput | SortOrder
    status?: SortOrder
    businessModel?: SortOrder
    startingPrice?: SortOrderInput | SortOrder
    hasApi?: SortOrder
    docsUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ToolCountOrderByAggregateInput
    _max?: ToolMaxOrderByAggregateInput
    _min?: ToolMinOrderByAggregateInput
  }

  export type ToolScalarWhereWithAggregatesInput = {
    AND?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    OR?: ToolScalarWhereWithAggregatesInput[]
    NOT?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tool"> | string
    name?: StringWithAggregatesFilter<"Tool"> | string
    slug?: StringWithAggregatesFilter<"Tool"> | string
    url?: StringWithAggregatesFilter<"Tool"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    subcategoryId?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    shortDesc?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    longDesc?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    aiSummary?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    developer?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Tool"> | $Enums.Status
    businessModel?: EnumBusinessModelWithAggregatesFilter<"Tool"> | $Enums.BusinessModel
    startingPrice?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    hasApi?: BoolWithAggregatesFilter<"Tool"> | boolean
    docsUrl?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tool"> | Date | string
  }

  export type ToolTagWhereInput = {
    AND?: ToolTagWhereInput | ToolTagWhereInput[]
    OR?: ToolTagWhereInput[]
    NOT?: ToolTagWhereInput | ToolTagWhereInput[]
    toolId?: StringFilter<"ToolTag"> | string
    tagId?: StringFilter<"ToolTag"> | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type ToolTagOrderByWithRelationInput = {
    toolId?: SortOrder
    tagId?: SortOrder
    tool?: ToolOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ToolTagWhereUniqueInput = Prisma.AtLeast<{
    toolId_tagId?: ToolTagToolIdTagIdCompoundUniqueInput
    AND?: ToolTagWhereInput | ToolTagWhereInput[]
    OR?: ToolTagWhereInput[]
    NOT?: ToolTagWhereInput | ToolTagWhereInput[]
    toolId?: StringFilter<"ToolTag"> | string
    tagId?: StringFilter<"ToolTag"> | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "toolId_tagId">

  export type ToolTagOrderByWithAggregationInput = {
    toolId?: SortOrder
    tagId?: SortOrder
    _count?: ToolTagCountOrderByAggregateInput
    _max?: ToolTagMaxOrderByAggregateInput
    _min?: ToolTagMinOrderByAggregateInput
  }

  export type ToolTagScalarWhereWithAggregatesInput = {
    AND?: ToolTagScalarWhereWithAggregatesInput | ToolTagScalarWhereWithAggregatesInput[]
    OR?: ToolTagScalarWhereWithAggregatesInput[]
    NOT?: ToolTagScalarWhereWithAggregatesInput | ToolTagScalarWhereWithAggregatesInput[]
    toolId?: StringWithAggregatesFilter<"ToolTag"> | string
    tagId?: StringWithAggregatesFilter<"ToolTag"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    toolId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tool?: ToolOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_toolId?: FavoriteUserIdToolIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    toolId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "id" | "userId_toolId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    toolId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    userId?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    isPublic?: BoolFilter<"Collection"> | boolean
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CollectionItemListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: CollectionItemOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    userId?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    isPublic?: BoolFilter<"Collection"> | boolean
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CollectionItemListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    userId?: StringWithAggregatesFilter<"Collection"> | string
    name?: StringWithAggregatesFilter<"Collection"> | string
    isPublic?: BoolWithAggregatesFilter<"Collection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type CollectionItemWhereInput = {
    AND?: CollectionItemWhereInput | CollectionItemWhereInput[]
    OR?: CollectionItemWhereInput[]
    NOT?: CollectionItemWhereInput | CollectionItemWhereInput[]
    collectionId?: StringFilter<"CollectionItem"> | string
    toolId?: StringFilter<"CollectionItem"> | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type CollectionItemOrderByWithRelationInput = {
    collectionId?: SortOrder
    toolId?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    tool?: ToolOrderByWithRelationInput
  }

  export type CollectionItemWhereUniqueInput = Prisma.AtLeast<{
    collectionId_toolId?: CollectionItemCollectionIdToolIdCompoundUniqueInput
    AND?: CollectionItemWhereInput | CollectionItemWhereInput[]
    OR?: CollectionItemWhereInput[]
    NOT?: CollectionItemWhereInput | CollectionItemWhereInput[]
    collectionId?: StringFilter<"CollectionItem"> | string
    toolId?: StringFilter<"CollectionItem"> | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "collectionId_toolId">

  export type CollectionItemOrderByWithAggregationInput = {
    collectionId?: SortOrder
    toolId?: SortOrder
    _count?: CollectionItemCountOrderByAggregateInput
    _max?: CollectionItemMaxOrderByAggregateInput
    _min?: CollectionItemMinOrderByAggregateInput
  }

  export type CollectionItemScalarWhereWithAggregatesInput = {
    AND?: CollectionItemScalarWhereWithAggregatesInput | CollectionItemScalarWhereWithAggregatesInput[]
    OR?: CollectionItemScalarWhereWithAggregatesInput[]
    NOT?: CollectionItemScalarWhereWithAggregatesInput | CollectionItemScalarWhereWithAggregatesInput[]
    collectionId?: StringWithAggregatesFilter<"CollectionItem"> | string
    toolId?: StringWithAggregatesFilter<"CollectionItem"> | string
  }

  export type UserNoteWhereInput = {
    AND?: UserNoteWhereInput | UserNoteWhereInput[]
    OR?: UserNoteWhereInput[]
    NOT?: UserNoteWhereInput | UserNoteWhereInput[]
    id?: StringFilter<"UserNote"> | string
    userId?: StringFilter<"UserNote"> | string
    toolId?: StringFilter<"UserNote"> | string
    content?: StringFilter<"UserNote"> | string
    isPrivate?: BoolFilter<"UserNote"> | boolean
    createdAt?: DateTimeFilter<"UserNote"> | Date | string
    updatedAt?: DateTimeFilter<"UserNote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type UserNoteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tool?: ToolOrderByWithRelationInput
  }

  export type UserNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserNoteWhereInput | UserNoteWhereInput[]
    OR?: UserNoteWhereInput[]
    NOT?: UserNoteWhereInput | UserNoteWhereInput[]
    userId?: StringFilter<"UserNote"> | string
    toolId?: StringFilter<"UserNote"> | string
    content?: StringFilter<"UserNote"> | string
    isPrivate?: BoolFilter<"UserNote"> | boolean
    createdAt?: DateTimeFilter<"UserNote"> | Date | string
    updatedAt?: DateTimeFilter<"UserNote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "id">

  export type UserNoteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserNoteCountOrderByAggregateInput
    _max?: UserNoteMaxOrderByAggregateInput
    _min?: UserNoteMinOrderByAggregateInput
  }

  export type UserNoteScalarWhereWithAggregatesInput = {
    AND?: UserNoteScalarWhereWithAggregatesInput | UserNoteScalarWhereWithAggregatesInput[]
    OR?: UserNoteScalarWhereWithAggregatesInput[]
    NOT?: UserNoteScalarWhereWithAggregatesInput | UserNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserNote"> | string
    userId?: StringWithAggregatesFilter<"UserNote"> | string
    toolId?: StringWithAggregatesFilter<"UserNote"> | string
    content?: StringWithAggregatesFilter<"UserNote"> | string
    isPrivate?: BoolWithAggregatesFilter<"UserNote"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserNote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserNote"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    toolId?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    field?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    toolId?: SortOrder
    userId?: SortOrderInput | SortOrder
    field?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tool?: ToolOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    toolId?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    field?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    toolId?: SortOrder
    userId?: SortOrderInput | SortOrder
    field?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    toolId?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    field?: StringWithAggregatesFilter<"AuditLog"> | string
    oldValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    userNotes?: UserNoteCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    iconUrl?: string | null
    subcategories?: SubcategoryCreateNestedManyWithoutCategoryInput
    tools?: ToolCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    iconUrl?: string | null
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
    tools?: ToolUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: SubcategoryUpdateManyWithoutCategoryNestedInput
    tools?: ToolUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
    tools?: ToolUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    iconUrl?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubcategoryCreateInput = {
    id?: string
    name: string
    category: CategoryCreateNestedOneWithoutSubcategoriesInput
    tools?: ToolCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateInput = {
    id?: string
    categoryId: string
    name: string
    tools?: ToolUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    tools?: ToolUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tools?: ToolUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryCreateManyInput = {
    id?: string
    categoryId: string
    name: string
  }

  export type SubcategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    tools?: ToolTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    tools?: ToolTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tools?: ToolTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tools?: ToolTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ToolCreateInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCreateManyInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolTagCreateInput = {
    tool: ToolCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutToolsInput
  }

  export type ToolTagUncheckedCreateInput = {
    toolId: string
    tagId: string
  }

  export type ToolTagUpdateInput = {
    tool?: ToolUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutToolsNestedInput
  }

  export type ToolTagUncheckedUpdateInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagCreateManyInput = {
    toolId: string
    tagId: string
  }

  export type ToolTagUpdateManyMutationInput = {

  }

  export type ToolTagUncheckedUpdateManyInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    tool: ToolCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    toolId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    tool?: ToolUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    toolId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {
    id?: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    items?: CollectionItemCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
    items?: CollectionItemUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    items?: CollectionItemUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CollectionItemUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    userId: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionItemCreateInput = {
    collection: CollectionCreateNestedOneWithoutItemsInput
    tool: ToolCreateNestedOneWithoutCollectionItemsInput
  }

  export type CollectionItemUncheckedCreateInput = {
    collectionId: string
    toolId: string
  }

  export type CollectionItemUpdateInput = {
    collection?: CollectionUpdateOneRequiredWithoutItemsNestedInput
    tool?: ToolUpdateOneRequiredWithoutCollectionItemsNestedInput
  }

  export type CollectionItemUncheckedUpdateInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionItemCreateManyInput = {
    collectionId: string
    toolId: string
  }

  export type CollectionItemUpdateManyMutationInput = {

  }

  export type CollectionItemUncheckedUpdateManyInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type UserNoteCreateInput = {
    id?: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserNotesInput
    tool: ToolCreateNestedOneWithoutUserNotesInput
  }

  export type UserNoteUncheckedCreateInput = {
    id?: string
    userId: string
    toolId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserNotesNestedInput
    tool?: ToolUpdateOneRequiredWithoutUserNotesNestedInput
  }

  export type UserNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteCreateManyInput = {
    id?: string
    userId: string
    toolId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutAuditLogsInput
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    toolId: string
    userId?: string | null
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutAuditLogsNestedInput
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    toolId: string
    userId?: string | null
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ToolListRelationFilter = {
    every?: ToolWhereInput
    some?: ToolWhereInput
    none?: ToolWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type UserNoteListRelationFilter = {
    every?: UserNoteWhereInput
    some?: UserNoteWhereInput
    none?: UserNoteWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ToolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SubcategoryListRelationFilter = {
    every?: SubcategoryWhereInput
    some?: SubcategoryWhereInput
    none?: SubcategoryWhereInput
  }

  export type SubcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    iconUrl?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    iconUrl?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    iconUrl?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SubcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type SubcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type SubcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type ToolTagListRelationFilter = {
    every?: ToolTagWhereInput
    some?: ToolTagWhereInput
    none?: ToolTagWhereInput
  }

  export type ToolTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumBusinessModelFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessModel | EnumBusinessModelFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessModel[]
    notIn?: $Enums.BusinessModel[]
    not?: NestedEnumBusinessModelFilter<$PrismaModel> | $Enums.BusinessModel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type SubcategoryNullableScalarRelationFilter = {
    is?: SubcategoryWhereInput | null
    isNot?: SubcategoryWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CollectionItemListRelationFilter = {
    every?: CollectionItemWhereInput
    some?: CollectionItemWhereInput
    none?: CollectionItemWhereInput
  }

  export type CollectionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    aiSummary?: SortOrder
    developer?: SortOrder
    status?: SortOrder
    businessModel?: SortOrder
    startingPrice?: SortOrder
    hasApi?: SortOrder
    docsUrl?: SortOrder
    githubUrl?: SortOrder
    logoUrl?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    aiSummary?: SortOrder
    developer?: SortOrder
    status?: SortOrder
    businessModel?: SortOrder
    startingPrice?: SortOrder
    hasApi?: SortOrder
    docsUrl?: SortOrder
    githubUrl?: SortOrder
    logoUrl?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    aiSummary?: SortOrder
    developer?: SortOrder
    status?: SortOrder
    businessModel?: SortOrder
    startingPrice?: SortOrder
    hasApi?: SortOrder
    docsUrl?: SortOrder
    githubUrl?: SortOrder
    logoUrl?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumBusinessModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessModel | EnumBusinessModelFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessModel[]
    notIn?: $Enums.BusinessModel[]
    not?: NestedEnumBusinessModelWithAggregatesFilter<$PrismaModel> | $Enums.BusinessModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessModelFilter<$PrismaModel>
    _max?: NestedEnumBusinessModelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ToolScalarRelationFilter = {
    is?: ToolWhereInput
    isNot?: ToolWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type ToolTagToolIdTagIdCompoundUniqueInput = {
    toolId: string
    tagId: string
  }

  export type ToolTagCountOrderByAggregateInput = {
    toolId?: SortOrder
    tagId?: SortOrder
  }

  export type ToolTagMaxOrderByAggregateInput = {
    toolId?: SortOrder
    tagId?: SortOrder
  }

  export type ToolTagMinOrderByAggregateInput = {
    toolId?: SortOrder
    tagId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoriteUserIdToolIdCompoundUniqueInput = {
    userId: string
    toolId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type CollectionItemCollectionIdToolIdCompoundUniqueInput = {
    collectionId: string
    toolId: string
  }

  export type CollectionItemCountOrderByAggregateInput = {
    collectionId?: SortOrder
    toolId?: SortOrder
  }

  export type CollectionItemMaxOrderByAggregateInput = {
    collectionId?: SortOrder
    toolId?: SortOrder
  }

  export type CollectionItemMinOrderByAggregateInput = {
    collectionId?: SortOrder
    toolId?: SortOrder
  }

  export type UserNoteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNoteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toolId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    userId?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    userId?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    userId?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ToolCreateWithoutCreatedByInput, ToolUncheckedCreateWithoutCreatedByInput> | ToolCreateWithoutCreatedByInput[] | ToolUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCreatedByInput | ToolCreateOrConnectWithoutCreatedByInput[]
    createMany?: ToolCreateManyCreatedByInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type UserNoteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ToolCreateWithoutCreatedByInput, ToolUncheckedCreateWithoutCreatedByInput> | ToolCreateWithoutCreatedByInput[] | ToolUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCreatedByInput | ToolCreateOrConnectWithoutCreatedByInput[]
    createMany?: ToolCreateManyCreatedByInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type UserNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ToolUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ToolCreateWithoutCreatedByInput, ToolUncheckedCreateWithoutCreatedByInput> | ToolCreateWithoutCreatedByInput[] | ToolUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCreatedByInput | ToolCreateOrConnectWithoutCreatedByInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCreatedByInput | ToolUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ToolCreateManyCreatedByInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCreatedByInput | ToolUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCreatedByInput | ToolUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type UserNoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    upsert?: UserNoteUpsertWithWhereUniqueWithoutUserInput | UserNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    set?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    disconnect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    delete?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    update?: UserNoteUpdateWithWhereUniqueWithoutUserInput | UserNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNoteUpdateManyWithWhereWithoutUserInput | UserNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ToolCreateWithoutCreatedByInput, ToolUncheckedCreateWithoutCreatedByInput> | ToolCreateWithoutCreatedByInput[] | ToolUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCreatedByInput | ToolCreateOrConnectWithoutCreatedByInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCreatedByInput | ToolUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ToolCreateManyCreatedByInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCreatedByInput | ToolUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCreatedByInput | ToolUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type UserNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    upsert?: UserNoteUpsertWithWhereUniqueWithoutUserInput | UserNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    set?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    disconnect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    delete?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    update?: UserNoteUpdateWithWhereUniqueWithoutUserInput | UserNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNoteUpdateManyWithWhereWithoutUserInput | UserNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SubcategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type ToolCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ToolCreateWithoutCategoryInput, ToolUncheckedCreateWithoutCategoryInput> | ToolCreateWithoutCategoryInput[] | ToolUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCategoryInput | ToolCreateOrConnectWithoutCategoryInput[]
    createMany?: ToolCreateManyCategoryInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type SubcategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ToolCreateWithoutCategoryInput, ToolUncheckedCreateWithoutCategoryInput> | ToolCreateWithoutCategoryInput[] | ToolUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCategoryInput | ToolCreateOrConnectWithoutCategoryInput[]
    createMany?: ToolCreateManyCategoryInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type SubcategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type ToolUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ToolCreateWithoutCategoryInput, ToolUncheckedCreateWithoutCategoryInput> | ToolCreateWithoutCategoryInput[] | ToolUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCategoryInput | ToolCreateOrConnectWithoutCategoryInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCategoryInput | ToolUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ToolCreateManyCategoryInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCategoryInput | ToolUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCategoryInput | ToolUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ToolCreateWithoutCategoryInput, ToolUncheckedCreateWithoutCategoryInput> | ToolCreateWithoutCategoryInput[] | ToolUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCategoryInput | ToolCreateOrConnectWithoutCategoryInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCategoryInput | ToolUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ToolCreateManyCategoryInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCategoryInput | ToolUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCategoryInput | ToolUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ToolCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<ToolCreateWithoutSubcategoryInput, ToolUncheckedCreateWithoutSubcategoryInput> | ToolCreateWithoutSubcategoryInput[] | ToolUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSubcategoryInput | ToolCreateOrConnectWithoutSubcategoryInput[]
    createMany?: ToolCreateManySubcategoryInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<ToolCreateWithoutSubcategoryInput, ToolUncheckedCreateWithoutSubcategoryInput> | ToolCreateWithoutSubcategoryInput[] | ToolUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSubcategoryInput | ToolCreateOrConnectWithoutSubcategoryInput[]
    createMany?: ToolCreateManySubcategoryInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: CategoryUpsertWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubcategoriesInput, CategoryUpdateWithoutSubcategoriesInput>, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type ToolUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<ToolCreateWithoutSubcategoryInput, ToolUncheckedCreateWithoutSubcategoryInput> | ToolCreateWithoutSubcategoryInput[] | ToolUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSubcategoryInput | ToolCreateOrConnectWithoutSubcategoryInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutSubcategoryInput | ToolUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: ToolCreateManySubcategoryInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutSubcategoryInput | ToolUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutSubcategoryInput | ToolUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<ToolCreateWithoutSubcategoryInput, ToolUncheckedCreateWithoutSubcategoryInput> | ToolCreateWithoutSubcategoryInput[] | ToolUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSubcategoryInput | ToolCreateOrConnectWithoutSubcategoryInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutSubcategoryInput | ToolUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: ToolCreateManySubcategoryInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutSubcategoryInput | ToolUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutSubcategoryInput | ToolUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type ToolTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ToolTagCreateWithoutTagInput, ToolTagUncheckedCreateWithoutTagInput> | ToolTagCreateWithoutTagInput[] | ToolTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutTagInput | ToolTagCreateOrConnectWithoutTagInput[]
    createMany?: ToolTagCreateManyTagInputEnvelope
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
  }

  export type ToolTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ToolTagCreateWithoutTagInput, ToolTagUncheckedCreateWithoutTagInput> | ToolTagCreateWithoutTagInput[] | ToolTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutTagInput | ToolTagCreateOrConnectWithoutTagInput[]
    createMany?: ToolTagCreateManyTagInputEnvelope
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
  }

  export type ToolTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ToolTagCreateWithoutTagInput, ToolTagUncheckedCreateWithoutTagInput> | ToolTagCreateWithoutTagInput[] | ToolTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutTagInput | ToolTagCreateOrConnectWithoutTagInput[]
    upsert?: ToolTagUpsertWithWhereUniqueWithoutTagInput | ToolTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ToolTagCreateManyTagInputEnvelope
    set?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    disconnect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    delete?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    update?: ToolTagUpdateWithWhereUniqueWithoutTagInput | ToolTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ToolTagUpdateManyWithWhereWithoutTagInput | ToolTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
  }

  export type ToolTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ToolTagCreateWithoutTagInput, ToolTagUncheckedCreateWithoutTagInput> | ToolTagCreateWithoutTagInput[] | ToolTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutTagInput | ToolTagCreateOrConnectWithoutTagInput[]
    upsert?: ToolTagUpsertWithWhereUniqueWithoutTagInput | ToolTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ToolTagCreateManyTagInputEnvelope
    set?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    disconnect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    delete?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    update?: ToolTagUpdateWithWhereUniqueWithoutTagInput | ToolTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ToolTagUpdateManyWithWhereWithoutTagInput | ToolTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutToolsInput = {
    create?: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutToolsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SubcategoryCreateNestedOneWithoutToolsInput = {
    create?: XOR<SubcategoryCreateWithoutToolsInput, SubcategoryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutToolsInput
    connect?: SubcategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutToolsInput = {
    create?: XOR<UserCreateWithoutToolsInput, UserUncheckedCreateWithoutToolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToolsInput
    connect?: UserWhereUniqueInput
  }

  export type ToolTagCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutToolInput = {
    create?: XOR<FavoriteCreateWithoutToolInput, FavoriteUncheckedCreateWithoutToolInput> | FavoriteCreateWithoutToolInput[] | FavoriteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutToolInput | FavoriteCreateOrConnectWithoutToolInput[]
    createMany?: FavoriteCreateManyToolInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type CollectionItemCreateNestedManyWithoutToolInput = {
    create?: XOR<CollectionItemCreateWithoutToolInput, CollectionItemUncheckedCreateWithoutToolInput> | CollectionItemCreateWithoutToolInput[] | CollectionItemUncheckedCreateWithoutToolInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutToolInput | CollectionItemCreateOrConnectWithoutToolInput[]
    createMany?: CollectionItemCreateManyToolInputEnvelope
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
  }

  export type UserNoteCreateNestedManyWithoutToolInput = {
    create?: XOR<UserNoteCreateWithoutToolInput, UserNoteUncheckedCreateWithoutToolInput> | UserNoteCreateWithoutToolInput[] | UserNoteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutToolInput | UserNoteCreateOrConnectWithoutToolInput[]
    createMany?: UserNoteCreateManyToolInputEnvelope
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutToolInput = {
    create?: XOR<AuditLogCreateWithoutToolInput, AuditLogUncheckedCreateWithoutToolInput> | AuditLogCreateWithoutToolInput[] | AuditLogUncheckedCreateWithoutToolInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutToolInput | AuditLogCreateOrConnectWithoutToolInput[]
    createMany?: AuditLogCreateManyToolInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ToolTagUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<FavoriteCreateWithoutToolInput, FavoriteUncheckedCreateWithoutToolInput> | FavoriteCreateWithoutToolInput[] | FavoriteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutToolInput | FavoriteCreateOrConnectWithoutToolInput[]
    createMany?: FavoriteCreateManyToolInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type CollectionItemUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<CollectionItemCreateWithoutToolInput, CollectionItemUncheckedCreateWithoutToolInput> | CollectionItemCreateWithoutToolInput[] | CollectionItemUncheckedCreateWithoutToolInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutToolInput | CollectionItemCreateOrConnectWithoutToolInput[]
    createMany?: CollectionItemCreateManyToolInputEnvelope
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
  }

  export type UserNoteUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<UserNoteCreateWithoutToolInput, UserNoteUncheckedCreateWithoutToolInput> | UserNoteCreateWithoutToolInput[] | UserNoteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutToolInput | UserNoteCreateOrConnectWithoutToolInput[]
    createMany?: UserNoteCreateManyToolInputEnvelope
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<AuditLogCreateWithoutToolInput, AuditLogUncheckedCreateWithoutToolInput> | AuditLogCreateWithoutToolInput[] | AuditLogUncheckedCreateWithoutToolInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutToolInput | AuditLogCreateOrConnectWithoutToolInput[]
    createMany?: AuditLogCreateManyToolInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumBusinessModelFieldUpdateOperationsInput = {
    set?: $Enums.BusinessModel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoryUpdateOneWithoutToolsNestedInput = {
    create?: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutToolsInput
    upsert?: CategoryUpsertWithoutToolsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutToolsInput, CategoryUpdateWithoutToolsInput>, CategoryUncheckedUpdateWithoutToolsInput>
  }

  export type SubcategoryUpdateOneWithoutToolsNestedInput = {
    create?: XOR<SubcategoryCreateWithoutToolsInput, SubcategoryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutToolsInput
    upsert?: SubcategoryUpsertWithoutToolsInput
    disconnect?: SubcategoryWhereInput | boolean
    delete?: SubcategoryWhereInput | boolean
    connect?: SubcategoryWhereUniqueInput
    update?: XOR<XOR<SubcategoryUpdateToOneWithWhereWithoutToolsInput, SubcategoryUpdateWithoutToolsInput>, SubcategoryUncheckedUpdateWithoutToolsInput>
  }

  export type UserUpdateOneWithoutToolsNestedInput = {
    create?: XOR<UserCreateWithoutToolsInput, UserUncheckedCreateWithoutToolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToolsInput
    upsert?: UserUpsertWithoutToolsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutToolsInput, UserUpdateWithoutToolsInput>, UserUncheckedUpdateWithoutToolsInput>
  }

  export type ToolTagUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    upsert?: ToolTagUpsertWithWhereUniqueWithoutToolInput | ToolTagUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    set?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    disconnect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    delete?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    update?: ToolTagUpdateWithWhereUniqueWithoutToolInput | ToolTagUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolTagUpdateManyWithWhereWithoutToolInput | ToolTagUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutToolNestedInput = {
    create?: XOR<FavoriteCreateWithoutToolInput, FavoriteUncheckedCreateWithoutToolInput> | FavoriteCreateWithoutToolInput[] | FavoriteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutToolInput | FavoriteCreateOrConnectWithoutToolInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutToolInput | FavoriteUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: FavoriteCreateManyToolInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutToolInput | FavoriteUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutToolInput | FavoriteUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type CollectionItemUpdateManyWithoutToolNestedInput = {
    create?: XOR<CollectionItemCreateWithoutToolInput, CollectionItemUncheckedCreateWithoutToolInput> | CollectionItemCreateWithoutToolInput[] | CollectionItemUncheckedCreateWithoutToolInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutToolInput | CollectionItemCreateOrConnectWithoutToolInput[]
    upsert?: CollectionItemUpsertWithWhereUniqueWithoutToolInput | CollectionItemUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: CollectionItemCreateManyToolInputEnvelope
    set?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    disconnect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    delete?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    update?: CollectionItemUpdateWithWhereUniqueWithoutToolInput | CollectionItemUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: CollectionItemUpdateManyWithWhereWithoutToolInput | CollectionItemUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: CollectionItemScalarWhereInput | CollectionItemScalarWhereInput[]
  }

  export type UserNoteUpdateManyWithoutToolNestedInput = {
    create?: XOR<UserNoteCreateWithoutToolInput, UserNoteUncheckedCreateWithoutToolInput> | UserNoteCreateWithoutToolInput[] | UserNoteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutToolInput | UserNoteCreateOrConnectWithoutToolInput[]
    upsert?: UserNoteUpsertWithWhereUniqueWithoutToolInput | UserNoteUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: UserNoteCreateManyToolInputEnvelope
    set?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    disconnect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    delete?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    update?: UserNoteUpdateWithWhereUniqueWithoutToolInput | UserNoteUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: UserNoteUpdateManyWithWhereWithoutToolInput | UserNoteUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutToolNestedInput = {
    create?: XOR<AuditLogCreateWithoutToolInput, AuditLogUncheckedCreateWithoutToolInput> | AuditLogCreateWithoutToolInput[] | AuditLogUncheckedCreateWithoutToolInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutToolInput | AuditLogCreateOrConnectWithoutToolInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutToolInput | AuditLogUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: AuditLogCreateManyToolInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutToolInput | AuditLogUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutToolInput | AuditLogUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ToolTagUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    upsert?: ToolTagUpsertWithWhereUniqueWithoutToolInput | ToolTagUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    set?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    disconnect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    delete?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    update?: ToolTagUpdateWithWhereUniqueWithoutToolInput | ToolTagUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolTagUpdateManyWithWhereWithoutToolInput | ToolTagUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<FavoriteCreateWithoutToolInput, FavoriteUncheckedCreateWithoutToolInput> | FavoriteCreateWithoutToolInput[] | FavoriteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutToolInput | FavoriteCreateOrConnectWithoutToolInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutToolInput | FavoriteUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: FavoriteCreateManyToolInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutToolInput | FavoriteUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutToolInput | FavoriteUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type CollectionItemUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<CollectionItemCreateWithoutToolInput, CollectionItemUncheckedCreateWithoutToolInput> | CollectionItemCreateWithoutToolInput[] | CollectionItemUncheckedCreateWithoutToolInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutToolInput | CollectionItemCreateOrConnectWithoutToolInput[]
    upsert?: CollectionItemUpsertWithWhereUniqueWithoutToolInput | CollectionItemUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: CollectionItemCreateManyToolInputEnvelope
    set?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    disconnect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    delete?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    update?: CollectionItemUpdateWithWhereUniqueWithoutToolInput | CollectionItemUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: CollectionItemUpdateManyWithWhereWithoutToolInput | CollectionItemUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: CollectionItemScalarWhereInput | CollectionItemScalarWhereInput[]
  }

  export type UserNoteUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<UserNoteCreateWithoutToolInput, UserNoteUncheckedCreateWithoutToolInput> | UserNoteCreateWithoutToolInput[] | UserNoteUncheckedCreateWithoutToolInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutToolInput | UserNoteCreateOrConnectWithoutToolInput[]
    upsert?: UserNoteUpsertWithWhereUniqueWithoutToolInput | UserNoteUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: UserNoteCreateManyToolInputEnvelope
    set?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    disconnect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    delete?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    update?: UserNoteUpdateWithWhereUniqueWithoutToolInput | UserNoteUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: UserNoteUpdateManyWithWhereWithoutToolInput | UserNoteUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<AuditLogCreateWithoutToolInput, AuditLogUncheckedCreateWithoutToolInput> | AuditLogCreateWithoutToolInput[] | AuditLogUncheckedCreateWithoutToolInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutToolInput | AuditLogCreateOrConnectWithoutToolInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutToolInput | AuditLogUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: AuditLogCreateManyToolInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutToolInput | AuditLogUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutToolInput | AuditLogUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ToolCreateNestedOneWithoutTagsInput = {
    create?: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutTagsInput
    connect?: ToolWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutToolsInput = {
    create?: XOR<TagCreateWithoutToolsInput, TagUncheckedCreateWithoutToolsInput>
    connectOrCreate?: TagCreateOrConnectWithoutToolsInput
    connect?: TagWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutTagsInput
    upsert?: ToolUpsertWithoutTagsInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutTagsInput, ToolUpdateWithoutTagsInput>, ToolUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutToolsNestedInput = {
    create?: XOR<TagCreateWithoutToolsInput, TagUncheckedCreateWithoutToolsInput>
    connectOrCreate?: TagCreateOrConnectWithoutToolsInput
    upsert?: TagUpsertWithoutToolsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutToolsInput, TagUpdateWithoutToolsInput>, TagUncheckedUpdateWithoutToolsInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ToolCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ToolCreateWithoutFavoritesInput, ToolUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutFavoritesInput
    connect?: ToolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ToolUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ToolCreateWithoutFavoritesInput, ToolUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutFavoritesInput
    upsert?: ToolUpsertWithoutFavoritesInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutFavoritesInput, ToolUpdateWithoutFavoritesInput>, ToolUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionItemCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionItemCreateWithoutCollectionInput, CollectionItemUncheckedCreateWithoutCollectionInput> | CollectionItemCreateWithoutCollectionInput[] | CollectionItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutCollectionInput | CollectionItemCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionItemCreateManyCollectionInputEnvelope
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
  }

  export type CollectionItemUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionItemCreateWithoutCollectionInput, CollectionItemUncheckedCreateWithoutCollectionInput> | CollectionItemCreateWithoutCollectionInput[] | CollectionItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutCollectionInput | CollectionItemCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionItemCreateManyCollectionInputEnvelope
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type CollectionItemUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionItemCreateWithoutCollectionInput, CollectionItemUncheckedCreateWithoutCollectionInput> | CollectionItemCreateWithoutCollectionInput[] | CollectionItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutCollectionInput | CollectionItemCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionItemUpsertWithWhereUniqueWithoutCollectionInput | CollectionItemUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionItemCreateManyCollectionInputEnvelope
    set?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    disconnect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    delete?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    update?: CollectionItemUpdateWithWhereUniqueWithoutCollectionInput | CollectionItemUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionItemUpdateManyWithWhereWithoutCollectionInput | CollectionItemUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionItemScalarWhereInput | CollectionItemScalarWhereInput[]
  }

  export type CollectionItemUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionItemCreateWithoutCollectionInput, CollectionItemUncheckedCreateWithoutCollectionInput> | CollectionItemCreateWithoutCollectionInput[] | CollectionItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionItemCreateOrConnectWithoutCollectionInput | CollectionItemCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionItemUpsertWithWhereUniqueWithoutCollectionInput | CollectionItemUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionItemCreateManyCollectionInputEnvelope
    set?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    disconnect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    delete?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    connect?: CollectionItemWhereUniqueInput | CollectionItemWhereUniqueInput[]
    update?: CollectionItemUpdateWithWhereUniqueWithoutCollectionInput | CollectionItemUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionItemUpdateManyWithWhereWithoutCollectionInput | CollectionItemUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionItemScalarWhereInput | CollectionItemScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutItemsInput = {
    create?: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutItemsInput
    connect?: CollectionWhereUniqueInput
  }

  export type ToolCreateNestedOneWithoutCollectionItemsInput = {
    create?: XOR<ToolCreateWithoutCollectionItemsInput, ToolUncheckedCreateWithoutCollectionItemsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutCollectionItemsInput
    connect?: ToolWhereUniqueInput
  }

  export type CollectionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutItemsInput
    upsert?: CollectionUpsertWithoutItemsInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutItemsInput, CollectionUpdateWithoutItemsInput>, CollectionUncheckedUpdateWithoutItemsInput>
  }

  export type ToolUpdateOneRequiredWithoutCollectionItemsNestedInput = {
    create?: XOR<ToolCreateWithoutCollectionItemsInput, ToolUncheckedCreateWithoutCollectionItemsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutCollectionItemsInput
    upsert?: ToolUpsertWithoutCollectionItemsInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutCollectionItemsInput, ToolUpdateWithoutCollectionItemsInput>, ToolUncheckedUpdateWithoutCollectionItemsInput>
  }

  export type UserCreateNestedOneWithoutUserNotesInput = {
    create?: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserNotesInput
    connect?: UserWhereUniqueInput
  }

  export type ToolCreateNestedOneWithoutUserNotesInput = {
    create?: XOR<ToolCreateWithoutUserNotesInput, ToolUncheckedCreateWithoutUserNotesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutUserNotesInput
    connect?: ToolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserNotesNestedInput = {
    create?: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserNotesInput
    upsert?: UserUpsertWithoutUserNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserNotesInput, UserUpdateWithoutUserNotesInput>, UserUncheckedUpdateWithoutUserNotesInput>
  }

  export type ToolUpdateOneRequiredWithoutUserNotesNestedInput = {
    create?: XOR<ToolCreateWithoutUserNotesInput, ToolUncheckedCreateWithoutUserNotesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutUserNotesInput
    upsert?: ToolUpsertWithoutUserNotesInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutUserNotesInput, ToolUpdateWithoutUserNotesInput>, ToolUncheckedUpdateWithoutUserNotesInput>
  }

  export type ToolCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ToolCreateWithoutAuditLogsInput, ToolUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutAuditLogsInput
    connect?: ToolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<ToolCreateWithoutAuditLogsInput, ToolUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutAuditLogsInput
    upsert?: ToolUpsertWithoutAuditLogsInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutAuditLogsInput, ToolUpdateWithoutAuditLogsInput>, ToolUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumBusinessModelFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessModel | EnumBusinessModelFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessModel[]
    notIn?: $Enums.BusinessModel[]
    not?: NestedEnumBusinessModelFilter<$PrismaModel> | $Enums.BusinessModel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumBusinessModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessModel | EnumBusinessModelFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessModel[]
    notIn?: $Enums.BusinessModel[]
    not?: NestedEnumBusinessModelWithAggregatesFilter<$PrismaModel> | $Enums.BusinessModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessModelFilter<$PrismaModel>
    _max?: NestedEnumBusinessModelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ToolCreateWithoutCreatedByInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutCreatedByInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutCreatedByInput, ToolUncheckedCreateWithoutCreatedByInput>
  }

  export type ToolCreateManyCreatedByInputEnvelope = {
    data: ToolCreateManyCreatedByInput | ToolCreateManyCreatedByInput[]
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    toolId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
  }

  export type CollectionCreateWithoutUserInput = {
    id?: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
    items?: CollectionItemCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
    items?: CollectionItemUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
  }

  export type UserNoteCreateWithoutUserInput = {
    id?: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tool: ToolCreateNestedOneWithoutUserNotesInput
  }

  export type UserNoteUncheckedCreateWithoutUserInput = {
    id?: string
    toolId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserNoteCreateOrConnectWithoutUserInput = {
    where: UserNoteWhereUniqueInput
    create: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput>
  }

  export type UserNoteCreateManyUserInputEnvelope = {
    data: UserNoteCreateManyUserInput | UserNoteCreateManyUserInput[]
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    toolId: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
  }

  export type ToolUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutCreatedByInput, ToolUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ToolCreateWithoutCreatedByInput, ToolUncheckedCreateWithoutCreatedByInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutCreatedByInput, ToolUncheckedUpdateWithoutCreatedByInput>
  }

  export type ToolUpdateManyWithWhereWithoutCreatedByInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ToolScalarWhereInput = {
    AND?: ToolScalarWhereInput | ToolScalarWhereInput[]
    OR?: ToolScalarWhereInput[]
    NOT?: ToolScalarWhereInput | ToolScalarWhereInput[]
    id?: StringFilter<"Tool"> | string
    name?: StringFilter<"Tool"> | string
    slug?: StringFilter<"Tool"> | string
    url?: StringFilter<"Tool"> | string
    categoryId?: StringNullableFilter<"Tool"> | string | null
    subcategoryId?: StringNullableFilter<"Tool"> | string | null
    shortDesc?: StringNullableFilter<"Tool"> | string | null
    longDesc?: StringNullableFilter<"Tool"> | string | null
    aiSummary?: StringNullableFilter<"Tool"> | string | null
    developer?: StringNullableFilter<"Tool"> | string | null
    status?: EnumStatusFilter<"Tool"> | $Enums.Status
    businessModel?: EnumBusinessModelFilter<"Tool"> | $Enums.BusinessModel
    startingPrice?: StringNullableFilter<"Tool"> | string | null
    hasApi?: BoolFilter<"Tool"> | boolean
    docsUrl?: StringNullableFilter<"Tool"> | string | null
    githubUrl?: StringNullableFilter<"Tool"> | string | null
    logoUrl?: StringNullableFilter<"Tool"> | string | null
    createdById?: StringNullableFilter<"Tool"> | string | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    toolId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    userId?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    isPublic?: BoolFilter<"Collection"> | boolean
    createdAt?: DateTimeFilter<"Collection"> | Date | string
  }

  export type UserNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserNoteWhereUniqueInput
    update: XOR<UserNoteUpdateWithoutUserInput, UserNoteUncheckedUpdateWithoutUserInput>
    create: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput>
  }

  export type UserNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserNoteWhereUniqueInput
    data: XOR<UserNoteUpdateWithoutUserInput, UserNoteUncheckedUpdateWithoutUserInput>
  }

  export type UserNoteUpdateManyWithWhereWithoutUserInput = {
    where: UserNoteScalarWhereInput
    data: XOR<UserNoteUpdateManyMutationInput, UserNoteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserNoteScalarWhereInput = {
    AND?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
    OR?: UserNoteScalarWhereInput[]
    NOT?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
    id?: StringFilter<"UserNote"> | string
    userId?: StringFilter<"UserNote"> | string
    toolId?: StringFilter<"UserNote"> | string
    content?: StringFilter<"UserNote"> | string
    isPrivate?: BoolFilter<"UserNote"> | boolean
    createdAt?: DateTimeFilter<"UserNote"> | Date | string
    updatedAt?: DateTimeFilter<"UserNote"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    toolId?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    field?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type SubcategoryCreateWithoutCategoryInput = {
    id?: string
    name: string
    tools?: ToolCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    tools?: ToolUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryCreateManyCategoryInputEnvelope = {
    data: SubcategoryCreateManyCategoryInput | SubcategoryCreateManyCategoryInput[]
  }

  export type ToolCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    url: string
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutCategoryInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutCategoryInput, ToolUncheckedCreateWithoutCategoryInput>
  }

  export type ToolCreateManyCategoryInputEnvelope = {
    data: ToolCreateManyCategoryInput | ToolCreateManyCategoryInput[]
  }

  export type SubcategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    update: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    data: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubcategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubcategoryScalarWhereInput
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubcategoryScalarWhereInput = {
    AND?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    OR?: SubcategoryScalarWhereInput[]
    NOT?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    id?: StringFilter<"Subcategory"> | string
    categoryId?: StringFilter<"Subcategory"> | string
    name?: StringFilter<"Subcategory"> | string
  }

  export type ToolUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutCategoryInput, ToolUncheckedUpdateWithoutCategoryInput>
    create: XOR<ToolCreateWithoutCategoryInput, ToolUncheckedCreateWithoutCategoryInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutCategoryInput, ToolUncheckedUpdateWithoutCategoryInput>
  }

  export type ToolUpdateManyWithWhereWithoutCategoryInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    slug: string
    iconUrl?: string | null
    tools?: ToolCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    slug: string
    iconUrl?: string | null
    tools?: ToolUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type ToolCreateWithoutSubcategoryInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutSubcategoryInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutSubcategoryInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutSubcategoryInput, ToolUncheckedCreateWithoutSubcategoryInput>
  }

  export type ToolCreateManySubcategoryInputEnvelope = {
    data: ToolCreateManySubcategoryInput | ToolCreateManySubcategoryInput[]
  }

  export type CategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: ToolUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: ToolUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ToolUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutSubcategoryInput, ToolUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<ToolCreateWithoutSubcategoryInput, ToolUncheckedCreateWithoutSubcategoryInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutSubcategoryInput, ToolUncheckedUpdateWithoutSubcategoryInput>
  }

  export type ToolUpdateManyWithWhereWithoutSubcategoryInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type ToolTagCreateWithoutTagInput = {
    tool: ToolCreateNestedOneWithoutTagsInput
  }

  export type ToolTagUncheckedCreateWithoutTagInput = {
    toolId: string
  }

  export type ToolTagCreateOrConnectWithoutTagInput = {
    where: ToolTagWhereUniqueInput
    create: XOR<ToolTagCreateWithoutTagInput, ToolTagUncheckedCreateWithoutTagInput>
  }

  export type ToolTagCreateManyTagInputEnvelope = {
    data: ToolTagCreateManyTagInput | ToolTagCreateManyTagInput[]
  }

  export type ToolTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ToolTagWhereUniqueInput
    update: XOR<ToolTagUpdateWithoutTagInput, ToolTagUncheckedUpdateWithoutTagInput>
    create: XOR<ToolTagCreateWithoutTagInput, ToolTagUncheckedCreateWithoutTagInput>
  }

  export type ToolTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ToolTagWhereUniqueInput
    data: XOR<ToolTagUpdateWithoutTagInput, ToolTagUncheckedUpdateWithoutTagInput>
  }

  export type ToolTagUpdateManyWithWhereWithoutTagInput = {
    where: ToolTagScalarWhereInput
    data: XOR<ToolTagUpdateManyMutationInput, ToolTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ToolTagScalarWhereInput = {
    AND?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
    OR?: ToolTagScalarWhereInput[]
    NOT?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
    toolId?: StringFilter<"ToolTag"> | string
    tagId?: StringFilter<"ToolTag"> | string
  }

  export type CategoryCreateWithoutToolsInput = {
    id?: string
    name: string
    slug: string
    iconUrl?: string | null
    subcategories?: SubcategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutToolsInput = {
    id?: string
    name: string
    slug: string
    iconUrl?: string | null
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutToolsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
  }

  export type SubcategoryCreateWithoutToolsInput = {
    id?: string
    name: string
    category: CategoryCreateNestedOneWithoutSubcategoriesInput
  }

  export type SubcategoryUncheckedCreateWithoutToolsInput = {
    id?: string
    categoryId: string
    name: string
  }

  export type SubcategoryCreateOrConnectWithoutToolsInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutToolsInput, SubcategoryUncheckedCreateWithoutToolsInput>
  }

  export type UserCreateWithoutToolsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    userNotes?: UserNoteCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutToolsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutToolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToolsInput, UserUncheckedCreateWithoutToolsInput>
  }

  export type ToolTagCreateWithoutToolInput = {
    tag: TagCreateNestedOneWithoutToolsInput
  }

  export type ToolTagUncheckedCreateWithoutToolInput = {
    tagId: string
  }

  export type ToolTagCreateOrConnectWithoutToolInput = {
    where: ToolTagWhereUniqueInput
    create: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput>
  }

  export type ToolTagCreateManyToolInputEnvelope = {
    data: ToolTagCreateManyToolInput | ToolTagCreateManyToolInput[]
  }

  export type FavoriteCreateWithoutToolInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutToolInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutToolInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutToolInput, FavoriteUncheckedCreateWithoutToolInput>
  }

  export type FavoriteCreateManyToolInputEnvelope = {
    data: FavoriteCreateManyToolInput | FavoriteCreateManyToolInput[]
  }

  export type CollectionItemCreateWithoutToolInput = {
    collection: CollectionCreateNestedOneWithoutItemsInput
  }

  export type CollectionItemUncheckedCreateWithoutToolInput = {
    collectionId: string
  }

  export type CollectionItemCreateOrConnectWithoutToolInput = {
    where: CollectionItemWhereUniqueInput
    create: XOR<CollectionItemCreateWithoutToolInput, CollectionItemUncheckedCreateWithoutToolInput>
  }

  export type CollectionItemCreateManyToolInputEnvelope = {
    data: CollectionItemCreateManyToolInput | CollectionItemCreateManyToolInput[]
  }

  export type UserNoteCreateWithoutToolInput = {
    id?: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserNotesInput
  }

  export type UserNoteUncheckedCreateWithoutToolInput = {
    id?: string
    userId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserNoteCreateOrConnectWithoutToolInput = {
    where: UserNoteWhereUniqueInput
    create: XOR<UserNoteCreateWithoutToolInput, UserNoteUncheckedCreateWithoutToolInput>
  }

  export type UserNoteCreateManyToolInputEnvelope = {
    data: UserNoteCreateManyToolInput | UserNoteCreateManyToolInput[]
  }

  export type AuditLogCreateWithoutToolInput = {
    id?: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutToolInput = {
    id?: string
    userId?: string | null
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutToolInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutToolInput, AuditLogUncheckedCreateWithoutToolInput>
  }

  export type AuditLogCreateManyToolInputEnvelope = {
    data: AuditLogCreateManyToolInput | AuditLogCreateManyToolInput[]
  }

  export type CategoryUpsertWithoutToolsInput = {
    update: XOR<CategoryUpdateWithoutToolsInput, CategoryUncheckedUpdateWithoutToolsInput>
    create: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutToolsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutToolsInput, CategoryUncheckedUpdateWithoutToolsInput>
  }

  export type CategoryUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: SubcategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubcategoryUpsertWithoutToolsInput = {
    update: XOR<SubcategoryUpdateWithoutToolsInput, SubcategoryUncheckedUpdateWithoutToolsInput>
    create: XOR<SubcategoryCreateWithoutToolsInput, SubcategoryUncheckedCreateWithoutToolsInput>
    where?: SubcategoryWhereInput
  }

  export type SubcategoryUpdateToOneWithWhereWithoutToolsInput = {
    where?: SubcategoryWhereInput
    data: XOR<SubcategoryUpdateWithoutToolsInput, SubcategoryUncheckedUpdateWithoutToolsInput>
  }

  export type SubcategoryUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutToolsInput = {
    update: XOR<UserUpdateWithoutToolsInput, UserUncheckedUpdateWithoutToolsInput>
    create: XOR<UserCreateWithoutToolsInput, UserUncheckedCreateWithoutToolsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutToolsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutToolsInput, UserUncheckedUpdateWithoutToolsInput>
  }

  export type UserUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToolTagUpsertWithWhereUniqueWithoutToolInput = {
    where: ToolTagWhereUniqueInput
    update: XOR<ToolTagUpdateWithoutToolInput, ToolTagUncheckedUpdateWithoutToolInput>
    create: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput>
  }

  export type ToolTagUpdateWithWhereUniqueWithoutToolInput = {
    where: ToolTagWhereUniqueInput
    data: XOR<ToolTagUpdateWithoutToolInput, ToolTagUncheckedUpdateWithoutToolInput>
  }

  export type ToolTagUpdateManyWithWhereWithoutToolInput = {
    where: ToolTagScalarWhereInput
    data: XOR<ToolTagUpdateManyMutationInput, ToolTagUncheckedUpdateManyWithoutToolInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutToolInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutToolInput, FavoriteUncheckedUpdateWithoutToolInput>
    create: XOR<FavoriteCreateWithoutToolInput, FavoriteUncheckedCreateWithoutToolInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutToolInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutToolInput, FavoriteUncheckedUpdateWithoutToolInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutToolInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutToolInput>
  }

  export type CollectionItemUpsertWithWhereUniqueWithoutToolInput = {
    where: CollectionItemWhereUniqueInput
    update: XOR<CollectionItemUpdateWithoutToolInput, CollectionItemUncheckedUpdateWithoutToolInput>
    create: XOR<CollectionItemCreateWithoutToolInput, CollectionItemUncheckedCreateWithoutToolInput>
  }

  export type CollectionItemUpdateWithWhereUniqueWithoutToolInput = {
    where: CollectionItemWhereUniqueInput
    data: XOR<CollectionItemUpdateWithoutToolInput, CollectionItemUncheckedUpdateWithoutToolInput>
  }

  export type CollectionItemUpdateManyWithWhereWithoutToolInput = {
    where: CollectionItemScalarWhereInput
    data: XOR<CollectionItemUpdateManyMutationInput, CollectionItemUncheckedUpdateManyWithoutToolInput>
  }

  export type CollectionItemScalarWhereInput = {
    AND?: CollectionItemScalarWhereInput | CollectionItemScalarWhereInput[]
    OR?: CollectionItemScalarWhereInput[]
    NOT?: CollectionItemScalarWhereInput | CollectionItemScalarWhereInput[]
    collectionId?: StringFilter<"CollectionItem"> | string
    toolId?: StringFilter<"CollectionItem"> | string
  }

  export type UserNoteUpsertWithWhereUniqueWithoutToolInput = {
    where: UserNoteWhereUniqueInput
    update: XOR<UserNoteUpdateWithoutToolInput, UserNoteUncheckedUpdateWithoutToolInput>
    create: XOR<UserNoteCreateWithoutToolInput, UserNoteUncheckedCreateWithoutToolInput>
  }

  export type UserNoteUpdateWithWhereUniqueWithoutToolInput = {
    where: UserNoteWhereUniqueInput
    data: XOR<UserNoteUpdateWithoutToolInput, UserNoteUncheckedUpdateWithoutToolInput>
  }

  export type UserNoteUpdateManyWithWhereWithoutToolInput = {
    where: UserNoteScalarWhereInput
    data: XOR<UserNoteUpdateManyMutationInput, UserNoteUncheckedUpdateManyWithoutToolInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutToolInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutToolInput, AuditLogUncheckedUpdateWithoutToolInput>
    create: XOR<AuditLogCreateWithoutToolInput, AuditLogUncheckedCreateWithoutToolInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutToolInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutToolInput, AuditLogUncheckedUpdateWithoutToolInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutToolInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutToolInput>
  }

  export type ToolCreateWithoutTagsInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutTagsInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutToolsInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagUncheckedCreateWithoutToolsInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagCreateOrConnectWithoutToolsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutToolsInput, TagUncheckedCreateWithoutToolsInput>
  }

  export type ToolUpsertWithoutTagsInput = {
    update: XOR<ToolUpdateWithoutTagsInput, ToolUncheckedUpdateWithoutTagsInput>
    create: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutTagsInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutTagsInput, ToolUncheckedUpdateWithoutTagsInput>
  }

  export type ToolUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type TagUpsertWithoutToolsInput = {
    update: XOR<TagUpdateWithoutToolsInput, TagUncheckedUpdateWithoutToolsInput>
    create: XOR<TagCreateWithoutToolsInput, TagUncheckedCreateWithoutToolsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutToolsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutToolsInput, TagUncheckedUpdateWithoutToolsInput>
  }

  export type TagUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCreateNestedManyWithoutCreatedByInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    userNotes?: UserNoteCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCreatedByInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ToolCreateWithoutFavoritesInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutFavoritesInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutFavoritesInput, ToolUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUpdateManyWithoutCreatedByNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCreatedByNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToolUpsertWithoutFavoritesInput = {
    update: XOR<ToolUpdateWithoutFavoritesInput, ToolUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ToolCreateWithoutFavoritesInput, ToolUncheckedCreateWithoutFavoritesInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutFavoritesInput, ToolUncheckedUpdateWithoutFavoritesInput>
  }

  export type ToolUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type UserCreateWithoutCollectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    userNotes?: UserNoteCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionItemCreateWithoutCollectionInput = {
    tool: ToolCreateNestedOneWithoutCollectionItemsInput
  }

  export type CollectionItemUncheckedCreateWithoutCollectionInput = {
    toolId: string
  }

  export type CollectionItemCreateOrConnectWithoutCollectionInput = {
    where: CollectionItemWhereUniqueInput
    create: XOR<CollectionItemCreateWithoutCollectionInput, CollectionItemUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionItemCreateManyCollectionInputEnvelope = {
    data: CollectionItemCreateManyCollectionInput | CollectionItemCreateManyCollectionInput[]
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionItemUpsertWithWhereUniqueWithoutCollectionInput = {
    where: CollectionItemWhereUniqueInput
    update: XOR<CollectionItemUpdateWithoutCollectionInput, CollectionItemUncheckedUpdateWithoutCollectionInput>
    create: XOR<CollectionItemCreateWithoutCollectionInput, CollectionItemUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionItemUpdateWithWhereUniqueWithoutCollectionInput = {
    where: CollectionItemWhereUniqueInput
    data: XOR<CollectionItemUpdateWithoutCollectionInput, CollectionItemUncheckedUpdateWithoutCollectionInput>
  }

  export type CollectionItemUpdateManyWithWhereWithoutCollectionInput = {
    where: CollectionItemScalarWhereInput
    data: XOR<CollectionItemUpdateManyMutationInput, CollectionItemUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CollectionCreateWithoutItemsInput = {
    id?: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
  }

  export type CollectionCreateOrConnectWithoutItemsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
  }

  export type ToolCreateWithoutCollectionItemsInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutCollectionItemsInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutCollectionItemsInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutCollectionItemsInput, ToolUncheckedCreateWithoutCollectionItemsInput>
  }

  export type CollectionUpsertWithoutItemsInput = {
    update: XOR<CollectionUpdateWithoutItemsInput, CollectionUncheckedUpdateWithoutItemsInput>
    create: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutItemsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutItemsInput, CollectionUncheckedUpdateWithoutItemsInput>
  }

  export type CollectionUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUpsertWithoutCollectionItemsInput = {
    update: XOR<ToolUpdateWithoutCollectionItemsInput, ToolUncheckedUpdateWithoutCollectionItemsInput>
    create: XOR<ToolCreateWithoutCollectionItemsInput, ToolUncheckedCreateWithoutCollectionItemsInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutCollectionItemsInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutCollectionItemsInput, ToolUncheckedUpdateWithoutCollectionItemsInput>
  }

  export type ToolUpdateWithoutCollectionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutCollectionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type UserCreateWithoutUserNotesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserNotesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
  }

  export type ToolCreateWithoutUserNotesInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutUserNotesInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutUserNotesInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutUserNotesInput, ToolUncheckedCreateWithoutUserNotesInput>
  }

  export type UserUpsertWithoutUserNotesInput = {
    update: XOR<UserUpdateWithoutUserNotesInput, UserUncheckedUpdateWithoutUserNotesInput>
    create: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserNotesInput, UserUncheckedUpdateWithoutUserNotesInput>
  }

  export type UserUpdateWithoutUserNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToolUpsertWithoutUserNotesInput = {
    update: XOR<ToolUpdateWithoutUserNotesInput, ToolUncheckedUpdateWithoutUserNotesInput>
    create: XOR<ToolCreateWithoutUserNotesInput, ToolUncheckedCreateWithoutUserNotesInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutUserNotesInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutUserNotesInput, ToolUncheckedUpdateWithoutUserNotesInput>
  }

  export type ToolUpdateWithoutUserNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutUserNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    url: string
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutToolsInput
    subcategory?: SubcategoryCreateNestedOneWithoutToolsInput
    createdBy?: UserCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
    favorites?: FavoriteCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemCreateNestedManyWithoutToolInput
    userNotes?: UserNoteCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutToolInput
    collectionItems?: CollectionItemUncheckedCreateNestedManyWithoutToolInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutAuditLogsInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutAuditLogsInput, ToolUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    userNotes?: UserNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type ToolUpsertWithoutAuditLogsInput = {
    update: XOR<ToolUpdateWithoutAuditLogsInput, ToolUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ToolCreateWithoutAuditLogsInput, ToolUncheckedCreateWithoutAuditLogsInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutAuditLogsInput, ToolUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ToolUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToolCreateManyCreatedByInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    toolId: string
    createdAt?: Date | string
  }

  export type CollectionCreateManyUserInput = {
    id?: string
    name: string
    isPublic?: boolean
    createdAt?: Date | string
  }

  export type UserNoteCreateManyUserInput = {
    id?: string
    toolId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    toolId: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type ToolUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CollectionItemUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CollectionItemUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutUserNotesNestedInput
  }

  export type UserNoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubcategoryCreateManyCategoryInput = {
    id?: string
    name: string
  }

  export type ToolCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    url: string
    subcategoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubcategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tools?: ToolUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tools?: ToolUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ToolUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    subcategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCreateManySubcategoryInput = {
    id?: string
    name: string
    slug: string
    url: string
    categoryId?: string | null
    shortDesc?: string | null
    longDesc?: string | null
    aiSummary?: string | null
    developer?: string | null
    status?: $Enums.Status
    businessModel?: $Enums.BusinessModel
    startingPrice?: string | null
    hasApi?: boolean
    docsUrl?: string | null
    githubUrl?: string | null
    logoUrl?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToolUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutToolsNestedInput
    createdBy?: UserUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutToolNestedInput
    collectionItems?: CollectionItemUncheckedUpdateManyWithoutToolNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutToolNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    longDesc?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    businessModel?: EnumBusinessModelFieldUpdateOperationsInput | $Enums.BusinessModel
    startingPrice?: NullableStringFieldUpdateOperationsInput | string | null
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolTagCreateManyTagInput = {
    toolId: string
  }

  export type ToolTagUpdateWithoutTagInput = {
    tool?: ToolUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ToolTagUncheckedUpdateWithoutTagInput = {
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagUncheckedUpdateManyWithoutTagInput = {
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagCreateManyToolInput = {
    tagId: string
  }

  export type FavoriteCreateManyToolInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CollectionItemCreateManyToolInput = {
    collectionId: string
  }

  export type UserNoteCreateManyToolInput = {
    id?: string
    userId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyToolInput = {
    id?: string
    userId?: string | null
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type ToolTagUpdateWithoutToolInput = {
    tag?: TagUpdateOneRequiredWithoutToolsNestedInput
  }

  export type ToolTagUncheckedUpdateWithoutToolInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagUncheckedUpdateManyWithoutToolInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionItemUpdateWithoutToolInput = {
    collection?: CollectionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CollectionItemUncheckedUpdateWithoutToolInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionItemUncheckedUpdateManyWithoutToolInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserNoteUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserNotesNestedInput
  }

  export type UserNoteUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionItemCreateManyCollectionInput = {
    toolId: string
  }

  export type CollectionItemUpdateWithoutCollectionInput = {
    tool?: ToolUpdateOneRequiredWithoutCollectionItemsNestedInput
  }

  export type CollectionItemUncheckedUpdateWithoutCollectionInput = {
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionItemUncheckedUpdateManyWithoutCollectionInput = {
    toolId?: StringFieldUpdateOperationsInput | string
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