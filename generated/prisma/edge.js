
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.RacesMJCScalarFieldEnum = {
  id_RacesMJC: 'id_RacesMJC',
  name_RacesMJC: 'name_RacesMJC'
};

exports.Prisma.CategoriesMJCScalarFieldEnum = {
  id_CategoriesMJC: 'id_CategoriesMJC',
  name_CategoriesMJC: 'name_CategoriesMJC'
};

exports.Prisma.GendersMJCScalarFieldEnum = {
  id_GendersMJC: 'id_GendersMJC',
  name_GendersMJC: 'name_GendersMJC'
};

exports.Prisma.PetMJCScalarFieldEnum = {
  id_PetMJC: 'id_PetMJC',
  name_PetsMJC: 'name_PetsMJC',
  photoMJC: 'photoMJC',
  estadoMJC: 'estadoMJC',
  fk_RacesMJC: 'fk_RacesMJC',
  fk_CategoriesMJC: 'fk_CategoriesMJC',
  fk_GendersMJC: 'fk_GendersMJC'
};

exports.Prisma.UserMJCScalarFieldEnum = {
  idUserMJC: 'idUserMJC',
  fullnameMJC: 'fullnameMJC',
  email: 'email',
  password: 'password'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.RacesMJCOrderByRelevanceFieldEnum = {
  name_RacesMJC: 'name_RacesMJC'
};

exports.Prisma.CategoriesMJCOrderByRelevanceFieldEnum = {
  name_CategoriesMJC: 'name_CategoriesMJC'
};

exports.Prisma.GendersMJCOrderByRelevanceFieldEnum = {
  name_GendersMJC: 'name_GendersMJC'
};

exports.Prisma.PetMJCOrderByRelevanceFieldEnum = {
  name_PetsMJC: 'name_PetsMJC',
  photoMJC: 'photoMJC'
};

exports.Prisma.UserMJCOrderByRelevanceFieldEnum = {
  fullnameMJC: 'fullnameMJC',
  email: 'email',
  password: 'password'
};
exports.EstadoMJC = exports.$Enums.EstadoMJC = {
  adoptado: 'adoptado',
  disponible: 'disponible'
};

exports.Prisma.ModelName = {
  RacesMJC: 'RacesMJC',
  CategoriesMJC: 'CategoriesMJC',
  GendersMJC: 'GendersMJC',
  PetMJC: 'PetMJC',
  UserMJC: 'UserMJC'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\MAIBE\\OneDrive\\Documentos\\adsoCasa\\lunesBD\\PRISMA\\proyecto-Tu-Mejor-Amigo-En-Casa\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\MAIBE\\OneDrive\\Documentos\\adsoCasa\\lunesBD\\PRISMA\\proyecto-Tu-Mejor-Amigo-En-Casa\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "mysql://root@localhost:3306/proyectomascotas?schema=public"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel RacesMJC {\n  id_RacesMJC   Int      @id @default(autoincrement())\n  name_RacesMJC String   @db.VarChar(30)\n  petMJC        PetMJC[]\n}\n\nmodel CategoriesMJC {\n  id_CategoriesMJC   Int      @id @default(autoincrement())\n  name_CategoriesMJC String   @db.VarChar(30)\n  petMJC             PetMJC[]\n}\n\nmodel GendersMJC {\n  id_GendersMJC   Int      @id @default(autoincrement())\n  name_GendersMJC String   @db.VarChar(30)\n  petMJC          PetMJC[]\n}\n\nmodel PetMJC {\n  id_PetMJC        Int           @id @default(autoincrement())\n  name_PetsMJC     String        @db.VarChar(30)\n  photoMJC         String        @db.VarChar(300)\n  estadoMJC        EstadoMJC     @default(disponible)\n  fk_RacesMJC      Int\n  fk_CategoriesMJC Int\n  fk_GendersMJC    Int\n  races            RacesMJC      @relation(fields: [fk_RacesMJC], references: [id_RacesMJC])\n  categories       CategoriesMJC @relation(fields: [fk_CategoriesMJC], references: [id_CategoriesMJC])\n  Genders          GendersMJC    @relation(fields: [fk_GendersMJC], references: [id_GendersMJC])\n}\n\nmodel UserMJC {\n  idUserMJC   Int    @id @default(autoincrement())\n  fullnameMJC String @db.VarChar(50)\n  email       String @db.VarChar(32)\n  password    String @db.VarChar(64)\n}\n\nenum EstadoMJC {\n  adoptado\n  disponible\n}\n",
  "inlineSchemaHash": "0ec2a5474c4f7cdaaa83baf4817477326d41eaa67b8682a089a7c6d66ac7c100",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"RacesMJC\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_RacesMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name_RacesMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"petMJC\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PetMJC\",\"nativeType\":null,\"relationName\":\"PetMJCToRacesMJC\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CategoriesMJC\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_CategoriesMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name_CategoriesMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"petMJC\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PetMJC\",\"nativeType\":null,\"relationName\":\"CategoriesMJCToPetMJC\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GendersMJC\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_GendersMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name_GendersMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"petMJC\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PetMJC\",\"nativeType\":null,\"relationName\":\"GendersMJCToPetMJC\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PetMJC\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PetMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name_PetsMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"photoMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"300\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estadoMJC\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoMJC\",\"nativeType\":null,\"default\":\"disponible\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_RacesMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_CategoriesMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_GendersMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"races\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RacesMJC\",\"nativeType\":null,\"relationName\":\"PetMJCToRacesMJC\",\"relationFromFields\":[\"fk_RacesMJC\"],\"relationToFields\":[\"id_RacesMJC\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategoriesMJC\",\"nativeType\":null,\"relationName\":\"CategoriesMJCToPetMJC\",\"relationFromFields\":[\"fk_CategoriesMJC\"],\"relationToFields\":[\"id_CategoriesMJC\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Genders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GendersMJC\",\"nativeType\":null,\"relationName\":\"GendersMJCToPetMJC\",\"relationFromFields\":[\"fk_GendersMJC\"],\"relationToFields\":[\"id_GendersMJC\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserMJC\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idUserMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullnameMJC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"EstadoMJC\":{\"values\":[{\"name\":\"adoptado\",\"dbName\":null},{\"name\":\"disponible\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

