/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */


import { core } from "nexus"
import { UnusedInterfaceTypeDef } from "./kitchen-sink-definitions"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    collection<FieldName extends string>(fieldName: FieldName, opts: {
      type: NexusGenObjectNames | NexusGenInterfaceNames | core.NexusObjectTypeDef<string> | core.NexusInterfaceTypeDef<string>,
      nodes: core.SubFieldResolver<TypeName, FieldName, "nodes">,
      totalCount: core.SubFieldResolver<TypeName, FieldName, "totalCount">,
      args?: core.ArgsRecord,
      nullable?: boolean,
      description?: string
    }): void;
    relayConnection<FieldName extends string>(fieldName: FieldName, opts: {
      type: NexusGenObjectNames | NexusGenInterfaceNames | core.NexusObjectTypeDef<string> | core.NexusInterfaceTypeDef<string>,
      edges: core.SubFieldResolver<TypeName, FieldName, "edges">,
      pageInfo: core.SubFieldResolver<TypeName, FieldName, "pageInfo">,
      args?: Record<string, core.NexusArgDef<string>>,
      nullable?: boolean,
      description?: string
    }): void
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  InputType: { // input type
    answer?: number | null; // Int
    key: string; // String!
    nestedInput?: NexusGenInputs['InputType2'] | null; // InputType2
  }
  InputType2: { // input type
    answer?: number | null; // Int
    key: string; // String!
    someDate: any; // Date!
  }
  NestedType: { // input type
    veryNested?: string | null; // String
  }
  SomeArg: { // input type
    arg?: NexusGenInputs['NestedType'] | null; // NestedType
    someField?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  BarCollection: { // root type
    nodes: NexusGenRootTypes['Bar'][]; // [Bar!]!
    totalCount: number; // Int!
  }
  Foo: { // root type
    name: string; // String!
    ok: boolean; // Boolean!
  }
  Mutation: {};
  Query: {};
  SomeItem: { // root type
    id: string; // ID!
  }
  TestObj: { // root type
    a?: NexusGenRootTypes['Bar'] | null; // Bar
    item: string; // String!
    ok: boolean; // Boolean!
  }
  Bar: NexusGenRootTypes['TestObj'] | NexusGenRootTypes['Foo'];
  Baz: NexusGenRootTypes['TestObj'];
  UnusedInterface: UnusedInterfaceTypeDef;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: any;
  TestUnion: NexusGenRootTypes['Foo'];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  InputType: NexusGenInputs['InputType'];
  InputType2: NexusGenInputs['InputType2'];
  NestedType: NexusGenInputs['NestedType'];
  SomeArg: NexusGenInputs['SomeArg'];
}

export interface NexusGenFieldTypes {
  BarCollection: { // field return type
    nodes: NexusGenRootTypes['Bar'][]; // [Bar!]!
    totalCount: number; // Int!
  }
  Foo: { // field return type
    argsTest: boolean; // Boolean!
    name: string; // String!
    ok: boolean; // Boolean!
  }
  Mutation: { // field return type
    ok: boolean; // Boolean!
    someMutationField: NexusGenRootTypes['Foo']; // Foo!
  }
  Query: { // field return type
    asArgExample: string; // String!
    bar: NexusGenRootTypes['TestObj']; // TestObj!
    collectionField: NexusGenRootTypes['BarCollection']; // BarCollection!
    dateAsList: any[]; // [Date!]!
    extended: NexusGenRootTypes['SomeItem']; // SomeItem!
    getNumberOrNull: number | null; // Int
    inlineArgs: string; // String!
    inputAsArgExample: string; // String!
  }
  SomeItem: { // field return type
    id: string; // ID!
  }
  TestObj: { // field return type
    a: NexusGenRootTypes['Bar'] | null; // Bar
    argsTest: boolean; // Boolean!
    item: string; // String!
    ok: boolean; // Boolean!
  }
  Bar: { // field return type
    argsTest: boolean; // Boolean!
    ok: boolean; // Boolean!
  }
  Baz: { // field return type
    a: NexusGenRootTypes['Bar'] | null; // Bar
    ok: boolean; // Boolean!
  }
  UnusedInterface: { // field return type
    ok: boolean; // Boolean!
  }
}

export interface NexusGenArgTypes {
  Foo: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
  Mutation: {
    someMutationField: { // args
      id: string; // ID!
    }
  }
  Query: {
    asArgExample: { // args
      testAsArg: NexusGenInputs['InputType']; // InputType!
    }
    collectionField: { // args
      a?: number | null; // Int
    }
    getNumberOrNull: { // args
      a: number; // Int!
    }
    inlineArgs: { // args
      someArg?: NexusGenInputs['SomeArg'] | null; // SomeArg
    }
    inputAsArgExample: { // args
      testInput?: NexusGenInputs['InputType'] | null; // InputType
      testScalar?: string | null; // String
    }
  }
  TestObj: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
  Bar: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  TestUnion: "Foo"
  Bar: "TestObj" | "Foo"
  Baz: "TestObj"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BarCollection" | "Foo" | "Mutation" | "Query" | "SomeItem" | "TestObj";

export type NexusGenInputNames = "InputType" | "InputType2" | "NestedType" | "SomeArg";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "Bar" | "Baz" | "UnusedInterface";

export type NexusGenScalarNames = "Boolean" | "Date" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = "TestUnion";

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}