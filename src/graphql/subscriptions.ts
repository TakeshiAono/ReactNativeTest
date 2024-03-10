/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
    id
    title
    content
    blogID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
    id
    title
    content
    blogID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
    id
    title
    content
    blogID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    Blog {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userBlogId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    Blog {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userBlogId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    Blog {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userBlogId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserTest = /* GraphQL */ `subscription OnCreateUserTest($filter: ModelSubscriptionUserTestFilterInput) {
  onCreateUserTest(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserTestSubscriptionVariables,
  APITypes.OnCreateUserTestSubscription
>;
export const onUpdateUserTest = /* GraphQL */ `subscription OnUpdateUserTest($filter: ModelSubscriptionUserTestFilterInput) {
  onUpdateUserTest(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserTestSubscriptionVariables,
  APITypes.OnUpdateUserTestSubscription
>;
export const onDeleteUserTest = /* GraphQL */ `subscription OnDeleteUserTest($filter: ModelSubscriptionUserTestFilterInput) {
  onDeleteUserTest(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserTestSubscriptionVariables,
  APITypes.OnDeleteUserTestSubscription
>;
export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
    id
    name
    Articles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
    id
    name
    Articles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
    id
    name
    Articles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
