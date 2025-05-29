import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "TikTok";
export declare enum AuditStatus {
    AUDITSTATUSUNKNOWN = 0,
    AUDITSTATUSPASS = 1,
    AUDITSTATUSFAILED = 2,
    AUDITSTATUSREVIEWING = 3,
    AUDITSTATUSFORBIDDEN = 4,
    UNRECOGNIZED = -1
}
export declare enum EmoteType {
    EMOTETYPENORMAL = 0,
    EMOTETYPEWITHSTICKER = 1,
    UNRECOGNIZED = -1
}
export declare enum ContentSource {
    CONTENTSOURCEUNKNOWN = 0,
    CONTENTSOURCENORMAL = 1,
    CONTENTSOURCECAMERA = 2,
    UNRECOGNIZED = -1
}
export declare enum EmotePrivateType {
    EMOTE_PRIVATE_TYPE_NORMAL = 0,
    EMOTE_PRIVATE_TYPE_SUB_WAVE = 1,
    UNRECOGNIZED = -1
}
export declare enum TextType {
    DISPLAY_TEXT = 0,
    CONTENT = 1,
    UNRECOGNIZED = -1
}
export declare enum LinkmicApplierSortSetting {
    LINKMIC_APPLIER_SORT_SETTING_NONE = 0,
    LINKMIC_APPLIER_SORT_SETTING_BY_GIFT_SCORE = 1,
    UNRECOGNIZED = -1
}
export declare enum HashtagNamespace {
    GLOBAL = 0,
    GAMING = 1,
    UNRECOGNIZED = -1
}
export declare enum AgreeStatus {
    AGREE_UNKNOWN = 0,
    AGREE = 1,
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare enum KickoutReason {
    KICKOUT_REASON_UNKNOWN = 0,
    KICKOUT_REASON_FIRST_FRAME_TIMEOUT = 1,
    KICKOUT_REASON_BY_HOST = 2,
    KICKOUT_REASON_RTC_LOST_CONNECTION = 3,
    KICKOUT_REASON_BY_PUNISH = 4,
    KICKOUT_REASON_BY_ADMIN = 5,
    KICKOUT_REASON_HOST_REMOVE_ALL_GUESTS = 6,
    UNRECOGNIZED = -1
}
export declare enum GroupStatus {
    GROUP_STATUS_UNKNOWN = 0,
    GROUP_STATUS_WAITING = 1,
    GROUP_STATUS_LINKED = 3,
    UNRECOGNIZED = -1
}
export declare enum BusinessCase {
    BUSINESS_NOT_SET = 0,
    APPLY_BIZ_CONTENT = 1,
    INVITE_BIZ_CONTENT = 2,
    REPLY_BIZ_CONTENT = 3,
    PERMIT_BIZ_CONTENT = 4,
    JOIN_DIRECT_BIZ_CONTENT = 5,
    KICK_OUT_BIZ_CONTENT = 6,
    LIST_CHANGE_BIZ_CONTENT = 11,
    MULTI_LIVE_CONTENT = 100,
    COHOST_CONTENT = 200,
    UNRECOGNIZED = -1
}
export declare enum ReplyStatus {
    REPLY_STATUS_UNKNOWN = 0,
    REPLY_STATUS_AGREE = 1,
    REPLY_STATUS_REFUSE_PERSONALLY = 2,
    REPLY_STATUS_REFUSE_TYPE_NOT_SUPPORT = 3,
    REPLY_STATUS_REFUSE_PROCESSING_INVITATION = 4,
    REPLY_STATUS_REFUSE_BY_TIMEOUT = 5,
    REPLY_STATUS_REFUSE_EXCEPTION = 6,
    REPLY_STATUS_REFUSE_SYSTEM_NOT_SUPPORTED = 7,
    REPLY_STATUS_REFUSE_SUBTYPE_DIFFERENCE = 8,
    REPLY_STATUS_REFUSE_IN_MICROOM = 9,
    REPLY_STATUS_REFUSE_NOT_LOAD_PLUGIN = 10,
    REPLY_STATUS_REFUSE_IN_MULTI_GUEST = 11,
    REPLY_STATUS_REFUSE_PAUSE_LIVE = 12,
    REPLY_STATUS_REFUSE_OPEN_CAMERA_DIALOG_SHOWING = 13,
    REPLY_STATUS_REFUSE_DRAW_GUESSING = 14,
    REPLY_STATUS_REFUSE_RANDOM_MATCHING = 15,
    REPLY_STATUS_REFUSE_IN_MATCH_PROCESSING = 16,
    REPLY_STATUS_REFUSE_IN_MICROOM_FOR_MULTI_COHOST = 17,
    REPLY_STATUS_REFUSE_COHOST_FINISHED = 18,
    REPLY_STATUS_REFUSE_NOT_CONNECTED = 19,
    REPLY_STATUS_REFUSE_LINKMIC_FULL = 20,
    REPLY_STATUS_REFUSE_ARC_INCOMPATIBLE = 21,
    REPLY_STATUS_REFUSE_PROCESSING_OTHER_INVITE = 22,
    REPLY_STATUS_REFUSE_PROCESSING_OTHER_APPLY = 23,
    REPLY_STATUS_REFUSE_IN_ANCHOR_COHOST = 24,
    REPLY_STATUS_REFUSE_TOPIC_PAIRING = 25,
    UNRECOGNIZED = -1
}
export declare enum SubscribeType {
    SUBSCRIBETYPE_ONCE = 0,
    SUBSCRIBETYPE_AUTO = 1,
    SUBSCRIBETYPE_DEFAULT = 100,
    UNRECOGNIZED = -1
}
export declare enum OldSubscribeStatus {
    OLD_SUBSCRIBE_STATUS_FIRST = 0,
    OLD_SUBSCRIBE_STATUS_RESUB = 1,
    OLD_SUBSCRIBE_STATUS_SUBIN_GRACE_PERIOD = 2,
    OLD_SUBSCRIBE_STATUS_SUB_NOTIN_GRACE_PERIOD = 3,
    OLD_SUBSCRIBE_STATUS_DEFAULT = 100,
    UNRECOGNIZED = -1
}
export declare enum SubscribingStatus {
    SUBSCRIBING_STATUS_UNKNOWN = 0,
    SUBSCRIBING_STATUS_ONCE = 1,
    SUBSCRIBING_STATUS_CIRCLE = 2,
    SUBSCRIBING_STATUS_CIRCLE_CANCEL = 3,
    SUBSCRIBING_STATUS_REFUND = 4,
    SUBSCRIBING_STATUS_IN_GRACE_PERIOD = 5,
    SUBSCRIBING_STATUS_NOT_IN_GRACE_PERIOD = 6,
    UNRECOGNIZED = -1
}
export declare enum LinkmicStatus {
    Disable = 0,
    Enable = 1,
    Just_Following = 2,
    Multi_Linking = 3,
    Multi_Linking_Only_Following = 4,
    UNRECOGNIZED = -1
}
export declare enum MemberMessageAction {
    UNKNOWN = 0,
    /** JOINED - User Joined the Stream */
    JOINED = 1,
    /** SUBSCRIBED - User Subscribed to the Host */
    SUBSCRIBED = 3,
    UNRECOGNIZED = -1
}
export declare enum ControlAction {
    CONTROL_ACTION_FALLBACK_UNKNOWN = 0,
    CONTROL_ACTION_STREAM_PAUSED = 1,
    CONTROL_ACTION_STREAM_UNPAUSED = 2,
    CONTROL_ACTION_STREAM_ENDED = 3,
    CONTROL_ACTION_STREAM_SUSPENDED = 4,
    UNRECOGNIZED = -1
}
export declare enum LinkLayerMessageType {
    Linker_Unknown = 0,
    Linker_Create = 1,
    Linker_Invite = 2,
    Linker_Apply = 3,
    Linker_Permit = 4,
    Linker_Reply = 5,
    Linker_Kick_Out = 6,
    Linker_Cancel_Apply = 7,
    Linker_Cancel_Invite = 8,
    Linker_Leave = 9,
    Linker_Finish = 10,
    Linker_List_Change = 11,
    Linker_Join_Direct = 12,
    Linker_Join_Group = 13,
    Linker_Permit_Group = 14,
    Linker_Cancel_Group = 15,
    Linker_Leave_Group = 16,
    Linker_P2P_Group_Change = 17,
    Linker_Group_Change = 18,
    UNRECOGNIZED = -1
}
export declare enum BarrageType {
    BarrageType_Unknown = 0,
    EComOrdering = 1,
    EComBuying = 2,
    Normal = 3,
    Subscribe = 4,
    EventView = 5,
    EventRegistered = 6,
    SubscribeGift = 7,
    UserUpgrade = 8,
    GradeUserEntranceNotification = 9,
    FansLevelUpgrade = 10,
    FansLevelEntrance = 11,
    GamePartnership = 12,
    UNRECOGNIZED = -1
}
export declare enum EnvelopeBusinessType {
    BusinessTypeUnknown = 0,
    BusinessTypeUserDiamond = 1,
    BusinessTypePlatformDiamond = 2,
    BusinessTypePlatformShell = 3,
    BusinessTypePortal = 4,
    BusinessTypePlatformMerch = 5,
    BusinessTypeEoYDiamond = 6,
    BusinessTypeFanClubGtM = 7,
    UNRECOGNIZED = -1
}
export declare enum EnvelopeFollowShowStatus {
    ENVELOPE_FOLLOW_SHOW_STATUS_ENVELOPE_FOLLOW_SHOW_UNKNOWN = 0,
    ENVELOPE_FOLLOW_SHOW_STATUS_ENVELOPE_FOLLOW_SHOW = 1,
    ENVELOPE_FOLLOW_SHOW_STATUS_ENVELOPE_FOLLOW_NOT_SHOW = 2,
    UNRECOGNIZED = -1
}
export declare enum EnvelopeDisplay {
    ENVELOPE_DISPLAY_UNKNOWN = 0,
    ENVELOPE_DISPLAY_NEW = 1,
    ENVELOPE_DISPLAY_HIDE = 2,
    UNRECOGNIZED = -1
}
export declare enum CommonContentCase {
    COMMON_CONTENT_NOT_SET = 0,
    CREATE_CHANNEL_CONTENT = 100,
    LIST_CHANGE_CONTENT = 102,
    INVITE_CONTENT = 103,
    APPLY_CONTENT = 104,
    PERMIT_APPLY_CONTENT = 105,
    REPLY_INVITE_CONTENT = 106,
    KICK_OUT_CONTENT = 107,
    CANCEL_APPLY_CONTENT = 108,
    CANCEL_INVITE_CONTENT = 109,
    LEAVE_CONTENT = 110,
    FINISH_CONTENT = 111,
    JOIN_DIRECT_CONTENT = 112,
    JOIN_GROUP_CONTENT = 113,
    PERMIT_GROUP_CONTENT = 114,
    CANCEL_GROUP_CONTENT = 115,
    LEAVE_GROUP_CONTENT = 116,
    P2P_GROUP_CHANGE_CONTENT = 117,
    GROUP_CHANGE_CONTENT = 118,
    UNRECOGNIZED = -1
}
export declare enum LinkMessageType {
    TYPE_LINKER_UNKNOWN = 0,
    TYPE_LINKER_CREATE = 1,
    TYPE_LINKER_CLOSE = 2,
    TYPE_LINKER_INVITE = 3,
    TYPE_LINKER_APPLY = 4,
    TYPE_LINKER_REPLY = 5,
    TYPE_LINKER_ENTER = 6,
    TYPE_LINKER_LEAVE = 7,
    TYPE_LINKER_PERMIT = 8,
    TYPE_LINKER_CANCEL_INVITE = 9,
    TYPE_LINKER_WAITING_LIST_CHANGE = 10,
    TYPE_LINKER_LINKED_LIST_CHANGE = 11,
    TYPE_LINKER_UPDATE_USER = 12,
    TYPE_LINKER_KICK_OUT = 13,
    TYPE_LINKER_CANCEL_APPLY = 14,
    TYPE_LINKER_MUTE = 15,
    TYPE_LINKER_MATCH = 16,
    TYPE_LINKER_UPDATE_USER_SETTING = 17,
    TYPE_LINKER_MIC_IDX_UPDATE = 18,
    TYPE_LINKER_LEAVE_V2 = 19,
    TYPE_LINKER_WAITING_LIST_CHANGE_V2 = 20,
    TYPE_LINKER_LINKED_LIST_CHANGE_V2 = 21,
    TYPE_LINKER_COHOST_LIST_CHANGE = 22,
    TYPE_LINKER_MEDIA_CHANGE = 23,
    TYPE_LINKER_ACCEPT_NOTICE = 24,
    TYPE_LINKER_SYS_KICK_OUT = 101,
    TYPE_LINKMIC_USER_TOAST = 102,
    UNRECOGNIZED = -1
}
export declare enum MessageType {
    MESSAGE_TYPE_SUB_SUCCESS = 0,
    MESSAGE_TYPE_ANCHOR_REMINDER = 1,
    MESSAGE_TYPE_ENTER_ROOM_EXPIRE_SOON = 2,
    MESSAGE_TYPE_SUB_GOAL_CREATE_TO_ANCHOR = 3,
    MESSAGE_TYPE_SUB_GOAL_COMPLETE_TO_AUDIENCE = 4,
    MESSAGE_TYPE_SUB_GOAL_COMPLETE_TO_ANCHOR = 5,
    MESSAGE_TYPE_SUB_GIFT_TIK_TOK_2_USER_NOTICE = 6,
    MESSAGE_TYPE_SUB_GIFT_TIK_TOK_2_ANCHOR_NOTICE = 7,
    MESSAGE_TYPE_SUB_GIFT_T_RECEIVES_END_NOTICE = 8,
    MESSAGE_TYPE_SUB_GIFTS_END_SUCCEED_ROOM_MESSAGE = 9,
    MESSAGE_TYPE_SUB_GIFTS_END_SUCCEED_ANCHOR_NOTICE = 10,
    MESSAGE_TYPE_SUB_GIFT_LOW_VERSION_UPGRADE_NOTICE = 11,
    MESSAGE_TYPE_SUB_GIFT_USER_BUY_AU_TH_NOTICE = 12,
    MESSAGE_TYPE_SUB_COMMON_TEXT_NOTICE = 13,
    MESSAGE_TYPE_SUB_MODERATOR_PIN_PERK = 14,
    UNRECOGNIZED = -1
}
export declare enum Scene {
    SCENE_UNKNOWN = 0,
    SCENE_CO_HOST = 2,
    SCENE_MULTI_LIVE = 4,
    UNRECOGNIZED = -1
}
export declare enum RewardCondition {
    REWARD_CONDITION_SUBSCRIPTION = 0,
    REWARD_CONDITION_SUB_WAVE_CUSTOM = 1,
    UNRECOGNIZED = -1
}
export declare enum UserEmoteUploadSource {
    USER_EMOTE_UPLOAD_SOURCE_EMOTE_UPLOAD_SOURCE_ANCHOR = 0,
    USER_EMOTE_UPLOAD_SOURCE_EMOTE_UPLOAD_SOURCE_SUBSCRIBER = 1,
    USER_EMOTE_UPLOAD_SOURCE_EMOTE_UPLOAD_SOURCE_MODERATOR = 2,
    UNRECOGNIZED = -1
}
export declare enum EmoteScene {
    EMOTE_SCENE_SUBSCRIPTION = 0,
    EMOTE_SCENE_GAME = 1,
    UNRECOGNIZED = -1
}
export declare enum PunishTypeId {
    PUNISH_TYPE_IDUN_KNOWN = 0,
    PUNISH_TYPE_ID_BAN_LINK_MIC = 9,
    PUNISH_TYPE_ID_BAN_GAME_PARTNERSHIP = 25,
    PUNISH_TYPE_ID_REMOVE_GAME_PARTNERSHIP = 26,
    PUNISH_TYPE_ID_BANCO_HOST_LINK_MIC = 55,
    PUNISH_TYPE_ID_AUTHORITY_LIMIT_MATCH = 57,
    PUNISH_TYPE_ID_BAN_VOICE_CHAT = 59,
    PUNISH_TYPE_ID_BAN_LIVE_GOAL = 64,
    PUNISH_TYPE_ID_VIEWER_LIMIT = 70,
    UNRECOGNIZED = -1
}
export declare enum MultiplierType {
    MULTIPLIER_TYPE_UNSPECIFIED = 0,
    MULTIPLIER_TYPE_CRITICAL_STRIKE = 1,
    MULTIPLIER_TYPE_TOP_2 = 2,
    MULTIPLIER_TYPE_TOP_3 = 3,
    UNRECOGNIZED = -1
}
export declare enum LinkmicGiftExpressionStrategy {
    LINKMIC_GIFT_EXPRESSION_STRATEGY_CONTROL_V_1 = 0,
    LINKMIC_GIFT_EXPRESSION_STRATEGY_EXPERIMENT_V_1 = 1,
    LINKMIC_GIFT_EXPRESSION_STRATEGY_EXPERIMENT_V_2 = 2,
    UNRECOGNIZED = -1
}
export declare enum GiftMessageVersion {
    GIFT_MESSAGE_VERSION_0 = 0,
    GIFT_MESSAGE_VERSION_1 = 1,
    UNRECOGNIZED = -1
}
export declare enum TagType {
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_UNKNOWN = 0,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_USER_GRADE = 1,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_FANS_LEVEL = 2,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_WATCH_ME_DAYS_AGO = 3,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_CUSTOM = 4,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_TITLE_GIFT = 5,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_FIRST_JOINED_TEAM = 6,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_PAY_ACCOMPANY_DAYS = 7,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_SPONSOR_GIFT_LAST_ROOM = 8,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_MATCH_MVP_LAST_ROOM = 9,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_LARGE_AMOUNT_GIFT_LAST_ROOM = 10,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_COMMENT_LAST_ROOM = 11,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_RECENT_TITLED_GIFT = 12,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_MEET_ANNIVERSARY = 13,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_FANS_SLEEP = 14,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_NOT_SEND_HEART_ME = 15,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_NOT_JOIN_TEAM = 16,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_FIRST_WATCH_LIVE = 17,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_RECENT_COMMENT = 18,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_RECENT_GIFT_TIMES = 19,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_RECENT_WATCH_LIVE_DURATION = 20,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_RECENT_GIFT = 21,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_RECENT_LIVE_CONTRIBUTION_TOP = 22,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_JUST_UPGRADE = 28,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_FAN_TOTAL_WATCH_DURATION = 29,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_FAN_TOTAL_COMMENT_NUM = 30,
    TAG_TYPE_CREATOR_CR_M_TAG_TYPE_FAN_TOTAL_GIFT_SENT_NUM = 31,
    UNRECOGNIZED = -1
}
export declare enum TopicActionType {
    TOPIC_ACTION_TYPE_UNKNOWN = 0,
    TOPIC_ACTION_TYPE_FOLLOW = 1,
    UNRECOGNIZED = -1
}
export declare enum UserMetricsType {
    USER_METRICS_TYPE_UNKNOWN = 0,
    USER_METRICS_TYPE_GRADE = 1,
    USER_METRICS_TYPE_SUBSCRIBE = 2,
    USER_METRICS_TYPE_FOLLOW = 3,
    USER_METRICS_TYPE_FANS_CLUB = 4,
    USER_METRICS_TYPE_TOP_VIEWER = 5,
    USER_METRICS_TYPE_GIFT = 6,
    UNRECOGNIZED = -1
}
export declare enum GiftMessageIgnoreConfig {
    GIFT_MESSAGE_IGNORE_CONFIG_NOT_IGNORE = 0,
    GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_TRAY = 1,
    GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_PS_M = 2,
    GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_TRAY_AND_PS_M = 3,
    UNRECOGNIZED = -1
}
export declare enum HorizontalOnclickTriggerType {
    HORIZONTAL_ONCLICK_TRIGGER_TYPE_ONCLICK_TRIGGER_TYPE_UNKNOWN = 0,
    HORIZONTAL_ONCLICK_TRIGGER_TYPE_ONCLICK_TRIGGER_TYPE_LEFT = 1,
    HORIZONTAL_ONCLICK_TRIGGER_TYPE_ONCLICK_TRIGGER_TYPE_MIDDLE = 2,
    HORIZONTAL_ONCLICK_TRIGGER_TYPE_ONCLICK_TRIGGER_TYPE_RIGHT = 3,
    HORIZONTAL_ONCLICK_TRIGGER_TYPE_ONCLICK_TRIGGER_TYPE_ALL_AREA = 4,
    UNRECOGNIZED = -1
}
export declare enum ShowType {
    SHOW_TYPE_NORMAL = 0,
    SHOW_TYPE_FADE_IN_OUT = 1,
    UNRECOGNIZED = -1
}
export declare enum RenderType {
    RENDER_TYPE_NATIVE = 0,
    RENDER_TYPE_HYBRID = 1,
    RENDER_TYPE_ALPHA = 2,
    UNRECOGNIZED = -1
}
export declare enum IconDisplayType {
    ICON_DISPLAY_TYPE_IMAGE = 0,
    ICON_DISPLAY_TYPE_BADGE = 1,
    UNRECOGNIZED = -1
}
export declare enum CommentTag {
    COMMENT_TAG_NORMAL = 0,
    COMMENT_TAG_CANDIDATE = 1,
    COMMENT_TAG_OVERAGE = 2,
    UNRECOGNIZED = -1
}
export declare enum PerceptionDialogIconType {
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_NONE = 0,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_WARNING = 1,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_LINK_MIC = 2,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_GUEST_LINK_MIC = 3,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_LIVE = 4,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_TREASURE_BOX = 5,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_MUTE = 6,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_GAMEPAD_ACCESS_REVOKED = 7,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_BAN_REPORT_LIVE_SINGLE_ROOM = 8,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_BAN_REPORT_LIVE_ALL_ROOM = 9,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_BAN_REPORT_LIVE_GREEN_SCREEN = 10,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_GIFT = 11,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_APPEAL_SUCCESS = 12,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_MATCH = 13,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_LIVE_GOAL = 14,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_SUBSCRIPTION = 15,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_STAR_COMMENT = 16,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_RANKING = 17,
    PERCEPTION_DIALOG_ICON_TYPE_ICON_TYPE_COMMON = 18,
    UNRECOGNIZED = -1
}
export declare enum GoalMessageSource {
    GOAL_MESSAGE_SOURCE_UNKNOWN = 0,
    GOAL_MESSAGE_SOURCE_COMMIT = 1,
    GOAL_MESSAGE_SOURCE_PROGRESS_UPDATE = 2,
    GOAL_MESSAGE_SOURCE_PIN = 3,
    GOAL_MESSAGE_SOURCE_UNPIN = 4,
    GOAL_MESSAGE_SOURCE_REVIEW_CALLBACK = 5,
    GOAL_MESSAGE_SOURCE_SUSPEND = 6,
    GOAL_MESSAGE_SOURCE_CHALLENGE_PROMPT = 7,
    UNRECOGNIZED = -1
}
export declare enum ExhibitionType {
    EXHIBITION_TYPE_DEFAULT = 0,
    EXHIBITION_TYPE_FOLD = 1,
    EXHIBITION_TYPE_PUBLIC_SCREEN = 2,
    UNRECOGNIZED = -1
}
export declare enum GiftSource {
    GIFT_SOURCE_UNKNOWN = 0,
    GIFT_SOURCE_PLATFORM = 1,
    GIFT_SOURCE_USER_BUY_RANDOM = 2,
    GIFT_SOURCE_USER_BUY_SPECIFIC = 3,
    UNRECOGNIZED = -1
}
export declare enum MessageDisplayStyle {
    MESSAGE_DISPLAY_STYLE_DEFAULT = 0,
    MESSAGE_DISPLAY_STYLE_POPUP = 1,
    UNRECOGNIZED = -1
}
export declare enum ProfitRankType {
    PROFIT_RANK_TYPE_TYPE_HOURLY_RANK = 0,
    PROFIT_RANK_TYPE_TYPE_WEEKLY_RANK = 1,
    PROFIT_RANK_TYPE_TYPE_HOURLY_STAR_RANK = 2,
    PROFIT_RANK_TYPE_TYPE_WEEKLY_RISING_RANK_ACTIVITY = 3,
    PROFIT_RANK_TYPE_TYPE_WEEKLY_RISING_RANK = 4,
    PROFIT_RANK_TYPE_TYPE_WEEKLY_ROOKIE = 5,
    PROFIT_RANK_TYPE_TYPE_E_COMMERCE_WEEKLY = 6,
    PROFIT_RANK_TYPE_TYPE_E_COMMERCE_DAILY = 7,
    PROFIT_RANK_TYPE_TYPE_DAILY_RANK = 8,
    PROFIT_RANK_TYPE_TYPE_FIRST_GIFT_RANK = 9,
    PROFIT_RANK_TYPE_TYPE_GAME_RANK = 10,
    PROFIT_RANK_TYPE_TYPE_DAILY_GAME = 11,
    PROFIT_RANK_TYPE_TYPE_HALL_OF_FAME_RANK = 12,
    PROFIT_RANK_TYPE_TYPE_RANK_LEAGUE = 13,
    PROFIT_RANK_TYPE_DAILY_ROOKIE = 14,
    PROFIT_RANK_TYPE_TYPE_TEAM_RANK = 15,
    PROFIT_RANK_TYPE_TYPE_CLASS_RANK = 16,
    PROFIT_RANK_TYPE_TYPE_DAILY_GAME_PUB_G = 20,
    PROFIT_RANK_TYPE_TYPE_DAILY_GAME_MLB_B = 21,
    PROFIT_RANK_TYPE_TYPE_DAILY_GAME_FREE_FIRE = 22,
    PROFIT_RANK_TYPE_TYPE_WEEKLY_GAME_SUBCATEGORY_ONE = 23,
    PROFIT_RANK_TYPE_TYPE_WEEKLY_GAME_SUBCATEGORY_TWO = 24,
    PROFIT_RANK_TYPE_TYPE_WEEKLY_GAME_SUBCATEGORY_THREE = 25,
    UNRECOGNIZED = -1
}
export declare enum UnionAnimationInfoType {
    UNION_ANIMATION_INFO_TYPE_NO_UNION_ANIMATION = 0,
    UNION_ANIMATION_INFO_TYPE_LOOP = 1,
    UNION_ANIMATION_INFO_TYPE_LOCK = 2,
    UNRECOGNIZED = -1
}
export declare enum DisplayStyle {
    DISPLAY_STYLE_NORMAL = 0,
    DISPLAY_STYLE_STAY = 1,
    DISPLAY_STYLE_CHAT = 2,
    UNRECOGNIZED = -1
}
export declare enum HitABStatus {
    HIT_A_B_STATUS_HIT_AB_STATUS_NO_HIT = 0,
    HIT_A_B_STATUS_HIT_AB_STATUS_ENTER_FROM_EXTERNAL_LINK_NEW_TEXT = 1,
    HIT_A_B_STATUS_HIT_AB_STATUS_ENTER_FROM_RE_POST_NEW_TEXT = 2,
    UNRECOGNIZED = -1
}
export declare enum PollKind {
    POLL_KIND_NORMAL = 0,
    POLL_KIND_GIFT = 1,
    POLL_KIND_CUSTOMIZABLE = 2,
    POLL_KIND_CUSTOMIZABLE_GIFT = 3,
    POLL_KIND_QUICK_GIFT = 4,
    POLL_KIND_EMOTE = 5,
    UNRECOGNIZED = -1
}
export declare enum PollTemplateStatus {
    POLL_TEMPLATE_STATUS_TO_BE_REVIEWED = 0,
    POLL_TEMPLATE_STATUS_UNDER_REVIEW = 1,
    POLL_TEMPLATE_STATUS_REVIEWED = 2,
    POLL_TEMPLATE_STATUS_REFUSED = 3,
    UNRECOGNIZED = -1
}
export declare enum PollAppealStatus {
    POLL_APPEAL_STATUS_UNKNOWN = 0,
    POLL_APPEAL_STATUS_PASS = 1,
    POLL_APPEAL_STATUS_FAIL = 2,
    UNRECOGNIZED = -1
}
export declare enum RankTestMessageScene {
    RANK_TEST_MESSAGE_SCENE_UNKNOWN = 0,
    RANK_TEST_MESSAGE_SCENE_ONLINE_AUDIENCE_TOP_N_UPDATE_PUBLIC_SCREEN = 1,
    UNRECOGNIZED = -1
}
export declare enum TriggerReason {
    TRIGGER_REASON_UNKNOWN = 0,
    TRIGGER_REASON_SCORE_UPDATE = 1,
    TRIGGER_REASON_BATTLE_END = 2,
    TRIGGER_REASON_OPT_OUT_UPDATE = 3,
    TRIGGER_REASON_KEEP_ALIVE = 4,
    UNRECOGNIZED = -1
}
export declare enum Reason {
    REASON_TIME_UP = 0,
    REASON_CUT_SHORT = 1,
    UNRECOGNIZED = -1
}
export declare enum BattleTaskMessageType {
    BATTLE_TASK_MESSAGE_TYPE_START = 0,
    BATTLE_TASK_MESSAGE_TYPE_TASK_UPDATE = 1,
    BATTLE_TASK_MESSAGE_TYPE_TASK_SETTLE = 2,
    BATTLE_TASK_MESSAGE_TYPE_REWARD_SETTLE = 3,
    UNRECOGNIZED = -1
}
export declare enum RewardStatus {
    REWARD_STATUS_SUCCEED = 0,
    REWARD_STATUS_FAILED = 1,
    UNRECOGNIZED = -1
}
export declare enum BattleAction {
    BATTLE_ACTION_UNKNOWN = 0,
    BATTLE_ACTION_INVITE = 1,
    BATTLE_ACTION_REJECT = 2,
    BATTLE_ACTION_CANCEL = 3,
    BATTLE_ACTION_OPEN = 4,
    BATTLE_ACTION_FINISH = 5,
    BATTLE_ACTION_CUT_SHORT = 6,
    BATTLE_ACTION_ACCEPT = 7,
    BATTLE_ACTION_QUIT_APPLY = 8,
    BATTLE_ACTION_DECLINE_QUIT = 9,
    BATTLE_ACTION_DECLINE_OFF_QUIT = 10,
    BATTLE_ACTION_LEAVE_LINK_MIC = 11,
    UNRECOGNIZED = -1
}
export declare enum Result {
    RESULT_WIN = 0,
    RESULT_LOSE = 1,
    RESULT_DRAW = 2,
    UNRECOGNIZED = -1
}
export declare enum GiftPermissionType {
    GIFT_PERMISSION_TYPE_UNKNOWN_TYPE = 0,
    GIFT_PERMISSION_TYPE_NO_GIFT_PERMISSION = 1,
    GIFT_PERMISSION_TYPE_ANCHOR_CLOSE = 2,
    GIFT_PERMISSION_TYPE_HAS_GIFT_PERMISSION = 3,
    GIFT_PERMISSION_TYPE_ANCHOR_BANNED = 4,
    UNRECOGNIZED = -1
}
export declare enum BattleABTestType {
    BATTLE_A_B_TEST_TYPE_UNKNOWN_AB_TEST_TYPE = 0,
    BATTLE_A_B_TEST_TYPE_MEANWHILE_INVITE = 1,
    BATTLE_A_B_TEST_TYPE_SPECIFIED_GIFT = 2,
    BATTLE_A_B_TEST_TYPE_RT_C_MESSAGE_CHANNEL = 3,
    BATTLE_A_B_TEST_TYPE_CONNECTION_TIME_OUT = 4,
    BATTLE_A_B_TEST_TYPE_REMATCH_SKIP_TEAMMATE = 5,
    BATTLE_A_B_TEST_TYPE_OPT_INVITEE_4048 = 6,
    BATTLE_A_B_TEST_TYPE_BATTLE_AB_TEST_TYPE_TIME_CALIBRATE = 7,
    UNRECOGNIZED = -1
}
export declare enum PlayScene {
    PLAY_SCENE_UNKNOWN = 0,
    PLAY_SCENE_COUNTDOWN_FOR_ALL = 1,
    PLAY_SCENE_COUNTDOWN_FOR_SINGLE = 2,
    PLAY_SCENE_LIVE_SHOW = 3,
    PLAY_SCENE_AIG_C = 4,
    PLAY_SCENE_KARAOKE = 5,
    PLAY_SCENE_DRAW_GUESS = 6,
    PLAY_SCENE_ENLARGE_GRID = 7,
    PLAY_SCENE_GIFT_PRIORITY_LINK = 8,
    PLAY_SCENE_GIFT_THRESHOLD_LINK = 9,
    PLAY_SCENE_NOTICE_BOARD = 10,
    PLAY_SCENE_PLAY_BOOK = 11,
    PLAY_SCENE_GUEST_SHOWDOWN = 12,
    UNRECOGNIZED = -1
}
export declare enum LinkType {
    LINK_TYPE_TYPE_UNKNOWN = 0,
    LINK_TYPE_TYPE_VIDEO = 1,
    LINK_TYPE_TYPE_AUDIO = 2,
    LINK_TYPE_TYPE_VIRTUAL = 3,
    UNRECOGNIZED = -1
}
export declare enum LinkSilenceStatus {
    LINK_SILENCE_STATUS_STATUS_UN_SILENCE = 0,
    LINK_SILENCE_STATUS_STATUS_SILENCE_BY_SELF = 1,
    LINK_SILENCE_STATUS_STATUS_SILENCE_BY_OWNER = 2,
    UNRECOGNIZED = -1
}
export declare enum LinkmicRoleType {
    LINKMIC_ROLE_TYPE_ROLE_TYPE_UNKOWN = 0,
    LINKMIC_ROLE_TYPE_LEADER = 1,
    LINKMIC_ROLE_TYPE_PLAYER = 2,
    LINKMIC_ROLE_TYPE_INVITEE = 3,
    UNRECOGNIZED = -1
}
export declare enum LinkRoleType {
    LINK_ROLE_TYPE_TYPE_ROLE_TYPE_UNKOWN = 0,
    LINK_ROLE_TYPE_TYPE_LEADER = 1,
    LINK_ROLE_TYPE_TYPE_PLAYER = 2,
    LINK_ROLE_TYPE_TYPE_INVITEE = 3,
    LINK_ROLE_TYPE_TYPE_APPLIER = 4,
    UNRECOGNIZED = -1
}
export declare enum MuteStatus {
    MUTE_STATUS_MUTE = 0,
    MUTE_STATUS_UN_MUTE = 1,
    UNRECOGNIZED = -1
}
export declare enum GuestMicCameraManageOp {
    GUEST_MIC_CAMERA_MANAGE_OP_OPEN_MIC = 0,
    GUEST_MIC_CAMERA_MANAGE_OP_OPEN_CAMERA = 1,
    GUEST_MIC_CAMERA_MANAGE_OP_CLOSE_MIC = 2,
    GUEST_MIC_CAMERA_MANAGE_OP_CLOSE_CAMERA = 3,
    GUEST_MIC_CAMERA_MANAGE_OP_CLOSE_MIC_PUNISH = 4,
    UNRECOGNIZED = -1
}
export declare enum GuestMicCameraChangeScene {
    GUEST_MIC_CAMERA_CHANGE_SCENE_CHANGE_SCENE_UNKNOWN = 0,
    GUEST_MIC_CAMERA_CHANGE_SCENE_LIVE_SHOW_BY_ANCHOR_AUTO = 1,
    GUEST_MIC_CAMERA_CHANGE_SCENE_LIVE_SHOW_BY_SERVER_NORMAL = 2,
    GUEST_MIC_CAMERA_CHANGE_SCENE_LIVE_SHOW_BY_SHOW_END = 3,
    UNRECOGNIZED = -1
}
export declare enum LinkMicUserAdminType {
    LINK_MIC_USER_ADMIN_TYPE_UNDEFINED_TYPE = 0,
    LINK_MIC_USER_ADMIN_TYPE_MANAGER_TYPE = 1,
    LINK_MIC_USER_ADMIN_TYPE_HOST_TYPE = 2,
    UNRECOGNIZED = -1
}
export declare enum LinkmicMultiLiveEnum {
    LINKMIC_MULTI_LIVE_ENUM_DEFAULT = 0,
    LINKMIC_MULTI_LIVE_ENUM_ANCHOR_USE_NEW_LAYOUT = 1,
    UNRECOGNIZED = -1
}
export declare enum PollEndType {
    POLL_END_TYPE_POLL_END_BY_TIME = 0,
    POLL_END_TYPE_POLL_END_BY_OWNER = 1,
    POLL_END_TYPE_POLL_END_BY_OTHER = 2,
    POLL_END_TYPE_POLL_END_BY_ADMIN = 3,
    UNRECOGNIZED = -1
}
export declare enum CohostABTestType {
    COHOST_A_B_TEST_TYPE_COHOST_AB_TEST_TYPE_UNKNOWN = 0,
    COHOST_A_B_TEST_TYPE_COHOST_AB_TEST_TYPE_LINK_TIME_OUT_STRATEGY = 1,
    COHOST_A_B_TEST_TYPE_COHOST_AB_TEST_TYPE_COHOST_RESERVATION = 2,
    COHOST_A_B_TEST_TYPE_COHOST_AB_TEST_TYPE_QUICK_PAIR_NEW_ARCH_SWITCH = 3,
    COHOST_A_B_TEST_TYPE_COHOST_AB_TEST_TYPE_COHOST_INVITATION_TEXT = 4,
    UNRECOGNIZED = -1
}
export declare enum OptPairStatus {
    OPT_PAIR_STATUS_UNKNOWN = 0,
    OPT_PAIR_STATUS_OFFLINE = 1,
    OPT_PAIR_STATUS_FINISHED = 2,
    UNRECOGNIZED = -1
}
export declare enum ContentPositionType {
    CONTENT_POSITION_TYPE_UNKNOWN = 0,
    CONTENT_POSITION_TYPE_STREAM = 1,
    CONTENT_POSITION_TYPE_LIVE_STUDIO_STREAM_PORTRAIT = 2,
    CONTENT_POSITION_TYPE_LIVE_STUDIO_STREAM_LANDSCAPE = 3,
    UNRECOGNIZED = -1
}
export declare enum MultiGuestOutsideRoomInviteSource {
    MULTI_GUEST_OUTSIDE_ROOM_INVITE_SOURCE_OUTSIDE_ROOM_INVITE_SOURCE_UNKNOWN = 0,
    MULTI_GUEST_OUTSIDE_ROOM_INVITE_SOURCE_OUTSIDE_ROOM_INVITE_SOURCE_PANEL = 1,
    MULTI_GUEST_OUTSIDE_ROOM_INVITE_SOURCE_OUTSIDE_ROOM_INVITE_SOURCE_CAPSULE = 2,
    MULTI_GUEST_OUTSIDE_ROOM_INVITE_SOURCE_OUTSIDE_ROOM_INVITE_SOURCE_EMPTY_POSITION = 3,
    UNRECOGNIZED = -1
}
export declare enum LinkUserType {
    LINK_USER_TYPE_DEFAULT = 0,
    LINK_USER_TYPE_KARAOKE = 1,
    UNRECOGNIZED = -1
}
export declare enum ContentInviteSource {
    CONTENT_INVITE_SOURCE_INVITE_SOURCE_UNKNOWN = 0,
    CONTENT_INVITE_SOURCE_INVITE_SOURCE_PANEL_GO_LIVE = 1,
    CONTENT_INVITE_SOURCE_INVITE_SOURCE_MUTUAL_NOTICE = 2,
    CONTENT_INVITE_SOURCE_INVITE_SOURCE_USER_PROFILE = 3,
    CONTENT_INVITE_SOURCE_INVITE_SOURCE_RESERVE = 4,
    UNRECOGNIZED = -1
}
export declare enum LinkmicShareRevenueSetting {
    LINKMIC_SHARE_REVENUE_SETTING_LINK_MIC_SHARE_REVENUE_NOT_SET = 0,
    LINKMIC_SHARE_REVENUE_SETTING_LINK_MIC_SHARE_REVENUE_OPEN = 1,
    LINKMIC_SHARE_REVENUE_SETTING_LINK_MIC_SHARE_REVENUE_CLOSE = 2,
    UNRECOGNIZED = -1
}
export declare enum PosIdentityType {
    POS_IDENTITY_TYPE_IDENTITY_EMPTY_SLOT = 0,
    POS_IDENTITY_TYPE_IDENTITY_RT_C_USER_ID = 1,
    POS_IDENTITY_TYPE_IDENTITY_RT_C_STREAM_ID = 2,
    POS_IDENTITY_TYPE_IDENTITY_LIVE_USER_ID = 3,
    UNRECOGNIZED = -1
}
export declare enum JoinType {
    JOIN_TYPE_UNKNOWN = 0,
    JOIN_TYPE_CHANNEL_APPLY = 1,
    JOIN_TYPE_CHANNEL_INVITE = 2,
    JOIN_TYPE_GROUP_APPLY = 100,
    JOIN_TYPE_GROUP_APPLY_FOLLOW = 101,
    JOIN_TYPE_GROUP_INVITE = 102,
    JOIN_TYPE_GROUP_INVITE_FOLLOW = 103,
    JOIN_TYPE_GROUP_OWNER_JOIN = 104,
    UNRECOGNIZED = -1
}
export declare enum CohostLayoutMode {
    COHOST_LAYOUT_MODE_NORMAL = 0,
    COHOST_LAYOUT_MODE_SCREEN_SHARE = 1,
    UNRECOGNIZED = -1
}
export declare enum TagClassification {
    TAG_CLASSIFICATION_UNKNOWN = 0,
    TAG_CLASSIFICATION_COHOST_HISTORY = 1,
    TAG_CLASSIFICATION_FIRST_DEGREE_RELATION = 2,
    TAG_CLASSIFICATION_SECOND_DEGREE_RELATION = 3,
    TAG_CLASSIFICATION_RANK = 4,
    TAG_CLASSIFICATION_SIMILAR_INTERESTS = 5,
    UNRECOGNIZED = -1
}
export declare enum SourceType {
    SOURCE_TYPE_UNKNOWN = 0,
    SOURCE_TYPE_FRIEND_LIST = 1,
    SOURCE_TYPE_RECOMMEND_LIST = 2,
    SOURCE_TYPE_RECENT = 3,
    SOURCE_TYPE_OTHER_FOLLOW = 4,
    SOURCE_TYPE_QUICK_PAIR = 5,
    SOURCE_TYPE_ACTIVITY = 6,
    SOURCE_TYPE_QUICK_RECOMMEND = 7,
    SOURCE_TYPE_OFFICIAL_CHANNEL = 8,
    SOURCE_TYPE_BEST_TEAMMATE = 9,
    SOURCE_TYPE_RESERVATION = 10,
    SOURCE_TYPE_PAIRING = 11,
    SOURCE_TYPE_PAIRING_ON_RESERVATION = 12,
    SOURCE_TYPE_TOPIC_QUICK_PAIR = 13,
    SOURCE_TYPE_TOPIC_QUICK_RECOMMEND = 14,
    SOURCE_TYPE_ONLINE_FRIEND_CAPSULE = 15,
    SOURCE_TYPE_WEEKLY_RANK = 20,
    SOURCE_TYPE_HOURLY_RANK = 21,
    SOURCE_TYPE_WEEKLY_RISING = 23,
    SOURCE_TYPE_WEEKLY_ROOKIE = 24,
    SOURCE_TYPE_CONNECTION_LIST = 25,
    SOURCE_TYPE_DAILY_RANK = 26,
    SOURCE_TYPE_DAILY_RANK_HALL_OF_FAME = 27,
    SOURCE_TYPE_RESERVATION_BUBBLE = 28,
    SOURCE_TYPE_PAIRING_BUBBLE = 29,
    SOURCE_TYPE_LEAGUE_PHASE_ONE = 30,
    SOURCE_TYPE_LEAGUE_PHASE_TWO = 31,
    SOURCE_TYPE_LEAGUE_PHASE_THREE = 32,
    SOURCE_TYPE_DAILY_ROOKIE = 33,
    SOURCE_TYPE_MAY_KNOW_LIST = 34,
    SOURCE_TYPE_BANNER = 35,
    SOURCE_TYPE_FANS_TEAM_RANK = 36,
    SOURCE_TYPE_SEARCH = 37,
    SOURCE_TYPE_E_OY_RANK_LIST = 38,
    SOURCE_TYPE_LEAGUE_CAMPAIGN_RANK = 39,
    SOURCE_TYPE_CREATOR_CLASS_RANK = 40,
    SOURCE_TYPE_HISTORY = 41,
    SOURCE_TYPE_QUICK_RECOMMEND_DURING_COHOST = 43,
    UNRECOGNIZED = -1
}
export declare enum BattleType {
    BATTLE_TYPE_UNKNOWN_BATTLE_TYPE = 0,
    BATTLE_TYPE_NORMAL_BATTLE = 1,
    BATTLE_TYPE_TEAM_BATTLE = 2,
    BATTLE_TYPE_INDIVIDUAL_BATTLE = 3,
    BATTLE_TYPE_1_V_N = 4,
    BATTLE_TYPE_TAKE_THE_STAGE = 51,
    BATTLE_TYPE_GROUP_SHOW = 52,
    UNRECOGNIZED = -1
}
export declare enum BattleInviteType {
    BATTLE_INVITE_TYPE_NORMAL = 0,
    BATTLE_INVITE_TYPE_AGAIN = 1,
    UNRECOGNIZED = -1
}
/** @Common */
export interface CommonMessageData {
    method: string;
    msgId: string;
    roomId: string;
    createTime: string;
    monitor: number;
    isShowMsg: boolean;
    describe: string;
    displayText: Text | undefined;
    foldType: string;
    anchorFoldType: string;
    priorityScore: string;
    logId: string;
    msgProcessFilterK: string;
    msgProcessFilterV: string;
    fromIdc: string;
    toIdc: string;
    filterMsgTagsList: string[];
    sei: CommonMessageData_LiveMessageSEI | undefined;
    dependRootId: CommonMessageData_LiveMessageID | undefined;
    dependId: CommonMessageData_LiveMessageID | undefined;
    anchorPriorityScore: string;
    roomMessageHeatLevel: string;
    foldTypeForWeb: string;
    anchorFoldTypeForWeb: string;
    clientSendTime: string;
    /** Enum */
    dispatchStrategy: CommonMessageData_IMDispatchStrategy;
}
export declare enum CommonMessageData_IMDispatchStrategy {
    IM_DISPATCH_STRATEGY_DEFAULT = 0,
    IM_DISPATCH_STRATEGY_BYPASS_DISPATCH_QUEUE = 1,
    UNRECOGNIZED = -1
}
export interface CommonMessageData_LiveMessageSEI {
    uniqueId: CommonMessageData_LiveMessageID | undefined;
    timestamp: string;
}
export interface CommonMessageData_LiveMessageID {
    primaryId: string;
    messageScene: string;
}
/** @Text */
export interface Text {
    displayType: string;
    defaultPattern: string;
    defaultFormat: Text_TextFormat | undefined;
    piecesList: Text_TextPiece[];
}
export declare enum Text_ShowType {
    SHOW_TYPE_NORMAL = 0,
    SHOW_TYPE_FADE_IN_OUT = 1,
    UNRECOGNIZED = -1
}
export interface Text_TextPiece {
    type: number;
    format: Text_TextFormat | undefined;
    stringValue: string;
    userValue?: Text_TextPieceUser | undefined;
    giftValue?: Text_TextPieceGift | undefined;
    patternRefValue: Text_TextPiecePatternRef | undefined;
}
export interface Text_TextFormat {
    color: string;
    bold: boolean;
    italic: boolean;
    weight: number;
    italicAngle: number;
    fontSize: number;
    useHeighLightColor: boolean;
    useRemoteClor: boolean;
}
export interface Text_TextPieceGift {
    giftId: number;
    nameRef: Text_PatternRef | undefined;
    /** Enum */
    showType: Text_ShowType;
    colorId: string;
}
export interface Text_TextPiecePatternRef {
    key: string;
    defaultPattern: string;
}
export interface Text_TextPieceUser {
    user: User | undefined;
    withColon: boolean;
}
export interface Text_PatternRef {
    key: string;
    defaultPattern: string;
}
/** @Image */
export interface Image {
    url: string[];
    mUri: string;
    height: number;
    width: number;
    avgColor: string;
    imageType: number;
    schema: string;
    content: Image_Content | undefined;
    isAnimated: boolean;
}
export interface Image_Content {
    name: string;
    fontColor: string;
    level: string;
}
/** @Badge */
export interface BadgeStruct {
    /** Enum */
    badgeDisplayType: BadgeStruct_BadgeDisplayType;
    badgePriorityType: BadgeStruct_BadgePriorityType;
    badgeScene: BadgeStruct_BadgeSceneType;
    position: BadgeStruct_Position;
    displayStatus: BadgeStruct_DisplayStatus;
    greyedByClient: string;
    exhibitionType: BadgeStruct_BadgeExhibitionType;
    schemaUrl: string;
    display: boolean;
    logExtra: PrivilegeLogExtra | undefined;
    image?: BadgeStruct_ImageBadge | undefined;
    text?: BadgeStruct_TextBadge | undefined;
    str?: BadgeStruct_StringBadge | undefined;
    combine?: BadgeStruct_CombineBadge | undefined;
    isCustomized: boolean;
}
export declare enum BadgeStruct_BadgeDisplayType {
    BADGEDISPLAYTYPE_UNKNOWN = 0,
    BADGEDISPLAYTYPE_IMAGE = 1,
    BADGEDISPLAYTYPE_TEXT = 2,
    BADGEDISPLAYTYPE_STRING = 3,
    BADGEDISPLAYTYPE_COMBINE = 4,
    UNRECOGNIZED = -1
}
export declare enum BadgeStruct_BadgePriorityType {
    BADGE_PRIORITY_TYPE_UNKNOWN = 0,
    BADGE_PRIORITY_TYPE_STRONG_RELATION = 10,
    BADGE_PRIORITY_TYPE_PLATFORM = 20,
    BADGE_PRIORITY_TYPE_RELATION = 30,
    BADGE_PRIORITY_TYPE_ACTIVITY = 40,
    BADGE_PRIORITY_TYPE_RANK_LIST = 50,
    UNRECOGNIZED = -1
}
export declare enum BadgeStruct_BadgeSceneType {
    BADGE_SCENE_TYPE_UNKNOWN = 0,
    BADGE_SCENE_TYPE_ADMIN = 1,
    BADGE_SCENE_TYPE_FIRST_RECHARGE = 2,
    BADGE_SCENE_TYPE_FRIENDS = 3,
    BADGE_SCENE_TYPE_SUBSCRIBER = 4,
    BADGE_SCENE_TYPE_ACTIVITY = 5,
    BADGE_SCENE_TYPE_RANK_LIST = 6,
    BADGE_SCENE_TYPE_NEW_SUBSCRIBER = 7,
    BADGE_SCENE_TYPE_USER_GRADE = 8,
    BADGE_SCENE_TYPE_STATE_CONTROLLED_MEDIA = 9,
    BADGE_SCENE_TYPE_FANS = 10,
    BADGE_SCENE_TYPE_LIVE_PRO = 11,
    BADGE_SCENE_TYPE_ANCHOR = 12,
    UNRECOGNIZED = -1
}
export declare enum BadgeStruct_DisplayStatus {
    DISPLAY_STATUS_NORMAL = 0,
    DISPLAY_STATUS_SHADOW = 1,
    UNRECOGNIZED = -1
}
export declare enum BadgeStruct_BadgeExhibitionType {
    BADGE_EXHIBITION_TYPE_BADGE = 0,
    BADGE_EXHIBITION_TYPE_IDENTITY_LABEL = 1,
    UNRECOGNIZED = -1
}
export declare enum BadgeStruct_Position {
    POSITIONUNKNOWN = 0,
    POSITIONLEFT = 1,
    POSITIONRIGHT = 2,
    UNRECOGNIZED = -1
}
export declare enum BadgeStruct_HorizontalPaddingRule {
    HORIZONTAL_PADDING_RULE_USE_MIDDLE_AND_WIDTH = 0,
    HORIZONTAL_PADDING_RULE_USE_LEFT_AND_MIDDLE_AND_RIGHT = 1,
    UNRECOGNIZED = -1
}
export declare enum BadgeStruct_VerticalPaddingRule {
    VERTICAL_PADDING_RULE_USE_DEFAULT = 0,
    VERTICAL_PADDING_RULE_USE_TOP_AND_BOTTOM = 1,
    UNRECOGNIZED = -1
}
export interface BadgeStruct_CombineBadge {
    badgeDisplayType: number;
    icon: Image | undefined;
    text: BadgeStruct_TextBadge | undefined;
    str: string;
    padding: BadgeStruct_PaddingInfo | undefined;
    fontStyle: FontStyle | undefined;
    profileCardPanel: BadgeStruct_ProfileCardPanel | undefined;
    background: BadgeStruct_CombineBadgeBackground | undefined;
    backgroundDarkMode: BadgeStruct_CombineBadgeBackground | undefined;
    iconAutoMirrored: boolean;
    bgAutoMirrored: boolean;
    publicScreenShowStyle: number;
    personalCardShowStyle: number;
    rankListOnlineAudienceShowStyle: number;
    multiGuestShowStyle: number;
    arrowConfig: BadgeStruct_ArrowConfig | undefined;
    paddingNewFont: BadgeStruct_PaddingInfo | undefined;
}
export interface BadgeStruct_ArrowConfig {
    icon: Image | undefined;
}
export interface BadgeStruct_ProfileContent {
    useContent: boolean;
    iconList: BadgeStruct_IconConfig[];
    numberConfig: BadgeStruct_NumberConfig | undefined;
}
export interface BadgeStruct_ProjectionConfig {
    useProjection: boolean;
    icon: Image | undefined;
}
export interface BadgeStruct_NumberConfig {
    number: string;
    fontStyle: FontStyle | undefined;
    background: BadgeStruct_CombineBadgeBackground | undefined;
}
export interface BadgeStruct_ProfileCardPanel {
    useNewProfileCardStyle: boolean;
    /** BadgeTextPosition badgeTextPosition = 2; // Enum */
    projectionConfig: BadgeStruct_ProjectionConfig | undefined;
    profileContent: BadgeStruct_ProfileContent | undefined;
}
export interface BadgeStruct_CombineBadgeBackground {
    image: Image | undefined;
    backgroundColorCode: string;
    borderColorCode: string;
}
export interface BadgeStruct_ImageBadge {
    badgeDisplayType: BadgeStruct_BadgeDisplayType;
    image: Image | undefined;
}
export interface BadgeStruct_TextBadge {
    badgeDisplayType: BadgeStruct_BadgeDisplayType;
    key: string;
    defaultPattern: string;
    pieces: string[];
}
export interface BadgeStruct_IconConfig {
    icon: Image | undefined;
    background: BadgeStruct_CombineBadgeBackground | undefined;
}
export interface BadgeStruct_StringBadge {
    badgeDisplayType: BadgeStruct_BadgeDisplayType;
    str: string;
}
export interface BadgeStruct_PaddingInfo {
    useSpecific: boolean;
    middlePadding: number;
    badgeWidth: number;
    leftPadding: number;
    rightPadding: number;
    iconTopPadding: number;
    iconBottomPadding: number;
    horizontalPaddingRule: BadgeStruct_HorizontalPaddingRule;
    verticalPaddingRule: BadgeStruct_VerticalPaddingRule;
}
/** @Gift */
export interface Gift {
    giftImage: Image | undefined;
    describe: string;
    duration: number;
    id: string;
    forLinkMic: boolean;
    combo: boolean;
    giftType: number;
    diamondCount: number;
    isDisplayedOnPanel: boolean;
    primaryEffectId: string;
    giftLabelIcon: Image | undefined;
    giftName: string;
    icon: Image | undefined;
    goldEffect: string;
    previewImage: Image | undefined;
    giftPanelBanner: Gift_GiftPanelBanner | undefined;
    isBroadcastGift: boolean;
    isEffectBefview: boolean;
    isRandomGift: boolean;
    isBoxGift: boolean;
    canPutInGiftBox: boolean;
    giftBoxInfo: Gift_GiftBoxInfo | undefined;
}
export interface Gift_GiftPanelBanner {
    displayText: Text | undefined;
    leftIcon: Image | undefined;
    schemaUrl: string;
    bgColors: string[];
    bannerLynxUrl: string;
    bannerPriority: number;
    bannerLynxExtra: string;
    bgImage: Image | undefined;
}
export interface Gift_BatchGiftInfo {
    canBatchSend: boolean;
    availableCounts: string[];
}
export interface Gift_CrossScreenEffectInfo {
    singleActionEffectIds: {
        [key: string]: number;
    };
    actionEffectIds: {
        [key: string]: number;
    };
    reactionEffectIds: {
        [key: string]: number;
    };
}
export interface Gift_CrossScreenEffectInfo_SingleActionEffectIdsEntry {
    key: string;
    value: number;
}
export interface Gift_CrossScreenEffectInfo_ActionEffectIdsEntry {
    key: string;
    value: number;
}
export interface Gift_CrossScreenEffectInfo_ReactionEffectIdsEntry {
    key: string;
    value: number;
}
export interface Gift_GiftSponsorInfo {
    sponsorId: string;
    sponsorCount: string;
    currentCount: string;
    leftCountToSponsor: string;
    canSponsor: boolean;
}
export interface Gift_UGGiftStructInfo {
    isUgGift: boolean;
    ugPointsCost: string;
}
export interface Gift_GiftSkin {
    giftSkinId: string;
    giftSkinName: string;
    staticImage: Image | undefined;
    animatedImage: Image | undefined;
}
export interface Gift_GiftText {
    giftTextId: string;
    giftTextName: string;
}
export interface Gift_GiftSkinToGiftTextsInfo {
    giftSkinId: string;
    giftTextIds: string[];
}
export interface Gift_GiftBoxInfo {
    capacity: string;
    isPrimaryBox: boolean;
    schemeUrl: string;
}
/** @User */
export interface User {
    userId: string;
    nickname: string;
    bioDescription: string;
    profilePicture: Image | undefined;
    profilePictureMedium: Image | undefined;
    profilePictureLarge: Image | undefined;
    verified: boolean;
    status: number;
    createTime: string;
    modifyTime: string;
    secret: number;
    shareQrcodeUri: string;
    badgeImageList: Image[];
    followInfo: User_FollowInfo | undefined;
    userHonor: UserHonor | undefined;
    fansClub: FansClubMember | undefined;
    border: BorderInfo | undefined;
    specialId: string;
    avatarBorder: Image | undefined;
    medal: Image | undefined;
    userBadges: Image[];
    newUserBadges: Image[];
    topVipNo: number;
    userAttr: User_UserAttr | undefined;
    ownRoom: User_OwnRoom | undefined;
    payScore: string;
    fanTicketCount: string;
    anchorInfo: User_AnchorLevel | undefined;
    linkMicStats: LinkmicStatus;
    uniqueId: string;
    enableShowCommerceSale: boolean;
    withFusionShopEntry: boolean;
    payScores: string;
    anchorLevel: User_AnchorLevel | undefined;
    verifiedContent: string;
    authorInfo: Author | undefined;
    topFans: User[];
    secUid: string;
    userRole: number;
    rewardInfo: User_ActivityInfo | undefined;
    personalCard: Image | undefined;
    authenticationInfo: User_AuthenticationInfo | undefined;
    mediaBadgeImageList: Image[];
    commerceWebcastConfigIds: string[];
    borders: BorderInfo[];
    comboBadgeInfo: User_ComboBadgeInfo | undefined;
    subscribeInfo: User_SubscribeInfo | undefined;
    badges: BadgeStruct[];
    mintTypeLabel: string[];
    fansClubInfo: User_FansClubInfo | undefined;
    allowFindByContacts: boolean;
    allowOthersDownloadVideo: boolean;
    allowOthersDownloadWhenSharingVideo: boolean;
    allowShareShowProfile: boolean;
    allowShowInGossip: boolean;
    allowShowMyAction: boolean;
    allowStrangeComment: boolean;
    allowUnfollowerComment: boolean;
    allowUseLinkmic: boolean;
    avatarJpg: Image | undefined;
    backgroundImgUrl: string;
    blockStatus: number;
    commentRestrict: number;
    constellation: string;
    disableIchat: number;
    enableIchatImg: string;
    exp: number;
    foldStrangerChat: boolean;
    followStatus: string;
    ichatRestrictType: number;
    idStr: string;
    isFollower: boolean;
    isFollowing: boolean;
    needProfileGuide: boolean;
    pushCommentStatus: boolean;
    pushDigg: boolean;
    pushFollow: boolean;
    pushFriendAction: boolean;
    pushIchat: boolean;
    pushStatus: boolean;
    pushVideoPost: boolean;
    pushVideoRecommend: boolean;
    verifiedReason: string;
    enableCarManagementPermission: boolean;
    upcomingEventList: User_LiveEventInfo[];
    scmLabel: string;
    ecommerceEntrance: User_EcommerceEntrance | undefined;
    isBlock: boolean;
    isSubscribe: boolean;
    isAnchorMarked: boolean;
}
export interface User_LiveEventInfo {
    eventId: string;
    startTime: string;
    duration: string;
    title: string;
    description: string;
    hasSubscribed: boolean;
    isPaidEvent: boolean;
    ticketAmount: string;
    /** @warning Enum not found, should be PayMethod */
    payMethod: string;
}
/**
 * @EventPayMethod
 * webcast.data.LiveEventInfo
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export declare enum User_LiveEventInfo_EventPayMethod {
    EVENTPAYMETHODINVALID = 0,
    EVENTPAYMETHODCOINS = 1,
    EVENTPAYMETHODCASH = 2,
    UNRECOGNIZED = -1
}
/**
 * @WalletPackage
 * proto.webcast.data.LiveEventInfo
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_LiveEventInfo_WalletPackage {
    iapId: string;
    usdPriceShow: string;
}
/**
 * @ActivityInfo
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_ActivityInfo {
    badge: Image | undefined;
    storytag: Image | undefined;
}
/**
 * @AnchorLevel
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_AnchorLevel {
    level: string;
    experience: string;
    lowestExperienceThisLevel: string;
    highestExperienceThisLevel: string;
    taskStartExperience: string;
    taskStartTime: string;
    taskDecreaseExperience: string;
    taskTargetExperience: string;
    taskEndTime: string;
    profileDialogBg: Image | undefined;
    profileDialogBgBack: Image | undefined;
    stageLevel: Image | undefined;
    smallIcon: Image | undefined;
}
/**
 * @AuthenticationInfo
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_AuthenticationInfo {
    customVerify: string;
    enterpriseVerifyReason: string;
    authenticationBadge: Image | undefined;
}
/**
 * @AuthorStats
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_AuthorStats {
    videoTotalCount: string;
    videoTotalPlayCount: string;
    videoTotalShareCount: string;
    videoTotalSeriesCount: string;
    varietyShowPlayCount: string;
    videoTotalFavoriteCount: string;
}
/**
 * @Border
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_Border {
    icon: Image | undefined;
    level: string;
    source: string;
    profileDecorationRibbon: Image | undefined;
    avatarBackgroundColor: string;
    avatarBackgroundBorderColor: string;
}
/**
 * @ComboBadgeInfo
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_ComboBadgeInfo {
    icon: Image | undefined;
    comboCount: string;
}
/**
 * @EcommerceEntrance
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_EcommerceEntrance {
    /** Enum */
    entranceType: User_EcommerceEntrance_EntranceType;
    /** Enum */
    creatorType: User_EcommerceEntrance_CreatorType;
    schema: string;
    shopEntranceInfo: User_EcommerceEntrance_ShopEntranceInfo | undefined;
    showcaseEntranceInfo: User_EcommerceEntrance_ShowcaseEntranceInfo | undefined;
}
/**
 * @CreatorType
 * webcast.data.User.EcommerceEntrance
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export declare enum User_EcommerceEntrance_CreatorType {
    UNDEFINED = 0,
    OFFICIAL = 1,
    MARKET = 2,
    NORMAL = 3,
    UNRECOGNIZED = -1
}
/**
 * @EntranceType
 * webcast.data.User.EcommerceEntrance
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export declare enum User_EcommerceEntrance_EntranceType {
    PROFILE = 0,
    SHOWCASE = 1,
    SHOP = 2,
    UNRECOGNIZED = -1
}
/**
 * @ShopEntranceInfo
 * proto.webcast.data.User.EcommerceEntrance
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_EcommerceEntrance_ShopEntranceInfo {
    shopId: string;
    shopName: string;
    shopRating: string;
    storeLabel: User_EcommerceEntrance_ShopEntranceInfo_StoreLabel | undefined;
    formatSoldCount: string;
    soldCount: string;
    expRatePercentile: number;
    expRateTopDisplay: string;
    rateDisplayStyle: number;
    showRateNotApplicable: boolean;
}
/**
 * @StoreLabel
 * proto.webcast.data.User.EcommerceEntrance.ShopEntranceInfo
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_EcommerceEntrance_ShopEntranceInfo_StoreLabel {
    officialLabel: User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel | undefined;
    isBytemall: boolean;
}
/**
 * @StoreBrandLabelType
 * webcast.data.User.EcommerceEntrance.ShopEntranceInfo.StoreLabel
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export declare enum User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType {
    NONE = 0,
    OFFICIAL = 1,
    AUTHORIZED = 2,
    STORE_BRAND_LABEL_TYPE_BLUE_V = 3,
    STORE_BRAND_LABEL_TYPE_TOP_CHOICE = 4,
    UNRECOGNIZED = -1
}
/**
 * @StoreOfficialLabel
 * proto.webcast.data.User.EcommerceEntrance.ShopEntranceInfo.StoreLabel
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel {
    labelImageLight: User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel_ShopLabelImage | undefined;
    labelImageDark: User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel_ShopLabelImage | undefined;
    /** @warning Enum not found, should be LabelType */
    labelType: string;
    labelTypeStr: string;
}
/**
 * @ShopLabelImage
 * proto.webcast.data.User.EcommerceEntrance.ShopEntranceInfo.StoreLabel.StoreOfficialLabel
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel_ShopLabelImage {
    height: number;
    width: number;
    minetype: string;
    thumbUri: string;
    thumbUriList: string[];
    uri: string;
    urlList: string[];
    color: string;
}
/**
 * @ShowcaseEntranceInfo
 * proto.webcast.data.User.EcommerceEntrance
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_EcommerceEntrance_ShowcaseEntranceInfo {
    formatSoldCount: string;
    soldCount: string;
}
/**
 * @FansClub
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_FansClub {
    data: User_FansClub_FansClubData | undefined;
}
/**
 * @PreferntialType
 * webcast.data.User.FansClub
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export declare enum User_FansClub_PreferntialType {
    PRESONALPROFILE = 0,
    OTHERROOM = 1,
    UNRECOGNIZED = -1
}
/**
 * @FansClubData
 * proto.webcast.data.User.FansClub
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_FansClub_FansClubData {
    clubName: string;
    level: number;
    /** Enum */
    userFansClubStatus: User_FansClub_FansClubData_UserFansClubStatus;
    availableGiftIdsList: string[];
    anchorId: string;
}
/**
 * @BadgeIcon
 * webcast.data.User.FansClub.FansClubData
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export declare enum User_FansClub_FansClubData_BadgeIcon {
    UNKNOWN = 0,
    ICON = 1,
    SMALLICON = 2,
    UNRECOGNIZED = -1
}
/**
 * @UserFansClubStatus
 * webcast.data.User.FansClub.FansClubData
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export declare enum User_FansClub_FansClubData_UserFansClubStatus {
    NOTJOINED = 0,
    ACTIVE = 1,
    INACTIVE = 2,
    UNRECOGNIZED = -1
}
/**
 * @FansClubInfo
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_FansClubInfo {
    isSleeping: boolean;
    fansLevel: string;
    fansScore: string;
    badge: Image | undefined;
    fansCount: string;
    fansClubName: string;
}
/**
 * @FollowInfo
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_FollowInfo {
    followingCount: string;
    followerCount: string;
    followStatus: string;
    pushStatus: string;
}
/**
 * @OwnRoom
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_OwnRoom {
    roomIdsList: string[];
    roomIdsStrList: string[];
}
/**
 * @PayGrade
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_PayGrade {
    diamondIcon: Image | undefined;
    name: string;
    icon: Image | undefined;
    nextName: string;
    level: string;
    nextIcon: Image | undefined;
    gradeDescribe: string;
    gradeIconList: GradeIcon[];
    screenChatType: string;
    imIcon: Image | undefined;
    imIconWithLevel: Image | undefined;
    liveIcon: Image | undefined;
    newImIconWithLevel: Image | undefined;
    newLiveIcon: Image | undefined;
    upgradeNeedConsume: string;
    nextPrivileges: string;
    background: Image | undefined;
    backgroundBack: Image | undefined;
    score: string;
    gradeBanner: string;
    profileDialogBg: Image | undefined;
    profileDialogBgBack: Image | undefined;
}
/**
 * @SubscribeBadge
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_SubscribeBadge {
    originImg: Image | undefined;
    previewImg: Image | undefined;
}
/**
 * @SubscribeInfo
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_SubscribeInfo {
    qualification: boolean;
    isSubscribe: boolean;
    badge: User_SubscribeBadge | undefined;
    enableSubscription: boolean;
    subscriberCount: string;
    isInGracePeriod: boolean;
    isSubscribedToAnchor: boolean;
    userGiftSubAuth: boolean;
    anchorGiftSubAuth: boolean;
}
/**
 * @UserAttr
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_UserAttr {
    isMuted: boolean;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    muteDuration: string;
}
/**
 * @UserStats
 * proto.webcast.data.User
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface User_UserStats {
    id: string;
    idStr: string;
    followingCount: string;
    followerCount: string;
    recordCount: string;
    totalDuration: string;
    dailyFanTicketCount: string;
    dailyIncome: string;
    itemCount: string;
    favoriteItemCount: string;
    diamondConsumedCount: string;
    tuwenItemCount: string;
}
/** @Emote */
export interface Emote {
    emoteId: string;
    image: Image | undefined;
    /** Enum */
    auditStatus: AuditStatus;
    uuid: string;
    /** Enum */
    emoteType: EmoteType;
    /** Enum */
    contentSource: ContentSource;
    /** Enum */
    emotePrivateType: EmotePrivateType;
    packageId: string;
    auditInfo: Emote_AuditInfo | undefined;
    rewardCondition: RewardCondition;
    emoteUploadInfo: Emote_EmoteUploadInfo | undefined;
    createTime: string;
    emoteScene: EmoteScene;
}
export interface Emote_AuditInfo {
    violationId: string;
    taskType: Emote_AuditInfo_AuditTaskType;
}
export declare enum Emote_AuditInfo_AuditTaskType {
    AUDIT_TASK_TYPE_DEFAULT = 0,
    AUDIT_TASK_TYPE_APPEAL = 1,
    UNRECOGNIZED = -1
}
export interface Emote_EmoteUploadInfo {
    userId: string;
    emoteUploadSource: UserEmoteUploadSource;
    userInfo: User | undefined;
    userIdStr: string;
}
/** @PunishEventInfo */
export interface PunishEventInfo {
    punishType: string;
    punishReason: string;
    punishId: string;
    violationUid: string;
    /** Enum */
    punishTypeId: PunishTypeId;
    duration: string;
    punishPerceptionCode: string;
    violationUidStr: string;
    showReason: string;
}
/** @MsgFilter */
export interface MsgFilter {
    isGifter: boolean;
    isSubscribedToAnchor: boolean;
}
/**
 * @UserIdentity
 * proto.webcast.data
 */
export interface UserIdentity {
    isGiftGiverOfAnchor: boolean;
    isSubscriberOfAnchor: boolean;
    isMutualFollowingWithAnchor: boolean;
    isFollowerOfAnchor: boolean;
    isModeratorOfAnchor: boolean;
    isAnchor: boolean;
}
/**
 * @Goal
 * proto.webcast.data
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface LiveStreamGoal {
    id: string;
    type: number;
    status: number;
    subGoals: LiveStreamGoal_LiveStreamSubGoal[];
    description: string;
    auditStatus: AuditStatus;
    cycleType: number;
    startTime: string;
    expireTime: string;
    realFinishTime: string;
    contributors: LiveStreamGoal_LiveStreamGoalContributor[];
    contributorsLength: number;
    idStr: string;
    auditDescription: string;
    stats: LiveStreamGoal_GoalStats | undefined;
    goalExtraInfo: string;
    mode: number;
    auditInfo: LiveStreamGoal_AuditInfo | undefined;
    challengeType: string;
    isUneditable: boolean;
}
export interface LiveStreamGoal_AuditInfo {
    violationId: string;
    taskType: number;
}
export interface LiveStreamGoal_LiveStreamSubGoal {
    type: number;
    id: string;
    progress: string;
    target: string;
    gift: LiveStreamGoal_LiveStreamSubGoalGift | undefined;
    idStr: string;
    pinInfo: LiveStreamGoal_LiveStreamSubGoal_SubGoalPinInfo | undefined;
    source: number;
    recommendedText: string;
    recommendedHeader: string;
}
export interface LiveStreamGoal_LiveStreamSubGoal_SubGoalPinInfo {
    pinStartTime: string;
    pinEndTime: string;
    pinReadyTime: string;
}
export interface LiveStreamGoal_LiveStreamSubGoalGift {
    name: string;
    icon: Image | undefined;
    diamondCount: string;
    type: number;
}
export interface LiveStreamGoal_LiveStreamGoalContributor {
    userId: string;
    avatar: Image | undefined;
    displayId: string;
    score: string;
    userIdStr: string;
    inRoom: boolean;
    isFriend: boolean;
    followByOwner: boolean;
    isFistContribute: boolean;
    subGoalContributions: LiveStreamGoal_LiveStreamGoalContributor_SubGoalContribution[];
}
export interface LiveStreamGoal_LiveStreamGoalContributor_SubGoalContribution {
    id: string;
    contributionCount: string;
}
export interface LiveStreamGoal_GoalStats {
    totalCoins: string;
    totalContributor: string;
    comparison: LiveStreamGoal_GoalStats_GoalComparison | undefined;
    totalNewFans: string;
}
export interface LiveStreamGoal_GoalStats_GoalComparison {
    coinsIncr: string;
    contributorIncr: string;
}
/**
 * @Indicator
 * proto.webcast.data
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface LiveStreamGoalIndicator {
    key: string;
    op: number;
}
export interface Ranking {
    type: string;
    label: string;
    color: TikTokColor | undefined;
    details: ValueLabel[];
}
export interface TikTokColor {
    color: string;
    id: string;
    data1: number;
}
export interface ValueLabel {
    data: number;
    label: string;
    label2: string;
    label3: string;
}
export interface TimeStampContainer {
    timestamp1: string;
    timestamp2: string;
    timestamp3: string;
}
export interface PollStartContent {
    StartTime: string;
    EndTime: string;
    OptionList: PollOptionInfo[];
    Title: string;
    Operator: User | undefined;
}
export interface PollEndContent {
    EndType: PollEndType;
    OptionList: PollOptionInfo[];
    Operator: User | undefined;
}
export interface PollOptionInfo {
    Votes: number;
    DisplayContent: string;
    OptionIdx: number;
    VoteUserList: VoteUser[];
}
export interface VoteUser {
    UserId: string;
    NickName: string;
    AvatarThumb: Image | undefined;
}
export interface PollUpdateVotesContent {
    OptionList: PollOptionInfo[];
}
export interface UserFanTicket {
    UserId: string;
    FanTicket: string;
    MatchTotalScore: string;
    MatchRank: number;
}
export interface FanTicketRoomNoticeContent {
    UserFanTicketList: UserFanTicket[];
    TotalLinkMicFanTicket: string;
    MatchId: string;
    EventTime: string;
    FanTicketIconUrl: string;
    playId: string;
    playScene: PlayScene;
}
export interface LinkerAcceptNoticeContent {
    fromUserId: string;
    fromRoomId: string;
    toUserId: string;
}
export interface LinkerCancelContent {
    fromUserId: string;
    toUserId: string;
    cancelType: string;
    actionId: string;
}
export interface ListUser {
    user: User | undefined;
    linkmicId: string;
    linkmicIdStr: string;
    linkStatus: LinkmicRoleType;
    linkType: LinkType;
    userPosition: number;
    silenceStatus: LinkSilenceStatus;
    modifyTime: string;
    linkerId: string;
    roleType: LinkRoleType;
}
/** it is just empty */
export interface LinkerCloseContent {
}
export interface LinkerCreateContent {
    ownerId: string;
    ownerRoomId: string;
    /** Assuming this is LinkType enum */
    linkType: string;
}
export interface LinkerEnterContent {
    linkedUsersList: ListUser[];
    anchorMultiLiveEnum: LinkmicMultiLiveEnum;
    anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
}
export interface LinkerInviteContent {
    fromUserId: string;
    fromRoomId: string;
    toRtcExtInfo: string;
    rtcJoinChannel: boolean;
    vendor: string;
    secFromUserId: string;
    toLinkmicIdStr: string;
    fromUser: User | undefined;
    requiredMicIdx: string;
    rtcExtInfoMap: {
        [key: string]: string;
    };
    multiLiveLayoutEnable: LinkmicMultiLiveEnum;
    multiLiveSetting: MultiLiveAnchorPanelSettings | undefined;
    fromLinkmicIdStr: string;
    fromTopHostInfo: LinkerInviteContent_InviteTopHostInfo | undefined;
    actionId: string;
    linkedUsers: LinkerInviteContent_LinkmicUserInfo[];
    dialogInfo: LinkerInviteContent_PerceptionDialogInfo | undefined;
    punishEventInfo: PunishEventInfo | undefined;
    fromRoomAgeRestricted: number;
    abTestSetting: LinkerInviteContent_CohostABTestSetting[];
    linkerInviteMsgExtra: LinkerInviteContent_LinkerInviteMessageExtra | undefined;
}
export interface LinkerInviteContent_RtcExtInfoMapEntry {
    key: string;
    value: string;
}
export interface LinkerInviteContent_InviteTopHostInfo {
    rankType: string;
    topIndex: string;
}
export interface LinkerInviteContent_LinkmicUserInfo {
    userId: string;
    linkmicIdStr: string;
    roomId: string;
    linkedTime: string;
}
export interface LinkerInviteContent_PerceptionDialogInfo {
    iconType: PerceptionDialogIconType;
    title: Text | undefined;
    subTitle: Text | undefined;
    adviceActionText: Text | undefined;
    defaultActionText: Text | undefined;
    violationDetailUrl: string;
    scene: Scene;
    targetUserId: string;
    targetRoomId: string;
    countDownTime: string;
    showFeedback: boolean;
    feedbackOptions: LinkerInviteContent_PerceptionDialogInfo_PerceptionFeedbackOption[];
    policyTip: string;
    appealPopup: number;
}
export interface LinkerInviteContent_PerceptionDialogInfo_PerceptionFeedbackOption {
    id: string;
    contentKey: string;
}
export interface LinkerInviteContent_CohostABTestSetting {
    key: string;
    value: LinkerInviteContent_CohostABTestSetting_CohostABTestList | undefined;
}
export interface LinkerInviteContent_CohostABTestSetting_CohostABTestList {
    abTestList: LinkerInviteContent_CohostABTestSetting_CohostABTestList_CohostABTest[];
}
export interface LinkerInviteContent_CohostABTestSetting_CohostABTestList_CohostABTest {
    abTestType: CohostABTestType;
    group: string;
}
export interface LinkerInviteContent_LinkerInviteMessageExtra {
    matchType: number;
    inviteType: number;
    subType: number;
    theme: string;
    duration: number;
    layout: number;
    tips: string;
    inviterRivalExtra: LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra | undefined;
    otherRivalExtra: LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra[];
    topicInfo: CohostTopic | undefined;
    algoRequestId: string;
}
export interface LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra {
    textType: TextType;
    text: string;
    label: string;
    userCount: number;
    avatarThumb: Image | undefined;
    displayId: string;
    authenticationInfo: LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_AuthenticationInfo | undefined;
    nickname: string;
    followStatus: string;
    mHashtag: LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_Hashtag | undefined;
    userId: string;
    isBestTeammate: boolean;
    optPairInfo: LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfo | undefined;
    followerCount: string;
}
export interface LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_AuthenticationInfo {
    customVerify: string;
    enterpriseVerifyReason: string;
    authenticationBadge: Image | undefined;
}
export interface LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_Hashtag {
    id: string;
    title: string;
    image: Image | undefined;
    namespace: HashtagNamespace;
}
export interface LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfo {
    mappingId: string;
    displayUserList: LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfo_OptPairUser[];
    buttonNoticeType: OptPairStatus;
    expectedTimeSec: string;
    optPairType: string;
}
export interface LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfo_OptPairUser {
    user: User | undefined;
    roomId: string;
}
export interface CohostTopic {
    id: string;
    titleKey: string;
    titleText: string;
    liked: boolean;
    totalHeat: string;
    totalRivals: string;
    rivalsAvatar: Image[];
}
export interface LinkerKickOutContent {
    fromUserId: string;
    kickoutReason: KickoutReason;
}
export interface LinkerLeaveContent {
    userId: string;
    linkmicIdStr: string;
    sendLeaveUid: string;
    leaveReason: string;
}
/** Empty */
export interface LinkerLinkedListChangeContent {
}
/** Empty */
export interface CohostListChangeContent {
}
export interface LinkerListChangeContent {
    linkedUsers: ListUser[];
    appliedUsers: ListUser[];
    connectingUsers: ListUser[];
}
export interface LinkerMediaChangeContent {
    op: GuestMicCameraManageOp;
    toUserId: string;
    anchorId: string;
    roomId: string;
    changeScene: GuestMicCameraChangeScene;
    operatorInfo: LinkerMediaChangeContent_LinkerMediaChangeOperator | undefined;
}
export interface LinkerMediaChangeContent_LinkerMediaChangeOperator {
    userId: string;
    operatorType: LinkMicUserAdminType;
    nickName: string;
    displayId: string;
}
/** Empty */
export interface LinkerMicIdxUpdateContent {
}
export interface LinkerMuteContent {
    userId: string;
    status: MuteStatus;
}
export interface LinkerRandomMatchContent {
    user: User | undefined;
    roomId: string;
    inviteType: string;
    matchId: string;
    innerChannelId: string;
}
export interface LinkerReplyContent {
    fromUserId: string;
    fromRoomId: string;
    fromUserLinkmicInfo: LinkerReplyContent_LinkmicInfo | undefined;
    toUserId: string;
    toUserLinkmicInfo: LinkerReplyContent_LinkmicInfo | undefined;
    linkType: string;
    replyStatus: string;
    linkerSetting: LinkerSetting | undefined;
    fromUser: User | undefined;
    toUser: User | undefined;
}
export interface LinkerReplyContent_LinkmicInfo {
    accessKey: string;
    linkMicId: string;
    joinable: boolean;
    confluenceType: number;
    rtcExtInfo: string;
    rtcAppId: string;
    rtcAppSign: string;
    linkmicIdStr: string;
    vendor: string;
}
export interface LinkerSetting {
    MaxMemberLimit: string;
    LinkType: string;
    Scene: Scene;
    OwnerUserId: string;
    OwnerRoomId: string;
    Vendor: string;
}
export interface LinkerSysKickOutContent {
    userId: string;
    linkmicIdStr: string;
}
export interface LinkmicUserToastContent {
    userId: string;
    roomId: string;
    displayText: Text | undefined;
    leavedUserId: string;
}
export interface LinkerUpdateUserContent {
    fromUserId: string;
    toUserId: string;
    updateInfo: {
        [key: string]: string;
    };
}
export interface LinkerUpdateUserContent_UpdateInfoEntry {
    key: string;
    value: string;
}
export interface LinkerUpdateUserSettingContent {
    multiLiveAnchorPanelSettings: MultiLiveAnchorPanelSettings | undefined;
}
/** Empty */
export interface LinkerWaitingListChangeContent {
}
export interface MultiLiveAnchorPanelSettings {
    userId: string;
    layout: string;
    fixMicNum: string;
    allowRequestFromUser: string;
    allowRequestFromFollowerOnly: string;
    applierSortSetting: LinkmicApplierSortSetting;
    applierSortGiftScoreThreshold: string;
    allowRequestFromFriends: number;
    allowRequestFromFollowers: number;
    allowRequestFromOthers: number;
    enableShowMultiGuestLayout: number;
}
export interface Player {
    roomId: string;
    userId: string;
}
export interface AllListUser {
    linkedList: LinkLayerListUser[];
    appliedList: LinkLayerListUser[];
    invitedList: LinkLayerListUser[];
    readyList: LinkLayerListUser[];
}
export interface LinkLayerListUser {
    user: User | undefined;
    linkmicId: string;
    pos: Position | undefined;
    linkedTimeNano: string;
    appVersion: string;
    magicNumber1: string;
}
export interface Position {
    type: number;
    link: LinkPosition | undefined;
}
export interface LinkPosition {
    position: number;
    opt: number;
}
export interface GroupPlayer {
    channelId: string;
    user: User | undefined;
}
export interface DSLConfig {
    sceneVersion: number;
    layoutId: string;
}
export interface GroupChannelAllUser {
    groupChannelId: string;
    userList: GroupChannelUser[];
    contentVersion: string;
}
export interface GroupChannelUser {
    channelId: string;
    status: GroupStatus;
    type: TextType;
    allUser: AllListUser | undefined;
    joinTime: string;
    linkedTime: string;
    ownerUser: GroupPlayer | undefined;
    groupLinkmicId: string;
}
export interface RTCExtraInfo {
    liveRtcEngineConfig: RTCExtraInfo_RTCEngineConfig | undefined;
    liveRtcVideoParamList: RTCExtraInfo_RTCLiveVideoParam[];
    rtcBitrateMap: RTCExtraInfo_RTCBitrateMap | undefined;
    rtcFps: number;
    rtcMixBase: RTCExtraInfo_RTCMixBase | undefined;
    byteRtcExtInfo: RTCExtraInfo_ByteRTCExtInfo | undefined;
    rtcInfoExtra: RTCExtraInfo_RTCInfoExtra | undefined;
    rtcBusinessId: string;
    rtcOther: RTCExtraInfo_RTCOther | undefined;
    interactClientType: number;
}
export interface RTCExtraInfo_RTCMixBase {
    bitrate: number;
}
export interface RTCExtraInfo_ByteRTCExtInfo {
    defaultSignaling: number;
}
export interface RTCExtraInfo_RTCInfoExtra {
    version: string;
}
export interface RTCExtraInfo_RTCOther {
    transCodingSecond: number;
}
export interface RTCExtraInfo_RTCEngineConfig {
    rtcAppId: string;
    rtcUserId: string;
    rtcToken: string;
    rtcChannelId: string;
}
export interface RTCExtraInfo_RTCLiveVideoParam {
    strategyId: number;
    params: RTCExtraInfo_RTCVideoParam | undefined;
}
export interface RTCExtraInfo_RTCVideoParam {
    width: number;
    height: number;
    fps: number;
    bitrateKbps: number;
}
export interface RTCExtraInfo_RTCBitrateMap {
    xx1: number;
    xx2: number;
    xx3: number;
    xx4: number;
}
export interface CreateChannelContent {
    owner: Player | undefined;
    ownerLinkMicId: string;
}
export interface ListChangeContent {
    listChangeType: number;
    userList: AllListUser | undefined;
    linkedUserUiPositions: string[];
    contentPos: ContentPosition[];
}
export interface ContentPosition {
    contentID: string;
    contentType: ContentPositionType;
    pos: MicPositionData | undefined;
    contentLinkmicID: string;
    startTimeNano: string;
}
export interface MicPositionData {
    type: number;
    linkPosition: LinkPosition | undefined;
}
export interface MultiLiveContent {
    applyBizContent: MultiLiveContent_ApplyBizContent | undefined;
    inviteBizContent: MultiLiveContent_InviteBizContent | undefined;
    replyBizContent: MultiLiveContent_ReplyBizContent | undefined;
    permitBizContent: MultiLiveContent_PermitBizContent | undefined;
    joinDirectBizContent: MultiLiveContent_JoinDirectBizContent | undefined;
    kickOutBizContent: MultiLiveContent_KickOutBizContent | undefined;
}
export interface MultiLiveContent_ApplyBizContent {
    user: User | undefined;
}
export interface MultiLiveContent_JoinDirectBizContent {
    replyImMsgId: string;
    outsideRoomInviteSource: MultiGuestOutsideRoomInviteSource;
}
export interface MultiLiveContent_InviteBizContent {
    anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
    inviteSource: ContentInviteSource;
    operatorUserInfo: User | undefined;
    operatorLinkAdminType: LinkMicUserAdminType;
    inviteeUserInfo: User | undefined;
    shareRevenueSetting: LinkmicShareRevenueSetting;
}
export interface MultiLiveContent_ReplyBizContent {
    linkType: number;
    isTurnOffInvitation: number;
    replyUserInfo: User | undefined;
}
export interface MultiLiveContent_PermitBizContent {
    anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
    expireTimestamp: string;
    operatorUserInfo: User | undefined;
    operatorLinkAdminType: LinkMicUserAdminType;
    linkUserType: LinkUserType;
}
export interface MultiLiveContent_KickOutBizContent {
    operatorUserInfo: User | undefined;
    operatorLinkAdminType: LinkMicUserAdminType;
    kickPlayerUserInfo: User | undefined;
}
export interface InviteContent {
    invitor: Player | undefined;
    inviteeRtcExtInfo: RTCExtraInfo | undefined;
    invitorLinkMicId: string;
    inviteeLinkMicId: string;
    isOwner: boolean;
    pos: Position | undefined;
    dsl: DSLConfig | undefined;
    invitee: User | undefined;
    operator: User | undefined;
}
/**
 * @ApplyContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface ApplyContent {
    applier: Player | undefined;
    applierLinkMicId: string;
}
/**
 * @PermitApplyContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface PermitApplyContent {
    permiter: Player | undefined;
    permiterLinkMicId: string;
    applierPos: Position | undefined;
    /** Enum */
    replyStatus: ReplyStatus;
    dsl: DSLConfig | undefined;
    applier: User | undefined;
    operator: User | undefined;
    applierLinkMicId: string;
}
/**
 * @ReplyInviteContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface ReplyInviteContent {
    invitee: Player | undefined;
    replyStatus: ReplyStatus;
    inviteeLinkMicId: string;
    inviteePos: Position | undefined;
    inviteOperatorUser: Player | undefined;
    linkedUserUiPositions: string[];
    uiPos: PosIdentity[];
}
/**
 * @KickOutContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface KickOutContent {
    offliner: Player | undefined;
    kickoutReason: KickoutReason;
    linkedUserUiPositions: string[];
    uiPos: PosIdentity[];
}
export interface PosIdentity {
    type: PosIdentityType;
    value: string;
}
/**
 * @CancelApplyContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface CancelApplyContent {
    applier: Player | undefined;
    applierLinkMicId: string;
}
/**
 * @CancelInviteContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface CancelInviteContent {
    invitor: Player | undefined;
    invitorLinkMicId: string;
    inviteeLinkMicId: string;
    inviteSeqId: string;
    invitee: Player | undefined;
}
/**
 * @LeaveContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface LeaveContent {
    leaver: Player | undefined;
    leaveReason: string;
    linkedUserUiPositions: string[];
    uiPos: PosIdentity[];
}
/**
 * @FinishChannelContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface FinishChannelContent {
    owner: Player | undefined;
    finishReason: string;
}
/**
 * @JoinDirectContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface JoinDirectContent {
    joiner: LinkLayerListUser | undefined;
    allUsers: AllListUser | undefined;
}
/**
 * @LeaveJoinGroupContent
 * proto.webcast.im
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface LeaveJoinGroupContent {
    operator: GroupPlayer | undefined;
    groupChannelId: string;
    leaveSource: string;
    linkedUserUiPositions: string[];
}
/**
 * @PermitJoinGroupContent
 * proto.webcast.im
 */
export interface PermitJoinGroupContent {
    approver: GroupPlayer | undefined;
    agreeStatus: AgreeStatus;
    type: JoinType;
    groupExtInfoList: RTCExtraInfo[];
    groupUser: GroupChannelAllUser | undefined;
    migrationDetails: MigrationDetails | undefined;
    linkedUserUiPositions: string[];
}
export interface MigrationDetails {
    isMigrate: boolean;
    sourceGroupChannelId: string;
    targetGroupChannelId: string;
}
/**
 * @CancelJoinGroupContent
 * proto.webcast.im
 */
export interface CancelJoinGroupContent {
    leaverList: GroupPlayer[];
    operator: GroupPlayer | undefined;
    type: JoinType;
    groupUser: GroupChannelAllUser | undefined;
}
export interface P2PGroupChangeContent {
    groupExtInfoList: RTCExtraInfo[];
    groupUser: GroupChannelAllUser | undefined;
    migrationDetails: MigrationDetails | undefined;
    contentPos: ContentPosition[];
}
export interface GroupChangeContent {
    groupUser: GroupChannelAllUser | undefined;
    linkedUserUiPositions: string[];
}
export interface BusinessContent {
    overLength: string;
    multiLiveContent: MultiLiveContent | undefined;
    cohostContent: BusinessContent_CohostContent | undefined;
}
export interface BusinessContent_CohostContent {
    joinGroupBizContent: BusinessContent_JoinGroupBizContent | undefined;
    permitJoinGroupBizContent: BusinessContent_PermitJoinGroupBizContent | undefined;
    listChangeBizContent: BusinessContent_ListChangeBizContent | undefined;
}
export interface BusinessContent_PermitJoinGroupBizContent {
    replyStatus: ReplyStatus;
    sourceType: SourceType;
}
export interface BusinessContent_ListChangeBizContent {
    userInfos: {
        [key: string]: BusinessContent_CohostUserInfo;
    };
    waitingUsers: BusinessContent_ListChangeBizContent_VirtualWaitingUser[];
}
export interface BusinessContent_ListChangeBizContent_UserInfosEntry {
    key: string;
    value: BusinessContent_CohostUserInfo | undefined;
}
export interface BusinessContent_ListChangeBizContent_VirtualWaitingUser {
    userId: string;
    timestamp: string;
    avatars: Image[];
}
export interface BusinessContent_CohostUserInfo {
    permissionType: string;
    sourceType: SourceType;
    isLowVersion: boolean;
    bestTeammateUid: string;
    hasTopicPerm: boolean;
    streamConfig: BusinessContent_CohostUserInfo_CohostStreamConfig | undefined;
    inDifferentInviteTypeControlGroup: boolean;
    nickname: string;
    displayId: string;
    avatarThumb: Image | undefined;
    followStatus: string;
    userIdStr: string;
}
export interface BusinessContent_CohostUserInfo_CohostStreamConfig {
    screenShareStreamId: string;
}
export interface BusinessContent_JoinGroupBizContent {
    fromRoomAgeRestricted: number;
    fromTag: BusinessContent_Tag | undefined;
    dialog: BusinessContent_PerceptionDialogInfo | undefined;
    punishInfo: PunishEventInfo | undefined;
    topicInfo: CohostTopic | undefined;
    algoRequestId: string;
    cohostLayoutMode: CohostLayoutMode;
    tag: BusinessContent_JoinGroupBizContent_TagV2 | undefined;
    gameTag: BusinessContent_JoinGroupBizContent_RivalsGameTag | undefined;
    newUserEducation: string;
    joinGroupMsgExtra: BusinessContent_JoinGroupMessageExtra | undefined;
}
export interface BusinessContent_JoinGroupBizContent_RivalsGameTag {
    tagId: string;
    tagDisplayText: string;
}
export interface BusinessContent_JoinGroupBizContent_TagV2 {
    tagClassification: TagClassification;
    tagType: number;
    tagValue: string;
    starlingKey: string;
    secondDegreeRelationContent: BusinessContent_JoinGroupBizContent_TagV2_SecondDegreeRelationContent | undefined;
    cohostHistoryDay: string;
    similarInterestContent: BusinessContent_JoinGroupBizContent_TagV2_SimilarInterestContent | undefined;
}
export interface BusinessContent_JoinGroupBizContent_TagV2_UserInfo {
    userId: string;
    nickName: string;
    avatarThumb: Image | undefined;
}
export interface BusinessContent_JoinGroupBizContent_TagV2_SecondDegreeRelationContent {
    relatedUsers: BusinessContent_JoinGroupBizContent_TagV2_UserInfo[];
    totalRelatedUserCnt: string;
}
export interface BusinessContent_JoinGroupBizContent_TagV2_SimilarInterestContent {
    contentId: string;
    displayText: string;
}
export interface BusinessContent_Tag {
    tagType: number;
    tagValue: string;
    tagText: string;
}
export interface BusinessContent_PerceptionDialogInfo {
    /** @warning Enum not found, should be IconType */
    iconType: string;
    title: Text | undefined;
    subTitle: Text | undefined;
    adviceActionText: Text | undefined;
    defaultActionText: Text | undefined;
    violationDetailUrl: string;
    scene: number;
    targetUserId: string;
    targetRoomId: string;
    countDownTime: string;
    showFeedback: boolean;
    feedbackOptionsList: BusinessContent_PerceptionFeedbackOption[];
    policyTip: string;
}
export interface BusinessContent_PerceptionFeedbackOption {
    id: string;
    contentKey: string;
}
export interface BusinessContent_JoinGroupMessageExtra {
    sourceType: string;
    extra: BusinessContent_JoinGroupMessageExtra_RivalExtra | undefined;
    otherUsersList: BusinessContent_JoinGroupMessageExtra_RivalExtra[];
}
/**
 * @RivalExtra
 * proto.webcast.im.JoinGroupMessageExtra
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface BusinessContent_JoinGroupMessageExtra_RivalExtra {
    userCount: string;
    avatarThumb: Image | undefined;
    displayId: string;
    authenticationInfo: BusinessContent_JoinGroupMessageExtra_RivalExtra_AuthenticationInfo | undefined;
    nickname: string;
    followStatus: string;
    hashtag: BusinessContent_Hashtag | undefined;
    topHostInfo: BusinessContent_TopHostInfo | undefined;
    userId: string;
    isBestTeammate: boolean;
}
export interface BusinessContent_JoinGroupMessageExtra_RivalExtra_AuthenticationInfo {
    customVerify: string;
    enterpriseVerifyReason: string;
    authenticationBadge: Image | undefined;
}
export interface BusinessContent_Hashtag {
    id: string;
    title: string;
    image: Image | undefined;
    namespace: HashtagNamespace;
}
export interface BusinessContent_TopHostInfo {
    rankType: string;
    topIndex: string;
}
export interface JoinGroupContent {
    groupUser: GroupChannelAllUser | undefined;
    joinUser: GroupPlayer | undefined;
    type: JoinType;
    groupExtInfo: RTCExtraInfo[];
}
export interface PrivilegeLogExtra {
    dataVersion: string;
    privilegeId: string;
    privilegeVersion: string;
    privilegeOrderId: string;
    level: string;
}
export interface FontStyle {
    fontSize: number;
    fontWidth: number;
    fontColor: string;
    borderColor: string;
}
export interface UserHonor {
    totalDiamond: string;
    diamondIcon: Image | undefined;
    currentHonorName: string;
    currentHonorIcon: Image | undefined;
    nextHonorName: string;
    level: number;
    nextHonorIcon: Image | undefined;
    currentDiamond: string;
    thisGradeMinDiamond: string;
    thisGradeMaxDiamond: string;
    gradeDescribe: string;
    gradeIconList: GradeIcon[];
    screenChatType: string;
    imIcon: Image | undefined;
    imIconWithLevel: Image | undefined;
    liveIcon: Image | undefined;
    newImIconWithLevel: Image | undefined;
    newLiveIcon: Image | undefined;
    upgradeNeedConsume: string;
    nextPrivileges: string;
    profileDialogBg: Image | undefined;
    profileDialogBackBg: Image | undefined;
    score: string;
    gradeBanner: string;
}
/**
 * @GradeIcon
 * proto.webcast.data.User.PayGrade
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface GradeIcon {
    icon: Image | undefined;
    iconDiamond: string;
    level: string;
    levelStr: string;
}
export interface BorderInfo {
    icon: Image | undefined;
    level: string;
    source: string;
    profileDecorationRibbon: Image | undefined;
    borderLogExtra: PrivilegeLogExtra | undefined;
    ribbonLogExtra: PrivilegeLogExtra | undefined;
    avatarBackgroundColor: string;
    avatarBackgroundBorderColor: string;
}
export interface FansClubMember {
    data: FansClubData | undefined;
    preferData: {
        [key: number]: FansClubData;
    };
}
export interface FansClubMember_PreferDataEntry {
    key: number;
    value: FansClubData | undefined;
}
export interface FansClubData {
    clubName: string;
    level: number;
    userFansClubStatus: number;
    badge: FansClubData_UserBadge | undefined;
    availableGiftIds: string[];
    anchorId: string;
}
export interface FansClubData_UserBadge {
    icons: {
        [key: number]: Image;
    };
    title: string;
}
export interface FansClubData_UserBadge_IconsEntry {
    key: number;
    value: Image | undefined;
}
export interface Author {
    videoTotalCount: string;
    videoTotalPlayCount: string;
    videoTotalFavoriteCount: string;
}
export interface PublicAreaCommon {
    userLabel: Image | undefined;
    userConsumeInRoom: string;
}
export interface PublicAreaMessageCommon {
    scrollGapCount: string;
    anchorScrollGapCount: string;
    releaseToScrollArea: boolean;
    anchorReleaseToScrollArea: boolean;
    isAnchorMarked: boolean;
    creatorSuccessInfo: PublicAreaMessageCommon_CreatorSuccessInfo | undefined;
    portraitInfo: PublicAreaMessageCommon_PortraitInfo | undefined;
    userInteractionInfo: PublicAreaMessageCommon_UserInteractionInfo | undefined;
    adminFoldType: string;
}
export interface PublicAreaMessageCommon_TagItem {
    tagType: TagType;
    tagText: Text | undefined;
}
export interface PublicAreaMessageCommon_Topic {
    topicActionType: TopicActionType;
    topicText: Text | undefined;
    topicTips: Text | undefined;
}
export interface PublicAreaMessageCommon_CreatorSuccessInfo {
    tags: PublicAreaMessageCommon_TagItem[];
    topic: PublicAreaMessageCommon_Topic | undefined;
}
export interface PublicAreaMessageCommon_UserMetrics {
    type: UserMetricsType;
    metricsValue: string;
}
export interface PublicAreaMessageCommon_PortraitTag {
    tagId: string;
    priority: string;
    showValue: string;
    showArgs: string;
}
export interface PublicAreaMessageCommon_PortraitInfo {
    userMetrics: PublicAreaMessageCommon_UserMetrics[];
    portraitTag: PublicAreaMessageCommon_PortraitTag[];
}
export interface PublicAreaMessageCommon_UserInteractionInfo {
    likeCnt: string;
    commentCnt: string;
    shareCnt: string;
}
export interface GiftModeMeta {
    giftId: string;
    giftNameKey: string;
    giftIconImage: Image | undefined;
    giftModeDesc: Text | undefined;
}
export interface BattleTeamUser {
    userId: string;
    score: string;
    userIdStr: string;
}
export interface BattleSetting {
    battleId: string;
    startTimeMs: string;
    duration: number;
    channelId: string;
    status: number;
    inviteType: BattleInviteType;
    giftModeMeta: GiftModeMeta | undefined;
    battleType: BattleType;
    extraDurationSecond: string;
    endTimeMs: string;
}
export interface BattleTeamUserArmies {
    teamId: string;
    teamUsers: BattleTeamUser[];
    teamTotalScore: string;
    userArmies: BattleUserArmies | undefined;
    hostRank: string;
}
export interface BattleUserArmies {
    userArmy: BattleUserArmy[];
    hostScore: string;
    anchorIdStr: string;
}
export interface BattleUserArmy {
    userId: string;
    score: string;
    nickname: string;
    avatarThumb: Image | undefined;
    diamondScore: string;
    userIdStr: string;
}
export interface HighScoreControlCfg {
    normalControlApplied: boolean;
    threshold: string;
    originDisplayToUserList: string[];
}
export interface Message {
    type: string;
    binary: Uint8Array;
}
export interface WebsocketParam {
    name: string;
    value: string;
}
export interface WebcastRoomUserSeqMessage {
    common: CommonMessageData | undefined;
    viewerCount: number;
    ranksList: WebcastRoomUserSeqMessage_Contributor[];
    popStr: string;
    seatsList: WebcastRoomUserSeqMessage_Contributor[];
    popularity: string;
    totalUser: number;
    anonymous: string;
}
export interface WebcastRoomUserSeqMessage_Contributor {
    coinCount: number;
    user: User | undefined;
    rank: number;
    delta: string;
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
    common: CommonMessageData | undefined;
    user: User | undefined;
    comment: string;
    visibleToSender: boolean;
    background: ImageModel | undefined;
    fullScreenTextColor: string;
    backgroundImageV2: ImageModel | undefined;
    publicAreaCommon: PublicAreaCommon | undefined;
    giftImage: ImageModel | undefined;
    inputType: number;
    atUser: User | undefined;
    emotes: WebcastSubEmote[];
    contentLanguage: string;
    msgFilter: MsgFilter | undefined;
    quickChatScene: number;
    communityflaggedStatus: number;
    commentQualityScores: WebcastChatMessage_CommentQualityScore[];
    userIdentity: WebcastChatMessage_UserIdentity | undefined;
    commentTag: WebcastChatMessage_CommentTag[];
    publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
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
/** Chat Emotes (Subscriber) */
export interface WebcastEmoteChatMessage {
    common: CommonMessageData | undefined;
    user: User | undefined;
    emoteList: Emote[];
    msgFilter: MsgFilter | undefined;
    userIdentity: UserIdentity | undefined;
}
export interface WebcastSubEmote {
    /** starting at 0, you insert the emote itself into the comment at that place */
    placeInComment: number;
    emote: EmoteDetails | undefined;
}
export interface WebcastMemberMessage {
    common: CommonMessageData | undefined;
    user: User | undefined;
    action: MemberMessageAction;
    memberCount: number;
    operator: User | undefined;
    isSetToAdmin: boolean;
    isTopUser: boolean;
    rankScore: string;
    topUserNo: string;
    enterType: string;
    actionDescription: string;
    userId: string;
    effectConfig: WebcastMemberMessage_EffectConfig | undefined;
    popStr: string;
    enterEffectConfig: WebcastMemberMessage_EffectConfig | undefined;
    backgroundImage: Image | undefined;
    backgroundImageV2: Image | undefined;
    anchorDisplayText: Text | undefined;
    clientEnterSource: string;
    clientEnterType: string;
    clientLiveReason: string;
    actionDuration: string;
    userShareType: string;
    displayStyle: WebcastMemberMessage_DisplayStyle;
    adminPermissions: {
        [key: number]: number;
    };
    kickSource: number;
    allowPreviewTime: string;
    lastSubscriptionAction: string;
    publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
    liveSubOnlyTier: string;
    liveSubOnlyMonth: string;
    ecStreamerKey: string;
    showWave: string;
    waveAlgorithmData: WebcastMemberMessage_WaveAlgorithmData | undefined;
    hitAbStatus: WebcastMemberMessage_HitABStatus;
}
export declare enum WebcastMemberMessage_DisplayStyle {
    DISPLAY_STYLE_NORMAL = 0,
    DISPLAY_STYLE_STAY = 1,
    DISPLAY_STYLE_CHAT = 2,
    UNRECOGNIZED = -1
}
export declare enum WebcastMemberMessage_HitABStatus {
    HIT_A_B_STATUS_HIT_AB_STATUS_NO_HIT = 0,
    HIT_A_B_STATUS_HIT_AB_STATUS_ENTER_FROM_EXTERNAL_LINK_NEW_TEXT = 1,
    HIT_A_B_STATUS_HIT_AB_STATUS_ENTER_FROM_RE_POST_NEW_TEXT = 2,
    UNRECOGNIZED = -1
}
export interface WebcastMemberMessage_AdminPermissionsEntry {
    key: number;
    value: number;
}
/**
 * @EffectConfig
 * proto.webcast.im.MemberMessage
 * C:\Users\ja\RiderProjects\TikTokProBufferGenerator\Application\output\sources\test.js
 */
export interface WebcastMemberMessage_EffectConfig {
    type: string;
    icon: Image | undefined;
    avatarPos: string;
    text: Text | undefined;
    textIcon: Image | undefined;
    stayTime: number;
    animAssetId: string;
    badge: Image | undefined;
    flexSettingArrayList: string[];
}
export interface WebcastMemberMessage_WaveAlgorithmData {
    algorithmVersion: string;
    isAlgHit: boolean;
    predictScore: string;
    isRewatch: boolean;
    isFollow: boolean;
}
export interface WebcastMemberMessage_EffectConfigBean {
    type: number;
    icon: ImageModel | undefined;
    textKey: Text | undefined;
    badge: ImageModel | undefined;
}
export interface WebcastGiftMessage {
    common: CommonMessageData | undefined;
    giftId: number;
    user: User | undefined;
    repeatEnd: number;
    groupId: string;
    giftDetails: Gift | undefined;
    monitorExtra: string;
    fanTicketCount: string;
    groupCount: number;
    repeatCount: number;
    comboCount: number;
    toUser: User | undefined;
    textEffect: WebcastGiftMessage_TextEffect | undefined;
    incomeTaskgifts: string;
    roomFanTicketCount: string;
    priority: WebcastGiftMessage_GiftIMPriority | undefined;
    logId: string;
    sendType: string;
    publicAreaCommon: PublicAreaCommon | undefined;
    trayDisplayText: Text | undefined;
    bannedDisplayEffects: string;
    mTrayInfo: WebcastGiftMessage_GiftTrayInfo | undefined;
    giftExtra: WebcastGiftMessage_GiftMonitorInfo | undefined;
    colorId: string;
    isFirstSent: boolean;
    displayTextForAnchor: Text | undefined;
    displayTextForAudience: Text | undefined;
    orderId: string;
    giftsInBox: WebcastGiftMessage_GiftsBoxInfo | undefined;
    msgFilter: MsgFilter | undefined;
    lynxExtra: WebcastGiftMessage_LynxGiftExtra[];
    userIdentity: UserIdentity | undefined;
    matchInfo: WebcastGiftMessage_MatchInfo | undefined;
    linkmicGiftExpressionStrategy: LinkmicGiftExpressionStrategy;
    flyingMicResources: WebcastGiftMessage_FlyingMicResources | undefined;
    disableGiftTracking: boolean;
    asset: WebcastGiftMessage_AssetsModel | undefined;
    version: GiftMessageVersion;
    sponsorshipInfo: WebcastGiftMessage_SponsorshipInfo[];
    flyingMicResourcesV2: WebcastGiftMessage_FlyingMicResources | undefined;
    publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
    signature: string;
    signatureVersion: string;
    multiGenerateMessage: boolean;
    toMemberId: string;
    toMemberIdInt: string;
    toMemberNickname: string;
    interactiveGiftInfo: WebcastGiftMessage_InteractiveGiftInfo | undefined;
}
export interface WebcastGiftMessage_InteractiveGiftInfo {
    crossScreenDelay: string;
    crossScreenRole: string;
    ignoreConfig: GiftMessageIgnoreConfig;
    uniqId: string;
    toUserTeamId: string;
}
export interface WebcastGiftMessage_GiftIMPriority {
    queueSizesList: string[];
    selfQueuePriority: string;
    priority: string;
}
export interface WebcastGiftMessage_TextEffect {
    portraitDetail: WebcastGiftMessage_TextEffect_Detail | undefined;
    landscapeDetail: WebcastGiftMessage_TextEffect_Detail | undefined;
}
export interface WebcastGiftMessage_TextEffect_Detail {
    text: Text | undefined;
    textFontSize: number;
    background: Image | undefined;
    start: string;
    duration: string;
    x: number;
    y: number;
    width: number;
    height: number;
    shadowDx: number;
    shadowDy: number;
    shadowRadius: number;
    shadowColor: string;
    strokeColor: string;
    strokeWidth: number;
}
export interface WebcastGiftMessage_GiftTrayInfo {
    mDynamicImg: Image | undefined;
    canMirror: boolean;
    trayNormalBgImg: Image | undefined;
    trayNormalBgColor: string[];
    traySmallBgImg: Image | undefined;
    traySmallBgColor: string[];
    rightTagText: Text | undefined;
    rightTagBgImg: Image | undefined;
    rightTagBgColor: string[];
    trayNameTextColor: string;
    trayDescTextColor: string;
    rightTagJumpSchema: string;
}
export interface WebcastGiftMessage_GiftMonitorInfo {
    anchorId: string;
    profitApiMessageDur: string;
    sendGiftProfitApiStartMs: string;
    sendGiftProfitCoreStartMs: string;
    sendGiftReqStartMs: string;
    sendGiftSendMessageSuccessMs: string;
    sendProfitApiDur: string;
    toUserId: string;
    sendGiftStartClientLocalMs: string;
    fromPlatform: string;
    fromVersion: string;
}
export interface WebcastGiftMessage_MatchInfo {
    critical: string;
    effectCardInUse: boolean;
    multiplierType: MultiplierType;
    multiplierValue: string;
}
export interface WebcastGiftMessage_GiftsBoxInfo {
    gifts: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox[];
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox {
    giftId: string;
    effectId: string;
    colorId: string;
    remainTimes: number;
    asset: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel | undefined;
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel {
    name: string;
    resourceUri: string;
    resourceModel: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_ResourceModel | undefined;
    describe: string;
    id: string;
    resourceType: number;
    md5: string;
    size: string;
    lokiExtraContent: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContent | undefined;
    downloadType: number;
    resourceByteVC1Model: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_ResourceModel | undefined;
    bytevc1Md5: string;
    videoResourceList: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_VideoResource[];
    faceRecognitionArchiveMeta: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_FaceRecognitionMeta | undefined;
    lynxUrlSettingsKey: string;
    downgradeResourceType: number;
    assetExtra: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_AssetExtra | undefined;
    stickerAssetVariant: number;
    immediateDownload: boolean;
    stickerAssetVariantReason: number;
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_AssetExtra {
    effectStarlingKey: string;
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_ResourceModel {
    urlList: string[];
    uri: string;
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContent {
    giftType: string;
    giftDuration: string;
    needScreenShot: boolean;
    ismultiFrame: boolean;
    viewOverlay: string;
    befViewRenderSize: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContent_BEFViewRenderSize | undefined;
    befViewRenderFPS: number;
    befViewFitMode: number;
    modelNames: string;
    requirements: string[];
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContent_BEFViewRenderSize {
    with: number;
    height: number;
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_VideoResource {
    videoTypeName: string;
    videoUrl: WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_ResourceModel | undefined;
    videoMd5: string;
}
export interface WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_FaceRecognitionMeta {
    version: string;
    requirements: string[];
    modelNames: string;
    sdkExtra: string;
}
export interface WebcastGiftMessage_AssetsModel {
    name: string;
    resourceUri: string;
    resourceModel: WebcastGiftMessage_AssetsModel_ResourceModel | undefined;
    describe: string;
    id: string;
    resourceType: number;
    md5: string;
    size: string;
    lokiExtraContent: WebcastGiftMessage_AssetsModel_LokiExtraContent | undefined;
    downloadType: number;
    resourceByteVC1Model: WebcastGiftMessage_AssetsModel_ResourceModel | undefined;
    bytevc1Md5: string;
    videoResourceList: WebcastGiftMessage_AssetsModel_VideoResource[];
    faceRecognitionArchiveMeta: WebcastGiftMessage_AssetsModel_FaceRecognitionMeta | undefined;
    lynxUrlSettingsKey: string;
    downgradeResourceType: number;
    assetExtra: WebcastGiftMessage_AssetsModel_AssetExtra | undefined;
    stickerAssetVariant: number;
    immediateDownload: boolean;
    stickerAssetVariantReason: number;
}
export interface WebcastGiftMessage_AssetsModel_AssetExtra {
    effectStarlingKey: string;
}
export interface WebcastGiftMessage_AssetsModel_ResourceModel {
    urlList: string[];
    uri: string;
}
export interface WebcastGiftMessage_AssetsModel_LokiExtraContent {
    giftType: string;
    giftDuration: string;
    needScreenShot: boolean;
    ismultiFrame: boolean;
    viewOverlay: string;
    befViewRenderSize: WebcastGiftMessage_AssetsModel_LokiExtraContent_BEFViewRenderSize | undefined;
    befViewRenderFPS: number;
    befViewFitMode: number;
    modelNames: string;
    requirements: string[];
}
export interface WebcastGiftMessage_AssetsModel_LokiExtraContent_BEFViewRenderSize {
    with: number;
    height: number;
}
export interface WebcastGiftMessage_AssetsModel_VideoResource {
    videoTypeName: string;
    videoUrl: WebcastGiftMessage_AssetsModel_ResourceModel | undefined;
    videoMd5: string;
}
export interface WebcastGiftMessage_AssetsModel_FaceRecognitionMeta {
    version: string;
    requirements: string[];
    modelNames: string;
    sdkExtra: string;
}
export interface WebcastGiftMessage_LynxGiftExtra {
    id: string;
    code: string;
    type: string;
    params: string[];
    extra: string;
}
export interface WebcastGiftMessage_FlyingMicResources {
    pathImage: Image | undefined;
    micImage: Image | undefined;
    transitionConfigs: WebcastGiftMessage_FlyingMicResources_TransitionConfig[];
}
export interface WebcastGiftMessage_FlyingMicResources_TransitionConfig {
    configId: string;
    resourceImage: Image | undefined;
}
export interface WebcastGiftMessage_SponsorshipInfo {
    giftId: string;
    sponsorId: string;
    lightGiftUp: boolean;
    unlightedGiftIcon: string;
    giftGalleryDetailPageSchemeUrl: string;
    giftGalleryClickSponsor: boolean;
    becomeAllSponsored: boolean;
}
/** Battle start */
export interface WebcastLinkMicBattle {
    common: CommonMessageData | undefined;
    battleId: string;
    battleSetting: BattleSetting | undefined;
    action: BattleAction;
    battleResult: {
        [key: string]: WebcastLinkMicBattle_BattleResult;
    };
    mBattleDisplayConfig: WebcastLinkMicBattle_BattleDisplayConfig | undefined;
    inviteeGiftPermissionType: GiftPermissionType;
    armies: {
        [key: string]: BattleUserArmies;
    };
    anchorInfo: {
        [key: string]: WebcastLinkMicBattle_BattleUserInfo;
    };
    bubbleText: string;
    supportedActions: WebcastLinkMicBattle_SupportedActionsWrapper[];
    battleCombos: {
        [key: string]: WebcastLinkMicBattle_BattleComboInfo;
    };
    teamUsers: WebcastLinkMicBattle_TeamUsersInfo[];
    inviteeGiftPermissionTypes: WebcastLinkMicBattle_BattleInviteeGiftPermission[];
    actionByUserId: string;
    teamBattleResult: WebcastLinkMicBattle_BattleTeamResult[];
    teamArmies: BattleTeamUserArmies[];
    abtestSettings: WebcastLinkMicBattle_BattleABTestSetting[];
    teamMatchCampaign: WebcastLinkMicBattle_TeamMatchCampaign | undefined;
    fuzzyDisplayConfigV2: HighScoreControlCfg | undefined;
}
export interface WebcastLinkMicBattle_BattleResultEntry {
    key: string;
    value: WebcastLinkMicBattle_BattleResult | undefined;
}
export interface WebcastLinkMicBattle_ArmiesEntry {
    key: string;
    value: BattleUserArmies | undefined;
}
export interface WebcastLinkMicBattle_AnchorInfoEntry {
    key: string;
    value: WebcastLinkMicBattle_BattleUserInfo | undefined;
}
export interface WebcastLinkMicBattle_BattleCombosEntry {
    key: string;
    value: WebcastLinkMicBattle_BattleComboInfo | undefined;
}
export interface WebcastLinkMicBattle_TeamMatchCampaign {
    bestTeammateRelation: WebcastLinkMicBattle_TeamMatchCampaign_BestTeammateRelation[];
    startSfxTeamId: string[];
    hasTeamMatchMvpSfx: boolean;
}
export interface WebcastLinkMicBattle_TeamMatchCampaign_BestTeammateRelation {
    userId: string;
    bestTeammateId: string;
}
export interface WebcastLinkMicBattle_BattleTeamResult {
    teamId: string;
    teamUsers: BattleTeamUser[];
    result: number;
    totalScore: string;
}
export interface WebcastLinkMicBattle_BattleInviteeGiftPermission {
    userId: string;
    giftPermissionType: number;
}
export interface WebcastLinkMicBattle_SupportedActionsWrapper {
    actionType: string;
}
export interface WebcastLinkMicBattle_TeamUsersInfo {
    teamId: string;
    userIds: string[];
}
export interface WebcastLinkMicBattle_BattleComboInfo {
    userId: string;
    comboStatus: string;
    comboCount: string;
    comboIconUrl: string;
    comboType: number;
    comboRuleGuideSchema: string;
}
export interface WebcastLinkMicBattle_BattleResult {
    userId: string;
    result: Result;
    score: string;
}
export interface WebcastLinkMicBattle_BattleDisplayConfig {
    threshold: number;
    text: string;
    diffThreshold: number;
    diffText: string;
    exemptStrategy: WebcastLinkMicBattle_BattleDisplayConfig_ExemptStrategy | undefined;
}
export interface WebcastLinkMicBattle_BattleDisplayConfig_ExemptStrategy {
    exemptBothHost: boolean;
    exemptAudienceTop: number;
}
export interface WebcastLinkMicBattle_BattleUserInfo {
    user: WebcastLinkMicBattle_BattleUserInfo_BattleBaseUserInfo | undefined;
    tags: WebcastLinkMicBattle_BattleUserInfo_BattleRivalTag[];
}
export interface WebcastLinkMicBattle_BattleUserInfo_BattleBaseUserInfo {
    userId: string;
    nickName: string;
    avatarThumb: Image | undefined;
    displayId: string;
}
export interface WebcastLinkMicBattle_BattleUserInfo_BattleRivalTag {
    bgImage: Image | undefined;
    iconImage: Image | undefined;
    content: string;
}
export interface WebcastLinkMicBattle_BattleABTestSetting {
    uid: string;
    abTestList: WebcastLinkMicBattle_BattleABTestSetting_BattleABTestList | undefined;
}
export interface WebcastLinkMicBattle_BattleABTestSetting_BattleABTestList {
    abTestList: WebcastLinkMicBattle_BattleABTestSetting_BattleABTestList_BattleABTest[];
}
export interface WebcastLinkMicBattle_BattleABTestSetting_BattleABTestList_BattleABTest {
    abTestType: BattleABTestType;
    group: number;
}
/** Battle status */
export interface WebcastLinkMicArmies {
    common: CommonMessageData | undefined;
    battleId: string;
    battleItems: {
        [key: string]: BattleUserArmies;
    };
    channelId: string;
    giftSentTime: string;
    scoreUpdateTime: string;
    battleStatus: TriggerReason;
    fromUserId: string;
    giftId: string;
    giftCount: number;
    gifIconImage: Image | undefined;
    totalDiamondCount: number;
    repeatCount: number;
    teamArmies: BattleTeamUserArmies[];
    triggerCriticalStrike: boolean;
    hasTeamMatchMvpSfx: boolean;
    logId: string;
    battleSettings: BattleSetting | undefined;
    fuzzyDisplayConfigV2: HighScoreControlCfg | undefined;
}
export interface WebcastLinkMicArmies_BattleItemsEntry {
    key: string;
    value: BattleUserArmies | undefined;
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
    common: CommonMessageData | undefined;
    user: User | undefined;
    shareType: string;
    action: string;
    shareTarget: string;
    followCount: number;
    shareDisplayStyle: string;
    shareCount: number;
    publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
    signature: string;
    signatureVersion: string;
    showDurationMs: string;
}
/** Like event (is only sent from time to time, not with every like) */
export interface WebcastLikeMessage {
    common: CommonMessageData | undefined;
    likeCount: number;
    totalLikeCount: number;
    color: number;
    user: User | undefined;
    icon: string;
    icons: Image[];
    specifiedDisplayText: SpecifiedDisplayText[];
    effectCnt: string;
    likeEffect: LikeEffect[];
    publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
    roomMessageHeatLevel: string;
}
export interface SpecifiedDisplayText {
    uid: string;
    displayText: Text | undefined;
}
export interface LikeEffect {
    version: string;
    effectCnt: string;
    effectIntervalMs: string;
    level: string;
}
/** New question event */
export interface WebcastQuestionNewMessage {
    common: CommonMessageData | undefined;
    details: WebcastQuestionNewMessage_Question | undefined;
}
export interface WebcastQuestionNewMessage_Question {
    questionId: string;
    questionText: string;
    answerStatus: number;
    createTime: string;
    user: User | undefined;
    createFrom: number;
    answerFrom: number;
}
/** Contains UI information */
export interface WebcastMessageEventDetails {
    displayType: string;
    label: string;
}
/** Source: Co-opted https://github.com/zerodytrash/TikTok-Livestream-Chat-Connector/issues/19#issuecomment-1074150342 */
export interface WebcastLiveIntroMessage {
    common: CommonMessageData | undefined;
    roomId: string;
    auditStatus: AuditStatus;
    description: string;
    host: User | undefined;
    introMode: number;
    badges: BadgeStruct[];
    language: string;
}
export interface SystemMessage {
    description: string;
}
export interface RankItem {
    colour: string;
    id: string;
}
export interface WebcastHourlyRankMessage {
    data: WebcastHourlyRankMessage_RankContainer | undefined;
    common: CommonMessageData | undefined;
    data2: number;
}
export interface WebcastHourlyRankMessage_RankContainer {
    data1: number;
    rankingData: WebcastHourlyRankMessage_RankContainer_RankingData | undefined;
    data2: number;
    rankings: Ranking | undefined;
    rankingData2: WebcastHourlyRankMessage_RankContainer_RankingData2 | undefined;
    data3: number;
    data4: number;
}
export interface WebcastHourlyRankMessage_RankContainer_RankingData {
    data1: number;
    rankdata: Ranking | undefined;
    data2: string;
}
export interface WebcastHourlyRankMessage_RankContainer_RankingData2 {
    data1: number;
    data2: number;
    rankdata: Ranking | undefined;
    data3: string;
    data4: number;
    data5: number;
}
export interface EmoteDetails {
    emoteId: string;
    image: EmoteImage | undefined;
}
export interface EmoteImage {
    imageUrl: string;
}
export interface WebcastEnvelopeMessage {
    common: CommonMessageData | undefined;
    envelopeInfo: WebcastEnvelopeMessage_EnvelopeInfo | undefined;
    display: EnvelopeDisplay;
}
export interface WebcastEnvelopeMessage_EnvelopeInfo {
    envelopeId: string;
    businessType: EnvelopeBusinessType;
    envelopeIdc: string;
    sendUserName: string;
    diamondCount: number;
    peopleCount: number;
    unpackAt: number;
    sendUserId: string;
    sendUserAvatar: Image | undefined;
    createAt: string;
    roomId: string;
    followShowStatus: EnvelopeFollowShowStatus;
    skinId: number;
}
export interface TreasureBoxData {
    coins: number;
    canOpen: number;
    timestamp: string;
}
/** New Subscriber message */
export interface WebcastSubNotifyMessage {
    common: CommonMessageData | undefined;
    user: User | undefined;
    exhibitionType: ExhibitionType;
    subMonth: string;
    subscribeType: SubscribeType;
    oldSubscribeStatus: OldSubscribeStatus;
    subscribeMessageType?: MessageType | undefined;
    subscribingStatus: SubscribingStatus;
    isSend: boolean;
    isCustom: boolean;
    giftSource: GiftSource;
    messageDisplayStyle: MessageDisplayStyle;
    publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
    packageId: string;
    eventTracking: WebcastSubNotifyMessage_EventTracking | undefined;
}
export interface WebcastSubNotifyMessage_EventTracking {
    giftSubSenderId: string;
    giftSubReceiverId: string;
    anchorId: string;
    giftSubOrderCreateTime: string;
}
export interface FollowInfo {
    followingCount: number;
    followerCount: number;
    followStatus: number;
    pushStatus: number;
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
/** Websocket acknowledgment message */
export interface WebSocketAckMessage {
    id: string;
    type: string;
}
/** Message representing the room info */
export interface HeartbeatFrameRoomInfo {
    roomId: string;
}
/** Message representing metadata field 6 */
export interface HeartbeatFrameMetadataField6 {
    unknown1: number;
}
/** Message representing metadata field 7 */
export interface HeartbeatFrameMetadataField7 {
    unknown1: number;
}
/** Heartbeat keepalive message */
export interface HeartbeatFrame {
    metadataField6: HeartbeatFrameMetadataField6 | undefined;
    metadataField7: HeartbeatFrameMetadataField7 | undefined;
    roomInfo: HeartbeatFrameRoomInfo | undefined;
}
/**
 * TODO: In a future release, set client_enter=1 on both /im/fetch and WS url; this is what the web client does
 * Didn't do it because it requires an agent update & sign server update
 *         // Create a room enter container
 *        const container = ImEnterRoomMessagePushFrame.fromPartial({
 *            payloadType: "im_enter_room",
 *            payload: {
 *                roomId: roomId,
 *                unknown1: 12,
 *                role: "audience",
 *                cursor: cursor,
 *                unknown2: 0,
 *                unknown3: "0",
 *                unknown4: 0
 *            },
 *            metadata: {
 *                unknown1: 98
 *            }
 *        });
 */
export interface ImEnterRoomMessagePushFrame {
    metadata: ImEnterRoomMessagePushFrame_Metadata | undefined;
    /** "im_enter_room" */
    payloadType: string;
    payload: ImEnterRoomMessagePushFrame_ImEnterRoomMessage | undefined;
}
export interface ImEnterRoomMessagePushFrame_Metadata {
    /** "98" */
    unknown1: number;
}
export interface ImEnterRoomMessagePushFrame_ImEnterRoomMessage {
    /** Room ID */
    roomId: string;
    /** "12" */
    unknown1: number;
    /** "audience" */
    role: string;
    /** Cursor */
    cursor: string;
    /** "0" */
    unknown2?: number | undefined;
    /** "0" */
    unknown3: string;
    /** "0" */
    unknown4?: number | undefined;
}
export interface WebcastBarrageMessage {
    common: CommonMessageData | undefined;
    event: WebcastBarrageMessage_BarrageEvent | undefined;
    msgType?: WebcastBarrageMessage_BarrageType | undefined;
    icon: ImageModel | undefined;
    duration: string;
    backGround: ImageModel | undefined;
    rightIcon: ImageModel | undefined;
    displayConfig: number;
    galleryGiftId: string;
    useMarquee: boolean;
    showType?: WebcastBarrageMessage_ShowType | undefined;
    renderType?: WebcastBarrageMessage_RenderType | undefined;
    leftIconDisplayType?: WebcastBarrageMessage_IconDisplayType | undefined;
    ribbonAnimation: ImageModel | undefined;
    hybridUrl: string;
    schema: string;
    subType: string;
    privilegeLogExtra: PrivilegeLogExtra | undefined;
    content: Text | undefined;
    scene: Scene;
    control: WebcastBarrageMessage_DisplayControl | undefined;
    rightLabel: WebcastBarrageMessage_RightLabel | undefined;
    badge: BadgeStruct | undefined;
    animationData: WebcastBarrageMessage_AnimationData | undefined;
    commonBarrageContent: Text | undefined;
    userGradeParam: WebcastBarrageMessage_BarrageTypeUserGradeParam | undefined;
    fansLevelParam: WebcastBarrageMessage_BarrageTypeFansLevelParam | undefined;
    subscribeGiftParam: WebcastBarrageMessage_BarrageTypeSubscribeGiftParam | undefined;
    giftGalleryParams: WebcastBarrageMessage_BarrageTypeGiftGalleryParam | undefined;
}
export declare enum WebcastBarrageMessage_BarrageType {
    BARRAGE_TYPE_UNKNOWN = 0,
    BARRAGE_TYPE_E_COM_ORDERING = 1,
    BARRAGE_TYPE_E_COM_BUYING = 2,
    BARRAGE_TYPE_NORMAL = 3,
    BARRAGE_TYPE_SUBSCRIBE = 4,
    BARRAGE_TYPE_EVENT_VIEW = 5,
    BARRAGE_TYPE_EVENT_REGISTERED = 6,
    BARRAGE_TYPE_SUBSCRIBE_GIFT = 7,
    BARRAGE_TYPE_USER_UPGRADE = 8,
    BARRAGE_TYPE_GRADE_USER_ENTRANCE_NOTIFICATION = 9,
    BARRAGE_TYPE_FANS_LEVEL_UPGRADE = 10,
    BARRAGE_TYPE_FANS_LEVEL_ENTRANCE = 11,
    BARRAGE_TYPE_GAME_PARTNERSHIP = 12,
    BARRAGE_TYPE_GIFT_GALLERY = 13,
    BARRAGE_TYPE_E_COM_BOUGHT = 14,
    BARRAGE_TYPE_COMMON_BARRAGE = 100,
    UNRECOGNIZED = -1
}
export declare enum WebcastBarrageMessage_ShowType {
    SHOW_TYPE_NORMAL = 0,
    SHOW_TYPE_FADE_IN_OUT = 1,
    UNRECOGNIZED = -1
}
export declare enum WebcastBarrageMessage_RenderType {
    RENDER_TYPE_NATIVE = 0,
    RENDER_TYPE_HYBRID = 1,
    RENDER_TYPE_ALPHA = 2,
    UNRECOGNIZED = -1
}
export declare enum WebcastBarrageMessage_IconDisplayType {
    ICON_DISPLAY_TYPE_IMAGE = 0,
    ICON_DISPLAY_TYPE_BADGE = 1,
    UNRECOGNIZED = -1
}
export interface WebcastBarrageMessage_BarrageEvent {
    eventName: string;
    params: {
        [key: string]: string;
    };
}
export interface WebcastBarrageMessage_BarrageEvent_ParamsEntry {
    key: string;
    value: string;
}
export interface WebcastBarrageMessage_BarrageTypeUserGradeParam {
    currentGrade: number;
    displayConfig: number;
    userId: string;
    user: User | undefined;
}
export interface WebcastBarrageMessage_BarrageTypeFansLevelParam {
    currentGrade: number;
    displayConfig: number;
    user: User | undefined;
}
export interface WebcastBarrageMessage_BarrageTypeSubscribeGiftParam {
    giftSubCount: string;
    showGiftSubCount: boolean;
}
export interface WebcastBarrageMessage_AnimationData {
    geckoChannelName: string;
    fileName: string;
    height: string;
    width: string;
    rightOffset: string;
}
export interface WebcastBarrageMessage_BarrageTypeGiftGalleryParam {
    fromUserId: string;
    toUserId: string;
}
export interface WebcastBarrageMessage_DisplayControl {
    priority: number;
    duration: string;
    targetGroupShowRst: {
        [key: number]: WebcastBarrageMessage_DisplayControl_ShowResult;
    };
    horizontalTriggerType: HorizontalOnclickTriggerType;
}
export interface WebcastBarrageMessage_DisplayControl_TargetGroupShowRstEntry {
    key: number;
    value: WebcastBarrageMessage_DisplayControl_ShowResult | undefined;
}
export interface WebcastBarrageMessage_DisplayControl_ShowResult {
    banned: boolean;
}
export interface WebcastBarrageMessage_RightLabel {
    backgroundColor: string;
    content: Text | undefined;
    height: string;
}
export interface WebcastPushFrame {
    seqId: string;
    id: string;
    service: string;
    method: string;
    headers: {
        [key: string]: string;
    };
    payloadEncoding: string;
    type: string;
    binary: Uint8Array;
}
export interface WebcastPushFrame_HeadersEntry {
    key: string;
    value: string;
}
/** Response from TikTokServer. Container for Messages */
export interface ProtoMessageFetchResult {
    messages: BaseProtoMessage[];
    cursor: string;
    fetchInterval: string;
    now: string;
    internalExt: string;
    fetchType: number;
    wsParams: {
        [key: string]: string;
    };
    heartBeatDuration: string;
    needsAck: boolean;
    wsUrl: string;
    isFirst: boolean;
    historyCommentCursor: string;
    historyNoMore: boolean;
}
export interface ProtoMessageFetchResult_WsParamsEntry {
    key: string;
    value: string;
}
export interface BaseProtoMessage {
    type: string;
    payload: Uint8Array;
    msgId: string;
    msgType: number;
    offset: string;
    isHistory: boolean;
}
export interface WebcastRoomMessage {
    common: CommonMessageData | undefined;
    content: string;
    supportLandscape: boolean;
    source: string;
    icon: Image | undefined;
    scene: Scene;
    isWelcome: boolean;
    publicAreaCommon: PublicAreaMessageCommon | undefined;
    showDurationMs: string;
    subScene: string;
}
/** Closed Captioning for Video */
export interface WebcastCaptionMessage {
    common: CommonMessageData | undefined;
    timestampMs: string;
    durationMs: string;
    content: WebcastCaptionMessage_CaptionContent[];
    sentenceId: string;
    sequenceId: string;
    definite: boolean;
}
export interface WebcastCaptionMessage_CaptionContent {
    lang: string;
    content: string;
}
/** System-Control Message from Room (e.g. Host ended Stream) */
export interface WebcastControlMessage {
    common: CommonMessageData | undefined;
    action: ControlAction;
    tips: string;
    extra: WebcastControlMessage_Extra | undefined;
    perceptionDialog: WebcastControlMessage_PerceptionDialogInfo | undefined;
    perceptionAudienceText: Text | undefined;
    punishInfo: PunishEventInfo | undefined;
    floatText: Text | undefined;
    floatStyle: number;
}
/**
 * @Extra
 * proto.webcast.im.ControlMessage
 */
export interface WebcastControlMessage_Extra {
    banInfoUrl: string;
    reasonNo: string;
    title: Text | undefined;
    violationReason: Text | undefined;
    content: Text | undefined;
    gotItButton: Text | undefined;
    banDetailButton: Text | undefined;
    source: string;
}
export interface WebcastControlMessage_PerceptionDialogInfo {
    iconType: PerceptionDialogIconType;
    title: Text | undefined;
    subTitle: Text | undefined;
    adviceActionText: Text | undefined;
    defaultActionText: Text | undefined;
    violationDetailUrl: string;
    scene: Scene;
    targetUserId: string;
    targetRoomId: string;
    countDownTime: string;
    showFeedback: boolean;
    feedbackOptions: WebcastControlMessage_PerceptionDialogInfo_PerceptionFeedbackOption[];
    policyTip: string;
    appealPopup: number;
}
export interface WebcastControlMessage_PerceptionDialogInfo_PerceptionFeedbackOption {
    id: string;
    contentKey: string;
}
export interface WebcastGoalUpdateMessage {
    common: CommonMessageData | undefined;
    indicator: LiveStreamGoalIndicator | undefined;
    goal: LiveStreamGoal | undefined;
    contributorId: string;
    contributorAvatar: Image | undefined;
    contributorDisplayId: string;
    contributeSubgoal: WebcastGoalUpdateMessage_LiveStreamSubGoal | undefined;
    contributeCount: string;
    contributeScore: string;
    giftRepeatCount: string;
    contributorIdStr: string;
    pin: boolean;
    unpin: boolean;
    pinInfo: WebcastGoalUpdateMessage_GoalPinInfo | undefined;
    updateSource: GoalMessageSource;
    goalExtra: string;
}
export interface WebcastGoalUpdateMessage_LiveStreamSubGoal {
    type: number;
    id: string;
    progress: string;
    target: string;
    gift: WebcastGoalUpdateMessage_LiveStreamSubGoal_LiveStreamSubGoalGift | undefined;
    idStr: string;
    pinInfo: WebcastGoalUpdateMessage_LiveStreamSubGoal_SubGoalPinInfo | undefined;
    source: number;
    recommendedText: string;
    recommendedCommon: string;
}
export interface WebcastGoalUpdateMessage_LiveStreamSubGoal_LiveStreamSubGoalGift {
    name: string;
    icon: Image | undefined;
    diamondCount: string;
    type: number;
}
export interface WebcastGoalUpdateMessage_LiveStreamSubGoal_SubGoalPinInfo {
    pinStartTime: string;
    pinEndTime: string;
    pinReadyTime: string;
}
export interface WebcastGoalUpdateMessage_GoalPinInfo {
    pin: boolean;
    unpin: boolean;
    pinEndTime: string;
    subGoalId: string;
    subGoalIdStr: string;
}
/** Message related to Chat-moderation? */
export interface WebcastImDeleteMessage {
    common: CommonMessageData | undefined;
    deleteMsgIdsList: string[];
    deleteUserIdsList: string[];
}
export interface WebcastInRoomBannerMessage {
    common: CommonMessageData | undefined;
    data: {
        [key: string]: string;
    };
    position: number;
    actionType: number;
}
export interface WebcastInRoomBannerMessage_DataEntry {
    key: string;
    value: string;
}
export interface WebcastRankUpdateMessage {
    common: CommonMessageData | undefined;
    updatesList: WebcastRankUpdateMessage_RankUpdate[];
    /** @warning Enum not found, should be GroupType */
    groupType: string;
    priority: string;
    tabsList: WebcastRankUpdateMessage_RankTabInfo[];
    isAnimationLoopPlay: boolean;
    animationLoopForOff: boolean;
    unionAnimation: WebcastRankUpdateMessage_UnionAnimationInfo[];
    tabInfo: WebcastRankUpdateMessage_RankListTabInfo[];
}
export interface WebcastRankUpdateMessage_UnionAnimationInfo {
    unionType: UnionAnimationInfoType;
    rankTypeArray: ProfitRankType;
    supportedVersion: string;
}
export interface WebcastRankUpdateMessage_RankListTabInfo {
    tabs: WebcastRankUpdateMessage_RankTabInfo[];
    supportedVersion: string;
}
export interface WebcastRankUpdateMessage_RankTabInfo {
    rankType: ProfitRankType;
    title: string;
    titleText: Text | undefined;
    listLynxType: string;
}
/**
 * @RankUpdate
 * proto.webcast.im.RankUpdateMessage
 */
export interface WebcastRankUpdateMessage_RankUpdate {
    /** @warning Enum not found, should be RankType */
    rankType: string;
    ownerRank: string;
    defaultContent: Text | undefined;
    showEntranceAnimation: boolean;
    countdown: string;
    /** @warning Enum not found, should be RelatedTabRankType */
    relatedTabRankType: string;
    /** @warning Enum not found, should be RequestFirstShowType */
    requestFirstShowType: string;
    supportedVersion: string;
    owneronrank: boolean;
}
/** --- HandMade -- */
export interface WebcastPollMessage {
    common: CommonMessageData | undefined;
    messageType: MessageType;
    pollId: string;
    startContent: PollStartContent | undefined;
    endContent: PollEndContent | undefined;
    updateContent: PollUpdateVotesContent | undefined;
    pollKind: PollKind;
    pollBasicInfo: WebcastPollMessage_PollBasicInfo | undefined;
    templateContent: WebcastPollMessage_TemplateContent | undefined;
}
export interface WebcastPollMessage_TemplateContent {
    templateId: string;
    templateIdStr: string;
    status: PollTemplateStatus;
    pollKind: PollKind;
    appealStatus: PollAppealStatus;
    violationIdStr: string;
}
export interface WebcastPollMessage_PollBasicInfo {
    pollSponsor: string;
    giftId: string;
    title: string;
    isSuggestedQuestion: boolean;
    userCnt: string;
    gift: Gift | undefined;
    pollIdStr: string;
    suggestedQuestionKey: string;
    pollDuration: string;
    timeRemain: string;
    pollIndex: string;
    templateId: string;
}
export interface WebcastRankTextMessage {
    common: CommonMessageData | undefined;
    scene: RankTestMessageScene;
    ownerIdxBeforeUpdate: string;
    ownerIdxAfterUpdate: string;
    selfGetBadgeMsg: Text | undefined;
    otherGetBadgeMsg: Text | undefined;
    curUserId: string;
}
export interface WebcastLinkMicBattlePunishFinish {
    common: CommonMessageData | undefined;
    channelId: string;
    opUid: string;
    reason: Reason;
    battleId: string;
    battleSettings: BattleSetting | undefined;
}
export interface WebcastLinkmicBattleTaskMessage {
    common: CommonMessageData | undefined;
    battleTaskMessageType: BattleTaskMessageType;
    taskStart: WebcastLinkmicBattleTaskMessage_BattleTaskStart | undefined;
    taskUpdate: WebcastLinkmicBattleTaskMessage_BattleTaskUpdate | undefined;
    taskSettle: WebcastLinkmicBattleTaskMessage_BattleTaskSettle | undefined;
    rewardSettle: WebcastLinkmicBattleTaskMessage_BattleRewardSettle | undefined;
    battleId: string;
}
export interface WebcastLinkmicBattleTaskMessage_BattlePrompt {
    promptKey: string;
    promptElements: WebcastLinkmicBattleTaskMessage_BattlePrompt_BattlePromptElem[];
}
export interface WebcastLinkmicBattleTaskMessage_BattlePrompt_BattlePromptElem {
    promptFieldKey: string;
    promptFieldValue: string;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskStart {
    battleBonusConfig: WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig | undefined;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig {
    previewStartTime: string;
    previewPeriodConfig: WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_PreviewPeriod[];
    taskPeriodConfig: WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_TaskPeriodConfig | undefined;
    rewardPeriodConfig: WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_RewardPeriodConfig | undefined;
    taskGiftGuide: {
        [key: string]: WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_BattleTaskGiftAmountGuide;
    };
    previewStartTimestamp: string;
    previewClickActionSchemaUrl: string;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_TaskGiftGuideEntry {
    key: string;
    value: WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_BattleTaskGiftAmountGuide | undefined;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_PreviewPeriod {
    duration: string;
    promot: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
    icon: Image | undefined;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_TaskPeriodConfig {
    taskStartTime: string;
    duration: string;
    targetStartTimestamp: string;
    clickAction: number;
    clickToastPrompt: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
    promptType: number;
    taskStaticPrompt: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
    progressTarget: string;
    targetType: number;
    icon: Image | undefined;
    clickActionSchemaUrl: string;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_RewardPeriodConfig {
    rewardStartTime: string;
    duration: string;
    rewardMultiple: number;
    rewardStartTimestamp: string;
    rewardPraparePrompt: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
    rewardingPrompt: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
    clickPrompt: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_BattleTaskGiftAmountGuide {
    guidePrompt: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
    promptType: number;
    disappearDuration: number;
    iconImage: Image | undefined;
    giftImage: Image | undefined;
    recommendGiftId: string;
    recommendGiftCount: number;
    guideContent: Text | undefined;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskUpdate {
    taskProgress: string;
    fromUserUid: string;
    promptKey: string;
    logId: string;
}
export interface WebcastLinkmicBattleTaskMessage_BattleTaskSettle {
    taskResult: WebcastLinkmicBattleTaskMessage_BattleTaskSettle_Result;
    rewardStartTime: string;
    rewardStartTimestamp: string;
}
export declare enum WebcastLinkmicBattleTaskMessage_BattleTaskSettle_Result {
    RESULT_SUCCEED = 0,
    RESULT_FAILED = 1,
    RESULT_BOTH_SUCCEED = 2,
    UNRECOGNIZED = -1
}
export interface WebcastLinkmicBattleTaskMessage_BattleRewardSettle {
    rewardSettlePrompt: WebcastLinkmicBattleTaskMessage_BattlePrompt | undefined;
    status: RewardStatus;
}
export interface WebcastLinkMicFanTicketMethod {
    common: CommonMessageData | undefined;
    FanTicketRoomNotice: FanTicketRoomNoticeContent | undefined;
}
export interface WebcastLinkMicMethod {
    common: CommonMessageData | undefined;
    messageType: MessageType;
    accessKey: string;
    anchorLinkmicId: string;
    userId: string;
    fanTicket: string;
    totalLinkMicFanTicket: string;
    channelId: string;
    layout: string;
    vendor: string;
    dimension: string;
    theme: string;
    inviteUid: string;
    reply: number;
    duration: number;
    matchType: number;
    win: boolean;
    prompts: string;
    toUserId: string;
    tips: string;
    startTimeMs: string;
    confluenceType: number;
    fromRoomId: string;
    inviteType: number;
    subType: string;
    rtcExtInfo: string;
    appId: string;
    appSign: string;
    anchorLinkMicIdStr: string;
    rivalAnchorId: string;
    rivalLinkmicId: number;
    rivalLinkmicIdStr: string;
    shouldShowPopup: boolean;
    rtcJoinChannel: boolean;
    fanTicketType: number;
}
export interface WebcastUnauthorizedMemberMessage {
    common: CommonMessageData | undefined;
    action: number;
    nickNamePrefix: Text | undefined;
    nickName: string;
    enterText: Text | undefined;
    publicAreaCommon: PublicAreaMessageCommon | undefined;
}
export interface WebcastMsgDetectMessage {
    common: CommonMessageData | undefined;
    detectType: number;
    triggerCondition: WebcastMsgDetectMessage_TriggerCondition | undefined;
    timeInfo: WebcastMsgDetectMessage_TimeInfo | undefined;
    triggerBy: number;
    fromRegion: string;
}
export interface WebcastMsgDetectMessage_TimeInfo {
    clientStartMs: string;
    apiRecvTimeMs: string;
    apiSendToGoimMs: string;
}
export interface WebcastMsgDetectMessage_TriggerCondition {
    uplinkDetectHttp: boolean;
    uplinkDetectWebSocket: boolean;
    detectP2PMsg: boolean;
    detectRoomMsg: boolean;
    httpOptimize: boolean;
}
export interface WebcastOecLiveShoppingMessage {
    common: CommonMessageData | undefined;
    data1: number;
    shopData: WebcastOecLiveShoppingMessage_LiveShoppingData | undefined;
    /** Uses index 1, 2 & 3 */
    shopTimings: TimeStampContainer | undefined;
    details: WebcastOecLiveShoppingMessage_LiveShoppingDetails | undefined;
}
export interface WebcastOecLiveShoppingMessage_LiveShoppingData {
    title: string;
    /** $55.99 */
    priceString: string;
    imageUrl: string;
    shopUrl: string;
    data1: string;
    /** "Shopify" */
    shopName: string;
    data2: string;
    shopUrl2: string;
    data3: string;
    data4: string;
}
export interface WebcastOecLiveShoppingMessage_LiveShoppingDetails {
    id1: string;
    data1: string;
    data2: number;
    timestamp: string;
    data: ValueLabel | undefined;
}
/** Host Pins comment to stream */
export interface WebcastRoomPinMessage {
    common: CommonMessageData | undefined;
    chatMessage?: WebcastChatMessage | undefined;
    socialMessage?: WebcastSocialMessage | undefined;
    giftMessage?: WebcastGiftMessage | undefined;
    memberMessage?: WebcastMemberMessage | undefined;
    likeMessage?: WebcastLikeMessage | undefined;
    method: string;
    pinTime: string;
    operator: User | undefined;
    action: number;
    displayDuration: string;
    pinId: string;
    ecStreamerKey: string;
}
export interface WebcastLinkMessage {
    common: CommonMessageData | undefined;
    MessageType: LinkMessageType;
    LinkerId: string;
    Scene: Scene;
    InviteContent: LinkerInviteContent | undefined;
    ReplyContent: LinkerReplyContent | undefined;
    CreateContent: LinkerCreateContent | undefined;
    CloseContent: LinkerCloseContent | undefined;
    EnterContent: LinkerEnterContent | undefined;
    LeaveContent: LinkerLeaveContent | undefined;
    CancelContent: LinkerCancelContent | undefined;
    KickOutContent: LinkerKickOutContent | undefined;
    LinkedListChangeContent: LinkerLinkedListChangeContent | undefined;
    UpdateUserContent: LinkerUpdateUserContent | undefined;
    WaitingListChangeContent: LinkerWaitingListChangeContent | undefined;
    MuteContent: LinkerMuteContent | undefined;
    RandomMatchContent: LinkerRandomMatchContent | undefined;
    UpdateUserSettingContent: LinkerUpdateUserSettingContent | undefined;
    MicIdxUpdateContent: LinkerMicIdxUpdateContent | undefined;
    ListChangeContent: LinkerListChangeContent | undefined;
    CohostListChangeContent: CohostListChangeContent | undefined;
    MediaChangeContent: LinkerMediaChangeContent | undefined;
    AcceptNoticeContent: LinkerAcceptNoticeContent | undefined;
    SysKickOutContent: LinkerSysKickOutContent | undefined;
    UserToastContent: LinkmicUserToastContent | undefined;
    extra: string;
    expireTimestamp: string;
    transferExtra: string;
}
/** @WebcastLinkLayerMessage */
export interface WebcastLinkLayerMessage {
    common: CommonMessageData | undefined;
    messageType: MessageType;
    channelId: string;
    scene: Scene;
    source: string;
    centerizedIdc: string;
    rtcRoomId: string;
    createChannelContent: CreateChannelContent | undefined;
    listChangeContent: ListChangeContent | undefined;
    inviteContent: InviteContent | undefined;
    applyContent: ApplyContent | undefined;
    permitApplyContent: PermitApplyContent | undefined;
    replyInviteContent: ReplyInviteContent | undefined;
    kickOutContent: KickOutContent | undefined;
    cancelApplyContent: CancelApplyContent | undefined;
    cancelInviteContent: CancelInviteContent | undefined;
    leaveContent: LeaveContent | undefined;
    finishContent: FinishChannelContent | undefined;
    joinDirectContent: JoinDirectContent | undefined;
    joinGroupContent: JoinGroupContent | undefined;
    permitGroupContent: PermitJoinGroupContent | undefined;
    cancelGroupContent: CancelJoinGroupContent | undefined;
    leaveGroupContent: LeaveJoinGroupContent | undefined;
    p2pGroupChangeContent: P2PGroupChangeContent | undefined;
    groupChangeContent: GroupChangeContent | undefined;
    businessContent: BusinessContent | undefined;
}
/** @RoomVerifyMessage */
export interface RoomVerifyMessage {
    common: CommonMessageData | undefined;
    action: number;
    content: string;
    noticeType: string;
    closeRoom: boolean;
}
export declare const CommonMessageDataDecoder: MessageFns<CommonMessageData>;
export declare const CommonMessageData_LiveMessageSEIDecoder: MessageFns<CommonMessageData_LiveMessageSEI>;
export declare const CommonMessageData_LiveMessageIDDecoder: MessageFns<CommonMessageData_LiveMessageID>;
export declare const TextDecoder: MessageFns<Text>;
export declare const Text_TextPieceDecoder: MessageFns<Text_TextPiece>;
export declare const Text_TextFormatDecoder: MessageFns<Text_TextFormat>;
export declare const Text_TextPieceGiftDecoder: MessageFns<Text_TextPieceGift>;
export declare const Text_TextPiecePatternRefDecoder: MessageFns<Text_TextPiecePatternRef>;
export declare const Text_TextPieceUserDecoder: MessageFns<Text_TextPieceUser>;
export declare const Text_PatternRefDecoder: MessageFns<Text_PatternRef>;
export declare const ImageDecoder: MessageFns<Image>;
export declare const Image_ContentDecoder: MessageFns<Image_Content>;
export declare const BadgeStructDecoder: MessageFns<BadgeStruct>;
export declare const BadgeStruct_CombineBadgeDecoder: MessageFns<BadgeStruct_CombineBadge>;
export declare const BadgeStruct_ArrowConfigDecoder: MessageFns<BadgeStruct_ArrowConfig>;
export declare const BadgeStruct_ProfileContentDecoder: MessageFns<BadgeStruct_ProfileContent>;
export declare const BadgeStruct_ProjectionConfigDecoder: MessageFns<BadgeStruct_ProjectionConfig>;
export declare const BadgeStruct_NumberConfigDecoder: MessageFns<BadgeStruct_NumberConfig>;
export declare const BadgeStruct_ProfileCardPanelDecoder: MessageFns<BadgeStruct_ProfileCardPanel>;
export declare const BadgeStruct_CombineBadgeBackgroundDecoder: MessageFns<BadgeStruct_CombineBadgeBackground>;
export declare const BadgeStruct_ImageBadgeDecoder: MessageFns<BadgeStruct_ImageBadge>;
export declare const BadgeStruct_TextBadgeDecoder: MessageFns<BadgeStruct_TextBadge>;
export declare const BadgeStruct_IconConfigDecoder: MessageFns<BadgeStruct_IconConfig>;
export declare const BadgeStruct_StringBadgeDecoder: MessageFns<BadgeStruct_StringBadge>;
export declare const BadgeStruct_PaddingInfoDecoder: MessageFns<BadgeStruct_PaddingInfo>;
export declare const GiftDecoder: MessageFns<Gift>;
export declare const Gift_GiftPanelBannerDecoder: MessageFns<Gift_GiftPanelBanner>;
export declare const Gift_BatchGiftInfoDecoder: MessageFns<Gift_BatchGiftInfo>;
export declare const Gift_CrossScreenEffectInfoDecoder: MessageFns<Gift_CrossScreenEffectInfo>;
export declare const Gift_CrossScreenEffectInfo_SingleActionEffectIdsEntryDecoder: MessageFns<Gift_CrossScreenEffectInfo_SingleActionEffectIdsEntry>;
export declare const Gift_CrossScreenEffectInfo_ActionEffectIdsEntryDecoder: MessageFns<Gift_CrossScreenEffectInfo_ActionEffectIdsEntry>;
export declare const Gift_CrossScreenEffectInfo_ReactionEffectIdsEntryDecoder: MessageFns<Gift_CrossScreenEffectInfo_ReactionEffectIdsEntry>;
export declare const Gift_GiftSponsorInfoDecoder: MessageFns<Gift_GiftSponsorInfo>;
export declare const Gift_UGGiftStructInfoDecoder: MessageFns<Gift_UGGiftStructInfo>;
export declare const Gift_GiftSkinDecoder: MessageFns<Gift_GiftSkin>;
export declare const Gift_GiftTextDecoder: MessageFns<Gift_GiftText>;
export declare const Gift_GiftSkinToGiftTextsInfoDecoder: MessageFns<Gift_GiftSkinToGiftTextsInfo>;
export declare const Gift_GiftBoxInfoDecoder: MessageFns<Gift_GiftBoxInfo>;
export declare const UserDecoder: MessageFns<User>;
export declare const User_LiveEventInfoDecoder: MessageFns<User_LiveEventInfo>;
export declare const User_LiveEventInfo_WalletPackageDecoder: MessageFns<User_LiveEventInfo_WalletPackage>;
export declare const User_ActivityInfoDecoder: MessageFns<User_ActivityInfo>;
export declare const User_AnchorLevelDecoder: MessageFns<User_AnchorLevel>;
export declare const User_AuthenticationInfoDecoder: MessageFns<User_AuthenticationInfo>;
export declare const User_AuthorStatsDecoder: MessageFns<User_AuthorStats>;
export declare const User_BorderDecoder: MessageFns<User_Border>;
export declare const User_ComboBadgeInfoDecoder: MessageFns<User_ComboBadgeInfo>;
export declare const User_EcommerceEntranceDecoder: MessageFns<User_EcommerceEntrance>;
export declare const User_EcommerceEntrance_ShopEntranceInfoDecoder: MessageFns<User_EcommerceEntrance_ShopEntranceInfo>;
export declare const User_EcommerceEntrance_ShopEntranceInfo_StoreLabelDecoder: MessageFns<User_EcommerceEntrance_ShopEntranceInfo_StoreLabel>;
export declare const User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabelDecoder: MessageFns<User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel>;
export declare const User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel_ShopLabelImageDecoder: MessageFns<User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreOfficialLabel_ShopLabelImage>;
export declare const User_EcommerceEntrance_ShowcaseEntranceInfoDecoder: MessageFns<User_EcommerceEntrance_ShowcaseEntranceInfo>;
export declare const User_FansClubDecoder: MessageFns<User_FansClub>;
export declare const User_FansClub_FansClubDataDecoder: MessageFns<User_FansClub_FansClubData>;
export declare const User_FansClubInfoDecoder: MessageFns<User_FansClubInfo>;
export declare const User_FollowInfoDecoder: MessageFns<User_FollowInfo>;
export declare const User_OwnRoomDecoder: MessageFns<User_OwnRoom>;
export declare const User_PayGradeDecoder: MessageFns<User_PayGrade>;
export declare const User_SubscribeBadgeDecoder: MessageFns<User_SubscribeBadge>;
export declare const User_SubscribeInfoDecoder: MessageFns<User_SubscribeInfo>;
export declare const User_UserAttrDecoder: MessageFns<User_UserAttr>;
export declare const User_UserStatsDecoder: MessageFns<User_UserStats>;
export declare const EmoteDecoder: MessageFns<Emote>;
export declare const Emote_AuditInfoDecoder: MessageFns<Emote_AuditInfo>;
export declare const Emote_EmoteUploadInfoDecoder: MessageFns<Emote_EmoteUploadInfo>;
export declare const PunishEventInfoDecoder: MessageFns<PunishEventInfo>;
export declare const MsgFilterDecoder: MessageFns<MsgFilter>;
export declare const UserIdentityDecoder: MessageFns<UserIdentity>;
export declare const LiveStreamGoalDecoder: MessageFns<LiveStreamGoal>;
export declare const LiveStreamGoal_AuditInfoDecoder: MessageFns<LiveStreamGoal_AuditInfo>;
export declare const LiveStreamGoal_LiveStreamSubGoalDecoder: MessageFns<LiveStreamGoal_LiveStreamSubGoal>;
export declare const LiveStreamGoal_LiveStreamSubGoal_SubGoalPinInfoDecoder: MessageFns<LiveStreamGoal_LiveStreamSubGoal_SubGoalPinInfo>;
export declare const LiveStreamGoal_LiveStreamSubGoalGiftDecoder: MessageFns<LiveStreamGoal_LiveStreamSubGoalGift>;
export declare const LiveStreamGoal_LiveStreamGoalContributorDecoder: MessageFns<LiveStreamGoal_LiveStreamGoalContributor>;
export declare const LiveStreamGoal_LiveStreamGoalContributor_SubGoalContributionDecoder: MessageFns<LiveStreamGoal_LiveStreamGoalContributor_SubGoalContribution>;
export declare const LiveStreamGoal_GoalStatsDecoder: MessageFns<LiveStreamGoal_GoalStats>;
export declare const LiveStreamGoal_GoalStats_GoalComparisonDecoder: MessageFns<LiveStreamGoal_GoalStats_GoalComparison>;
export declare const LiveStreamGoalIndicatorDecoder: MessageFns<LiveStreamGoalIndicator>;
export declare const RankingDecoder: MessageFns<Ranking>;
export declare const TikTokColorDecoder: MessageFns<TikTokColor>;
export declare const ValueLabelDecoder: MessageFns<ValueLabel>;
export declare const TimeStampContainerDecoder: MessageFns<TimeStampContainer>;
export declare const PollStartContentDecoder: MessageFns<PollStartContent>;
export declare const PollEndContentDecoder: MessageFns<PollEndContent>;
export declare const PollOptionInfoDecoder: MessageFns<PollOptionInfo>;
export declare const VoteUserDecoder: MessageFns<VoteUser>;
export declare const PollUpdateVotesContentDecoder: MessageFns<PollUpdateVotesContent>;
export declare const UserFanTicketDecoder: MessageFns<UserFanTicket>;
export declare const FanTicketRoomNoticeContentDecoder: MessageFns<FanTicketRoomNoticeContent>;
export declare const LinkerAcceptNoticeContentDecoder: MessageFns<LinkerAcceptNoticeContent>;
export declare const LinkerCancelContentDecoder: MessageFns<LinkerCancelContent>;
export declare const ListUserDecoder: MessageFns<ListUser>;
export declare const LinkerCloseContentDecoder: MessageFns<LinkerCloseContent>;
export declare const LinkerCreateContentDecoder: MessageFns<LinkerCreateContent>;
export declare const LinkerEnterContentDecoder: MessageFns<LinkerEnterContent>;
export declare const LinkerInviteContentDecoder: MessageFns<LinkerInviteContent>;
export declare const LinkerInviteContent_RtcExtInfoMapEntryDecoder: MessageFns<LinkerInviteContent_RtcExtInfoMapEntry>;
export declare const LinkerInviteContent_InviteTopHostInfoDecoder: MessageFns<LinkerInviteContent_InviteTopHostInfo>;
export declare const LinkerInviteContent_LinkmicUserInfoDecoder: MessageFns<LinkerInviteContent_LinkmicUserInfo>;
export declare const LinkerInviteContent_PerceptionDialogInfoDecoder: MessageFns<LinkerInviteContent_PerceptionDialogInfo>;
export declare const LinkerInviteContent_PerceptionDialogInfo_PerceptionFeedbackOptionDecoder: MessageFns<LinkerInviteContent_PerceptionDialogInfo_PerceptionFeedbackOption>;
export declare const LinkerInviteContent_CohostABTestSettingDecoder: MessageFns<LinkerInviteContent_CohostABTestSetting>;
export declare const LinkerInviteContent_CohostABTestSetting_CohostABTestListDecoder: MessageFns<LinkerInviteContent_CohostABTestSetting_CohostABTestList>;
export declare const LinkerInviteContent_CohostABTestSetting_CohostABTestList_CohostABTestDecoder: MessageFns<LinkerInviteContent_CohostABTestSetting_CohostABTestList_CohostABTest>;
export declare const LinkerInviteContent_LinkerInviteMessageExtraDecoder: MessageFns<LinkerInviteContent_LinkerInviteMessageExtra>;
export declare const LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtraDecoder: MessageFns<LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra>;
export declare const LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_AuthenticationInfoDecoder: MessageFns<LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_AuthenticationInfo>;
export declare const LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_HashtagDecoder: MessageFns<LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_Hashtag>;
export declare const LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfoDecoder: MessageFns<LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfo>;
export declare const LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfo_OptPairUserDecoder: MessageFns<LinkerInviteContent_LinkerInviteMessageExtra_InviterRivalExtra_OptPairInfo_OptPairUser>;
export declare const CohostTopicDecoder: MessageFns<CohostTopic>;
export declare const LinkerKickOutContentDecoder: MessageFns<LinkerKickOutContent>;
export declare const LinkerLeaveContentDecoder: MessageFns<LinkerLeaveContent>;
export declare const LinkerLinkedListChangeContentDecoder: MessageFns<LinkerLinkedListChangeContent>;
export declare const CohostListChangeContentDecoder: MessageFns<CohostListChangeContent>;
export declare const LinkerListChangeContentDecoder: MessageFns<LinkerListChangeContent>;
export declare const LinkerMediaChangeContentDecoder: MessageFns<LinkerMediaChangeContent>;
export declare const LinkerMediaChangeContent_LinkerMediaChangeOperatorDecoder: MessageFns<LinkerMediaChangeContent_LinkerMediaChangeOperator>;
export declare const LinkerMicIdxUpdateContentDecoder: MessageFns<LinkerMicIdxUpdateContent>;
export declare const LinkerMuteContentDecoder: MessageFns<LinkerMuteContent>;
export declare const LinkerRandomMatchContentDecoder: MessageFns<LinkerRandomMatchContent>;
export declare const LinkerReplyContentDecoder: MessageFns<LinkerReplyContent>;
export declare const LinkerReplyContent_LinkmicInfoDecoder: MessageFns<LinkerReplyContent_LinkmicInfo>;
export declare const LinkerSettingDecoder: MessageFns<LinkerSetting>;
export declare const LinkerSysKickOutContentDecoder: MessageFns<LinkerSysKickOutContent>;
export declare const LinkmicUserToastContentDecoder: MessageFns<LinkmicUserToastContent>;
export declare const LinkerUpdateUserContentDecoder: MessageFns<LinkerUpdateUserContent>;
export declare const LinkerUpdateUserContent_UpdateInfoEntryDecoder: MessageFns<LinkerUpdateUserContent_UpdateInfoEntry>;
export declare const LinkerUpdateUserSettingContentDecoder: MessageFns<LinkerUpdateUserSettingContent>;
export declare const LinkerWaitingListChangeContentDecoder: MessageFns<LinkerWaitingListChangeContent>;
export declare const MultiLiveAnchorPanelSettingsDecoder: MessageFns<MultiLiveAnchorPanelSettings>;
export declare const PlayerDecoder: MessageFns<Player>;
export declare const AllListUserDecoder: MessageFns<AllListUser>;
export declare const LinkLayerListUserDecoder: MessageFns<LinkLayerListUser>;
export declare const PositionDecoder: MessageFns<Position>;
export declare const LinkPositionDecoder: MessageFns<LinkPosition>;
export declare const GroupPlayerDecoder: MessageFns<GroupPlayer>;
export declare const DSLConfigDecoder: MessageFns<DSLConfig>;
export declare const GroupChannelAllUserDecoder: MessageFns<GroupChannelAllUser>;
export declare const GroupChannelUserDecoder: MessageFns<GroupChannelUser>;
export declare const RTCExtraInfoDecoder: MessageFns<RTCExtraInfo>;
export declare const RTCExtraInfo_RTCMixBaseDecoder: MessageFns<RTCExtraInfo_RTCMixBase>;
export declare const RTCExtraInfo_ByteRTCExtInfoDecoder: MessageFns<RTCExtraInfo_ByteRTCExtInfo>;
export declare const RTCExtraInfo_RTCInfoExtraDecoder: MessageFns<RTCExtraInfo_RTCInfoExtra>;
export declare const RTCExtraInfo_RTCOtherDecoder: MessageFns<RTCExtraInfo_RTCOther>;
export declare const RTCExtraInfo_RTCEngineConfigDecoder: MessageFns<RTCExtraInfo_RTCEngineConfig>;
export declare const RTCExtraInfo_RTCLiveVideoParamDecoder: MessageFns<RTCExtraInfo_RTCLiveVideoParam>;
export declare const RTCExtraInfo_RTCVideoParamDecoder: MessageFns<RTCExtraInfo_RTCVideoParam>;
export declare const RTCExtraInfo_RTCBitrateMapDecoder: MessageFns<RTCExtraInfo_RTCBitrateMap>;
export declare const CreateChannelContentDecoder: MessageFns<CreateChannelContent>;
export declare const ListChangeContentDecoder: MessageFns<ListChangeContent>;
export declare const ContentPositionDecoder: MessageFns<ContentPosition>;
export declare const MicPositionDataDecoder: MessageFns<MicPositionData>;
export declare const MultiLiveContentDecoder: MessageFns<MultiLiveContent>;
export declare const MultiLiveContent_ApplyBizContentDecoder: MessageFns<MultiLiveContent_ApplyBizContent>;
export declare const MultiLiveContent_JoinDirectBizContentDecoder: MessageFns<MultiLiveContent_JoinDirectBizContent>;
export declare const MultiLiveContent_InviteBizContentDecoder: MessageFns<MultiLiveContent_InviteBizContent>;
export declare const MultiLiveContent_ReplyBizContentDecoder: MessageFns<MultiLiveContent_ReplyBizContent>;
export declare const MultiLiveContent_PermitBizContentDecoder: MessageFns<MultiLiveContent_PermitBizContent>;
export declare const MultiLiveContent_KickOutBizContentDecoder: MessageFns<MultiLiveContent_KickOutBizContent>;
export declare const InviteContentDecoder: MessageFns<InviteContent>;
export declare const ApplyContentDecoder: MessageFns<ApplyContent>;
export declare const PermitApplyContentDecoder: MessageFns<PermitApplyContent>;
export declare const ReplyInviteContentDecoder: MessageFns<ReplyInviteContent>;
export declare const KickOutContentDecoder: MessageFns<KickOutContent>;
export declare const PosIdentityDecoder: MessageFns<PosIdentity>;
export declare const CancelApplyContentDecoder: MessageFns<CancelApplyContent>;
export declare const CancelInviteContentDecoder: MessageFns<CancelInviteContent>;
export declare const LeaveContentDecoder: MessageFns<LeaveContent>;
export declare const FinishChannelContentDecoder: MessageFns<FinishChannelContent>;
export declare const JoinDirectContentDecoder: MessageFns<JoinDirectContent>;
export declare const LeaveJoinGroupContentDecoder: MessageFns<LeaveJoinGroupContent>;
export declare const PermitJoinGroupContentDecoder: MessageFns<PermitJoinGroupContent>;
export declare const MigrationDetailsDecoder: MessageFns<MigrationDetails>;
export declare const CancelJoinGroupContentDecoder: MessageFns<CancelJoinGroupContent>;
export declare const P2PGroupChangeContentDecoder: MessageFns<P2PGroupChangeContent>;
export declare const GroupChangeContentDecoder: MessageFns<GroupChangeContent>;
export declare const BusinessContentDecoder: MessageFns<BusinessContent>;
export declare const BusinessContent_CohostContentDecoder: MessageFns<BusinessContent_CohostContent>;
export declare const BusinessContent_PermitJoinGroupBizContentDecoder: MessageFns<BusinessContent_PermitJoinGroupBizContent>;
export declare const BusinessContent_ListChangeBizContentDecoder: MessageFns<BusinessContent_ListChangeBizContent>;
export declare const BusinessContent_ListChangeBizContent_UserInfosEntryDecoder: MessageFns<BusinessContent_ListChangeBizContent_UserInfosEntry>;
export declare const BusinessContent_ListChangeBizContent_VirtualWaitingUserDecoder: MessageFns<BusinessContent_ListChangeBizContent_VirtualWaitingUser>;
export declare const BusinessContent_CohostUserInfoDecoder: MessageFns<BusinessContent_CohostUserInfo>;
export declare const BusinessContent_CohostUserInfo_CohostStreamConfigDecoder: MessageFns<BusinessContent_CohostUserInfo_CohostStreamConfig>;
export declare const BusinessContent_JoinGroupBizContentDecoder: MessageFns<BusinessContent_JoinGroupBizContent>;
export declare const BusinessContent_JoinGroupBizContent_RivalsGameTagDecoder: MessageFns<BusinessContent_JoinGroupBizContent_RivalsGameTag>;
export declare const BusinessContent_JoinGroupBizContent_TagV2Decoder: MessageFns<BusinessContent_JoinGroupBizContent_TagV2>;
export declare const BusinessContent_JoinGroupBizContent_TagV2_UserInfoDecoder: MessageFns<BusinessContent_JoinGroupBizContent_TagV2_UserInfo>;
export declare const BusinessContent_JoinGroupBizContent_TagV2_SecondDegreeRelationContentDecoder: MessageFns<BusinessContent_JoinGroupBizContent_TagV2_SecondDegreeRelationContent>;
export declare const BusinessContent_JoinGroupBizContent_TagV2_SimilarInterestContentDecoder: MessageFns<BusinessContent_JoinGroupBizContent_TagV2_SimilarInterestContent>;
export declare const BusinessContent_TagDecoder: MessageFns<BusinessContent_Tag>;
export declare const BusinessContent_PerceptionDialogInfoDecoder: MessageFns<BusinessContent_PerceptionDialogInfo>;
export declare const BusinessContent_PerceptionFeedbackOptionDecoder: MessageFns<BusinessContent_PerceptionFeedbackOption>;
export declare const BusinessContent_JoinGroupMessageExtraDecoder: MessageFns<BusinessContent_JoinGroupMessageExtra>;
export declare const BusinessContent_JoinGroupMessageExtra_RivalExtraDecoder: MessageFns<BusinessContent_JoinGroupMessageExtra_RivalExtra>;
export declare const BusinessContent_JoinGroupMessageExtra_RivalExtra_AuthenticationInfoDecoder: MessageFns<BusinessContent_JoinGroupMessageExtra_RivalExtra_AuthenticationInfo>;
export declare const BusinessContent_HashtagDecoder: MessageFns<BusinessContent_Hashtag>;
export declare const BusinessContent_TopHostInfoDecoder: MessageFns<BusinessContent_TopHostInfo>;
export declare const JoinGroupContentDecoder: MessageFns<JoinGroupContent>;
export declare const PrivilegeLogExtraDecoder: MessageFns<PrivilegeLogExtra>;
export declare const FontStyleDecoder: MessageFns<FontStyle>;
export declare const UserHonorDecoder: MessageFns<UserHonor>;
export declare const GradeIconDecoder: MessageFns<GradeIcon>;
export declare const BorderInfoDecoder: MessageFns<BorderInfo>;
export declare const FansClubMemberDecoder: MessageFns<FansClubMember>;
export declare const FansClubMember_PreferDataEntryDecoder: MessageFns<FansClubMember_PreferDataEntry>;
export declare const FansClubDataDecoder: MessageFns<FansClubData>;
export declare const FansClubData_UserBadgeDecoder: MessageFns<FansClubData_UserBadge>;
export declare const FansClubData_UserBadge_IconsEntryDecoder: MessageFns<FansClubData_UserBadge_IconsEntry>;
export declare const AuthorDecoder: MessageFns<Author>;
export declare const PublicAreaCommonDecoder: MessageFns<PublicAreaCommon>;
export declare const PublicAreaMessageCommonDecoder: MessageFns<PublicAreaMessageCommon>;
export declare const PublicAreaMessageCommon_TagItemDecoder: MessageFns<PublicAreaMessageCommon_TagItem>;
export declare const PublicAreaMessageCommon_TopicDecoder: MessageFns<PublicAreaMessageCommon_Topic>;
export declare const PublicAreaMessageCommon_CreatorSuccessInfoDecoder: MessageFns<PublicAreaMessageCommon_CreatorSuccessInfo>;
export declare const PublicAreaMessageCommon_UserMetricsDecoder: MessageFns<PublicAreaMessageCommon_UserMetrics>;
export declare const PublicAreaMessageCommon_PortraitTagDecoder: MessageFns<PublicAreaMessageCommon_PortraitTag>;
export declare const PublicAreaMessageCommon_PortraitInfoDecoder: MessageFns<PublicAreaMessageCommon_PortraitInfo>;
export declare const PublicAreaMessageCommon_UserInteractionInfoDecoder: MessageFns<PublicAreaMessageCommon_UserInteractionInfo>;
export declare const GiftModeMetaDecoder: MessageFns<GiftModeMeta>;
export declare const BattleTeamUserDecoder: MessageFns<BattleTeamUser>;
export declare const BattleSettingDecoder: MessageFns<BattleSetting>;
export declare const BattleTeamUserArmiesDecoder: MessageFns<BattleTeamUserArmies>;
export declare const BattleUserArmiesDecoder: MessageFns<BattleUserArmies>;
export declare const BattleUserArmyDecoder: MessageFns<BattleUserArmy>;
export declare const HighScoreControlCfgDecoder: MessageFns<HighScoreControlCfg>;
export declare const MessageDecoder: MessageFns<Message>;
export declare const WebsocketParamDecoder: MessageFns<WebsocketParam>;
export declare const WebcastRoomUserSeqMessageDecoder: MessageFns<WebcastRoomUserSeqMessage>;
export declare const WebcastRoomUserSeqMessage_ContributorDecoder: MessageFns<WebcastRoomUserSeqMessage_Contributor>;
export declare const ImageModelDecoder: MessageFns<ImageModel>;
export declare const ImageModel_ContentDecoder: MessageFns<ImageModel_Content>;
export declare const WebcastChatMessageDecoder: MessageFns<WebcastChatMessage>;
export declare const WebcastChatMessage_UserIdentityDecoder: MessageFns<WebcastChatMessage_UserIdentity>;
export declare const WebcastChatMessage_CommentQualityScoreDecoder: MessageFns<WebcastChatMessage_CommentQualityScore>;
export declare const EmoteUploadInfoDecoder: MessageFns<EmoteUploadInfo>;
export declare const WebcastEmoteChatMessageDecoder: MessageFns<WebcastEmoteChatMessage>;
export declare const WebcastSubEmoteDecoder: MessageFns<WebcastSubEmote>;
export declare const WebcastMemberMessageDecoder: MessageFns<WebcastMemberMessage>;
export declare const WebcastMemberMessage_AdminPermissionsEntryDecoder: MessageFns<WebcastMemberMessage_AdminPermissionsEntry>;
export declare const WebcastMemberMessage_EffectConfigDecoder: MessageFns<WebcastMemberMessage_EffectConfig>;
export declare const WebcastMemberMessage_WaveAlgorithmDataDecoder: MessageFns<WebcastMemberMessage_WaveAlgorithmData>;
export declare const WebcastMemberMessage_EffectConfigBeanDecoder: MessageFns<WebcastMemberMessage_EffectConfigBean>;
export declare const WebcastGiftMessageDecoder: MessageFns<WebcastGiftMessage>;
export declare const WebcastGiftMessage_InteractiveGiftInfoDecoder: MessageFns<WebcastGiftMessage_InteractiveGiftInfo>;
export declare const WebcastGiftMessage_GiftIMPriorityDecoder: MessageFns<WebcastGiftMessage_GiftIMPriority>;
export declare const WebcastGiftMessage_TextEffectDecoder: MessageFns<WebcastGiftMessage_TextEffect>;
export declare const WebcastGiftMessage_TextEffect_DetailDecoder: MessageFns<WebcastGiftMessage_TextEffect_Detail>;
export declare const WebcastGiftMessage_GiftTrayInfoDecoder: MessageFns<WebcastGiftMessage_GiftTrayInfo>;
export declare const WebcastGiftMessage_GiftMonitorInfoDecoder: MessageFns<WebcastGiftMessage_GiftMonitorInfo>;
export declare const WebcastGiftMessage_MatchInfoDecoder: MessageFns<WebcastGiftMessage_MatchInfo>;
export declare const WebcastGiftMessage_GiftsBoxInfoDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBoxDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_AssetExtraDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_AssetExtra>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_ResourceModelDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_ResourceModel>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContentDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContent>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContent_BEFViewRenderSizeDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_LokiExtraContent_BEFViewRenderSize>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_VideoResourceDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_VideoResource>;
export declare const WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_FaceRecognitionMetaDecoder: MessageFns<WebcastGiftMessage_GiftsBoxInfo_GiftInfoInBox_AssetsModel_FaceRecognitionMeta>;
export declare const WebcastGiftMessage_AssetsModelDecoder: MessageFns<WebcastGiftMessage_AssetsModel>;
export declare const WebcastGiftMessage_AssetsModel_AssetExtraDecoder: MessageFns<WebcastGiftMessage_AssetsModel_AssetExtra>;
export declare const WebcastGiftMessage_AssetsModel_ResourceModelDecoder: MessageFns<WebcastGiftMessage_AssetsModel_ResourceModel>;
export declare const WebcastGiftMessage_AssetsModel_LokiExtraContentDecoder: MessageFns<WebcastGiftMessage_AssetsModel_LokiExtraContent>;
export declare const WebcastGiftMessage_AssetsModel_LokiExtraContent_BEFViewRenderSizeDecoder: MessageFns<WebcastGiftMessage_AssetsModel_LokiExtraContent_BEFViewRenderSize>;
export declare const WebcastGiftMessage_AssetsModel_VideoResourceDecoder: MessageFns<WebcastGiftMessage_AssetsModel_VideoResource>;
export declare const WebcastGiftMessage_AssetsModel_FaceRecognitionMetaDecoder: MessageFns<WebcastGiftMessage_AssetsModel_FaceRecognitionMeta>;
export declare const WebcastGiftMessage_LynxGiftExtraDecoder: MessageFns<WebcastGiftMessage_LynxGiftExtra>;
export declare const WebcastGiftMessage_FlyingMicResourcesDecoder: MessageFns<WebcastGiftMessage_FlyingMicResources>;
export declare const WebcastGiftMessage_FlyingMicResources_TransitionConfigDecoder: MessageFns<WebcastGiftMessage_FlyingMicResources_TransitionConfig>;
export declare const WebcastGiftMessage_SponsorshipInfoDecoder: MessageFns<WebcastGiftMessage_SponsorshipInfo>;
export declare const WebcastLinkMicBattleDecoder: MessageFns<WebcastLinkMicBattle>;
export declare const WebcastLinkMicBattle_BattleResultEntryDecoder: MessageFns<WebcastLinkMicBattle_BattleResultEntry>;
export declare const WebcastLinkMicBattle_ArmiesEntryDecoder: MessageFns<WebcastLinkMicBattle_ArmiesEntry>;
export declare const WebcastLinkMicBattle_AnchorInfoEntryDecoder: MessageFns<WebcastLinkMicBattle_AnchorInfoEntry>;
export declare const WebcastLinkMicBattle_BattleCombosEntryDecoder: MessageFns<WebcastLinkMicBattle_BattleCombosEntry>;
export declare const WebcastLinkMicBattle_TeamMatchCampaignDecoder: MessageFns<WebcastLinkMicBattle_TeamMatchCampaign>;
export declare const WebcastLinkMicBattle_TeamMatchCampaign_BestTeammateRelationDecoder: MessageFns<WebcastLinkMicBattle_TeamMatchCampaign_BestTeammateRelation>;
export declare const WebcastLinkMicBattle_BattleTeamResultDecoder: MessageFns<WebcastLinkMicBattle_BattleTeamResult>;
export declare const WebcastLinkMicBattle_BattleInviteeGiftPermissionDecoder: MessageFns<WebcastLinkMicBattle_BattleInviteeGiftPermission>;
export declare const WebcastLinkMicBattle_SupportedActionsWrapperDecoder: MessageFns<WebcastLinkMicBattle_SupportedActionsWrapper>;
export declare const WebcastLinkMicBattle_TeamUsersInfoDecoder: MessageFns<WebcastLinkMicBattle_TeamUsersInfo>;
export declare const WebcastLinkMicBattle_BattleComboInfoDecoder: MessageFns<WebcastLinkMicBattle_BattleComboInfo>;
export declare const WebcastLinkMicBattle_BattleResultDecoder: MessageFns<WebcastLinkMicBattle_BattleResult>;
export declare const WebcastLinkMicBattle_BattleDisplayConfigDecoder: MessageFns<WebcastLinkMicBattle_BattleDisplayConfig>;
export declare const WebcastLinkMicBattle_BattleDisplayConfig_ExemptStrategyDecoder: MessageFns<WebcastLinkMicBattle_BattleDisplayConfig_ExemptStrategy>;
export declare const WebcastLinkMicBattle_BattleUserInfoDecoder: MessageFns<WebcastLinkMicBattle_BattleUserInfo>;
export declare const WebcastLinkMicBattle_BattleUserInfo_BattleBaseUserInfoDecoder: MessageFns<WebcastLinkMicBattle_BattleUserInfo_BattleBaseUserInfo>;
export declare const WebcastLinkMicBattle_BattleUserInfo_BattleRivalTagDecoder: MessageFns<WebcastLinkMicBattle_BattleUserInfo_BattleRivalTag>;
export declare const WebcastLinkMicBattle_BattleABTestSettingDecoder: MessageFns<WebcastLinkMicBattle_BattleABTestSetting>;
export declare const WebcastLinkMicBattle_BattleABTestSetting_BattleABTestListDecoder: MessageFns<WebcastLinkMicBattle_BattleABTestSetting_BattleABTestList>;
export declare const WebcastLinkMicBattle_BattleABTestSetting_BattleABTestList_BattleABTestDecoder: MessageFns<WebcastLinkMicBattle_BattleABTestSetting_BattleABTestList_BattleABTest>;
export declare const WebcastLinkMicArmiesDecoder: MessageFns<WebcastLinkMicArmies>;
export declare const WebcastLinkMicArmies_BattleItemsEntryDecoder: MessageFns<WebcastLinkMicArmies_BattleItemsEntry>;
export declare const WebcastLinkMicArmiesItemsDecoder: MessageFns<WebcastLinkMicArmiesItems>;
export declare const WebcastLinkMicArmiesGroupDecoder: MessageFns<WebcastLinkMicArmiesGroup>;
export declare const WebcastSocialMessageDecoder: MessageFns<WebcastSocialMessage>;
export declare const WebcastLikeMessageDecoder: MessageFns<WebcastLikeMessage>;
export declare const SpecifiedDisplayTextDecoder: MessageFns<SpecifiedDisplayText>;
export declare const LikeEffectDecoder: MessageFns<LikeEffect>;
export declare const WebcastQuestionNewMessageDecoder: MessageFns<WebcastQuestionNewMessage>;
export declare const WebcastQuestionNewMessage_QuestionDecoder: MessageFns<WebcastQuestionNewMessage_Question>;
export declare const WebcastMessageEventDetailsDecoder: MessageFns<WebcastMessageEventDetails>;
export declare const WebcastLiveIntroMessageDecoder: MessageFns<WebcastLiveIntroMessage>;
export declare const SystemMessageDecoder: MessageFns<SystemMessage>;
export declare const RankItemDecoder: MessageFns<RankItem>;
export declare const WebcastHourlyRankMessageDecoder: MessageFns<WebcastHourlyRankMessage>;
export declare const WebcastHourlyRankMessage_RankContainerDecoder: MessageFns<WebcastHourlyRankMessage_RankContainer>;
export declare const WebcastHourlyRankMessage_RankContainer_RankingDataDecoder: MessageFns<WebcastHourlyRankMessage_RankContainer_RankingData>;
export declare const WebcastHourlyRankMessage_RankContainer_RankingData2Decoder: MessageFns<WebcastHourlyRankMessage_RankContainer_RankingData2>;
export declare const EmoteDetailsDecoder: MessageFns<EmoteDetails>;
export declare const EmoteImageDecoder: MessageFns<EmoteImage>;
export declare const WebcastEnvelopeMessageDecoder: MessageFns<WebcastEnvelopeMessage>;
export declare const WebcastEnvelopeMessage_EnvelopeInfoDecoder: MessageFns<WebcastEnvelopeMessage_EnvelopeInfo>;
export declare const TreasureBoxDataDecoder: MessageFns<TreasureBoxData>;
export declare const WebcastSubNotifyMessageDecoder: MessageFns<WebcastSubNotifyMessage>;
export declare const WebcastSubNotifyMessage_EventTrackingDecoder: MessageFns<WebcastSubNotifyMessage_EventTracking>;
export declare const FollowInfoDecoder: MessageFns<FollowInfo>;
export declare const ProfilePictureDecoder: MessageFns<ProfilePicture>;
export declare const UserBadgesAttributesDecoder: MessageFns<UserBadgesAttributes>;
export declare const UserBadgeDecoder: MessageFns<UserBadge>;
export declare const UserImageBadgeDecoder: MessageFns<UserImageBadge>;
export declare const UserImageBadgeImageDecoder: MessageFns<UserImageBadgeImage>;
export declare const WebSocketAckMessageDecoder: MessageFns<WebSocketAckMessage>;
export declare const HeartbeatFrameRoomInfoDecoder: MessageFns<HeartbeatFrameRoomInfo>;
export declare const HeartbeatFrameMetadataField6Decoder: MessageFns<HeartbeatFrameMetadataField6>;
export declare const HeartbeatFrameMetadataField7Decoder: MessageFns<HeartbeatFrameMetadataField7>;
export declare const HeartbeatFrameDecoder: MessageFns<HeartbeatFrame>;
export declare const ImEnterRoomMessagePushFrameDecoder: MessageFns<ImEnterRoomMessagePushFrame>;
export declare const ImEnterRoomMessagePushFrame_MetadataDecoder: MessageFns<ImEnterRoomMessagePushFrame_Metadata>;
export declare const ImEnterRoomMessagePushFrame_ImEnterRoomMessageDecoder: MessageFns<ImEnterRoomMessagePushFrame_ImEnterRoomMessage>;
export declare const WebcastBarrageMessageDecoder: MessageFns<WebcastBarrageMessage>;
export declare const WebcastBarrageMessage_BarrageEventDecoder: MessageFns<WebcastBarrageMessage_BarrageEvent>;
export declare const WebcastBarrageMessage_BarrageEvent_ParamsEntryDecoder: MessageFns<WebcastBarrageMessage_BarrageEvent_ParamsEntry>;
export declare const WebcastBarrageMessage_BarrageTypeUserGradeParamDecoder: MessageFns<WebcastBarrageMessage_BarrageTypeUserGradeParam>;
export declare const WebcastBarrageMessage_BarrageTypeFansLevelParamDecoder: MessageFns<WebcastBarrageMessage_BarrageTypeFansLevelParam>;
export declare const WebcastBarrageMessage_BarrageTypeSubscribeGiftParamDecoder: MessageFns<WebcastBarrageMessage_BarrageTypeSubscribeGiftParam>;
export declare const WebcastBarrageMessage_AnimationDataDecoder: MessageFns<WebcastBarrageMessage_AnimationData>;
export declare const WebcastBarrageMessage_BarrageTypeGiftGalleryParamDecoder: MessageFns<WebcastBarrageMessage_BarrageTypeGiftGalleryParam>;
export declare const WebcastBarrageMessage_DisplayControlDecoder: MessageFns<WebcastBarrageMessage_DisplayControl>;
export declare const WebcastBarrageMessage_DisplayControl_TargetGroupShowRstEntryDecoder: MessageFns<WebcastBarrageMessage_DisplayControl_TargetGroupShowRstEntry>;
export declare const WebcastBarrageMessage_DisplayControl_ShowResultDecoder: MessageFns<WebcastBarrageMessage_DisplayControl_ShowResult>;
export declare const WebcastBarrageMessage_RightLabelDecoder: MessageFns<WebcastBarrageMessage_RightLabel>;
export declare const WebcastPushFrameDecoder: MessageFns<WebcastPushFrame>;
export declare const WebcastPushFrame_HeadersEntryDecoder: MessageFns<WebcastPushFrame_HeadersEntry>;
export declare const ProtoMessageFetchResultDecoder: MessageFns<ProtoMessageFetchResult>;
export declare const ProtoMessageFetchResult_WsParamsEntryDecoder: MessageFns<ProtoMessageFetchResult_WsParamsEntry>;
export declare const BaseProtoMessageDecoder: MessageFns<BaseProtoMessage>;
export declare const WebcastRoomMessageDecoder: MessageFns<WebcastRoomMessage>;
export declare const WebcastCaptionMessageDecoder: MessageFns<WebcastCaptionMessage>;
export declare const WebcastCaptionMessage_CaptionContentDecoder: MessageFns<WebcastCaptionMessage_CaptionContent>;
export declare const WebcastControlMessageDecoder: MessageFns<WebcastControlMessage>;
export declare const WebcastControlMessage_ExtraDecoder: MessageFns<WebcastControlMessage_Extra>;
export declare const WebcastControlMessage_PerceptionDialogInfoDecoder: MessageFns<WebcastControlMessage_PerceptionDialogInfo>;
export declare const WebcastControlMessage_PerceptionDialogInfo_PerceptionFeedbackOptionDecoder: MessageFns<WebcastControlMessage_PerceptionDialogInfo_PerceptionFeedbackOption>;
export declare const WebcastGoalUpdateMessageDecoder: MessageFns<WebcastGoalUpdateMessage>;
export declare const WebcastGoalUpdateMessage_LiveStreamSubGoalDecoder: MessageFns<WebcastGoalUpdateMessage_LiveStreamSubGoal>;
export declare const WebcastGoalUpdateMessage_LiveStreamSubGoal_LiveStreamSubGoalGiftDecoder: MessageFns<WebcastGoalUpdateMessage_LiveStreamSubGoal_LiveStreamSubGoalGift>;
export declare const WebcastGoalUpdateMessage_LiveStreamSubGoal_SubGoalPinInfoDecoder: MessageFns<WebcastGoalUpdateMessage_LiveStreamSubGoal_SubGoalPinInfo>;
export declare const WebcastGoalUpdateMessage_GoalPinInfoDecoder: MessageFns<WebcastGoalUpdateMessage_GoalPinInfo>;
export declare const WebcastImDeleteMessageDecoder: MessageFns<WebcastImDeleteMessage>;
export declare const WebcastInRoomBannerMessageDecoder: MessageFns<WebcastInRoomBannerMessage>;
export declare const WebcastInRoomBannerMessage_DataEntryDecoder: MessageFns<WebcastInRoomBannerMessage_DataEntry>;
export declare const WebcastRankUpdateMessageDecoder: MessageFns<WebcastRankUpdateMessage>;
export declare const WebcastRankUpdateMessage_UnionAnimationInfoDecoder: MessageFns<WebcastRankUpdateMessage_UnionAnimationInfo>;
export declare const WebcastRankUpdateMessage_RankListTabInfoDecoder: MessageFns<WebcastRankUpdateMessage_RankListTabInfo>;
export declare const WebcastRankUpdateMessage_RankTabInfoDecoder: MessageFns<WebcastRankUpdateMessage_RankTabInfo>;
export declare const WebcastRankUpdateMessage_RankUpdateDecoder: MessageFns<WebcastRankUpdateMessage_RankUpdate>;
export declare const WebcastPollMessageDecoder: MessageFns<WebcastPollMessage>;
export declare const WebcastPollMessage_TemplateContentDecoder: MessageFns<WebcastPollMessage_TemplateContent>;
export declare const WebcastPollMessage_PollBasicInfoDecoder: MessageFns<WebcastPollMessage_PollBasicInfo>;
export declare const WebcastRankTextMessageDecoder: MessageFns<WebcastRankTextMessage>;
export declare const WebcastLinkMicBattlePunishFinishDecoder: MessageFns<WebcastLinkMicBattlePunishFinish>;
export declare const WebcastLinkmicBattleTaskMessageDecoder: MessageFns<WebcastLinkmicBattleTaskMessage>;
export declare const WebcastLinkmicBattleTaskMessage_BattlePromptDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattlePrompt>;
export declare const WebcastLinkmicBattleTaskMessage_BattlePrompt_BattlePromptElemDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattlePrompt_BattlePromptElem>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskStartDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskStart>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfigDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_TaskGiftGuideEntryDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_TaskGiftGuideEntry>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_PreviewPeriodDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_PreviewPeriod>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_TaskPeriodConfigDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_TaskPeriodConfig>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_RewardPeriodConfigDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_RewardPeriodConfig>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_BattleTaskGiftAmountGuideDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskStart_BattleBonusConfig_BattleTaskGiftAmountGuide>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskUpdateDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskUpdate>;
export declare const WebcastLinkmicBattleTaskMessage_BattleTaskSettleDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleTaskSettle>;
export declare const WebcastLinkmicBattleTaskMessage_BattleRewardSettleDecoder: MessageFns<WebcastLinkmicBattleTaskMessage_BattleRewardSettle>;
export declare const WebcastLinkMicFanTicketMethodDecoder: MessageFns<WebcastLinkMicFanTicketMethod>;
export declare const WebcastLinkMicMethodDecoder: MessageFns<WebcastLinkMicMethod>;
export declare const WebcastUnauthorizedMemberMessageDecoder: MessageFns<WebcastUnauthorizedMemberMessage>;
export declare const WebcastMsgDetectMessageDecoder: MessageFns<WebcastMsgDetectMessage>;
export declare const WebcastMsgDetectMessage_TimeInfoDecoder: MessageFns<WebcastMsgDetectMessage_TimeInfo>;
export declare const WebcastMsgDetectMessage_TriggerConditionDecoder: MessageFns<WebcastMsgDetectMessage_TriggerCondition>;
export declare const WebcastOecLiveShoppingMessageDecoder: MessageFns<WebcastOecLiveShoppingMessage>;
export declare const WebcastOecLiveShoppingMessage_LiveShoppingDataDecoder: MessageFns<WebcastOecLiveShoppingMessage_LiveShoppingData>;
export declare const WebcastOecLiveShoppingMessage_LiveShoppingDetailsDecoder: MessageFns<WebcastOecLiveShoppingMessage_LiveShoppingDetails>;
export declare const WebcastRoomPinMessageDecoder: MessageFns<WebcastRoomPinMessage>;
export declare const WebcastLinkMessageDecoder: MessageFns<WebcastLinkMessage>;
export declare const WebcastLinkLayerMessageDecoder: MessageFns<WebcastLinkLayerMessage>;
export declare const RoomVerifyMessageDecoder: MessageFns<RoomVerifyMessage>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//# sourceMappingURL=tiktok-schema-v2.d.ts.map