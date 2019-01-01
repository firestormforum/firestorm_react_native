/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

export type DateTime = any;

export interface Query {
  category?: Category | null;
  categories?: (Category | null)[] | null;
  post?: Post | null;
  posts?: (Post | null)[] | null;
  postsByThread?: (Post | null)[] | null;
  thread?: Thread | null;
  threads?: (Thread | null)[] | null;
  threadsByCategory?: (Thread | null)[] | null;
  users?: (User | null)[] | null;
}

export interface Category {
  id: string;
  title?: string | null;
  slug?: string | null;
  threads?: (Thread | null)[] | null;
  insertedAt?: DateTime | null;
  updatedAt?: DateTime | null;
}

export interface Thread {
  id: string;
  title?: string | null;
  slug?: string | null;
  category?: Category | null;
  posts?: (Post | null)[] | null;
  insertedAt?: DateTime | null;
  updatedAt?: DateTime | null;
}

export interface Post {
  id: string;
  body?: string | null;
  thread?: Thread | null;
  user?: User | null;
  insertedAt?: DateTime | null;
  updatedAt?: DateTime | null;
}

export interface User {
  id: string;
  email?: string | null;
  name?: string | null;
  username?: string | null;
  posts?: (Post | null)[] | null;
  insertedAt?: DateTime | null;
  updatedAt?: DateTime | null;
}

export interface Mutation {
  createCategory?: Category | null;
  createPost?: Post | null;
  createThread?: Thread | null;
  createUser?: User | null;
  authenticate?: string | null;
}
export interface CategoryQueryArgs {
  id: string;
}
export interface PostQueryArgs {
  id: string;
}
export interface PostsByThreadQueryArgs {
  threadId: string;
}
export interface ThreadQueryArgs {
  id: string;
}
export interface ThreadsByCategoryQueryArgs {
  categoryId: string;
}
export interface CreateCategoryMutationArgs {
  title: string;
}
export interface CreatePostMutationArgs {
  body: string;
  threadId: string;
}
export interface CreateThreadMutationArgs {
  title: string;
  categoryId: string;
}
export interface CreateUserMutationArgs {
  name: string;
  username: string;
  email: string;
  password: string;
}
export interface AuthenticateMutationArgs {
  email: string;
  password: string;
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    category?: CategoryResolver<Category | null, any, Context>;
    categories?: CategoriesResolver<(Category | null)[] | null, any, Context>;
    post?: PostResolver<Post | null, any, Context>;
    posts?: PostsResolver<(Post | null)[] | null, any, Context>;
    postsByThread?: PostsByThreadResolver<(Post | null)[] | null, any, Context>;
    thread?: ThreadResolver<Thread | null, any, Context>;
    threads?: ThreadsResolver<(Thread | null)[] | null, any, Context>;
    threadsByCategory?: ThreadsByCategoryResolver<
      (Thread | null)[] | null,
      any,
      Context
    >;
    users?: UsersResolver<(User | null)[] | null, any, Context>;
  }

  export type CategoryResolver<
    R = Category | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CategoryArgs>;
  export interface CategoryArgs {
    id: string;
  }

  export type CategoriesResolver<
    R = (Category | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PostResolver<
    R = Post | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PostArgs>;
  export interface PostArgs {
    id: string;
  }

  export type PostsResolver<
    R = (Post | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PostsByThreadResolver<
    R = (Post | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PostsByThreadArgs>;
  export interface PostsByThreadArgs {
    threadId: string;
  }

  export type ThreadResolver<
    R = Thread | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ThreadArgs>;
  export interface ThreadArgs {
    id: string;
  }

  export type ThreadsResolver<
    R = (Thread | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ThreadsByCategoryResolver<
    R = (Thread | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ThreadsByCategoryArgs>;
  export interface ThreadsByCategoryArgs {
    categoryId: string;
  }

  export type UsersResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace CategoryResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    threads?: ThreadsResolver<(Thread | null)[] | null, any, Context>;
    insertedAt?: InsertedAtResolver<DateTime | null, any, Context>;
    updatedAt?: UpdatedAtResolver<DateTime | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ThreadsResolver<
    R = (Thread | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InsertedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ThreadResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    category?: CategoryResolver<Category | null, any, Context>;
    posts?: PostsResolver<(Post | null)[] | null, any, Context>;
    insertedAt?: InsertedAtResolver<DateTime | null, any, Context>;
    updatedAt?: UpdatedAtResolver<DateTime | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CategoryResolver<
    R = Category | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PostsResolver<
    R = (Post | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InsertedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PostResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    body?: BodyResolver<string | null, any, Context>;
    thread?: ThreadResolver<Thread | null, any, Context>;
    user?: UserResolver<User | null, any, Context>;
    insertedAt?: InsertedAtResolver<DateTime | null, any, Context>;
    updatedAt?: UpdatedAtResolver<DateTime | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ThreadResolver<
    R = Thread | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InsertedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    email?: EmailResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
    username?: UsernameResolver<string | null, any, Context>;
    posts?: PostsResolver<(Post | null)[] | null, any, Context>;
    insertedAt?: InsertedAtResolver<DateTime | null, any, Context>;
    updatedAt?: UpdatedAtResolver<DateTime | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UsernameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PostsResolver<
    R = (Post | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InsertedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    createCategory?: CreateCategoryResolver<Category | null, any, Context>;
    createPost?: CreatePostResolver<Post | null, any, Context>;
    createThread?: CreateThreadResolver<Thread | null, any, Context>;
    createUser?: CreateUserResolver<User | null, any, Context>;
    authenticate?: AuthenticateResolver<string | null, any, Context>;
  }

  export type CreateCategoryResolver<
    R = Category | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateCategoryArgs>;
  export interface CreateCategoryArgs {
    title: string;
  }

  export type CreatePostResolver<
    R = Post | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatePostArgs>;
  export interface CreatePostArgs {
    body: string;
    threadId: string;
  }

  export type CreateThreadResolver<
    R = Thread | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateThreadArgs>;
  export interface CreateThreadArgs {
    title: string;
    categoryId: string;
  }

  export type CreateUserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateUserArgs>;
  export interface CreateUserArgs {
    name: string;
    username: string;
    email: string;
    password: string;
  }

  export type AuthenticateResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AuthenticateArgs>;
  export interface AuthenticateArgs {
    email: string;
    password: string;
  }
}
