import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "TikTok";
export declare enum ControlAction {
    CONTROL_ACTION_FALLBACK_UNKNOWN = 0,
    CONTROL_ACTION_STREAM_PAUSED = 1,
    CONTROL_ACTION_STREAM_UNPAUSED = 2,
    CONTROL_ACTION_STREAM_ENDED = 3,
    CONTROL_ACTION_STREAM_SUSPENDED = 4,
    UNRECOGNIZED = -1
}
export declare function controlActionFromJSON(object: any): ControlAction;
export declare function controlActionToJSON(object: ControlAction): string;
/** Data structure from im/fetch/ response */
export interface WebcastResponse {
    messages: Message[];
    cursor: string;
    fetchInterval: number;
    serverTimestamp: string;
    internalExt: string;
    /** ws (1) or polling (2) */
    fetchType: number;
    wsParams: WebsocketParam[];
    heartbeatDuration: number;
    needAck: boolean;
    wsUrl: string;
}
export interface Message {
    type: string;
    binary: Uint8Array;
}
export interface WebsocketParam {
    name: string;
    value: string;
}
/** Message types depending on Message.tyoe */
export interface WebcastControlMessage {
    action: ControlAction;
}
/** Statistics like viewer count */
export interface WebcastRoomUserSeqMessage {
    topViewers: TopUser[];
    viewerCount: number;
}
export interface TopUser {
    coinCount: string;
    user: User | undefined;
}
export interface ImageModel {
    mUrls: string[];
    mUri: string;
    height: number;
    width: number;
    avgColor: string;
    imageType: number;
    schema: string;
    content: ImageModel_Content | undefined;
    isAnimated: boolean;
}
export interface ImageModel_Content {
    name: string;
    fontColor: string;
    level: string;
}
export interface WebcastChatMessage {
    event: WebcastMessageEvent | undefined;
    user: User | undefined;
    comment: string;
    visibleToSender: boolean;
    background: ImageModel | undefined;
    fullScreenTextColor: string;
    backgroundImageV2: ImageModel | undefined;
    giftImage: ImageModel | undefined;
    inputType: number;
    atUser: User | undefined;
    emotes: WebcastSubEmote[];
    contentLanguage: string;
    quickChatScene: number;
    communityflaggedStatus: number;
    commentQualityScores: WebcastChatMessage_CommentQualityScore[];
    userIdentity: WebcastChatMessage_UserIdentity | undefined;
    commentTag: WebcastChatMessage_CommentTag[];
    screenTime: string;
    signature: string;
    signatureVersion: string;
    ecStreamerKey: string;
}
export declare enum WebcastChatMessage_CommentTag {
    COMMENT_TAG_NORMAL = 0,
    COMMENT_TAG_CANDIDATE = 1,
    COMMENT_TAG_OVERAGE = 2,
    UNRECOGNIZED = -1
}
export declare function webcastChatMessage_CommentTagFromJSON(object: any): WebcastChatMessage_CommentTag;
export declare function webcastChatMessage_CommentTagToJSON(object: WebcastChatMessage_CommentTag): string;
export interface WebcastChatMessage_UserIdentity {
    isGiftGiverOfAnchor: boolean;
    isSubscriberOfAnchor: boolean;
    isMutualFollowingWithAnchor: boolean;
    isFollowerOfAnchor: boolean;
    isModeratorOfAnchor: boolean;
    isAnchor: boolean;
}
export interface WebcastChatMessage_CommentQualityScore {
    version: string;
    score: string;
}
export interface EmoteUploadInfo {
    userId: string;
    emoteUploadSource?: EmoteUploadInfo_UserEmoteUploadSource | undefined;
    userInfo: User | undefined;
    userIdStr: string;
}
export declare enum EmoteUploadInfo_UserEmoteUploadSource {
    USER_EMOTE_UPLOAD_SOURCE_EMOTE_UPLOAD_SOURCE_ANCHOR = 0,
    USER_EMOTE_UPLOAD_SOURCE_EMOTE_UPLOAD_SOURCE_SUBSCRIBER = 1,
    USER_EMOTE_UPLOAD_SOURCE_EMOTE_UPLOAD_SOURCE_MODERATOR = 2,
    UNRECOGNIZED = -1
}
export declare function emoteUploadInfo_UserEmoteUploadSourceFromJSON(object: any): EmoteUploadInfo_UserEmoteUploadSource;
export declare function emoteUploadInfo_UserEmoteUploadSourceToJSON(object: EmoteUploadInfo_UserEmoteUploadSource): string;
/** Chat Emotes (Subscriber) */
export interface WebcastEmoteChatMessage {
    user: User | undefined;
    emote: EmoteDetails | undefined;
}
export interface WebcastSubEmote {
    /** starting at 0, you insert the emote itself into the comment at that place */
    placeInComment: number;
    emote: EmoteDetails | undefined;
}
export interface WebcastMemberMessage {
    event: WebcastMessageEvent | undefined;
    user: User | undefined;
    actionId: number;
}
export interface WebcastGiftMessage {
    event: WebcastMessageEvent | undefined;
    giftId: number;
    repeatCount: number;
    user: User | undefined;
    repeatEnd: number;
    groupId: string;
    giftDetails: WebcastGiftMessageGiftDetails | undefined;
    monitorExtra: string;
    giftExtra: WebcastGiftMessageGiftExtra | undefined;
}
export interface WebcastGiftMessageGiftDetails {
    giftImage: WebcastGiftMessageGiftImage | undefined;
    giftName: string;
    describe: string;
    giftType: number;
    diamondCount: number;
}
/** Taken from https://github.com/Davincible/gotiktoklive/blob/da4630622bc586629a53faae64e8c53509af29de/proto/tiktok.proto#L57 */
export interface WebcastGiftMessageGiftExtra {
    timestamp: string;
    receiverUserId: string;
}
export interface WebcastGiftMessageGiftImage {
    giftPictureUrl: string;
}
/** Battle start */
export interface WebcastLinkMicBattle {
    battleUsers: WebcastLinkMicBattleItems[];
}
export interface WebcastLinkMicBattleItems {
    battleGroup: WebcastLinkMicBattleGroup | undefined;
}
export interface WebcastLinkMicBattleGroup {
    user: LinkUser | undefined;
}
/** Battle status */
export interface WebcastLinkMicArmies {
    battleItems: WebcastLinkMicArmiesItems[];
    battleStatus: number;
}
export interface WebcastLinkMicArmiesItems {
    hostUserId: string;
    battleGroups: WebcastLinkMicArmiesGroup[];
}
export interface WebcastLinkMicArmiesGroup {
    users: User[];
    points: number;
}
/** Follow & share event */
export interface WebcastSocialMessage {
    event: WebcastMessageEvent | undefined;
    user: User | undefined;
}
/** Like event (is only sent from time to time, not with every like) */
export interface WebcastLikeMessage {
    event: WebcastMessageEvent | undefined;
    user: User | undefined;
    likeCount: number;
    totalLikeCount: number;
}
/** New question event */
export interface WebcastQuestionNewMessage {
    questionDetails: QuestionDetails | undefined;
}
export interface QuestionDetails {
    questionText: string;
    user: User | undefined;
}
export interface WebcastMessageEvent {
    msgId: string;
    createTime: string;
    eventDetails: WebcastMessageEventDetails | undefined;
}
/** Contains UI information */
export interface WebcastMessageEventDetails {
    displayType: string;
    label: string;
}
/** Source: Co-opted https://github.com/zerodytrash/TikTok-Livestream-Chat-Connector/issues/19#issuecomment-1074150342 */
export interface WebcastLiveIntroMessage {
    id: string;
    description: string;
    user: User | undefined;
}
export interface SystemMessage {
    description: string;
}
export interface WebcastInRoomBannerMessage {
    data: string;
}
export interface RankItem {
    colour: string;
    id: string;
}
export interface WeeklyRanking {
    type: string;
    label: string;
    rank: RankItem | undefined;
}
export interface RankContainer {
    rankings: WeeklyRanking | undefined;
}
export interface WebcastHourlyRankMessage {
    data: RankContainer | undefined;
}
export interface EmoteDetails {
    emoteId: string;
    image: EmoteImage | undefined;
}
export interface EmoteImage {
    imageUrl: string;
}
/**
 * Envelope (treasure boxes)
 * Taken from https://github.com/ThanoFish/TikTok-Live-Connector/blob/9b215b96792adfddfb638344b152fa9efa581b4c/src/proto/tiktokSchema.proto
 */
export interface WebcastEnvelopeMessage {
    treasureBoxData: TreasureBoxData | undefined;
    treasureBoxUser: TreasureBoxUser | undefined;
}
export interface TreasureBoxUser {
    user2: TreasureBoxUser2 | undefined;
}
export interface TreasureBoxUser2 {
    user3: TreasureBoxUser3[];
}
export interface TreasureBoxUser3 {
    user4: TreasureBoxUser4 | undefined;
}
export interface TreasureBoxUser4 {
    user: User | undefined;
}
export interface TreasureBoxData {
    coins: number;
    canOpen: number;
    timestamp: string;
}
/** New Subscriber message */
export interface WebcastSubNotifyMessage {
    event: WebcastMessageEvent | undefined;
    user: User | undefined;
    exhibitionType: number;
    subMonth: number;
    subscribeType: number;
    oldSubscribeStatus: number;
    subscribingStatus: number;
}
export interface User {
    userId: string;
    nickname: string;
    profilePicture: ProfilePicture | undefined;
    uniqueId: string;
    secUid: string;
    badges: UserBadgesAttributes[];
    createTime: string;
    bioDescription: string;
    followInfo: FollowInfo | undefined;
}
export interface FollowInfo {
    followingCount: number;
    followerCount: number;
    followStatus: number;
    pushStatus: number;
}
export interface LinkUser {
    userId: string;
    nickname: string;
    profilePicture: ProfilePicture | undefined;
    uniqueId: string;
}
export interface ProfilePicture {
    urls: string[];
}
export interface UserBadgesAttributes {
    badgeSceneType: number;
    imageBadges: UserImageBadge[];
    badges: UserBadge[];
    privilegeLogExtra: PrivilegeLogExtra | undefined;
}
export interface PrivilegeLogExtra {
    privilegeId: string;
    level: string;
}
export interface UserBadge {
    type: string;
    name: string;
}
export interface UserImageBadge {
    displayType: number;
    image: UserImageBadgeImage | undefined;
}
export interface UserImageBadgeImage {
    url: string;
}
/** Websocket incoming message structure */
export interface WebcastWebsocketMessage {
    id: string;
    type: string;
    binary: Uint8Array;
}
/** Websocket acknowledgment message */
export interface WebcastWebsocketAck {
    id: string;
    type: string;
}
export declare const WebcastResponseDecoder: MessageFns<WebcastResponse>;
export declare const MessageDecoder: MessageFns<Message>;
export declare const WebsocketParamDecoder: MessageFns<WebsocketParam>;
export declare const WebcastControlMessageDecoder: MessageFns<WebcastControlMessage>;
export declare const WebcastRoomUserSeqMessageDecoder: MessageFns<WebcastRoomUserSeqMessage>;
export declare const TopUserDecoder: MessageFns<TopUser>;
export declare const ImageModelDecoder: MessageFns<ImageModel>;
export declare const ImageModel_ContentDecoder: MessageFns<ImageModel_Content>;
export declare const WebcastChatMessageDecoder: MessageFns<WebcastChatMessage>;
export declare const WebcastChatMessage_UserIdentityDecoder: MessageFns<WebcastChatMessage_UserIdentity>;
export declare const WebcastChatMessage_CommentQualityScoreDecoder: MessageFns<WebcastChatMessage_CommentQualityScore>;
export declare const EmoteUploadInfoDecoder: MessageFns<EmoteUploadInfo>;
export declare const WebcastEmoteChatMessageDecoder: MessageFns<WebcastEmoteChatMessage>;
export declare const WebcastSubEmoteDecoder: MessageFns<WebcastSubEmote>;
export declare const WebcastMemberMessageDecoder: MessageFns<WebcastMemberMessage>;
export declare const WebcastGiftMessageDecoder: MessageFns<WebcastGiftMessage>;
export declare const WebcastGiftMessageGiftDetailsDecoder: MessageFns<WebcastGiftMessageGiftDetails>;
export declare const WebcastGiftMessageGiftExtraDecoder: MessageFns<WebcastGiftMessageGiftExtra>;
export declare const WebcastGiftMessageGiftImageDecoder: MessageFns<WebcastGiftMessageGiftImage>;
export declare const WebcastLinkMicBattleDecoder: MessageFns<WebcastLinkMicBattle>;
export declare const WebcastLinkMicBattleItemsDecoder: MessageFns<WebcastLinkMicBattleItems>;
export declare const WebcastLinkMicBattleGroupDecoder: MessageFns<WebcastLinkMicBattleGroup>;
export declare const WebcastLinkMicArmiesDecoder: MessageFns<WebcastLinkMicArmies>;
export declare const WebcastLinkMicArmiesItemsDecoder: MessageFns<WebcastLinkMicArmiesItems>;
export declare const WebcastLinkMicArmiesGroupDecoder: MessageFns<WebcastLinkMicArmiesGroup>;
export declare const WebcastSocialMessageDecoder: MessageFns<WebcastSocialMessage>;
export declare const WebcastLikeMessageDecoder: MessageFns<WebcastLikeMessage>;
export declare const WebcastQuestionNewMessageDecoder: MessageFns<WebcastQuestionNewMessage>;
export declare const QuestionDetailsDecoder: MessageFns<QuestionDetails>;
export declare const WebcastMessageEventDecoder: MessageFns<WebcastMessageEvent>;
export declare const WebcastMessageEventDetailsDecoder: MessageFns<WebcastMessageEventDetails>;
export declare const WebcastLiveIntroMessageDecoder: MessageFns<WebcastLiveIntroMessage>;
export declare const SystemMessageDecoder: MessageFns<SystemMessage>;
export declare const WebcastInRoomBannerMessageDecoder: MessageFns<WebcastInRoomBannerMessage>;
export declare const RankItemDecoder: MessageFns<RankItem>;
export declare const WeeklyRankingDecoder: MessageFns<WeeklyRanking>;
export declare const RankContainerDecoder: MessageFns<RankContainer>;
export declare const WebcastHourlyRankMessageDecoder: MessageFns<WebcastHourlyRankMessage>;
export declare const EmoteDetailsDecoder: MessageFns<EmoteDetails>;
export declare const EmoteImageDecoder: MessageFns<EmoteImage>;
export declare const WebcastEnvelopeMessageDecoder: MessageFns<WebcastEnvelopeMessage>;
export declare const TreasureBoxUserDecoder: MessageFns<TreasureBoxUser>;
export declare const TreasureBoxUser2Decoder: MessageFns<TreasureBoxUser2>;
export declare const TreasureBoxUser3Decoder: MessageFns<TreasureBoxUser3>;
export declare const TreasureBoxUser4Decoder: MessageFns<TreasureBoxUser4>;
export declare const TreasureBoxDataDecoder: MessageFns<TreasureBoxData>;
export declare const WebcastSubNotifyMessageDecoder: MessageFns<WebcastSubNotifyMessage>;
export declare const UserDecoder: MessageFns<User>;
export declare const FollowInfoDecoder: MessageFns<FollowInfo>;
export declare const LinkUserDecoder: MessageFns<LinkUser>;
export declare const ProfilePictureDecoder: MessageFns<ProfilePicture>;
export declare const UserBadgesAttributesDecoder: MessageFns<UserBadgesAttributes>;
export declare const PrivilegeLogExtraDecoder: MessageFns<PrivilegeLogExtra>;
export declare const UserBadgeDecoder: MessageFns<UserBadge>;
export declare const UserImageBadgeDecoder: MessageFns<UserImageBadge>;
export declare const UserImageBadgeImageDecoder: MessageFns<UserImageBadgeImage>;
export declare const WebcastWebsocketMessageDecoder: MessageFns<WebcastWebsocketMessage>;
export declare const WebcastWebsocketAckDecoder: MessageFns<WebcastWebsocketAck>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
//# sourceMappingURL=tiktok-schema-v1.d.ts.map