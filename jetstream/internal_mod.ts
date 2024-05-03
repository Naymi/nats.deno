/*
 * Copyright 2023-2024 The NATS Authors
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export { checkJsError, isFlowControlMsg, isHeartbeatMsg } from "./jsutil.ts";

export {
  AdvisoryKind,
  ConsumerDebugEvents,
  ConsumerEvents,
  consumerOpts,
  DirectMsgHeaders,
  isConsumerOptsBuilder,
  JsHeaders,
  RepublishHeaders,
} from "./types.ts";

export { jetstream, JetStreamClientImpl } from "./jsclient.ts";

export type {
  AbortOnMissingResource,
  Advisory,
  Bind,
  Closed,
  ConsumeBytes,
  ConsumeCallback,
  ConsumeMessages,
  ConsumeOptions,
  Consumer,
  ConsumerAPI,
  ConsumerCallbackFn,
  ConsumerInfoable,
  ConsumerMessages,
  ConsumerOpts,
  ConsumerOptsBuilder,
  Consumers,
  ConsumerStatus,
  Destroyable,
  DirectStreamAPI,
  Expires,
  FetchBytes,
  FetchMessages,
  FetchOptions,
  IdleHeartbeat,
  JetStreamClient,
  JetStreamManager,
  JetStreamManagerOptions,
  JetStreamOptions,
  JetStreamPublishOptions,
  JetStreamPullSubscription,
  JetStreamSubscription,
  JetStreamSubscriptionInfoable,
  JetStreamSubscriptionOptions,
  JsMsgCallback,
  Lister,
  MaxBytes,
  MaxMessages,
  NextOptions,
  OrderedConsumerOptions,
  PubAck,
  Pullable,
  StoredMsg,
  Stream,
  StreamAPI,
  Streams,
  ThresholdBytes,
  ThresholdMessages,
} from "./types.ts";

export type { StreamNames } from "./jsbaseclient_api.ts";
export type {
  AccountLimits,
  ApiPagedRequest,
  ClusterInfo,
  ConsumerConfig,
  ConsumerInfo,
  ConsumerUpdateConfig,
  ExternalStream,
  JetStreamAccountStats,
  JetStreamApiStats,
  JetStreamUsageAccountLimits,
  LastForMsgRequest,
  LostStreamData,
  MsgDeleteRequest,
  MsgRequest,
  PeerInfo,
  Placement,
  PullOptions,
  PurgeBySeq,
  PurgeBySubject,
  PurgeOpts,
  PurgeResponse,
  PurgeTrimOpts,
  Republish,
  SeqMsgRequest,
  SequenceInfo,
  StreamAlternate,
  StreamConfig,
  StreamConsumerLimits,
  StreamInfo,
  StreamSource,
  StreamSourceInfo,
  StreamState,
  StreamUpdateConfig,
  SubjectTransformConfig,
} from "./jsapi_types.ts";

export type { JsMsg } from "./jsmsg.ts";

export {
  AckPolicy,
  DeliverPolicy,
  DiscardPolicy,
  PubHeaders,
  ReplayPolicy,
  RetentionPolicy,
  StorageType,
  StoreCompression,
} from "./jsapi_types.ts";

export type { DeliveryInfo, StreamInfoRequestOptions } from "./jsapi_types.ts";
export { jetstreamManager } from "./jsclient.ts";
