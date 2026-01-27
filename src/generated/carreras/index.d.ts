
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
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model Aula
 * 
 */
export type Aula = $Result.DefaultSelection<Prisma.$AulaPayload>
/**
 * Model Materia
 * Materia mantiene su relación con Carrera/Aula dentro de esta DB.
 *   Además tiene id_inscripcion (Int) que referencia LÓGICAMENTE a Inscripcion.id_inscripcion
 *   en la DB usuarios (no es relación Prisma).
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Periodo
 * 
 */
export type Periodo = $Result.DefaultSelection<Prisma.$PeriodoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carreras
 * const carreras = await prisma.carrera.findMany()
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
   * // Fetch zero or more Carreras
   * const carreras = await prisma.carrera.findMany()
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
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aula`: Exposes CRUD operations for the **Aula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas
    * const aulas = await prisma.aula.findMany()
    * ```
    */
  get aula(): Prisma.AulaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periodo`: Exposes CRUD operations for the **Periodo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periodos
    * const periodos = await prisma.periodo.findMany()
    * ```
    */
  get periodo(): Prisma.PeriodoDelegate<ExtArgs, ClientOptions>;
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
    Carrera: 'Carrera',
    Aula: 'Aula',
    Materia: 'Materia',
    Periodo: 'Periodo'
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
      modelProps: "carrera" | "aula" | "materia" | "periodo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarreraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      Aula: {
        payload: Prisma.$AulaPayload<ExtArgs>
        fields: Prisma.AulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findFirst: {
            args: Prisma.AulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findMany: {
            args: Prisma.AulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          create: {
            args: Prisma.AulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          createMany: {
            args: Prisma.AulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AulaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          delete: {
            args: Prisma.AulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          update: {
            args: Prisma.AulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          deleteMany: {
            args: Prisma.AulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AulaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          upsert: {
            args: Prisma.AulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          aggregate: {
            args: Prisma.AulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAula>
          }
          groupBy: {
            args: Prisma.AulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AulaCountArgs<ExtArgs>
            result: $Utils.Optional<AulaCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Periodo: {
        payload: Prisma.$PeriodoPayload<ExtArgs>
        fields: Prisma.PeriodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findFirst: {
            args: Prisma.PeriodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findMany: {
            args: Prisma.PeriodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          create: {
            args: Prisma.PeriodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          createMany: {
            args: Prisma.PeriodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          delete: {
            args: Prisma.PeriodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          update: {
            args: Prisma.PeriodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          deleteMany: {
            args: Prisma.PeriodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeriodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          upsert: {
            args: Prisma.PeriodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          aggregate: {
            args: Prisma.PeriodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodo>
          }
          groupBy: {
            args: Prisma.PeriodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodoCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodoCountAggregateOutputType> | number
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
    carrera?: CarreraOmit
    aula?: AulaOmit
    materia?: MateriaOmit
    periodo?: PeriodoOmit
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
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    materias: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | CarreraCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }


  /**
   * Count Type AulaCountOutputType
   */

  export type AulaCountOutputType = {
    materias: number
  }

  export type AulaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | AulaCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaCountOutputType
     */
    select?: AulaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }


  /**
   * Count Type PeriodoCountOutputType
   */

  export type PeriodoCountOutputType = {
    materias: number
  }

  export type PeriodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | PeriodoCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodoCountOutputType
     */
    select?: PeriodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id_carrera: number | null
    duracion_anos: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id_carrera: number | null
    duracion_anos: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id_carrera: number | null
    nombre_carrera: string | null
    duracion_anos: number | null
  }

  export type CarreraMaxAggregateOutputType = {
    id_carrera: number | null
    nombre_carrera: string | null
    duracion_anos: number | null
  }

  export type CarreraCountAggregateOutputType = {
    id_carrera: number
    nombre_carrera: number
    duracion_anos: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id_carrera?: true
    duracion_anos?: true
  }

  export type CarreraSumAggregateInputType = {
    id_carrera?: true
    duracion_anos?: true
  }

  export type CarreraMinAggregateInputType = {
    id_carrera?: true
    nombre_carrera?: true
    duracion_anos?: true
  }

  export type CarreraMaxAggregateInputType = {
    id_carrera?: true
    nombre_carrera?: true
    duracion_anos?: true
  }

  export type CarreraCountAggregateInputType = {
    id_carrera?: true
    nombre_carrera?: true
    duracion_anos?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id_carrera: number
    nombre_carrera: string
    duracion_anos: number
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre_carrera?: boolean
    duracion_anos?: boolean
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre_carrera?: boolean
    duracion_anos?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre_carrera?: boolean
    duracion_anos?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectScalar = {
    id_carrera?: boolean
    nombre_carrera?: boolean
    duracion_anos?: boolean
  }

  export type CarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_carrera" | "nombre_carrera" | "duracion_anos", ExtArgs["result"]["carrera"]>
  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarreraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      materias: Prisma.$MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_carrera: number
      nombre_carrera: string
      duracion_anos: number
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id_carrera`
     * const carreraWithId_carreraOnly = await prisma.carrera.findMany({ select: { id_carrera: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreras and returns the data saved in the database.
     * @param {CarreraCreateManyAndReturnArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreras and only return the `id_carrera`
     * const carreraWithId_carreraOnly = await prisma.carrera.createManyAndReturn({
     *   select: { id_carrera: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras and returns the data updated in the database.
     * @param {CarreraUpdateManyAndReturnArgs} args - Arguments to update many Carreras.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carreras and only return the `id_carrera`
     * const carreraWithId_carreraOnly = await prisma.carrera.updateManyAndReturn({
     *   select: { id_carrera: true },
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
    updateManyAndReturn<T extends CarreraUpdateManyAndReturnArgs>(args: SelectSubset<T, CarreraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
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
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends Carrera$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carrera model
   */
  interface CarreraFieldRefs {
    readonly id_carrera: FieldRef<"Carrera", 'Int'>
    readonly nombre_carrera: FieldRef<"Carrera", 'String'>
    readonly duracion_anos: FieldRef<"Carrera", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera createManyAndReturn
   */
  export type CarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera updateManyAndReturn
   */
  export type CarreraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to delete.
     */
    limit?: number
  }

  /**
   * Carrera.materias
   */
  export type Carrera$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model Aula
   */

  export type AggregateAula = {
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  export type AulaAvgAggregateOutputType = {
    id_aula: number | null
    capacidad: number | null
  }

  export type AulaSumAggregateOutputType = {
    id_aula: number | null
    capacidad: number | null
  }

  export type AulaMinAggregateOutputType = {
    id_aula: number | null
    nombre_aula: string | null
    capacidad: number | null
    ubicacion: string | null
  }

  export type AulaMaxAggregateOutputType = {
    id_aula: number | null
    nombre_aula: string | null
    capacidad: number | null
    ubicacion: string | null
  }

  export type AulaCountAggregateOutputType = {
    id_aula: number
    nombre_aula: number
    capacidad: number
    ubicacion: number
    _all: number
  }


  export type AulaAvgAggregateInputType = {
    id_aula?: true
    capacidad?: true
  }

  export type AulaSumAggregateInputType = {
    id_aula?: true
    capacidad?: true
  }

  export type AulaMinAggregateInputType = {
    id_aula?: true
    nombre_aula?: true
    capacidad?: true
    ubicacion?: true
  }

  export type AulaMaxAggregateInputType = {
    id_aula?: true
    nombre_aula?: true
    capacidad?: true
    ubicacion?: true
  }

  export type AulaCountAggregateInputType = {
    id_aula?: true
    nombre_aula?: true
    capacidad?: true
    ubicacion?: true
    _all?: true
  }

  export type AulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aula to aggregate.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aulas
    **/
    _count?: true | AulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulaMaxAggregateInputType
  }

  export type GetAulaAggregateType<T extends AulaAggregateArgs> = {
        [P in keyof T & keyof AggregateAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAula[P]>
      : GetScalarType<T[P], AggregateAula[P]>
  }




  export type AulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithAggregationInput | AulaOrderByWithAggregationInput[]
    by: AulaScalarFieldEnum[] | AulaScalarFieldEnum
    having?: AulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulaCountAggregateInputType | true
    _avg?: AulaAvgAggregateInputType
    _sum?: AulaSumAggregateInputType
    _min?: AulaMinAggregateInputType
    _max?: AulaMaxAggregateInputType
  }

  export type AulaGroupByOutputType = {
    id_aula: number
    nombre_aula: string
    capacidad: number
    ubicacion: string | null
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  type GetAulaGroupByPayload<T extends AulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulaGroupByOutputType[P]>
            : GetScalarType<T[P], AulaGroupByOutputType[P]>
        }
      >
    >


  export type AulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aula?: boolean
    nombre_aula?: boolean
    capacidad?: boolean
    ubicacion?: boolean
    materias?: boolean | Aula$materiasArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aula?: boolean
    nombre_aula?: boolean
    capacidad?: boolean
    ubicacion?: boolean
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aula?: boolean
    nombre_aula?: boolean
    capacidad?: boolean
    ubicacion?: boolean
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectScalar = {
    id_aula?: boolean
    nombre_aula?: boolean
    capacidad?: boolean
    ubicacion?: boolean
  }

  export type AulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_aula" | "nombre_aula" | "capacidad" | "ubicacion", ExtArgs["result"]["aula"]>
  export type AulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | Aula$materiasArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AulaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AulaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aula"
    objects: {
      materias: Prisma.$MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_aula: number
      nombre_aula: string
      capacidad: number
      ubicacion: string | null
    }, ExtArgs["result"]["aula"]>
    composites: {}
  }

  type AulaGetPayload<S extends boolean | null | undefined | AulaDefaultArgs> = $Result.GetResult<Prisma.$AulaPayload, S>

  type AulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AulaCountAggregateInputType | true
    }

  export interface AulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aula'], meta: { name: 'Aula' } }
    /**
     * Find zero or one Aula that matches the filter.
     * @param {AulaFindUniqueArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AulaFindUniqueArgs>(args: SelectSubset<T, AulaFindUniqueArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AulaFindUniqueOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AulaFindUniqueOrThrowArgs>(args: SelectSubset<T, AulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AulaFindFirstArgs>(args?: SelectSubset<T, AulaFindFirstArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AulaFindFirstOrThrowArgs>(args?: SelectSubset<T, AulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aula.findMany()
     * 
     * // Get first 10 Aulas
     * const aulas = await prisma.aula.findMany({ take: 10 })
     * 
     * // Only select the `id_aula`
     * const aulaWithId_aulaOnly = await prisma.aula.findMany({ select: { id_aula: true } })
     * 
     */
    findMany<T extends AulaFindManyArgs>(args?: SelectSubset<T, AulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aula.
     * @param {AulaCreateArgs} args - Arguments to create a Aula.
     * @example
     * // Create one Aula
     * const Aula = await prisma.aula.create({
     *   data: {
     *     // ... data to create a Aula
     *   }
     * })
     * 
     */
    create<T extends AulaCreateArgs>(args: SelectSubset<T, AulaCreateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aulas.
     * @param {AulaCreateManyArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AulaCreateManyArgs>(args?: SelectSubset<T, AulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aulas and returns the data saved in the database.
     * @param {AulaCreateManyAndReturnArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aulas and only return the `id_aula`
     * const aulaWithId_aulaOnly = await prisma.aula.createManyAndReturn({
     *   select: { id_aula: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AulaCreateManyAndReturnArgs>(args?: SelectSubset<T, AulaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aula.
     * @param {AulaDeleteArgs} args - Arguments to delete one Aula.
     * @example
     * // Delete one Aula
     * const Aula = await prisma.aula.delete({
     *   where: {
     *     // ... filter to delete one Aula
     *   }
     * })
     * 
     */
    delete<T extends AulaDeleteArgs>(args: SelectSubset<T, AulaDeleteArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aula.
     * @param {AulaUpdateArgs} args - Arguments to update one Aula.
     * @example
     * // Update one Aula
     * const aula = await prisma.aula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AulaUpdateArgs>(args: SelectSubset<T, AulaUpdateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aulas.
     * @param {AulaDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AulaDeleteManyArgs>(args?: SelectSubset<T, AulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AulaUpdateManyArgs>(args: SelectSubset<T, AulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas and returns the data updated in the database.
     * @param {AulaUpdateManyAndReturnArgs} args - Arguments to update many Aulas.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aulas and only return the `id_aula`
     * const aulaWithId_aulaOnly = await prisma.aula.updateManyAndReturn({
     *   select: { id_aula: true },
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
    updateManyAndReturn<T extends AulaUpdateManyAndReturnArgs>(args: SelectSubset<T, AulaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aula.
     * @param {AulaUpsertArgs} args - Arguments to update or create a Aula.
     * @example
     * // Update or create a Aula
     * const aula = await prisma.aula.upsert({
     *   create: {
     *     // ... data to create a Aula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aula we want to update
     *   }
     * })
     */
    upsert<T extends AulaUpsertArgs>(args: SelectSubset<T, AulaUpsertArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aula.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends AulaCountArgs>(
      args?: Subset<T, AulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulaAggregateArgs>(args: Subset<T, AulaAggregateArgs>): Prisma.PrismaPromise<GetAulaAggregateType<T>>

    /**
     * Group by Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaGroupByArgs} args - Group by arguments.
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
      T extends AulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AulaGroupByArgs['orderBy'] }
        : { orderBy?: AulaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aula model
   */
  readonly fields: AulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends Aula$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Aula$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aula model
   */
  interface AulaFieldRefs {
    readonly id_aula: FieldRef<"Aula", 'Int'>
    readonly nombre_aula: FieldRef<"Aula", 'String'>
    readonly capacidad: FieldRef<"Aula", 'Int'>
    readonly ubicacion: FieldRef<"Aula", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aula findUnique
   */
  export type AulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findUniqueOrThrow
   */
  export type AulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findFirst
   */
  export type AulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findFirstOrThrow
   */
  export type AulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findMany
   */
  export type AulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aulas to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula create
   */
  export type AulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to create a Aula.
     */
    data: XOR<AulaCreateInput, AulaUncheckedCreateInput>
  }

  /**
   * Aula createMany
   */
  export type AulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aula createManyAndReturn
   */
  export type AulaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aula update
   */
  export type AulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to update a Aula.
     */
    data: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
    /**
     * Choose, which Aula to update.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula updateMany
   */
  export type AulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aulas.
     */
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyInput>
    /**
     * Filter which Aulas to update
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to update.
     */
    limit?: number
  }

  /**
   * Aula updateManyAndReturn
   */
  export type AulaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * The data used to update Aulas.
     */
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyInput>
    /**
     * Filter which Aulas to update
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to update.
     */
    limit?: number
  }

  /**
   * Aula upsert
   */
  export type AulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The filter to search for the Aula to update in case it exists.
     */
    where: AulaWhereUniqueInput
    /**
     * In case the Aula found by the `where` argument doesn't exist, create a new Aula with this data.
     */
    create: XOR<AulaCreateInput, AulaUncheckedCreateInput>
    /**
     * In case the Aula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
  }

  /**
   * Aula delete
   */
  export type AulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter which Aula to delete.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula deleteMany
   */
  export type AulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aulas to delete
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to delete.
     */
    limit?: number
  }

  /**
   * Aula.materias
   */
  export type Aula$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Aula without action
   */
  export type AulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id_materia: number | null
    id_carrera: number | null
    id_aula: number | null
    periodoId: number | null
    id_inscripcion: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id_materia: number | null
    id_carrera: number | null
    id_aula: number | null
    periodoId: number | null
    id_inscripcion: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id_materia: number | null
    nombre_materia: string | null
    id_carrera: number | null
    id_aula: number | null
    periodoId: number | null
    id_inscripcion: number | null
  }

  export type MateriaMaxAggregateOutputType = {
    id_materia: number | null
    nombre_materia: string | null
    id_carrera: number | null
    id_aula: number | null
    periodoId: number | null
    id_inscripcion: number | null
  }

  export type MateriaCountAggregateOutputType = {
    id_materia: number
    nombre_materia: number
    id_carrera: number
    id_aula: number
    periodoId: number
    id_inscripcion: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id_materia?: true
    id_carrera?: true
    id_aula?: true
    periodoId?: true
    id_inscripcion?: true
  }

  export type MateriaSumAggregateInputType = {
    id_materia?: true
    id_carrera?: true
    id_aula?: true
    periodoId?: true
    id_inscripcion?: true
  }

  export type MateriaMinAggregateInputType = {
    id_materia?: true
    nombre_materia?: true
    id_carrera?: true
    id_aula?: true
    periodoId?: true
    id_inscripcion?: true
  }

  export type MateriaMaxAggregateInputType = {
    id_materia?: true
    nombre_materia?: true
    id_carrera?: true
    id_aula?: true
    periodoId?: true
    id_inscripcion?: true
  }

  export type MateriaCountAggregateInputType = {
    id_materia?: true
    nombre_materia?: true
    id_carrera?: true
    id_aula?: true
    periodoId?: true
    id_inscripcion?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id_materia: number
    nombre_materia: string
    id_carrera: number
    id_aula: number
    periodoId: number | null
    id_inscripcion: number | null
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre_materia?: boolean
    id_carrera?: boolean
    id_aula?: boolean
    periodoId?: boolean
    id_inscripcion?: boolean
    periodo?: boolean | Materia$periodoArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre_materia?: boolean
    id_carrera?: boolean
    id_aula?: boolean
    periodoId?: boolean
    id_inscripcion?: boolean
    periodo?: boolean | Materia$periodoArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre_materia?: boolean
    id_carrera?: boolean
    id_aula?: boolean
    periodoId?: boolean
    id_inscripcion?: boolean
    periodo?: boolean | Materia$periodoArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id_materia?: boolean
    nombre_materia?: boolean
    id_carrera?: boolean
    id_aula?: boolean
    periodoId?: boolean
    id_inscripcion?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_materia" | "nombre_materia" | "id_carrera" | "id_aula" | "periodoId" | "id_inscripcion", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    periodo?: boolean | Materia$periodoArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    periodo?: boolean | Materia$periodoArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    periodo?: boolean | Materia$periodoArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      periodo: Prisma.$PeriodoPayload<ExtArgs> | null
      carrera: Prisma.$CarreraPayload<ExtArgs>
      aula: Prisma.$AulaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_materia: number
      nombre_materia: string
      id_carrera: number
      id_aula: number
      periodoId: number | null
      id_inscripcion: number | null
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.findMany({ select: { id_materia: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.createManyAndReturn({
     *   select: { id_materia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.updateManyAndReturn({
     *   select: { id_materia: true },
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
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
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
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    periodo<T extends Materia$periodoArgs<ExtArgs> = {}>(args?: Subset<T, Materia$periodoArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aula<T extends AulaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AulaDefaultArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id_materia: FieldRef<"Materia", 'Int'>
    readonly nombre_materia: FieldRef<"Materia", 'String'>
    readonly id_carrera: FieldRef<"Materia", 'Int'>
    readonly id_aula: FieldRef<"Materia", 'Int'>
    readonly periodoId: FieldRef<"Materia", 'Int'>
    readonly id_inscripcion: FieldRef<"Materia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.periodo
   */
  export type Materia$periodoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    where?: PeriodoWhereInput
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Periodo
   */

  export type AggregatePeriodo = {
    _count: PeriodoCountAggregateOutputType | null
    _avg: PeriodoAvgAggregateOutputType | null
    _sum: PeriodoSumAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  export type PeriodoAvgAggregateOutputType = {
    id_periodo: number | null
  }

  export type PeriodoSumAggregateOutputType = {
    id_periodo: number | null
  }

  export type PeriodoMinAggregateOutputType = {
    id_periodo: number | null
    nombre: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
  }

  export type PeriodoMaxAggregateOutputType = {
    id_periodo: number | null
    nombre: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
  }

  export type PeriodoCountAggregateOutputType = {
    id_periodo: number
    nombre: number
    fecha_inicio: number
    fecha_fin: number
    _all: number
  }


  export type PeriodoAvgAggregateInputType = {
    id_periodo?: true
  }

  export type PeriodoSumAggregateInputType = {
    id_periodo?: true
  }

  export type PeriodoMinAggregateInputType = {
    id_periodo?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
  }

  export type PeriodoMaxAggregateInputType = {
    id_periodo?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
  }

  export type PeriodoCountAggregateInputType = {
    id_periodo?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
    _all?: true
  }

  export type PeriodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodo to aggregate.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Periodos
    **/
    _count?: true | PeriodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodoMaxAggregateInputType
  }

  export type GetPeriodoAggregateType<T extends PeriodoAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodo[P]>
      : GetScalarType<T[P], AggregatePeriodo[P]>
  }




  export type PeriodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodoWhereInput
    orderBy?: PeriodoOrderByWithAggregationInput | PeriodoOrderByWithAggregationInput[]
    by: PeriodoScalarFieldEnum[] | PeriodoScalarFieldEnum
    having?: PeriodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodoCountAggregateInputType | true
    _avg?: PeriodoAvgAggregateInputType
    _sum?: PeriodoSumAggregateInputType
    _min?: PeriodoMinAggregateInputType
    _max?: PeriodoMaxAggregateInputType
  }

  export type PeriodoGroupByOutputType = {
    id_periodo: number
    nombre: string
    fecha_inicio: Date
    fecha_fin: Date
    _count: PeriodoCountAggregateOutputType | null
    _avg: PeriodoAvgAggregateOutputType | null
    _sum: PeriodoSumAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  type GetPeriodoGroupByPayload<T extends PeriodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
        }
      >
    >


  export type PeriodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    materias?: boolean | Periodo$materiasArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectScalar = {
    id_periodo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }

  export type PeriodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_periodo" | "nombre" | "fecha_inicio" | "fecha_fin", ExtArgs["result"]["periodo"]>
  export type PeriodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | Periodo$materiasArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeriodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeriodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Periodo"
    objects: {
      materias: Prisma.$MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_periodo: number
      nombre: string
      fecha_inicio: Date
      fecha_fin: Date
    }, ExtArgs["result"]["periodo"]>
    composites: {}
  }

  type PeriodoGetPayload<S extends boolean | null | undefined | PeriodoDefaultArgs> = $Result.GetResult<Prisma.$PeriodoPayload, S>

  type PeriodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodoCountAggregateInputType | true
    }

  export interface PeriodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Periodo'], meta: { name: 'Periodo' } }
    /**
     * Find zero or one Periodo that matches the filter.
     * @param {PeriodoFindUniqueArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodoFindUniqueArgs>(args: SelectSubset<T, PeriodoFindUniqueArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Periodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriodoFindUniqueOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodoFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodoFindFirstArgs>(args?: SelectSubset<T, PeriodoFindFirstArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodoFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Periodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodos
     * const periodos = await prisma.periodo.findMany()
     * 
     * // Get first 10 Periodos
     * const periodos = await prisma.periodo.findMany({ take: 10 })
     * 
     * // Only select the `id_periodo`
     * const periodoWithId_periodoOnly = await prisma.periodo.findMany({ select: { id_periodo: true } })
     * 
     */
    findMany<T extends PeriodoFindManyArgs>(args?: SelectSubset<T, PeriodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Periodo.
     * @param {PeriodoCreateArgs} args - Arguments to create a Periodo.
     * @example
     * // Create one Periodo
     * const Periodo = await prisma.periodo.create({
     *   data: {
     *     // ... data to create a Periodo
     *   }
     * })
     * 
     */
    create<T extends PeriodoCreateArgs>(args: SelectSubset<T, PeriodoCreateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Periodos.
     * @param {PeriodoCreateManyArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodoCreateManyArgs>(args?: SelectSubset<T, PeriodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Periodos and returns the data saved in the database.
     * @param {PeriodoCreateManyAndReturnArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Periodos and only return the `id_periodo`
     * const periodoWithId_periodoOnly = await prisma.periodo.createManyAndReturn({
     *   select: { id_periodo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodoCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Periodo.
     * @param {PeriodoDeleteArgs} args - Arguments to delete one Periodo.
     * @example
     * // Delete one Periodo
     * const Periodo = await prisma.periodo.delete({
     *   where: {
     *     // ... filter to delete one Periodo
     *   }
     * })
     * 
     */
    delete<T extends PeriodoDeleteArgs>(args: SelectSubset<T, PeriodoDeleteArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Periodo.
     * @param {PeriodoUpdateArgs} args - Arguments to update one Periodo.
     * @example
     * // Update one Periodo
     * const periodo = await prisma.periodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodoUpdateArgs>(args: SelectSubset<T, PeriodoUpdateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Periodos.
     * @param {PeriodoDeleteManyArgs} args - Arguments to filter Periodos to delete.
     * @example
     * // Delete a few Periodos
     * const { count } = await prisma.periodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodoDeleteManyArgs>(args?: SelectSubset<T, PeriodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodoUpdateManyArgs>(args: SelectSubset<T, PeriodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos and returns the data updated in the database.
     * @param {PeriodoUpdateManyAndReturnArgs} args - Arguments to update many Periodos.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Periodos and only return the `id_periodo`
     * const periodoWithId_periodoOnly = await prisma.periodo.updateManyAndReturn({
     *   select: { id_periodo: true },
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
    updateManyAndReturn<T extends PeriodoUpdateManyAndReturnArgs>(args: SelectSubset<T, PeriodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Periodo.
     * @param {PeriodoUpsertArgs} args - Arguments to update or create a Periodo.
     * @example
     * // Update or create a Periodo
     * const periodo = await prisma.periodo.upsert({
     *   create: {
     *     // ... data to create a Periodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periodo we want to update
     *   }
     * })
     */
    upsert<T extends PeriodoUpsertArgs>(args: SelectSubset<T, PeriodoUpsertArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoCountArgs} args - Arguments to filter Periodos to count.
     * @example
     * // Count the number of Periodos
     * const count = await prisma.periodo.count({
     *   where: {
     *     // ... the filter for the Periodos we want to count
     *   }
     * })
    **/
    count<T extends PeriodoCountArgs>(
      args?: Subset<T, PeriodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeriodoAggregateArgs>(args: Subset<T, PeriodoAggregateArgs>): Prisma.PrismaPromise<GetPeriodoAggregateType<T>>

    /**
     * Group by Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoGroupByArgs} args - Group by arguments.
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
      T extends PeriodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodoGroupByArgs['orderBy'] }
        : { orderBy?: PeriodoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeriodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Periodo model
   */
  readonly fields: PeriodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Periodo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends Periodo$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Periodo model
   */
  interface PeriodoFieldRefs {
    readonly id_periodo: FieldRef<"Periodo", 'Int'>
    readonly nombre: FieldRef<"Periodo", 'String'>
    readonly fecha_inicio: FieldRef<"Periodo", 'DateTime'>
    readonly fecha_fin: FieldRef<"Periodo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Periodo findUnique
   */
  export type PeriodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findUniqueOrThrow
   */
  export type PeriodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findFirst
   */
  export type PeriodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findFirstOrThrow
   */
  export type PeriodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findMany
   */
  export type PeriodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodos to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo create
   */
  export type PeriodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Periodo.
     */
    data: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
  }

  /**
   * Periodo createMany
   */
  export type PeriodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo createManyAndReturn
   */
  export type PeriodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo update
   */
  export type PeriodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Periodo.
     */
    data: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
    /**
     * Choose, which Periodo to update.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo updateMany
   */
  export type PeriodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo updateManyAndReturn
   */
  export type PeriodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo upsert
   */
  export type PeriodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Periodo to update in case it exists.
     */
    where: PeriodoWhereUniqueInput
    /**
     * In case the Periodo found by the `where` argument doesn't exist, create a new Periodo with this data.
     */
    create: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
    /**
     * In case the Periodo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
  }

  /**
   * Periodo delete
   */
  export type PeriodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter which Periodo to delete.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo deleteMany
   */
  export type PeriodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodos to delete
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to delete.
     */
    limit?: number
  }

  /**
   * Periodo.materias
   */
  export type Periodo$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Periodo without action
   */
  export type PeriodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
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


  export const CarreraScalarFieldEnum: {
    id_carrera: 'id_carrera',
    nombre_carrera: 'nombre_carrera',
    duracion_anos: 'duracion_anos'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const AulaScalarFieldEnum: {
    id_aula: 'id_aula',
    nombre_aula: 'nombre_aula',
    capacidad: 'capacidad',
    ubicacion: 'ubicacion'
  };

  export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id_materia: 'id_materia',
    nombre_materia: 'nombre_materia',
    id_carrera: 'id_carrera',
    id_aula: 'id_aula',
    periodoId: 'periodoId',
    id_inscripcion: 'id_inscripcion'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const PeriodoScalarFieldEnum: {
    id_periodo: 'id_periodo',
    nombre: 'nombre',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin'
  };

  export type PeriodoScalarFieldEnum = (typeof PeriodoScalarFieldEnum)[keyof typeof PeriodoScalarFieldEnum]


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


  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id_carrera?: IntFilter<"Carrera"> | number
    nombre_carrera?: StringFilter<"Carrera"> | string
    duracion_anos?: IntFilter<"Carrera"> | number
    materias?: MateriaListRelationFilter
  }

  export type CarreraOrderByWithRelationInput = {
    id_carrera?: SortOrder
    nombre_carrera?: SortOrder
    duracion_anos?: SortOrder
    materias?: MateriaOrderByRelationAggregateInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id_carrera?: number
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    nombre_carrera?: StringFilter<"Carrera"> | string
    duracion_anos?: IntFilter<"Carrera"> | number
    materias?: MateriaListRelationFilter
  }, "id_carrera">

  export type CarreraOrderByWithAggregationInput = {
    id_carrera?: SortOrder
    nombre_carrera?: SortOrder
    duracion_anos?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id_carrera?: IntWithAggregatesFilter<"Carrera"> | number
    nombre_carrera?: StringWithAggregatesFilter<"Carrera"> | string
    duracion_anos?: IntWithAggregatesFilter<"Carrera"> | number
  }

  export type AulaWhereInput = {
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    id_aula?: IntFilter<"Aula"> | number
    nombre_aula?: StringFilter<"Aula"> | string
    capacidad?: IntFilter<"Aula"> | number
    ubicacion?: StringNullableFilter<"Aula"> | string | null
    materias?: MateriaListRelationFilter
  }

  export type AulaOrderByWithRelationInput = {
    id_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrderInput | SortOrder
    materias?: MateriaOrderByRelationAggregateInput
  }

  export type AulaWhereUniqueInput = Prisma.AtLeast<{
    id_aula?: number
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    nombre_aula?: StringFilter<"Aula"> | string
    capacidad?: IntFilter<"Aula"> | number
    ubicacion?: StringNullableFilter<"Aula"> | string | null
    materias?: MateriaListRelationFilter
  }, "id_aula">

  export type AulaOrderByWithAggregationInput = {
    id_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrderInput | SortOrder
    _count?: AulaCountOrderByAggregateInput
    _avg?: AulaAvgOrderByAggregateInput
    _max?: AulaMaxOrderByAggregateInput
    _min?: AulaMinOrderByAggregateInput
    _sum?: AulaSumOrderByAggregateInput
  }

  export type AulaScalarWhereWithAggregatesInput = {
    AND?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    OR?: AulaScalarWhereWithAggregatesInput[]
    NOT?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    id_aula?: IntWithAggregatesFilter<"Aula"> | number
    nombre_aula?: StringWithAggregatesFilter<"Aula"> | string
    capacidad?: IntWithAggregatesFilter<"Aula"> | number
    ubicacion?: StringNullableWithAggregatesFilter<"Aula"> | string | null
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id_materia?: IntFilter<"Materia"> | number
    nombre_materia?: StringFilter<"Materia"> | string
    id_carrera?: IntFilter<"Materia"> | number
    id_aula?: IntFilter<"Materia"> | number
    periodoId?: IntNullableFilter<"Materia"> | number | null
    id_inscripcion?: IntNullableFilter<"Materia"> | number | null
    periodo?: XOR<PeriodoNullableScalarRelationFilter, PeriodoWhereInput> | null
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
  }

  export type MateriaOrderByWithRelationInput = {
    id_materia?: SortOrder
    nombre_materia?: SortOrder
    id_carrera?: SortOrder
    id_aula?: SortOrder
    periodoId?: SortOrderInput | SortOrder
    id_inscripcion?: SortOrderInput | SortOrder
    periodo?: PeriodoOrderByWithRelationInput
    carrera?: CarreraOrderByWithRelationInput
    aula?: AulaOrderByWithRelationInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id_materia?: number
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nombre_materia?: StringFilter<"Materia"> | string
    id_carrera?: IntFilter<"Materia"> | number
    id_aula?: IntFilter<"Materia"> | number
    periodoId?: IntNullableFilter<"Materia"> | number | null
    id_inscripcion?: IntNullableFilter<"Materia"> | number | null
    periodo?: XOR<PeriodoNullableScalarRelationFilter, PeriodoWhereInput> | null
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
  }, "id_materia">

  export type MateriaOrderByWithAggregationInput = {
    id_materia?: SortOrder
    nombre_materia?: SortOrder
    id_carrera?: SortOrder
    id_aula?: SortOrder
    periodoId?: SortOrderInput | SortOrder
    id_inscripcion?: SortOrderInput | SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id_materia?: IntWithAggregatesFilter<"Materia"> | number
    nombre_materia?: StringWithAggregatesFilter<"Materia"> | string
    id_carrera?: IntWithAggregatesFilter<"Materia"> | number
    id_aula?: IntWithAggregatesFilter<"Materia"> | number
    periodoId?: IntNullableWithAggregatesFilter<"Materia"> | number | null
    id_inscripcion?: IntNullableWithAggregatesFilter<"Materia"> | number | null
  }

  export type PeriodoWhereInput = {
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    id_periodo?: IntFilter<"Periodo"> | number
    nombre?: StringFilter<"Periodo"> | string
    fecha_inicio?: DateTimeFilter<"Periodo"> | Date | string
    fecha_fin?: DateTimeFilter<"Periodo"> | Date | string
    materias?: MateriaListRelationFilter
  }

  export type PeriodoOrderByWithRelationInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    materias?: MateriaOrderByRelationAggregateInput
  }

  export type PeriodoWhereUniqueInput = Prisma.AtLeast<{
    id_periodo?: number
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    nombre?: StringFilter<"Periodo"> | string
    fecha_inicio?: DateTimeFilter<"Periodo"> | Date | string
    fecha_fin?: DateTimeFilter<"Periodo"> | Date | string
    materias?: MateriaListRelationFilter
  }, "id_periodo">

  export type PeriodoOrderByWithAggregationInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    _count?: PeriodoCountOrderByAggregateInput
    _avg?: PeriodoAvgOrderByAggregateInput
    _max?: PeriodoMaxOrderByAggregateInput
    _min?: PeriodoMinOrderByAggregateInput
    _sum?: PeriodoSumOrderByAggregateInput
  }

  export type PeriodoScalarWhereWithAggregatesInput = {
    AND?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    OR?: PeriodoScalarWhereWithAggregatesInput[]
    NOT?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    id_periodo?: IntWithAggregatesFilter<"Periodo"> | number
    nombre?: StringWithAggregatesFilter<"Periodo"> | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"Periodo"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"Periodo"> | Date | string
  }

  export type CarreraCreateInput = {
    nombre_carrera: string
    duracion_anos: number
    materias?: MateriaCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateInput = {
    id_carrera?: number
    nombre_carrera: string
    duracion_anos: number
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre_carrera?: StringFieldUpdateOperationsInput | string
    duracion_anos?: IntFieldUpdateOperationsInput | number
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre_carrera?: StringFieldUpdateOperationsInput | string
    duracion_anos?: IntFieldUpdateOperationsInput | number
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id_carrera?: number
    nombre_carrera: string
    duracion_anos: number
  }

  export type CarreraUpdateManyMutationInput = {
    nombre_carrera?: StringFieldUpdateOperationsInput | string
    duracion_anos?: IntFieldUpdateOperationsInput | number
  }

  export type CarreraUncheckedUpdateManyInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre_carrera?: StringFieldUpdateOperationsInput | string
    duracion_anos?: IntFieldUpdateOperationsInput | number
  }

  export type AulaCreateInput = {
    nombre_aula: string
    capacidad: number
    ubicacion?: string | null
    materias?: MateriaCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateInput = {
    id_aula?: number
    nombre_aula: string
    capacidad: number
    ubicacion?: string | null
    materias?: MateriaUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaUpdateInput = {
    nombre_aula?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    materias?: MateriaUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateInput = {
    id_aula?: IntFieldUpdateOperationsInput | number
    nombre_aula?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    materias?: MateriaUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaCreateManyInput = {
    id_aula?: number
    nombre_aula: string
    capacidad: number
    ubicacion?: string | null
  }

  export type AulaUpdateManyMutationInput = {
    nombre_aula?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AulaUncheckedUpdateManyInput = {
    id_aula?: IntFieldUpdateOperationsInput | number
    nombre_aula?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MateriaCreateInput = {
    nombre_materia: string
    id_inscripcion?: number | null
    periodo?: PeriodoCreateNestedOneWithoutMateriasInput
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    aula: AulaCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateInput = {
    id_materia?: number
    nombre_materia: string
    id_carrera: number
    id_aula: number
    periodoId?: number | null
    id_inscripcion?: number | null
  }

  export type MateriaUpdateInput = {
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
    periodo?: PeriodoUpdateOneWithoutMateriasNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    aula?: AulaUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    id_aula?: IntFieldUpdateOperationsInput | number
    periodoId?: NullableIntFieldUpdateOperationsInput | number | null
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaCreateManyInput = {
    id_materia?: number
    nombre_materia: string
    id_carrera: number
    id_aula: number
    periodoId?: number | null
    id_inscripcion?: number | null
  }

  export type MateriaUpdateManyMutationInput = {
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaUncheckedUpdateManyInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    id_aula?: IntFieldUpdateOperationsInput | number
    periodoId?: NullableIntFieldUpdateOperationsInput | number | null
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PeriodoCreateInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    materias?: MateriaCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateInput = {
    id_periodo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    materias?: MateriaUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateInput = {
    id_periodo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoCreateManyInput = {
    id_periodo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type PeriodoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodoUncheckedUpdateManyInput = {
    id_periodo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraCountOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre_carrera?: SortOrder
    duracion_anos?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id_carrera?: SortOrder
    duracion_anos?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre_carrera?: SortOrder
    duracion_anos?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre_carrera?: SortOrder
    duracion_anos?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
    id_carrera?: SortOrder
    duracion_anos?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AulaCountOrderByAggregateInput = {
    id_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
  }

  export type AulaAvgOrderByAggregateInput = {
    id_aula?: SortOrder
    capacidad?: SortOrder
  }

  export type AulaMaxOrderByAggregateInput = {
    id_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
  }

  export type AulaMinOrderByAggregateInput = {
    id_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
  }

  export type AulaSumOrderByAggregateInput = {
    id_aula?: SortOrder
    capacidad?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PeriodoNullableScalarRelationFilter = {
    is?: PeriodoWhereInput | null
    isNot?: PeriodoWhereInput | null
  }

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type AulaScalarRelationFilter = {
    is?: AulaWhereInput
    isNot?: AulaWhereInput
  }

  export type MateriaCountOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre_materia?: SortOrder
    id_carrera?: SortOrder
    id_aula?: SortOrder
    periodoId?: SortOrder
    id_inscripcion?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    id_materia?: SortOrder
    id_carrera?: SortOrder
    id_aula?: SortOrder
    periodoId?: SortOrder
    id_inscripcion?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre_materia?: SortOrder
    id_carrera?: SortOrder
    id_aula?: SortOrder
    periodoId?: SortOrder
    id_inscripcion?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre_materia?: SortOrder
    id_carrera?: SortOrder
    id_aula?: SortOrder
    periodoId?: SortOrder
    id_inscripcion?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    id_materia?: SortOrder
    id_carrera?: SortOrder
    id_aula?: SortOrder
    periodoId?: SortOrder
    id_inscripcion?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type PeriodoCountOrderByAggregateInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type PeriodoAvgOrderByAggregateInput = {
    id_periodo?: SortOrder
  }

  export type PeriodoMaxOrderByAggregateInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type PeriodoMinOrderByAggregateInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type PeriodoSumOrderByAggregateInput = {
    id_periodo?: SortOrder
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

  export type MateriaCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MateriaUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MateriaCreateNestedManyWithoutAulaInput = {
    create?: XOR<MateriaCreateWithoutAulaInput, MateriaUncheckedCreateWithoutAulaInput> | MateriaCreateWithoutAulaInput[] | MateriaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutAulaInput | MateriaCreateOrConnectWithoutAulaInput[]
    createMany?: MateriaCreateManyAulaInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<MateriaCreateWithoutAulaInput, MateriaUncheckedCreateWithoutAulaInput> | MateriaCreateWithoutAulaInput[] | MateriaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutAulaInput | MateriaCreateOrConnectWithoutAulaInput[]
    createMany?: MateriaCreateManyAulaInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MateriaUpdateManyWithoutAulaNestedInput = {
    create?: XOR<MateriaCreateWithoutAulaInput, MateriaUncheckedCreateWithoutAulaInput> | MateriaCreateWithoutAulaInput[] | MateriaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutAulaInput | MateriaCreateOrConnectWithoutAulaInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutAulaInput | MateriaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: MateriaCreateManyAulaInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutAulaInput | MateriaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutAulaInput | MateriaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<MateriaCreateWithoutAulaInput, MateriaUncheckedCreateWithoutAulaInput> | MateriaCreateWithoutAulaInput[] | MateriaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutAulaInput | MateriaCreateOrConnectWithoutAulaInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutAulaInput | MateriaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: MateriaCreateManyAulaInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutAulaInput | MateriaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutAulaInput | MateriaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type PeriodoCreateNestedOneWithoutMateriasInput = {
    create?: XOR<PeriodoCreateWithoutMateriasInput, PeriodoUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutMateriasInput
    connect?: PeriodoWhereUniqueInput
  }

  export type CarreraCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
  }

  export type AulaCreateNestedOneWithoutMateriasInput = {
    create?: XOR<AulaCreateWithoutMateriasInput, AulaUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: AulaCreateOrConnectWithoutMateriasInput
    connect?: AulaWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PeriodoUpdateOneWithoutMateriasNestedInput = {
    create?: XOR<PeriodoCreateWithoutMateriasInput, PeriodoUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutMateriasInput
    upsert?: PeriodoUpsertWithoutMateriasInput
    disconnect?: PeriodoWhereInput | boolean
    delete?: PeriodoWhereInput | boolean
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutMateriasInput, PeriodoUpdateWithoutMateriasInput>, PeriodoUncheckedUpdateWithoutMateriasInput>
  }

  export type CarreraUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    upsert?: CarreraUpsertWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutMateriasInput, CarreraUpdateWithoutMateriasInput>, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type AulaUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<AulaCreateWithoutMateriasInput, AulaUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: AulaCreateOrConnectWithoutMateriasInput
    upsert?: AulaUpsertWithoutMateriasInput
    connect?: AulaWhereUniqueInput
    update?: XOR<XOR<AulaUpdateToOneWithWhereWithoutMateriasInput, AulaUpdateWithoutMateriasInput>, AulaUncheckedUpdateWithoutMateriasInput>
  }

  export type MateriaCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<MateriaCreateWithoutPeriodoInput, MateriaUncheckedCreateWithoutPeriodoInput> | MateriaCreateWithoutPeriodoInput[] | MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutPeriodoInput | MateriaCreateOrConnectWithoutPeriodoInput[]
    createMany?: MateriaCreateManyPeriodoInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<MateriaCreateWithoutPeriodoInput, MateriaUncheckedCreateWithoutPeriodoInput> | MateriaCreateWithoutPeriodoInput[] | MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutPeriodoInput | MateriaCreateOrConnectWithoutPeriodoInput[]
    createMany?: MateriaCreateManyPeriodoInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MateriaUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<MateriaCreateWithoutPeriodoInput, MateriaUncheckedCreateWithoutPeriodoInput> | MateriaCreateWithoutPeriodoInput[] | MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutPeriodoInput | MateriaCreateOrConnectWithoutPeriodoInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutPeriodoInput | MateriaUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: MateriaCreateManyPeriodoInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutPeriodoInput | MateriaUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutPeriodoInput | MateriaUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<MateriaCreateWithoutPeriodoInput, MateriaUncheckedCreateWithoutPeriodoInput> | MateriaCreateWithoutPeriodoInput[] | MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutPeriodoInput | MateriaCreateOrConnectWithoutPeriodoInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutPeriodoInput | MateriaUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: MateriaCreateManyPeriodoInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutPeriodoInput | MateriaUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutPeriodoInput | MateriaUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type MateriaCreateWithoutCarreraInput = {
    nombre_materia: string
    id_inscripcion?: number | null
    periodo?: PeriodoCreateNestedOneWithoutMateriasInput
    aula: AulaCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutCarreraInput = {
    id_materia?: number
    nombre_materia: string
    id_aula: number
    periodoId?: number | null
    id_inscripcion?: number | null
  }

  export type MateriaCreateOrConnectWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaCreateManyCarreraInputEnvelope = {
    data: MateriaCreateManyCarreraInput | MateriaCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCarreraInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCarreraInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id_materia?: IntFilter<"Materia"> | number
    nombre_materia?: StringFilter<"Materia"> | string
    id_carrera?: IntFilter<"Materia"> | number
    id_aula?: IntFilter<"Materia"> | number
    periodoId?: IntNullableFilter<"Materia"> | number | null
    id_inscripcion?: IntNullableFilter<"Materia"> | number | null
  }

  export type MateriaCreateWithoutAulaInput = {
    nombre_materia: string
    id_inscripcion?: number | null
    periodo?: PeriodoCreateNestedOneWithoutMateriasInput
    carrera: CarreraCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutAulaInput = {
    id_materia?: number
    nombre_materia: string
    id_carrera: number
    periodoId?: number | null
    id_inscripcion?: number | null
  }

  export type MateriaCreateOrConnectWithoutAulaInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutAulaInput, MateriaUncheckedCreateWithoutAulaInput>
  }

  export type MateriaCreateManyAulaInputEnvelope = {
    data: MateriaCreateManyAulaInput | MateriaCreateManyAulaInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithWhereUniqueWithoutAulaInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutAulaInput, MateriaUncheckedUpdateWithoutAulaInput>
    create: XOR<MateriaCreateWithoutAulaInput, MateriaUncheckedCreateWithoutAulaInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutAulaInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutAulaInput, MateriaUncheckedUpdateWithoutAulaInput>
  }

  export type MateriaUpdateManyWithWhereWithoutAulaInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutAulaInput>
  }

  export type PeriodoCreateWithoutMateriasInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type PeriodoUncheckedCreateWithoutMateriasInput = {
    id_periodo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type PeriodoCreateOrConnectWithoutMateriasInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutMateriasInput, PeriodoUncheckedCreateWithoutMateriasInput>
  }

  export type CarreraCreateWithoutMateriasInput = {
    nombre_carrera: string
    duracion_anos: number
  }

  export type CarreraUncheckedCreateWithoutMateriasInput = {
    id_carrera?: number
    nombre_carrera: string
    duracion_anos: number
  }

  export type CarreraCreateOrConnectWithoutMateriasInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
  }

  export type AulaCreateWithoutMateriasInput = {
    nombre_aula: string
    capacidad: number
    ubicacion?: string | null
  }

  export type AulaUncheckedCreateWithoutMateriasInput = {
    id_aula?: number
    nombre_aula: string
    capacidad: number
    ubicacion?: string | null
  }

  export type AulaCreateOrConnectWithoutMateriasInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutMateriasInput, AulaUncheckedCreateWithoutMateriasInput>
  }

  export type PeriodoUpsertWithoutMateriasInput = {
    update: XOR<PeriodoUpdateWithoutMateriasInput, PeriodoUncheckedUpdateWithoutMateriasInput>
    create: XOR<PeriodoCreateWithoutMateriasInput, PeriodoUncheckedCreateWithoutMateriasInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutMateriasInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutMateriasInput, PeriodoUncheckedUpdateWithoutMateriasInput>
  }

  export type PeriodoUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodoUncheckedUpdateWithoutMateriasInput = {
    id_periodo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarreraUpsertWithoutMateriasInput = {
    update: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type CarreraUpdateWithoutMateriasInput = {
    nombre_carrera?: StringFieldUpdateOperationsInput | string
    duracion_anos?: IntFieldUpdateOperationsInput | number
  }

  export type CarreraUncheckedUpdateWithoutMateriasInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre_carrera?: StringFieldUpdateOperationsInput | string
    duracion_anos?: IntFieldUpdateOperationsInput | number
  }

  export type AulaUpsertWithoutMateriasInput = {
    update: XOR<AulaUpdateWithoutMateriasInput, AulaUncheckedUpdateWithoutMateriasInput>
    create: XOR<AulaCreateWithoutMateriasInput, AulaUncheckedCreateWithoutMateriasInput>
    where?: AulaWhereInput
  }

  export type AulaUpdateToOneWithWhereWithoutMateriasInput = {
    where?: AulaWhereInput
    data: XOR<AulaUpdateWithoutMateriasInput, AulaUncheckedUpdateWithoutMateriasInput>
  }

  export type AulaUpdateWithoutMateriasInput = {
    nombre_aula?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AulaUncheckedUpdateWithoutMateriasInput = {
    id_aula?: IntFieldUpdateOperationsInput | number
    nombre_aula?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MateriaCreateWithoutPeriodoInput = {
    nombre_materia: string
    id_inscripcion?: number | null
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    aula: AulaCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutPeriodoInput = {
    id_materia?: number
    nombre_materia: string
    id_carrera: number
    id_aula: number
    id_inscripcion?: number | null
  }

  export type MateriaCreateOrConnectWithoutPeriodoInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutPeriodoInput, MateriaUncheckedCreateWithoutPeriodoInput>
  }

  export type MateriaCreateManyPeriodoInputEnvelope = {
    data: MateriaCreateManyPeriodoInput | MateriaCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutPeriodoInput, MateriaUncheckedUpdateWithoutPeriodoInput>
    create: XOR<MateriaCreateWithoutPeriodoInput, MateriaUncheckedCreateWithoutPeriodoInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutPeriodoInput, MateriaUncheckedUpdateWithoutPeriodoInput>
  }

  export type MateriaUpdateManyWithWhereWithoutPeriodoInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type MateriaCreateManyCarreraInput = {
    id_materia?: number
    nombre_materia: string
    id_aula: number
    periodoId?: number | null
    id_inscripcion?: number | null
  }

  export type MateriaUpdateWithoutCarreraInput = {
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
    periodo?: PeriodoUpdateOneWithoutMateriasNestedInput
    aula?: AulaUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCarreraInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_aula?: IntFieldUpdateOperationsInput | number
    periodoId?: NullableIntFieldUpdateOperationsInput | number | null
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_aula?: IntFieldUpdateOperationsInput | number
    periodoId?: NullableIntFieldUpdateOperationsInput | number | null
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaCreateManyAulaInput = {
    id_materia?: number
    nombre_materia: string
    id_carrera: number
    periodoId?: number | null
    id_inscripcion?: number | null
  }

  export type MateriaUpdateWithoutAulaInput = {
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
    periodo?: PeriodoUpdateOneWithoutMateriasNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutAulaInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    periodoId?: NullableIntFieldUpdateOperationsInput | number | null
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaUncheckedUpdateManyWithoutAulaInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    periodoId?: NullableIntFieldUpdateOperationsInput | number | null
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaCreateManyPeriodoInput = {
    id_materia?: number
    nombre_materia: string
    id_carrera: number
    id_aula: number
    id_inscripcion?: number | null
  }

  export type MateriaUpdateWithoutPeriodoInput = {
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    aula?: AulaUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutPeriodoInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    id_aula?: IntFieldUpdateOperationsInput | number
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaUncheckedUpdateManyWithoutPeriodoInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre_materia?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    id_aula?: IntFieldUpdateOperationsInput | number
    id_inscripcion?: NullableIntFieldUpdateOperationsInput | number | null
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