
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
 * Model Usuario
 * *
 *  * Usuario = unión de Estudiante y Profesor (para auth/roles).
 *  * Mantengo campos similares a tu schema original.
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Inscripcion
 * *
 *  * Inscripcion pertenece a la DB usuarios.
 *  * Contiene id_usuario y id_carrera (carrera está en DB carreras)
 */
export type Inscripcion = $Result.DefaultSelection<Prisma.$InscripcionPayload>
/**
 * Model Rol
 * *
 *  * Roles y permisos (mismo DB de usuarios)
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model RolPermiso
 * 
 */
export type RolPermiso = $Result.DefaultSelection<Prisma.$RolPermisoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripcion`: Exposes CRUD operations for the **Inscripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscripcions
    * const inscripcions = await prisma.inscripcion.findMany()
    * ```
    */
  get inscripcion(): Prisma.InscripcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolPermiso`: Exposes CRUD operations for the **RolPermiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolPermisos
    * const rolPermisos = await prisma.rolPermiso.findMany()
    * ```
    */
  get rolPermiso(): Prisma.RolPermisoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
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
    Usuario: 'Usuario',
    Inscripcion: 'Inscripcion',
    Rol: 'Rol',
    Permiso: 'Permiso',
    RolPermiso: 'RolPermiso'
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
      modelProps: "usuario" | "inscripcion" | "rol" | "permiso" | "rolPermiso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Inscripcion: {
        payload: Prisma.$InscripcionPayload<ExtArgs>
        fields: Prisma.InscripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findFirst: {
            args: Prisma.InscripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findMany: {
            args: Prisma.InscripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          create: {
            args: Prisma.InscripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          createMany: {
            args: Prisma.InscripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          delete: {
            args: Prisma.InscripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          update: {
            args: Prisma.InscripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          deleteMany: {
            args: Prisma.InscripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InscripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          upsert: {
            args: Prisma.InscripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          aggregate: {
            args: Prisma.InscripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripcion>
          }
          groupBy: {
            args: Prisma.InscripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscripcionCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      RolPermiso: {
        payload: Prisma.$RolPermisoPayload<ExtArgs>
        fields: Prisma.RolPermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolPermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolPermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findFirst: {
            args: Prisma.RolPermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolPermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findMany: {
            args: Prisma.RolPermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          create: {
            args: Prisma.RolPermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          createMany: {
            args: Prisma.RolPermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolPermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          delete: {
            args: Prisma.RolPermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          update: {
            args: Prisma.RolPermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          deleteMany: {
            args: Prisma.RolPermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolPermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolPermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          upsert: {
            args: Prisma.RolPermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          aggregate: {
            args: Prisma.RolPermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolPermiso>
          }
          groupBy: {
            args: Prisma.RolPermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolPermisoCountArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    inscripcion?: InscripcionOmit
    rol?: RolOmit
    permiso?: PermisoOmit
    rolPermiso?: RolPermisoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    inscripciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | UsuarioCountOutputTypeCountInscripcionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
    permisos: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
    permisos?: boolean | RolCountOutputTypeCountPermisosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Count Type PermisoCountOutputType
   */

  export type PermisoCountOutputType = {
    rolPermisos: number
  }

  export type PermisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolPermisos?: boolean | PermisoCountOutputTypeCountRolPermisosArgs
  }

  // Custom InputTypes
  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoCountOutputType
     */
    select?: PermisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeCountRolPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    rolId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    rolId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    correo: string | null
    telefono: string | null
    clave: string | null
    tipo: string | null
    createdAt: Date | null
    rolId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    correo: string | null
    telefono: string | null
    clave: string | null
    tipo: string | null
    createdAt: Date | null
    rolId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    apellido: number
    dni: number
    correo: number
    telefono: number
    clave: number
    tipo: number
    createdAt: number
    rolId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    rolId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    rolId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    dni?: true
    correo?: true
    telefono?: true
    clave?: true
    tipo?: true
    createdAt?: true
    rolId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    dni?: true
    correo?: true
    telefono?: true
    clave?: true
    tipo?: true
    createdAt?: true
    rolId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    dni?: true
    correo?: true
    telefono?: true
    clave?: true
    tipo?: true
    createdAt?: true
    rolId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono: string | null
    clave: string | null
    tipo: string | null
    createdAt: Date
    rolId: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    clave?: boolean
    tipo?: boolean
    createdAt?: boolean
    rolId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    inscripciones?: boolean | Usuario$inscripcionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    clave?: boolean
    tipo?: boolean
    createdAt?: boolean
    rolId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    clave?: boolean
    tipo?: boolean
    createdAt?: boolean
    rolId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    clave?: boolean
    tipo?: boolean
    createdAt?: boolean
    rolId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "apellido" | "dni" | "correo" | "telefono" | "clave" | "tipo" | "createdAt" | "rolId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    inscripciones?: boolean | Usuario$inscripcionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      apellido: string
      dni: string
      correo: string
      telefono: string | null
      clave: string | null
      tipo: string | null
      createdAt: Date
      rolId: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inscripciones<T extends Usuario$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly dni: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly clave: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly rolId: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.inscripciones
   */
  export type Usuario$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Inscripcion
   */

  export type AggregateInscripcion = {
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  export type InscripcionAvgAggregateOutputType = {
    id_inscripcion: number | null
    id_usuario: number | null
    id_carrera: number | null
  }

  export type InscripcionSumAggregateOutputType = {
    id_inscripcion: number | null
    id_usuario: number | null
    id_carrera: number | null
  }

  export type InscripcionMinAggregateOutputType = {
    id_inscripcion: number | null
    id_usuario: number | null
    id_carrera: number | null
    fecha_inscripcion: Date | null
  }

  export type InscripcionMaxAggregateOutputType = {
    id_inscripcion: number | null
    id_usuario: number | null
    id_carrera: number | null
    fecha_inscripcion: Date | null
  }

  export type InscripcionCountAggregateOutputType = {
    id_inscripcion: number
    id_usuario: number
    id_carrera: number
    fecha_inscripcion: number
    _all: number
  }


  export type InscripcionAvgAggregateInputType = {
    id_inscripcion?: true
    id_usuario?: true
    id_carrera?: true
  }

  export type InscripcionSumAggregateInputType = {
    id_inscripcion?: true
    id_usuario?: true
    id_carrera?: true
  }

  export type InscripcionMinAggregateInputType = {
    id_inscripcion?: true
    id_usuario?: true
    id_carrera?: true
    fecha_inscripcion?: true
  }

  export type InscripcionMaxAggregateInputType = {
    id_inscripcion?: true
    id_usuario?: true
    id_carrera?: true
    fecha_inscripcion?: true
  }

  export type InscripcionCountAggregateInputType = {
    id_inscripcion?: true
    id_usuario?: true
    id_carrera?: true
    fecha_inscripcion?: true
    _all?: true
  }

  export type InscripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcion to aggregate.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscripcions
    **/
    _count?: true | InscripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionMaxAggregateInputType
  }

  export type GetInscripcionAggregateType<T extends InscripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripcion[P]>
      : GetScalarType<T[P], AggregateInscripcion[P]>
  }




  export type InscripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithAggregationInput | InscripcionOrderByWithAggregationInput[]
    by: InscripcionScalarFieldEnum[] | InscripcionScalarFieldEnum
    having?: InscripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionCountAggregateInputType | true
    _avg?: InscripcionAvgAggregateInputType
    _sum?: InscripcionSumAggregateInputType
    _min?: InscripcionMinAggregateInputType
    _max?: InscripcionMaxAggregateInputType
  }

  export type InscripcionGroupByOutputType = {
    id_inscripcion: number
    id_usuario: number
    id_carrera: number
    fecha_inscripcion: Date
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  type GetInscripcionGroupByPayload<T extends InscripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
        }
      >
    >


  export type InscripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion?: boolean
    id_usuario?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion?: boolean
    id_usuario?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion?: boolean
    id_usuario?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectScalar = {
    id_inscripcion?: boolean
    id_usuario?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
  }

  export type InscripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_inscripcion" | "id_usuario" | "id_carrera" | "fecha_inscripcion", ExtArgs["result"]["inscripcion"]>
  export type InscripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $InscripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscripcion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_inscripcion: number
      id_usuario: number
      id_carrera: number
      fecha_inscripcion: Date
    }, ExtArgs["result"]["inscripcion"]>
    composites: {}
  }

  type InscripcionGetPayload<S extends boolean | null | undefined | InscripcionDefaultArgs> = $Result.GetResult<Prisma.$InscripcionPayload, S>

  type InscripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionCountAggregateInputType | true
    }

  export interface InscripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscripcion'], meta: { name: 'Inscripcion' } }
    /**
     * Find zero or one Inscripcion that matches the filter.
     * @param {InscripcionFindUniqueArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscripcionFindUniqueArgs>(args: SelectSubset<T, InscripcionFindUniqueArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscripcionFindUniqueOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, InscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscripcionFindFirstArgs>(args?: SelectSubset<T, InscripcionFindFirstArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, InscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany()
     * 
     * // Get first 10 Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany({ take: 10 })
     * 
     * // Only select the `id_inscripcion`
     * const inscripcionWithId_inscripcionOnly = await prisma.inscripcion.findMany({ select: { id_inscripcion: true } })
     * 
     */
    findMany<T extends InscripcionFindManyArgs>(args?: SelectSubset<T, InscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscripcion.
     * @param {InscripcionCreateArgs} args - Arguments to create a Inscripcion.
     * @example
     * // Create one Inscripcion
     * const Inscripcion = await prisma.inscripcion.create({
     *   data: {
     *     // ... data to create a Inscripcion
     *   }
     * })
     * 
     */
    create<T extends InscripcionCreateArgs>(args: SelectSubset<T, InscripcionCreateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscripcions.
     * @param {InscripcionCreateManyArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscripcionCreateManyArgs>(args?: SelectSubset<T, InscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscripcions and returns the data saved in the database.
     * @param {InscripcionCreateManyAndReturnArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscripcions and only return the `id_inscripcion`
     * const inscripcionWithId_inscripcionOnly = await prisma.inscripcion.createManyAndReturn({
     *   select: { id_inscripcion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, InscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscripcion.
     * @param {InscripcionDeleteArgs} args - Arguments to delete one Inscripcion.
     * @example
     * // Delete one Inscripcion
     * const Inscripcion = await prisma.inscripcion.delete({
     *   where: {
     *     // ... filter to delete one Inscripcion
     *   }
     * })
     * 
     */
    delete<T extends InscripcionDeleteArgs>(args: SelectSubset<T, InscripcionDeleteArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscripcion.
     * @param {InscripcionUpdateArgs} args - Arguments to update one Inscripcion.
     * @example
     * // Update one Inscripcion
     * const inscripcion = await prisma.inscripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscripcionUpdateArgs>(args: SelectSubset<T, InscripcionUpdateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscripcions.
     * @param {InscripcionDeleteManyArgs} args - Arguments to filter Inscripcions to delete.
     * @example
     * // Delete a few Inscripcions
     * const { count } = await prisma.inscripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscripcionDeleteManyArgs>(args?: SelectSubset<T, InscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscripcionUpdateManyArgs>(args: SelectSubset<T, InscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions and returns the data updated in the database.
     * @param {InscripcionUpdateManyAndReturnArgs} args - Arguments to update many Inscripcions.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscripcions and only return the `id_inscripcion`
     * const inscripcionWithId_inscripcionOnly = await prisma.inscripcion.updateManyAndReturn({
     *   select: { id_inscripcion: true },
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
    updateManyAndReturn<T extends InscripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, InscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscripcion.
     * @param {InscripcionUpsertArgs} args - Arguments to update or create a Inscripcion.
     * @example
     * // Update or create a Inscripcion
     * const inscripcion = await prisma.inscripcion.upsert({
     *   create: {
     *     // ... data to create a Inscripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscripcion we want to update
     *   }
     * })
     */
    upsert<T extends InscripcionUpsertArgs>(args: SelectSubset<T, InscripcionUpsertArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionCountArgs} args - Arguments to filter Inscripcions to count.
     * @example
     * // Count the number of Inscripcions
     * const count = await prisma.inscripcion.count({
     *   where: {
     *     // ... the filter for the Inscripcions we want to count
     *   }
     * })
    **/
    count<T extends InscripcionCountArgs>(
      args?: Subset<T, InscripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscripcionAggregateArgs>(args: Subset<T, InscripcionAggregateArgs>): Prisma.PrismaPromise<GetInscripcionAggregateType<T>>

    /**
     * Group by Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionGroupByArgs} args - Group by arguments.
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
      T extends InscripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscripcionGroupByArgs['orderBy'] }
        : { orderBy?: InscripcionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscripcion model
   */
  readonly fields: InscripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inscripcion model
   */
  interface InscripcionFieldRefs {
    readonly id_inscripcion: FieldRef<"Inscripcion", 'Int'>
    readonly id_usuario: FieldRef<"Inscripcion", 'Int'>
    readonly id_carrera: FieldRef<"Inscripcion", 'Int'>
    readonly fecha_inscripcion: FieldRef<"Inscripcion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inscripcion findUnique
   */
  export type InscripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findUniqueOrThrow
   */
  export type InscripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findFirst
   */
  export type InscripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findFirstOrThrow
   */
  export type InscripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findMany
   */
  export type InscripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcions to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion create
   */
  export type InscripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscripcion.
     */
    data: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
  }

  /**
   * Inscripcion createMany
   */
  export type InscripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inscripcion createManyAndReturn
   */
  export type InscripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion update
   */
  export type InscripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscripcion.
     */
    data: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
    /**
     * Choose, which Inscripcion to update.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion updateMany
   */
  export type InscripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
  }

  /**
   * Inscripcion updateManyAndReturn
   */
  export type InscripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion upsert
   */
  export type InscripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscripcion to update in case it exists.
     */
    where: InscripcionWhereUniqueInput
    /**
     * In case the Inscripcion found by the `where` argument doesn't exist, create a new Inscripcion with this data.
     */
    create: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
    /**
     * In case the Inscripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
  }

  /**
   * Inscripcion delete
   */
  export type InscripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter which Inscripcion to delete.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion deleteMany
   */
  export type InscripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcions to delete
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to delete.
     */
    limit?: number
  }

  /**
   * Inscripcion without action
   */
  export type InscripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type RolSumAggregateOutputType = {
    id_rol: number | null
  }

  export type RolMinAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id_rol: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id_rol?: true
  }

  export type RolSumAggregateInputType = {
    id_rol?: true
  }

  export type RolMinAggregateInputType = {
    id_rol?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id_rol?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id_rol?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id_rol: number
    nombre: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id_rol?: boolean
    nombre?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "nombre", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      permisos: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      nombre: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.createManyAndReturn({
     *   select: { id_rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id_rol: true },
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
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permisos<T extends Rol$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id_rol: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol.permisos
   */
  export type Rol$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoAvgAggregateOutputType = {
    id_permiso: number | null
  }

  export type PermisoSumAggregateOutputType = {
    id_permiso: number | null
  }

  export type PermisoMinAggregateOutputType = {
    id_permiso: number | null
    nombre: string | null
  }

  export type PermisoMaxAggregateOutputType = {
    id_permiso: number | null
    nombre: string | null
  }

  export type PermisoCountAggregateOutputType = {
    id_permiso: number
    nombre: number
    _all: number
  }


  export type PermisoAvgAggregateInputType = {
    id_permiso?: true
  }

  export type PermisoSumAggregateInputType = {
    id_permiso?: true
  }

  export type PermisoMinAggregateInputType = {
    id_permiso?: true
    nombre?: true
  }

  export type PermisoMaxAggregateInputType = {
    id_permiso?: true
    nombre?: true
  }

  export type PermisoCountAggregateInputType = {
    id_permiso?: true
    nombre?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _avg?: PermisoAvgAggregateInputType
    _sum?: PermisoSumAggregateInputType
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id_permiso: number
    nombre: string
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_permiso?: boolean
    nombre?: boolean
    rolPermisos?: boolean | Permiso$rolPermisosArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_permiso?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_permiso?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectScalar = {
    id_permiso?: boolean
    nombre?: boolean
  }

  export type PermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_permiso" | "nombre", ExtArgs["result"]["permiso"]>
  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolPermisos?: boolean | Permiso$rolPermisosArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      rolPermisos: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_permiso: number
      nombre: string
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id_permiso`
     * const permisoWithId_permisoOnly = await prisma.permiso.findMany({ select: { id_permiso: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisoCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id_permiso`
     * const permisoWithId_permisoOnly = await prisma.permiso.createManyAndReturn({
     *   select: { id_permiso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {PermisoUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id_permiso`
     * const permisoWithId_permisoOnly = await prisma.permiso.updateManyAndReturn({
     *   select: { id_permiso: true },
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
    updateManyAndReturn<T extends PermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
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
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolPermisos<T extends Permiso$rolPermisosArgs<ExtArgs> = {}>(args?: Subset<T, Permiso$rolPermisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permiso model
   */
  interface PermisoFieldRefs {
    readonly id_permiso: FieldRef<"Permiso", 'Int'>
    readonly nombre: FieldRef<"Permiso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso createManyAndReturn
   */
  export type PermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso updateManyAndReturn
   */
  export type PermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permiso.rolPermisos
   */
  export type Permiso$rolPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model RolPermiso
   */

  export type AggregateRolPermiso = {
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  export type RolPermisoAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoSumAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMinAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMaxAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoCountAggregateOutputType = {
    id: number
    rolId: number
    permisoId: number
    _all: number
  }


  export type RolPermisoAvgAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoSumAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMinAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMaxAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoCountAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
    _all?: true
  }

  export type RolPermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermiso to aggregate.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolPermisos
    **/
    _count?: true | RolPermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolPermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolPermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolPermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolPermisoMaxAggregateInputType
  }

  export type GetRolPermisoAggregateType<T extends RolPermisoAggregateArgs> = {
        [P in keyof T & keyof AggregateRolPermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolPermiso[P]>
      : GetScalarType<T[P], AggregateRolPermiso[P]>
  }




  export type RolPermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithAggregationInput | RolPermisoOrderByWithAggregationInput[]
    by: RolPermisoScalarFieldEnum[] | RolPermisoScalarFieldEnum
    having?: RolPermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolPermisoCountAggregateInputType | true
    _avg?: RolPermisoAvgAggregateInputType
    _sum?: RolPermisoSumAggregateInputType
    _min?: RolPermisoMinAggregateInputType
    _max?: RolPermisoMaxAggregateInputType
  }

  export type RolPermisoGroupByOutputType = {
    id: number
    rolId: number
    permisoId: number
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  type GetRolPermisoGroupByPayload<T extends RolPermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolPermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolPermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
            : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
        }
      >
    >


  export type RolPermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectScalar = {
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
  }

  export type RolPermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rolId" | "permisoId", ExtArgs["result"]["rolPermiso"]>
  export type RolPermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }

  export type $RolPermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolPermiso"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      permiso: Prisma.$PermisoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rolId: number
      permisoId: number
    }, ExtArgs["result"]["rolPermiso"]>
    composites: {}
  }

  type RolPermisoGetPayload<S extends boolean | null | undefined | RolPermisoDefaultArgs> = $Result.GetResult<Prisma.$RolPermisoPayload, S>

  type RolPermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolPermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolPermisoCountAggregateInputType | true
    }

  export interface RolPermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolPermiso'], meta: { name: 'RolPermiso' } }
    /**
     * Find zero or one RolPermiso that matches the filter.
     * @param {RolPermisoFindUniqueArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolPermisoFindUniqueArgs>(args: SelectSubset<T, RolPermisoFindUniqueArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolPermiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolPermisoFindUniqueOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolPermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, RolPermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolPermisoFindFirstArgs>(args?: SelectSubset<T, RolPermisoFindFirstArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolPermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, RolPermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany()
     * 
     * // Get first 10 RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolPermisoFindManyArgs>(args?: SelectSubset<T, RolPermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolPermiso.
     * @param {RolPermisoCreateArgs} args - Arguments to create a RolPermiso.
     * @example
     * // Create one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.create({
     *   data: {
     *     // ... data to create a RolPermiso
     *   }
     * })
     * 
     */
    create<T extends RolPermisoCreateArgs>(args: SelectSubset<T, RolPermisoCreateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolPermisos.
     * @param {RolPermisoCreateManyArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolPermisoCreateManyArgs>(args?: SelectSubset<T, RolPermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolPermisos and returns the data saved in the database.
     * @param {RolPermisoCreateManyAndReturnArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolPermisos and only return the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolPermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, RolPermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolPermiso.
     * @param {RolPermisoDeleteArgs} args - Arguments to delete one RolPermiso.
     * @example
     * // Delete one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.delete({
     *   where: {
     *     // ... filter to delete one RolPermiso
     *   }
     * })
     * 
     */
    delete<T extends RolPermisoDeleteArgs>(args: SelectSubset<T, RolPermisoDeleteArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolPermiso.
     * @param {RolPermisoUpdateArgs} args - Arguments to update one RolPermiso.
     * @example
     * // Update one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolPermisoUpdateArgs>(args: SelectSubset<T, RolPermisoUpdateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolPermisos.
     * @param {RolPermisoDeleteManyArgs} args - Arguments to filter RolPermisos to delete.
     * @example
     * // Delete a few RolPermisos
     * const { count } = await prisma.rolPermiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolPermisoDeleteManyArgs>(args?: SelectSubset<T, RolPermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolPermisoUpdateManyArgs>(args: SelectSubset<T, RolPermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos and returns the data updated in the database.
     * @param {RolPermisoUpdateManyAndReturnArgs} args - Arguments to update many RolPermisos.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolPermisos and only return the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolPermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, RolPermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolPermiso.
     * @param {RolPermisoUpsertArgs} args - Arguments to update or create a RolPermiso.
     * @example
     * // Update or create a RolPermiso
     * const rolPermiso = await prisma.rolPermiso.upsert({
     *   create: {
     *     // ... data to create a RolPermiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolPermiso we want to update
     *   }
     * })
     */
    upsert<T extends RolPermisoUpsertArgs>(args: SelectSubset<T, RolPermisoUpsertArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoCountArgs} args - Arguments to filter RolPermisos to count.
     * @example
     * // Count the number of RolPermisos
     * const count = await prisma.rolPermiso.count({
     *   where: {
     *     // ... the filter for the RolPermisos we want to count
     *   }
     * })
    **/
    count<T extends RolPermisoCountArgs>(
      args?: Subset<T, RolPermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolPermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolPermisoAggregateArgs>(args: Subset<T, RolPermisoAggregateArgs>): Prisma.PrismaPromise<GetRolPermisoAggregateType<T>>

    /**
     * Group by RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoGroupByArgs} args - Group by arguments.
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
      T extends RolPermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolPermisoGroupByArgs['orderBy'] }
        : { orderBy?: RolPermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolPermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolPermiso model
   */
  readonly fields: RolPermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolPermiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolPermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permiso<T extends PermisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermisoDefaultArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RolPermiso model
   */
  interface RolPermisoFieldRefs {
    readonly id: FieldRef<"RolPermiso", 'Int'>
    readonly rolId: FieldRef<"RolPermiso", 'Int'>
    readonly permisoId: FieldRef<"RolPermiso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolPermiso findUnique
   */
  export type RolPermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findUniqueOrThrow
   */
  export type RolPermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findFirst
   */
  export type RolPermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findFirstOrThrow
   */
  export type RolPermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findMany
   */
  export type RolPermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso create
   */
  export type RolPermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a RolPermiso.
     */
    data: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
  }

  /**
   * RolPermiso createMany
   */
  export type RolPermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolPermiso createManyAndReturn
   */
  export type RolPermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso update
   */
  export type RolPermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a RolPermiso.
     */
    data: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
    /**
     * Choose, which RolPermiso to update.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso updateMany
   */
  export type RolPermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
  }

  /**
   * RolPermiso updateManyAndReturn
   */
  export type RolPermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso upsert
   */
  export type RolPermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the RolPermiso to update in case it exists.
     */
    where: RolPermisoWhereUniqueInput
    /**
     * In case the RolPermiso found by the `where` argument doesn't exist, create a new RolPermiso with this data.
     */
    create: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
    /**
     * In case the RolPermiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
  }

  /**
   * RolPermiso delete
   */
  export type RolPermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter which RolPermiso to delete.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso deleteMany
   */
  export type RolPermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to delete
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to delete.
     */
    limit?: number
  }

  /**
   * RolPermiso without action
   */
  export type RolPermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    apellido: 'apellido',
    dni: 'dni',
    correo: 'correo',
    telefono: 'telefono',
    clave: 'clave',
    tipo: 'tipo',
    createdAt: 'createdAt',
    rolId: 'rolId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const InscripcionScalarFieldEnum: {
    id_inscripcion: 'id_inscripcion',
    id_usuario: 'id_usuario',
    id_carrera: 'id_carrera',
    fecha_inscripcion: 'fecha_inscripcion'
  };

  export type InscripcionScalarFieldEnum = (typeof InscripcionScalarFieldEnum)[keyof typeof InscripcionScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id_rol: 'id_rol',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id_permiso: 'id_permiso',
    nombre: 'nombre'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const RolPermisoScalarFieldEnum: {
    id: 'id',
    rolId: 'rolId',
    permisoId: 'permisoId'
  };

  export type RolPermisoScalarFieldEnum = (typeof RolPermisoScalarFieldEnum)[keyof typeof RolPermisoScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    dni?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    clave?: StringNullableFilter<"Usuario"> | string | null
    tipo?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    rolId?: IntFilter<"Usuario"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    clave?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rolId?: SortOrder
    rol?: RolOrderByWithRelationInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    dni?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    clave?: StringNullableFilter<"Usuario"> | string | null
    tipo?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    rolId?: IntFilter<"Usuario"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }, "id_usuario" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    clave?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rolId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    dni?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    clave?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    rolId?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type InscripcionWhereInput = {
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    id_inscripcion?: IntFilter<"Inscripcion"> | number
    id_usuario?: IntFilter<"Inscripcion"> | number
    id_carrera?: IntFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeFilter<"Inscripcion"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type InscripcionOrderByWithRelationInput = {
    id_inscripcion?: SortOrder
    id_usuario?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type InscripcionWhereUniqueInput = Prisma.AtLeast<{
    id_inscripcion?: number
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    id_usuario?: IntFilter<"Inscripcion"> | number
    id_carrera?: IntFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeFilter<"Inscripcion"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_inscripcion">

  export type InscripcionOrderByWithAggregationInput = {
    id_inscripcion?: SortOrder
    id_usuario?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
    _count?: InscripcionCountOrderByAggregateInput
    _avg?: InscripcionAvgOrderByAggregateInput
    _max?: InscripcionMaxOrderByAggregateInput
    _min?: InscripcionMinOrderByAggregateInput
    _sum?: InscripcionSumOrderByAggregateInput
  }

  export type InscripcionScalarWhereWithAggregatesInput = {
    AND?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    OR?: InscripcionScalarWhereWithAggregatesInput[]
    NOT?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    id_inscripcion?: IntWithAggregatesFilter<"Inscripcion"> | number
    id_usuario?: IntWithAggregatesFilter<"Inscripcion"> | number
    id_carrera?: IntWithAggregatesFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeWithAggregatesFilter<"Inscripcion"> | Date | string
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id_rol?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    permisos?: RolPermisoOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }, "id_rol">

  export type RolOrderByWithAggregationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id_permiso?: IntFilter<"Permiso"> | number
    nombre?: StringFilter<"Permiso"> | string
    rolPermisos?: RolPermisoListRelationFilter
  }

  export type PermisoOrderByWithRelationInput = {
    id_permiso?: SortOrder
    nombre?: SortOrder
    rolPermisos?: RolPermisoOrderByRelationAggregateInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id_permiso?: number
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    nombre?: StringFilter<"Permiso"> | string
    rolPermisos?: RolPermisoListRelationFilter
  }, "id_permiso">

  export type PermisoOrderByWithAggregationInput = {
    id_permiso?: SortOrder
    nombre?: SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _avg?: PermisoAvgOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
    _sum?: PermisoSumOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id_permiso?: IntWithAggregatesFilter<"Permiso"> | number
    nombre?: StringWithAggregatesFilter<"Permiso"> | string
  }

  export type RolPermisoWhereInput = {
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }

  export type RolPermisoOrderByWithRelationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    rol?: RolOrderByWithRelationInput
    permiso?: PermisoOrderByWithRelationInput
  }

  export type RolPermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }, "id">

  export type RolPermisoOrderByWithAggregationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    _count?: RolPermisoCountOrderByAggregateInput
    _avg?: RolPermisoAvgOrderByAggregateInput
    _max?: RolPermisoMaxOrderByAggregateInput
    _min?: RolPermisoMinOrderByAggregateInput
    _sum?: RolPermisoSumOrderByAggregateInput
  }

  export type RolPermisoScalarWhereWithAggregatesInput = {
    AND?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    OR?: RolPermisoScalarWhereWithAggregatesInput[]
    NOT?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolPermiso"> | number
    rolId?: IntWithAggregatesFilter<"RolPermiso"> | number
    permisoId?: IntWithAggregatesFilter<"RolPermiso"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    inscripciones?: InscripcionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
    rolId: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    inscripciones?: InscripcionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
    rolId: number
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateInput = {
    id_carrera: number
    fecha_inscripcion: Date | string
    usuario: UsuarioCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateInput = {
    id_inscripcion?: number
    id_usuario: number
    id_carrera: number
    fecha_inscripcion: Date | string
  }

  export type InscripcionUpdateInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscripcionCreateManyInput = {
    id_inscripcion?: number
    id_usuario: number
    id_carrera: number
    fecha_inscripcion: Date | string
  }

  export type InscripcionUpdateManyMutationInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscripcionUncheckedUpdateManyInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolCreateInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id_rol?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id_rol?: number
    nombre: string
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoCreateInput = {
    nombre: string
    rolPermisos?: RolPermisoCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUncheckedCreateInput = {
    id_permiso?: number
    nombre: string
    rolPermisos?: RolPermisoUncheckedCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rolPermisos?: RolPermisoUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id_permiso?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    rolPermisos?: RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoCreateManyInput = {
    id_permiso?: number
    nombre: string
  }

  export type PermisoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoUncheckedUpdateManyInput = {
    id_permiso?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolPermisoCreateInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
    permiso: PermisoCreateNestedOneWithoutRolPermisosInput
  }

  export type RolPermisoUncheckedCreateInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
    permiso?: PermisoUpdateOneRequiredWithoutRolPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateManyMutationInput = {

  }

  export type RolPermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
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
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type InscripcionListRelationFilter = {
    every?: InscripcionWhereInput
    some?: InscripcionWhereInput
    none?: InscripcionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InscripcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    clave?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    clave?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    clave?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    rolId?: SortOrder
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
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type InscripcionCountOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_usuario?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
  }

  export type InscripcionAvgOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_usuario?: SortOrder
    id_carrera?: SortOrder
  }

  export type InscripcionMaxOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_usuario?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
  }

  export type InscripcionMinOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_usuario?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
  }

  export type InscripcionSumOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_usuario?: SortOrder
    id_carrera?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type RolPermisoListRelationFilter = {
    every?: RolPermisoWhereInput
    some?: RolPermisoWhereInput
    none?: RolPermisoWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolPermisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type PermisoCountOrderByAggregateInput = {
    id_permiso?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoAvgOrderByAggregateInput = {
    id_permiso?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id_permiso?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id_permiso?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoSumOrderByAggregateInput = {
    id_permiso?: SortOrder
  }

  export type PermisoScalarRelationFilter = {
    is?: PermisoWhereInput
    isNot?: PermisoWhereInput
  }

  export type RolPermisoCountOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMinOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type InscripcionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InscripcionCreateWithoutUsuarioInput, InscripcionUncheckedCreateWithoutUsuarioInput> | InscripcionCreateWithoutUsuarioInput[] | InscripcionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutUsuarioInput | InscripcionCreateOrConnectWithoutUsuarioInput[]
    createMany?: InscripcionCreateManyUsuarioInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InscripcionCreateWithoutUsuarioInput, InscripcionUncheckedCreateWithoutUsuarioInput> | InscripcionCreateWithoutUsuarioInput[] | InscripcionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutUsuarioInput | InscripcionCreateOrConnectWithoutUsuarioInput[]
    createMany?: InscripcionCreateManyUsuarioInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type InscripcionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InscripcionCreateWithoutUsuarioInput, InscripcionUncheckedCreateWithoutUsuarioInput> | InscripcionCreateWithoutUsuarioInput[] | InscripcionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutUsuarioInput | InscripcionCreateOrConnectWithoutUsuarioInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutUsuarioInput | InscripcionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InscripcionCreateManyUsuarioInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutUsuarioInput | InscripcionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutUsuarioInput | InscripcionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InscripcionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InscripcionCreateWithoutUsuarioInput, InscripcionUncheckedCreateWithoutUsuarioInput> | InscripcionCreateWithoutUsuarioInput[] | InscripcionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutUsuarioInput | InscripcionCreateOrConnectWithoutUsuarioInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutUsuarioInput | InscripcionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InscripcionCreateManyUsuarioInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutUsuarioInput | InscripcionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutUsuarioInput | InscripcionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionesInput
    upsert?: UsuarioUpsertWithoutInscripcionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutInscripcionesInput, UsuarioUpdateWithoutInscripcionesInput>, UsuarioUncheckedUpdateWithoutInscripcionesInput>
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type RolPermisoCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolPermisoUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    connect?: RolWhereUniqueInput
  }

  export type PermisoCreateNestedOneWithoutRolPermisosInput = {
    create?: XOR<PermisoCreateWithoutRolPermisosInput, PermisoUncheckedCreateWithoutRolPermisosInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolPermisosInput
    connect?: PermisoWhereUniqueInput
  }

  export type RolUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    upsert?: RolUpsertWithoutPermisosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPermisosInput, RolUpdateWithoutPermisosInput>, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type PermisoUpdateOneRequiredWithoutRolPermisosNestedInput = {
    create?: XOR<PermisoCreateWithoutRolPermisosInput, PermisoUncheckedCreateWithoutRolPermisosInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolPermisosInput
    upsert?: PermisoUpsertWithoutRolPermisosInput
    connect?: PermisoWhereUniqueInput
    update?: XOR<XOR<PermisoUpdateToOneWithWhereWithoutRolPermisosInput, PermisoUpdateWithoutRolPermisosInput>, PermisoUncheckedUpdateWithoutRolPermisosInput>
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
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id_rol?: number
    nombre: string
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type InscripcionCreateWithoutUsuarioInput = {
    id_carrera: number
    fecha_inscripcion: Date | string
  }

  export type InscripcionUncheckedCreateWithoutUsuarioInput = {
    id_inscripcion?: number
    id_carrera: number
    fecha_inscripcion: Date | string
  }

  export type InscripcionCreateOrConnectWithoutUsuarioInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutUsuarioInput, InscripcionUncheckedCreateWithoutUsuarioInput>
  }

  export type InscripcionCreateManyUsuarioInputEnvelope = {
    data: InscripcionCreateManyUsuarioInput | InscripcionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type InscripcionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutUsuarioInput, InscripcionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<InscripcionCreateWithoutUsuarioInput, InscripcionUncheckedCreateWithoutUsuarioInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutUsuarioInput, InscripcionUncheckedUpdateWithoutUsuarioInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutUsuarioInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type InscripcionScalarWhereInput = {
    AND?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    OR?: InscripcionScalarWhereInput[]
    NOT?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    id_inscripcion?: IntFilter<"Inscripcion"> | number
    id_usuario?: IntFilter<"Inscripcion"> | number
    id_carrera?: IntFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeFilter<"Inscripcion"> | Date | string
  }

  export type UsuarioCreateWithoutInscripcionesInput = {
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutInscripcionesInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
    rolId: number
  }

  export type UsuarioCreateOrConnectWithoutInscripcionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
  }

  export type UsuarioUpsertWithoutInscripcionesInput = {
    update: XOR<UsuarioUpdateWithoutInscripcionesInput, UsuarioUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutInscripcionesInput, UsuarioUncheckedUpdateWithoutInscripcionesInput>
  }

  export type UsuarioUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInscripcionesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutRolInput = {
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
    inscripciones?: InscripcionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoCreateWithoutRolInput = {
    permiso: PermisoCreateNestedOneWithoutRolPermisosInput
  }

  export type RolPermisoUncheckedCreateWithoutRolInput = {
    id?: number
    permisoId: number
  }

  export type RolPermisoCreateOrConnectWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoCreateManyRolInputEnvelope = {
    data: RolPermisoCreateManyRolInput | RolPermisoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    dni?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    clave?: StringNullableFilter<"Usuario"> | string | null
    tipo?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    rolId?: IntFilter<"Usuario"> | number
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutRolInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoScalarWhereInput = {
    AND?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    OR?: RolPermisoScalarWhereInput[]
    NOT?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
  }

  export type RolPermisoCreateWithoutPermisoInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type RolPermisoUncheckedCreateWithoutPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoCreateOrConnectWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoCreateManyPermisoInputEnvelope = {
    data: RolPermisoCreateManyPermisoInput | RolPermisoCreateManyPermisoInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutPermisoInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutPermisoInput>
  }

  export type RolCreateWithoutPermisosInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPermisosInput = {
    id_rol?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPermisosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
  }

  export type PermisoCreateWithoutRolPermisosInput = {
    nombre: string
  }

  export type PermisoUncheckedCreateWithoutRolPermisosInput = {
    id_permiso?: number
    nombre: string
  }

  export type PermisoCreateOrConnectWithoutRolPermisosInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutRolPermisosInput, PermisoUncheckedCreateWithoutRolPermisosInput>
  }

  export type RolUpsertWithoutPermisosInput = {
    update: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolUpdateWithoutPermisosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPermisosInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type PermisoUpsertWithoutRolPermisosInput = {
    update: XOR<PermisoUpdateWithoutRolPermisosInput, PermisoUncheckedUpdateWithoutRolPermisosInput>
    create: XOR<PermisoCreateWithoutRolPermisosInput, PermisoUncheckedCreateWithoutRolPermisosInput>
    where?: PermisoWhereInput
  }

  export type PermisoUpdateToOneWithWhereWithoutRolPermisosInput = {
    where?: PermisoWhereInput
    data: XOR<PermisoUpdateWithoutRolPermisosInput, PermisoUncheckedUpdateWithoutRolPermisosInput>
  }

  export type PermisoUpdateWithoutRolPermisosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoUncheckedUpdateWithoutRolPermisosInput = {
    id_permiso?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionCreateManyUsuarioInput = {
    id_inscripcion?: number
    id_carrera: number
    fecha_inscripcion: Date | string
  }

  export type InscripcionUpdateWithoutUsuarioInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscripcionUncheckedUpdateWithoutUsuarioInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscripcionUncheckedUpdateManyWithoutUsuarioInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyRolInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    dni: string
    correo: string
    telefono?: string | null
    clave?: string | null
    tipo?: string | null
    createdAt?: Date | string
  }

  export type RolPermisoCreateManyRolInput = {
    id?: number
    permisoId: number
  }

  export type UsuarioUpdateWithoutRolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inscripciones?: InscripcionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolPermisoUpdateWithoutRolInput = {
    permiso?: PermisoUpdateOneRequiredWithoutRolPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoUpdateWithoutPermisoInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
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