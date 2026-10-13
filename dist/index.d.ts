import * as react from 'react';
import { HTMLAttributes } from 'react';

var icons = [
	"a-arrow-down",
	"a-arrow-up",
	"accessibility",
	"activity",
	"air-vent",
	"airplay",
	"alarm-clock",
	"alarm-clock-check",
	"alarm-clock-minus",
	"alarm-clock-plus",
	"alarm-smoke",
	"align-center",
	"align-horizontal-space-around",
	"align-left",
	"align-right",
	"align-vertical-space-around",
	"ambulance",
	"angry",
	"annoyed",
	"archive",
	"arrow-big-down",
	"arrow-big-down-dash",
	"arrow-big-left",
	"arrow-big-left-dash",
	"arrow-big-right",
	"arrow-big-right-dash",
	"arrow-big-up",
	"arrow-big-up-dash",
	"arrow-down",
	"arrow-down-0-1",
	"arrow-down-1-0",
	"arrow-down-a-z",
	"arrow-down-left",
	"arrow-down-right",
	"arrow-down-z-a",
	"arrow-left",
	"arrow-right",
	"arrow-up",
	"arrow-up-down",
	"arrow-up-left",
	"arrow-up-right",
	"at-sign",
	"atom",
	"audio-lines",
	"axe",
	"axis-3d",
	"badge-alert",
	"badge-check",
	"badge-percent",
	"ban",
	"banana",
	"battery",
	"battery-charging",
	"battery-full",
	"battery-low",
	"battery-medium",
	"battery-plus",
	"battery-warning",
	"bell",
	"bell-electric",
	"bell-off",
	"bell-ring",
	"between-horizontal-end",
	"between-horizontal-start",
	"between-vertical-end",
	"between-vertical-start",
	"biceps-flexed",
	"binary",
	"blend",
	"blocks",
	"bluetooth",
	"bluetooth-connected",
	"bluetooth-off",
	"bluetooth-searching",
	"bold",
	"bone",
	"book-text",
	"bookmark",
	"bookmark-check",
	"bookmark-minus",
	"bookmark-plus",
	"bookmark-x",
	"bot",
	"bot-message-square",
	"bot-off",
	"box",
	"boxes",
	"brain",
	"briefcase-business",
	"brush",
	"brush-cleaning",
	"calendar-check",
	"calendar-check-2",
	"calendar-cog",
	"calendar-days",
	"car",
	"cast",
	"cctv",
	"chart-bar",
	"chart-bar-decreasing",
	"chart-bar-increasing",
	"chart-column",
	"chart-column-decreasing",
	"chart-column-increasing",
	"chart-line",
	"chart-no-axes-column",
	"chart-no-axes-column-decreasing",
	"chart-no-axes-column-increasing",
	"chart-pie",
	"chart-scatter",
	"chart-spline",
	"check",
	"check-check",
	"check-line",
	"cherry",
	"chess-bishop",
	"chess-king",
	"chess-knight",
	"chess-pawn",
	"chevron-down",
	"chevron-first",
	"chevron-left",
	"chevron-right",
	"chevron-up",
	"chevrons-down-up",
	"chevrons-left-right",
	"chevrons-right-left",
	"chevrons-up-down",
	"chrome",
	"cigarette",
	"cigarette-off",
	"circle-check",
	"circle-check-big",
	"circle-chevron-down",
	"circle-chevron-left",
	"circle-chevron-right",
	"circle-chevron-up",
	"circle-dashed",
	"circle-dollar-sign",
	"circle-gauge",
	"circle-help",
	"circle-plus",
	"circle-x",
	"circuit-board",
	"clap",
	"clapperboard",
	"clipboard",
	"clipboard-check",
	"clipboard-list",
	"clock",
	"clock-1",
	"clock-10",
	"clock-11",
	"clock-12",
	"clock-2",
	"clock-3",
	"clock-4",
	"clock-5",
	"clock-6",
	"clock-7",
	"clock-8",
	"clock-9",
	"cloud-backup",
	"cloud-cog",
	"cloud-download",
	"cloud-drizzle",
	"cloud-hail",
	"cloud-lightning",
	"cloud-moon",
	"cloud-moon-rain",
	"cloud-rain",
	"cloud-rain-wind",
	"cloud-snow",
	"cloud-sun",
	"cloud-sun-rain",
	"cloud-sync",
	"cloud-upload",
	"coffee",
	"cog",
	"compass",
	"concierge-bell",
	"construction",
	"contrast",
	"cooking-pot",
	"copy",
	"corner-down-left",
	"corner-down-right",
	"corner-left-down",
	"corner-left-up",
	"corner-right-down",
	"corner-right-up",
	"corner-up-left",
	"corner-up-right",
	"cpu",
	"credit-card",
	"crop",
	"cross",
	"cup-soda",
	"database",
	"database-backup",
	"delete",
	"disc-3",
	"discord",
	"dollar-sign",
	"download",
	"dribbble",
	"droplet",
	"drum",
	"earth",
	"ellipsis",
	"ellipsis-vertical",
	"equal-not",
	"euro",
	"ev-charger",
	"expand",
	"external-link",
	"eye",
	"eye-off",
	"facebook",
	"fan",
	"feather",
	"figma",
	"file-chart-line",
	"file-check",
	"file-check-2",
	"file-cog",
	"file-pen-line",
	"file-stack",
	"file-text",
	"fingerprint",
	"fish-symbol",
	"flame",
	"flask-conical",
	"folder-archive",
	"folder-check",
	"folder-clock",
	"folder-code",
	"folder-cog",
	"folder-dot",
	"folder-down",
	"folder-git",
	"folder-git-2",
	"folder-heart",
	"folder-input",
	"folder-kanban",
	"folder-key",
	"folder-lock",
	"folder-minus",
	"folder-open",
	"folder-output",
	"folder-plus",
	"folder-root",
	"folder-sync",
	"folder-tree",
	"folder-up",
	"folder-x",
	"folders",
	"forklift",
	"frame",
	"frown",
	"gallery-horizontal",
	"gallery-horizontal-end",
	"gallery-thumbnails",
	"gallery-vertical",
	"gallery-vertical-end",
	"gauge",
	"gavel",
	"georgian-lari",
	"git-branch",
	"git-commit-horizontal",
	"git-commit-vertical",
	"git-compare",
	"git-compare-arrows",
	"git-fork",
	"git-graph",
	"git-merge",
	"git-pull-request",
	"git-pull-request-closed",
	"git-pull-request-create",
	"github",
	"gitlab",
	"graduation-cap",
	"grip",
	"grip-horizontal",
	"grip-vertical",
	"hammer",
	"hand",
	"hand-coins",
	"hand-fist",
	"hand-grab",
	"hand-heart",
	"hand-helping",
	"hand-metal",
	"hard-drive-download",
	"hard-drive-upload",
	"hat-glasses",
	"heart",
	"heart-handshake",
	"heart-pulse",
	"history",
	"home",
	"hourglass",
	"house-wifi",
	"id-card",
	"indian-rupee",
	"instagram",
	"italic",
	"japanese-yen",
	"kanban",
	"key",
	"key-round",
	"key-square",
	"keyboard",
	"languages",
	"laptop-minimal-check",
	"laugh",
	"layers",
	"layers-2",
	"layout-dashboard",
	"layout-grid",
	"layout-panel-top",
	"leaf",
	"leafy-green",
	"lightbulb",
	"lightbulb-off",
	"link",
	"link-2",
	"linkedin",
	"list",
	"loader",
	"loader-circle",
	"loader-pinwheel",
	"lock",
	"lock-keyhole",
	"lock-keyhole-open",
	"lock-open",
	"log-in",
	"log-out",
	"mail-check",
	"mailbox",
	"map-pin",
	"map-pin-check",
	"map-pin-check-inside",
	"map-pin-house",
	"map-pin-minus",
	"map-pin-minus-inside",
	"map-pin-off",
	"map-pin-plus",
	"map-pin-plus-inside",
	"map-pin-x-inside",
	"maximize",
	"maximize-2",
	"meh",
	"menu",
	"message-circle",
	"message-circle-check",
	"message-circle-code",
	"message-circle-dashed",
	"message-circle-heart",
	"message-circle-more",
	"message-circle-off",
	"message-circle-plus",
	"message-circle-question",
	"message-circle-warning",
	"message-circle-x",
	"message-square",
	"message-square-check",
	"message-square-code",
	"message-square-dashed",
	"message-square-diff",
	"message-square-dot",
	"message-square-heart",
	"message-square-more",
	"message-square-off",
	"message-square-plus",
	"message-square-quote",
	"message-square-share",
	"message-square-text",
	"message-square-warning",
	"message-square-x",
	"mic",
	"mic-off",
	"minimize",
	"monitor-check",
	"monitor-cog",
	"moon",
	"moon-star",
	"mouse-pointer-click",
	"move-down",
	"move-left",
	"move-right",
	"move-up",
	"network",
	"nfc",
	"orbit",
	"paintbrush",
	"palette",
	"panel-bottom",
	"panel-bottom-close",
	"panel-bottom-open",
	"panel-left",
	"panel-left-close",
	"panel-left-open",
	"panel-right",
	"panel-right-close",
	"panel-right-open",
	"panel-top",
	"panel-top-close",
	"panel-top-open",
	"paperclip",
	"party-popper",
	"pause",
	"pen-tool",
	"philippine-peso",
	"phone",
	"phone-call",
	"phone-forwarded",
	"phone-incoming",
	"phone-missed",
	"phone-off",
	"pickaxe",
	"pin",
	"pin-off",
	"plane",
	"plane-landing",
	"plane-takeoff",
	"play",
	"plug-zap",
	"plus",
	"pound-sterling",
	"projector",
	"rabbit",
	"radio",
	"radio-tower",
	"receipt",
	"receipt-cent",
	"receipt-euro",
	"receipt-indian-rupee",
	"receipt-japanese-yen",
	"receipt-pound-sterling",
	"receipt-russian-ruble",
	"receipt-swiss-franc",
	"receipt-text",
	"receipt-turkish-lira",
	"redo",
	"redo-dot",
	"refresh-ccw",
	"refresh-ccw-dot",
	"refresh-cw",
	"refresh-cw-off",
	"rocket",
	"rocking-chair",
	"roller-coaster",
	"rotate-ccw",
	"rotate-ccw-key",
	"rotate-cw",
	"route",
	"router",
	"russian-ruble",
	"satellite-dish",
	"saudi-riyal",
	"scan-face",
	"scan-text",
	"scissors",
	"scissors-line-dashed",
	"search",
	"send",
	"send-horizontal",
	"server",
	"server-cog",
	"server-crash",
	"settings",
	"shield-check",
	"ship",
	"ship-wheel",
	"shopping-cart",
	"shower-head",
	"shredder",
	"shrink",
	"signal",
	"signal-high",
	"signal-low",
	"signal-medium",
	"signal-zero",
	"sliders-horizontal",
	"sliders-vertical",
	"smartphone-charging",
	"smartphone-nfc",
	"smile",
	"smile-plus",
	"snowflake",
	"soup",
	"sparkle",
	"sparkles",
	"spray-can",
	"square-activity",
	"square-arrow-down",
	"square-arrow-left",
	"square-arrow-out-down-left",
	"square-arrow-out-down-right",
	"square-arrow-out-up-left",
	"square-arrow-out-up-right",
	"square-arrow-right",
	"square-arrow-up",
	"square-chevron-down",
	"square-chevron-left",
	"square-chevron-right",
	"square-chevron-up",
	"square-dashed-kanban",
	"square-kanban",
	"square-pen",
	"square-plus",
	"square-stack",
	"square-x",
	"stamp",
	"star",
	"stethoscope",
	"sun",
	"sun-dim",
	"sun-medium",
	"sun-moon",
	"sunset",
	"swiss-franc",
	"switch-camera",
	"syringe",
	"telescope",
	"terminal",
	"thermometer",
	"thumbs-down",
	"thumbs-up",
	"ticket",
	"timer",
	"timer-off",
	"toggle-left",
	"toggle-right",
	"tornado",
	"train-track",
	"trash",
	"trash-2",
	"tree-deciduous",
	"tree-pine",
	"trending-down",
	"trending-up",
	"trending-up-down",
	"truck",
	"turkish-lira",
	"twitch",
	"twitter",
	"underline",
	"undo",
	"undo-dot",
	"unplug",
	"upload",
	"user",
	"user-check",
	"user-plus",
	"user-round",
	"user-round-check",
	"user-round-cog",
	"user-round-plus",
	"users",
	"users-round",
	"vibrate",
	"volume",
	"volume-1",
	"volume-2",
	"volume-off",
	"wallet",
	"washing-machine",
	"waves",
	"waves-arrow-down",
	"waves-arrow-up",
	"waves-ladder",
	"waypoints",
	"webhook",
	"wifi",
	"wifi-cog",
	"wifi-high",
	"wifi-low",
	"wifi-pen",
	"wifi-sync",
	"wifi-zero",
	"wind",
	"wind-arrow-down",
	"workflow",
	"wrench",
	"x",
	"youtube",
	"zap",
	"zap-off"
];
var aliases = {
	airplane: "plane",
	"align-horizontal": "align-horizontal-space-around",
	"align-vertical": "align-vertical-space-around",
	"attach-file": "paperclip",
	cart: "shopping-cart",
	chrome: "chrome",
	connect: "network",
	"cursor-click": "mouse-pointer-click",
	downvote: "thumbs-down",
	dribbble: "dribbble",
	facebook: "facebook",
	figma: "figma",
	flask: "flask-conical",
	github: "github",
	gitlab: "gitlab",
	instagram: "instagram",
	"key-circle": "key-round",
	linkedin: "linkedin",
	login: "log-in",
	logout: "log-out",
	twitch: "twitch",
	twitter: "twitter",
	upvote: "thumbs-up",
	youtube: "youtube",
	"chevron-left-right": "chevrons-left-right",
	"chevron-up-down": "chevrons-up-down",
	"arrow-down01": "arrow-down-0-1",
	"arrow-down10": "arrow-down-1-0",
	"arrow-up01": "arrow-up-0-1",
	"arrow-up10": "arrow-up-1-0",
	"arrow-down-az": "arrow-down-a-z",
	"arrow-down-za": "arrow-down-z-a",
	"arrow-up-az": "arrow-up-a-z",
	"arrow-up-za": "arrow-up-z-a"
};
var iconManifest = {
	icons: icons,
	aliases: aliases
};

interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
    name?: string;
    loop?: 'hover' | 'always' | false;
    /** Defaults to 'ignore' (force animations); 'system' follows prefers-reduced-motion. */
    reducedMotion?: 'system' | 'ignore';
    size?: number;
    color?: string;
    strokeWidth?: number;
}

declare function createIcon(name: string): react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;

declare const AArrowDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AArrowUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AccessibilityIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ActivityIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AirVentIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AirplayIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlarmClockIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlarmClockCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlarmClockMinusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlarmClockPlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlarmSmokeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlignCenterIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlignHorizontalSpaceAroundIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlignLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlignRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AlignVerticalSpaceAroundIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AmbulanceIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AngryIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AnnoyedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArchiveIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigDownDashIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigLeftDashIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigRightDashIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowBigUpDashIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowDown01Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowDown10Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowDownAZIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowDownLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowDownRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowDownZAIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowUpDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowUpLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ArrowUpRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AtSignIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AtomIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AudioLinesIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const AxeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Axis3dIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BadgeAlertIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BadgeCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BadgePercentIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BanIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BananaIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BatteryIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BatteryChargingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BatteryFullIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BatteryLowIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BatteryMediumIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BatteryPlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BatteryWarningIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BellIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BellElectricIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BellOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BellRingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BetweenHorizontalEndIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BetweenHorizontalStartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BetweenVerticalEndIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BetweenVerticalStartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BicepsFlexedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BinaryIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BlendIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BlocksIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BluetoothIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BluetoothConnectedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BluetoothOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BluetoothSearchingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BoldIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BoneIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BookTextIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BookmarkIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BookmarkCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BookmarkMinusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BookmarkPlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BookmarkXIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BotMessageSquareIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BotOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BoxIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BoxesIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BrainIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BriefcaseBusinessIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BrushIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const BrushCleaningIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CalendarCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CalendarCheck2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CalendarCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CalendarDaysIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CarIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CastIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CctvIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartBarIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartBarDecreasingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartBarIncreasingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartColumnIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartColumnDecreasingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartColumnIncreasingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartLineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartNoAxesColumnIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartNoAxesColumnDecreasingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartNoAxesColumnIncreasingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartPieIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartScatterIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChartSplineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CheckCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CheckLineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CherryIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChessBishopIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChessKingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChessKnightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChessPawnIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronFirstIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronsDownUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronsLeftRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronsRightLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChevronsUpDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ChromeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CigaretteIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CigaretteOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleCheckBigIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleChevronDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleChevronLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleChevronRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleChevronUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleDashedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleDollarSignIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleGaugeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleHelpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CirclePlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircleXIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CircuitBoardIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ClapIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ClapperboardIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ClipboardIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ClipboardCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ClipboardListIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ClockIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock1Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock10Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock11Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock12Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock3Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock4Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock5Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock6Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock7Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock8Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Clock9Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudBackupIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudDownloadIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudDrizzleIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudHailIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudLightningIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudMoonIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudMoonRainIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudRainIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudRainWindIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudSnowIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudSunIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudSunRainIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudSyncIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CloudUploadIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CoffeeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CompassIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ConciergeBellIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ConstructionIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ContrastIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CookingPotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CopyIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerDownLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerDownRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerLeftDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerLeftUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerRightDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerRightUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerUpLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CornerUpRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CpuIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CreditCardIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CropIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CrossIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const CupSodaIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DatabaseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DatabaseBackupIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DeleteIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Disc3Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DiscordIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DollarSignIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DownloadIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DribbbleIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DropletIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const DrumIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EarthIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EllipsisIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EllipsisVerticalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EqualNotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EuroIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EvChargerIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ExpandIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ExternalLinkIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EyeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const EyeOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FacebookIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FanIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FeatherIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FigmaIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FileChartLineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FileCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FileCheck2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FileCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FilePenLineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FileStackIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FileTextIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FingerprintIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FishSymbolIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FlameIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FlaskConicalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderArchiveIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderClockIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderCodeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderDotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderGitIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderGit2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderHeartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderInputIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderKanbanIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderKeyIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderLockIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderMinusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderOpenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderOutputIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderPlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderRootIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderSyncIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderTreeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FolderXIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FoldersIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ForkliftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FrameIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const FrownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GalleryHorizontalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GalleryHorizontalEndIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GalleryThumbnailsIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GalleryVerticalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GalleryVerticalEndIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GaugeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GavelIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GeorgianLariIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitBranchIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitCommitHorizontalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitCommitVerticalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitCompareIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitCompareArrowsIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitForkIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitGraphIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitMergeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitPullRequestIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitPullRequestClosedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitPullRequestCreateIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GithubIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GitlabIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GraduationCapIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GripIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GripHorizontalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const GripVerticalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HammerIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HandIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HandCoinsIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HandFistIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HandGrabIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HandHeartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HandHelpingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HandMetalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HardDriveDownloadIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HardDriveUploadIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HatGlassesIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HeartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HeartHandshakeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HeartPulseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HistoryIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HomeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HourglassIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const HouseWifiIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const IdCardIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const IndianRupeeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const InstagramIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ItalicIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const JapaneseYenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const KanbanIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const KeyIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const KeyRoundIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const KeySquareIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const KeyboardIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LanguagesIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LaptopMinimalCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LaughIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LayersIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Layers2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LayoutDashboardIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LayoutGridIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LayoutPanelTopIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LeafIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LeafyGreenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LightbulbIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LightbulbOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LinkIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Link2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LinkedinIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ListIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LoaderIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LoaderCircleIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LoaderPinwheelIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LockIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LockKeyholeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LockKeyholeOpenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LockOpenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LogInIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const LogOutIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MailCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MailboxIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinCheckInsideIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinHouseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinMinusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinMinusInsideIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinPlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinPlusInsideIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MapPinXInsideIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MaximizeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Maximize2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MehIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MenuIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleCodeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleDashedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleHeartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleMoreIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCirclePlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleQuestionIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleWarningIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageCircleXIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareCodeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareDashedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareDiffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareDotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareHeartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareMoreIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquarePlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareQuoteIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareShareIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareTextIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareWarningIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MessageSquareXIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MicIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MicOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MinimizeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MonitorCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MonitorCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MoonIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MoonStarIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MousePointerClickIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MoveDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MoveLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MoveRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const MoveUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const NetworkIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const NfcIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const OrbitIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PaintbrushIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PaletteIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelBottomIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelBottomCloseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelBottomOpenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelLeftCloseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelLeftOpenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelRightCloseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelRightOpenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelTopIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelTopCloseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PanelTopOpenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PaperclipIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PartyPopperIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PauseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PenToolIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PhilippinePesoIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PhoneIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PhoneCallIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PhoneForwardedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PhoneIncomingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PhoneMissedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PhoneOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PickaxeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PinIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PinOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PlaneIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PlaneLandingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PlaneTakeoffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PlayIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PlugZapIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const PoundSterlingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ProjectorIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RabbitIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RadioIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RadioTowerIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptCentIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptEuroIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptIndianRupeeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptJapaneseYenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptPoundSterlingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptRussianRubleIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptSwissFrancIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptTextIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ReceiptTurkishLiraIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RedoIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RedoDotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RefreshCcwIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RefreshCcwDotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RefreshCwIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RefreshCwOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RocketIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RockingChairIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RollerCoasterIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RotateCcwIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RotateCcwKeyIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RotateCwIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RouteIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RouterIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const RussianRubleIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SatelliteDishIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SaudiRiyalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ScanFaceIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ScanTextIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ScissorsIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ScissorsLineDashedIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SearchIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SendIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SendHorizontalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ServerIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ServerCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ServerCrashIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SettingsIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ShieldCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ShipIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ShipWheelIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ShoppingCartIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ShowerHeadIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ShredderIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ShrinkIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SignalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SignalHighIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SignalLowIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SignalMediumIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SignalZeroIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SlidersHorizontalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SlidersVerticalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SmartphoneChargingIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SmartphoneNfcIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SmileIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SmilePlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SnowflakeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SoupIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SparkleIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SparklesIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SprayCanIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareActivityIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowOutDownLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowOutDownRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowOutUpLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowOutUpRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareArrowUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareChevronDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareChevronLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareChevronRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareChevronUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareDashedKanbanIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareKanbanIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquarePenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquarePlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareStackIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SquareXIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const StampIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const StarIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const StethoscopeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SunIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SunDimIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SunMediumIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SunMoonIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SunsetIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SwissFrancIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SwitchCameraIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const SyringeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TelescopeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TerminalIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ThermometerIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ThumbsDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ThumbsUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TicketIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TimerIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TimerOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ToggleLeftIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ToggleRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TornadoIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TrainTrackIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TrashIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Trash2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TreeDeciduousIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TreePineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TrendingDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TrendingUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TrendingUpDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TruckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TurkishLiraIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TwitchIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const TwitterIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UnderlineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UndoIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UndoDotIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UnplugIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UploadIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UserIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UserCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UserPlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UserRoundIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UserRoundCheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UserRoundCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UserRoundPlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UsersIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const UsersRoundIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const VibrateIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const VolumeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Volume1Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const Volume2Icon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const VolumeOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WalletIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WashingMachineIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WavesIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WavesArrowDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WavesArrowUpIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WavesLadderIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WaypointsIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WebhookIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WifiIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WifiCogIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WifiHighIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WifiLowIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WifiPenIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WifiSyncIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WifiZeroIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WindIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WindArrowDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WorkflowIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const WrenchIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const XIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const YoutubeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ZapIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;
declare const ZapOffIcon: react.ForwardRefExoticComponent<Omit<IconProps, "name"> & react.RefAttributes<HTMLSpanElement>>;

declare function normalizeName(input: string): string;
declare const Icon: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<HTMLSpanElement>>;

export { AArrowDownIcon, AArrowUpIcon, AccessibilityIcon, ActivityIcon, AirVentIcon, AirplayIcon, AlarmClockCheckIcon, AlarmClockIcon, AlarmClockMinusIcon, AlarmClockPlusIcon, AlarmSmokeIcon, AlignCenterIcon, AlignHorizontalSpaceAroundIcon, AlignLeftIcon, AlignRightIcon, AlignVerticalSpaceAroundIcon, AmbulanceIcon, AngryIcon, AnnoyedIcon, ArchiveIcon, ArrowBigDownDashIcon, ArrowBigDownIcon, ArrowBigLeftDashIcon, ArrowBigLeftIcon, ArrowBigRightDashIcon, ArrowBigRightIcon, ArrowBigUpDashIcon, ArrowBigUpIcon, ArrowDown01Icon, ArrowDown10Icon, ArrowDownAZIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowDownZAIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpRightIcon, AtSignIcon, AtomIcon, AudioLinesIcon, AxeIcon, Axis3dIcon, BadgeAlertIcon, BadgeCheckIcon, BadgePercentIcon, BanIcon, BananaIcon, BatteryChargingIcon, BatteryFullIcon, BatteryIcon, BatteryLowIcon, BatteryMediumIcon, BatteryPlusIcon, BatteryWarningIcon, BellElectricIcon, BellIcon, BellOffIcon, BellRingIcon, BetweenHorizontalEndIcon, BetweenHorizontalStartIcon, BetweenVerticalEndIcon, BetweenVerticalStartIcon, BicepsFlexedIcon, BinaryIcon, BlendIcon, BlocksIcon, BluetoothConnectedIcon, BluetoothIcon, BluetoothOffIcon, BluetoothSearchingIcon, BoldIcon, BoneIcon, BookTextIcon, BookmarkCheckIcon, BookmarkIcon, BookmarkMinusIcon, BookmarkPlusIcon, BookmarkXIcon, BotIcon, BotMessageSquareIcon, BotOffIcon, BoxIcon, BoxesIcon, BrainIcon, BriefcaseBusinessIcon, BrushCleaningIcon, BrushIcon, CalendarCheck2Icon, CalendarCheckIcon, CalendarCogIcon, CalendarDaysIcon, CarIcon, CastIcon, CctvIcon, ChartBarDecreasingIcon, ChartBarIcon, ChartBarIncreasingIcon, ChartColumnDecreasingIcon, ChartColumnIcon, ChartColumnIncreasingIcon, ChartLineIcon, ChartNoAxesColumnDecreasingIcon, ChartNoAxesColumnIcon, ChartNoAxesColumnIncreasingIcon, ChartPieIcon, ChartScatterIcon, ChartSplineIcon, CheckCheckIcon, CheckIcon, CheckLineIcon, CherryIcon, ChessBishopIcon, ChessKingIcon, ChessKnightIcon, ChessPawnIcon, ChevronDownIcon, ChevronFirstIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronsDownUpIcon, ChevronsLeftRightIcon, ChevronsRightLeftIcon, ChevronsUpDownIcon, ChromeIcon, CigaretteIcon, CigaretteOffIcon, CircleCheckBigIcon, CircleCheckIcon, CircleChevronDownIcon, CircleChevronLeftIcon, CircleChevronRightIcon, CircleChevronUpIcon, CircleDashedIcon, CircleDollarSignIcon, CircleGaugeIcon, CircleHelpIcon, CirclePlusIcon, CircleXIcon, CircuitBoardIcon, ClapIcon, ClapperboardIcon, ClipboardCheckIcon, ClipboardIcon, ClipboardListIcon, Clock10Icon, Clock11Icon, Clock12Icon, Clock1Icon, Clock2Icon, Clock3Icon, Clock4Icon, Clock5Icon, Clock6Icon, Clock7Icon, Clock8Icon, Clock9Icon, ClockIcon, CloudBackupIcon, CloudCogIcon, CloudDownloadIcon, CloudDrizzleIcon, CloudHailIcon, CloudLightningIcon, CloudMoonIcon, CloudMoonRainIcon, CloudRainIcon, CloudRainWindIcon, CloudSnowIcon, CloudSunIcon, CloudSunRainIcon, CloudSyncIcon, CloudUploadIcon, CoffeeIcon, CogIcon, CompassIcon, ConciergeBellIcon, ConstructionIcon, ContrastIcon, CookingPotIcon, CopyIcon, CornerDownLeftIcon, CornerDownRightIcon, CornerLeftDownIcon, CornerLeftUpIcon, CornerRightDownIcon, CornerRightUpIcon, CornerUpLeftIcon, CornerUpRightIcon, CpuIcon, CreditCardIcon, CropIcon, CrossIcon, CupSodaIcon, DatabaseBackupIcon, DatabaseIcon, DeleteIcon, Disc3Icon, DiscordIcon, DollarSignIcon, DownloadIcon, DribbbleIcon, DropletIcon, DrumIcon, EarthIcon, EllipsisIcon, EllipsisVerticalIcon, EqualNotIcon, EuroIcon, EvChargerIcon, ExpandIcon, ExternalLinkIcon, EyeIcon, EyeOffIcon, FacebookIcon, FanIcon, FeatherIcon, FigmaIcon, FileChartLineIcon, FileCheck2Icon, FileCheckIcon, FileCogIcon, FilePenLineIcon, FileStackIcon, FileTextIcon, FingerprintIcon, FishSymbolIcon, FlameIcon, FlaskConicalIcon, FolderArchiveIcon, FolderCheckIcon, FolderClockIcon, FolderCodeIcon, FolderCogIcon, FolderDotIcon, FolderDownIcon, FolderGit2Icon, FolderGitIcon, FolderHeartIcon, FolderInputIcon, FolderKanbanIcon, FolderKeyIcon, FolderLockIcon, FolderMinusIcon, FolderOpenIcon, FolderOutputIcon, FolderPlusIcon, FolderRootIcon, FolderSyncIcon, FolderTreeIcon, FolderUpIcon, FolderXIcon, FoldersIcon, ForkliftIcon, FrameIcon, FrownIcon, GalleryHorizontalEndIcon, GalleryHorizontalIcon, GalleryThumbnailsIcon, GalleryVerticalEndIcon, GalleryVerticalIcon, GaugeIcon, GavelIcon, GeorgianLariIcon, GitBranchIcon, GitCommitHorizontalIcon, GitCommitVerticalIcon, GitCompareArrowsIcon, GitCompareIcon, GitForkIcon, GitGraphIcon, GitMergeIcon, GitPullRequestClosedIcon, GitPullRequestCreateIcon, GitPullRequestIcon, GithubIcon, GitlabIcon, GraduationCapIcon, GripHorizontalIcon, GripIcon, GripVerticalIcon, HammerIcon, HandCoinsIcon, HandFistIcon, HandGrabIcon, HandHeartIcon, HandHelpingIcon, HandIcon, HandMetalIcon, HardDriveDownloadIcon, HardDriveUploadIcon, HatGlassesIcon, HeartHandshakeIcon, HeartIcon, HeartPulseIcon, HistoryIcon, HomeIcon, HourglassIcon, HouseWifiIcon, Icon, type IconProps, IdCardIcon, IndianRupeeIcon, InstagramIcon, ItalicIcon, JapaneseYenIcon, KanbanIcon, KeyIcon, KeyRoundIcon, KeySquareIcon, KeyboardIcon, LanguagesIcon, LaptopMinimalCheckIcon, LaughIcon, Layers2Icon, LayersIcon, LayoutDashboardIcon, LayoutGridIcon, LayoutPanelTopIcon, LeafIcon, LeafyGreenIcon, LightbulbIcon, LightbulbOffIcon, Link2Icon, LinkIcon, LinkedinIcon, ListIcon, LoaderCircleIcon, LoaderIcon, LoaderPinwheelIcon, LockIcon, LockKeyholeIcon, LockKeyholeOpenIcon, LockOpenIcon, LogInIcon, LogOutIcon, MailCheckIcon, MailboxIcon, MapPinCheckIcon, MapPinCheckInsideIcon, MapPinHouseIcon, MapPinIcon, MapPinMinusIcon, MapPinMinusInsideIcon, MapPinOffIcon, MapPinPlusIcon, MapPinPlusInsideIcon, MapPinXInsideIcon, Maximize2Icon, MaximizeIcon, MehIcon, MenuIcon, MessageCircleCheckIcon, MessageCircleCodeIcon, MessageCircleDashedIcon, MessageCircleHeartIcon, MessageCircleIcon, MessageCircleMoreIcon, MessageCircleOffIcon, MessageCirclePlusIcon, MessageCircleQuestionIcon, MessageCircleWarningIcon, MessageCircleXIcon, MessageSquareCheckIcon, MessageSquareCodeIcon, MessageSquareDashedIcon, MessageSquareDiffIcon, MessageSquareDotIcon, MessageSquareHeartIcon, MessageSquareIcon, MessageSquareMoreIcon, MessageSquareOffIcon, MessageSquarePlusIcon, MessageSquareQuoteIcon, MessageSquareShareIcon, MessageSquareTextIcon, MessageSquareWarningIcon, MessageSquareXIcon, MicIcon, MicOffIcon, MinimizeIcon, MonitorCheckIcon, MonitorCogIcon, MoonIcon, MoonStarIcon, MousePointerClickIcon, MoveDownIcon, MoveLeftIcon, MoveRightIcon, MoveUpIcon, NetworkIcon, NfcIcon, OrbitIcon, PaintbrushIcon, PaletteIcon, PanelBottomCloseIcon, PanelBottomIcon, PanelBottomOpenIcon, PanelLeftCloseIcon, PanelLeftIcon, PanelLeftOpenIcon, PanelRightCloseIcon, PanelRightIcon, PanelRightOpenIcon, PanelTopCloseIcon, PanelTopIcon, PanelTopOpenIcon, PaperclipIcon, PartyPopperIcon, PauseIcon, PenToolIcon, PhilippinePesoIcon, PhoneCallIcon, PhoneForwardedIcon, PhoneIcon, PhoneIncomingIcon, PhoneMissedIcon, PhoneOffIcon, PickaxeIcon, PinIcon, PinOffIcon, PlaneIcon, PlaneLandingIcon, PlaneTakeoffIcon, PlayIcon, PlugZapIcon, PlusIcon, PoundSterlingIcon, ProjectorIcon, RabbitIcon, RadioIcon, RadioTowerIcon, ReceiptCentIcon, ReceiptEuroIcon, ReceiptIcon, ReceiptIndianRupeeIcon, ReceiptJapaneseYenIcon, ReceiptPoundSterlingIcon, ReceiptRussianRubleIcon, ReceiptSwissFrancIcon, ReceiptTextIcon, ReceiptTurkishLiraIcon, RedoDotIcon, RedoIcon, RefreshCcwDotIcon, RefreshCcwIcon, RefreshCwIcon, RefreshCwOffIcon, RocketIcon, RockingChairIcon, RollerCoasterIcon, RotateCcwIcon, RotateCcwKeyIcon, RotateCwIcon, RouteIcon, RouterIcon, RussianRubleIcon, SatelliteDishIcon, SaudiRiyalIcon, ScanFaceIcon, ScanTextIcon, ScissorsIcon, ScissorsLineDashedIcon, SearchIcon, SendHorizontalIcon, SendIcon, ServerCogIcon, ServerCrashIcon, ServerIcon, SettingsIcon, ShieldCheckIcon, ShipIcon, ShipWheelIcon, ShoppingCartIcon, ShowerHeadIcon, ShredderIcon, ShrinkIcon, SignalHighIcon, SignalIcon, SignalLowIcon, SignalMediumIcon, SignalZeroIcon, SlidersHorizontalIcon, SlidersVerticalIcon, SmartphoneChargingIcon, SmartphoneNfcIcon, SmileIcon, SmilePlusIcon, SnowflakeIcon, SoupIcon, SparkleIcon, SparklesIcon, SprayCanIcon, SquareActivityIcon, SquareArrowDownIcon, SquareArrowLeftIcon, SquareArrowOutDownLeftIcon, SquareArrowOutDownRightIcon, SquareArrowOutUpLeftIcon, SquareArrowOutUpRightIcon, SquareArrowRightIcon, SquareArrowUpIcon, SquareChevronDownIcon, SquareChevronLeftIcon, SquareChevronRightIcon, SquareChevronUpIcon, SquareDashedKanbanIcon, SquareKanbanIcon, SquarePenIcon, SquarePlusIcon, SquareStackIcon, SquareXIcon, StampIcon, StarIcon, StethoscopeIcon, SunDimIcon, SunIcon, SunMediumIcon, SunMoonIcon, SunsetIcon, SwissFrancIcon, SwitchCameraIcon, SyringeIcon, TelescopeIcon, TerminalIcon, ThermometerIcon, ThumbsDownIcon, ThumbsUpIcon, TicketIcon, TimerIcon, TimerOffIcon, ToggleLeftIcon, ToggleRightIcon, TornadoIcon, TrainTrackIcon, Trash2Icon, TrashIcon, TreeDeciduousIcon, TreePineIcon, TrendingDownIcon, TrendingUpDownIcon, TrendingUpIcon, TruckIcon, TurkishLiraIcon, TwitchIcon, TwitterIcon, UnderlineIcon, UndoDotIcon, UndoIcon, UnplugIcon, UploadIcon, UserCheckIcon, UserIcon, UserPlusIcon, UserRoundCheckIcon, UserRoundCogIcon, UserRoundIcon, UserRoundPlusIcon, UsersIcon, UsersRoundIcon, VibrateIcon, Volume1Icon, Volume2Icon, VolumeIcon, VolumeOffIcon, WalletIcon, WashingMachineIcon, WavesArrowDownIcon, WavesArrowUpIcon, WavesIcon, WavesLadderIcon, WaypointsIcon, WebhookIcon, WifiCogIcon, WifiHighIcon, WifiIcon, WifiLowIcon, WifiPenIcon, WifiSyncIcon, WifiZeroIcon, WindArrowDownIcon, WindIcon, WorkflowIcon, WrenchIcon, XIcon, YoutubeIcon, ZapIcon, ZapOffIcon, createIcon, iconManifest as manifest, normalizeName };
