import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  Country: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  Email: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  Phone: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** Represents NULL values */
  Void: any;
};

export type Address = Node & {
  __typename?: 'Address';
  /**  The formatted address as returned by Google Places API  */
  address: Scalars['NonEmptyString'];
  city: Scalars['NonEmptyString'];
  /**  2 letter code  */
  country: Scalars['NonEmptyString'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  postalCode: Scalars['NonEmptyString'];
  /**  2 letter code for US, 3 for some others  */
  state?: Maybe<Scalars['NonEmptyString']>;
  /**  Both the name and number  */
  street: Scalars['NonEmptyString'];
  /**  Extra information (floor, apartment, etc.)  */
  unit?: Maybe<Scalars['NonEmptyString']>;
  updatedAt: Scalars['DateTime'];
};

/**  Also The type of SubmissionField.value when the type is ADDRESS  */
export type AddressInput = {
  /**  The formatted address as returned by Google Places API  */
  address: Scalars['NonEmptyString'];
  city: Scalars['NonEmptyString'];
  /**  2 letter code  */
  country: Scalars['NonEmptyString'];
  postalCode: Scalars['NonEmptyString'];
  /**  2 letter code for US, 3 for some others  */
  state?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Both the name and number  */
  street: Scalars['NonEmptyString'];
  /**  Extra information (floor, apartment, etc.)  */
  unit?: InputMaybe<Scalars['NonEmptyString']>;
};

export type CatalogInput = {
  category?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Defaults to Manufactured trading  */
  orgId?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageInput>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isHiddenByMe: Scalars['Boolean'];
  /**  Same result as messages(last: 1)  */
  lastMessage?: Maybe<Message>;
  members: Array<ChatAccount>;
  messages: MessagesPayload;
  /**  The context organization for this channel  */
  org?: Maybe<Organization>;
  /**  The channel can be contextualized to some products  */
  products: Array<Product>;
  subject?: Maybe<Scalars['NonEmptyString']>;
  updatedAt: Scalars['DateTime'];
};


export type ChannelMessagesArgs = {
  input?: InputMaybe<ChannelMessagesInput>;
};

export type ChannelMessagesInput = {
  page?: InputMaybe<PageInput>;
};

export type ChannelSubscriptionPayload = Channel | Message;

export type ChannelsPayload = PagePayload & {
  __typename?: 'ChannelsPayload';
  nodes: Array<Channel>;
  pageInfo: PageInfo;
};

export type ChatAccount = Node & {
  __typename?: 'ChatAccount';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  identifier: Scalars['NonEmptyString'];
  isPreferred: Scalars['Boolean'];
  service: ChatService;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export enum ChatService {
  Browser = 'Browser',
  Email = 'Email',
  Sms = 'Sms',
  Whatsapp = 'Whatsapp'
}

export type CreateChannelInput = {
  membersIds: Array<Scalars['ID']>;
  /**  If the channel should be contextualized to an org  */
  orgId?: InputMaybe<Scalars['ID']>;
  /**  Can include orgs and their manager will be assigned  */
  orgIds?: InputMaybe<Array<Scalars['ID']>>;
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  subject?: InputMaybe<Scalars['NonEmptyString']>;
};

export type CreateChatAccountInput = {
  identifier: Scalars['NonEmptyString'];
  service: ChatService;
};

export type CreateCustomTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  dueAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['NonEmptyString'];
  orgId: Scalars['ID'];
  /**  The id of the NodeState where it should live  */
  stateId: Scalars['ID'];
  /**  Workflow.code where it should be added  */
  workflowCode: Scalars['ID'];
};

export type CreateInvoiceInput = {
  /**  TODO: Should we support passing an Address id?  */
  billingAddress: AddressInput;
  dueAt: Scalars['DateTime'];
  /**  Defaults to 0  */
  fee?: InputMaybe<Scalars['NonNegativeFloat']>;
  lineItems: Array<InvoiceLineItemInput>;
  memo?: InputMaybe<Scalars['NonEmptyString']>;
  orgId: Scalars['ID'];
  /**  TODO: Maybe have an enum  */
  paymentTerms: Scalars['NonEmptyString'];
  shippingAddress?: InputMaybe<AddressInput>;
  /**  Defaults to 0  */
  tax?: InputMaybe<Scalars['NonNegativeFloat']>;
};

export type CreateMessageHighlightInput = {
  messageId: Scalars['ID'];
  notes?: InputMaybe<Scalars['String']>;
  /**  The highlighted (plain) text from the message  */
  text: Scalars['String'];
};

export type CreateMessageInput = {
  accountId: Scalars['ID'];
  channelId: Scalars['ID'];
  files?: InputMaybe<Array<Scalars['URL']>>;
  inReplyToId?: InputMaybe<Scalars['ID']>;
  /**  The markdown version of the message  */
  richText?: InputMaybe<Scalars['String']>;
  /**  The plain text version of the message  */
  text: Scalars['String'];
};

export type CreatePreOrderInput = {
  /**  Must be all from the "createPreOrder" form  */
  submissions: Array<CreateSubmissionInput>;
};

export type CreateProductInput = {
  orgId: Scalars['ID'];
  productCategories?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  productDescription?: InputMaybe<Scalars['String']>;
  productFiles?: InputMaybe<Array<Scalars['URL']>>;
  productLinks?: InputMaybe<Array<Scalars['URL']>>;
  productName: Scalars['NonEmptyString'];
};

export type CreateSubmissionInput = {
  fields: Array<SubmissionFieldInput>;
  formId: Scalars['ID'];
  orgId: Scalars['ID'];
};

export type CreateTaskInput = {
  code: Scalars['ID'];
  dueAt?: InputMaybe<Scalars['DateTime']>;
  /**  Only to be sent for tasks assigned to vendors  */
  orgId?: InputMaybe<Scalars['ID']>;
  /**  The id of the NodeState where it should live  */
  stateId: Scalars['ID'];
};

export type CreateUserInput = {
  /**  It must include either an email or a phone  */
  email?: InputMaybe<Scalars['Email']>;
  firstName: Scalars['NonEmptyString'];
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  membership?: InputMaybe<MembershipInput>;
  /**  It must include either a new organization or a new membership  */
  organization?: InputMaybe<OrganizationInput>;
  phone?: InputMaybe<Scalars['Phone']>;
  smsNumber?: InputMaybe<Scalars['Phone']>;
  whatsappNumber?: InputMaybe<Scalars['Phone']>;
};

/**  The type of SubmissionField.value when the type is CREDIT_CARD  */
export type CreditCardValue = {
  /**  The security code in the back of the card  */
  cvc: Scalars['NonNegativeInt'];
  /**  The card expiration month and year  */
  month: Scalars['NonNegativeInt'];
  /**  The credit card account number  */
  number: Scalars['NonEmptyString'];
  year: Scalars['NonNegativeInt'];
};

/**  Error codes, uses Apollo's when possible, otherwise HTTP  */
export enum ErrorCode {
  BadUserInput = 'BAD_USER_INPUT',
  Conflict = 'CONFLICT',
  DatabaseError = 'DATABASE_ERROR',
  Forbidden = 'FORBIDDEN',
  GraphqlParseFailed = 'GRAPHQL_PARSE_FAILED',
  GraphqlValidationFailed = 'GRAPHQL_VALIDATION_FAILED',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  Locked = 'LOCKED',
  MethodNotAllowed = 'METHOD_NOT_ALLOWED',
  NotFound = 'NOT_FOUND',
  Unauthenticated = 'UNAUTHENTICATED'
}

export type Event = Node & {
  __typename?: 'Event';
  createdAt: Scalars['DateTime'];
  description: Scalars['NonEmptyString'];
  id: Scalars['ID'];
  org: Organization;
  targetId: Scalars['ID'];
  type: EventType;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export enum EventType {
  InvoiceCreated = 'InvoiceCreated',
  InvoicePaid = 'InvoicePaid',
  MessageCreated = 'MessageCreated',
  ProductCreated = 'ProductCreated',
  TaskCompleted = 'TaskCompleted',
  TaskCreated = 'TaskCreated',
  UserAdded = 'UserAdded'
}

export type EventsPayload = PagePayload & {
  __typename?: 'EventsPayload';
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type File = {
  __typename?: 'File';
  contentType?: Maybe<Scalars['NonEmptyString']>;
  filename: Scalars['NonEmptyString'];
  path: Scalars['NonEmptyString'];
  url: Scalars['URL'];
};

export type Form = Node & {
  __typename?: 'Form';
  createdAt: Scalars['DateTime'];
  /**  Submissions to display, embedded from other Forms  */
  embeds: Array<Submission>;
  fields: Array<FormField>;
  id: Scalars['ID'];
  submissions: Array<Submission>;
  template: FormTemplate;
  updatedAt: Scalars['DateTime'];
};

export type FormField = {
  __typename?: 'FormField';
  code: Scalars['ID'];
  /**  Whether it was created by a user  */
  isCustom: Scalars['Boolean'];
  isMultiple: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  name: Scalars['NonEmptyString'];
  options?: Maybe<Array<ListItem>>;
  placeholder?: Maybe<Scalars['NonEmptyString']>;
  type: FormFieldType;
};

export type FormFieldInput = {
  isMultiple: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
  name: Scalars['NonEmptyString'];
  options?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  placeholder?: InputMaybe<Scalars['NonEmptyString']>;
  type: FormFieldType;
};

export enum FormFieldType {
  Address = 'Address',
  Blob = 'Blob',
  Boolean = 'Boolean',
  CreditCard = 'CreditCard',
  Date = 'Date',
  Email = 'Email',
  File = 'File',
  Float = 'Float',
  Integer = 'Integer',
  Invoice = 'Invoice',
  List = 'List',
  Money = 'Money',
  Select = 'Select',
  Text = 'Text',
  Url = 'Url',
  Vendor = 'Vendor'
}

export type FormTemplate = {
  __typename?: 'FormTemplate';
  code: Scalars['ID'];
  /**  Shown when the form is being edited, none means form is not editable  */
  editingSubmitText?: Maybe<Scalars['NonEmptyString']>;
  /**
   *  These remain untouched and are responded by the receiver
   * @deprecated use Form.fields
   */
  fields: Array<FormField>;
  isExtendable: Scalars['Boolean'];
  submitText: Scalars['NonEmptyString'];
};

export type FormsPayload = PagePayload & {
  __typename?: 'FormsPayload';
  nodes: Array<Form>;
  pageInfo: PageInfo;
};

export type InviteNewUserInput = {
  email: Scalars['Email'];
  membership: MembershipInput;
};

export type InviteUserInput = {
  membership: MembershipInput;
  userId: Scalars['ID'];
};

export type Invoice = Node & {
  __typename?: 'Invoice';
  billingAddress: Address;
  createdAt: Scalars['DateTime'];
  dueAt: Scalars['DateTime'];
  /**  A percentual fee added to the subTotal  */
  fee: Scalars['NonNegativeFloat'];
  id: Scalars['ID'];
  lineItems: Array<InvoiceLineItem>;
  memo?: Maybe<Scalars['NonEmptyString']>;
  org: Organization;
  paymentTerms: Scalars['NonEmptyString'];
  reference: Scalars['NonEmptyString'];
  shippingAddress?: Maybe<Address>;
  status: InvoiceStatus;
  stripeId?: Maybe<Scalars['ID']>;
  /**  Before tax or fee is applied  */
  subTotal: Scalars['PositiveFloat'];
  /**  A flat tax added to the subTotal  */
  tax: Scalars['NonNegativeFloat'];
  total: Scalars['PositiveFloat'];
  updatedAt: Scalars['DateTime'];
};

export type InvoiceLineItem = Node & {
  __typename?: 'InvoiceLineItem';
  createdAt: Scalars['DateTime'];
  description: Scalars['NonEmptyString'];
  id: Scalars['ID'];
  quantity: Scalars['PositiveInt'];
  /**  Same as quantity * unitPrice  */
  subTotal: Scalars['PositiveFloat'];
  unitPrice: Scalars['PositiveFloat'];
  updatedAt: Scalars['DateTime'];
};

export type InvoiceLineItemInput = {
  description: Scalars['NonEmptyString'];
  /**  Defaults to 1  */
  quantity?: InputMaybe<Scalars['PositiveInt']>;
  unitPrice: Scalars['PositiveFloat'];
};

export enum InvoiceStatus {
  Draft = 'Draft',
  Paid = 'Paid',
  Uncollectible = 'Uncollectible',
  Unpaid = 'Unpaid',
  Void = 'Void'
}

/**  The type of SubmissionField.value when the type is LINE_ITEM  */
export type LineItemValue = {
  description: Scalars['NonEmptyString'];
  quantity: Scalars['NonNegativeFloat'];
  unitPrice: Scalars['NonNegativeFloat'];
};

export type ListItem = {
  __typename?: 'ListItem';
  code: Scalars['NonEmptyString'];
  name: Scalars['NonEmptyString'];
};

export type Membership = Node & {
  __typename?: 'Membership';
  createdAt: Scalars['DateTime'];
  department?: Maybe<Scalars['NonEmptyString']>;
  id: Scalars['ID'];
  org: Organization;
  role: UserRole;
  title?: Maybe<Scalars['NonEmptyString']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type MembershipInput = {
  department?: InputMaybe<Scalars['NonEmptyString']>;
  orgId: Scalars['ID'];
  role: UserRole;
  title?: InputMaybe<Scalars['NonEmptyString']>;
};

export type Message = Node & {
  __typename?: 'Message';
  account: ChatAccount;
  channel: Channel;
  createdAt: Scalars['DateTime'];
  files: Array<File>;
  /**  Includes emails replies & signatures  */
  fullText?: Maybe<Scalars['String']>;
  highlights: Array<MessageHighlight>;
  id: Scalars['ID'];
  inReplyTo?: Maybe<Message>;
  isDeleted: Scalars['Boolean'];
  /**  The markdown version of the message  */
  richText?: Maybe<Scalars['String']>;
  status: MessageStatus;
  /**  The plain text version of the message  */
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MessageHighlight = Node & {
  __typename?: 'MessageHighlight';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Message;
  /**  Internal notes that the user can add  */
  notes: Scalars['String'];
  /**  The highlighted (plain) text from the message  */
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export enum MessageStatus {
  Created = 'Created',
  Delivered = 'Delivered',
  Failed = 'Failed',
  Read = 'Read',
  Sending = 'Sending',
  Sent = 'Sent'
}

export type MessagesByUsersInput = {
  /**  The org to which the channel is contextualized  */
  orgId: Scalars['ID'];
  page?: InputMaybe<PageInput>;
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  services?: InputMaybe<Array<ChatService>>;
  userIds: Array<Scalars['ID']>;
};

export type MessagesPayload = PagePayload & {
  __typename?: 'MessagesPayload';
  nodes: Array<Message>;
  pageInfo: PageInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmAccount: ChatAccount;
  createChannel: Channel;
  createChatAccount: ChatAccount;
  createCustomTask: Task;
  createInvoice: Invoice;
  /**  Used by the front-end to send a new message  */
  createMessage: Message;
  createMessageHighlight: MessageHighlight;
  /**  Called from the catalog page with the "cart"  */
  createPreOrder: Order;
  createSubmission: Submission;
  createTask: Task;
  /**  Can only be used by superadmins  */
  createUser: User;
  /**  Sends an invite for a new user to sign up and join an org  */
  inviteNewUser: SuccessPayload;
  /**  Invites a pre-existing user  */
  inviteUser: Membership;
  /**  Used by the message-api when incoming messages are received  */
  receiveMessage?: Maybe<Message>;
  requestResetPassword: SuccessPayload;
  requestSignUp: SuccessPayload;
  signIn: User;
  signUp: User;
  tagMessageHighlightToSpec: Spec;
  updateChannel: Channel;
  updateChatAccount: ChatAccount;
  updateForm: Form;
  /**  Called by the lambda that handles Stripe requests  */
  updateInvoiceStatus: Invoice;
  /**  Used by the message-api to record status updates on a message  */
  updateMessageReceiptStatus: Scalars['Int'];
  /**  Used by the message-api when outgoing messages are sent  */
  updateMessageStatus: Message;
  updateOrganization: Organization;
  updateSubmission: Submission;
  updateTask: Task;
  /**  Updates the session user  */
  updateUser: User;
};


export type MutationConfirmAccountArgs = {
  token: Scalars['JWT'];
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateChatAccountArgs = {
  input: CreateChatAccountInput;
};


export type MutationCreateCustomTaskArgs = {
  input: CreateCustomTaskInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationCreateMessageHighlightArgs = {
  input: CreateMessageHighlightInput;
};


export type MutationCreatePreOrderArgs = {
  input: CreatePreOrderInput;
};


export type MutationCreateSubmissionArgs = {
  input: CreateSubmissionInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationInviteNewUserArgs = {
  input: InviteNewUserInput;
};


export type MutationInviteUserArgs = {
  input: InviteUserInput;
};


export type MutationReceiveMessageArgs = {
  input: ReceiveMessageInput;
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['Email'];
};


export type MutationRequestSignUpArgs = {
  email: Scalars['Email'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationTagMessageHighlightToSpecArgs = {
  input: TagMessageHighlightToSpecInput;
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationUpdateChatAccountArgs = {
  input: UpdateChatAccountInput;
};


export type MutationUpdateFormArgs = {
  input: UpdateFormInput;
};


export type MutationUpdateInvoiceStatusArgs = {
  input: UpdateInvoiceStatusInput;
};


export type MutationUpdateMessageReceiptStatusArgs = {
  input: UpdateMessageReceiptStatusInput;
};


export type MutationUpdateMessageStatusArgs = {
  input: UpdateMessageStatusInput;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


export type MutationUpdateSubmissionArgs = {
  input: UpdateSubmissionInput;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Node = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type NodeState = Node & {
  __typename?: 'NodeState';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /**  The Merchant org this belongs to (either directly, via an Order or a Product)  */
  org: Organization;
  specs: Array<Spec>;
  updatedAt: Scalars['DateTime'];
  workflows: Array<Workflow>;
};

export type Order = Node & {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  org: Organization;
  products: Array<Product>;
  state: NodeState;
  updatedAt: Scalars['DateTime'];
};

export type Organization = Node & {
  __typename?: 'Organization';
  addresses: Array<Address>;
  /**  Where this org is the context  */
  channels: Array<Channel>;
  createdAt: Scalars['DateTime'];
  events: EventsPayload;
  id: Scalars['ID'];
  invoices: Array<Invoice>;
  kind: OrganizationKind;
  members: Array<Membership>;
  /**  Whose members are part of  */
  membersChannels: ChannelsPayload;
  myMembership?: Maybe<Membership>;
  name: Scalars['NonEmptyString'];
  orders: Array<Order>;
  state: NodeState;
  /**  Used when viewing a vendor org  */
  tasks: Array<Task>;
  updatedAt: Scalars['DateTime'];
};


export type OrganizationEventsArgs = {
  input?: InputMaybe<OrganizationEventsInput>;
};


export type OrganizationMembersChannelsArgs = {
  input?: InputMaybe<OrganizationMembersChannelsInput>;
};

export type OrganizationEventsInput = {
  page?: InputMaybe<PageInput>;
  /**  Which event types to include in the response  */
  types?: InputMaybe<Array<EventType>>;
};

export type OrganizationInput = {
  kind?: InputMaybe<OrganizationKind>;
  name?: InputMaybe<Scalars['NonEmptyString']>;
  title?: InputMaybe<Scalars['NonEmptyString']>;
};

export enum OrganizationKind {
  Affiliate = 'Affiliate',
  Design = 'Design',
  Management = 'Management',
  Merchant = 'Merchant',
  Trading = 'Trading',
  Vendor = 'Vendor'
}

export type OrganizationMembersChannelsInput = {
  page?: InputMaybe<PageInput>;
};

export type OrganizationSubscriptionPayload = Event | Invoice;

export type OrganizationsInput = {
  kind?: InputMaybe<Array<OrganizationKind>>;
  page?: InputMaybe<PageInput>;
  search?: InputMaybe<Scalars['NonEmptyString']>;
};

export type OrganizationsPayload = PagePayload & {
  __typename?: 'OrganizationsPayload';
  nodes: Array<Organization>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['NonEmptyString']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['NonEmptyString']>;
};

export type PageInput = {
  after?: InputMaybe<Scalars['NonEmptyString']>;
  first?: InputMaybe<Scalars['PositiveInt']>;
  last?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
};

/**  To be implemented by all responses with lists  */
export type PagePayload = {
  nodes: Array<Node>;
  pageInfo: PageInfo;
};

export type Product = Node & {
  __typename?: 'Product';
  channels: Array<Channel>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** The value submitted as productName */
  name?: Maybe<Scalars['NonEmptyString']>;
  order: Order;
  state: NodeState;
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  catalog: FormsPayload;
  channel: Channel;
  form: Form;
  formFields: Array<FormField>;
  invoice: Invoice;
  isEmailAvailable: SuccessPayload;
  managementOrganization: Organization;
  me?: Maybe<User>;
  messagesByUsers: MessagesPayload;
  /** @deprecated Not supported yet */
  node?: Maybe<Node>;
  nodeState: NodeState;
  organization: Organization;
  organizations: OrganizationsPayload;
  product: Product;
  spec: Spec;
  task: Task;
  user: User;
  userByEmail?: Maybe<User>;
  users: UsersPayload;
};


export type QueryCatalogArgs = {
  input: CatalogInput;
};


export type QueryChannelArgs = {
  channelId: Scalars['ID'];
};


export type QueryFormArgs = {
  formId: Scalars['ID'];
};


export type QueryInvoiceArgs = {
  invoiceId: Scalars['ID'];
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['Email'];
};


export type QueryMessagesByUsersArgs = {
  input: MessagesByUsersInput;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodeStateArgs = {
  stateId: Scalars['ID'];
};


export type QueryOrganizationArgs = {
  orgId: Scalars['ID'];
};


export type QueryOrganizationsArgs = {
  input?: InputMaybe<OrganizationsInput>;
};


export type QueryProductArgs = {
  productId: Scalars['ID'];
};


export type QuerySpecArgs = {
  specId: Scalars['ID'];
};


export type QueryTaskArgs = {
  taskId: Scalars['ID'];
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['Email'];
};


export type QueryUsersArgs = {
  input?: InputMaybe<UsersInput>;
};

export type ReceiveMessageInput = {
  channelId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<Scalars['URL']>>;
  foreignId?: InputMaybe<Scalars['String']>;
  from: Scalars['NonEmptyString'];
  fullText?: InputMaybe<Scalars['String']>;
  service: ChatService;
  subject?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Can be sent empty when sending files  */
  text: Scalars['String'];
  to?: InputMaybe<Array<Scalars['NonEmptyString']>>;
};

export type SignInInput = {
  email: Scalars['Email'];
  password: Scalars['NonEmptyString'];
};

export type SignUpInput = {
  /**  It must include either an email or a token  */
  email?: InputMaybe<Scalars['Email']>;
  firstName: Scalars['NonEmptyString'];
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  organization?: InputMaybe<OrganizationInput>;
  password: Scalars['NonEmptyString'];
  phone?: InputMaybe<Scalars['Phone']>;
  smsNumber?: InputMaybe<Scalars['Phone']>;
  token?: InputMaybe<Scalars['JWT']>;
  whatsappNumber?: InputMaybe<Scalars['Phone']>;
};

export type Spec = Node & {
  __typename?: 'Spec';
  createdAt: Scalars['DateTime'];
  /**  SubmissionFields that were tagged to this Spec  */
  fields: Array<SubmissionField>;
  /**  Message highlights that were tagged to this Spec  */
  highlights: Array<MessageHighlight>;
  id: Scalars['ID'];
  isApproved: Scalars['Boolean'];
  template: FormField;
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['Json']>;
};

export type Submission = Node & {
  __typename?: 'Submission';
  createdAt: Scalars['DateTime'];
  fields: Array<SubmissionField>;
  form: Form;
  id: Scalars['ID'];
  org: Organization;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type SubmissionField = Node & {
  __typename?: 'SubmissionField';
  code: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  field?: Maybe<FormField>;
  id: Scalars['ID'];
  submission: Submission;
  updatedAt: Scalars['DateTime'];
  value: Scalars['Json'];
};

export type SubmissionFieldInput = {
  /**  The FormField.id for this field  */
  code: Scalars['ID'];
  value: Scalars['Json'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /**  Emits any new Message that is sent to the given channel and the channel itself  */
  channel: ChannelSubscriptionPayload;
  /**  Emits new Events created for the given org  */
  organization: OrganizationSubscriptionPayload;
};


export type SubscriptionChannelArgs = {
  channelId: Scalars['ID'];
};


export type SubscriptionOrganizationArgs = {
  orgId: Scalars['ID'];
};

export type SuccessPayload = {
  __typename?: 'SuccessPayload';
  error?: Maybe<ErrorCode>;
};

export type TagMessageHighlightToSpecInput = {
  /**  The FormField.code  */
  code: Scalars['ID'];
  messageHighlightId: Scalars['ID'];
  stateId: Scalars['ID'];
  /**  The value that is extracted from the message  */
  value?: InputMaybe<Scalars['Json']>;
};

export type Task = Node & {
  __typename?: 'Task';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  dueAt?: Maybe<Scalars['DateTime']>;
  form?: Maybe<Form>;
  id: Scalars['ID'];
  name: Scalars['NonEmptyString'];
  /**  The assigned org  */
  org: Organization;
  state: NodeState;
  status: TaskStatus;
  /**  The submission from its form, that matches the org  */
  submission?: Maybe<Submission>;
  template?: Maybe<TaskTemplate>;
  updatedAt: Scalars['DateTime'];
  /**  The assigned user  */
  user: User;
};

export enum TaskStatus {
  Blocked = 'Blocked',
  Completed = 'Completed',
  InProgress = 'InProgress',
  Skipped = 'Skipped',
  ToDo = 'ToDo'
}

export type TaskTemplate = {
  __typename?: 'TaskTemplate';
  assignTo: OrganizationKind;
  code: Scalars['ID'];
  form?: Maybe<FormTemplate>;
  /**  If the task must be completed manually  */
  isManual?: Maybe<Scalars['Boolean']>;
  name: Scalars['NonEmptyString'];
  workflowCode: Scalars['ID'];
};

export type UpdateChannelInput = {
  channelId: Scalars['ID'];
  membersIds?: InputMaybe<Array<Scalars['ID']>>;
  orgId?: InputMaybe<Scalars['ID']>;
  orgIds?: InputMaybe<Array<Scalars['ID']>>;
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  subject?: InputMaybe<Scalars['NonEmptyString']>;
};

export type UpdateChatAccountInput = {
  accountId: Scalars['ID'];
  identifier?: InputMaybe<Scalars['NonEmptyString']>;
  service?: InputMaybe<ChatService>;
};

export type UpdateFormInput = {
  /**  A list of "extra" fields, overrides previous calls  */
  fields: Array<FormFieldInput>;
  formId: Scalars['ID'];
};

export type UpdateInvoiceStatusInput = {
  status: InvoiceStatus;
  stripeId: Scalars['ID'];
};

export type UpdateMessageReceiptStatusInput = {
  foreignId: Scalars['ID'];
  status: MessageStatus;
};

export type UpdateMessageStatusInput = {
  foreignId: Scalars['ID'];
  messageId: Scalars['ID'];
  status?: InputMaybe<MessageStatus>;
  to: Array<Scalars['NonEmptyString']>;
};

export type UpdateOrganizationInput = {
  name: Scalars['NonEmptyString'];
  orgId: Scalars['ID'];
};

export type UpdateSubmissionInput = {
  fields: Array<SubmissionFieldInput>;
  submissionId: Scalars['ID'];
};

export type UpdateTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  dueAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['NonEmptyString']>;
  status?: InputMaybe<TaskStatus>;
  taskId: Scalars['ID'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars['NonEmptyString']>;
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  password?: InputMaybe<Scalars['NonEmptyString']>;
  phone?: InputMaybe<Scalars['Phone']>;
  preferredAccountId?: InputMaybe<Scalars['ID']>;
  /**  Defaults to the session user, only superadmins can change other users  */
  userId?: InputMaybe<Scalars['ID']>;
};

export type User = Node & {
  __typename?: 'User';
  accounts: Array<ChatAccount>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['Email']>;
  firstName: Scalars['NonEmptyString'];
  id: Scalars['ID'];
  isConfirmed: Scalars['Boolean'];
  isSuperadmin: Scalars['Boolean'];
  lastName?: Maybe<Scalars['NonEmptyString']>;
  memberships: Array<Membership>;
  name: Scalars['NonEmptyString'];
  phone?: Maybe<Scalars['Phone']>;
  preferredAccount?: Maybe<ChatAccount>;
  /**  A fresh JWT for the user  */
  token: Scalars['JWT'];
  updatedAt: Scalars['DateTime'];
};

export enum UserRole {
  Admin = 'Admin',
  Member = 'Member'
}

export type UsersInput = {
  page?: InputMaybe<PageInput>;
};

export type UsersPayload = PagePayload & {
  __typename?: 'UsersPayload';
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type Workflow = {
  __typename?: 'Workflow';
  code: Scalars['ID'];
  /**  These are the tasks (template) that can be created in the workflow  */
  creatableTasks: Array<TaskTemplate>;
  name: Scalars['NonEmptyString'];
  /**  TODO: Maybe this logic needs to be implemented in the client  */
  status: WorkflowStatus;
  tasks: Array<Task>;
};

export enum WorkflowStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  ToDo = 'TO_DO'
}

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', email?: any | null | undefined, firstName: any, lastName?: any | null | undefined, createdAt: any, token: any, memberships: Array<{ __typename?: 'Membership', role: UserRole, org: { __typename?: 'Organization', name: any, kind: OrganizationKind, createdAt: any } }> } | null | undefined };

export type RequestSignUpMutationVariables = Exact<{
  email: Scalars['Email'];
}>;


export type RequestSignUpMutation = { __typename?: 'Mutation', requestSignUp: { __typename?: 'SuccessPayload', error?: ErrorCode | null | undefined } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', email?: any | null | undefined, firstName: any, lastName?: any | null | undefined, token: any, createdAt: any, memberships: Array<{ __typename?: 'Membership', title?: any | null | undefined, role: UserRole, createdAt: any }> } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', email?: any | null | undefined, firstName: any, lastName?: any | null | undefined, token: any, createdAt: any, memberships: Array<{ __typename?: 'Membership', role: UserRole, org: { __typename?: 'Organization', name: any, kind: OrganizationKind } }> } };


export const MeDocument = `
    query Me {
  me {
    email
    firstName
    lastName
    createdAt
    token
    memberships {
      role
      org {
        name
        kind
        createdAt
      }
    }
  }
}
    `;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['Me'] : ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
      options
    );
export const RequestSignUpDocument = `
    mutation RequestSignUp($email: Email!) {
  requestSignUp(email: $email) {
    error
  }
}
    `;
export const useRequestSignUpMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RequestSignUpMutation, TError, RequestSignUpMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RequestSignUpMutation, TError, RequestSignUpMutationVariables, TContext>(
      'RequestSignUp',
      (variables?: RequestSignUpMutationVariables) => fetcher<RequestSignUpMutation, RequestSignUpMutationVariables>(client, RequestSignUpDocument, variables, headers)(),
      options
    );
export const SignInDocument = `
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    email
    firstName
    lastName
    token
    createdAt
    memberships {
      title
      role
      createdAt
    }
  }
}
    `;
export const useSignInMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SignInMutation, TError, SignInMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SignInMutation, TError, SignInMutationVariables, TContext>(
      'SignIn',
      (variables?: SignInMutationVariables) => fetcher<SignInMutation, SignInMutationVariables>(client, SignInDocument, variables, headers)(),
      options
    );
export const SignUpDocument = `
    mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    email
    firstName
    lastName
    token
    createdAt
    memberships {
      role
      org {
        name
        kind
      }
    }
  }
}
    `;
export const useSignUpMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SignUpMutation, TError, SignUpMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SignUpMutation, TError, SignUpMutationVariables, TContext>(
      'SignUp',
      (variables?: SignUpMutationVariables) => fetcher<SignUpMutation, SignUpMutationVariables>(client, SignUpDocument, variables, headers)(),
      options
    );