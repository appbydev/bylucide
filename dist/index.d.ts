import * as React from 'react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps as LucideProps$1 } from 'lucide-react';

var icons = [
	"a-arrow-down",
	"a-arrow-up",
	"a-large-small",
	"accessibility",
	"activity",
	"air-vent",
	"airplay",
	"alarm-clock",
	"alarm-clock-check",
	"alarm-clock-minus",
	"alarm-clock-off",
	"alarm-clock-plus",
	"alarm-smoke",
	"align-center",
	"align-center-horizontal",
	"align-center-vertical",
	"align-end-horizontal",
	"align-end-vertical",
	"align-horizontal-distribute-center",
	"align-horizontal-distribute-end",
	"align-horizontal-distribute-start",
	"align-horizontal-justify-center",
	"align-horizontal-justify-end",
	"align-horizontal-justify-start",
	"align-horizontal-space-around",
	"align-horizontal-space-between",
	"align-left",
	"align-right",
	"align-start-horizontal",
	"align-start-vertical",
	"align-vertical-distribute-center",
	"align-vertical-distribute-end",
	"align-vertical-distribute-start",
	"align-vertical-justify-center",
	"align-vertical-justify-end",
	"align-vertical-justify-start",
	"align-vertical-space-around",
	"align-vertical-space-between",
	"ambulance",
	"ampersand",
	"ampersands",
	"amphora",
	"anchor",
	"angry",
	"annoyed",
	"antenna",
	"anvil",
	"aperture",
	"app-window",
	"app-window-mac",
	"apple",
	"archive",
	"archive-restore",
	"archive-x",
	"armchair",
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
	"arrow-down-from-line",
	"arrow-down-left",
	"arrow-down-narrow-wide",
	"arrow-down-right",
	"arrow-down-to-dot",
	"arrow-down-to-line",
	"arrow-down-up",
	"arrow-down-wide-narrow",
	"arrow-down-z-a",
	"arrow-left",
	"arrow-left-from-line",
	"arrow-left-right",
	"arrow-left-to-line",
	"arrow-right",
	"arrow-right-from-line",
	"arrow-right-left",
	"arrow-right-to-line",
	"arrow-up",
	"arrow-up-0-1",
	"arrow-up-1-0",
	"arrow-up-az",
	"arrow-up-down",
	"arrow-up-from-dot",
	"arrow-up-from-line",
	"arrow-up-left",
	"arrow-up-narrow-wide",
	"arrow-up-right",
	"arrow-up-to-line",
	"arrow-up-wide-narrow",
	"arrow-up-za",
	"arrows-up-from-line",
	"asterisk",
	"at-sign",
	"atom",
	"audio-lines",
	"audio-waveform",
	"award",
	"axe",
	"axis-3d",
	"baby",
	"backpack",
	"badge",
	"badge-alert",
	"badge-cent",
	"badge-check",
	"badge-dollar-sign",
	"badge-euro",
	"badge-indian-rupee",
	"badge-info",
	"badge-japanese-yen",
	"badge-minus",
	"badge-percent",
	"badge-plus",
	"badge-pound-sterling",
	"badge-question-mark",
	"badge-russian-ruble",
	"badge-swiss-franc",
	"badge-turkish-lira",
	"badge-x",
	"baggage-claim",
	"balloon",
	"ban",
	"banana",
	"bandage",
	"banknote",
	"banknote-arrow-down",
	"banknote-arrow-up",
	"banknote-x",
	"barcode",
	"barrel",
	"baseline",
	"bath",
	"battery",
	"battery-charging",
	"battery-full",
	"battery-low",
	"battery-medium",
	"battery-plus",
	"battery-warning",
	"beaker",
	"bean",
	"bean-off",
	"bed",
	"bed-double",
	"bed-single",
	"beef",
	"beer",
	"beer-off",
	"bell",
	"bell-dot",
	"bell-electric",
	"bell-minus",
	"bell-off",
	"bell-plus",
	"bell-ring",
	"between-horizontal-end",
	"between-horizontal-start",
	"between-vertical-end",
	"between-vertical-start",
	"biceps-flexed",
	"bike",
	"binary",
	"binoculars",
	"biohazard",
	"bird",
	"birdhouse",
	"bitcoin",
	"blend",
	"blinds",
	"blocks",
	"bluetooth",
	"bluetooth-connected",
	"bluetooth-off",
	"bluetooth-searching",
	"bold",
	"bolt",
	"bomb",
	"bone",
	"book",
	"book-a",
	"book-alert",
	"book-audio",
	"book-bookmark",
	"book-check",
	"book-copy",
	"book-dashed",
	"book-down",
	"book-headphones",
	"book-heart",
	"book-image",
	"book-key",
	"book-lock",
	"book-minus",
	"book-open",
	"book-open-check",
	"book-open-text",
	"book-plus",
	"book-search",
	"book-text",
	"book-type",
	"book-up",
	"book-up-2",
	"book-user",
	"book-x",
	"bookmark",
	"bookmark-check",
	"bookmark-minus",
	"bookmark-plus",
	"bookmark-x",
	"boom-box",
	"bot",
	"bot-message-square",
	"bot-off",
	"bottle-wine",
	"bow-arrow",
	"box",
	"boxes",
	"braces",
	"brackets",
	"brain",
	"brain-circuit",
	"brain-cog",
	"brick-wall",
	"brick-wall-fire",
	"brick-wall-shield",
	"briefcase",
	"briefcase-business",
	"briefcase-conveyor-belt",
	"briefcase-medical",
	"bring-to-front",
	"brush",
	"brush-cleaning",
	"bubbles",
	"bug",
	"bug-off",
	"bug-play",
	"building",
	"building-complex",
	"bus",
	"bus-front",
	"cable",
	"cable-car",
	"cake",
	"cake-slice",
	"calculator",
	"calendar",
	"calendar-1",
	"calendar-arrow-down",
	"calendar-arrow-up",
	"calendar-check",
	"calendar-check-2",
	"calendar-clock",
	"calendar-cog",
	"calendar-days",
	"calendar-fold",
	"calendar-heart",
	"calendar-minus",
	"calendar-minus-2",
	"calendar-off",
	"calendar-plus",
	"calendar-plus-2",
	"calendar-range",
	"calendar-search",
	"calendar-sync",
	"calendar-x",
	"calendar-x2",
	"calendars",
	"camera",
	"camera-off",
	"candy",
	"candy-cane",
	"candy-off",
	"cannabis",
	"cannabis-off",
	"captions",
	"captions-off",
	"car",
	"car-front",
	"car-taxi-front",
	"caravan",
	"card-sim",
	"carrot",
	"case-lower",
	"case-sensitive",
	"case-upper",
	"cassette-tape",
	"cast",
	"castle",
	"cat",
	"cctv",
	"chart-area",
	"chart-bar",
	"chart-bar-big",
	"chart-bar-decreasing",
	"chart-bar-increasing",
	"chart-bar-stacked",
	"chart-candlestick",
	"chart-column",
	"chart-column-big",
	"chart-column-decreasing",
	"chart-column-increasing",
	"chart-column-stacked",
	"chart-gantt",
	"chart-line",
	"chart-network",
	"chart-no-axes-column",
	"chart-no-axes-column-decreasing",
	"chart-no-axes-column-increasing",
	"chart-no-axes-combined",
	"chart-no-axes-gantt",
	"chart-pie",
	"chart-scatter",
	"chart-spline",
	"check",
	"check-check",
	"check-line",
	"chef-hat",
	"cherry",
	"chess-bishop",
	"chess-king",
	"chess-knight",
	"chess-pawn",
	"chess-queen",
	"chess-rook",
	"chevron-down",
	"chevron-first",
	"chevron-last",
	"chevron-left",
	"chevron-right",
	"chevron-up",
	"chevrons-down",
	"chevrons-down-up",
	"chevrons-left",
	"chevrons-left-right",
	"chevrons-left-right-ellipsis",
	"chevrons-right",
	"chevrons-right-left",
	"chevrons-up",
	"chevrons-up-down",
	"chrome",
	"church",
	"cigarette",
	"cigarette-off",
	"circle",
	"circle-alert",
	"circle-arrow-down",
	"circle-arrow-left",
	"circle-arrow-out-down-left",
	"circle-arrow-out-down-right",
	"circle-arrow-out-up-left",
	"circle-arrow-out-up-right",
	"circle-arrow-right",
	"circle-arrow-up",
	"circle-check",
	"circle-check-big",
	"circle-chevron-down",
	"circle-chevron-left",
	"circle-chevron-right",
	"circle-chevron-up",
	"circle-dashed",
	"circle-divide",
	"circle-dollar-sign",
	"circle-dot",
	"circle-dot-dashed",
	"circle-ellipsis",
	"circle-equal",
	"circle-fading-arrow-up",
	"circle-fading-plus",
	"circle-gauge",
	"circle-help",
	"circle-minus",
	"circle-off",
	"circle-parking",
	"circle-parking-off",
	"circle-pause",
	"circle-percent",
	"circle-pile",
	"circle-play",
	"circle-plus",
	"circle-pound-sterling",
	"circle-power",
	"circle-slash",
	"circle-slash-2",
	"circle-small",
	"circle-star",
	"circle-stop",
	"circle-user",
	"circle-user-round",
	"circle-x",
	"circuit-board",
	"citrus",
	"clap",
	"clapperboard",
	"clipboard",
	"clipboard-check",
	"clipboard-clock",
	"clipboard-copy",
	"clipboard-list",
	"clipboard-minus",
	"clipboard-paste",
	"clipboard-pen",
	"clipboard-pen-line",
	"clipboard-plus",
	"clipboard-type",
	"clipboard-x",
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
	"clock-alert",
	"clock-arrow-down",
	"clock-arrow-up",
	"clock-check",
	"clock-fading",
	"clock-plus",
	"closed-caption",
	"cloud",
	"cloud-alert",
	"cloud-backup",
	"cloud-check",
	"cloud-cog",
	"cloud-download",
	"cloud-drizzle",
	"cloud-fog",
	"cloud-hail",
	"cloud-lightning",
	"cloud-moon",
	"cloud-moon-rain",
	"cloud-off",
	"cloud-rain",
	"cloud-rain-wind",
	"cloud-snow",
	"cloud-sun",
	"cloud-sun-rain",
	"cloud-sync",
	"cloud-upload",
	"cloudy",
	"clover",
	"club",
	"code",
	"code-xml",
	"coffee",
	"cog",
	"coins",
	"columns-2",
	"columns-3",
	"columns-3-cog",
	"columns-4",
	"combine",
	"command",
	"compass",
	"component",
	"computer",
	"concierge-bell",
	"cone",
	"construction",
	"contact",
	"contact-round",
	"container",
	"contrast",
	"cookie",
	"cooking-pot",
	"copy",
	"copy-check",
	"copy-minus",
	"copy-plus",
	"copy-slash",
	"copy-x",
	"copyleft",
	"copyright",
	"corner-down-left",
	"corner-down-right",
	"corner-left-down",
	"corner-left-up",
	"corner-right-down",
	"corner-right-up",
	"corner-up-left",
	"corner-up-right",
	"cpu",
	"creative-commons",
	"credit-card",
	"croissant",
	"crop",
	"cross",
	"crosshair",
	"crown",
	"cuboid",
	"cup-soda",
	"currency",
	"cylinder",
	"dam",
	"database",
	"database-backup",
	"database-search",
	"database-zap",
	"decimals-arrow-left",
	"decimals-arrow-right",
	"delete",
	"dessert",
	"diameter",
	"diamond",
	"diamond-minus",
	"diamond-percent",
	"diamond-plus",
	"dice-1",
	"dice-2",
	"dice-3",
	"dice-4",
	"dice-5",
	"dice-6",
	"dices",
	"diff",
	"disc",
	"disc-2",
	"disc-3",
	"disc-album",
	"discord",
	"divide",
	"dna",
	"dna-off",
	"dock",
	"dog",
	"dollar-sign",
	"donut",
	"door-closed",
	"door-closed-locked",
	"door-open",
	"dot",
	"download",
	"drafting-compass",
	"drama",
	"dribbble",
	"drill",
	"drone",
	"droplet",
	"droplet-off",
	"droplets",
	"drum",
	"drumstick",
	"dumbbell",
	"ear",
	"ear-off",
	"earth",
	"earth-lock",
	"eclipse",
	"egg",
	"egg-fried",
	"egg-off",
	"ellipse",
	"ellipsis",
	"ellipsis-vertical",
	"equal",
	"equal-approximately",
	"equal-not",
	"eraser",
	"ethernet-port",
	"euro",
	"ev-charger",
	"expand",
	"external-link",
	"eye",
	"eye-closed",
	"eye-off",
	"facebook",
	"factory",
	"fan",
	"fast-forward",
	"feather",
	"fence",
	"ferris-wheel",
	"figma",
	"file",
	"file-archive",
	"file-axis-3d",
	"file-badge",
	"file-box",
	"file-braces",
	"file-braces-corner",
	"file-chart-column",
	"file-chart-column-increasing",
	"file-chart-line",
	"file-chart-pie",
	"file-check",
	"file-check-2",
	"file-clock",
	"file-code",
	"file-code-corner",
	"file-cog",
	"file-diff",
	"file-digit",
	"file-down",
	"file-exclamation-point",
	"file-headphone",
	"file-heart",
	"file-image",
	"file-input",
	"file-key",
	"file-lock",
	"file-minus",
	"file-minus-corner",
	"file-music",
	"file-output",
	"file-pen",
	"file-pen-line",
	"file-play",
	"file-plus",
	"file-plus-corner",
	"file-question-mark",
	"file-scan",
	"file-search",
	"file-search-corner",
	"file-signal",
	"file-sliders",
	"file-spreadsheet",
	"file-stack",
	"file-symlink",
	"file-terminal",
	"file-text",
	"file-type",
	"file-type-corner",
	"file-up",
	"file-user",
	"file-video-camera",
	"file-volume",
	"file-x",
	"file-x-corner",
	"files",
	"film",
	"fingerprint",
	"fire-extinguisher",
	"fish",
	"fish-off",
	"fish-symbol",
	"fishing-hook",
	"fishing-rod",
	"flag",
	"flag-off",
	"flag-triangle-left",
	"flag-triangle-right",
	"flame",
	"flame-kindling",
	"flashlight",
	"flashlight-off",
	"flask-conical",
	"flask-conical-off",
	"flask-round",
	"flower",
	"flower-2",
	"focus",
	"fold-horizontal",
	"fold-vertical",
	"folder",
	"folder-archive",
	"folder-check",
	"folder-clock",
	"folder-closed",
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
	"folder-open-dot",
	"folder-output",
	"folder-pen",
	"folder-plus",
	"folder-root",
	"folder-search",
	"folder-search-2",
	"folder-symlink",
	"folder-sync",
	"folder-tree",
	"folder-up",
	"folder-x",
	"folders",
	"footprints",
	"forklift",
	"form",
	"forward",
	"frame",
	"frown",
	"fuel",
	"fullscreen",
	"funnel",
	"funnel-plus",
	"funnel-x",
	"gallery-horizontal",
	"gallery-horizontal-end",
	"gallery-thumbnails",
	"gallery-vertical",
	"gallery-vertical-end",
	"gamepad",
	"gamepad-2",
	"gamepad-directional",
	"gauge",
	"gavel",
	"gem",
	"georgian-lari",
	"ghost",
	"gift",
	"git-branch",
	"git-branch-minus",
	"git-branch-plus",
	"git-commit-horizontal",
	"git-commit-vertical",
	"git-compare",
	"git-compare-arrows",
	"git-fork",
	"git-graph",
	"git-merge",
	"git-merge-conflict",
	"git-pull-request",
	"git-pull-request-arrow",
	"git-pull-request-closed",
	"git-pull-request-create",
	"git-pull-request-create-arrow",
	"git-pull-request-draft",
	"github",
	"gitlab",
	"glass-water",
	"glasses",
	"globe",
	"globe-lock",
	"globe-off",
	"globe-x",
	"goal",
	"gpu",
	"graduation-cap",
	"grape",
	"grid-2-x-2",
	"grid-2-x-2-check",
	"grid-2-x-2-plus",
	"grid-2-x-2-x",
	"grid-3-x-2",
	"grid-3-x-3",
	"grip",
	"grip-horizontal",
	"grip-vertical",
	"group",
	"guitar",
	"ham",
	"hamburger",
	"hammer",
	"hand",
	"hand-coins",
	"hand-fist",
	"hand-grab",
	"hand-heart",
	"hand-helping",
	"hand-metal",
	"hand-platter",
	"handbag",
	"handshake",
	"hard-drive",
	"hard-drive-download",
	"hard-drive-upload",
	"hard-hat",
	"hash",
	"hat-glasses",
	"haze",
	"hd",
	"hdmi-port",
	"heading",
	"heading-1",
	"heading-2",
	"heading-3",
	"heading-4",
	"heading-5",
	"heading-6",
	"headphone-off",
	"headphones",
	"headset",
	"heart",
	"heart-crack",
	"heart-handshake",
	"heart-minus",
	"heart-off",
	"heart-plus",
	"heart-pulse",
	"heater",
	"helicopter",
	"hexagon",
	"highlighter",
	"history",
	"home",
	"hop",
	"hop-off",
	"hospital",
	"hotel",
	"hourglass",
	"house-heart",
	"house-plug",
	"house-plus",
	"house-wifi",
	"ice-cream-bowl",
	"ice-cream-cone",
	"id-card",
	"id-card-lanyard",
	"image",
	"image-down",
	"image-minus",
	"image-off",
	"image-play",
	"image-plus",
	"image-up",
	"image-upscale",
	"images",
	"import",
	"inbox",
	"indian-rupee",
	"infinity",
	"info",
	"inspection-panel",
	"instagram",
	"italic",
	"iteration-ccw",
	"iteration-cw",
	"japanese-yen",
	"joystick",
	"kanban",
	"kayak",
	"key",
	"key-round",
	"key-square",
	"keyboard",
	"keyboard-music",
	"keyboard-off",
	"lamp",
	"lamp-ceiling",
	"lamp-desk",
	"lamp-floor",
	"lamp-wall-down",
	"lamp-wall-up",
	"land-plot",
	"landmark",
	"languages",
	"laptop",
	"laptop-minimal",
	"laptop-minimal-check",
	"lasso",
	"lasso-select",
	"laugh",
	"layers",
	"layers-2",
	"layers-plus",
	"layout-dashboard",
	"layout-grid",
	"layout-list",
	"layout-panel-left",
	"layout-panel-top",
	"layout-template",
	"leaf",
	"leafy-green",
	"lectern",
	"lens-concave",
	"lens-convex",
	"library",
	"library-big",
	"life-buoy",
	"ligature",
	"lightbulb",
	"lightbulb-off",
	"line-dot-right-horizontal",
	"line-squiggle",
	"link",
	"link-2",
	"link-2-off",
	"linkedin",
	"list",
	"list-check",
	"list-checks",
	"list-chevrons-down-up",
	"list-chevrons-up-down",
	"list-collapse",
	"list-end",
	"list-filter",
	"list-filter-plus",
	"list-indent-decrease",
	"list-indent-increase",
	"list-minus",
	"list-music",
	"list-ordered",
	"list-plus",
	"list-restart",
	"list-start",
	"list-todo",
	"list-tree",
	"list-video",
	"list-x",
	"loader",
	"loader-circle",
	"loader-pinwheel",
	"locate",
	"locate-fixed",
	"locate-off",
	"lock",
	"lock-keyhole",
	"lock-keyhole-open",
	"lock-open",
	"log-in",
	"log-out",
	"logs",
	"lollipop",
	"luggage",
	"magnet",
	"mail",
	"mail-check",
	"mail-minus",
	"mail-open",
	"mail-plus",
	"mail-question-mark",
	"mail-search",
	"mail-warning",
	"mail-x",
	"mailbox",
	"mails",
	"map",
	"map-minus",
	"map-pin",
	"map-pin-check",
	"map-pin-check-inside",
	"map-pin-house",
	"map-pin-minus",
	"map-pin-minus-inside",
	"map-pin-off",
	"map-pin-pen",
	"map-pin-plus",
	"map-pin-plus-inside",
	"map-pin-x",
	"map-pin-x-inside",
	"map-pinned",
	"map-plus",
	"mars",
	"mars-stroke",
	"martini",
	"maximize",
	"maximize-2",
	"medal",
	"megaphone",
	"megaphone-off",
	"meh",
	"memory-stick",
	"menu",
	"merge",
	"message-circle",
	"message-circle-check",
	"message-circle-code",
	"message-circle-dashed",
	"message-circle-heart",
	"message-circle-more",
	"message-circle-off",
	"message-circle-plus",
	"message-circle-question",
	"message-circle-reply",
	"message-circle-warning",
	"message-circle-x",
	"message-square",
	"message-square-check",
	"message-square-code",
	"message-square-dashed",
	"message-square-diff",
	"message-square-dot",
	"message-square-heart",
	"message-square-lock",
	"message-square-more",
	"message-square-off",
	"message-square-plus",
	"message-square-quote",
	"message-square-reply",
	"message-square-share",
	"message-square-text",
	"message-square-warning",
	"message-square-x",
	"messages-square",
	"metronome",
	"mic",
	"mic-off",
	"mic-signal",
	"mic-vocal",
	"microchip",
	"microscope",
	"microwave",
	"milestone",
	"milk",
	"milk-off",
	"minimize",
	"minimize-2",
	"minus",
	"mirror-rectangular",
	"mirror-round",
	"monitor",
	"monitor-check",
	"monitor-cloud",
	"monitor-cog",
	"monitor-dot",
	"monitor-down",
	"monitor-off",
	"monitor-pause",
	"monitor-play",
	"monitor-smartphone",
	"monitor-speaker",
	"monitor-stop",
	"monitor-up",
	"monitor-x",
	"moon",
	"moon-star",
	"motorbike",
	"mountain",
	"mountain-snow",
	"mouse",
	"mouse-left",
	"mouse-off",
	"mouse-pointer",
	"mouse-pointer-2",
	"mouse-pointer-2-off",
	"mouse-pointer-ban",
	"mouse-pointer-click",
	"mouse-right",
	"move",
	"move-3d",
	"move-diagonal",
	"move-diagonal-2",
	"move-down",
	"move-down-left",
	"move-down-right",
	"move-horizontal",
	"move-left",
	"move-right",
	"move-up",
	"move-up-left",
	"move-up-right",
	"move-vertical",
	"music",
	"music-2",
	"music-3",
	"music-4",
	"navigation",
	"navigation-2",
	"navigation-2-off",
	"navigation-off",
	"network",
	"newspaper",
	"nfc",
	"non-binary",
	"notebook",
	"notebook-pen",
	"notebook-tabs",
	"notebook-text",
	"notepad-text",
	"notepad-text-dashed",
	"nut",
	"nut-off",
	"octagon",
	"octagon-alert",
	"octagon-minus",
	"octagon-pause",
	"octagon-x",
	"omega",
	"option",
	"orbit",
	"origami",
	"package",
	"package-2",
	"package-check",
	"package-minus",
	"package-open",
	"package-plus",
	"package-search",
	"package-x",
	"paint-bucket",
	"paint-roller",
	"paintbrush",
	"paintbrush-vertical",
	"palette",
	"panda",
	"panel-bottom",
	"panel-bottom-close",
	"panel-bottom-dashed",
	"panel-bottom-open",
	"panel-left",
	"panel-left-close",
	"panel-left-dashed",
	"panel-left-open",
	"panel-left-right-dashed",
	"panel-right",
	"panel-right-close",
	"panel-right-dashed",
	"panel-right-open",
	"panel-top",
	"panel-top-bottom-dashed",
	"panel-top-close",
	"panel-top-dashed",
	"panel-top-open",
	"panels-left-bottom",
	"panels-right-bottom",
	"panels-top-left",
	"paperclip",
	"parentheses",
	"parking-meter",
	"party-popper",
	"pause",
	"paw-print",
	"pc-case",
	"pen",
	"pen-line",
	"pen-off",
	"pen-tool",
	"pencil",
	"pencil-line",
	"pencil-off",
	"pencil-ruler",
	"pentagon",
	"percent",
	"person-standing",
	"philippine-peso",
	"phone",
	"phone-call",
	"phone-forwarded",
	"phone-incoming",
	"phone-missed",
	"phone-off",
	"phone-outgoing",
	"pi",
	"piano",
	"pickaxe",
	"picture-in-picture",
	"picture-in-picture-2",
	"piggy-bank",
	"pilcrow",
	"pilcrow-left",
	"pilcrow-right",
	"pill",
	"pill-bottle",
	"pin",
	"pin-off",
	"pipette",
	"pizza",
	"plane",
	"plane-landing",
	"plane-takeoff",
	"play",
	"plug",
	"plug-2",
	"plug-zap",
	"plus",
	"pocket-knife",
	"pointer",
	"pointer-off",
	"popcorn",
	"popsicle",
	"pound-sterling",
	"power",
	"power-off",
	"presentation",
	"printer",
	"printer-check",
	"printer-x",
	"projector",
	"proportions",
	"puzzle",
	"pyramid",
	"qr-code",
	"quote",
	"rabbit",
	"radar",
	"radiation",
	"radical",
	"radio",
	"radio-receiver",
	"radio-tower",
	"radius",
	"rainbow",
	"rat",
	"ratio",
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
	"rectangle-circle",
	"rectangle-ellipsis",
	"rectangle-goggles",
	"rectangle-horizontal",
	"rectangle-vertical",
	"recycle",
	"redo",
	"redo-2",
	"redo-dot",
	"refresh-ccw",
	"refresh-ccw-dot",
	"refresh-cw",
	"refresh-cw-off",
	"refrigerator",
	"regex",
	"remove-formatting",
	"repeat",
	"repeat-1",
	"repeat-2",
	"replace",
	"replace-all",
	"reply",
	"reply-all",
	"rewind",
	"ribbon",
	"rocket",
	"rocking-chair",
	"roller-coaster",
	"rose",
	"rotate-3d",
	"rotate-ccw",
	"rotate-ccw-key",
	"rotate-ccw-square",
	"rotate-cw",
	"rotate-cw-square",
	"route",
	"route-off",
	"router",
	"rows-2",
	"rows-3",
	"rows-4",
	"rss",
	"ruler",
	"ruler-dimension-line",
	"russian-ruble",
	"sailboat",
	"salad",
	"sandwich",
	"satellite",
	"satellite-dish",
	"saudi-riyal",
	"save",
	"save-all",
	"save-off",
	"scale",
	"scale-3d",
	"scaling",
	"scan",
	"scan-barcode",
	"scan-eye",
	"scan-face",
	"scan-heart",
	"scan-line",
	"scan-qr-code",
	"scan-search",
	"scan-text",
	"school",
	"scissors",
	"scissors-line-dashed",
	"scooter",
	"screen-share",
	"screen-share-off",
	"scroll",
	"scroll-text",
	"search",
	"search-alert",
	"search-check",
	"search-code",
	"search-slash",
	"search-x",
	"section",
	"send",
	"send-horizontal",
	"send-to-back",
	"separator-horizontal",
	"separator-vertical",
	"server",
	"server-cog",
	"server-crash",
	"server-off",
	"settings",
	"settings-2",
	"shapes",
	"share",
	"share-2",
	"sheet",
	"shell",
	"shelving-unit",
	"shield",
	"shield-alert",
	"shield-ban",
	"shield-check",
	"shield-ellipsis",
	"shield-half",
	"shield-minus",
	"shield-off",
	"shield-plus",
	"shield-question-mark",
	"shield-user",
	"shield-x",
	"ship",
	"ship-wheel",
	"shirt",
	"shopping-bag",
	"shopping-basket",
	"shopping-cart",
	"shovel",
	"shower-head",
	"shredder",
	"shrimp",
	"shrink",
	"shrub",
	"shuffle",
	"sigma",
	"signal",
	"signal-high",
	"signal-low",
	"signal-medium",
	"signal-zero",
	"signature",
	"signpost",
	"signpost-big",
	"siren",
	"skip-back",
	"skip-forward",
	"skull",
	"slash",
	"slice",
	"sliders-horizontal",
	"sliders-vertical",
	"smartphone",
	"smartphone-charging",
	"smartphone-nfc",
	"smile",
	"smile-plus",
	"snail",
	"snowflake",
	"soap-dispenser-droplet",
	"sofa",
	"solar-panel",
	"soup",
	"space",
	"spade",
	"sparkle",
	"sparkles",
	"speaker",
	"speech",
	"spell-check",
	"spell-check-2",
	"spline",
	"spline-pointer",
	"split",
	"spool",
	"spotlight",
	"spray-can",
	"sprout",
	"square",
	"square-activity",
	"square-arrow-down",
	"square-arrow-down-left",
	"square-arrow-down-right",
	"square-arrow-left",
	"square-arrow-out-down-left",
	"square-arrow-out-down-right",
	"square-arrow-out-up-left",
	"square-arrow-out-up-right",
	"square-arrow-right",
	"square-arrow-right-enter",
	"square-arrow-right-exit",
	"square-arrow-up",
	"square-arrow-up-left",
	"square-arrow-up-right",
	"square-asterisk",
	"square-bookmark",
	"square-bottom-dashed-scissors",
	"square-centerline-dashed-horizontal",
	"square-centerline-dashed-vertical",
	"square-chart-gantt",
	"square-check",
	"square-check-big",
	"square-chevron-down",
	"square-chevron-left",
	"square-chevron-right",
	"square-chevron-up",
	"square-code",
	"square-dashed",
	"square-dashed-bottom",
	"square-dashed-bottom-code",
	"square-dashed-kanban",
	"square-dashed-mouse-pointer",
	"square-dashed-text",
	"square-dashed-top-solid",
	"square-divide",
	"square-dot",
	"square-equal",
	"square-function",
	"square-kanban",
	"square-library",
	"square-m",
	"square-menu",
	"square-minus",
	"square-mouse-pointer",
	"square-parking",
	"square-parking-off",
	"square-pause",
	"square-pen",
	"square-percent",
	"square-pi",
	"square-pilcrow",
	"square-play",
	"square-plus",
	"square-power",
	"square-radical",
	"square-round-corner",
	"square-scissors",
	"square-sigma",
	"square-slash",
	"square-split-horizontal",
	"square-split-vertical",
	"square-square",
	"square-stack",
	"square-star",
	"square-stop",
	"square-terminal",
	"square-user",
	"square-user-round",
	"square-x",
	"squares-exclude",
	"squares-intersect",
	"squares-subtract",
	"squares-unite",
	"squircle",
	"squircle-dashed",
	"squirrel",
	"stamp",
	"star",
	"star-half",
	"star-off",
	"step-back",
	"step-forward",
	"stethoscope",
	"sticker",
	"sticky-note",
	"stone",
	"store",
	"stretch-horizontal",
	"stretch-vertical",
	"strikethrough",
	"subscript",
	"sun",
	"sun-dim",
	"sun-medium",
	"sun-moon",
	"sun-snow",
	"sunrise",
	"sunset",
	"superscript",
	"swatch-book",
	"swiss-franc",
	"switch-camera",
	"sword",
	"swords",
	"syringe",
	"table",
	"table-2",
	"table-cells-merge",
	"table-cells-split",
	"table-columns-split",
	"table-of-contents",
	"table-properties",
	"table-rows-split",
	"tablet",
	"tablet-smartphone",
	"tablets",
	"tag",
	"tags",
	"tally-1",
	"tally-2",
	"tally-3",
	"tally-4",
	"tally-5",
	"tangent",
	"target",
	"telescope",
	"tent",
	"tent-tree",
	"terminal",
	"test-tube",
	"test-tube-diagonal",
	"test-tubes",
	"text-align-justify",
	"text-cursor",
	"text-cursor-input",
	"text-initial",
	"text-quote",
	"text-search",
	"text-wrap",
	"theater",
	"thermometer",
	"thermometer-snowflake",
	"thermometer-sun",
	"thumbs-down",
	"thumbs-up",
	"ticket",
	"ticket-check",
	"ticket-minus",
	"ticket-percent",
	"ticket-plus",
	"ticket-slash",
	"ticket-x",
	"tickets",
	"tickets-plane",
	"timer",
	"timer-off",
	"timer-reset",
	"toggle-left",
	"toggle-right",
	"toilet",
	"tool-case",
	"toolbox",
	"tornado",
	"torus",
	"touchpad",
	"touchpad-off",
	"towel-rack",
	"tower-control",
	"toy-brick",
	"tractor",
	"traffic-cone",
	"train-front",
	"train-front-tunnel",
	"train-track",
	"tram-front",
	"transgender",
	"trash",
	"trash-2",
	"tree-deciduous",
	"tree-palm",
	"tree-pine",
	"trees",
	"trending-down",
	"trending-up",
	"trending-up-down",
	"triangle",
	"triangle-alert",
	"triangle-dashed",
	"triangle-right",
	"triangles-centerline-dashed-horizontal",
	"triangles-centerline-dashed-vertical",
	"trophy",
	"truck",
	"truck-electric",
	"turkish-lira",
	"turntable",
	"turtle",
	"tv",
	"tv-minimal",
	"tv-minimal-play",
	"twitch",
	"twitter",
	"type",
	"type-outline",
	"umbrella",
	"umbrella-off",
	"underline",
	"undo",
	"undo-2",
	"undo-dot",
	"unfold-horizontal",
	"unfold-vertical",
	"ungroup",
	"university",
	"unlink",
	"unlink-2",
	"unplug",
	"upload",
	"usb",
	"user",
	"user-check",
	"user-cog",
	"user-key",
	"user-lock",
	"user-minus",
	"user-pen",
	"user-plus",
	"user-round",
	"user-round-check",
	"user-round-cog",
	"user-round-key",
	"user-round-minus",
	"user-round-pen",
	"user-round-plus",
	"user-round-search",
	"user-round-x",
	"user-search",
	"user-star",
	"user-x",
	"users",
	"users-round",
	"utensils",
	"utensils-crossed",
	"utility-pole",
	"van",
	"variable",
	"vault",
	"vector-square",
	"vegan",
	"venetian-mask",
	"venus",
	"venus-and-mars",
	"vibrate",
	"vibrate-off",
	"video",
	"video-off",
	"videotape",
	"view",
	"voicemail",
	"volleyball",
	"volume",
	"volume-1",
	"volume-2",
	"volume-off",
	"volume-x",
	"vote",
	"wallet",
	"wallet-cards",
	"wallet-minimal",
	"wallpaper",
	"wand",
	"wand-sparkles",
	"warehouse",
	"washing-machine",
	"watch",
	"waves",
	"waves-arrow-down",
	"waves-arrow-up",
	"waves-ladder",
	"waypoints",
	"webcam",
	"webhook",
	"webhook-off",
	"weight",
	"weight-tilde",
	"wheat",
	"wheat-off",
	"whole-word",
	"wifi",
	"wifi-cog",
	"wifi-high",
	"wifi-low",
	"wifi-off",
	"wifi-pen",
	"wifi-sync",
	"wifi-zero",
	"wind",
	"wind-arrow-down",
	"wine",
	"wine-off",
	"workflow",
	"worm",
	"wrench",
	"x",
	"x-line-top",
	"youtube",
	"zap",
	"zap-off",
	"zodiac-aquarius",
	"zodiac-aries",
	"zodiac-cancer",
	"zodiac-capricorn",
	"zodiac-gemini",
	"zodiac-leo",
	"zodiac-libra",
	"zodiac-ophiuchus",
	"zodiac-pisces",
	"zodiac-sagittarius",
	"zodiac-scorpio",
	"zodiac-taurus",
	"zodiac-virgo",
	"zoom-in",
	"zoom-out"
];
var aliases = {
	"a-arrow-down-icon": "a-arrow-down",
	"a-arrow-up-icon": "a-arrow-up",
	"accessibility-icon": "accessibility",
	"activity-icon": "activity",
	"activity-square": "square-activity",
	"activity-square-icon": "square-activity",
	"ad-icon": "ad",
	"airplay-icon": "airplay",
	"air-vent-icon": "air-vent",
	"a-large-small-icon": "a-large-small",
	"alarm-check": "alarm-clock-check",
	"alarm-check-icon": "alarm-clock-check",
	"alarm-clock-check-icon": "alarm-clock-check",
	"alarm-clock-icon": "alarm-clock",
	"alarm-clock-minus-icon": "alarm-clock-minus",
	"alarm-clock-off-icon": "alarm-clock-off",
	"alarm-clock-plus-icon": "alarm-clock-plus",
	"alarm-minus": "alarm-clock-minus",
	"alarm-minus-icon": "alarm-clock-minus",
	"alarm-plus": "alarm-clock-plus",
	"alarm-plus-icon": "alarm-clock-plus",
	"alarm-smoke-icon": "alarm-smoke",
	album: "square-bookmark",
	"album-icon": "square-bookmark",
	"alert-circle": "circle-alert",
	"alert-circle-icon": "circle-alert",
	"alert-octagon": "octagon-alert",
	"alert-octagon-icon": "octagon-alert",
	"alert-triangle": "triangle-alert",
	"alert-triangle-icon": "triangle-alert",
	"align-center-horizontal-icon": "align-center-horizontal",
	"align-center-icon": "align-center",
	"align-center-vertical-icon": "align-center-vertical",
	"align-end-horizontal-icon": "align-end-horizontal",
	"align-end-vertical-icon": "align-end-vertical",
	"align-horizontal-distribute-center-icon": "align-horizontal-distribute-center",
	"align-horizontal-distribute-end-icon": "align-horizontal-distribute-end",
	"align-horizontal-distribute-start-icon": "align-horizontal-distribute-start",
	"align-horizontal-justify-center-icon": "align-horizontal-justify-center",
	"align-horizontal-justify-end-icon": "align-horizontal-justify-end",
	"align-horizontal-justify-start-icon": "align-horizontal-justify-start",
	"align-horizontal-space-around-icon": "align-horizontal-space-around",
	"align-horizontal-space-between-icon": "align-horizontal-space-between",
	"align-justify": "text-align-justify",
	"align-justify-icon": "text-align-justify",
	"align-left-icon": "align-left",
	"align-right-icon": "align-right",
	"align-start-horizontal-icon": "align-start-horizontal",
	"align-start-vertical-icon": "align-start-vertical",
	"align-vertical-distribute-center-icon": "align-vertical-distribute-center",
	"align-vertical-distribute-end-icon": "align-vertical-distribute-end",
	"align-vertical-distribute-start-icon": "align-vertical-distribute-start",
	"align-vertical-justify-center-icon": "align-vertical-justify-center",
	"align-vertical-justify-end-icon": "align-vertical-justify-end",
	"align-vertical-justify-start-icon": "align-vertical-justify-start",
	"align-vertical-space-around-icon": "align-vertical-space-around",
	"align-vertical-space-between-icon": "align-vertical-space-between",
	"ambulance-icon": "ambulance",
	"ampersand-icon": "ampersand",
	"ampersands-icon": "ampersands",
	"amphora-icon": "amphora",
	"anchor-icon": "anchor",
	"angle-icon": "angle",
	"angry-icon": "angry",
	"annoyed-icon": "annoyed",
	"antenna-icon": "antenna",
	"anvil-icon": "anvil",
	"aperture-icon": "aperture",
	"apple-icon": "apple",
	"app-window-icon": "app-window",
	"app-window-mac-icon": "app-window-mac",
	"archive-icon": "archive",
	"archive-restore-icon": "archive-restore",
	"archive-x-icon": "archive-x",
	"area-chart": "chart-area",
	"area-chart-icon": "chart-area",
	"armchair-icon": "armchair",
	"armenian-dram-icon": "armenian-dram",
	"arrow-big-down-dash-icon": "arrow-big-down-dash",
	"arrow-big-down-icon": "arrow-big-down",
	"arrow-big-left-dash-icon": "arrow-big-left-dash",
	"arrow-big-left-icon": "arrow-big-left",
	"arrow-big-right-dash-icon": "arrow-big-right-dash",
	"arrow-big-right-icon": "arrow-big-right",
	"arrow-big-up-dash-icon": "arrow-big-up-dash",
	"arrow-big-up-icon": "arrow-big-up",
	"arrow-down-0-1-icon": "arrow-down-0-1",
	"arrow-down-1-0-icon": "arrow-down-1-0",
	"arrow-down-az": "arrow-down-a-z",
	"arrow-down-az-icon": "arrow-down-a-z",
	"arrow-down-circle": "circle-arrow-down",
	"arrow-down-circle-icon": "circle-arrow-down",
	"arrow-down-from-line-icon": "arrow-down-from-line",
	"arrow-down-icon": "arrow-down",
	"arrow-down-left-from-circle": "circle-arrow-out-down-left",
	"arrow-down-left-from-circle-icon": "circle-arrow-out-down-left",
	"arrow-down-left-from-square": "square-arrow-out-down-left",
	"arrow-down-left-from-square-icon": "square-arrow-out-down-left",
	"arrow-down-left-icon": "arrow-down-left",
	"arrow-down-left-square": "square-arrow-down-left",
	"arrow-down-left-square-icon": "square-arrow-down-left",
	"arrow-down-narrow-wide-icon": "arrow-down-narrow-wide",
	"arrow-down-right-from-circle": "circle-arrow-out-down-right",
	"arrow-down-right-from-circle-icon": "circle-arrow-out-down-right",
	"arrow-down-right-from-square": "square-arrow-out-down-right",
	"arrow-down-right-from-square-icon": "square-arrow-out-down-right",
	"arrow-down-right-icon": "arrow-down-right",
	"arrow-down-right-square": "square-arrow-down-right",
	"arrow-down-right-square-icon": "square-arrow-down-right",
	"arrow-down-square": "square-arrow-down",
	"arrow-down-square-icon": "square-arrow-down",
	"arrow-down-to-dot-icon": "arrow-down-to-dot",
	"arrow-down-to-line-icon": "arrow-down-to-line",
	"arrow-down-up-icon": "arrow-down-up",
	"arrow-down-wide-narrow-icon": "arrow-down-wide-narrow",
	"arrow-down-za": "arrow-down-z-a",
	"arrow-down-za-icon": "arrow-down-z-a",
	"arrow-left-circle": "circle-arrow-left",
	"arrow-left-circle-icon": "circle-arrow-left",
	"arrow-left-from-line-icon": "arrow-left-from-line",
	"arrow-left-icon": "arrow-left",
	"arrow-left-right-icon": "arrow-left-right",
	"arrow-left-square": "square-arrow-left",
	"arrow-left-square-icon": "square-arrow-left",
	"arrow-left-to-line-icon": "arrow-left-to-line",
	"arrow-right-circle": "circle-arrow-right",
	"arrow-right-circle-icon": "circle-arrow-right",
	"arrow-right-from-line-icon": "arrow-right-from-line",
	"arrow-right-icon": "arrow-right",
	"arrow-right-left-icon": "arrow-right-left",
	"arrow-right-square": "square-arrow-right",
	"arrow-right-square-icon": "square-arrow-right",
	"arrow-right-to-line-icon": "arrow-right-to-line",
	"arrows-up-from-line-icon": "arrows-up-from-line",
	"arrow-up-0-1-icon": "arrow-up-0-1",
	"arrow-up-1-0-icon": "arrow-up-1-0",
	"arrow-up-az-icon": "arrow-up-az",
	"arrow-up-circle": "circle-arrow-up",
	"arrow-up-circle-icon": "circle-arrow-up",
	"arrow-up-down-icon": "arrow-up-down",
	"arrow-up-from-dot-icon": "arrow-up-from-dot",
	"arrow-up-from-line-icon": "arrow-up-from-line",
	"arrow-up-icon": "arrow-up",
	"arrow-up-left-from-circle": "circle-arrow-out-up-left",
	"arrow-up-left-from-circle-icon": "circle-arrow-out-up-left",
	"arrow-up-left-from-square": "square-arrow-out-up-left",
	"arrow-up-left-from-square-icon": "square-arrow-out-up-left",
	"arrow-up-left-icon": "arrow-up-left",
	"arrow-up-left-square": "square-arrow-up-left",
	"arrow-up-left-square-icon": "square-arrow-up-left",
	"arrow-up-narrow-wide-icon": "arrow-up-narrow-wide",
	"arrow-up-right-from-circle": "circle-arrow-out-up-right",
	"arrow-up-right-from-circle-icon": "circle-arrow-out-up-right",
	"arrow-up-right-from-square": "square-arrow-out-up-right",
	"arrow-up-right-from-square-icon": "square-arrow-out-up-right",
	"arrow-up-right-icon": "arrow-up-right",
	"arrow-up-right-square": "square-arrow-up-right",
	"arrow-up-right-square-icon": "square-arrow-up-right",
	"arrow-up-square": "square-arrow-up",
	"arrow-up-square-icon": "square-arrow-up",
	"arrow-up-to-line-icon": "arrow-up-to-line",
	"arrow-up-wide-narrow-icon": "arrow-up-wide-narrow",
	"arrow-up-za-icon": "arrow-up-za",
	"asterisk-icon": "asterisk",
	"asterisk-square": "square-asterisk",
	"asterisk-square-icon": "square-asterisk",
	"astroid-icon": "astroid",
	"atom-icon": "atom",
	"at-sign-icon": "at-sign",
	"audio-lines-icon": "audio-lines",
	"audio-lines-off-icon": "audio-lines-off",
	"audio-lines-x-icon": "audio-lines-x",
	"audio-waveform-icon": "audio-waveform",
	"award-icon": "award",
	"axe-icon": "axe",
	"axis-3-d-icon": "axis-3d",
	"baby-icon": "baby",
	"backpack-icon": "backpack",
	"badge-alert-icon": "badge-alert",
	"badge-cent-icon": "badge-cent",
	"badge-check-icon": "badge-check",
	"badge-dollar-sign-icon": "badge-dollar-sign",
	"badge-euro-icon": "badge-euro",
	"badge-help": "badge-question-mark",
	"badge-help-icon": "badge-question-mark",
	"badge-icon": "badge",
	"badge-indian-rupee-icon": "badge-indian-rupee",
	"badge-info-icon": "badge-info",
	"badge-japanese-yen-icon": "badge-japanese-yen",
	"badge-minus-icon": "badge-minus",
	"badge-percent-icon": "badge-percent",
	"badge-plus-icon": "badge-plus",
	"badge-pound-sterling-icon": "badge-pound-sterling",
	"badge-question-mark-icon": "badge-question-mark",
	"badge-russian-ruble-icon": "badge-russian-ruble",
	"badge-swiss-franc-icon": "badge-swiss-franc",
	"badge-turkish-lira-icon": "badge-turkish-lira",
	"badge-x-icon": "badge-x",
	"baggage-claim-icon": "baggage-claim",
	"balloon-icon": "balloon",
	"banana-icon": "banana",
	"bandage-icon": "bandage",
	"bangladeshi-taka-icon": "bangladeshi-taka",
	"ban-icon": "ban",
	"banknote-arrow-down-icon": "banknote-arrow-down",
	"banknote-arrow-up-icon": "banknote-arrow-up",
	"banknote-check-icon": "banknote-check",
	"banknote-icon": "banknote",
	"banknote-x-icon": "banknote-x",
	"bar-chart": "chart-no-axes-column-increasing",
	"bar-chart-2": "chart-no-axes-column",
	"bar-chart-2-icon": "chart-no-axes-column",
	"bar-chart-3": "chart-column",
	"bar-chart-3-icon": "chart-column",
	"bar-chart-4": "chart-column-increasing",
	"bar-chart-4-icon": "chart-column-increasing",
	"bar-chart-big": "chart-column-big",
	"bar-chart-big-icon": "chart-column-big",
	"bar-chart-horizontal": "chart-bar",
	"bar-chart-horizontal-big": "chart-bar-big",
	"bar-chart-horizontal-big-icon": "chart-bar-big",
	"bar-chart-horizontal-icon": "chart-bar",
	"bar-chart-icon": "chart-no-axes-column-increasing",
	"barcode-icon": "barcode",
	"barrel-icon": "barrel",
	"baseline-icon": "baseline",
	"bath-icon": "bath",
	"battery-charging-icon": "battery-charging",
	"battery-full-icon": "battery-full",
	"battery-icon": "battery",
	"battery-low-icon": "battery-low",
	"battery-medium-icon": "battery-medium",
	"battery-plus-icon": "battery-plus",
	"battery-warning-icon": "battery-warning",
	"beaker-icon": "beaker",
	"bean-icon": "bean",
	"bean-off-icon": "bean-off",
	"bed-double-icon": "bed-double",
	"bed-icon": "bed",
	"bed-single-icon": "bed-single",
	"beef-icon": "beef",
	"beef-off-icon": "beef-off",
	"beer-icon": "beer",
	"beer-off-icon": "beer-off",
	"bell-check-icon": "bell-check",
	"bell-dot-icon": "bell-dot",
	"bell-electric-icon": "bell-electric",
	"bell-icon": "bell",
	"bell-minus-icon": "bell-minus",
	"bell-off-icon": "bell-off",
	"bell-plus-icon": "bell-plus",
	"bell-ring-icon": "bell-ring",
	"between-horizonal-end": "between-horizontal-end",
	"between-horizonal-end-icon": "between-horizontal-end",
	"between-horizonal-start": "between-horizontal-start",
	"between-horizonal-start-icon": "between-horizontal-start",
	"between-horizontal-end-icon": "between-horizontal-end",
	"between-horizontal-start-icon": "between-horizontal-start",
	"between-vertical-end-icon": "between-vertical-end",
	"between-vertical-start-icon": "between-vertical-start",
	"biceps-flexed-icon": "biceps-flexed",
	"bike-icon": "bike",
	"binary-icon": "binary",
	"binoculars-icon": "binoculars",
	"biohazard-icon": "biohazard",
	"birdhouse-icon": "birdhouse",
	"bird-icon": "bird",
	"bitcoin-icon": "bitcoin",
	"blender-icon": "blender",
	"blend-icon": "blend",
	"blinds-icon": "blinds",
	"blocks-icon": "blocks",
	"bluetooth-connected-icon": "bluetooth-connected",
	"bluetooth-icon": "bluetooth",
	"bluetooth-off-icon": "bluetooth-off",
	"bluetooth-searching-icon": "bluetooth-searching",
	"bold-icon": "bold",
	"bolt-icon": "bolt",
	"bomb-icon": "bomb",
	"bone-fracture-icon": "bone-fracture",
	"bone-icon": "bone",
	"book-a-icon": "book-a",
	"book-alert-icon": "book-alert",
	"book-audio-icon": "book-audio",
	"book-bookmark-icon": "book-bookmark",
	"book-check-icon": "book-check",
	"book-copy-icon": "book-copy",
	"book-dashed-icon": "book-dashed",
	"book-down-icon": "book-down",
	"book-headphones-icon": "book-headphones",
	"book-heart-icon": "book-heart",
	"book-icon": "book",
	"book-image-icon": "book-image",
	"book-key-icon": "book-key",
	"book-lock-icon": "book-lock",
	"bookmark-check-icon": "bookmark-check",
	"book-marked": "book-bookmark",
	"book-marked-icon": "book-bookmark",
	"bookmark-icon": "bookmark",
	"bookmark-minus-icon": "bookmark-minus",
	"bookmark-off-icon": "bookmark-off",
	"bookmark-plus-icon": "bookmark-plus",
	"bookmark-x-icon": "bookmark-x",
	"book-minus-icon": "book-minus",
	"book-open-check-icon": "book-open-check",
	"book-open-icon": "book-open",
	"book-open-text-icon": "book-open-text",
	"book-plus-icon": "book-plus",
	"book-search-icon": "book-search",
	"book-template": "book-dashed",
	"book-template-icon": "book-dashed",
	"book-text-icon": "book-text",
	"book-type-icon": "book-type",
	"book-up-2-icon": "book-up-2",
	"book-up-icon": "book-up",
	"book-user-icon": "book-user",
	"book-x-icon": "book-x",
	"boom-box-icon": "boom-box",
	"bot-icon": "bot",
	"bot-message-square-icon": "bot-message-square",
	"bot-off-icon": "bot-off",
	"bottle-wine-icon": "bottle-wine",
	"bow-arrow-icon": "bow-arrow",
	"boxes-icon": "boxes",
	"box-icon": "box",
	"box-select": "square-dashed",
	"box-select-icon": "square-dashed",
	"braces-icon": "braces",
	"brackets-icon": "brackets",
	"brain-circuit-icon": "brain-circuit",
	"brain-cog-icon": "brain-cog",
	"brain-icon": "brain",
	"brick-wall-fire-icon": "brick-wall-fire",
	"brick-wall-icon": "brick-wall",
	"brick-wall-shield-icon": "brick-wall-shield",
	"bridge-icon": "bridge",
	"briefcase-business-icon": "briefcase-business",
	"briefcase-conveyor-belt-icon": "briefcase-conveyor-belt",
	"briefcase-icon": "briefcase",
	"briefcase-medical-icon": "briefcase-medical",
	"briefcase-plus-icon": "briefcase-plus",
	"bring-to-front-icon": "bring-to-front",
	"broccoli-icon": "broccoli",
	"broom-icon": "broom",
	"broom-sparkles-icon": "broom-sparkles",
	"brush-cleaning-icon": "brush-cleaning",
	"brush-icon": "brush",
	"bubbles-icon": "bubbles",
	"bug-icon": "bug",
	"bug-off-icon": "bug-off",
	"bug-play-icon": "bug-play",
	"building-2": "building-complex",
	"building-2-icon": "building-complex",
	"building-complex-icon": "building-complex",
	"building-complex-plus-icon": "building-complex-plus",
	"building-icon": "building",
	"bus-front-icon": "bus-front",
	"bus-icon": "bus",
	"cable-car-icon": "cable-car",
	"cable-icon": "cable",
	"cake-icon": "cake",
	"cake-slice-icon": "cake-slice",
	"calculator-icon": "calculator",
	"calendar-1-icon": "calendar-1",
	"calendar-arrow-down-icon": "calendar-arrow-down",
	"calendar-arrow-up-icon": "calendar-arrow-up",
	"calendar-check-2-icon": "calendar-check-2",
	"calendar-check-icon": "calendar-check",
	"calendar-chevrons-right-icon": "calendar-chevrons-right",
	"calendar-clock-icon": "calendar-clock",
	"calendar-cog-icon": "calendar-cog",
	"calendar-days-icon": "calendar-days",
	"calendar-fold-icon": "calendar-fold",
	"calendar-heart-icon": "calendar-heart",
	"calendar-icon": "calendar",
	"calendar-minus-2-icon": "calendar-minus-2",
	"calendar-minus-icon": "calendar-minus",
	"calendar-off-icon": "calendar-off",
	"calendar-plus-2-icon": "calendar-plus-2",
	"calendar-plus-icon": "calendar-plus",
	"calendar-range-icon": "calendar-range",
	"calendar-search-icon": "calendar-search",
	"calendars-icon": "calendars",
	"calendar-sync-icon": "calendar-sync",
	"calendar-x2-icon": "calendar-x2",
	"calendar-x-icon": "calendar-x",
	"camera-icon": "camera",
	"camera-off-icon": "camera-off",
	"candlestick-chart": "chart-candlestick",
	"candlestick-chart-icon": "chart-candlestick",
	"candy-cane-icon": "candy-cane",
	"candy-icon": "candy",
	"candy-off-icon": "candy-off",
	"can-icon": "can",
	"cannabis-icon": "cannabis",
	"cannabis-off-icon": "cannabis-off",
	"can-soda-icon": "can-soda",
	"captions-icon": "captions",
	"captions-off-icon": "captions-off",
	"caravan-icon": "caravan",
	"car-battery-icon": "car-battery",
	"card-sim-icon": "card-sim",
	"car-front-icon": "car-front",
	"car-icon": "car",
	"carrot-icon": "carrot",
	"car-taxi-front-icon": "car-taxi-front",
	"carton-icon": "carton",
	"carton-off-icon": "carton-off",
	"case-lower-icon": "case-lower",
	"case-sensitive-icon": "case-sensitive",
	"case-upper-icon": "case-upper",
	"cassette-tape-icon": "cassette-tape",
	"cast-icon": "cast",
	"castle-icon": "castle",
	"cat-icon": "cat",
	"cctv-icon": "cctv",
	"cctv-off-icon": "cctv-off",
	"chart-area-icon": "chart-area",
	"chart-bar-big-icon": "chart-bar-big",
	"chart-bar-decreasing-icon": "chart-bar-decreasing",
	"chart-bar-icon": "chart-bar",
	"chart-bar-increasing-icon": "chart-bar-increasing",
	"chart-bar-stacked-icon": "chart-bar-stacked",
	"chart-candlestick-icon": "chart-candlestick",
	"chart-column-big-icon": "chart-column-big",
	"chart-column-decreasing-icon": "chart-column-decreasing",
	"chart-column-icon": "chart-column",
	"chart-column-increasing-icon": "chart-column-increasing",
	"chart-column-stacked-icon": "chart-column-stacked",
	"chart-gantt-icon": "chart-gantt",
	"chart-line-icon": "chart-line",
	"chart-network-icon": "chart-network",
	"chart-no-axes-column-decreasing-icon": "chart-no-axes-column-decreasing",
	"chart-no-axes-column-icon": "chart-no-axes-column",
	"chart-no-axes-column-increasing-icon": "chart-no-axes-column-increasing",
	"chart-no-axes-combined-icon": "chart-no-axes-combined",
	"chart-no-axes-gantt-icon": "chart-no-axes-gantt",
	"chart-pie-icon": "chart-pie",
	"chart-scatter-icon": "chart-scatter",
	"chart-spline-icon": "chart-spline",
	"check-check-icon": "check-check",
	"check-circle": "circle-check-big",
	"check-circle-2": "circle-check",
	"check-circle-2-icon": "circle-check",
	"check-circle-icon": "circle-check-big",
	"check-icon": "check",
	"check-line-icon": "check-line",
	"check-square": "square-check-big",
	"check-square-2": "square-check",
	"check-square-2-icon": "square-check",
	"check-square-icon": "square-check-big",
	"chef-hat-icon": "chef-hat",
	"cherry-icon": "cherry",
	"chess-bishop-icon": "chess-bishop",
	"chess-king-icon": "chess-king",
	"chess-knight-icon": "chess-knight",
	"chess-pawn-icon": "chess-pawn",
	"chess-queen-icon": "chess-queen",
	"chess-rook-icon": "chess-rook",
	"chevron-down-circle": "circle-chevron-down",
	"chevron-down-circle-icon": "circle-chevron-down",
	"chevron-down-icon": "chevron-down",
	"chevron-down-square": "square-chevron-down",
	"chevron-down-square-icon": "square-chevron-down",
	"chevron-first-icon": "chevron-first",
	"chevron-last-icon": "chevron-last",
	"chevron-left-circle": "circle-chevron-left",
	"chevron-left-circle-icon": "circle-chevron-left",
	"chevron-left-icon": "chevron-left",
	"chevron-left-square": "square-chevron-left",
	"chevron-left-square-icon": "square-chevron-left",
	"chevron-right-circle": "circle-chevron-right",
	"chevron-right-circle-icon": "circle-chevron-right",
	"chevron-right-icon": "chevron-right",
	"chevron-right-square": "square-chevron-right",
	"chevron-right-square-icon": "square-chevron-right",
	"chevrons-down-icon": "chevrons-down",
	"chevrons-down-up-icon": "chevrons-down-up",
	"chevrons-left-icon": "chevrons-left",
	"chevrons-left-right-ellipsis-icon": "chevrons-left-right-ellipsis",
	"chevrons-left-right-icon": "chevrons-left-right",
	"chevrons-right-icon": "chevrons-right",
	"chevrons-right-left-icon": "chevrons-right-left",
	"chevrons-up-down-icon": "chevrons-up-down",
	"chevrons-up-icon": "chevrons-up",
	"chevron-up-circle": "circle-chevron-up",
	"chevron-up-circle-icon": "circle-chevron-up",
	"chevron-up-icon": "chevron-up",
	"chevron-up-square": "square-chevron-up",
	"chevron-up-square-icon": "square-chevron-up",
	"church-icon": "church",
	"cigarette-icon": "cigarette",
	"cigarette-off-icon": "cigarette-off",
	"circle-alert-icon": "circle-alert",
	"circle-arrow-down-icon": "circle-arrow-down",
	"circle-arrow-left-icon": "circle-arrow-left",
	"circle-arrow-out-down-left-icon": "circle-arrow-out-down-left",
	"circle-arrow-out-down-right-icon": "circle-arrow-out-down-right",
	"circle-arrow-out-up-left-icon": "circle-arrow-out-up-left",
	"circle-arrow-out-up-right-icon": "circle-arrow-out-up-right",
	"circle-arrow-right-icon": "circle-arrow-right",
	"circle-arrow-up-icon": "circle-arrow-up",
	"circle-check-big-icon": "circle-check-big",
	"circle-check-icon": "circle-check",
	"circle-chevron-down-icon": "circle-chevron-down",
	"circle-chevron-left-icon": "circle-chevron-left",
	"circle-chevron-right-icon": "circle-chevron-right",
	"circle-chevron-up-icon": "circle-chevron-up",
	"circle-dashed-check-icon": "circle-dashed-check",
	"circle-dashed-icon": "circle-dashed",
	"circle-divide-icon": "circle-divide",
	"circle-dollar-sign-icon": "circle-dollar-sign",
	"circle-dot-dashed-icon": "circle-dot-dashed",
	"circle-dot-icon": "circle-dot",
	"circle-ellipsis-icon": "circle-ellipsis",
	"circle-equal-icon": "circle-equal",
	"circle-euro-icon": "circle-euro",
	"circle-fading-arrow-up-icon": "circle-fading-arrow-up",
	"circle-fading-plus-icon": "circle-fading-plus",
	"circle-gauge-icon": "circle-gauge",
	"circle-help-icon": "circle-help",
	"circle-icon": "circle",
	"circle-minus-icon": "circle-minus",
	"circle-off-icon": "circle-off",
	"circle-parking-icon": "circle-parking",
	"circle-parking-off-icon": "circle-parking-off",
	"circle-pause-icon": "circle-pause",
	"circle-percent-icon": "circle-percent",
	"circle-pile-icon": "circle-pile",
	"circle-play-icon": "circle-play",
	"circle-plus-icon": "circle-plus",
	"circle-pound-sterling-icon": "circle-pound-sterling",
	"circle-power-icon": "circle-power",
	"circle-question-mark": "circle-help",
	"circle-question-mark-icon": "circle-help",
	"circle-slash-2-icon": "circle-slash-2",
	"circle-slashed": "circle-slash-2",
	"circle-slashed-icon": "circle-slash-2",
	"circle-slash-icon": "circle-slash",
	"circle-small-icon": "circle-small",
	"circle-star-icon": "circle-star",
	"circle-stop-icon": "circle-stop",
	"circle-user-icon": "circle-user",
	"circle-user-round-icon": "circle-user-round",
	"circle-x-icon": "circle-x",
	"circuit-board-icon": "circuit-board",
	"citrus-icon": "citrus",
	"clapperboard-icon": "clapperboard",
	"clef-alto-icon": "clef-alto",
	"clef-bass-icon": "clef-bass",
	"clef-treble-icon": "clef-treble",
	"clipboard-check-icon": "clipboard-check",
	"clipboard-clock-icon": "clipboard-clock",
	"clipboard-copy-icon": "clipboard-copy",
	"clipboard-edit": "clipboard-pen",
	"clipboard-edit-icon": "clipboard-pen",
	"clipboard-icon": "clipboard",
	"clipboard-list-icon": "clipboard-list",
	"clipboard-minus-icon": "clipboard-minus",
	"clipboard-paste-icon": "clipboard-paste",
	"clipboard-pen-icon": "clipboard-pen",
	"clipboard-pen-line-icon": "clipboard-pen-line",
	"clipboard-plus-icon": "clipboard-plus",
	"clipboard-signature": "clipboard-pen-line",
	"clipboard-signature-icon": "clipboard-pen-line",
	"clipboard-type-icon": "clipboard-type",
	"clipboard-x-icon": "clipboard-x",
	"clock-1-0": "clock-10",
	"clock-1-0-icon": "clock-10",
	"clock-1-1": "clock-11",
	"clock-1-1-icon": "clock-11",
	"clock-1-2": "clock-12",
	"clock-1-2-icon": "clock-12",
	"clock-1-icon": "clock-1",
	"clock-2-icon": "clock-2",
	"clock-3-icon": "clock-3",
	"clock-4-icon": "clock-4",
	"clock-5-icon": "clock-5",
	"clock-6-icon": "clock-6",
	"clock-7-icon": "clock-7",
	"clock-8-icon": "clock-8",
	"clock-9-icon": "clock-9",
	"clock-alert-icon": "clock-alert",
	"clock-arrow-down-icon": "clock-arrow-down",
	"clock-arrow-left-icon": "clock-arrow-left",
	"clock-arrow-right-icon": "clock-arrow-right",
	"clock-arrow-up-icon": "clock-arrow-up",
	"clock-check-icon": "clock-check",
	"clock-fading-icon": "clock-fading",
	"clock-icon": "clock",
	"clock-plus-icon": "clock-plus",
	"closed-caption-icon": "closed-caption",
	"cloud-alert-icon": "cloud-alert",
	"cloud-backup-icon": "cloud-backup",
	"cloud-check-icon": "cloud-check",
	"cloud-cog-icon": "cloud-cog",
	"cloud-download-icon": "cloud-download",
	"cloud-drizzle-icon": "cloud-drizzle",
	"cloud-fog-icon": "cloud-fog",
	"cloud-hail-icon": "cloud-hail",
	"cloud-icon": "cloud",
	"cloud-lightning-icon": "cloud-lightning",
	"cloud-moon-icon": "cloud-moon",
	"cloud-moon-rain-icon": "cloud-moon-rain",
	"cloud-off-icon": "cloud-off",
	"cloud-rain-icon": "cloud-rain",
	"cloud-rain-wind-icon": "cloud-rain-wind",
	"cloud-snow-icon": "cloud-snow",
	"cloud-sun-icon": "cloud-sun",
	"cloud-sun-rain-icon": "cloud-sun-rain",
	"cloud-sync-icon": "cloud-sync",
	"cloud-upload-icon": "cloud-upload",
	"cloudy-icon": "cloudy",
	"clover-icon": "clover",
	"club-icon": "club",
	"code-2": "code-xml",
	"code-2-icon": "code-xml",
	"code-icon": "code",
	"code-square": "square-code",
	"code-square-icon": "square-code",
	"code-xml-icon": "code-xml",
	"coffee-icon": "coffee",
	"cog-icon": "cog",
	"coins-icon": "coins",
	columns: "columns-2",
	"columns-2-icon": "columns-2",
	"columns-3-cog-icon": "columns-3-cog",
	"columns-3-icon": "columns-3",
	"columns-4-icon": "columns-4",
	"columns-icon": "columns-2",
	"columns-settings": "columns-3-cog",
	"columns-settings-icon": "columns-3-cog",
	"combine-icon": "combine",
	"command-icon": "command",
	"compass-icon": "compass",
	"component-icon": "component",
	"computer-icon": "computer",
	"concierge-bell-icon": "concierge-bell",
	"cone-icon": "cone",
	"construction-icon": "construction",
	"contact-2": "contact-round",
	"contact-2-icon": "contact-round",
	"contact-icon": "contact",
	"contact-round-icon": "contact-round",
	"container-icon": "container",
	"contrast-icon": "contrast",
	"cookie-icon": "cookie",
	"cooking-pot-icon": "cooking-pot",
	"copy-check-icon": "copy-check",
	"copy-icon": "copy",
	"copyleft-icon": "copyleft",
	"copy-minus-icon": "copy-minus",
	"copy-plus-icon": "copy-plus",
	"copyright-icon": "copyright",
	"copy-slash-icon": "copy-slash",
	"copy-x-icon": "copy-x",
	"corner-down-left-icon": "corner-down-left",
	"corner-down-right-icon": "corner-down-right",
	"corner-left-down-icon": "corner-left-down",
	"corner-left-up-icon": "corner-left-up",
	"corner-right-down-icon": "corner-right-down",
	"corner-right-up-icon": "corner-right-up",
	"corner-up-left-icon": "corner-up-left",
	"corner-up-right-icon": "corner-up-right",
	"cpu-icon": "cpu",
	"creative-commons-icon": "creative-commons",
	"credit-card-check-icon": "credit-card-check",
	"credit-card-icon": "credit-card",
	"credit-card-minus-icon": "credit-card-minus",
	"credit-card-plus-icon": "credit-card-plus",
	"credit-card-reader-icon": "credit-card-reader",
	"credit-card-x-icon": "credit-card-x",
	"croissant-icon": "croissant",
	"crop-icon": "crop",
	"crosshair-icon": "crosshair",
	"cross-icon": "cross",
	"crown-icon": "crown",
	"cuboid-icon": "cuboid",
	"cupcake-icon": "cupcake",
	"cup-soda-icon": "cup-soda",
	"curly-braces": "braces",
	"curly-braces-icon": "braces",
	"currency-icon": "currency",
	"cylinder-icon": "cylinder",
	"dam-icon": "dam",
	"database-arrow-down-icon": "database-arrow-down",
	"database-arrow-up-icon": "database-arrow-up",
	"database-backup-icon": "database-backup",
	"database-check-icon": "database-check",
	"database-icon": "database",
	"database-minus-icon": "database-minus",
	"database-plus-icon": "database-plus",
	"database-search-icon": "database-search",
	"database-x-icon": "database-x",
	"database-zap-icon": "database-zap",
	"decimals-arrow-left-icon": "decimals-arrow-left",
	"decimals-arrow-right-icon": "decimals-arrow-right",
	"delete-icon": "delete",
	"dessert-icon": "dessert",
	"diameter-icon": "diameter",
	"diamond-icon": "diamond",
	"diamond-minus-icon": "diamond-minus",
	"diamond-percent-icon": "diamond-percent",
	"diamond-plus-icon": "diamond-plus",
	"dice-1-icon": "dice-1",
	"dice-2-icon": "dice-2",
	"dice-3-icon": "dice-3",
	"dice-4-icon": "dice-4",
	"dice-5-icon": "dice-5",
	"dice-6-icon": "dice-6",
	"dices-icon": "dices",
	"diff-icon": "diff",
	"disc-2-icon": "disc-2",
	"disc-3-icon": "disc-3",
	"disc-album-icon": "disc-album",
	"disc-icon": "disc",
	"divide-circle": "circle-divide",
	"divide-circle-icon": "circle-divide",
	"divide-icon": "divide",
	"divide-square": "square-divide",
	"divide-square-icon": "square-divide",
	"dna-icon": "dna",
	"dna-off-icon": "dna-off",
	"dock-icon": "dock",
	"dog-icon": "dog",
	"dollar-sign-icon": "dollar-sign",
	"dome-icon": "dome",
	"donut-icon": "donut",
	"door-closed-cog-icon": "door-closed-cog",
	"door-closed-icon": "door-closed",
	"door-closed-locked-icon": "door-closed-locked",
	"door-closed-package-icon": "door-closed-package",
	"door-open-icon": "door-open",
	"door-stairwell-icon": "door-stairwell",
	"dot-icon": "dot",
	"dot-square": "square-dot",
	"dot-square-icon": "square-dot",
	"download-cloud": "cloud-download",
	"download-cloud-icon": "cloud-download",
	"download-icon": "download",
	"drafting-compass-icon": "drafting-compass",
	"drama-icon": "drama",
	"drill-icon": "drill",
	"drone-icon": "drone",
	"droplet-icon": "droplet",
	"droplet-off-icon": "droplet-off",
	"droplets-icon": "droplets",
	"drum-icon": "drum",
	"drumstick-icon": "drumstick",
	"dumbbell-icon": "dumbbell",
	"ear-icon": "ear",
	"ear-off-icon": "ear-off",
	"earth-icon": "earth",
	"earth-lock-icon": "earth-lock",
	"eclipse-icon": "eclipse",
	edit: "square-pen",
	"edit-2": "pen",
	"edit-2-icon": "pen",
	"edit-3": "pen-line",
	"edit-3-icon": "pen-line",
	"edit-icon": "square-pen",
	"egg-fried-icon": "egg-fried",
	"egg-icon": "egg",
	"egg-off-icon": "egg-off",
	"eject-icon": "eject",
	"ellipse-icon": "ellipse",
	"ellipsis-icon": "ellipsis",
	"ellipsis-vertical-icon": "ellipsis-vertical",
	"engine-icon": "engine",
	"equal-approximately-icon": "equal-approximately",
	"equal-approximately-not-icon": "equal-approximately-not",
	"equal-icon": "equal",
	"equal-not-icon": "equal-not",
	"equal-square": "square-equal",
	"equal-square-icon": "square-equal",
	"eraser-icon": "eraser",
	"ethernet-port-icon": "ethernet-port",
	"euro-icon": "euro",
	"ev-charger-icon": "ev-charger",
	"expand-icon": "expand",
	"external-link-icon": "external-link",
	"eye-closed-icon": "eye-closed",
	"eye-dashed-icon": "eye-dashed",
	"eye-icon": "eye",
	"eye-off-icon": "eye-off",
	"face-angry": "angry",
	"face-angry-icon": "angry",
	"face-expressionless": "annoyed",
	"face-expressionless-icon": "annoyed",
	"face-grinning": "laugh",
	"face-grinning-icon": "laugh",
	"face-neutral": "meh",
	"face-neutral-icon": "meh",
	"face-slightly-frowning": "frown",
	"face-slightly-frowning-icon": "frown",
	"face-slightly-smiling": "smile",
	"face-slightly-smiling-icon": "smile",
	"face-slightly-smiling-plus": "smile-plus",
	"face-slightly-smiling-plus-icon": "smile-plus",
	"factory-icon": "factory",
	"fan-icon": "fan",
	"fast-forward-icon": "fast-forward",
	"faucet-icon": "faucet",
	"feather-icon": "feather",
	"fence-icon": "fence",
	"ferris-wheel-icon": "ferris-wheel",
	"file-archive-icon": "file-archive",
	"file-audio": "file-headphone",
	"file-audio-2": "file-headphone",
	"file-audio-2-icon": "file-headphone",
	"file-audio-icon": "file-headphone",
	"file-axis-3-d-icon": "file-axis-3d",
	"file-badge-2": "file-badge",
	"file-badge-2-icon": "file-badge",
	"file-badge-icon": "file-badge",
	"file-bar-chart": "file-chart-column-increasing",
	"file-bar-chart-2": "file-chart-column",
	"file-bar-chart-2-icon": "file-chart-column",
	"file-bar-chart-icon": "file-chart-column-increasing",
	"file-box-icon": "file-box",
	"file-braces-corner-icon": "file-braces-corner",
	"file-braces-icon": "file-braces",
	"file-chart-column-icon": "file-chart-column",
	"file-chart-column-increasing-icon": "file-chart-column-increasing",
	"file-chart-line-icon": "file-chart-line",
	"file-chart-pie-icon": "file-chart-pie",
	"file-check-2-icon": "file-check-2",
	"file-check-corner": "file-check-2",
	"file-check-corner-icon": "file-check-2",
	"file-check-icon": "file-check",
	"file-clock-icon": "file-clock",
	"file-code-2": "file-code-corner",
	"file-code-2-icon": "file-code-corner",
	"file-code-corner-icon": "file-code-corner",
	"file-code-icon": "file-code",
	"file-cog-2": "file-cog",
	"file-cog-2-icon": "file-cog",
	"file-cog-icon": "file-cog",
	"file-diff-icon": "file-diff",
	"file-digit-icon": "file-digit",
	"file-down-icon": "file-down",
	"file-edit": "file-pen",
	"file-edit-icon": "file-pen",
	"file-exclamation-point-icon": "file-exclamation-point",
	"file-headphone-icon": "file-headphone",
	"file-heart-icon": "file-heart",
	"file-icon": "file",
	"file-image-icon": "file-image",
	"file-input-icon": "file-input",
	"file-json": "file-braces",
	"file-json-2": "file-braces-corner",
	"file-json-2-icon": "file-braces-corner",
	"file-json-icon": "file-braces",
	"file-key-2": "file-key",
	"file-key-2-icon": "file-key",
	"file-key-icon": "file-key",
	"file-line-chart": "file-chart-line",
	"file-line-chart-icon": "file-chart-line",
	"file-lock-2": "file-lock",
	"file-lock-2-icon": "file-lock",
	"file-lock-icon": "file-lock",
	"file-minus-2": "file-minus-corner",
	"file-minus-2-icon": "file-minus-corner",
	"file-minus-corner-icon": "file-minus-corner",
	"file-minus-icon": "file-minus",
	"file-music-icon": "file-music",
	"file-output-icon": "file-output",
	"file-pen-icon": "file-pen",
	"file-pen-line-icon": "file-pen-line",
	"file-pie-chart": "file-chart-pie",
	"file-pie-chart-icon": "file-chart-pie",
	"file-play-icon": "file-play",
	"file-plus-2": "file-plus-corner",
	"file-plus-2-icon": "file-plus-corner",
	"file-plus-corner-icon": "file-plus-corner",
	"file-plus-icon": "file-plus",
	"file-question": "file-question-mark",
	"file-question-icon": "file-question-mark",
	"file-question-mark-icon": "file-question-mark",
	"file-scan-icon": "file-scan",
	"file-search-2": "file-search-corner",
	"file-search-2-icon": "file-search-corner",
	"file-search-corner-icon": "file-search-corner",
	"file-search-icon": "file-search",
	"files-icon": "files",
	"file-signal-icon": "file-signal",
	"file-signature": "file-pen-line",
	"file-signature-icon": "file-pen-line",
	"file-sliders-icon": "file-sliders",
	"file-spreadsheet-icon": "file-spreadsheet",
	"file-stack-icon": "file-stack",
	"file-symlink-icon": "file-symlink",
	"file-terminal-icon": "file-terminal",
	"file-text-icon": "file-text",
	"file-type-2": "file-type-corner",
	"file-type-2-icon": "file-type-corner",
	"file-type-corner-icon": "file-type-corner",
	"file-type-icon": "file-type",
	"file-up-icon": "file-up",
	"file-user-icon": "file-user",
	"file-video": "file-play",
	"file-video-2": "file-video-camera",
	"file-video-2-icon": "file-video-camera",
	"file-video-camera-icon": "file-video-camera",
	"file-video-icon": "file-play",
	"file-volume-2": "file-signal",
	"file-volume-2-icon": "file-signal",
	"file-volume-icon": "file-volume",
	"file-warning": "file-exclamation-point",
	"file-warning-icon": "file-exclamation-point",
	"file-x2": "file-x-corner",
	"file-x2-icon": "file-x-corner",
	"file-x-corner-icon": "file-x-corner",
	"file-x-icon": "file-x",
	"film-icon": "film",
	filter: "funnel",
	"filter-icon": "funnel",
	"filter-x": "funnel-x",
	"filter-x-icon": "funnel-x",
	"fingerprint-icon": "fingerprint",
	"fingerprint-pattern": "fingerprint",
	"fingerprint-pattern-icon": "fingerprint",
	"fire-extinguisher-icon": "fire-extinguisher",
	"fish-icon": "fish",
	"fishing-hook-icon": "fishing-hook",
	"fishing-rod-icon": "fishing-rod",
	"fish-off-icon": "fish-off",
	"fish-symbol-icon": "fish-symbol",
	"flag-icon": "flag",
	"flag-off-icon": "flag-off",
	"flag-triangle-left-icon": "flag-triangle-left",
	"flag-triangle-right-icon": "flag-triangle-right",
	"flame-icon": "flame",
	"flame-kindling-icon": "flame-kindling",
	"flashlight-icon": "flashlight",
	"flashlight-off-icon": "flashlight-off",
	"flask-conical-icon": "flask-conical",
	"flask-conical-off-icon": "flask-conical-off",
	"flask-round-icon": "flask-round",
	"flip-horizontal": "square-centerline-dashed-horizontal",
	"flip-horizontal-2": "triangles-centerline-dashed-horizontal",
	"flip-horizontal-2-icon": "triangles-centerline-dashed-horizontal",
	"flip-horizontal-icon": "square-centerline-dashed-horizontal",
	"flip-vertical": "square-centerline-dashed-vertical",
	"flip-vertical-2": "triangles-centerline-dashed-vertical",
	"flip-vertical-2-icon": "triangles-centerline-dashed-vertical",
	"flip-vertical-icon": "square-centerline-dashed-vertical",
	"flower-2-icon": "flower-2",
	"flower-icon": "flower",
	"focus-icon": "focus",
	"folder-archive-icon": "folder-archive",
	"folder-bookmark-icon": "folder-bookmark",
	"folder-check-icon": "folder-check",
	"folder-clock-icon": "folder-clock",
	"folder-closed-icon": "folder-closed",
	"folder-code-icon": "folder-code",
	"folder-cog-2": "folder-cog",
	"folder-cog-2-icon": "folder-cog",
	"folder-cog-icon": "folder-cog",
	"folder-dot-icon": "folder-dot",
	"folder-down-icon": "folder-down",
	"folder-edit": "folder-pen",
	"folder-edit-icon": "folder-pen",
	"folder-git-2-icon": "folder-git-2",
	"folder-git-icon": "folder-git",
	"folder-heart-icon": "folder-heart",
	"folder-icon": "folder",
	"folder-input-icon": "folder-input",
	"folder-kanban-icon": "folder-kanban",
	"folder-key-icon": "folder-key",
	"folder-lock-icon": "folder-lock",
	"folder-minus-icon": "folder-minus",
	"folder-open-dot-icon": "folder-open-dot",
	"folder-open-icon": "folder-open",
	"folder-output-icon": "folder-output",
	"folder-pen-icon": "folder-pen",
	"folder-plus-icon": "folder-plus",
	"folder-root-icon": "folder-root",
	"folder-search-2-icon": "folder-search-2",
	"folder-search-icon": "folder-search",
	"folders-icon": "folders",
	"folder-symlink-icon": "folder-symlink",
	"folder-sync-icon": "folder-sync",
	"folder-tree-icon": "folder-tree",
	"folder-up-icon": "folder-up",
	"folder-x-icon": "folder-x",
	"fold-horizontal-icon": "fold-horizontal",
	"fold-vertical-icon": "fold-vertical",
	"footprints-icon": "footprints",
	"fork-knife": "utensils",
	"fork-knife-crossed": "utensils-crossed",
	"fork-knife-crossed-icon": "utensils-crossed",
	"fork-knife-icon": "utensils",
	"forklift-icon": "forklift",
	"form-icon": "form",
	"form-input": "rectangle-ellipsis",
	"form-input-icon": "rectangle-ellipsis",
	"forward-icon": "forward",
	"frame-icon": "frame",
	"frown-icon": "frown",
	"fuel-icon": "fuel",
	"fullscreen-icon": "fullscreen",
	"function-square": "square-function",
	"function-square-icon": "square-function",
	"funnel-icon": "funnel",
	"funnel-plus-icon": "funnel-plus",
	"funnel-x-icon": "funnel-x",
	"galaxy-icon": "galaxy",
	"gallery-horizontal-end-icon": "gallery-horizontal-end",
	"gallery-horizontal-icon": "gallery-horizontal",
	"gallery-thumbnails-icon": "gallery-thumbnails",
	"gallery-vertical-end-icon": "gallery-vertical-end",
	"gallery-vertical-icon": "gallery-vertical",
	"gamepad-2-icon": "gamepad-2",
	"gamepad-directional-icon": "gamepad-directional",
	"gamepad-icon": "gamepad",
	"gantt-chart": "chart-no-axes-gantt",
	"gantt-chart-icon": "chart-no-axes-gantt",
	"gantt-chart-square": "square-chart-gantt",
	"gantt-chart-square-icon": "square-chart-gantt",
	"gap-horizontal-icon": "gap-horizontal",
	"gap-vertical-icon": "gap-vertical",
	"gauge-circle": "circle-gauge",
	"gauge-circle-icon": "circle-gauge",
	"gauge-icon": "gauge",
	"gavel-icon": "gavel",
	"gem-icon": "gem",
	"georgian-lari-icon": "georgian-lari",
	"germ-icon": "germ",
	"germ-off-icon": "germ-off",
	"ghost-icon": "ghost",
	"gift-icon": "gift",
	"git-branch-icon": "git-branch",
	"git-branch-minus-icon": "git-branch-minus",
	"git-branch-plus-icon": "git-branch-plus",
	"git-commit": "git-commit-horizontal",
	"git-commit-horizontal-icon": "git-commit-horizontal",
	"git-commit-icon": "git-commit-horizontal",
	"git-commit-vertical-icon": "git-commit-vertical",
	"git-compare-arrows-icon": "git-compare-arrows",
	"git-compare-icon": "git-compare",
	"git-fork-icon": "git-fork",
	"git-graph-icon": "git-graph",
	"git-merge-conflict-icon": "git-merge-conflict",
	"git-merge-icon": "git-merge",
	"git-pull-request-arrow-icon": "git-pull-request-arrow",
	"git-pull-request-closed-icon": "git-pull-request-closed",
	"git-pull-request-create-arrow-icon": "git-pull-request-create-arrow",
	"git-pull-request-create-icon": "git-pull-request-create",
	"git-pull-request-draft-icon": "git-pull-request-draft",
	"git-pull-request-icon": "git-pull-request",
	"glasses-icon": "glasses",
	"glass-water-icon": "glass-water",
	"globe-2": "earth",
	"globe-2-icon": "earth",
	"globe-check-icon": "globe-check",
	"globe-code-icon": "globe-code",
	"globe-icon": "globe",
	"globe-lock-icon": "globe-lock",
	"globe-off-icon": "globe-off",
	"globe-x-icon": "globe-x",
	"goal-icon": "goal",
	"gpu-icon": "gpu",
	grab: "hand-grab",
	"grab-icon": "hand-grab",
	"graduation-cap-icon": "graduation-cap",
	"grape-icon": "grape",
	grid: "grid-3-x-3",
	"grid-2-x2": "grid-2-x-2",
	"grid-2-x2-check": "grid-2-x-2-check",
	"grid-2-x-2-check-icon": "grid-2-x-2-check",
	"grid-2-x2-check-icon": "grid-2-x-2-check",
	"grid-2-x-2-icon": "grid-2-x-2",
	"grid-2-x2-icon": "grid-2-x-2",
	"grid-2-x2-plus": "grid-2-x-2-plus",
	"grid-2-x-2-plus-icon": "grid-2-x-2-plus",
	"grid-2-x2-plus-icon": "grid-2-x-2-plus",
	"grid-2-x2-x": "grid-2-x-2-x",
	"grid-2-x-2-x-icon": "grid-2-x-2-x",
	"grid-2-x2-x-icon": "grid-2-x-2-x",
	"grid-3-x-2-icon": "grid-3-x-2",
	"grid-3-x3": "grid-3-x-3",
	"grid-3-x-3-icon": "grid-3-x-3",
	"grid-3-x3-icon": "grid-3-x-3",
	"grid-icon": "grid-3-x-3",
	"grip-horizontal-icon": "grip-horizontal",
	"grip-icon": "grip",
	"grip-vertical-icon": "grip-vertical",
	"groceries-icon": "groceries",
	"group-icon": "group",
	"guitar-icon": "guitar",
	"hamburger-icon": "hamburger",
	"ham-icon": "ham",
	"hammer-icon": "hammer",
	"handbag-icon": "handbag",
	"hand-coins-icon": "hand-coins",
	"hand-fist-icon": "hand-fist",
	"hand-grab-icon": "hand-grab",
	"hand-heart-icon": "hand-heart",
	"hand-helping-icon": "hand-helping",
	"hand-icon": "hand",
	"handle-bottom-right-icon": "handle-bottom-right",
	"hand-metal-icon": "hand-metal",
	"hand-platter-icon": "hand-platter",
	"handshake-icon": "handshake",
	"hard-drive-download-icon": "hard-drive-download",
	"hard-drive-icon": "hard-drive",
	"hard-drive-upload-icon": "hard-drive-upload",
	"hard-hat-icon": "hard-hat",
	"hash-icon": "hash",
	"hat-glasses-icon": "hat-glasses",
	"haze-icon": "haze",
	"hd-icon": "hd",
	"hdmi-port-icon": "hdmi-port",
	"heading-1-icon": "heading-1",
	"heading-2-icon": "heading-2",
	"heading-3-icon": "heading-3",
	"heading-4-icon": "heading-4",
	"heading-5-icon": "heading-5",
	"heading-6-icon": "heading-6",
	"heading-icon": "heading",
	"headphone-off-icon": "headphone-off",
	"headphones-icon": "headphones",
	"headset-icon": "headset",
	"heart-crack-icon": "heart-crack",
	"heart-handshake-icon": "heart-handshake",
	"heart-icon": "heart",
	"heart-minus-icon": "heart-minus",
	"heart-off-icon": "heart-off",
	"heart-plus-icon": "heart-plus",
	"heart-pulse-icon": "heart-pulse",
	"heart-x-icon": "heart-x",
	"heater-icon": "heater",
	"helicopter-icon": "helicopter",
	"help-circle": "circle-help",
	"help-circle-icon": "circle-help",
	"helping-hand": "hand-helping",
	"helping-hand-icon": "hand-helping",
	"hexagon-icon": "hexagon",
	"highlighter-icon": "highlighter",
	"hiking-stick-icon": "hiking-stick",
	"history-icon": "history",
	"home-icon": "home",
	"hop-icon": "hop",
	"hop-off-icon": "hop-off",
	"hospital-icon": "hospital",
	"hotel-icon": "hotel",
	"hourglass-cog-icon": "hourglass-cog",
	"hourglass-icon": "hourglass",
	house: "home",
	"house-cog-icon": "house-cog",
	"house-heart-icon": "house-heart",
	"house-icon": "home",
	"house-plug-icon": "house-plug",
	"house-plus-icon": "house-plus",
	"houses-icon": "houses",
	"house-wifi-icon": "house-wifi",
	"ice-cream": "ice-cream-cone",
	"ice-cream-2": "ice-cream-bowl",
	"ice-cream-2-icon": "ice-cream-bowl",
	"ice-cream-bowl-icon": "ice-cream-bowl",
	"ice-cream-cone-icon": "ice-cream-cone",
	"ice-cream-icon": "ice-cream-cone",
	"id-card-icon": "id-card",
	"id-card-lanyard-icon": "id-card-lanyard",
	"image-down-icon": "image-down",
	"image-icon": "image",
	"image-minus-icon": "image-minus",
	"image-off-icon": "image-off",
	"image-play-icon": "image-play",
	"image-plus-icon": "image-plus",
	"images-icon": "images",
	"image-up-icon": "image-up",
	"image-upscale-icon": "image-upscale",
	"import-icon": "import",
	"inbox-icon": "inbox",
	indent: "list-indent-increase",
	"indent-decrease": "list-indent-decrease",
	"indent-decrease-icon": "list-indent-decrease",
	"indent-icon": "list-indent-increase",
	"indent-increase": "list-indent-increase",
	"indent-increase-icon": "list-indent-increase",
	"indian-rupee-icon": "indian-rupee",
	"infinity-icon": "infinity",
	"info-icon": "info",
	inspect: "square-mouse-pointer",
	"inspect-icon": "square-mouse-pointer",
	"inspection-panel-icon": "inspection-panel",
	"italic-icon": "italic",
	"iteration-ccw-icon": "iteration-ccw",
	"iteration-cw-icon": "iteration-cw",
	"iv-bag-icon": "iv-bag",
	"japanese-yen-icon": "japanese-yen",
	"joystick-icon": "joystick",
	"kanban-icon": "kanban",
	"kanban-square": "square-kanban",
	"kanban-square-dashed": "square-dashed-kanban",
	"kanban-square-dashed-icon": "square-dashed-kanban",
	"kanban-square-icon": "square-kanban",
	"kayak-icon": "kayak",
	"kazakh-tenge-icon": "kazakh-tenge",
	"keyboard-icon": "keyboard",
	"keyboard-music-icon": "keyboard-music",
	"keyboard-off-icon": "keyboard-off",
	"key-icon": "key",
	"key-round-icon": "key-round",
	"key-square-icon": "key-square",
	"lambda-icon": "lambda",
	"lamp-ceiling-icon": "lamp-ceiling",
	"lamp-desk-icon": "lamp-desk",
	"lamp-floor-icon": "lamp-floor",
	"lamp-icon": "lamp",
	"lamp-wall-down-icon": "lamp-wall-down",
	"lamp-wall-up-icon": "lamp-wall-up",
	"landmark-icon": "landmark",
	"land-plot-icon": "land-plot",
	"languages-icon": "languages",
	"laptop-2": "laptop-minimal",
	"laptop-2-icon": "laptop-minimal",
	"laptop-icon": "laptop",
	"laptop-minimal-check-icon": "laptop-minimal-check",
	"laptop-minimal-icon": "laptop-minimal",
	"lasso-icon": "lasso",
	"lasso-select-icon": "lasso-select",
	"laugh-icon": "laugh",
	"layer-arrow-down-icon": "layer-arrow-down",
	"layer-arrow-up-icon": "layer-arrow-up",
	"layers-2-icon": "layers-2",
	"layers-3": "layers",
	"layers-3-icon": "layers",
	"layers-arrow-down-icon": "layers-arrow-down",
	"layers-arrow-up-icon": "layers-arrow-up",
	"layers-icon": "layers",
	"layers-minus-icon": "layers-minus",
	"layers-plus-icon": "layers-plus",
	layout: "panels-top-left",
	"layout-arrow-down-icon": "layout-arrow-down",
	"layout-arrow-right-icon": "layout-arrow-right",
	"layout-dashboard-icon": "layout-dashboard",
	"layout-freeform-icon": "layout-freeform",
	"layout-grid-circles-icon": "layout-grid-circles",
	"layout-grid-icon": "layout-grid",
	"layout-icon": "panels-top-left",
	"layout-list-icon": "layout-list",
	"layout-panel-left-icon": "layout-panel-left",
	"layout-panel-top-icon": "layout-panel-top",
	"layout-template-icon": "layout-template",
	"leaf-icon": "leaf",
	"leafy-green-icon": "leafy-green",
	"lectern-icon": "lectern",
	"lens-concave-icon": "lens-concave",
	"lens-convex-icon": "lens-convex",
	"lens-icon": "lens",
	"letters-icon": "letters",
	"letter-text": "text-initial",
	"letter-text-icon": "text-initial",
	"library-big-icon": "library-big",
	"library-icon": "library",
	"library-square": "square-library",
	"library-square-icon": "square-library",
	"life-buoy-icon": "life-buoy",
	"ligature-icon": "ligature",
	"lightbulb-icon": "lightbulb",
	"lightbulb-off-icon": "lightbulb-off",
	"lighthouse-icon": "lighthouse",
	"line-chart": "chart-line",
	"line-chart-icon": "chart-line",
	"line-dot-bottom-vertical-icon": "line-dot-bottom-vertical",
	"line-dot-left-horizontal-icon": "line-dot-left-horizontal",
	"line-dot-right-horizontal-icon": "line-dot-right-horizontal",
	"line-dot-top-vertical-icon": "line-dot-top-vertical",
	"line-squiggle-icon": "line-squiggle",
	"line-style-icon": "line-style",
	"link-2-icon": "link-2",
	"link-2-off-icon": "link-2-off",
	"link-icon": "link",
	"list-check-icon": "list-check",
	"list-checks-icon": "list-checks",
	"list-chevrons-down-up-icon": "list-chevrons-down-up",
	"list-chevrons-up-down-icon": "list-chevrons-up-down",
	"list-clock-icon": "list-clock",
	"list-collapse-icon": "list-collapse",
	"list-end-icon": "list-end",
	"list-filter-icon": "list-filter",
	"list-filter-plus-icon": "list-filter-plus",
	"list-icon": "list",
	"list-indent-decrease-icon": "list-indent-decrease",
	"list-indent-increase-icon": "list-indent-increase",
	"list-minus-icon": "list-minus",
	"list-music-icon": "list-music",
	"list-ordered-icon": "list-ordered",
	"list-plus-icon": "list-plus",
	"list-restart-icon": "list-restart",
	"list-sort-ascending-icon": "list-sort-ascending",
	"list-sort-descending-icon": "list-sort-descending",
	"list-start-icon": "list-start",
	"list-todo-icon": "list-todo",
	"list-tree-icon": "list-tree",
	"list-video-icon": "list-video",
	"list-x-icon": "list-x",
	"loader-2": "loader-circle",
	"loader-2-icon": "loader-circle",
	"loader-circle-icon": "loader-circle",
	"loader-icon": "loader",
	"loader-pinwheel-icon": "loader-pinwheel",
	"locate-fixed-icon": "locate-fixed",
	"locate-icon": "locate",
	"locate-off-icon": "locate-off",
	"location-edit": "map-pin-pen",
	"location-edit-icon": "map-pin-pen",
	"lock-icon": "lock",
	"lock-keyhole-icon": "lock-keyhole",
	"lock-keyhole-open-icon": "lock-keyhole-open",
	"lock-open-icon": "lock-open",
	"log-in-icon": "log-in",
	"log-out-icon": "log-out",
	"logs-icon": "logs",
	"lollipop-icon": "lollipop",
	"lucide-a-arrow-down": "a-arrow-down",
	"lucide-a-arrow-up": "a-arrow-up",
	"lucide-accessibility": "accessibility",
	"lucide-activity": "activity",
	"lucide-activity-square": "square-activity",
	"lucide-ad": "ad",
	"lucide-airplay": "airplay",
	"lucide-air-vent": "air-vent",
	"lucide-a-large-small": "a-large-small",
	"lucide-alarm-check": "alarm-clock-check",
	"lucide-alarm-clock": "alarm-clock",
	"lucide-alarm-clock-check": "alarm-clock-check",
	"lucide-alarm-clock-minus": "alarm-clock-minus",
	"lucide-alarm-clock-off": "alarm-clock-off",
	"lucide-alarm-clock-plus": "alarm-clock-plus",
	"lucide-alarm-minus": "alarm-clock-minus",
	"lucide-alarm-plus": "alarm-clock-plus",
	"lucide-alarm-smoke": "alarm-smoke",
	"lucide-album": "square-bookmark",
	"lucide-alert-circle": "circle-alert",
	"lucide-alert-octagon": "octagon-alert",
	"lucide-alert-triangle": "triangle-alert",
	"lucide-align-center": "align-center",
	"lucide-align-center-horizontal": "align-center-horizontal",
	"lucide-align-center-vertical": "align-center-vertical",
	"lucide-align-end-horizontal": "align-end-horizontal",
	"lucide-align-end-vertical": "align-end-vertical",
	"lucide-align-horizontal-distribute-center": "align-horizontal-distribute-center",
	"lucide-align-horizontal-distribute-end": "align-horizontal-distribute-end",
	"lucide-align-horizontal-distribute-start": "align-horizontal-distribute-start",
	"lucide-align-horizontal-justify-center": "align-horizontal-justify-center",
	"lucide-align-horizontal-justify-end": "align-horizontal-justify-end",
	"lucide-align-horizontal-justify-start": "align-horizontal-justify-start",
	"lucide-align-horizontal-space-around": "align-horizontal-space-around",
	"lucide-align-horizontal-space-between": "align-horizontal-space-between",
	"lucide-align-justify": "text-align-justify",
	"lucide-align-left": "align-left",
	"lucide-align-right": "align-right",
	"lucide-align-start-horizontal": "align-start-horizontal",
	"lucide-align-start-vertical": "align-start-vertical",
	"lucide-align-vertical-distribute-center": "align-vertical-distribute-center",
	"lucide-align-vertical-distribute-end": "align-vertical-distribute-end",
	"lucide-align-vertical-distribute-start": "align-vertical-distribute-start",
	"lucide-align-vertical-justify-center": "align-vertical-justify-center",
	"lucide-align-vertical-justify-end": "align-vertical-justify-end",
	"lucide-align-vertical-justify-start": "align-vertical-justify-start",
	"lucide-align-vertical-space-around": "align-vertical-space-around",
	"lucide-align-vertical-space-between": "align-vertical-space-between",
	"lucide-ambulance": "ambulance",
	"lucide-ampersand": "ampersand",
	"lucide-ampersands": "ampersands",
	"lucide-amphora": "amphora",
	"lucide-anchor": "anchor",
	"lucide-angle": "angle",
	"lucide-angry": "angry",
	"lucide-annoyed": "annoyed",
	"lucide-antenna": "antenna",
	"lucide-anvil": "anvil",
	"lucide-aperture": "aperture",
	"lucide-apple": "apple",
	"lucide-app-window": "app-window",
	"lucide-app-window-mac": "app-window-mac",
	"lucide-archive": "archive",
	"lucide-archive-restore": "archive-restore",
	"lucide-archive-x": "archive-x",
	"lucide-area-chart": "chart-area",
	"lucide-armchair": "armchair",
	"lucide-armenian-dram": "armenian-dram",
	"lucide-arrow-big-down": "arrow-big-down",
	"lucide-arrow-big-down-dash": "arrow-big-down-dash",
	"lucide-arrow-big-left": "arrow-big-left",
	"lucide-arrow-big-left-dash": "arrow-big-left-dash",
	"lucide-arrow-big-right": "arrow-big-right",
	"lucide-arrow-big-right-dash": "arrow-big-right-dash",
	"lucide-arrow-big-up": "arrow-big-up",
	"lucide-arrow-big-up-dash": "arrow-big-up-dash",
	"lucide-arrow-down": "arrow-down",
	"lucide-arrow-down-0-1": "arrow-down-0-1",
	"lucide-arrow-down-1-0": "arrow-down-1-0",
	"lucide-arrow-down-az": "arrow-down-a-z",
	"lucide-arrow-down-circle": "circle-arrow-down",
	"lucide-arrow-down-from-line": "arrow-down-from-line",
	"lucide-arrow-down-left": "arrow-down-left",
	"lucide-arrow-down-left-from-circle": "circle-arrow-out-down-left",
	"lucide-arrow-down-left-from-square": "square-arrow-out-down-left",
	"lucide-arrow-down-left-square": "square-arrow-down-left",
	"lucide-arrow-down-narrow-wide": "arrow-down-narrow-wide",
	"lucide-arrow-down-right": "arrow-down-right",
	"lucide-arrow-down-right-from-circle": "circle-arrow-out-down-right",
	"lucide-arrow-down-right-from-square": "square-arrow-out-down-right",
	"lucide-arrow-down-right-square": "square-arrow-down-right",
	"lucide-arrow-down-square": "square-arrow-down",
	"lucide-arrow-down-to-dot": "arrow-down-to-dot",
	"lucide-arrow-down-to-line": "arrow-down-to-line",
	"lucide-arrow-down-up": "arrow-down-up",
	"lucide-arrow-down-wide-narrow": "arrow-down-wide-narrow",
	"lucide-arrow-down-za": "arrow-down-z-a",
	"lucide-arrow-left": "arrow-left",
	"lucide-arrow-left-circle": "circle-arrow-left",
	"lucide-arrow-left-from-line": "arrow-left-from-line",
	"lucide-arrow-left-right": "arrow-left-right",
	"lucide-arrow-left-square": "square-arrow-left",
	"lucide-arrow-left-to-line": "arrow-left-to-line",
	"lucide-arrow-right": "arrow-right",
	"lucide-arrow-right-circle": "circle-arrow-right",
	"lucide-arrow-right-from-line": "arrow-right-from-line",
	"lucide-arrow-right-left": "arrow-right-left",
	"lucide-arrow-right-square": "square-arrow-right",
	"lucide-arrow-right-to-line": "arrow-right-to-line",
	"lucide-arrows-up-from-line": "arrows-up-from-line",
	"lucide-arrow-up": "arrow-up",
	"lucide-arrow-up-0-1": "arrow-up-0-1",
	"lucide-arrow-up-1-0": "arrow-up-1-0",
	"lucide-arrow-up-az": "arrow-up-az",
	"lucide-arrow-up-circle": "circle-arrow-up",
	"lucide-arrow-up-down": "arrow-up-down",
	"lucide-arrow-up-from-dot": "arrow-up-from-dot",
	"lucide-arrow-up-from-line": "arrow-up-from-line",
	"lucide-arrow-up-left": "arrow-up-left",
	"lucide-arrow-up-left-from-circle": "circle-arrow-out-up-left",
	"lucide-arrow-up-left-from-square": "square-arrow-out-up-left",
	"lucide-arrow-up-left-square": "square-arrow-up-left",
	"lucide-arrow-up-narrow-wide": "arrow-up-narrow-wide",
	"lucide-arrow-up-right": "arrow-up-right",
	"lucide-arrow-up-right-from-circle": "circle-arrow-out-up-right",
	"lucide-arrow-up-right-from-square": "square-arrow-out-up-right",
	"lucide-arrow-up-right-square": "square-arrow-up-right",
	"lucide-arrow-up-square": "square-arrow-up",
	"lucide-arrow-up-to-line": "arrow-up-to-line",
	"lucide-arrow-up-wide-narrow": "arrow-up-wide-narrow",
	"lucide-arrow-up-za": "arrow-up-za",
	"lucide-asterisk": "asterisk",
	"lucide-asterisk-square": "square-asterisk",
	"lucide-astroid": "astroid",
	"lucide-atom": "atom",
	"lucide-at-sign": "at-sign",
	"lucide-audio-lines": "audio-lines",
	"lucide-audio-lines-off": "audio-lines-off",
	"lucide-audio-lines-x": "audio-lines-x",
	"lucide-audio-waveform": "audio-waveform",
	"lucide-award": "award",
	"lucide-axe": "axe",
	"lucide-axis-3d": "axis-3d",
	"lucide-baby": "baby",
	"lucide-backpack": "backpack",
	"lucide-badge": "badge",
	"lucide-badge-alert": "badge-alert",
	"lucide-badge-cent": "badge-cent",
	"lucide-badge-check": "badge-check",
	"lucide-badge-dollar-sign": "badge-dollar-sign",
	"lucide-badge-euro": "badge-euro",
	"lucide-badge-help": "badge-question-mark",
	"lucide-badge-indian-rupee": "badge-indian-rupee",
	"lucide-badge-info": "badge-info",
	"lucide-badge-japanese-yen": "badge-japanese-yen",
	"lucide-badge-minus": "badge-minus",
	"lucide-badge-percent": "badge-percent",
	"lucide-badge-plus": "badge-plus",
	"lucide-badge-pound-sterling": "badge-pound-sterling",
	"lucide-badge-question-mark": "badge-question-mark",
	"lucide-badge-russian-ruble": "badge-russian-ruble",
	"lucide-badge-swiss-franc": "badge-swiss-franc",
	"lucide-badge-turkish-lira": "badge-turkish-lira",
	"lucide-badge-x": "badge-x",
	"lucide-baggage-claim": "baggage-claim",
	"lucide-balloon": "balloon",
	"lucide-ban": "ban",
	"lucide-banana": "banana",
	"lucide-bandage": "bandage",
	"lucide-bangladeshi-taka": "bangladeshi-taka",
	"lucide-banknote": "banknote",
	"lucide-banknote-arrow-down": "banknote-arrow-down",
	"lucide-banknote-arrow-up": "banknote-arrow-up",
	"lucide-banknote-check": "banknote-check",
	"lucide-banknote-x": "banknote-x",
	"lucide-bar-chart": "chart-no-axes-column-increasing",
	"lucide-bar-chart-2": "chart-no-axes-column",
	"lucide-bar-chart-3": "chart-column",
	"lucide-bar-chart-4": "chart-column-increasing",
	"lucide-bar-chart-big": "chart-column-big",
	"lucide-bar-chart-horizontal": "chart-bar",
	"lucide-bar-chart-horizontal-big": "chart-bar-big",
	"lucide-barcode": "barcode",
	"lucide-barrel": "barrel",
	"lucide-baseline": "baseline",
	"lucide-bath": "bath",
	"lucide-battery": "battery",
	"lucide-battery-charging": "battery-charging",
	"lucide-battery-full": "battery-full",
	"lucide-battery-low": "battery-low",
	"lucide-battery-medium": "battery-medium",
	"lucide-battery-plus": "battery-plus",
	"lucide-battery-warning": "battery-warning",
	"lucide-beaker": "beaker",
	"lucide-bean": "bean",
	"lucide-bean-off": "bean-off",
	"lucide-bed": "bed",
	"lucide-bed-double": "bed-double",
	"lucide-bed-single": "bed-single",
	"lucide-beef": "beef",
	"lucide-beef-off": "beef-off",
	"lucide-beer": "beer",
	"lucide-beer-off": "beer-off",
	"lucide-bell": "bell",
	"lucide-bell-check": "bell-check",
	"lucide-bell-dot": "bell-dot",
	"lucide-bell-electric": "bell-electric",
	"lucide-bell-minus": "bell-minus",
	"lucide-bell-off": "bell-off",
	"lucide-bell-plus": "bell-plus",
	"lucide-bell-ring": "bell-ring",
	"lucide-between-horizonal-end": "between-horizontal-end",
	"lucide-between-horizonal-start": "between-horizontal-start",
	"lucide-between-horizontal-end": "between-horizontal-end",
	"lucide-between-horizontal-start": "between-horizontal-start",
	"lucide-between-vertical-end": "between-vertical-end",
	"lucide-between-vertical-start": "between-vertical-start",
	"lucide-biceps-flexed": "biceps-flexed",
	"lucide-bike": "bike",
	"lucide-binary": "binary",
	"lucide-binoculars": "binoculars",
	"lucide-biohazard": "biohazard",
	"lucide-bird": "bird",
	"lucide-birdhouse": "birdhouse",
	"lucide-bitcoin": "bitcoin",
	"lucide-blend": "blend",
	"lucide-blender": "blender",
	"lucide-blinds": "blinds",
	"lucide-blocks": "blocks",
	"lucide-bluetooth": "bluetooth",
	"lucide-bluetooth-connected": "bluetooth-connected",
	"lucide-bluetooth-off": "bluetooth-off",
	"lucide-bluetooth-searching": "bluetooth-searching",
	"lucide-bold": "bold",
	"lucide-bolt": "bolt",
	"lucide-bomb": "bomb",
	"lucide-bone": "bone",
	"lucide-bone-fracture": "bone-fracture",
	"lucide-book": "book",
	"lucide-book-a": "book-a",
	"lucide-book-alert": "book-alert",
	"lucide-book-audio": "book-audio",
	"lucide-book-bookmark": "book-bookmark",
	"lucide-book-check": "book-check",
	"lucide-book-copy": "book-copy",
	"lucide-book-dashed": "book-dashed",
	"lucide-book-down": "book-down",
	"lucide-book-headphones": "book-headphones",
	"lucide-book-heart": "book-heart",
	"lucide-book-image": "book-image",
	"lucide-book-key": "book-key",
	"lucide-book-lock": "book-lock",
	"lucide-bookmark": "bookmark",
	"lucide-bookmark-check": "bookmark-check",
	"lucide-book-marked": "book-bookmark",
	"lucide-bookmark-minus": "bookmark-minus",
	"lucide-bookmark-off": "bookmark-off",
	"lucide-bookmark-plus": "bookmark-plus",
	"lucide-bookmark-x": "bookmark-x",
	"lucide-book-minus": "book-minus",
	"lucide-book-open": "book-open",
	"lucide-book-open-check": "book-open-check",
	"lucide-book-open-text": "book-open-text",
	"lucide-book-plus": "book-plus",
	"lucide-book-search": "book-search",
	"lucide-book-template": "book-dashed",
	"lucide-book-text": "book-text",
	"lucide-book-type": "book-type",
	"lucide-book-up": "book-up",
	"lucide-book-up-2": "book-up-2",
	"lucide-book-user": "book-user",
	"lucide-book-x": "book-x",
	"lucide-boom-box": "boom-box",
	"lucide-bot": "bot",
	"lucide-bot-message-square": "bot-message-square",
	"lucide-bot-off": "bot-off",
	"lucide-bottle-wine": "bottle-wine",
	"lucide-bow-arrow": "bow-arrow",
	"lucide-box": "box",
	"lucide-boxes": "boxes",
	"lucide-box-select": "square-dashed",
	"lucide-braces": "braces",
	"lucide-brackets": "brackets",
	"lucide-brain": "brain",
	"lucide-brain-circuit": "brain-circuit",
	"lucide-brain-cog": "brain-cog",
	"lucide-brick-wall": "brick-wall",
	"lucide-brick-wall-fire": "brick-wall-fire",
	"lucide-brick-wall-shield": "brick-wall-shield",
	"lucide-bridge": "bridge",
	"lucide-briefcase": "briefcase",
	"lucide-briefcase-business": "briefcase-business",
	"lucide-briefcase-conveyor-belt": "briefcase-conveyor-belt",
	"lucide-briefcase-medical": "briefcase-medical",
	"lucide-briefcase-plus": "briefcase-plus",
	"lucide-bring-to-front": "bring-to-front",
	"lucide-broccoli": "broccoli",
	"lucide-broom": "broom",
	"lucide-broom-sparkles": "broom-sparkles",
	"lucide-brush": "brush",
	"lucide-brush-cleaning": "brush-cleaning",
	"lucide-bubbles": "bubbles",
	"lucide-bug": "bug",
	"lucide-bug-off": "bug-off",
	"lucide-bug-play": "bug-play",
	"lucide-building": "building",
	"lucide-building-2": "building-complex",
	"lucide-building-complex": "building-complex",
	"lucide-building-complex-plus": "building-complex-plus",
	"lucide-bus": "bus",
	"lucide-bus-front": "bus-front",
	"lucide-cable": "cable",
	"lucide-cable-car": "cable-car",
	"lucide-cake": "cake",
	"lucide-cake-slice": "cake-slice",
	"lucide-calculator": "calculator",
	"lucide-calendar": "calendar",
	"lucide-calendar-1": "calendar-1",
	"lucide-calendar-arrow-down": "calendar-arrow-down",
	"lucide-calendar-arrow-up": "calendar-arrow-up",
	"lucide-calendar-check": "calendar-check",
	"lucide-calendar-check-2": "calendar-check-2",
	"lucide-calendar-chevrons-right": "calendar-chevrons-right",
	"lucide-calendar-clock": "calendar-clock",
	"lucide-calendar-cog": "calendar-cog",
	"lucide-calendar-days": "calendar-days",
	"lucide-calendar-fold": "calendar-fold",
	"lucide-calendar-heart": "calendar-heart",
	"lucide-calendar-minus": "calendar-minus",
	"lucide-calendar-minus-2": "calendar-minus-2",
	"lucide-calendar-off": "calendar-off",
	"lucide-calendar-plus": "calendar-plus",
	"lucide-calendar-plus-2": "calendar-plus-2",
	"lucide-calendar-range": "calendar-range",
	"lucide-calendars": "calendars",
	"lucide-calendar-search": "calendar-search",
	"lucide-calendar-sync": "calendar-sync",
	"lucide-calendar-x": "calendar-x",
	"lucide-calendar-x2": "calendar-x2",
	"lucide-camera": "camera",
	"lucide-camera-off": "camera-off",
	"lucide-can": "can",
	"lucide-candlestick-chart": "chart-candlestick",
	"lucide-candy": "candy",
	"lucide-candy-cane": "candy-cane",
	"lucide-candy-off": "candy-off",
	"lucide-cannabis": "cannabis",
	"lucide-cannabis-off": "cannabis-off",
	"lucide-can-soda": "can-soda",
	"lucide-captions": "captions",
	"lucide-captions-off": "captions-off",
	"lucide-car": "car",
	"lucide-caravan": "caravan",
	"lucide-car-battery": "car-battery",
	"lucide-card-sim": "card-sim",
	"lucide-car-front": "car-front",
	"lucide-carrot": "carrot",
	"lucide-car-taxi-front": "car-taxi-front",
	"lucide-carton": "carton",
	"lucide-carton-off": "carton-off",
	"lucide-case-lower": "case-lower",
	"lucide-case-sensitive": "case-sensitive",
	"lucide-case-upper": "case-upper",
	"lucide-cassette-tape": "cassette-tape",
	"lucide-cast": "cast",
	"lucide-castle": "castle",
	"lucide-cat": "cat",
	"lucide-cctv": "cctv",
	"lucide-cctv-off": "cctv-off",
	"lucide-chart-area": "chart-area",
	"lucide-chart-bar": "chart-bar",
	"lucide-chart-bar-big": "chart-bar-big",
	"lucide-chart-bar-decreasing": "chart-bar-decreasing",
	"lucide-chart-bar-increasing": "chart-bar-increasing",
	"lucide-chart-bar-stacked": "chart-bar-stacked",
	"lucide-chart-candlestick": "chart-candlestick",
	"lucide-chart-column": "chart-column",
	"lucide-chart-column-big": "chart-column-big",
	"lucide-chart-column-decreasing": "chart-column-decreasing",
	"lucide-chart-column-increasing": "chart-column-increasing",
	"lucide-chart-column-stacked": "chart-column-stacked",
	"lucide-chart-gantt": "chart-gantt",
	"lucide-chart-line": "chart-line",
	"lucide-chart-network": "chart-network",
	"lucide-chart-no-axes-column": "chart-no-axes-column",
	"lucide-chart-no-axes-column-decreasing": "chart-no-axes-column-decreasing",
	"lucide-chart-no-axes-column-increasing": "chart-no-axes-column-increasing",
	"lucide-chart-no-axes-combined": "chart-no-axes-combined",
	"lucide-chart-no-axes-gantt": "chart-no-axes-gantt",
	"lucide-chart-pie": "chart-pie",
	"lucide-chart-scatter": "chart-scatter",
	"lucide-chart-spline": "chart-spline",
	"lucide-check": "check",
	"lucide-check-check": "check-check",
	"lucide-check-circle": "circle-check-big",
	"lucide-check-circle-2": "circle-check",
	"lucide-check-line": "check-line",
	"lucide-check-square": "square-check-big",
	"lucide-check-square-2": "square-check",
	"lucide-chef-hat": "chef-hat",
	"lucide-cherry": "cherry",
	"lucide-chess-bishop": "chess-bishop",
	"lucide-chess-king": "chess-king",
	"lucide-chess-knight": "chess-knight",
	"lucide-chess-pawn": "chess-pawn",
	"lucide-chess-queen": "chess-queen",
	"lucide-chess-rook": "chess-rook",
	"lucide-chevron-down": "chevron-down",
	"lucide-chevron-down-circle": "circle-chevron-down",
	"lucide-chevron-down-square": "square-chevron-down",
	"lucide-chevron-first": "chevron-first",
	"lucide-chevron-last": "chevron-last",
	"lucide-chevron-left": "chevron-left",
	"lucide-chevron-left-circle": "circle-chevron-left",
	"lucide-chevron-left-square": "square-chevron-left",
	"lucide-chevron-right": "chevron-right",
	"lucide-chevron-right-circle": "circle-chevron-right",
	"lucide-chevron-right-square": "square-chevron-right",
	"lucide-chevrons-down": "chevrons-down",
	"lucide-chevrons-down-up": "chevrons-down-up",
	"lucide-chevrons-left": "chevrons-left",
	"lucide-chevrons-left-right": "chevrons-left-right",
	"lucide-chevrons-left-right-ellipsis": "chevrons-left-right-ellipsis",
	"lucide-chevrons-right": "chevrons-right",
	"lucide-chevrons-right-left": "chevrons-right-left",
	"lucide-chevrons-up": "chevrons-up",
	"lucide-chevrons-up-down": "chevrons-up-down",
	"lucide-chevron-up": "chevron-up",
	"lucide-chevron-up-circle": "circle-chevron-up",
	"lucide-chevron-up-square": "square-chevron-up",
	"lucide-church": "church",
	"lucide-cigarette": "cigarette",
	"lucide-cigarette-off": "cigarette-off",
	"lucide-circle": "circle",
	"lucide-circle-alert": "circle-alert",
	"lucide-circle-arrow-down": "circle-arrow-down",
	"lucide-circle-arrow-left": "circle-arrow-left",
	"lucide-circle-arrow-out-down-left": "circle-arrow-out-down-left",
	"lucide-circle-arrow-out-down-right": "circle-arrow-out-down-right",
	"lucide-circle-arrow-out-up-left": "circle-arrow-out-up-left",
	"lucide-circle-arrow-out-up-right": "circle-arrow-out-up-right",
	"lucide-circle-arrow-right": "circle-arrow-right",
	"lucide-circle-arrow-up": "circle-arrow-up",
	"lucide-circle-check": "circle-check",
	"lucide-circle-check-big": "circle-check-big",
	"lucide-circle-chevron-down": "circle-chevron-down",
	"lucide-circle-chevron-left": "circle-chevron-left",
	"lucide-circle-chevron-right": "circle-chevron-right",
	"lucide-circle-chevron-up": "circle-chevron-up",
	"lucide-circle-dashed": "circle-dashed",
	"lucide-circle-dashed-check": "circle-dashed-check",
	"lucide-circle-divide": "circle-divide",
	"lucide-circle-dollar-sign": "circle-dollar-sign",
	"lucide-circle-dot": "circle-dot",
	"lucide-circle-dot-dashed": "circle-dot-dashed",
	"lucide-circle-ellipsis": "circle-ellipsis",
	"lucide-circle-equal": "circle-equal",
	"lucide-circle-euro": "circle-euro",
	"lucide-circle-fading-arrow-up": "circle-fading-arrow-up",
	"lucide-circle-fading-plus": "circle-fading-plus",
	"lucide-circle-gauge": "circle-gauge",
	"lucide-circle-help": "circle-help",
	"lucide-circle-minus": "circle-minus",
	"lucide-circle-off": "circle-off",
	"lucide-circle-parking": "circle-parking",
	"lucide-circle-parking-off": "circle-parking-off",
	"lucide-circle-pause": "circle-pause",
	"lucide-circle-percent": "circle-percent",
	"lucide-circle-pile": "circle-pile",
	"lucide-circle-play": "circle-play",
	"lucide-circle-plus": "circle-plus",
	"lucide-circle-pound-sterling": "circle-pound-sterling",
	"lucide-circle-power": "circle-power",
	"lucide-circle-question-mark": "circle-help",
	"lucide-circle-slash": "circle-slash",
	"lucide-circle-slash-2": "circle-slash-2",
	"lucide-circle-slashed": "circle-slash-2",
	"lucide-circle-small": "circle-small",
	"lucide-circle-star": "circle-star",
	"lucide-circle-stop": "circle-stop",
	"lucide-circle-user": "circle-user",
	"lucide-circle-user-round": "circle-user-round",
	"lucide-circle-x": "circle-x",
	"lucide-circuit-board": "circuit-board",
	"lucide-citrus": "citrus",
	"lucide-clapperboard": "clapperboard",
	"lucide-clef-alto": "clef-alto",
	"lucide-clef-bass": "clef-bass",
	"lucide-clef-treble": "clef-treble",
	"lucide-clipboard": "clipboard",
	"lucide-clipboard-check": "clipboard-check",
	"lucide-clipboard-clock": "clipboard-clock",
	"lucide-clipboard-copy": "clipboard-copy",
	"lucide-clipboard-edit": "clipboard-pen",
	"lucide-clipboard-list": "clipboard-list",
	"lucide-clipboard-minus": "clipboard-minus",
	"lucide-clipboard-paste": "clipboard-paste",
	"lucide-clipboard-pen": "clipboard-pen",
	"lucide-clipboard-pen-line": "clipboard-pen-line",
	"lucide-clipboard-plus": "clipboard-plus",
	"lucide-clipboard-signature": "clipboard-pen-line",
	"lucide-clipboard-type": "clipboard-type",
	"lucide-clipboard-x": "clipboard-x",
	"lucide-clock": "clock",
	"lucide-clock-1": "clock-1",
	"lucide-clock-1-0": "clock-10",
	"lucide-clock-1-1": "clock-11",
	"lucide-clock-1-2": "clock-12",
	"lucide-clock-2": "clock-2",
	"lucide-clock-3": "clock-3",
	"lucide-clock-4": "clock-4",
	"lucide-clock-5": "clock-5",
	"lucide-clock-6": "clock-6",
	"lucide-clock-7": "clock-7",
	"lucide-clock-8": "clock-8",
	"lucide-clock-9": "clock-9",
	"lucide-clock-alert": "clock-alert",
	"lucide-clock-arrow-down": "clock-arrow-down",
	"lucide-clock-arrow-left": "clock-arrow-left",
	"lucide-clock-arrow-right": "clock-arrow-right",
	"lucide-clock-arrow-up": "clock-arrow-up",
	"lucide-clock-check": "clock-check",
	"lucide-clock-fading": "clock-fading",
	"lucide-clock-plus": "clock-plus",
	"lucide-closed-caption": "closed-caption",
	"lucide-cloud": "cloud",
	"lucide-cloud-alert": "cloud-alert",
	"lucide-cloud-backup": "cloud-backup",
	"lucide-cloud-check": "cloud-check",
	"lucide-cloud-cog": "cloud-cog",
	"lucide-cloud-download": "cloud-download",
	"lucide-cloud-drizzle": "cloud-drizzle",
	"lucide-cloud-fog": "cloud-fog",
	"lucide-cloud-hail": "cloud-hail",
	"lucide-cloud-lightning": "cloud-lightning",
	"lucide-cloud-moon": "cloud-moon",
	"lucide-cloud-moon-rain": "cloud-moon-rain",
	"lucide-cloud-off": "cloud-off",
	"lucide-cloud-rain": "cloud-rain",
	"lucide-cloud-rain-wind": "cloud-rain-wind",
	"lucide-cloud-snow": "cloud-snow",
	"lucide-cloud-sun": "cloud-sun",
	"lucide-cloud-sun-rain": "cloud-sun-rain",
	"lucide-cloud-sync": "cloud-sync",
	"lucide-cloud-upload": "cloud-upload",
	"lucide-cloudy": "cloudy",
	"lucide-clover": "clover",
	"lucide-club": "club",
	"lucide-code": "code",
	"lucide-code-2": "code-xml",
	"lucide-code-square": "square-code",
	"lucide-code-xml": "code-xml",
	"lucide-coffee": "coffee",
	"lucide-cog": "cog",
	"lucide-coins": "coins",
	"lucide-columns": "columns-2",
	"lucide-columns-2": "columns-2",
	"lucide-columns-3": "columns-3",
	"lucide-columns-3-cog": "columns-3-cog",
	"lucide-columns-4": "columns-4",
	"lucide-columns-settings": "columns-3-cog",
	"lucide-combine": "combine",
	"lucide-command": "command",
	"lucide-compass": "compass",
	"lucide-component": "component",
	"lucide-computer": "computer",
	"lucide-concierge-bell": "concierge-bell",
	"lucide-cone": "cone",
	"lucide-construction": "construction",
	"lucide-contact": "contact",
	"lucide-contact-2": "contact-round",
	"lucide-contact-round": "contact-round",
	"lucide-container": "container",
	"lucide-contrast": "contrast",
	"lucide-cookie": "cookie",
	"lucide-cooking-pot": "cooking-pot",
	"lucide-copy": "copy",
	"lucide-copy-check": "copy-check",
	"lucide-copyleft": "copyleft",
	"lucide-copy-minus": "copy-minus",
	"lucide-copy-plus": "copy-plus",
	"lucide-copyright": "copyright",
	"lucide-copy-slash": "copy-slash",
	"lucide-copy-x": "copy-x",
	"lucide-corner-down-left": "corner-down-left",
	"lucide-corner-down-right": "corner-down-right",
	"lucide-corner-left-down": "corner-left-down",
	"lucide-corner-left-up": "corner-left-up",
	"lucide-corner-right-down": "corner-right-down",
	"lucide-corner-right-up": "corner-right-up",
	"lucide-corner-up-left": "corner-up-left",
	"lucide-corner-up-right": "corner-up-right",
	"lucide-cpu": "cpu",
	"lucide-creative-commons": "creative-commons",
	"lucide-credit-card": "credit-card",
	"lucide-credit-card-check": "credit-card-check",
	"lucide-credit-card-minus": "credit-card-minus",
	"lucide-credit-card-plus": "credit-card-plus",
	"lucide-credit-card-reader": "credit-card-reader",
	"lucide-credit-card-x": "credit-card-x",
	"lucide-croissant": "croissant",
	"lucide-crop": "crop",
	"lucide-cross": "cross",
	"lucide-crosshair": "crosshair",
	"lucide-crown": "crown",
	"lucide-cuboid": "cuboid",
	"lucide-cupcake": "cupcake",
	"lucide-cup-soda": "cup-soda",
	"lucide-curly-braces": "braces",
	"lucide-currency": "currency",
	"lucide-cylinder": "cylinder",
	"lucide-dam": "dam",
	"lucide-database": "database",
	"lucide-database-arrow-down": "database-arrow-down",
	"lucide-database-arrow-up": "database-arrow-up",
	"lucide-database-backup": "database-backup",
	"lucide-database-check": "database-check",
	"lucide-database-minus": "database-minus",
	"lucide-database-plus": "database-plus",
	"lucide-database-search": "database-search",
	"lucide-database-x": "database-x",
	"lucide-database-zap": "database-zap",
	"lucide-decimals-arrow-left": "decimals-arrow-left",
	"lucide-decimals-arrow-right": "decimals-arrow-right",
	"lucide-delete": "delete",
	"lucide-dessert": "dessert",
	"lucide-diameter": "diameter",
	"lucide-diamond": "diamond",
	"lucide-diamond-minus": "diamond-minus",
	"lucide-diamond-percent": "diamond-percent",
	"lucide-diamond-plus": "diamond-plus",
	"lucide-dice-1": "dice-1",
	"lucide-dice-2": "dice-2",
	"lucide-dice-3": "dice-3",
	"lucide-dice-4": "dice-4",
	"lucide-dice-5": "dice-5",
	"lucide-dice-6": "dice-6",
	"lucide-dices": "dices",
	"lucide-diff": "diff",
	"lucide-disc": "disc",
	"lucide-disc-2": "disc-2",
	"lucide-disc-3": "disc-3",
	"lucide-disc-album": "disc-album",
	"lucide-divide": "divide",
	"lucide-divide-circle": "circle-divide",
	"lucide-divide-square": "square-divide",
	"lucide-dna": "dna",
	"lucide-dna-off": "dna-off",
	"lucide-dock": "dock",
	"lucide-dog": "dog",
	"lucide-dollar-sign": "dollar-sign",
	"lucide-dome": "dome",
	"lucide-donut": "donut",
	"lucide-door-closed": "door-closed",
	"lucide-door-closed-cog": "door-closed-cog",
	"lucide-door-closed-locked": "door-closed-locked",
	"lucide-door-closed-package": "door-closed-package",
	"lucide-door-open": "door-open",
	"lucide-door-stairwell": "door-stairwell",
	"lucide-dot": "dot",
	"lucide-dot-square": "square-dot",
	"lucide-download": "download",
	"lucide-download-cloud": "cloud-download",
	"lucide-drafting-compass": "drafting-compass",
	"lucide-drama": "drama",
	"lucide-drill": "drill",
	"lucide-drone": "drone",
	"lucide-droplet": "droplet",
	"lucide-droplet-off": "droplet-off",
	"lucide-droplets": "droplets",
	"lucide-drum": "drum",
	"lucide-drumstick": "drumstick",
	"lucide-dumbbell": "dumbbell",
	"lucide-ear": "ear",
	"lucide-ear-off": "ear-off",
	"lucide-earth": "earth",
	"lucide-earth-lock": "earth-lock",
	"lucide-eclipse": "eclipse",
	"lucide-edit": "square-pen",
	"lucide-edit-2": "pen",
	"lucide-edit-3": "pen-line",
	"lucide-egg": "egg",
	"lucide-egg-fried": "egg-fried",
	"lucide-egg-off": "egg-off",
	"lucide-eject": "eject",
	"lucide-ellipse": "ellipse",
	"lucide-ellipsis": "ellipsis",
	"lucide-ellipsis-vertical": "ellipsis-vertical",
	"lucide-engine": "engine",
	"lucide-equal": "equal",
	"lucide-equal-approximately": "equal-approximately",
	"lucide-equal-approximately-not": "equal-approximately-not",
	"lucide-equal-not": "equal-not",
	"lucide-equal-square": "square-equal",
	"lucide-eraser": "eraser",
	"lucide-ethernet-port": "ethernet-port",
	"lucide-euro": "euro",
	"lucide-ev-charger": "ev-charger",
	"lucide-expand": "expand",
	"lucide-external-link": "external-link",
	"lucide-eye": "eye",
	"lucide-eye-closed": "eye-closed",
	"lucide-eye-dashed": "eye-dashed",
	"lucide-eye-off": "eye-off",
	"lucide-face-angry": "angry",
	"lucide-face-expressionless": "annoyed",
	"lucide-face-grinning": "laugh",
	"lucide-face-neutral": "meh",
	"lucide-face-slightly-frowning": "frown",
	"lucide-face-slightly-smiling": "smile",
	"lucide-face-slightly-smiling-plus": "smile-plus",
	"lucide-factory": "factory",
	"lucide-fan": "fan",
	"lucide-fast-forward": "fast-forward",
	"lucide-faucet": "faucet",
	"lucide-feather": "feather",
	"lucide-fence": "fence",
	"lucide-ferris-wheel": "ferris-wheel",
	"lucide-file": "file",
	"lucide-file-archive": "file-archive",
	"lucide-file-audio": "file-headphone",
	"lucide-file-audio-2": "file-headphone",
	"lucide-file-axis-3d": "file-axis-3d",
	"lucide-file-badge": "file-badge",
	"lucide-file-badge-2": "file-badge",
	"lucide-file-bar-chart": "file-chart-column-increasing",
	"lucide-file-bar-chart-2": "file-chart-column",
	"lucide-file-box": "file-box",
	"lucide-file-braces": "file-braces",
	"lucide-file-braces-corner": "file-braces-corner",
	"lucide-file-chart-column": "file-chart-column",
	"lucide-file-chart-column-increasing": "file-chart-column-increasing",
	"lucide-file-chart-line": "file-chart-line",
	"lucide-file-chart-pie": "file-chart-pie",
	"lucide-file-check": "file-check",
	"lucide-file-check-2": "file-check-2",
	"lucide-file-check-corner": "file-check-2",
	"lucide-file-clock": "file-clock",
	"lucide-file-code": "file-code",
	"lucide-file-code-2": "file-code-corner",
	"lucide-file-code-corner": "file-code-corner",
	"lucide-file-cog": "file-cog",
	"lucide-file-cog-2": "file-cog",
	"lucide-file-diff": "file-diff",
	"lucide-file-digit": "file-digit",
	"lucide-file-down": "file-down",
	"lucide-file-edit": "file-pen",
	"lucide-file-exclamation-point": "file-exclamation-point",
	"lucide-file-headphone": "file-headphone",
	"lucide-file-heart": "file-heart",
	"lucide-file-image": "file-image",
	"lucide-file-input": "file-input",
	"lucide-file-json": "file-braces",
	"lucide-file-json-2": "file-braces-corner",
	"lucide-file-key": "file-key",
	"lucide-file-key-2": "file-key",
	"lucide-file-line-chart": "file-chart-line",
	"lucide-file-lock": "file-lock",
	"lucide-file-lock-2": "file-lock",
	"lucide-file-minus": "file-minus",
	"lucide-file-minus-2": "file-minus-corner",
	"lucide-file-minus-corner": "file-minus-corner",
	"lucide-file-music": "file-music",
	"lucide-file-output": "file-output",
	"lucide-file-pen": "file-pen",
	"lucide-file-pen-line": "file-pen-line",
	"lucide-file-pie-chart": "file-chart-pie",
	"lucide-file-play": "file-play",
	"lucide-file-plus": "file-plus",
	"lucide-file-plus-2": "file-plus-corner",
	"lucide-file-plus-corner": "file-plus-corner",
	"lucide-file-question": "file-question-mark",
	"lucide-file-question-mark": "file-question-mark",
	"lucide-files": "files",
	"lucide-file-scan": "file-scan",
	"lucide-file-search": "file-search",
	"lucide-file-search-2": "file-search-corner",
	"lucide-file-search-corner": "file-search-corner",
	"lucide-file-signal": "file-signal",
	"lucide-file-signature": "file-pen-line",
	"lucide-file-sliders": "file-sliders",
	"lucide-file-spreadsheet": "file-spreadsheet",
	"lucide-file-stack": "file-stack",
	"lucide-file-symlink": "file-symlink",
	"lucide-file-terminal": "file-terminal",
	"lucide-file-text": "file-text",
	"lucide-file-type": "file-type",
	"lucide-file-type-2": "file-type-corner",
	"lucide-file-type-corner": "file-type-corner",
	"lucide-file-up": "file-up",
	"lucide-file-user": "file-user",
	"lucide-file-video": "file-play",
	"lucide-file-video-2": "file-video-camera",
	"lucide-file-video-camera": "file-video-camera",
	"lucide-file-volume": "file-volume",
	"lucide-file-volume-2": "file-signal",
	"lucide-file-warning": "file-exclamation-point",
	"lucide-file-x": "file-x",
	"lucide-file-x2": "file-x-corner",
	"lucide-file-x-corner": "file-x-corner",
	"lucide-film": "film",
	"lucide-filter": "funnel",
	"lucide-filter-x": "funnel-x",
	"lucide-fingerprint": "fingerprint",
	"lucide-fingerprint-pattern": "fingerprint",
	"lucide-fire-extinguisher": "fire-extinguisher",
	"lucide-fish": "fish",
	"lucide-fishing-hook": "fishing-hook",
	"lucide-fishing-rod": "fishing-rod",
	"lucide-fish-off": "fish-off",
	"lucide-fish-symbol": "fish-symbol",
	"lucide-flag": "flag",
	"lucide-flag-off": "flag-off",
	"lucide-flag-triangle-left": "flag-triangle-left",
	"lucide-flag-triangle-right": "flag-triangle-right",
	"lucide-flame": "flame",
	"lucide-flame-kindling": "flame-kindling",
	"lucide-flashlight": "flashlight",
	"lucide-flashlight-off": "flashlight-off",
	"lucide-flask-conical": "flask-conical",
	"lucide-flask-conical-off": "flask-conical-off",
	"lucide-flask-round": "flask-round",
	"lucide-flip-horizontal": "square-centerline-dashed-horizontal",
	"lucide-flip-horizontal-2": "triangles-centerline-dashed-horizontal",
	"lucide-flip-vertical": "square-centerline-dashed-vertical",
	"lucide-flip-vertical-2": "triangles-centerline-dashed-vertical",
	"lucide-flower": "flower",
	"lucide-flower-2": "flower-2",
	"lucide-focus": "focus",
	"lucide-folder": "folder",
	"lucide-folder-archive": "folder-archive",
	"lucide-folder-bookmark": "folder-bookmark",
	"lucide-folder-check": "folder-check",
	"lucide-folder-clock": "folder-clock",
	"lucide-folder-closed": "folder-closed",
	"lucide-folder-code": "folder-code",
	"lucide-folder-cog": "folder-cog",
	"lucide-folder-cog-2": "folder-cog",
	"lucide-folder-dot": "folder-dot",
	"lucide-folder-down": "folder-down",
	"lucide-folder-edit": "folder-pen",
	"lucide-folder-git": "folder-git",
	"lucide-folder-git-2": "folder-git-2",
	"lucide-folder-heart": "folder-heart",
	"lucide-folder-input": "folder-input",
	"lucide-folder-kanban": "folder-kanban",
	"lucide-folder-key": "folder-key",
	"lucide-folder-lock": "folder-lock",
	"lucide-folder-minus": "folder-minus",
	"lucide-folder-open": "folder-open",
	"lucide-folder-open-dot": "folder-open-dot",
	"lucide-folder-output": "folder-output",
	"lucide-folder-pen": "folder-pen",
	"lucide-folder-plus": "folder-plus",
	"lucide-folder-root": "folder-root",
	"lucide-folders": "folders",
	"lucide-folder-search": "folder-search",
	"lucide-folder-search-2": "folder-search-2",
	"lucide-folder-symlink": "folder-symlink",
	"lucide-folder-sync": "folder-sync",
	"lucide-folder-tree": "folder-tree",
	"lucide-folder-up": "folder-up",
	"lucide-folder-x": "folder-x",
	"lucide-fold-horizontal": "fold-horizontal",
	"lucide-fold-vertical": "fold-vertical",
	"lucide-footprints": "footprints",
	"lucide-fork-knife": "utensils",
	"lucide-fork-knife-crossed": "utensils-crossed",
	"lucide-forklift": "forklift",
	"lucide-form": "form",
	"lucide-form-input": "rectangle-ellipsis",
	"lucide-forward": "forward",
	"lucide-frame": "frame",
	"lucide-frown": "frown",
	"lucide-fuel": "fuel",
	"lucide-fullscreen": "fullscreen",
	"lucide-function-square": "square-function",
	"lucide-funnel": "funnel",
	"lucide-funnel-plus": "funnel-plus",
	"lucide-funnel-x": "funnel-x",
	"lucide-galaxy": "galaxy",
	"lucide-gallery-horizontal": "gallery-horizontal",
	"lucide-gallery-horizontal-end": "gallery-horizontal-end",
	"lucide-gallery-thumbnails": "gallery-thumbnails",
	"lucide-gallery-vertical": "gallery-vertical",
	"lucide-gallery-vertical-end": "gallery-vertical-end",
	"lucide-gamepad": "gamepad",
	"lucide-gamepad-2": "gamepad-2",
	"lucide-gamepad-directional": "gamepad-directional",
	"lucide-gantt-chart": "chart-no-axes-gantt",
	"lucide-gantt-chart-square": "square-chart-gantt",
	"lucide-gap-horizontal": "gap-horizontal",
	"lucide-gap-vertical": "gap-vertical",
	"lucide-gauge": "gauge",
	"lucide-gauge-circle": "circle-gauge",
	"lucide-gavel": "gavel",
	"lucide-gem": "gem",
	"lucide-georgian-lari": "georgian-lari",
	"lucide-germ": "germ",
	"lucide-germ-off": "germ-off",
	"lucide-ghost": "ghost",
	"lucide-gift": "gift",
	"lucide-git-branch": "git-branch",
	"lucide-git-branch-minus": "git-branch-minus",
	"lucide-git-branch-plus": "git-branch-plus",
	"lucide-git-commit": "git-commit-horizontal",
	"lucide-git-commit-horizontal": "git-commit-horizontal",
	"lucide-git-commit-vertical": "git-commit-vertical",
	"lucide-git-compare": "git-compare",
	"lucide-git-compare-arrows": "git-compare-arrows",
	"lucide-git-fork": "git-fork",
	"lucide-git-graph": "git-graph",
	"lucide-git-merge": "git-merge",
	"lucide-git-merge-conflict": "git-merge-conflict",
	"lucide-git-pull-request": "git-pull-request",
	"lucide-git-pull-request-arrow": "git-pull-request-arrow",
	"lucide-git-pull-request-closed": "git-pull-request-closed",
	"lucide-git-pull-request-create": "git-pull-request-create",
	"lucide-git-pull-request-create-arrow": "git-pull-request-create-arrow",
	"lucide-git-pull-request-draft": "git-pull-request-draft",
	"lucide-glasses": "glasses",
	"lucide-glass-water": "glass-water",
	"lucide-globe": "globe",
	"lucide-globe-2": "earth",
	"lucide-globe-check": "globe-check",
	"lucide-globe-code": "globe-code",
	"lucide-globe-lock": "globe-lock",
	"lucide-globe-off": "globe-off",
	"lucide-globe-x": "globe-x",
	"lucide-goal": "goal",
	"lucide-gpu": "gpu",
	"lucide-grab": "hand-grab",
	"lucide-graduation-cap": "graduation-cap",
	"lucide-grape": "grape",
	"lucide-grid": "grid-3-x-3",
	"lucide-grid-2-x-2": "grid-2-x-2",
	"lucide-grid-2-x2": "grid-2-x-2",
	"lucide-grid-2-x-2-check": "grid-2-x-2-check",
	"lucide-grid-2-x2-check": "grid-2-x-2-check",
	"lucide-grid-2-x-2-plus": "grid-2-x-2-plus",
	"lucide-grid-2-x2-plus": "grid-2-x-2-plus",
	"lucide-grid-2-x-2-x": "grid-2-x-2-x",
	"lucide-grid-2-x2-x": "grid-2-x-2-x",
	"lucide-grid-3-x-2": "grid-3-x-2",
	"lucide-grid-3-x-3": "grid-3-x-3",
	"lucide-grid-3-x3": "grid-3-x-3",
	"lucide-grip": "grip",
	"lucide-grip-horizontal": "grip-horizontal",
	"lucide-grip-vertical": "grip-vertical",
	"lucide-groceries": "groceries",
	"lucide-group": "group",
	"lucide-guitar": "guitar",
	"lucide-ham": "ham",
	"lucide-hamburger": "hamburger",
	"lucide-hammer": "hammer",
	"lucide-hand": "hand",
	"lucide-handbag": "handbag",
	"lucide-hand-coins": "hand-coins",
	"lucide-hand-fist": "hand-fist",
	"lucide-hand-grab": "hand-grab",
	"lucide-hand-heart": "hand-heart",
	"lucide-hand-helping": "hand-helping",
	"lucide-handle-bottom-right": "handle-bottom-right",
	"lucide-hand-metal": "hand-metal",
	"lucide-hand-platter": "hand-platter",
	"lucide-handshake": "handshake",
	"lucide-hard-drive": "hard-drive",
	"lucide-hard-drive-download": "hard-drive-download",
	"lucide-hard-drive-upload": "hard-drive-upload",
	"lucide-hard-hat": "hard-hat",
	"lucide-hash": "hash",
	"lucide-hat-glasses": "hat-glasses",
	"lucide-haze": "haze",
	"lucide-hd": "hd",
	"lucide-hdmi-port": "hdmi-port",
	"lucide-heading": "heading",
	"lucide-heading-1": "heading-1",
	"lucide-heading-2": "heading-2",
	"lucide-heading-3": "heading-3",
	"lucide-heading-4": "heading-4",
	"lucide-heading-5": "heading-5",
	"lucide-heading-6": "heading-6",
	"lucide-headphone-off": "headphone-off",
	"lucide-headphones": "headphones",
	"lucide-headset": "headset",
	"lucide-heart": "heart",
	"lucide-heart-crack": "heart-crack",
	"lucide-heart-handshake": "heart-handshake",
	"lucide-heart-minus": "heart-minus",
	"lucide-heart-off": "heart-off",
	"lucide-heart-plus": "heart-plus",
	"lucide-heart-pulse": "heart-pulse",
	"lucide-heart-x": "heart-x",
	"lucide-heater": "heater",
	"lucide-helicopter": "helicopter",
	"lucide-help-circle": "circle-help",
	"lucide-helping-hand": "hand-helping",
	"lucide-hexagon": "hexagon",
	"lucide-highlighter": "highlighter",
	"lucide-hiking-stick": "hiking-stick",
	"lucide-history": "history",
	"lucide-home": "home",
	"lucide-hop": "hop",
	"lucide-hop-off": "hop-off",
	"lucide-hospital": "hospital",
	"lucide-hotel": "hotel",
	"lucide-hourglass": "hourglass",
	"lucide-hourglass-cog": "hourglass-cog",
	"lucide-house": "home",
	"lucide-house-cog": "house-cog",
	"lucide-house-heart": "house-heart",
	"lucide-house-plug": "house-plug",
	"lucide-house-plus": "house-plus",
	"lucide-houses": "houses",
	"lucide-house-wifi": "house-wifi",
	"lucide-ice-cream": "ice-cream-cone",
	"lucide-ice-cream-2": "ice-cream-bowl",
	"lucide-ice-cream-bowl": "ice-cream-bowl",
	"lucide-ice-cream-cone": "ice-cream-cone",
	"lucide-id-card": "id-card",
	"lucide-id-card-lanyard": "id-card-lanyard",
	"lucide-image": "image",
	"lucide-image-down": "image-down",
	"lucide-image-minus": "image-minus",
	"lucide-image-off": "image-off",
	"lucide-image-play": "image-play",
	"lucide-image-plus": "image-plus",
	"lucide-images": "images",
	"lucide-image-up": "image-up",
	"lucide-image-upscale": "image-upscale",
	"lucide-import": "import",
	"lucide-inbox": "inbox",
	"lucide-indent": "list-indent-increase",
	"lucide-indent-decrease": "list-indent-decrease",
	"lucide-indent-increase": "list-indent-increase",
	"lucide-indian-rupee": "indian-rupee",
	"lucide-infinity": "infinity",
	"lucide-info": "info",
	"lucide-inspect": "square-mouse-pointer",
	"lucide-inspection-panel": "inspection-panel",
	"lucide-italic": "italic",
	"lucide-iteration-ccw": "iteration-ccw",
	"lucide-iteration-cw": "iteration-cw",
	"lucide-iv-bag": "iv-bag",
	"lucide-japanese-yen": "japanese-yen",
	"lucide-joystick": "joystick",
	"lucide-kanban": "kanban",
	"lucide-kanban-square": "square-kanban",
	"lucide-kanban-square-dashed": "square-dashed-kanban",
	"lucide-kayak": "kayak",
	"lucide-kazakh-tenge": "kazakh-tenge",
	"lucide-key": "key",
	"lucide-keyboard": "keyboard",
	"lucide-keyboard-music": "keyboard-music",
	"lucide-keyboard-off": "keyboard-off",
	"lucide-key-round": "key-round",
	"lucide-key-square": "key-square",
	"lucide-lambda": "lambda",
	"lucide-lamp": "lamp",
	"lucide-lamp-ceiling": "lamp-ceiling",
	"lucide-lamp-desk": "lamp-desk",
	"lucide-lamp-floor": "lamp-floor",
	"lucide-lamp-wall-down": "lamp-wall-down",
	"lucide-lamp-wall-up": "lamp-wall-up",
	"lucide-landmark": "landmark",
	"lucide-land-plot": "land-plot",
	"lucide-languages": "languages",
	"lucide-laptop": "laptop",
	"lucide-laptop-2": "laptop-minimal",
	"lucide-laptop-minimal": "laptop-minimal",
	"lucide-laptop-minimal-check": "laptop-minimal-check",
	"lucide-lasso": "lasso",
	"lucide-lasso-select": "lasso-select",
	"lucide-laugh": "laugh",
	"lucide-layer-arrow-down": "layer-arrow-down",
	"lucide-layer-arrow-up": "layer-arrow-up",
	"lucide-layers": "layers",
	"lucide-layers-2": "layers-2",
	"lucide-layers-3": "layers",
	"lucide-layers-arrow-down": "layers-arrow-down",
	"lucide-layers-arrow-up": "layers-arrow-up",
	"lucide-layers-minus": "layers-minus",
	"lucide-layers-plus": "layers-plus",
	"lucide-layout": "panels-top-left",
	"lucide-layout-arrow-down": "layout-arrow-down",
	"lucide-layout-arrow-right": "layout-arrow-right",
	"lucide-layout-dashboard": "layout-dashboard",
	"lucide-layout-freeform": "layout-freeform",
	"lucide-layout-grid": "layout-grid",
	"lucide-layout-grid-circles": "layout-grid-circles",
	"lucide-layout-list": "layout-list",
	"lucide-layout-panel-left": "layout-panel-left",
	"lucide-layout-panel-top": "layout-panel-top",
	"lucide-layout-template": "layout-template",
	"lucide-leaf": "leaf",
	"lucide-leafy-green": "leafy-green",
	"lucide-lectern": "lectern",
	"lucide-lens": "lens",
	"lucide-lens-concave": "lens-concave",
	"lucide-lens-convex": "lens-convex",
	"lucide-letters": "letters",
	"lucide-letter-text": "text-initial",
	"lucide-library": "library",
	"lucide-library-big": "library-big",
	"lucide-library-square": "square-library",
	"lucide-life-buoy": "life-buoy",
	"lucide-ligature": "ligature",
	"lucide-lightbulb": "lightbulb",
	"lucide-lightbulb-off": "lightbulb-off",
	"lucide-lighthouse": "lighthouse",
	"lucide-line-chart": "chart-line",
	"lucide-line-dot-bottom-vertical": "line-dot-bottom-vertical",
	"lucide-line-dot-left-horizontal": "line-dot-left-horizontal",
	"lucide-line-dot-right-horizontal": "line-dot-right-horizontal",
	"lucide-line-dot-top-vertical": "line-dot-top-vertical",
	"lucide-line-squiggle": "line-squiggle",
	"lucide-line-style": "line-style",
	"lucide-link": "link",
	"lucide-link-2": "link-2",
	"lucide-link-2-off": "link-2-off",
	"lucide-list": "list",
	"lucide-list-check": "list-check",
	"lucide-list-checks": "list-checks",
	"lucide-list-chevrons-down-up": "list-chevrons-down-up",
	"lucide-list-chevrons-up-down": "list-chevrons-up-down",
	"lucide-list-clock": "list-clock",
	"lucide-list-collapse": "list-collapse",
	"lucide-list-end": "list-end",
	"lucide-list-filter": "list-filter",
	"lucide-list-filter-plus": "list-filter-plus",
	"lucide-list-indent-decrease": "list-indent-decrease",
	"lucide-list-indent-increase": "list-indent-increase",
	"lucide-list-minus": "list-minus",
	"lucide-list-music": "list-music",
	"lucide-list-ordered": "list-ordered",
	"lucide-list-plus": "list-plus",
	"lucide-list-restart": "list-restart",
	"lucide-list-sort-ascending": "list-sort-ascending",
	"lucide-list-sort-descending": "list-sort-descending",
	"lucide-list-start": "list-start",
	"lucide-list-todo": "list-todo",
	"lucide-list-tree": "list-tree",
	"lucide-list-video": "list-video",
	"lucide-list-x": "list-x",
	"lucide-loader": "loader",
	"lucide-loader-2": "loader-circle",
	"lucide-loader-circle": "loader-circle",
	"lucide-loader-pinwheel": "loader-pinwheel",
	"lucide-locate": "locate",
	"lucide-locate-fixed": "locate-fixed",
	"lucide-locate-off": "locate-off",
	"lucide-location-edit": "map-pin-pen",
	"lucide-lock": "lock",
	"lucide-lock-keyhole": "lock-keyhole",
	"lucide-lock-keyhole-open": "lock-keyhole-open",
	"lucide-lock-open": "lock-open",
	"lucide-log-in": "log-in",
	"lucide-log-out": "log-out",
	"lucide-logs": "logs",
	"lucide-lollipop": "lollipop",
	"lucide-luggage": "luggage",
	"lucide-magnet": "magnet",
	"lucide-mail": "mail",
	"lucide-mail-badge": "mail-badge",
	"lucide-mailbox": "mailbox",
	"lucide-mail-check": "mail-check",
	"lucide-mail-clock": "mail-clock",
	"lucide-mail-dot": "mail-dot",
	"lucide-mail-minus": "mail-minus",
	"lucide-mail-open": "mail-open",
	"lucide-mail-pen": "mail-pen",
	"lucide-mail-plus": "mail-plus",
	"lucide-mail-question": "mail-question-mark",
	"lucide-mail-question-mark": "mail-question-mark",
	"lucide-mails": "mails",
	"lucide-mail-search": "mail-search",
	"lucide-mail-warning": "mail-warning",
	"lucide-mail-x": "mail-x",
	"lucide-map": "map",
	"lucide-map-minus": "map-minus",
	"lucide-map-pin": "map-pin",
	"lucide-map-pin-check": "map-pin-check",
	"lucide-map-pin-check-inside": "map-pin-check-inside",
	"lucide-map-pin-house": "map-pin-house",
	"lucide-map-pin-minus": "map-pin-minus",
	"lucide-map-pin-minus-inside": "map-pin-minus-inside",
	"lucide-map-pinned": "map-pinned",
	"lucide-map-pin-off": "map-pin-off",
	"lucide-map-pin-pen": "map-pin-pen",
	"lucide-map-pin-plus": "map-pin-plus",
	"lucide-map-pin-plus-inside": "map-pin-plus-inside",
	"lucide-map-pin-search": "map-pin-search",
	"lucide-map-pin-x": "map-pin-x",
	"lucide-map-pin-x-inside": "map-pin-x-inside",
	"lucide-map-plus": "map-plus",
	"lucide-mars": "mars",
	"lucide-mars-stroke": "mars-stroke",
	"lucide-martini": "martini",
	"lucide-maximize": "maximize",
	"lucide-maximize-2": "maximize-2",
	"lucide-medal": "medal",
	"lucide-megaphone": "megaphone",
	"lucide-megaphone-off": "megaphone-off",
	"lucide-meh": "meh",
	"lucide-memory-stick": "memory-stick",
	"lucide-menu": "menu",
	"lucide-menu-square": "square-menu",
	"lucide-merge": "merge",
	"lucide-message-circle": "message-circle",
	"lucide-message-circle-check": "message-circle-check",
	"lucide-message-circle-code": "message-circle-code",
	"lucide-message-circle-dashed": "message-circle-dashed",
	"lucide-message-circle-dashed-check": "message-circle-dashed-check",
	"lucide-message-circle-heart": "message-circle-heart",
	"lucide-message-circle-more": "message-circle-more",
	"lucide-message-circle-off": "message-circle-off",
	"lucide-message-circle-plus": "message-circle-plus",
	"lucide-message-circle-question": "message-circle-question",
	"lucide-message-circle-question-mark": "message-circle-question",
	"lucide-message-circle-reply": "message-circle-reply",
	"lucide-message-circle-warning": "message-circle-warning",
	"lucide-message-circle-x": "message-circle-x",
	"lucide-messages-circle": "messages-circle",
	"lucide-message-square": "message-square",
	"lucide-message-square-check": "message-square-check",
	"lucide-message-square-code": "message-square-code",
	"lucide-message-square-dashed": "message-square-dashed",
	"lucide-message-square-diff": "message-square-diff",
	"lucide-message-square-dot": "message-square-dot",
	"lucide-message-square-heart": "message-square-heart",
	"lucide-message-square-lock": "message-square-lock",
	"lucide-message-square-more": "message-square-more",
	"lucide-message-square-off": "message-square-off",
	"lucide-message-square-plus": "message-square-plus",
	"lucide-message-square-quote": "message-square-quote",
	"lucide-message-square-reply": "message-square-reply",
	"lucide-message-square-share": "message-square-share",
	"lucide-message-square-text": "message-square-text",
	"lucide-message-square-warning": "message-square-warning",
	"lucide-message-square-x": "message-square-x",
	"lucide-messages-square": "messages-square",
	"lucide-metronome": "metronome",
	"lucide-mic": "mic",
	"lucide-mic-2": "mic-vocal",
	"lucide-mic-audio-lines": "mic-audio-lines",
	"lucide-mic-off": "mic-off",
	"lucide-microchip": "microchip",
	"lucide-microscope": "microscope",
	"lucide-microwave": "microwave",
	"lucide-mic-signal": "mic-signal",
	"lucide-mic-vocal": "mic-vocal",
	"lucide-midi-port": "midi-port",
	"lucide-milestone": "milestone",
	"lucide-milk": "milk",
	"lucide-milk-off": "milk-off",
	"lucide-minimize": "minimize",
	"lucide-minimize-2": "minimize-2",
	"lucide-minus": "minus",
	"lucide-minus-circle": "circle-minus",
	"lucide-minus-square": "square-minus",
	"lucide-mirror-rectangular": "mirror-rectangular",
	"lucide-mirror-round": "mirror-round",
	"lucide-monitor": "monitor",
	"lucide-monitor-check": "monitor-check",
	"lucide-monitor-cloud": "monitor-cloud",
	"lucide-monitor-cog": "monitor-cog",
	"lucide-monitor-dot": "monitor-dot",
	"lucide-monitor-down": "monitor-down",
	"lucide-monitor-off": "monitor-off",
	"lucide-monitor-pause": "monitor-pause",
	"lucide-monitor-pc": "monitor-pc",
	"lucide-monitor-play": "monitor-play",
	"lucide-monitor-smartphone": "monitor-smartphone",
	"lucide-monitor-speaker": "monitor-speaker",
	"lucide-monitor-stop": "monitor-stop",
	"lucide-monitor-up": "monitor-up",
	"lucide-monitor-x": "monitor-x",
	"lucide-moon": "moon",
	"lucide-moon-star": "moon-star",
	"lucide-mop": "mop",
	"lucide-mop-sparkles": "mop-sparkles",
	"lucide-more-horizontal": "ellipsis",
	"lucide-more-vertical": "ellipsis-vertical",
	"lucide-mosque": "mosque",
	"lucide-motorbike": "motorbike",
	"lucide-mountain": "mountain",
	"lucide-mountain-snow": "mountain-snow",
	"lucide-mouse": "mouse",
	"lucide-mouse-left": "mouse-left",
	"lucide-mouse-off": "mouse-off",
	"lucide-mouse-pointer": "mouse-pointer",
	"lucide-mouse-pointer-2": "mouse-pointer-2",
	"lucide-mouse-pointer-2-off": "mouse-pointer-2-off",
	"lucide-mouse-pointer-ban": "mouse-pointer-ban",
	"lucide-mouse-pointer-click": "mouse-pointer-click",
	"lucide-mouse-pointer-square-dashed": "square-dashed-mouse-pointer",
	"lucide-mouse-right": "mouse-right",
	"lucide-mouth": "mouth",
	"lucide-mouth-off": "mouth-off",
	"lucide-move": "move",
	"lucide-move-3d": "move-3d",
	"lucide-move-diagonal": "move-diagonal",
	"lucide-move-diagonal-2": "move-diagonal-2",
	"lucide-move-down": "move-down",
	"lucide-move-down-left": "move-down-left",
	"lucide-move-down-right": "move-down-right",
	"lucide-move-horizontal": "move-horizontal",
	"lucide-move-left": "move-left",
	"lucide-move-right": "move-right",
	"lucide-move-up": "move-up",
	"lucide-move-up-left": "move-up-left",
	"lucide-move-up-right": "move-up-right",
	"lucide-move-vertical": "move-vertical",
	"lucide-m-square": "square-m",
	"lucide-music": "music",
	"lucide-music-2": "music-2",
	"lucide-music-3": "music-3",
	"lucide-music-4": "music-4",
	"lucide-navigation": "navigation",
	"lucide-navigation-2": "navigation-2",
	"lucide-navigation-2-off": "navigation-2-off",
	"lucide-navigation-off": "navigation-off",
	"lucide-nepali-rupee": "nepali-rupee",
	"lucide-network": "network",
	"lucide-newspaper": "newspaper",
	"lucide-nfc": "nfc",
	"lucide-non-binary": "non-binary",
	"lucide-notebook": "notebook",
	"lucide-notebook-dot": "notebook-dot",
	"lucide-notebook-pen": "notebook-pen",
	"lucide-notebook-tabs": "notebook-tabs",
	"lucide-notebook-text": "notebook-text",
	"lucide-notepad-text": "notepad-text",
	"lucide-notepad-text-dashed": "notepad-text-dashed",
	"lucide-nut": "nut",
	"lucide-nut-off": "nut-off",
	"lucide-octagon": "octagon",
	"lucide-octagon-alert": "octagon-alert",
	"lucide-octagon-minus": "octagon-minus",
	"lucide-octagon-pause": "octagon-pause",
	"lucide-octagon-x": "octagon-x",
	"lucide-omega": "omega",
	"lucide-option": "option",
	"lucide-orbit": "orbit",
	"lucide-origami": "origami",
	"lucide-outdent": "list-indent-decrease",
	"lucide-package": "package",
	"lucide-package-2": "package-2",
	"lucide-package-check": "package-check",
	"lucide-package-minus": "package-minus",
	"lucide-package-open": "package-open",
	"lucide-package-plus": "package-plus",
	"lucide-package-search": "package-search",
	"lucide-package-x": "package-x",
	"lucide-paintbrush": "paintbrush",
	"lucide-paintbrush-2": "paintbrush-vertical",
	"lucide-paintbrush-vertical": "paintbrush-vertical",
	"lucide-paint-bucket": "paint-bucket",
	"lucide-paint-roller": "paint-roller",
	"lucide-palette": "palette",
	"lucide-palmtree": "tree-palm",
	"lucide-panda": "panda",
	"lucide-panel-bottom": "panel-bottom",
	"lucide-panel-bottom-close": "panel-bottom-close",
	"lucide-panel-bottom-dashed": "panel-bottom-dashed",
	"lucide-panel-bottom-inactive": "panel-bottom-dashed",
	"lucide-panel-bottom-open": "panel-bottom-open",
	"lucide-panel-left": "panel-left",
	"lucide-panel-left-close": "panel-left-close",
	"lucide-panel-left-dashed": "panel-left-dashed",
	"lucide-panel-left-inactive": "panel-left-dashed",
	"lucide-panel-left-open": "panel-left-open",
	"lucide-panel-left-right-dashed": "panel-left-right-dashed",
	"lucide-panel-right": "panel-right",
	"lucide-panel-right-close": "panel-right-close",
	"lucide-panel-right-dashed": "panel-right-dashed",
	"lucide-panel-right-inactive": "panel-right-dashed",
	"lucide-panel-right-open": "panel-right-open",
	"lucide-panels-left-bottom": "panels-left-bottom",
	"lucide-panels-left-right": "columns-3",
	"lucide-panels-right-bottom": "panels-right-bottom",
	"lucide-panels-top-bottom": "rows-3",
	"lucide-panels-top-left": "panels-top-left",
	"lucide-panel-top": "panel-top",
	"lucide-panel-top-bottom-dashed": "panel-top-bottom-dashed",
	"lucide-panel-top-close": "panel-top-close",
	"lucide-panel-top-dashed": "panel-top-dashed",
	"lucide-panel-top-inactive": "panel-top-dashed",
	"lucide-panel-top-open": "panel-top-open",
	"lucide-paper-bag": "paper-bag",
	"lucide-paperclip": "paperclip",
	"lucide-parasol": "parasol",
	"lucide-parentheses": "parentheses",
	"lucide-park": "park",
	"lucide-parking-circle": "circle-parking",
	"lucide-parking-circle-off": "circle-parking-off",
	"lucide-parking-meter": "parking-meter",
	"lucide-parking-square": "square-parking",
	"lucide-parking-square-off": "square-parking-off",
	"lucide-party-popper": "party-popper",
	"lucide-pause": "pause",
	"lucide-pause-circle": "circle-pause",
	"lucide-pause-octagon": "octagon-pause",
	"lucide-paw-print": "paw-print",
	"lucide-pc-case": "pc-case",
	"lucide-pen": "pen",
	"lucide-pen-box": "square-pen",
	"lucide-pencil": "pencil",
	"lucide-pencil-line": "pencil-line",
	"lucide-pencil-off": "pencil-off",
	"lucide-pencil-ruler": "pencil-ruler",
	"lucide-pencil-sparkles": "pencil-sparkles",
	"lucide-pen-line": "pen-line",
	"lucide-pen-off": "pen-off",
	"lucide-pen-square": "square-pen",
	"lucide-pentagon": "pentagon",
	"lucide-pen-tool": "pen-tool",
	"lucide-percent": "percent",
	"lucide-percent-circle": "circle-percent",
	"lucide-percent-diamond": "diamond-percent",
	"lucide-percent-square": "square-percent",
	"lucide-person-standing": "person-standing",
	"lucide-phi": "phi",
	"lucide-philippine-peso": "philippine-peso",
	"lucide-phone": "phone",
	"lucide-phone-call": "phone-call",
	"lucide-phone-forwarded": "phone-forwarded",
	"lucide-phone-incoming": "phone-incoming",
	"lucide-phone-log": "phone-log",
	"lucide-phone-missed": "phone-missed",
	"lucide-phone-off": "phone-off",
	"lucide-phone-outgoing": "phone-outgoing",
	"lucide-pi": "pi",
	"lucide-piano": "piano",
	"lucide-pickaxe": "pickaxe",
	"lucide-picture-in-picture": "picture-in-picture",
	"lucide-picture-in-picture-2": "picture-in-picture-2",
	"lucide-pie-chart": "chart-pie",
	"lucide-piggy-bank": "piggy-bank",
	"lucide-pilcrow": "pilcrow",
	"lucide-pilcrow-left": "pilcrow-left",
	"lucide-pilcrow-right": "pilcrow-right",
	"lucide-pilcrow-square": "square-pilcrow",
	"lucide-pill": "pill",
	"lucide-pill-bottle": "pill-bottle",
	"lucide-pin": "pin",
	"lucide-pin-off": "pin-off",
	"lucide-pipette": "pipette",
	"lucide-pi-square": "square-pi",
	"lucide-pizza": "pizza",
	"lucide-plane": "plane",
	"lucide-plane-landing": "plane-landing",
	"lucide-plane-takeoff": "plane-takeoff",
	"lucide-plant-pot": "plant-pot",
	"lucide-play": "play",
	"lucide-play-circle": "circle-play",
	"lucide-playing-card": "playing-card",
	"lucide-playing-cards": "playing-cards",
	"lucide-playing-cards-fan": "playing-cards-fan",
	"lucide-play-off": "play-off",
	"lucide-play-square": "square-play",
	"lucide-plug": "plug",
	"lucide-plug-2": "plug-2",
	"lucide-plug-zap": "plug-zap",
	"lucide-plug-zap-2": "plug-zap",
	"lucide-plus": "plus",
	"lucide-plus-circle": "circle-plus",
	"lucide-plus-square": "square-plus",
	"lucide-pocket-knife": "pocket-knife",
	"lucide-podcast": "mic-signal",
	"lucide-podium": "podium",
	"lucide-pointer": "pointer",
	"lucide-pointer-off": "pointer-off",
	"lucide-popcorn": "popcorn",
	"lucide-popsicle": "popsicle",
	"lucide-pound-sterling": "pound-sterling",
	"lucide-power": "power",
	"lucide-power-circle": "circle-power",
	"lucide-power-off": "power-off",
	"lucide-power-square": "square-power",
	"lucide-presentation": "presentation",
	"lucide-printer": "printer",
	"lucide-printer-3d": "printer-3d",
	"lucide-printer-check": "printer-check",
	"lucide-printer-x": "printer-x",
	"lucide-projector": "projector",
	"lucide-proportions": "proportions",
	"lucide-puzzle": "puzzle",
	"lucide-pyramid": "pyramid",
	"lucide-qr-code": "qr-code",
	"lucide-quote": "quote",
	"lucide-rabbit": "rabbit",
	"lucide-radar": "radar",
	"lucide-radiation": "radiation",
	"lucide-radical": "radical",
	"lucide-radio": "radio",
	"lucide-radio-off": "radio-off",
	"lucide-radio-receiver": "radio-receiver",
	"lucide-radio-tower": "radio-tower",
	"lucide-radius": "radius",
	"lucide-rainbow": "rainbow",
	"lucide-rat": "rat",
	"lucide-ratio": "ratio",
	"lucide-receipt": "receipt",
	"lucide-receipt-cent": "receipt-cent",
	"lucide-receipt-euro": "receipt-euro",
	"lucide-receipt-indian-rupee": "receipt-indian-rupee",
	"lucide-receipt-japanese-yen": "receipt-japanese-yen",
	"lucide-receipt-pound-sterling": "receipt-pound-sterling",
	"lucide-receipt-russian-ruble": "receipt-russian-ruble",
	"lucide-receipt-swiss-franc": "receipt-swiss-franc",
	"lucide-receipt-text": "receipt-text",
	"lucide-receipt-turkish-lira": "receipt-turkish-lira",
	"lucide-rectangle-circle": "rectangle-circle",
	"lucide-rectangle-ellipsis": "rectangle-ellipsis",
	"lucide-rectangle-goggles": "rectangle-goggles",
	"lucide-rectangle-horizontal": "rectangle-horizontal",
	"lucide-rectangle-vertical": "rectangle-vertical",
	"lucide-recycle": "recycle",
	"lucide-redo": "redo",
	"lucide-redo-2": "redo-2",
	"lucide-redo-dot": "redo-dot",
	"lucide-refresh-ccw": "refresh-ccw",
	"lucide-refresh-ccw-dot": "refresh-ccw-dot",
	"lucide-refresh-cw": "refresh-cw",
	"lucide-refresh-cw-off": "refresh-cw-off",
	"lucide-refrigerator": "refrigerator",
	"lucide-regex": "regex",
	"lucide-remove-formatting": "remove-formatting",
	"lucide-repeat": "repeat",
	"lucide-repeat-1": "repeat-1",
	"lucide-repeat-2": "repeat-2",
	"lucide-repeat-off": "repeat-off",
	"lucide-replace": "replace",
	"lucide-replace-all": "replace-all",
	"lucide-reply": "reply",
	"lucide-reply-all": "reply-all",
	"lucide-rewind": "rewind",
	"lucide-ribbon": "ribbon",
	"lucide-road": "road",
	"lucide-robot-arm": "robot-arm",
	"lucide-robot-vacuum": "robot-vacuum",
	"lucide-rocket": "rocket",
	"lucide-rocking-chair": "rocking-chair",
	"lucide-roller-coaster": "roller-coaster",
	"lucide-rose": "rose",
	"lucide-rotate-3d": "rotate-3d",
	"lucide-rotate-ccw": "rotate-ccw",
	"lucide-rotate-ccw-clock": "history",
	"lucide-rotate-ccw-key": "rotate-ccw-key",
	"lucide-rotate-ccw-square": "rotate-ccw-square",
	"lucide-rotate-cw": "rotate-cw",
	"lucide-rotate-cw-clock": "rotate-cw-clock",
	"lucide-rotate-cw-fading-clock": "rotate-cw-fading-clock",
	"lucide-rotate-cw-square": "rotate-cw-square",
	"lucide-route": "route",
	"lucide-route-off": "route-off",
	"lucide-router": "router",
	"lucide-rows": "rows-2",
	"lucide-rows-2": "rows-2",
	"lucide-rows-3": "rows-3",
	"lucide-rows-4": "rows-4",
	"lucide-rss": "rss",
	"lucide-rugby-ball": "rugby-ball",
	"lucide-ruler": "ruler",
	"lucide-ruler-dimension-line": "ruler-dimension-line",
	"lucide-russian-ruble": "russian-ruble",
	"lucide-sailboat": "sailboat",
	"lucide-salad": "salad",
	"lucide-sandwich": "sandwich",
	"lucide-satellite": "satellite",
	"lucide-satellite-dish": "satellite-dish",
	"lucide-saudi-riyal": "saudi-riyal",
	"lucide-save": "save",
	"lucide-save-all": "save-all",
	"lucide-save-check": "save-check",
	"lucide-save-off": "save-off",
	"lucide-save-pen": "save-pen",
	"lucide-save-plus": "save-plus",
	"lucide-scale": "scale",
	"lucide-scale-3d": "scale-3d",
	"lucide-scaling": "scaling",
	"lucide-scan": "scan",
	"lucide-scan-barcode": "scan-barcode",
	"lucide-scan-box": "scan-box",
	"lucide-scan-eye": "scan-eye",
	"lucide-scan-face": "scan-face",
	"lucide-scan-heart": "scan-heart",
	"lucide-scan-line": "scan-line",
	"lucide-scan-qr-code": "scan-qr-code",
	"lucide-scan-search": "scan-search",
	"lucide-scan-square": "scan-square",
	"lucide-scan-text": "scan-text",
	"lucide-scatter-chart": "chart-scatter",
	"lucide-school": "school",
	"lucide-school-2": "university",
	"lucide-scissors": "scissors",
	"lucide-scissors-line-dashed": "scissors-line-dashed",
	"lucide-scissors-square": "square-scissors",
	"lucide-scissors-square-dashed-bottom": "square-bottom-dashed-scissors",
	"lucide-scooter": "scooter",
	"lucide-scratch-blocks": "scratch-blocks",
	"lucide-screen-share": "screen-share",
	"lucide-screen-share-off": "screen-share-off",
	"lucide-screw": "screw",
	"lucide-scroll": "scroll",
	"lucide-scroll-text": "scroll-text",
	"lucide-search": "search",
	"lucide-search-alert": "search-alert",
	"lucide-search-check": "search-check",
	"lucide-search-code": "search-code",
	"lucide-search-slash": "search-slash",
	"lucide-search-x": "search-x",
	"lucide-section": "section",
	"lucide-send": "send",
	"lucide-send-horizonal": "send-horizontal",
	"lucide-send-horizontal": "send-horizontal",
	"lucide-send-to-back": "send-to-back",
	"lucide-separator-horizontal": "separator-horizontal",
	"lucide-separator-vertical": "separator-vertical",
	"lucide-server": "server",
	"lucide-server-cog": "server-cog",
	"lucide-server-crash": "server-crash",
	"lucide-server-off": "server-off",
	"lucide-server-plus": "server-plus",
	"lucide-settings": "settings",
	"lucide-settings-2": "settings-2",
	"lucide-shapes": "shapes",
	"lucide-share": "share",
	"lucide-share-2": "share-2",
	"lucide-sheet": "sheet",
	"lucide-shell": "shell",
	"lucide-shelving-unit": "shelving-unit",
	"lucide-shield": "shield",
	"lucide-shield-alert": "shield-alert",
	"lucide-shield-ban": "shield-ban",
	"lucide-shield-check": "shield-check",
	"lucide-shield-close": "shield-x",
	"lucide-shield-cog": "shield-cog",
	"lucide-shield-cog-corner": "shield-cog-corner",
	"lucide-shield-ellipsis": "shield-ellipsis",
	"lucide-shield-half": "shield-half",
	"lucide-shield-house": "shield-house",
	"lucide-shield-keyhole": "shield-keyhole",
	"lucide-shield-lock": "shield-lock",
	"lucide-shield-minus": "shield-minus",
	"lucide-shield-off": "shield-off",
	"lucide-shield-plus": "shield-plus",
	"lucide-shield-question": "shield-question-mark",
	"lucide-shield-question-mark": "shield-question-mark",
	"lucide-shield-user": "shield-user",
	"lucide-shield-x": "shield-x",
	"lucide-ship": "ship",
	"lucide-ship-cargo": "ship-cargo",
	"lucide-ship-wheel": "ship-wheel",
	"lucide-shirt": "shirt",
	"lucide-shopping-bag": "shopping-bag",
	"lucide-shopping-basket": "shopping-basket",
	"lucide-shopping-cart": "shopping-cart",
	"lucide-shopping-cart-minus": "shopping-cart-minus",
	"lucide-shopping-cart-plus": "shopping-cart-plus",
	"lucide-shovel": "shovel",
	"lucide-shower-head": "shower-head",
	"lucide-shredder": "shredder",
	"lucide-shrimp": "shrimp",
	"lucide-shrimp-off": "shrimp-off",
	"lucide-shrink": "shrink",
	"lucide-shrub": "shrub",
	"lucide-shuffle": "shuffle",
	"lucide-sidebar": "panel-left",
	"lucide-sidebar-close": "panel-left-close",
	"lucide-sidebar-open": "panel-left-open",
	"lucide-sigma": "sigma",
	"lucide-sigma-square": "square-sigma",
	"lucide-signal": "signal",
	"lucide-signal-high": "signal-high",
	"lucide-signal-low": "signal-low",
	"lucide-signal-medium": "signal-medium",
	"lucide-signal-zero": "signal-zero",
	"lucide-signature": "signature",
	"lucide-signpost": "signpost",
	"lucide-signpost-big": "signpost-big",
	"lucide-siren": "siren",
	"lucide-skip-back": "skip-back",
	"lucide-skip-forward": "skip-forward",
	"lucide-skull": "skull",
	"lucide-slash": "slash",
	"lucide-slash-square": "square-slash",
	"lucide-slice": "slice",
	"lucide-sliders": "sliders-vertical",
	"lucide-sliders-horizontal": "sliders-horizontal",
	"lucide-sliders-vertical": "sliders-vertical",
	"lucide-smartphone": "smartphone",
	"lucide-smartphone-charging": "smartphone-charging",
	"lucide-smartphone-nfc": "smartphone-nfc",
	"lucide-smile": "smile",
	"lucide-smile-plus": "smile-plus",
	"lucide-snail": "snail",
	"lucide-snowflake": "snowflake",
	"lucide-soap-dispenser-droplet": "soap-dispenser-droplet",
	"lucide-sofa": "sofa",
	"lucide-solar-panel": "solar-panel",
	"lucide-sort-asc": "arrow-up-narrow-wide",
	"lucide-sort-desc": "arrow-down-wide-narrow",
	"lucide-soup": "soup",
	"lucide-space": "space",
	"lucide-spade": "spade",
	"lucide-sparkle": "sparkle",
	"lucide-sparkles": "sparkles",
	"lucide-speaker": "speaker",
	"lucide-speech": "speech",
	"lucide-spell-check": "spell-check",
	"lucide-spell-check-2": "spell-check-2",
	"lucide-spline": "spline",
	"lucide-spline-pointer": "spline-pointer",
	"lucide-split": "split",
	"lucide-split-square-horizontal": "square-split-horizontal",
	"lucide-split-square-vertical": "square-split-vertical",
	"lucide-spool": "spool",
	"lucide-sport-shoe": "sport-shoe",
	"lucide-spotlight": "spotlight",
	"lucide-spray-can": "spray-can",
	"lucide-sprout": "sprout",
	"lucide-square": "square",
	"lucide-square-activity": "square-activity",
	"lucide-square-arrow-down": "square-arrow-down",
	"lucide-square-arrow-down-left": "square-arrow-down-left",
	"lucide-square-arrow-down-right": "square-arrow-down-right",
	"lucide-square-arrow-left": "square-arrow-left",
	"lucide-square-arrow-out-down-left": "square-arrow-out-down-left",
	"lucide-square-arrow-out-down-right": "square-arrow-out-down-right",
	"lucide-square-arrow-out-up-left": "square-arrow-out-up-left",
	"lucide-square-arrow-out-up-right": "square-arrow-out-up-right",
	"lucide-square-arrow-right": "square-arrow-right",
	"lucide-square-arrow-right-enter": "square-arrow-right-enter",
	"lucide-square-arrow-right-exit": "square-arrow-right-exit",
	"lucide-square-arrow-up": "square-arrow-up",
	"lucide-square-arrow-up-left": "square-arrow-up-left",
	"lucide-square-arrow-up-right": "square-arrow-up-right",
	"lucide-square-asterisk": "square-asterisk",
	"lucide-square-bookmark": "square-bookmark",
	"lucide-square-bottom-dashed-scissors": "square-bottom-dashed-scissors",
	"lucide-square-centerline-dashed-horizontal": "square-centerline-dashed-horizontal",
	"lucide-square-centerline-dashed-vertical": "square-centerline-dashed-vertical",
	"lucide-square-chart-gantt": "square-chart-gantt",
	"lucide-square-check": "square-check",
	"lucide-square-check-big": "square-check-big",
	"lucide-square-chevron-down": "square-chevron-down",
	"lucide-square-chevron-left": "square-chevron-left",
	"lucide-square-chevron-right": "square-chevron-right",
	"lucide-square-chevron-up": "square-chevron-up",
	"lucide-square-code": "square-code",
	"lucide-square-dashed": "square-dashed",
	"lucide-square-dashed-bottom": "square-dashed-bottom",
	"lucide-square-dashed-bottom-code": "square-dashed-bottom-code",
	"lucide-square-dashed-kanban": "square-dashed-kanban",
	"lucide-square-dashed-mouse-pointer": "square-dashed-mouse-pointer",
	"lucide-square-dashed-plus": "square-dashed-plus",
	"lucide-square-dashed-text": "square-dashed-text",
	"lucide-square-dashed-top-solid": "square-dashed-top-solid",
	"lucide-square-dashed-x": "square-dashed-x",
	"lucide-square-dashed-x-corner": "square-dashed-x-corner",
	"lucide-square-dimensions": "square-dimensions",
	"lucide-square-divide": "square-divide",
	"lucide-square-dot": "square-dot",
	"lucide-square-equal": "square-equal",
	"lucide-square-exclamation-point": "square-exclamation-point",
	"lucide-square-function": "square-function",
	"lucide-square-gantt-chart": "square-chart-gantt",
	"lucide-square-kanban": "square-kanban",
	"lucide-square-library": "square-library",
	"lucide-square-m": "square-m",
	"lucide-square-menu": "square-menu",
	"lucide-square-minus": "square-minus",
	"lucide-square-mouse-pointer": "square-mouse-pointer",
	"lucide-square-off": "square-off",
	"lucide-square-parking": "square-parking",
	"lucide-square-parking-off": "square-parking-off",
	"lucide-square-pause": "square-pause",
	"lucide-square-pen": "square-pen",
	"lucide-square-percent": "square-percent",
	"lucide-square-pi": "square-pi",
	"lucide-square-pilcrow": "square-pilcrow",
	"lucide-square-play": "square-play",
	"lucide-square-plus": "square-plus",
	"lucide-square-power": "square-power",
	"lucide-square-radical": "square-radical",
	"lucide-square-round-corner": "square-round-corner",
	"lucide-square-scissors": "square-scissors",
	"lucide-squares-exclude": "squares-exclude",
	"lucide-square-sigma": "square-sigma",
	"lucide-squares-intersect": "squares-intersect",
	"lucide-square-slash": "square-slash",
	"lucide-square-sparkles": "square-sparkles",
	"lucide-square-split-horizontal": "square-split-horizontal",
	"lucide-square-split-vertical": "square-split-vertical",
	"lucide-square-square": "square-square",
	"lucide-squares-subtract": "squares-subtract",
	"lucide-square-stack": "square-stack",
	"lucide-square-star": "square-star",
	"lucide-square-stop": "square-stop",
	"lucide-squares-unite": "squares-unite",
	"lucide-square-terminal": "square-terminal",
	"lucide-square-text": "square-text",
	"lucide-square-user": "square-user",
	"lucide-square-user-round": "square-user-round",
	"lucide-square-x": "square-x",
	"lucide-squircle": "squircle",
	"lucide-squircle-dashed": "squircle-dashed",
	"lucide-squirrel": "squirrel",
	"lucide-stamp": "stamp",
	"lucide-star": "star",
	"lucide-star-check": "star-check",
	"lucide-star-half": "star-half",
	"lucide-star-minus": "star-minus",
	"lucide-star-off": "star-off",
	"lucide-star-plus": "star-plus",
	"lucide-stars": "sparkles",
	"lucide-star-x": "star-x",
	"lucide-step-back": "step-back",
	"lucide-step-forward": "step-forward",
	"lucide-stethoscope": "stethoscope",
	"lucide-sticker": "sticker",
	"lucide-sticky-note": "sticky-note",
	"lucide-sticky-note-check": "sticky-note-check",
	"lucide-sticky-note-minus": "sticky-note-minus",
	"lucide-sticky-note-off": "sticky-note-off",
	"lucide-sticky-note-plus": "sticky-note-plus",
	"lucide-sticky-notes": "sticky-notes",
	"lucide-sticky-note-x": "sticky-note-x",
	"lucide-stone": "stone",
	"lucide-stop-circle": "circle-stop",
	"lucide-store": "store",
	"lucide-stretch-horizontal": "stretch-horizontal",
	"lucide-stretch-vertical": "stretch-vertical",
	"lucide-strikethrough": "strikethrough",
	"lucide-subscript": "subscript",
	"lucide-subtitles": "captions",
	"lucide-summary": "summary",
	"lucide-sun": "sun",
	"lucide-sun-dim": "sun-dim",
	"lucide-sun-medium": "sun-medium",
	"lucide-sun-moon": "sun-moon",
	"lucide-sunrise": "sunrise",
	"lucide-sunset": "sunset",
	"lucide-sun-snow": "sun-snow",
	"lucide-superscript": "superscript",
	"lucide-swatch-book": "swatch-book",
	"lucide-swiss-franc": "swiss-franc",
	"lucide-switch-camera": "switch-camera",
	"lucide-sword": "sword",
	"lucide-swords": "swords",
	"lucide-syringe": "syringe",
	"lucide-table": "table",
	"lucide-table-2": "table-2",
	"lucide-table-cells-merge": "table-cells-merge",
	"lucide-table-cells-split": "table-cells-split",
	"lucide-table-columns-split": "table-columns-split",
	"lucide-table-config": "columns-3-cog",
	"lucide-table-of-contents": "table-of-contents",
	"lucide-table-properties": "table-properties",
	"lucide-table-rows-split": "table-rows-split",
	"lucide-tablet": "tablet",
	"lucide-tablets": "tablets",
	"lucide-tablet-smartphone": "tablet-smartphone",
	"lucide-tag": "tag",
	"lucide-tag-plus": "tag-plus",
	"lucide-tags": "tags",
	"lucide-tag-x": "tag-x",
	"lucide-tally-1": "tally-1",
	"lucide-tally-2": "tally-2",
	"lucide-tally-3": "tally-3",
	"lucide-tally-4": "tally-4",
	"lucide-tally-5": "tally-5",
	"lucide-tangent": "tangent",
	"lucide-target": "target",
	"lucide-telescope": "telescope",
	"lucide-tent": "tent",
	"lucide-tent-tree": "tent-tree",
	"lucide-terminal": "terminal",
	"lucide-terminal-square": "square-terminal",
	"lucide-test-tube": "test-tube",
	"lucide-test-tube-2": "test-tube-diagonal",
	"lucide-test-tube-diagonal": "test-tube-diagonal",
	"lucide-test-tubes": "test-tubes",
	"lucide-text": "align-left",
	"lucide-text-align-center": "align-center",
	"lucide-text-align-end": "align-right",
	"lucide-text-align-justify": "text-align-justify",
	"lucide-text-align-justify-center": "text-align-justify-center",
	"lucide-text-align-justify-end": "text-align-justify-end",
	"lucide-text-align-justify-start": "text-align-justify-start",
	"lucide-text-align-start": "align-left",
	"lucide-text-cursor": "text-cursor",
	"lucide-text-cursor-input": "text-cursor-input",
	"lucide-text-initial": "text-initial",
	"lucide-text-quote": "text-quote",
	"lucide-text-search": "text-search",
	"lucide-text-select": "square-dashed-text",
	"lucide-text-selection": "square-dashed-text",
	"lucide-text-wrap": "text-wrap",
	"lucide-theater": "theater",
	"lucide-thermometer": "thermometer",
	"lucide-thermometer-snowflake": "thermometer-snowflake",
	"lucide-thermometer-sun": "thermometer-sun",
	"lucide-thumbs-down": "thumbs-down",
	"lucide-thumbs-up": "thumbs-up",
	"lucide-ticket": "ticket",
	"lucide-ticket-check": "ticket-check",
	"lucide-ticket-minus": "ticket-minus",
	"lucide-ticket-percent": "ticket-percent",
	"lucide-ticket-plus": "ticket-plus",
	"lucide-tickets": "tickets",
	"lucide-ticket-slash": "ticket-slash",
	"lucide-tickets-plane": "tickets-plane",
	"lucide-ticket-x": "ticket-x",
	"lucide-tic-tac-toe": "tic-tac-toe",
	"lucide-timeline": "timeline",
	"lucide-timer": "timer",
	"lucide-timer-off": "timer-off",
	"lucide-timer-reset": "timer-reset",
	"lucide-toggle-left": "toggle-left",
	"lucide-toggle-right": "toggle-right",
	"lucide-toilet": "toilet",
	"lucide-toolbox": "toolbox",
	"lucide-tool-case": "tool-case",
	"lucide-toothbrush": "toothbrush",
	"lucide-toothbrush-sparkles": "toothbrush-sparkles",
	"lucide-tornado": "tornado",
	"lucide-torus": "torus",
	"lucide-touchpad": "touchpad",
	"lucide-touchpad-off": "touchpad-off",
	"lucide-towel-rack": "towel-rack",
	"lucide-tower-control": "tower-control",
	"lucide-toy-brick": "toy-brick",
	"lucide-tractor": "tractor",
	"lucide-traffic-cone": "traffic-cone",
	"lucide-trailer": "trailer",
	"lucide-train": "tram-front",
	"lucide-train-front": "train-front",
	"lucide-train-front-tunnel": "train-front-tunnel",
	"lucide-train-track": "train-track",
	"lucide-tram-front": "tram-front",
	"lucide-transgender": "transgender",
	"lucide-trash": "trash-2",
	"lucide-trash-2": "trash-2",
	"lucide-trash-off": "trash-off",
	"lucide-tree-deciduous": "tree-deciduous",
	"lucide-tree-palm": "tree-palm",
	"lucide-tree-pine": "tree-pine",
	"lucide-trees": "trees",
	"lucide-trending-down": "trending-down",
	"lucide-trending-up": "trending-up",
	"lucide-trending-up-down": "trending-up-down",
	"lucide-triangle": "triangle",
	"lucide-triangle-alert": "triangle-alert",
	"lucide-triangle-dashed": "triangle-dashed",
	"lucide-triangle-right": "triangle-right",
	"lucide-triangles-centerline-dashed-horizontal": "triangles-centerline-dashed-horizontal",
	"lucide-triangles-centerline-dashed-vertical": "triangles-centerline-dashed-vertical",
	"lucide-trophy": "trophy",
	"lucide-truck": "truck",
	"lucide-truck-electric": "truck-electric",
	"lucide-tube-lotion": "tube-lotion",
	"lucide-turkish-lira": "turkish-lira",
	"lucide-turntable": "turntable",
	"lucide-turtle": "turtle",
	"lucide-tv": "tv",
	"lucide-tv-2": "tv-minimal",
	"lucide-tv-minimal": "tv-minimal",
	"lucide-tv-minimal-play": "tv-minimal-play",
	"lucide-type": "type",
	"lucide-type-outline": "type-outline",
	"lucide-umbrella": "umbrella",
	"lucide-umbrella-off": "umbrella-off",
	"lucide-underline": "underline",
	"lucide-undo": "undo",
	"lucide-undo-2": "undo-2",
	"lucide-undo-dot": "undo-dot",
	"lucide-unfold-horizontal": "unfold-horizontal",
	"lucide-unfold-vertical": "unfold-vertical",
	"lucide-ungroup": "ungroup",
	"lucide-university": "university",
	"lucide-unlink": "unlink",
	"lucide-unlink-2": "unlink-2",
	"lucide-unlock": "lock-open",
	"lucide-unlock-keyhole": "lock-keyhole-open",
	"lucide-unplug": "unplug",
	"lucide-upload": "upload",
	"lucide-upload-cloud": "cloud-upload",
	"lucide-usb": "usb",
	"lucide-usb-c-port": "usb-c-port",
	"lucide-user": "user",
	"lucide-user-2": "user-round",
	"lucide-user-check": "user-check",
	"lucide-user-check-2": "user-round-check",
	"lucide-user-circle": "circle-user",
	"lucide-user-circle-2": "circle-user-round",
	"lucide-user-cog": "user-cog",
	"lucide-user-cog-2": "user-round-cog",
	"lucide-user-group": "user-group",
	"lucide-user-key": "user-key",
	"lucide-user-lock": "user-lock",
	"lucide-user-minus": "user-minus",
	"lucide-user-minus-2": "user-round-minus",
	"lucide-user-pen": "user-pen",
	"lucide-user-plus": "user-plus",
	"lucide-user-plus-2": "user-round-plus",
	"lucide-user-round": "user-round",
	"lucide-user-round-arrow-left": "user-round-arrow-left",
	"lucide-user-round-check": "user-round-check",
	"lucide-user-round-cog": "user-round-cog",
	"lucide-user-round-group": "user-round-group",
	"lucide-user-round-key": "user-round-key",
	"lucide-user-round-minus": "user-round-minus",
	"lucide-user-round-pen": "user-round-pen",
	"lucide-user-round-plus": "user-round-plus",
	"lucide-user-round-search": "user-round-search",
	"lucide-user-round-star": "user-round-star",
	"lucide-user-round-x": "user-round-x",
	"lucide-users": "users",
	"lucide-users-2": "users-round",
	"lucide-user-search": "user-search",
	"lucide-user-shield": "user-shield",
	"lucide-user-square": "square-user",
	"lucide-user-square-2": "square-user-round",
	"lucide-users-round": "users-round",
	"lucide-user-star": "user-star",
	"lucide-user-x": "user-x",
	"lucide-user-x2": "user-round-x",
	"lucide-utensils": "utensils",
	"lucide-utensils-crossed": "utensils-crossed",
	"lucide-utility-pole": "utility-pole",
	"lucide-van": "van",
	"lucide-variable": "variable",
	"lucide-vault": "vault",
	"lucide-vector-polygon": "vector-polygon",
	"lucide-vector-square": "vector-square",
	"lucide-vegan": "vegan",
	"lucide-venetian-mask": "venetian-mask",
	"lucide-venus": "venus",
	"lucide-venus-and-mars": "venus-and-mars",
	"lucide-verified": "badge-check",
	"lucide-vibrate": "vibrate",
	"lucide-vibrate-off": "vibrate-off",
	"lucide-video": "video",
	"lucide-video-off": "video-off",
	"lucide-videotape": "videotape",
	"lucide-view": "view",
	"lucide-virus": "virus",
	"lucide-virus-off": "virus-off",
	"lucide-voicemail": "voicemail",
	"lucide-volleyball": "volleyball",
	"lucide-volume": "volume",
	"lucide-volume-1": "volume-1",
	"lucide-volume-2": "volume-2",
	"lucide-volume-off": "volume-off",
	"lucide-volume-x": "volume-x",
	"lucide-vote": "vote",
	"lucide-wallet": "wallet",
	"lucide-wallet-2": "wallet-minimal",
	"lucide-wallet-cards": "wallet-cards",
	"lucide-wallet-minimal": "wallet-minimal",
	"lucide-wallpaper": "wallpaper",
	"lucide-wand": "wand",
	"lucide-wand-2": "wand-sparkles",
	"lucide-wand-sparkles": "wand-sparkles",
	"lucide-warehouse": "warehouse",
	"lucide-washing-machine": "washing-machine",
	"lucide-watch": "watch",
	"lucide-waves": "waves",
	"lucide-waves-arrow-down": "waves-arrow-down",
	"lucide-waves-arrow-up": "waves-arrow-up",
	"lucide-waves-horizontal": "waves",
	"lucide-waves-ladder": "waves-ladder",
	"lucide-waves-vertical": "waves-vertical",
	"lucide-waypoints": "waypoints",
	"lucide-webcam": "webcam",
	"lucide-webcam-off": "webcam-off",
	"lucide-webhook": "webhook",
	"lucide-webhook-off": "webhook-off",
	"lucide-weight": "weight",
	"lucide-weight-tilde": "weight-tilde",
	"lucide-wheat": "wheat",
	"lucide-wheat-off": "wheat-off",
	"lucide-whistle": "whistle",
	"lucide-whole-word": "whole-word",
	"lucide-wifi": "wifi",
	"lucide-wifi-cog": "wifi-cog",
	"lucide-wifi-high": "wifi-high",
	"lucide-wifi-lock": "wifi-lock",
	"lucide-wifi-low": "wifi-low",
	"lucide-wifi-off": "wifi-off",
	"lucide-wifi-pen": "wifi-pen",
	"lucide-wifi-sync": "wifi-sync",
	"lucide-wifi-zero": "wifi-zero",
	"lucide-wind": "wind",
	"lucide-wind-arrow-down": "wind-arrow-down",
	"lucide-wind-arrow-up": "wind-arrow-up",
	"lucide-wine": "wine",
	"lucide-wine-off": "wine-off",
	"lucide-workflow": "workflow",
	"lucide-worm": "worm",
	"lucide-wrap-text": "text-wrap",
	"lucide-wrench": "wrench",
	"lucide-wrench-off": "wrench-off",
	"lucide-x": "x",
	"lucide-x-circle": "circle-x",
	"lucide-x-line-top": "x-line-top",
	"lucide-x-octagon": "octagon-x",
	"lucide-x-square": "square-x",
	"lucide-zap": "zap",
	"lucide-zap-off": "zap-off",
	"lucide-zodiac-aquarius": "zodiac-aquarius",
	"lucide-zodiac-aries": "zodiac-aries",
	"lucide-zodiac-cancer": "zodiac-cancer",
	"lucide-zodiac-capricorn": "zodiac-capricorn",
	"lucide-zodiac-gemini": "zodiac-gemini",
	"lucide-zodiac-leo": "zodiac-leo",
	"lucide-zodiac-libra": "zodiac-libra",
	"lucide-zodiac-ophiuchus": "zodiac-ophiuchus",
	"lucide-zodiac-pisces": "zodiac-pisces",
	"lucide-zodiac-sagittarius": "zodiac-sagittarius",
	"lucide-zodiac-scorpio": "zodiac-scorpio",
	"lucide-zodiac-taurus": "zodiac-taurus",
	"lucide-zodiac-virgo": "zodiac-virgo",
	"lucide-zoom-in": "zoom-in",
	"lucide-zoom-out": "zoom-out",
	"luggage-icon": "luggage",
	"magnet-icon": "magnet",
	"mail-badge-icon": "mail-badge",
	"mailbox-icon": "mailbox",
	"mail-check-icon": "mail-check",
	"mail-clock-icon": "mail-clock",
	"mail-dot-icon": "mail-dot",
	"mail-icon": "mail",
	"mail-minus-icon": "mail-minus",
	"mail-open-icon": "mail-open",
	"mail-pen-icon": "mail-pen",
	"mail-plus-icon": "mail-plus",
	"mail-question": "mail-question-mark",
	"mail-question-icon": "mail-question-mark",
	"mail-question-mark-icon": "mail-question-mark",
	"mail-search-icon": "mail-search",
	"mails-icon": "mails",
	"mail-warning-icon": "mail-warning",
	"mail-x-icon": "mail-x",
	"map-icon": "map",
	"map-minus-icon": "map-minus",
	"map-pin-check-icon": "map-pin-check",
	"map-pin-check-inside-icon": "map-pin-check-inside",
	"map-pin-house-icon": "map-pin-house",
	"map-pin-icon": "map-pin",
	"map-pin-minus-icon": "map-pin-minus",
	"map-pin-minus-inside-icon": "map-pin-minus-inside",
	"map-pinned-icon": "map-pinned",
	"map-pin-off-icon": "map-pin-off",
	"map-pin-pen-icon": "map-pin-pen",
	"map-pin-plus-icon": "map-pin-plus",
	"map-pin-plus-inside-icon": "map-pin-plus-inside",
	"map-pin-search-icon": "map-pin-search",
	"map-pin-x-icon": "map-pin-x",
	"map-pin-x-inside-icon": "map-pin-x-inside",
	"map-plus-icon": "map-plus",
	"mars-icon": "mars",
	"mars-stroke-icon": "mars-stroke",
	"martini-icon": "martini",
	"maximize-2-icon": "maximize-2",
	"maximize-icon": "maximize",
	"medal-icon": "medal",
	"megaphone-icon": "megaphone",
	"megaphone-off-icon": "megaphone-off",
	"meh-icon": "meh",
	"memory-stick-icon": "memory-stick",
	"menu-icon": "menu",
	"menu-square": "square-menu",
	"menu-square-icon": "square-menu",
	"merge-icon": "merge",
	"message-circle-check-icon": "message-circle-check",
	"message-circle-code-icon": "message-circle-code",
	"message-circle-dashed-check-icon": "message-circle-dashed-check",
	"message-circle-dashed-icon": "message-circle-dashed",
	"message-circle-heart-icon": "message-circle-heart",
	"message-circle-icon": "message-circle",
	"message-circle-more-icon": "message-circle-more",
	"message-circle-off-icon": "message-circle-off",
	"message-circle-plus-icon": "message-circle-plus",
	"message-circle-question-icon": "message-circle-question",
	"message-circle-question-mark": "message-circle-question",
	"message-circle-question-mark-icon": "message-circle-question",
	"message-circle-reply-icon": "message-circle-reply",
	"message-circle-warning-icon": "message-circle-warning",
	"message-circle-x-icon": "message-circle-x",
	"messages-circle-icon": "messages-circle",
	"message-square-check-icon": "message-square-check",
	"message-square-code-icon": "message-square-code",
	"message-square-dashed-icon": "message-square-dashed",
	"message-square-diff-icon": "message-square-diff",
	"message-square-dot-icon": "message-square-dot",
	"message-square-heart-icon": "message-square-heart",
	"message-square-icon": "message-square",
	"message-square-lock-icon": "message-square-lock",
	"message-square-more-icon": "message-square-more",
	"message-square-off-icon": "message-square-off",
	"message-square-plus-icon": "message-square-plus",
	"message-square-quote-icon": "message-square-quote",
	"message-square-reply-icon": "message-square-reply",
	"message-square-share-icon": "message-square-share",
	"message-square-text-icon": "message-square-text",
	"message-square-warning-icon": "message-square-warning",
	"message-square-x-icon": "message-square-x",
	"messages-square-icon": "messages-square",
	"metronome-icon": "metronome",
	"mic-2": "mic-vocal",
	"mic-2-icon": "mic-vocal",
	"mic-audio-lines-icon": "mic-audio-lines",
	"mic-icon": "mic",
	"mic-off-icon": "mic-off",
	"microchip-icon": "microchip",
	"microscope-icon": "microscope",
	"microwave-icon": "microwave",
	"mic-signal-icon": "mic-signal",
	"mic-vocal-icon": "mic-vocal",
	"midi-port-icon": "midi-port",
	"milestone-icon": "milestone",
	"milk-icon": "milk",
	"milk-off-icon": "milk-off",
	"minimize-2-icon": "minimize-2",
	"minimize-icon": "minimize",
	"minus-circle": "circle-minus",
	"minus-circle-icon": "circle-minus",
	"minus-icon": "minus",
	"minus-square": "square-minus",
	"minus-square-icon": "square-minus",
	"mirror-rectangular-icon": "mirror-rectangular",
	"mirror-round-icon": "mirror-round",
	"monitor-check-icon": "monitor-check",
	"monitor-cloud-icon": "monitor-cloud",
	"monitor-cog-icon": "monitor-cog",
	"monitor-dot-icon": "monitor-dot",
	"monitor-down-icon": "monitor-down",
	"monitor-icon": "monitor",
	"monitor-off-icon": "monitor-off",
	"monitor-pause-icon": "monitor-pause",
	"monitor-pc-icon": "monitor-pc",
	"monitor-play-icon": "monitor-play",
	"monitor-smartphone-icon": "monitor-smartphone",
	"monitor-speaker-icon": "monitor-speaker",
	"monitor-stop-icon": "monitor-stop",
	"monitor-up-icon": "monitor-up",
	"monitor-x-icon": "monitor-x",
	"moon-icon": "moon",
	"moon-star-icon": "moon-star",
	"mop-icon": "mop",
	"mop-sparkles-icon": "mop-sparkles",
	"more-horizontal": "ellipsis",
	"more-horizontal-icon": "ellipsis",
	"more-vertical": "ellipsis-vertical",
	"more-vertical-icon": "ellipsis-vertical",
	"mosque-icon": "mosque",
	"motorbike-icon": "motorbike",
	"mountain-icon": "mountain",
	"mountain-snow-icon": "mountain-snow",
	"mouse-icon": "mouse",
	"mouse-left-icon": "mouse-left",
	"mouse-off-icon": "mouse-off",
	"mouse-pointer-2-icon": "mouse-pointer-2",
	"mouse-pointer-2-off-icon": "mouse-pointer-2-off",
	"mouse-pointer-ban-icon": "mouse-pointer-ban",
	"mouse-pointer-click-icon": "mouse-pointer-click",
	"mouse-pointer-icon": "mouse-pointer",
	"mouse-pointer-square-dashed": "square-dashed-mouse-pointer",
	"mouse-pointer-square-dashed-icon": "square-dashed-mouse-pointer",
	"mouse-right-icon": "mouse-right",
	"mouth-icon": "mouth",
	"mouth-off-icon": "mouth-off",
	"move-3-d-icon": "move-3d",
	"move-diagonal-2-icon": "move-diagonal-2",
	"move-diagonal-icon": "move-diagonal",
	"move-down-icon": "move-down",
	"move-down-left-icon": "move-down-left",
	"move-down-right-icon": "move-down-right",
	"move-horizontal-icon": "move-horizontal",
	"move-icon": "move",
	"move-left-icon": "move-left",
	"move-right-icon": "move-right",
	"move-up-icon": "move-up",
	"move-up-left-icon": "move-up-left",
	"move-up-right-icon": "move-up-right",
	"move-vertical-icon": "move-vertical",
	"m-square": "square-m",
	"m-square-icon": "square-m",
	"music-2-icon": "music-2",
	"music-3-icon": "music-3",
	"music-4-icon": "music-4",
	"music-icon": "music",
	"navigation-2-icon": "navigation-2",
	"navigation-2-off-icon": "navigation-2-off",
	"navigation-icon": "navigation",
	"navigation-off-icon": "navigation-off",
	"nepali-rupee-icon": "nepali-rupee",
	"network-icon": "network",
	"newspaper-icon": "newspaper",
	"nfc-icon": "nfc",
	"non-binary-icon": "non-binary",
	"notebook-dot-icon": "notebook-dot",
	"notebook-icon": "notebook",
	"notebook-pen-icon": "notebook-pen",
	"notebook-tabs-icon": "notebook-tabs",
	"notebook-text-icon": "notebook-text",
	"notepad-text-dashed-icon": "notepad-text-dashed",
	"notepad-text-icon": "notepad-text",
	"nut-icon": "nut",
	"nut-off-icon": "nut-off",
	"octagon-alert-icon": "octagon-alert",
	"octagon-icon": "octagon",
	"octagon-minus-icon": "octagon-minus",
	"octagon-pause-icon": "octagon-pause",
	"octagon-x-icon": "octagon-x",
	"omega-icon": "omega",
	"option-icon": "option",
	"orbit-icon": "orbit",
	"origami-icon": "origami",
	outdent: "list-indent-decrease",
	"outdent-icon": "list-indent-decrease",
	"package-2-icon": "package-2",
	"package-check-icon": "package-check",
	"package-icon": "package",
	"package-minus-icon": "package-minus",
	"package-open-icon": "package-open",
	"package-plus-icon": "package-plus",
	"package-search-icon": "package-search",
	"package-x-icon": "package-x",
	"paintbrush-2": "paintbrush-vertical",
	"paintbrush-2-icon": "paintbrush-vertical",
	"paintbrush-icon": "paintbrush",
	"paintbrush-vertical-icon": "paintbrush-vertical",
	"paint-bucket-icon": "paint-bucket",
	"paint-roller-icon": "paint-roller",
	"palette-icon": "palette",
	palmtree: "tree-palm",
	"palmtree-icon": "tree-palm",
	"panda-icon": "panda",
	"panel-bottom-close-icon": "panel-bottom-close",
	"panel-bottom-dashed-icon": "panel-bottom-dashed",
	"panel-bottom-icon": "panel-bottom",
	"panel-bottom-inactive": "panel-bottom-dashed",
	"panel-bottom-inactive-icon": "panel-bottom-dashed",
	"panel-bottom-open-icon": "panel-bottom-open",
	"panel-left-close-icon": "panel-left-close",
	"panel-left-dashed-icon": "panel-left-dashed",
	"panel-left-icon": "panel-left",
	"panel-left-inactive": "panel-left-dashed",
	"panel-left-inactive-icon": "panel-left-dashed",
	"panel-left-open-icon": "panel-left-open",
	"panel-left-right-dashed-icon": "panel-left-right-dashed",
	"panel-right-close-icon": "panel-right-close",
	"panel-right-dashed-icon": "panel-right-dashed",
	"panel-right-icon": "panel-right",
	"panel-right-inactive": "panel-right-dashed",
	"panel-right-inactive-icon": "panel-right-dashed",
	"panel-right-open-icon": "panel-right-open",
	"panels-left-bottom-icon": "panels-left-bottom",
	"panels-left-right": "columns-3",
	"panels-left-right-icon": "columns-3",
	"panels-right-bottom-icon": "panels-right-bottom",
	"panels-top-bottom": "rows-3",
	"panels-top-bottom-icon": "rows-3",
	"panels-top-left-icon": "panels-top-left",
	"panel-top-bottom-dashed-icon": "panel-top-bottom-dashed",
	"panel-top-close-icon": "panel-top-close",
	"panel-top-dashed-icon": "panel-top-dashed",
	"panel-top-icon": "panel-top",
	"panel-top-inactive": "panel-top-dashed",
	"panel-top-inactive-icon": "panel-top-dashed",
	"panel-top-open-icon": "panel-top-open",
	"paper-bag-icon": "paper-bag",
	"paperclip-icon": "paperclip",
	"parasol-icon": "parasol",
	"parentheses-icon": "parentheses",
	"park-icon": "park",
	"parking-circle": "circle-parking",
	"parking-circle-icon": "circle-parking",
	"parking-circle-off": "circle-parking-off",
	"parking-circle-off-icon": "circle-parking-off",
	"parking-meter-icon": "parking-meter",
	"parking-square": "square-parking",
	"parking-square-icon": "square-parking",
	"parking-square-off": "square-parking-off",
	"parking-square-off-icon": "square-parking-off",
	"party-popper-icon": "party-popper",
	"pause-circle": "circle-pause",
	"pause-circle-icon": "circle-pause",
	"pause-icon": "pause",
	"pause-octagon": "octagon-pause",
	"pause-octagon-icon": "octagon-pause",
	"paw-print-icon": "paw-print",
	"pc-case-icon": "pc-case",
	"pen-box": "square-pen",
	"pen-box-icon": "square-pen",
	"pencil-icon": "pencil",
	"pencil-line-icon": "pencil-line",
	"pencil-off-icon": "pencil-off",
	"pencil-ruler-icon": "pencil-ruler",
	"pencil-sparkles-icon": "pencil-sparkles",
	"pen-icon": "pen",
	"pen-line-icon": "pen-line",
	"pen-off-icon": "pen-off",
	"pen-square": "square-pen",
	"pen-square-icon": "square-pen",
	"pentagon-icon": "pentagon",
	"pen-tool-icon": "pen-tool",
	"percent-circle": "circle-percent",
	"percent-circle-icon": "circle-percent",
	"percent-diamond": "diamond-percent",
	"percent-diamond-icon": "diamond-percent",
	"percent-icon": "percent",
	"percent-square": "square-percent",
	"percent-square-icon": "square-percent",
	"person-standing-icon": "person-standing",
	"phi-icon": "phi",
	"philippine-peso-icon": "philippine-peso",
	"phone-call-icon": "phone-call",
	"phone-forwarded-icon": "phone-forwarded",
	"phone-icon": "phone",
	"phone-incoming-icon": "phone-incoming",
	"phone-log-icon": "phone-log",
	"phone-missed-icon": "phone-missed",
	"phone-off-icon": "phone-off",
	"phone-outgoing-icon": "phone-outgoing",
	"piano-icon": "piano",
	"pickaxe-icon": "pickaxe",
	"picture-in-picture-2-icon": "picture-in-picture-2",
	"picture-in-picture-icon": "picture-in-picture",
	"pie-chart": "chart-pie",
	"pie-chart-icon": "chart-pie",
	"piggy-bank-icon": "piggy-bank",
	"pi-icon": "pi",
	"pilcrow-icon": "pilcrow",
	"pilcrow-left-icon": "pilcrow-left",
	"pilcrow-right-icon": "pilcrow-right",
	"pilcrow-square": "square-pilcrow",
	"pilcrow-square-icon": "square-pilcrow",
	"pill-bottle-icon": "pill-bottle",
	"pill-icon": "pill",
	"pin-icon": "pin",
	"pin-off-icon": "pin-off",
	"pipette-icon": "pipette",
	"pi-square": "square-pi",
	"pi-square-icon": "square-pi",
	"pizza-icon": "pizza",
	"plane-icon": "plane",
	"plane-landing-icon": "plane-landing",
	"plane-takeoff-icon": "plane-takeoff",
	"plant-pot-icon": "plant-pot",
	"play-circle": "circle-play",
	"play-circle-icon": "circle-play",
	"play-icon": "play",
	"playing-card-icon": "playing-card",
	"playing-cards-fan-icon": "playing-cards-fan",
	"playing-cards-icon": "playing-cards",
	"play-off-icon": "play-off",
	"play-square": "square-play",
	"play-square-icon": "square-play",
	"plug-2-icon": "plug-2",
	"plug-icon": "plug",
	"plug-zap-2": "plug-zap",
	"plug-zap-2-icon": "plug-zap",
	"plug-zap-icon": "plug-zap",
	"plus-circle": "circle-plus",
	"plus-circle-icon": "circle-plus",
	"plus-icon": "plus",
	"plus-square": "square-plus",
	"plus-square-icon": "square-plus",
	"pocket-knife-icon": "pocket-knife",
	podcast: "mic-signal",
	"podcast-icon": "mic-signal",
	"podium-icon": "podium",
	"pointer-icon": "pointer",
	"pointer-off-icon": "pointer-off",
	"popcorn-icon": "popcorn",
	"popsicle-icon": "popsicle",
	"pound-sterling-icon": "pound-sterling",
	"power-circle": "circle-power",
	"power-circle-icon": "circle-power",
	"power-icon": "power",
	"power-off-icon": "power-off",
	"power-square": "square-power",
	"power-square-icon": "square-power",
	"presentation-icon": "presentation",
	"printer-3-d-icon": "printer-3d",
	"printer-check-icon": "printer-check",
	"printer-icon": "printer",
	"printer-x-icon": "printer-x",
	"projector-icon": "projector",
	"proportions-icon": "proportions",
	"puzzle-icon": "puzzle",
	"pyramid-icon": "pyramid",
	"qr-code-icon": "qr-code",
	"quote-icon": "quote",
	"rabbit-icon": "rabbit",
	"radar-icon": "radar",
	"radiation-icon": "radiation",
	"radical-icon": "radical",
	"radio-icon": "radio",
	"radio-off-icon": "radio-off",
	"radio-receiver-icon": "radio-receiver",
	"radio-tower-icon": "radio-tower",
	"radius-icon": "radius",
	"rainbow-icon": "rainbow",
	"rat-icon": "rat",
	"ratio-icon": "ratio",
	"receipt-cent-icon": "receipt-cent",
	"receipt-euro-icon": "receipt-euro",
	"receipt-icon": "receipt",
	"receipt-indian-rupee-icon": "receipt-indian-rupee",
	"receipt-japanese-yen-icon": "receipt-japanese-yen",
	"receipt-pound-sterling-icon": "receipt-pound-sterling",
	"receipt-russian-ruble-icon": "receipt-russian-ruble",
	"receipt-swiss-franc-icon": "receipt-swiss-franc",
	"receipt-text-icon": "receipt-text",
	"receipt-turkish-lira-icon": "receipt-turkish-lira",
	"rectangle-circle-icon": "rectangle-circle",
	"rectangle-ellipsis-icon": "rectangle-ellipsis",
	"rectangle-goggles-icon": "rectangle-goggles",
	"rectangle-horizontal-icon": "rectangle-horizontal",
	"rectangle-vertical-icon": "rectangle-vertical",
	"recycle-icon": "recycle",
	"redo-2-icon": "redo-2",
	"redo-dot-icon": "redo-dot",
	"redo-icon": "redo",
	"refresh-ccw-dot-icon": "refresh-ccw-dot",
	"refresh-ccw-icon": "refresh-ccw",
	"refresh-cw-icon": "refresh-cw",
	"refresh-cw-off-icon": "refresh-cw-off",
	"refrigerator-icon": "refrigerator",
	"regex-icon": "regex",
	"remove-formatting-icon": "remove-formatting",
	"repeat-1-icon": "repeat-1",
	"repeat-2-icon": "repeat-2",
	"repeat-icon": "repeat",
	"repeat-off-icon": "repeat-off",
	"replace-all-icon": "replace-all",
	"replace-icon": "replace",
	"reply-all-icon": "reply-all",
	"reply-icon": "reply",
	"rewind-icon": "rewind",
	"ribbon-icon": "ribbon",
	"road-icon": "road",
	"robot-arm-icon": "robot-arm",
	"robot-vacuum-icon": "robot-vacuum",
	"rocket-icon": "rocket",
	"rocking-chair-icon": "rocking-chair",
	"roller-coaster-icon": "roller-coaster",
	"rose-icon": "rose",
	"rotate-3-d-icon": "rotate-3d",
	"rotate-ccw-clock": "history",
	"rotate-ccw-clock-icon": "history",
	"rotate-ccw-icon": "rotate-ccw",
	"rotate-ccw-key-icon": "rotate-ccw-key",
	"rotate-ccw-square-icon": "rotate-ccw-square",
	"rotate-cw-clock-icon": "rotate-cw-clock",
	"rotate-cw-fading-clock-icon": "rotate-cw-fading-clock",
	"rotate-cw-icon": "rotate-cw",
	"rotate-cw-square-icon": "rotate-cw-square",
	"route-icon": "route",
	"route-off-icon": "route-off",
	"router-icon": "router",
	rows: "rows-2",
	"rows-2-icon": "rows-2",
	"rows-3-icon": "rows-3",
	"rows-4-icon": "rows-4",
	"rows-icon": "rows-2",
	"rss-icon": "rss",
	"rugby-ball-icon": "rugby-ball",
	"ruler-dimension-line-icon": "ruler-dimension-line",
	"ruler-icon": "ruler",
	"russian-ruble-icon": "russian-ruble",
	"sailboat-icon": "sailboat",
	"salad-icon": "salad",
	"sandwich-icon": "sandwich",
	"satellite-dish-icon": "satellite-dish",
	"satellite-icon": "satellite",
	"saudi-riyal-icon": "saudi-riyal",
	"save-all-icon": "save-all",
	"save-check-icon": "save-check",
	"save-icon": "save",
	"save-off-icon": "save-off",
	"save-pen-icon": "save-pen",
	"save-plus-icon": "save-plus",
	"scale-3-d-icon": "scale-3d",
	"scale-icon": "scale",
	"scaling-icon": "scaling",
	"scan-barcode-icon": "scan-barcode",
	"scan-box-icon": "scan-box",
	"scan-eye-icon": "scan-eye",
	"scan-face-icon": "scan-face",
	"scan-heart-icon": "scan-heart",
	"scan-icon": "scan",
	"scan-line-icon": "scan-line",
	"scan-qr-code-icon": "scan-qr-code",
	"scan-search-icon": "scan-search",
	"scan-square-icon": "scan-square",
	"scan-text-icon": "scan-text",
	"scatter-chart": "chart-scatter",
	"scatter-chart-icon": "chart-scatter",
	"school-2": "university",
	"school-2-icon": "university",
	"school-icon": "school",
	"scissors-icon": "scissors",
	"scissors-line-dashed-icon": "scissors-line-dashed",
	"scissors-square": "square-scissors",
	"scissors-square-dashed-bottom": "square-bottom-dashed-scissors",
	"scissors-square-dashed-bottom-icon": "square-bottom-dashed-scissors",
	"scissors-square-icon": "square-scissors",
	"scooter-icon": "scooter",
	"scratch-blocks-icon": "scratch-blocks",
	"screen-share-icon": "screen-share",
	"screen-share-off-icon": "screen-share-off",
	"screw-icon": "screw",
	"scroll-icon": "scroll",
	"scroll-text-icon": "scroll-text",
	"search-alert-icon": "search-alert",
	"search-check-icon": "search-check",
	"search-code-icon": "search-code",
	"search-icon": "search",
	"search-slash-icon": "search-slash",
	"search-x-icon": "search-x",
	"section-icon": "section",
	"send-horizonal": "send-horizontal",
	"send-horizonal-icon": "send-horizontal",
	"send-horizontal-icon": "send-horizontal",
	"send-icon": "send",
	"send-to-back-icon": "send-to-back",
	"separator-horizontal-icon": "separator-horizontal",
	"separator-vertical-icon": "separator-vertical",
	"server-cog-icon": "server-cog",
	"server-crash-icon": "server-crash",
	"server-icon": "server",
	"server-off-icon": "server-off",
	"server-plus-icon": "server-plus",
	"settings-2-icon": "settings-2",
	"settings-icon": "settings",
	"shapes-icon": "shapes",
	"share-2-icon": "share-2",
	"share-icon": "share",
	"sheet-icon": "sheet",
	"shell-icon": "shell",
	"shelving-unit-icon": "shelving-unit",
	"shield-alert-icon": "shield-alert",
	"shield-ban-icon": "shield-ban",
	"shield-check-icon": "shield-check",
	"shield-close": "shield-x",
	"shield-close-icon": "shield-x",
	"shield-cog-corner-icon": "shield-cog-corner",
	"shield-cog-icon": "shield-cog",
	"shield-ellipsis-icon": "shield-ellipsis",
	"shield-half-icon": "shield-half",
	"shield-house-icon": "shield-house",
	"shield-icon": "shield",
	"shield-keyhole-icon": "shield-keyhole",
	"shield-lock-icon": "shield-lock",
	"shield-minus-icon": "shield-minus",
	"shield-off-icon": "shield-off",
	"shield-plus-icon": "shield-plus",
	"shield-question": "shield-question-mark",
	"shield-question-icon": "shield-question-mark",
	"shield-question-mark-icon": "shield-question-mark",
	"shield-user-icon": "shield-user",
	"shield-x-icon": "shield-x",
	"ship-cargo-icon": "ship-cargo",
	"ship-icon": "ship",
	"ship-wheel-icon": "ship-wheel",
	"shirt-icon": "shirt",
	"shopping-bag-icon": "shopping-bag",
	"shopping-basket-icon": "shopping-basket",
	"shopping-cart-icon": "shopping-cart",
	"shopping-cart-minus-icon": "shopping-cart-minus",
	"shopping-cart-plus-icon": "shopping-cart-plus",
	"shovel-icon": "shovel",
	"shower-head-icon": "shower-head",
	"shredder-icon": "shredder",
	"shrimp-icon": "shrimp",
	"shrimp-off-icon": "shrimp-off",
	"shrink-icon": "shrink",
	"shrub-icon": "shrub",
	"shuffle-icon": "shuffle",
	sidebar: "panel-left",
	"sidebar-close": "panel-left-close",
	"sidebar-close-icon": "panel-left-close",
	"sidebar-icon": "panel-left",
	"sidebar-open": "panel-left-open",
	"sidebar-open-icon": "panel-left-open",
	"sigma-icon": "sigma",
	"sigma-square": "square-sigma",
	"sigma-square-icon": "square-sigma",
	"signal-high-icon": "signal-high",
	"signal-icon": "signal",
	"signal-low-icon": "signal-low",
	"signal-medium-icon": "signal-medium",
	"signal-zero-icon": "signal-zero",
	"signature-icon": "signature",
	"signpost-big-icon": "signpost-big",
	"signpost-icon": "signpost",
	"siren-icon": "siren",
	"skip-back-icon": "skip-back",
	"skip-forward-icon": "skip-forward",
	"skull-icon": "skull",
	"slash-icon": "slash",
	"slash-square": "square-slash",
	"slash-square-icon": "square-slash",
	"slice-icon": "slice",
	sliders: "sliders-vertical",
	"sliders-horizontal-icon": "sliders-horizontal",
	"sliders-icon": "sliders-vertical",
	"sliders-vertical-icon": "sliders-vertical",
	"smartphone-charging-icon": "smartphone-charging",
	"smartphone-icon": "smartphone",
	"smartphone-nfc-icon": "smartphone-nfc",
	"smile-icon": "smile",
	"smile-plus-icon": "smile-plus",
	"snail-icon": "snail",
	"snowflake-icon": "snowflake",
	"soap-dispenser-droplet-icon": "soap-dispenser-droplet",
	"sofa-icon": "sofa",
	"solar-panel-icon": "solar-panel",
	"sort-asc": "arrow-up-narrow-wide",
	"sort-asc-icon": "arrow-up-narrow-wide",
	"sort-desc": "arrow-down-wide-narrow",
	"sort-desc-icon": "arrow-down-wide-narrow",
	"soup-icon": "soup",
	"space-icon": "space",
	"spade-icon": "spade",
	"sparkle-icon": "sparkle",
	"sparkles-icon": "sparkles",
	"speaker-icon": "speaker",
	"speech-icon": "speech",
	"spell-check-2-icon": "spell-check-2",
	"spell-check-icon": "spell-check",
	"spline-icon": "spline",
	"spline-pointer-icon": "spline-pointer",
	"split-icon": "split",
	"split-square-horizontal": "square-split-horizontal",
	"split-square-horizontal-icon": "square-split-horizontal",
	"split-square-vertical": "square-split-vertical",
	"split-square-vertical-icon": "square-split-vertical",
	"spool-icon": "spool",
	"sport-shoe-icon": "sport-shoe",
	"spotlight-icon": "spotlight",
	"spray-can-icon": "spray-can",
	"sprout-icon": "sprout",
	"square-activity-icon": "square-activity",
	"square-arrow-down-icon": "square-arrow-down",
	"square-arrow-down-left-icon": "square-arrow-down-left",
	"square-arrow-down-right-icon": "square-arrow-down-right",
	"square-arrow-left-icon": "square-arrow-left",
	"square-arrow-out-down-left-icon": "square-arrow-out-down-left",
	"square-arrow-out-down-right-icon": "square-arrow-out-down-right",
	"square-arrow-out-up-left-icon": "square-arrow-out-up-left",
	"square-arrow-out-up-right-icon": "square-arrow-out-up-right",
	"square-arrow-right-enter-icon": "square-arrow-right-enter",
	"square-arrow-right-exit-icon": "square-arrow-right-exit",
	"square-arrow-right-icon": "square-arrow-right",
	"square-arrow-up-icon": "square-arrow-up",
	"square-arrow-up-left-icon": "square-arrow-up-left",
	"square-arrow-up-right-icon": "square-arrow-up-right",
	"square-asterisk-icon": "square-asterisk",
	"square-bookmark-icon": "square-bookmark",
	"square-bottom-dashed-scissors-icon": "square-bottom-dashed-scissors",
	"square-centerline-dashed-horizontal-icon": "square-centerline-dashed-horizontal",
	"square-centerline-dashed-vertical-icon": "square-centerline-dashed-vertical",
	"square-chart-gantt-icon": "square-chart-gantt",
	"square-check-big-icon": "square-check-big",
	"square-check-icon": "square-check",
	"square-chevron-down-icon": "square-chevron-down",
	"square-chevron-left-icon": "square-chevron-left",
	"square-chevron-right-icon": "square-chevron-right",
	"square-chevron-up-icon": "square-chevron-up",
	"square-code-icon": "square-code",
	"square-dashed-bottom-code-icon": "square-dashed-bottom-code",
	"square-dashed-bottom-icon": "square-dashed-bottom",
	"square-dashed-icon": "square-dashed",
	"square-dashed-kanban-icon": "square-dashed-kanban",
	"square-dashed-mouse-pointer-icon": "square-dashed-mouse-pointer",
	"square-dashed-plus-icon": "square-dashed-plus",
	"square-dashed-text-icon": "square-dashed-text",
	"square-dashed-top-solid-icon": "square-dashed-top-solid",
	"square-dashed-x-corner-icon": "square-dashed-x-corner",
	"square-dashed-x-icon": "square-dashed-x",
	"square-dimensions-icon": "square-dimensions",
	"square-divide-icon": "square-divide",
	"square-dot-icon": "square-dot",
	"square-equal-icon": "square-equal",
	"square-exclamation-point-icon": "square-exclamation-point",
	"square-function-icon": "square-function",
	"square-gantt-chart": "square-chart-gantt",
	"square-gantt-chart-icon": "square-chart-gantt",
	"square-icon": "square",
	"square-kanban-icon": "square-kanban",
	"square-library-icon": "square-library",
	"square-menu-icon": "square-menu",
	"square-m-icon": "square-m",
	"square-minus-icon": "square-minus",
	"square-mouse-pointer-icon": "square-mouse-pointer",
	"square-off-icon": "square-off",
	"square-parking-icon": "square-parking",
	"square-parking-off-icon": "square-parking-off",
	"square-pause-icon": "square-pause",
	"square-pen-icon": "square-pen",
	"square-percent-icon": "square-percent",
	"square-pi-icon": "square-pi",
	"square-pilcrow-icon": "square-pilcrow",
	"square-play-icon": "square-play",
	"square-plus-icon": "square-plus",
	"square-power-icon": "square-power",
	"square-radical-icon": "square-radical",
	"square-round-corner-icon": "square-round-corner",
	"square-scissors-icon": "square-scissors",
	"squares-exclude-icon": "squares-exclude",
	"square-sigma-icon": "square-sigma",
	"squares-intersect-icon": "squares-intersect",
	"square-slash-icon": "square-slash",
	"square-sparkles-icon": "square-sparkles",
	"square-split-horizontal-icon": "square-split-horizontal",
	"square-split-vertical-icon": "square-split-vertical",
	"square-square-icon": "square-square",
	"squares-subtract-icon": "squares-subtract",
	"square-stack-icon": "square-stack",
	"square-star-icon": "square-star",
	"square-stop-icon": "square-stop",
	"squares-unite-icon": "squares-unite",
	"square-terminal-icon": "square-terminal",
	"square-text-icon": "square-text",
	"square-user-icon": "square-user",
	"square-user-round-icon": "square-user-round",
	"square-x-icon": "square-x",
	"squircle-dashed-icon": "squircle-dashed",
	"squircle-icon": "squircle",
	"squirrel-icon": "squirrel",
	"stamp-icon": "stamp",
	"star-check-icon": "star-check",
	"star-half-icon": "star-half",
	"star-icon": "star",
	"star-minus-icon": "star-minus",
	"star-off-icon": "star-off",
	"star-plus-icon": "star-plus",
	stars: "sparkles",
	"stars-icon": "sparkles",
	"star-x-icon": "star-x",
	"step-back-icon": "step-back",
	"step-forward-icon": "step-forward",
	"stethoscope-icon": "stethoscope",
	"sticker-icon": "sticker",
	"sticky-note-check-icon": "sticky-note-check",
	"sticky-note-icon": "sticky-note",
	"sticky-note-minus-icon": "sticky-note-minus",
	"sticky-note-off-icon": "sticky-note-off",
	"sticky-note-plus-icon": "sticky-note-plus",
	"sticky-notes-icon": "sticky-notes",
	"sticky-note-x-icon": "sticky-note-x",
	"stone-icon": "stone",
	"stop-circle": "circle-stop",
	"stop-circle-icon": "circle-stop",
	"store-icon": "store",
	"stretch-horizontal-icon": "stretch-horizontal",
	"stretch-vertical-icon": "stretch-vertical",
	"strikethrough-icon": "strikethrough",
	"subscript-icon": "subscript",
	subtitles: "captions",
	"subtitles-icon": "captions",
	"summary-icon": "summary",
	"sun-dim-icon": "sun-dim",
	"sun-icon": "sun",
	"sun-medium-icon": "sun-medium",
	"sun-moon-icon": "sun-moon",
	"sunrise-icon": "sunrise",
	"sunset-icon": "sunset",
	"sun-snow-icon": "sun-snow",
	"superscript-icon": "superscript",
	"swatch-book-icon": "swatch-book",
	"swiss-franc-icon": "swiss-franc",
	"switch-camera-icon": "switch-camera",
	"sword-icon": "sword",
	"swords-icon": "swords",
	"syringe-icon": "syringe",
	"table-2-icon": "table-2",
	"table-cells-merge-icon": "table-cells-merge",
	"table-cells-split-icon": "table-cells-split",
	"table-columns-split-icon": "table-columns-split",
	"table-config": "columns-3-cog",
	"table-config-icon": "columns-3-cog",
	"table-icon": "table",
	"table-of-contents-icon": "table-of-contents",
	"table-properties-icon": "table-properties",
	"table-rows-split-icon": "table-rows-split",
	"tablet-icon": "tablet",
	"tablets-icon": "tablets",
	"tablet-smartphone-icon": "tablet-smartphone",
	"tag-icon": "tag",
	"tag-plus-icon": "tag-plus",
	"tags-icon": "tags",
	"tag-x-icon": "tag-x",
	"tally-1-icon": "tally-1",
	"tally-2-icon": "tally-2",
	"tally-3-icon": "tally-3",
	"tally-4-icon": "tally-4",
	"tally-5-icon": "tally-5",
	"tangent-icon": "tangent",
	"target-icon": "target",
	"telescope-icon": "telescope",
	"tent-icon": "tent",
	"tent-tree-icon": "tent-tree",
	"terminal-icon": "terminal",
	"terminal-square": "square-terminal",
	"terminal-square-icon": "square-terminal",
	"test-tube-2": "test-tube-diagonal",
	"test-tube-2-icon": "test-tube-diagonal",
	"test-tube-diagonal-icon": "test-tube-diagonal",
	"test-tube-icon": "test-tube",
	"test-tubes-icon": "test-tubes",
	text: "align-left",
	"text-align-center": "align-center",
	"text-align-center-icon": "align-center",
	"text-align-end": "align-right",
	"text-align-end-icon": "align-right",
	"text-align-justify-center-icon": "text-align-justify-center",
	"text-align-justify-end-icon": "text-align-justify-end",
	"text-align-justify-icon": "text-align-justify",
	"text-align-justify-start-icon": "text-align-justify-start",
	"text-align-start": "align-left",
	"text-align-start-icon": "align-left",
	"text-cursor-icon": "text-cursor",
	"text-cursor-input-icon": "text-cursor-input",
	"text-icon": "align-left",
	"text-initial-icon": "text-initial",
	"text-quote-icon": "text-quote",
	"text-search-icon": "text-search",
	"text-select": "square-dashed-text",
	"text-select-icon": "square-dashed-text",
	"text-selection": "square-dashed-text",
	"text-selection-icon": "square-dashed-text",
	"text-wrap-icon": "text-wrap",
	"theater-icon": "theater",
	"thermometer-icon": "thermometer",
	"thermometer-snowflake-icon": "thermometer-snowflake",
	"thermometer-sun-icon": "thermometer-sun",
	"thumbs-down-icon": "thumbs-down",
	"thumbs-up-icon": "thumbs-up",
	"ticket-check-icon": "ticket-check",
	"ticket-icon": "ticket",
	"ticket-minus-icon": "ticket-minus",
	"ticket-percent-icon": "ticket-percent",
	"ticket-plus-icon": "ticket-plus",
	"tickets-icon": "tickets",
	"ticket-slash-icon": "ticket-slash",
	"tickets-plane-icon": "tickets-plane",
	"ticket-x-icon": "ticket-x",
	"tic-tac-toe-icon": "tic-tac-toe",
	"timeline-icon": "timeline",
	"timer-icon": "timer",
	"timer-off-icon": "timer-off",
	"timer-reset-icon": "timer-reset",
	"toggle-left-icon": "toggle-left",
	"toggle-right-icon": "toggle-right",
	"toilet-icon": "toilet",
	"toolbox-icon": "toolbox",
	"tool-case-icon": "tool-case",
	"toothbrush-icon": "toothbrush",
	"toothbrush-sparkles-icon": "toothbrush-sparkles",
	"tornado-icon": "tornado",
	"torus-icon": "torus",
	"touchpad-icon": "touchpad",
	"touchpad-off-icon": "touchpad-off",
	"towel-rack-icon": "towel-rack",
	"tower-control-icon": "tower-control",
	"toy-brick-icon": "toy-brick",
	"tractor-icon": "tractor",
	"traffic-cone-icon": "traffic-cone",
	"trailer-icon": "trailer",
	train: "tram-front",
	"train-front-icon": "train-front",
	"train-front-tunnel-icon": "train-front-tunnel",
	"train-icon": "tram-front",
	"train-track-icon": "train-track",
	"tram-front-icon": "tram-front",
	"transgender-icon": "transgender",
	"trash-2-icon": "trash-2",
	"trash-icon": "trash-2",
	"trash-off-icon": "trash-off",
	"tree-deciduous-icon": "tree-deciduous",
	"tree-palm-icon": "tree-palm",
	"tree-pine-icon": "tree-pine",
	"trees-icon": "trees",
	"trending-down-icon": "trending-down",
	"trending-up-down-icon": "trending-up-down",
	"trending-up-icon": "trending-up",
	"triangle-alert-icon": "triangle-alert",
	"triangle-dashed-icon": "triangle-dashed",
	"triangle-icon": "triangle",
	"triangle-right-icon": "triangle-right",
	"triangles-centerline-dashed-horizontal-icon": "triangles-centerline-dashed-horizontal",
	"triangles-centerline-dashed-vertical-icon": "triangles-centerline-dashed-vertical",
	"trophy-icon": "trophy",
	"truck-electric-icon": "truck-electric",
	"truck-icon": "truck",
	"tube-lotion-icon": "tube-lotion",
	"turkish-lira-icon": "turkish-lira",
	"turntable-icon": "turntable",
	"turtle-icon": "turtle",
	"tv-2": "tv-minimal",
	"tv-2-icon": "tv-minimal",
	"tv-icon": "tv",
	"tv-minimal-icon": "tv-minimal",
	"tv-minimal-play-icon": "tv-minimal-play",
	"type-icon": "type",
	"type-outline-icon": "type-outline",
	"umbrella-icon": "umbrella",
	"umbrella-off-icon": "umbrella-off",
	"underline-icon": "underline",
	"undo-2-icon": "undo-2",
	"undo-dot-icon": "undo-dot",
	"undo-icon": "undo",
	"unfold-horizontal-icon": "unfold-horizontal",
	"unfold-vertical-icon": "unfold-vertical",
	"ungroup-icon": "ungroup",
	"university-icon": "university",
	"unlink-2-icon": "unlink-2",
	"unlink-icon": "unlink",
	unlock: "lock-open",
	"unlock-icon": "lock-open",
	"unlock-keyhole": "lock-keyhole-open",
	"unlock-keyhole-icon": "lock-keyhole-open",
	"unplug-icon": "unplug",
	"upload-cloud": "cloud-upload",
	"upload-cloud-icon": "cloud-upload",
	"upload-icon": "upload",
	"usb-c-port-icon": "usb-c-port",
	"usb-icon": "usb",
	"user-2": "user-round",
	"user-2-icon": "user-round",
	"user-check-2": "user-round-check",
	"user-check-2-icon": "user-round-check",
	"user-check-icon": "user-check",
	"user-circle": "circle-user",
	"user-circle-2": "circle-user-round",
	"user-circle-2-icon": "circle-user-round",
	"user-circle-icon": "circle-user",
	"user-cog-2": "user-round-cog",
	"user-cog-2-icon": "user-round-cog",
	"user-cog-icon": "user-cog",
	"user-group-icon": "user-group",
	"user-icon": "user",
	"user-key-icon": "user-key",
	"user-lock-icon": "user-lock",
	"user-minus-2": "user-round-minus",
	"user-minus-2-icon": "user-round-minus",
	"user-minus-icon": "user-minus",
	"user-pen-icon": "user-pen",
	"user-plus-2": "user-round-plus",
	"user-plus-2-icon": "user-round-plus",
	"user-plus-icon": "user-plus",
	"user-round-arrow-left-icon": "user-round-arrow-left",
	"user-round-check-icon": "user-round-check",
	"user-round-cog-icon": "user-round-cog",
	"user-round-group-icon": "user-round-group",
	"user-round-icon": "user-round",
	"user-round-key-icon": "user-round-key",
	"user-round-minus-icon": "user-round-minus",
	"user-round-pen-icon": "user-round-pen",
	"user-round-plus-icon": "user-round-plus",
	"user-round-search-icon": "user-round-search",
	"user-round-star-icon": "user-round-star",
	"user-round-x-icon": "user-round-x",
	"users-2": "users-round",
	"users-2-icon": "users-round",
	"user-search-icon": "user-search",
	"user-shield-icon": "user-shield",
	"users-icon": "users",
	"user-square": "square-user",
	"user-square-2": "square-user-round",
	"user-square-2-icon": "square-user-round",
	"user-square-icon": "square-user",
	"users-round-icon": "users-round",
	"user-star-icon": "user-star",
	"user-x2": "user-round-x",
	"user-x2-icon": "user-round-x",
	"user-x-icon": "user-x",
	"utensils-crossed-icon": "utensils-crossed",
	"utensils-icon": "utensils",
	"utility-pole-icon": "utility-pole",
	"van-icon": "van",
	"variable-icon": "variable",
	"vault-icon": "vault",
	"vector-polygon-icon": "vector-polygon",
	"vector-square-icon": "vector-square",
	"vegan-icon": "vegan",
	"venetian-mask-icon": "venetian-mask",
	"venus-and-mars-icon": "venus-and-mars",
	"venus-icon": "venus",
	verified: "badge-check",
	"verified-icon": "badge-check",
	"vibrate-icon": "vibrate",
	"vibrate-off-icon": "vibrate-off",
	"video-icon": "video",
	"video-off-icon": "video-off",
	"videotape-icon": "videotape",
	"view-icon": "view",
	"virus-icon": "virus",
	"virus-off-icon": "virus-off",
	"voicemail-icon": "voicemail",
	"volleyball-icon": "volleyball",
	"volume-1-icon": "volume-1",
	"volume-2-icon": "volume-2",
	"volume-icon": "volume",
	"volume-off-icon": "volume-off",
	"volume-x-icon": "volume-x",
	"vote-icon": "vote",
	"wallet-2": "wallet-minimal",
	"wallet-2-icon": "wallet-minimal",
	"wallet-cards-icon": "wallet-cards",
	"wallet-icon": "wallet",
	"wallet-minimal-icon": "wallet-minimal",
	"wallpaper-icon": "wallpaper",
	"wand-2": "wand-sparkles",
	"wand-2-icon": "wand-sparkles",
	"wand-icon": "wand",
	"wand-sparkles-icon": "wand-sparkles",
	"warehouse-icon": "warehouse",
	"washing-machine-icon": "washing-machine",
	"watch-icon": "watch",
	"waves-arrow-down-icon": "waves-arrow-down",
	"waves-arrow-up-icon": "waves-arrow-up",
	"waves-horizontal": "waves",
	"waves-horizontal-icon": "waves",
	"waves-icon": "waves",
	"waves-ladder-icon": "waves-ladder",
	"waves-vertical-icon": "waves-vertical",
	"waypoints-icon": "waypoints",
	"webcam-icon": "webcam",
	"webcam-off-icon": "webcam-off",
	"webhook-icon": "webhook",
	"webhook-off-icon": "webhook-off",
	"weight-icon": "weight",
	"weight-tilde-icon": "weight-tilde",
	"wheat-icon": "wheat",
	"wheat-off-icon": "wheat-off",
	"whistle-icon": "whistle",
	"whole-word-icon": "whole-word",
	"wifi-cog-icon": "wifi-cog",
	"wifi-high-icon": "wifi-high",
	"wifi-icon": "wifi",
	"wifi-lock-icon": "wifi-lock",
	"wifi-low-icon": "wifi-low",
	"wifi-off-icon": "wifi-off",
	"wifi-pen-icon": "wifi-pen",
	"wifi-sync-icon": "wifi-sync",
	"wifi-zero-icon": "wifi-zero",
	"wind-arrow-down-icon": "wind-arrow-down",
	"wind-arrow-up-icon": "wind-arrow-up",
	"wind-icon": "wind",
	"wine-icon": "wine",
	"wine-off-icon": "wine-off",
	"workflow-icon": "workflow",
	"worm-icon": "worm",
	"wrap-text": "text-wrap",
	"wrap-text-icon": "text-wrap",
	"wrench-icon": "wrench",
	"wrench-off-icon": "wrench-off",
	"x-circle": "circle-x",
	"x-circle-icon": "circle-x",
	"x-icon": "x",
	"x-line-top-icon": "x-line-top",
	"x-octagon": "octagon-x",
	"x-octagon-icon": "octagon-x",
	"x-square": "square-x",
	"x-square-icon": "square-x",
	"zap-icon": "zap",
	"zap-off-icon": "zap-off",
	"zodiac-aquarius-icon": "zodiac-aquarius",
	"zodiac-aries-icon": "zodiac-aries",
	"zodiac-cancer-icon": "zodiac-cancer",
	"zodiac-capricorn-icon": "zodiac-capricorn",
	"zodiac-gemini-icon": "zodiac-gemini",
	"zodiac-leo-icon": "zodiac-leo",
	"zodiac-libra-icon": "zodiac-libra",
	"zodiac-ophiuchus-icon": "zodiac-ophiuchus",
	"zodiac-pisces-icon": "zodiac-pisces",
	"zodiac-sagittarius-icon": "zodiac-sagittarius",
	"zodiac-scorpio-icon": "zodiac-scorpio",
	"zodiac-taurus-icon": "zodiac-taurus",
	"zodiac-virgo-icon": "zodiac-virgo",
	"zoom-in-icon": "zoom-in",
	"zoom-out-icon": "zoom-out"
};
var categories = {
	complex: [
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
	],
	simple: [
		"a-large-small",
		"alarm-clock-off",
		"align-center-horizontal",
		"align-center-vertical",
		"align-end-horizontal",
		"align-end-vertical",
		"align-horizontal-distribute-center",
		"align-horizontal-distribute-end",
		"align-horizontal-distribute-start",
		"align-horizontal-justify-center",
		"align-horizontal-justify-end",
		"align-horizontal-justify-start",
		"align-horizontal-space-between",
		"align-start-horizontal",
		"align-start-vertical",
		"align-vertical-distribute-center",
		"align-vertical-distribute-end",
		"align-vertical-distribute-start",
		"align-vertical-justify-center",
		"align-vertical-justify-end",
		"align-vertical-justify-start",
		"align-vertical-space-between",
		"ampersand",
		"ampersands",
		"amphora",
		"anchor",
		"antenna",
		"anvil",
		"aperture",
		"app-window",
		"app-window-mac",
		"apple",
		"archive-restore",
		"archive-x",
		"armchair",
		"arrow-down-from-line",
		"arrow-down-narrow-wide",
		"arrow-down-to-dot",
		"arrow-down-to-line",
		"arrow-down-up",
		"arrow-down-wide-narrow",
		"arrow-left-from-line",
		"arrow-left-right",
		"arrow-left-to-line",
		"arrow-right-from-line",
		"arrow-right-left",
		"arrow-right-to-line",
		"arrow-up-0-1",
		"arrow-up-1-0",
		"arrow-up-az",
		"arrow-up-from-dot",
		"arrow-up-from-line",
		"arrow-up-narrow-wide",
		"arrow-up-to-line",
		"arrow-up-wide-narrow",
		"arrow-up-za",
		"arrows-up-from-line",
		"asterisk",
		"audio-waveform",
		"award",
		"baby",
		"backpack",
		"badge",
		"badge-cent",
		"badge-dollar-sign",
		"badge-euro",
		"badge-indian-rupee",
		"badge-info",
		"badge-japanese-yen",
		"badge-minus",
		"badge-plus",
		"badge-pound-sterling",
		"badge-question-mark",
		"badge-russian-ruble",
		"badge-swiss-franc",
		"badge-turkish-lira",
		"badge-x",
		"baggage-claim",
		"balloon",
		"bandage",
		"banknote",
		"banknote-arrow-down",
		"banknote-arrow-up",
		"banknote-x",
		"barcode",
		"barrel",
		"baseline",
		"bath",
		"beaker",
		"bean",
		"bean-off",
		"bed",
		"bed-double",
		"bed-single",
		"beef",
		"beer",
		"beer-off",
		"bell-dot",
		"bell-minus",
		"bell-plus",
		"bike",
		"binoculars",
		"biohazard",
		"bird",
		"birdhouse",
		"bitcoin",
		"blinds",
		"bolt",
		"bomb",
		"book",
		"book-a",
		"book-alert",
		"book-audio",
		"book-bookmark",
		"book-check",
		"book-copy",
		"book-dashed",
		"book-down",
		"book-headphones",
		"book-heart",
		"book-image",
		"book-key",
		"book-lock",
		"book-minus",
		"book-open",
		"book-open-check",
		"book-open-text",
		"book-plus",
		"book-search",
		"book-type",
		"book-up",
		"book-up-2",
		"book-user",
		"book-x",
		"boom-box",
		"bottle-wine",
		"bow-arrow",
		"braces",
		"brackets",
		"brain-circuit",
		"brain-cog",
		"brick-wall",
		"brick-wall-fire",
		"brick-wall-shield",
		"briefcase",
		"briefcase-conveyor-belt",
		"briefcase-medical",
		"bring-to-front",
		"bubbles",
		"bug",
		"bug-off",
		"bug-play",
		"building",
		"building-complex",
		"bus",
		"bus-front",
		"cable",
		"cable-car",
		"cake",
		"cake-slice",
		"calculator",
		"calendar",
		"calendar-1",
		"calendar-arrow-down",
		"calendar-arrow-up",
		"calendar-clock",
		"calendar-fold",
		"calendar-heart",
		"calendar-minus",
		"calendar-minus-2",
		"calendar-off",
		"calendar-plus",
		"calendar-plus-2",
		"calendar-range",
		"calendar-search",
		"calendar-sync",
		"calendar-x",
		"calendar-x2",
		"calendars",
		"camera",
		"camera-off",
		"candy",
		"candy-cane",
		"candy-off",
		"cannabis",
		"cannabis-off",
		"captions",
		"captions-off",
		"car-front",
		"car-taxi-front",
		"caravan",
		"card-sim",
		"carrot",
		"case-lower",
		"case-sensitive",
		"case-upper",
		"cassette-tape",
		"castle",
		"cat",
		"chart-area",
		"chart-bar-big",
		"chart-bar-stacked",
		"chart-candlestick",
		"chart-column-big",
		"chart-column-stacked",
		"chart-gantt",
		"chart-network",
		"chart-no-axes-combined",
		"chart-no-axes-gantt",
		"chef-hat",
		"chess-queen",
		"chess-rook",
		"chevron-last",
		"chevrons-down",
		"chevrons-left",
		"chevrons-left-right-ellipsis",
		"chevrons-right",
		"chevrons-up",
		"church",
		"circle",
		"circle-alert",
		"circle-arrow-down",
		"circle-arrow-left",
		"circle-arrow-out-down-left",
		"circle-arrow-out-down-right",
		"circle-arrow-out-up-left",
		"circle-arrow-out-up-right",
		"circle-arrow-right",
		"circle-arrow-up",
		"circle-divide",
		"circle-dot",
		"circle-dot-dashed",
		"circle-ellipsis",
		"circle-equal",
		"circle-fading-arrow-up",
		"circle-fading-plus",
		"circle-minus",
		"circle-off",
		"circle-parking",
		"circle-parking-off",
		"circle-pause",
		"circle-percent",
		"circle-pile",
		"circle-play",
		"circle-pound-sterling",
		"circle-power",
		"circle-slash",
		"circle-slash-2",
		"circle-small",
		"circle-star",
		"circle-stop",
		"circle-user",
		"circle-user-round",
		"citrus",
		"clipboard-clock",
		"clipboard-copy",
		"clipboard-minus",
		"clipboard-paste",
		"clipboard-pen",
		"clipboard-pen-line",
		"clipboard-plus",
		"clipboard-type",
		"clipboard-x",
		"clock-alert",
		"clock-arrow-down",
		"clock-arrow-up",
		"clock-check",
		"clock-fading",
		"clock-plus",
		"closed-caption",
		"cloud",
		"cloud-alert",
		"cloud-check",
		"cloud-fog",
		"cloud-off",
		"cloudy",
		"clover",
		"club",
		"code",
		"code-xml",
		"coins",
		"columns-2",
		"columns-3",
		"columns-3-cog",
		"columns-4",
		"combine",
		"command",
		"component",
		"computer",
		"cone",
		"contact",
		"contact-round",
		"container",
		"cookie",
		"copy-check",
		"copy-minus",
		"copy-plus",
		"copy-slash",
		"copy-x",
		"copyleft",
		"copyright",
		"creative-commons",
		"croissant",
		"crosshair",
		"crown",
		"cuboid",
		"currency",
		"cylinder",
		"dam",
		"database-search",
		"database-zap",
		"decimals-arrow-left",
		"decimals-arrow-right",
		"dessert",
		"diameter",
		"diamond",
		"diamond-minus",
		"diamond-percent",
		"diamond-plus",
		"dice-1",
		"dice-2",
		"dice-3",
		"dice-4",
		"dice-5",
		"dice-6",
		"dices",
		"diff",
		"disc",
		"disc-2",
		"disc-album",
		"divide",
		"dna",
		"dna-off",
		"dock",
		"dog",
		"donut",
		"door-closed",
		"door-closed-locked",
		"door-open",
		"dot",
		"drafting-compass",
		"drama",
		"drill",
		"drone",
		"droplet-off",
		"droplets",
		"drumstick",
		"dumbbell",
		"ear",
		"ear-off",
		"earth-lock",
		"eclipse",
		"egg",
		"egg-fried",
		"egg-off",
		"ellipse",
		"equal",
		"equal-approximately",
		"eraser",
		"ethernet-port",
		"eye-closed",
		"factory",
		"fast-forward",
		"fence",
		"ferris-wheel",
		"file",
		"file-archive",
		"file-axis-3d",
		"file-badge",
		"file-box",
		"file-braces",
		"file-braces-corner",
		"file-chart-column",
		"file-chart-column-increasing",
		"file-chart-pie",
		"file-clock",
		"file-code",
		"file-code-corner",
		"file-diff",
		"file-digit",
		"file-down",
		"file-exclamation-point",
		"file-headphone",
		"file-heart",
		"file-image",
		"file-input",
		"file-key",
		"file-lock",
		"file-minus",
		"file-minus-corner",
		"file-music",
		"file-output",
		"file-pen",
		"file-play",
		"file-plus",
		"file-plus-corner",
		"file-question-mark",
		"file-scan",
		"file-search",
		"file-search-corner",
		"file-signal",
		"file-sliders",
		"file-spreadsheet",
		"file-symlink",
		"file-terminal",
		"file-type",
		"file-type-corner",
		"file-up",
		"file-user",
		"file-video-camera",
		"file-volume",
		"file-x",
		"file-x-corner",
		"files",
		"film",
		"fire-extinguisher",
		"fish",
		"fish-off",
		"fishing-hook",
		"fishing-rod",
		"flag",
		"flag-off",
		"flag-triangle-left",
		"flag-triangle-right",
		"flame-kindling",
		"flashlight",
		"flashlight-off",
		"flask-conical-off",
		"flask-round",
		"flower",
		"flower-2",
		"focus",
		"fold-horizontal",
		"fold-vertical",
		"folder",
		"folder-closed",
		"folder-open-dot",
		"folder-pen",
		"folder-search",
		"folder-search-2",
		"folder-symlink",
		"footprints",
		"form",
		"forward",
		"fuel",
		"fullscreen",
		"funnel",
		"funnel-plus",
		"funnel-x",
		"gamepad",
		"gamepad-2",
		"gamepad-directional",
		"gem",
		"ghost",
		"gift",
		"git-branch-minus",
		"git-branch-plus",
		"git-merge-conflict",
		"git-pull-request-arrow",
		"git-pull-request-create-arrow",
		"git-pull-request-draft",
		"glass-water",
		"glasses",
		"globe",
		"globe-lock",
		"globe-off",
		"globe-x",
		"goal",
		"gpu",
		"grape",
		"grid-2-x-2",
		"grid-2-x-2-check",
		"grid-2-x-2-plus",
		"grid-2-x-2-x",
		"grid-3-x-2",
		"grid-3-x-3",
		"group",
		"guitar",
		"ham",
		"hamburger",
		"hand-platter",
		"handbag",
		"handshake",
		"hard-drive",
		"hard-hat",
		"hash",
		"haze",
		"hd",
		"hdmi-port",
		"heading",
		"heading-1",
		"heading-2",
		"heading-3",
		"heading-4",
		"heading-5",
		"heading-6",
		"headphone-off",
		"headphones",
		"headset",
		"heart-crack",
		"heart-minus",
		"heart-off",
		"heart-plus",
		"heater",
		"helicopter",
		"hexagon",
		"highlighter",
		"hop",
		"hop-off",
		"hospital",
		"hotel",
		"house-heart",
		"house-plug",
		"house-plus",
		"ice-cream-bowl",
		"ice-cream-cone",
		"id-card-lanyard",
		"image",
		"image-down",
		"image-minus",
		"image-off",
		"image-play",
		"image-plus",
		"image-up",
		"image-upscale",
		"images",
		"import",
		"inbox",
		"infinity",
		"info",
		"inspection-panel",
		"iteration-ccw",
		"iteration-cw",
		"joystick",
		"kayak",
		"keyboard-music",
		"keyboard-off",
		"lamp",
		"lamp-ceiling",
		"lamp-desk",
		"lamp-floor",
		"lamp-wall-down",
		"lamp-wall-up",
		"land-plot",
		"landmark",
		"laptop",
		"laptop-minimal",
		"lasso",
		"lasso-select",
		"layers-plus",
		"layout-list",
		"layout-panel-left",
		"layout-template",
		"lectern",
		"lens-concave",
		"lens-convex",
		"library",
		"library-big",
		"life-buoy",
		"ligature",
		"line-dot-right-horizontal",
		"line-squiggle",
		"link-2-off",
		"list-check",
		"list-checks",
		"list-chevrons-down-up",
		"list-chevrons-up-down",
		"list-collapse",
		"list-end",
		"list-filter",
		"list-filter-plus",
		"list-indent-decrease",
		"list-indent-increase",
		"list-minus",
		"list-music",
		"list-ordered",
		"list-plus",
		"list-restart",
		"list-start",
		"list-todo",
		"list-tree",
		"list-video",
		"list-x",
		"locate",
		"locate-fixed",
		"locate-off",
		"logs",
		"lollipop",
		"luggage",
		"magnet",
		"mail",
		"mail-minus",
		"mail-open",
		"mail-plus",
		"mail-question-mark",
		"mail-search",
		"mail-warning",
		"mail-x",
		"mails",
		"map",
		"map-minus",
		"map-pin-pen",
		"map-pin-x",
		"map-pinned",
		"map-plus",
		"mars",
		"mars-stroke",
		"martini",
		"medal",
		"megaphone",
		"megaphone-off",
		"memory-stick",
		"merge",
		"message-circle-reply",
		"message-square-lock",
		"message-square-reply",
		"messages-square",
		"metronome",
		"mic-signal",
		"mic-vocal",
		"microchip",
		"microscope",
		"microwave",
		"milestone",
		"milk",
		"milk-off",
		"minimize-2",
		"minus",
		"mirror-rectangular",
		"mirror-round",
		"monitor",
		"monitor-cloud",
		"monitor-dot",
		"monitor-down",
		"monitor-off",
		"monitor-pause",
		"monitor-play",
		"monitor-smartphone",
		"monitor-speaker",
		"monitor-stop",
		"monitor-up",
		"monitor-x",
		"motorbike",
		"mountain",
		"mountain-snow",
		"mouse",
		"mouse-left",
		"mouse-off",
		"mouse-pointer",
		"mouse-pointer-2",
		"mouse-pointer-2-off",
		"mouse-pointer-ban",
		"mouse-right",
		"move",
		"move-3d",
		"move-diagonal",
		"move-diagonal-2",
		"move-down-left",
		"move-down-right",
		"move-horizontal",
		"move-up-left",
		"move-up-right",
		"move-vertical",
		"music",
		"music-2",
		"music-3",
		"music-4",
		"navigation",
		"navigation-2",
		"navigation-2-off",
		"navigation-off",
		"newspaper",
		"non-binary",
		"notebook",
		"notebook-pen",
		"notebook-tabs",
		"notebook-text",
		"notepad-text",
		"notepad-text-dashed",
		"nut",
		"nut-off",
		"octagon",
		"octagon-alert",
		"octagon-minus",
		"octagon-pause",
		"octagon-x",
		"omega",
		"option",
		"origami",
		"package",
		"package-2",
		"package-check",
		"package-minus",
		"package-open",
		"package-plus",
		"package-search",
		"package-x",
		"paint-bucket",
		"paint-roller",
		"paintbrush-vertical",
		"panda",
		"panel-bottom-dashed",
		"panel-left-dashed",
		"panel-left-right-dashed",
		"panel-right-dashed",
		"panel-top-bottom-dashed",
		"panel-top-dashed",
		"panels-left-bottom",
		"panels-right-bottom",
		"panels-top-left",
		"parentheses",
		"parking-meter",
		"paw-print",
		"pc-case",
		"pen",
		"pen-line",
		"pen-off",
		"pencil",
		"pencil-line",
		"pencil-off",
		"pencil-ruler",
		"pentagon",
		"percent",
		"person-standing",
		"phone-outgoing",
		"pi",
		"piano",
		"picture-in-picture",
		"picture-in-picture-2",
		"piggy-bank",
		"pilcrow",
		"pilcrow-left",
		"pilcrow-right",
		"pill",
		"pill-bottle",
		"pipette",
		"pizza",
		"plug",
		"plug-2",
		"pocket-knife",
		"pointer",
		"pointer-off",
		"popcorn",
		"popsicle",
		"power",
		"power-off",
		"presentation",
		"printer",
		"printer-check",
		"printer-x",
		"proportions",
		"puzzle",
		"pyramid",
		"qr-code",
		"quote",
		"radar",
		"radiation",
		"radical",
		"radio-receiver",
		"radius",
		"rainbow",
		"rat",
		"ratio",
		"rectangle-circle",
		"rectangle-ellipsis",
		"rectangle-goggles",
		"rectangle-horizontal",
		"rectangle-vertical",
		"recycle",
		"redo-2",
		"refrigerator",
		"regex",
		"remove-formatting",
		"repeat",
		"repeat-1",
		"repeat-2",
		"replace",
		"replace-all",
		"reply",
		"reply-all",
		"rewind",
		"ribbon",
		"rose",
		"rotate-3d",
		"rotate-ccw-square",
		"rotate-cw-square",
		"route-off",
		"rows-2",
		"rows-3",
		"rows-4",
		"rss",
		"ruler",
		"ruler-dimension-line",
		"sailboat",
		"salad",
		"sandwich",
		"satellite",
		"save",
		"save-all",
		"save-off",
		"scale",
		"scale-3d",
		"scaling",
		"scan",
		"scan-barcode",
		"scan-eye",
		"scan-heart",
		"scan-line",
		"scan-qr-code",
		"scan-search",
		"school",
		"scooter",
		"screen-share",
		"screen-share-off",
		"scroll",
		"scroll-text",
		"search-alert",
		"search-check",
		"search-code",
		"search-slash",
		"search-x",
		"section",
		"send-to-back",
		"separator-horizontal",
		"separator-vertical",
		"server-off",
		"settings-2",
		"shapes",
		"share",
		"share-2",
		"sheet",
		"shell",
		"shelving-unit",
		"shield",
		"shield-alert",
		"shield-ban",
		"shield-ellipsis",
		"shield-half",
		"shield-minus",
		"shield-off",
		"shield-plus",
		"shield-question-mark",
		"shield-user",
		"shield-x",
		"shirt",
		"shopping-bag",
		"shopping-basket",
		"shovel",
		"shrimp",
		"shrub",
		"shuffle",
		"sigma",
		"signature",
		"signpost",
		"signpost-big",
		"siren",
		"skip-back",
		"skip-forward",
		"skull",
		"slash",
		"slice",
		"smartphone",
		"snail",
		"soap-dispenser-droplet",
		"sofa",
		"solar-panel",
		"space",
		"spade",
		"speaker",
		"speech",
		"spell-check",
		"spell-check-2",
		"spline",
		"spline-pointer",
		"split",
		"spool",
		"spotlight",
		"sprout",
		"square",
		"square-arrow-down-left",
		"square-arrow-down-right",
		"square-arrow-right-enter",
		"square-arrow-right-exit",
		"square-arrow-up-left",
		"square-arrow-up-right",
		"square-asterisk",
		"square-bookmark",
		"square-bottom-dashed-scissors",
		"square-centerline-dashed-horizontal",
		"square-centerline-dashed-vertical",
		"square-chart-gantt",
		"square-check",
		"square-check-big",
		"square-code",
		"square-dashed",
		"square-dashed-bottom",
		"square-dashed-bottom-code",
		"square-dashed-mouse-pointer",
		"square-dashed-text",
		"square-dashed-top-solid",
		"square-divide",
		"square-dot",
		"square-equal",
		"square-function",
		"square-library",
		"square-m",
		"square-menu",
		"square-minus",
		"square-mouse-pointer",
		"square-parking",
		"square-parking-off",
		"square-pause",
		"square-percent",
		"square-pi",
		"square-pilcrow",
		"square-play",
		"square-power",
		"square-radical",
		"square-round-corner",
		"square-scissors",
		"square-sigma",
		"square-slash",
		"square-split-horizontal",
		"square-split-vertical",
		"square-square",
		"square-star",
		"square-stop",
		"square-terminal",
		"square-user",
		"square-user-round",
		"squares-exclude",
		"squares-intersect",
		"squares-subtract",
		"squares-unite",
		"squircle",
		"squircle-dashed",
		"squirrel",
		"star-half",
		"star-off",
		"step-back",
		"step-forward",
		"sticker",
		"sticky-note",
		"stone",
		"store",
		"stretch-horizontal",
		"stretch-vertical",
		"strikethrough",
		"subscript",
		"sun-snow",
		"sunrise",
		"superscript",
		"swatch-book",
		"sword",
		"swords",
		"table",
		"table-2",
		"table-cells-merge",
		"table-cells-split",
		"table-columns-split",
		"table-of-contents",
		"table-properties",
		"table-rows-split",
		"tablet",
		"tablet-smartphone",
		"tablets",
		"tag",
		"tags",
		"tally-1",
		"tally-2",
		"tally-3",
		"tally-4",
		"tally-5",
		"tangent",
		"target",
		"tent",
		"tent-tree",
		"test-tube",
		"test-tube-diagonal",
		"test-tubes",
		"text-align-justify",
		"text-cursor",
		"text-cursor-input",
		"text-initial",
		"text-quote",
		"text-search",
		"text-wrap",
		"theater",
		"thermometer-snowflake",
		"thermometer-sun",
		"ticket-check",
		"ticket-minus",
		"ticket-percent",
		"ticket-plus",
		"ticket-slash",
		"ticket-x",
		"tickets",
		"tickets-plane",
		"timer-reset",
		"toilet",
		"tool-case",
		"toolbox",
		"torus",
		"touchpad",
		"touchpad-off",
		"towel-rack",
		"tower-control",
		"toy-brick",
		"tractor",
		"traffic-cone",
		"train-front",
		"train-front-tunnel",
		"tram-front",
		"transgender",
		"tree-palm",
		"trees",
		"triangle",
		"triangle-alert",
		"triangle-dashed",
		"triangle-right",
		"triangles-centerline-dashed-horizontal",
		"triangles-centerline-dashed-vertical",
		"trophy",
		"truck-electric",
		"turntable",
		"turtle",
		"tv",
		"tv-minimal",
		"tv-minimal-play",
		"type",
		"type-outline",
		"umbrella",
		"umbrella-off",
		"undo-2",
		"unfold-horizontal",
		"unfold-vertical",
		"ungroup",
		"university",
		"unlink",
		"unlink-2",
		"usb",
		"user-cog",
		"user-key",
		"user-lock",
		"user-minus",
		"user-pen",
		"user-round-key",
		"user-round-minus",
		"user-round-pen",
		"user-round-search",
		"user-round-x",
		"user-search",
		"user-star",
		"user-x",
		"utensils",
		"utensils-crossed",
		"utility-pole",
		"van",
		"variable",
		"vault",
		"vector-square",
		"vegan",
		"venetian-mask",
		"venus",
		"venus-and-mars",
		"vibrate-off",
		"video",
		"video-off",
		"videotape",
		"view",
		"voicemail",
		"volleyball",
		"volume-x",
		"vote",
		"wallet-cards",
		"wallet-minimal",
		"wallpaper",
		"wand",
		"wand-sparkles",
		"warehouse",
		"watch",
		"webcam",
		"webhook-off",
		"weight",
		"weight-tilde",
		"wheat",
		"wheat-off",
		"whole-word",
		"wifi-off",
		"wine",
		"wine-off",
		"worm",
		"x-line-top",
		"zodiac-aquarius",
		"zodiac-aries",
		"zodiac-cancer",
		"zodiac-capricorn",
		"zodiac-gemini",
		"zodiac-leo",
		"zodiac-libra",
		"zodiac-ophiuchus",
		"zodiac-pisces",
		"zodiac-sagittarius",
		"zodiac-scorpio",
		"zodiac-taurus",
		"zodiac-virgo",
		"zoom-in",
		"zoom-out"
	]
};
var iconManifest = {
	icons: icons,
	aliases: aliases,
	categories: categories
};

type NamedIconProps = Omit<IconProps, 'name'>;
type IconComponent = ForwardRefExoticComponent<NamedIconProps & RefAttributes<SVGSVGElement>>;
type LucideIcon = IconComponent;
type LucideProps = NamedIconProps;
interface IconProps extends Omit<LucideProps$1, 'ref'> {
    name?: string;
    loop?: 'hover' | 'always' | false;
    /** Defaults to 'ignore' (force animations); 'system' follows prefers-reduced-motion. */
    reducedMotion?: 'system' | 'ignore';
}

declare function createIcon(name: string): IconComponent;

declare const AArrowDown: IconComponent;
declare const AArrowDownIcon: IconComponent;
declare const AArrowUp: IconComponent;
declare const AArrowUpIcon: IconComponent;
declare const Accessibility: IconComponent;
declare const AccessibilityIcon: IconComponent;
declare const Activity: IconComponent;
declare const ActivityIcon: IconComponent;
declare const ActivitySquare: IconComponent;
declare const ActivitySquareIcon: IconComponent;
declare const Ad: IconComponent;
declare const AdIcon: IconComponent;
declare const Airplay: IconComponent;
declare const AirplayIcon: IconComponent;
declare const AirVent: IconComponent;
declare const AirVentIcon: IconComponent;
declare const ALargeSmall: IconComponent;
declare const ALargeSmallIcon: IconComponent;
declare const AlarmCheck: IconComponent;
declare const AlarmCheckIcon: IconComponent;
declare const AlarmClock: IconComponent;
declare const AlarmClockCheck: IconComponent;
declare const AlarmClockCheckIcon: IconComponent;
declare const AlarmClockIcon: IconComponent;
declare const AlarmClockMinus: IconComponent;
declare const AlarmClockMinusIcon: IconComponent;
declare const AlarmClockOff: IconComponent;
declare const AlarmClockOffIcon: IconComponent;
declare const AlarmClockPlus: IconComponent;
declare const AlarmClockPlusIcon: IconComponent;
declare const AlarmMinus: IconComponent;
declare const AlarmMinusIcon: IconComponent;
declare const AlarmPlus: IconComponent;
declare const AlarmPlusIcon: IconComponent;
declare const AlarmSmoke: IconComponent;
declare const AlarmSmokeIcon: IconComponent;
declare const Album: IconComponent;
declare const AlbumIcon: IconComponent;
declare const AlertCircle: IconComponent;
declare const AlertCircleIcon: IconComponent;
declare const AlertOctagon: IconComponent;
declare const AlertOctagonIcon: IconComponent;
declare const AlertTriangle: IconComponent;
declare const AlertTriangleIcon: IconComponent;
declare const AlignCenter: IconComponent;
declare const AlignCenterHorizontal: IconComponent;
declare const AlignCenterHorizontalIcon: IconComponent;
declare const AlignCenterIcon: IconComponent;
declare const AlignCenterVertical: IconComponent;
declare const AlignCenterVerticalIcon: IconComponent;
declare const AlignEndHorizontal: IconComponent;
declare const AlignEndHorizontalIcon: IconComponent;
declare const AlignEndVertical: IconComponent;
declare const AlignEndVerticalIcon: IconComponent;
declare const AlignHorizontalDistributeCenter: IconComponent;
declare const AlignHorizontalDistributeCenterIcon: IconComponent;
declare const AlignHorizontalDistributeEnd: IconComponent;
declare const AlignHorizontalDistributeEndIcon: IconComponent;
declare const AlignHorizontalDistributeStart: IconComponent;
declare const AlignHorizontalDistributeStartIcon: IconComponent;
declare const AlignHorizontalJustifyCenter: IconComponent;
declare const AlignHorizontalJustifyCenterIcon: IconComponent;
declare const AlignHorizontalJustifyEnd: IconComponent;
declare const AlignHorizontalJustifyEndIcon: IconComponent;
declare const AlignHorizontalJustifyStart: IconComponent;
declare const AlignHorizontalJustifyStartIcon: IconComponent;
declare const AlignHorizontalSpaceAround: IconComponent;
declare const AlignHorizontalSpaceAroundIcon: IconComponent;
declare const AlignHorizontalSpaceBetween: IconComponent;
declare const AlignHorizontalSpaceBetweenIcon: IconComponent;
declare const AlignJustify: IconComponent;
declare const AlignJustifyIcon: IconComponent;
declare const AlignLeft: IconComponent;
declare const AlignLeftIcon: IconComponent;
declare const AlignRight: IconComponent;
declare const AlignRightIcon: IconComponent;
declare const AlignStartHorizontal: IconComponent;
declare const AlignStartHorizontalIcon: IconComponent;
declare const AlignStartVertical: IconComponent;
declare const AlignStartVerticalIcon: IconComponent;
declare const AlignVerticalDistributeCenter: IconComponent;
declare const AlignVerticalDistributeCenterIcon: IconComponent;
declare const AlignVerticalDistributeEnd: IconComponent;
declare const AlignVerticalDistributeEndIcon: IconComponent;
declare const AlignVerticalDistributeStart: IconComponent;
declare const AlignVerticalDistributeStartIcon: IconComponent;
declare const AlignVerticalJustifyCenter: IconComponent;
declare const AlignVerticalJustifyCenterIcon: IconComponent;
declare const AlignVerticalJustifyEnd: IconComponent;
declare const AlignVerticalJustifyEndIcon: IconComponent;
declare const AlignVerticalJustifyStart: IconComponent;
declare const AlignVerticalJustifyStartIcon: IconComponent;
declare const AlignVerticalSpaceAround: IconComponent;
declare const AlignVerticalSpaceAroundIcon: IconComponent;
declare const AlignVerticalSpaceBetween: IconComponent;
declare const AlignVerticalSpaceBetweenIcon: IconComponent;
declare const Ambulance: IconComponent;
declare const AmbulanceIcon: IconComponent;
declare const Ampersand: IconComponent;
declare const AmpersandIcon: IconComponent;
declare const Ampersands: IconComponent;
declare const AmpersandsIcon: IconComponent;
declare const Amphora: IconComponent;
declare const AmphoraIcon: IconComponent;
declare const Anchor: IconComponent;
declare const AnchorIcon: IconComponent;
declare const Angle: IconComponent;
declare const AngleIcon: IconComponent;
declare const Angry: IconComponent;
declare const AngryIcon: IconComponent;
declare const Annoyed: IconComponent;
declare const AnnoyedIcon: IconComponent;
declare const Antenna: IconComponent;
declare const AntennaIcon: IconComponent;
declare const Anvil: IconComponent;
declare const AnvilIcon: IconComponent;
declare const Aperture: IconComponent;
declare const ApertureIcon: IconComponent;
declare const Apple: IconComponent;
declare const AppleIcon: IconComponent;
declare const AppWindow: IconComponent;
declare const AppWindowIcon: IconComponent;
declare const AppWindowMac: IconComponent;
declare const AppWindowMacIcon: IconComponent;
declare const Archive: IconComponent;
declare const ArchiveIcon: IconComponent;
declare const ArchiveRestore: IconComponent;
declare const ArchiveRestoreIcon: IconComponent;
declare const ArchiveX: IconComponent;
declare const ArchiveXIcon: IconComponent;
declare const AreaChart: IconComponent;
declare const AreaChartIcon: IconComponent;
declare const Armchair: IconComponent;
declare const ArmchairIcon: IconComponent;
declare const ArmenianDram: IconComponent;
declare const ArmenianDramIcon: IconComponent;
declare const ArrowBigDown: IconComponent;
declare const ArrowBigDownDash: IconComponent;
declare const ArrowBigDownDashIcon: IconComponent;
declare const ArrowBigDownIcon: IconComponent;
declare const ArrowBigLeft: IconComponent;
declare const ArrowBigLeftDash: IconComponent;
declare const ArrowBigLeftDashIcon: IconComponent;
declare const ArrowBigLeftIcon: IconComponent;
declare const ArrowBigRight: IconComponent;
declare const ArrowBigRightDash: IconComponent;
declare const ArrowBigRightDashIcon: IconComponent;
declare const ArrowBigRightIcon: IconComponent;
declare const ArrowBigUp: IconComponent;
declare const ArrowBigUpDash: IconComponent;
declare const ArrowBigUpDashIcon: IconComponent;
declare const ArrowBigUpIcon: IconComponent;
declare const ArrowDown: IconComponent;
declare const ArrowDown01: IconComponent;
declare const ArrowDown01Icon: IconComponent;
declare const ArrowDown10: IconComponent;
declare const ArrowDown10Icon: IconComponent;
declare const ArrowDownAz: IconComponent;
declare const ArrowDownAZ: IconComponent;
declare const ArrowDownAzIcon: IconComponent;
declare const ArrowDownAZIcon: IconComponent;
declare const ArrowDownCircle: IconComponent;
declare const ArrowDownCircleIcon: IconComponent;
declare const ArrowDownFromLine: IconComponent;
declare const ArrowDownFromLineIcon: IconComponent;
declare const ArrowDownIcon: IconComponent;
declare const ArrowDownLeft: IconComponent;
declare const ArrowDownLeftFromCircle: IconComponent;
declare const ArrowDownLeftFromCircleIcon: IconComponent;
declare const ArrowDownLeftFromSquare: IconComponent;
declare const ArrowDownLeftFromSquareIcon: IconComponent;
declare const ArrowDownLeftIcon: IconComponent;
declare const ArrowDownLeftSquare: IconComponent;
declare const ArrowDownLeftSquareIcon: IconComponent;
declare const ArrowDownNarrowWide: IconComponent;
declare const ArrowDownNarrowWideIcon: IconComponent;
declare const ArrowDownRight: IconComponent;
declare const ArrowDownRightFromCircle: IconComponent;
declare const ArrowDownRightFromCircleIcon: IconComponent;
declare const ArrowDownRightFromSquare: IconComponent;
declare const ArrowDownRightFromSquareIcon: IconComponent;
declare const ArrowDownRightIcon: IconComponent;
declare const ArrowDownRightSquare: IconComponent;
declare const ArrowDownRightSquareIcon: IconComponent;
declare const ArrowDownSquare: IconComponent;
declare const ArrowDownSquareIcon: IconComponent;
declare const ArrowDownToDot: IconComponent;
declare const ArrowDownToDotIcon: IconComponent;
declare const ArrowDownToLine: IconComponent;
declare const ArrowDownToLineIcon: IconComponent;
declare const ArrowDownUp: IconComponent;
declare const ArrowDownUpIcon: IconComponent;
declare const ArrowDownWideNarrow: IconComponent;
declare const ArrowDownWideNarrowIcon: IconComponent;
declare const ArrowDownZa: IconComponent;
declare const ArrowDownZA: IconComponent;
declare const ArrowDownZaIcon: IconComponent;
declare const ArrowDownZAIcon: IconComponent;
declare const ArrowLeft: IconComponent;
declare const ArrowLeftCircle: IconComponent;
declare const ArrowLeftCircleIcon: IconComponent;
declare const ArrowLeftFromLine: IconComponent;
declare const ArrowLeftFromLineIcon: IconComponent;
declare const ArrowLeftIcon: IconComponent;
declare const ArrowLeftRight: IconComponent;
declare const ArrowLeftRightIcon: IconComponent;
declare const ArrowLeftSquare: IconComponent;
declare const ArrowLeftSquareIcon: IconComponent;
declare const ArrowLeftToLine: IconComponent;
declare const ArrowLeftToLineIcon: IconComponent;
declare const ArrowRight: IconComponent;
declare const ArrowRightCircle: IconComponent;
declare const ArrowRightCircleIcon: IconComponent;
declare const ArrowRightFromLine: IconComponent;
declare const ArrowRightFromLineIcon: IconComponent;
declare const ArrowRightIcon: IconComponent;
declare const ArrowRightLeft: IconComponent;
declare const ArrowRightLeftIcon: IconComponent;
declare const ArrowRightSquare: IconComponent;
declare const ArrowRightSquareIcon: IconComponent;
declare const ArrowRightToLine: IconComponent;
declare const ArrowRightToLineIcon: IconComponent;
declare const ArrowsUpFromLine: IconComponent;
declare const ArrowsUpFromLineIcon: IconComponent;
declare const ArrowUp: IconComponent;
declare const ArrowUp01: IconComponent;
declare const ArrowUp01Icon: IconComponent;
declare const ArrowUp10: IconComponent;
declare const ArrowUp10Icon: IconComponent;
declare const ArrowUpAz: IconComponent;
declare const ArrowUpAZ: IconComponent;
declare const ArrowUpAzIcon: IconComponent;
declare const ArrowUpAZIcon: IconComponent;
declare const ArrowUpCircle: IconComponent;
declare const ArrowUpCircleIcon: IconComponent;
declare const ArrowUpDown: IconComponent;
declare const ArrowUpDownIcon: IconComponent;
declare const ArrowUpFromDot: IconComponent;
declare const ArrowUpFromDotIcon: IconComponent;
declare const ArrowUpFromLine: IconComponent;
declare const ArrowUpFromLineIcon: IconComponent;
declare const ArrowUpIcon: IconComponent;
declare const ArrowUpLeft: IconComponent;
declare const ArrowUpLeftFromCircle: IconComponent;
declare const ArrowUpLeftFromCircleIcon: IconComponent;
declare const ArrowUpLeftFromSquare: IconComponent;
declare const ArrowUpLeftFromSquareIcon: IconComponent;
declare const ArrowUpLeftIcon: IconComponent;
declare const ArrowUpLeftSquare: IconComponent;
declare const ArrowUpLeftSquareIcon: IconComponent;
declare const ArrowUpNarrowWide: IconComponent;
declare const ArrowUpNarrowWideIcon: IconComponent;
declare const ArrowUpRight: IconComponent;
declare const ArrowUpRightFromCircle: IconComponent;
declare const ArrowUpRightFromCircleIcon: IconComponent;
declare const ArrowUpRightFromSquare: IconComponent;
declare const ArrowUpRightFromSquareIcon: IconComponent;
declare const ArrowUpRightIcon: IconComponent;
declare const ArrowUpRightSquare: IconComponent;
declare const ArrowUpRightSquareIcon: IconComponent;
declare const ArrowUpSquare: IconComponent;
declare const ArrowUpSquareIcon: IconComponent;
declare const ArrowUpToLine: IconComponent;
declare const ArrowUpToLineIcon: IconComponent;
declare const ArrowUpWideNarrow: IconComponent;
declare const ArrowUpWideNarrowIcon: IconComponent;
declare const ArrowUpZa: IconComponent;
declare const ArrowUpZA: IconComponent;
declare const ArrowUpZaIcon: IconComponent;
declare const ArrowUpZAIcon: IconComponent;
declare const Asterisk: IconComponent;
declare const AsteriskIcon: IconComponent;
declare const AsteriskSquare: IconComponent;
declare const AsteriskSquareIcon: IconComponent;
declare const Astroid: IconComponent;
declare const AstroidIcon: IconComponent;
declare const Atom: IconComponent;
declare const AtomIcon: IconComponent;
declare const AtSign: IconComponent;
declare const AtSignIcon: IconComponent;
declare const AudioLines: IconComponent;
declare const AudioLinesIcon: IconComponent;
declare const AudioLinesOff: IconComponent;
declare const AudioLinesOffIcon: IconComponent;
declare const AudioLinesX: IconComponent;
declare const AudioLinesXIcon: IconComponent;
declare const AudioWaveform: IconComponent;
declare const AudioWaveformIcon: IconComponent;
declare const Award: IconComponent;
declare const AwardIcon: IconComponent;
declare const Axe: IconComponent;
declare const AxeIcon: IconComponent;
declare const Axis3d: IconComponent;
declare const Axis3D: IconComponent;
declare const Axis3dIcon: IconComponent;
declare const Axis3DIcon: IconComponent;
declare const Baby: IconComponent;
declare const BabyIcon: IconComponent;
declare const Backpack: IconComponent;
declare const BackpackIcon: IconComponent;
declare const Badge: IconComponent;
declare const BadgeAlert: IconComponent;
declare const BadgeAlertIcon: IconComponent;
declare const BadgeCent: IconComponent;
declare const BadgeCentIcon: IconComponent;
declare const BadgeCheck: IconComponent;
declare const BadgeCheckIcon: IconComponent;
declare const BadgeDollarSign: IconComponent;
declare const BadgeDollarSignIcon: IconComponent;
declare const BadgeEuro: IconComponent;
declare const BadgeEuroIcon: IconComponent;
declare const BadgeHelp: IconComponent;
declare const BadgeHelpIcon: IconComponent;
declare const BadgeIcon: IconComponent;
declare const BadgeIndianRupee: IconComponent;
declare const BadgeIndianRupeeIcon: IconComponent;
declare const BadgeInfo: IconComponent;
declare const BadgeInfoIcon: IconComponent;
declare const BadgeJapaneseYen: IconComponent;
declare const BadgeJapaneseYenIcon: IconComponent;
declare const BadgeMinus: IconComponent;
declare const BadgeMinusIcon: IconComponent;
declare const BadgePercent: IconComponent;
declare const BadgePercentIcon: IconComponent;
declare const BadgePlus: IconComponent;
declare const BadgePlusIcon: IconComponent;
declare const BadgePoundSterling: IconComponent;
declare const BadgePoundSterlingIcon: IconComponent;
declare const BadgeQuestionMark: IconComponent;
declare const BadgeQuestionMarkIcon: IconComponent;
declare const BadgeRussianRuble: IconComponent;
declare const BadgeRussianRubleIcon: IconComponent;
declare const BadgeSwissFranc: IconComponent;
declare const BadgeSwissFrancIcon: IconComponent;
declare const BadgeTurkishLira: IconComponent;
declare const BadgeTurkishLiraIcon: IconComponent;
declare const BadgeX: IconComponent;
declare const BadgeXIcon: IconComponent;
declare const BaggageClaim: IconComponent;
declare const BaggageClaimIcon: IconComponent;
declare const Balloon: IconComponent;
declare const BalloonIcon: IconComponent;
declare const Ban: IconComponent;
declare const Banana: IconComponent;
declare const BananaIcon: IconComponent;
declare const Bandage: IconComponent;
declare const BandageIcon: IconComponent;
declare const BangladeshiTaka: IconComponent;
declare const BangladeshiTakaIcon: IconComponent;
declare const BanIcon: IconComponent;
declare const Banknote: IconComponent;
declare const BanknoteArrowDown: IconComponent;
declare const BanknoteArrowDownIcon: IconComponent;
declare const BanknoteArrowUp: IconComponent;
declare const BanknoteArrowUpIcon: IconComponent;
declare const BanknoteCheck: IconComponent;
declare const BanknoteCheckIcon: IconComponent;
declare const BanknoteIcon: IconComponent;
declare const BanknoteX: IconComponent;
declare const BanknoteXIcon: IconComponent;
declare const BarChart: IconComponent;
declare const BarChart2: IconComponent;
declare const BarChart2Icon: IconComponent;
declare const BarChart3: IconComponent;
declare const BarChart3Icon: IconComponent;
declare const BarChart4: IconComponent;
declare const BarChart4Icon: IconComponent;
declare const BarChartBig: IconComponent;
declare const BarChartBigIcon: IconComponent;
declare const BarChartHorizontal: IconComponent;
declare const BarChartHorizontalBig: IconComponent;
declare const BarChartHorizontalBigIcon: IconComponent;
declare const BarChartHorizontalIcon: IconComponent;
declare const BarChartIcon: IconComponent;
declare const Barcode: IconComponent;
declare const BarcodeIcon: IconComponent;
declare const Barrel: IconComponent;
declare const BarrelIcon: IconComponent;
declare const Baseline: IconComponent;
declare const BaselineIcon: IconComponent;
declare const Bath: IconComponent;
declare const BathIcon: IconComponent;
declare const Battery: IconComponent;
declare const BatteryCharging: IconComponent;
declare const BatteryChargingIcon: IconComponent;
declare const BatteryFull: IconComponent;
declare const BatteryFullIcon: IconComponent;
declare const BatteryIcon: IconComponent;
declare const BatteryLow: IconComponent;
declare const BatteryLowIcon: IconComponent;
declare const BatteryMedium: IconComponent;
declare const BatteryMediumIcon: IconComponent;
declare const BatteryPlus: IconComponent;
declare const BatteryPlusIcon: IconComponent;
declare const BatteryWarning: IconComponent;
declare const BatteryWarningIcon: IconComponent;
declare const Beaker: IconComponent;
declare const BeakerIcon: IconComponent;
declare const Bean: IconComponent;
declare const BeanIcon: IconComponent;
declare const BeanOff: IconComponent;
declare const BeanOffIcon: IconComponent;
declare const Bed: IconComponent;
declare const BedDouble: IconComponent;
declare const BedDoubleIcon: IconComponent;
declare const BedIcon: IconComponent;
declare const BedSingle: IconComponent;
declare const BedSingleIcon: IconComponent;
declare const Beef: IconComponent;
declare const BeefIcon: IconComponent;
declare const BeefOff: IconComponent;
declare const BeefOffIcon: IconComponent;
declare const Beer: IconComponent;
declare const BeerIcon: IconComponent;
declare const BeerOff: IconComponent;
declare const BeerOffIcon: IconComponent;
declare const Bell: IconComponent;
declare const BellCheck: IconComponent;
declare const BellCheckIcon: IconComponent;
declare const BellDot: IconComponent;
declare const BellDotIcon: IconComponent;
declare const BellElectric: IconComponent;
declare const BellElectricIcon: IconComponent;
declare const BellIcon: IconComponent;
declare const BellMinus: IconComponent;
declare const BellMinusIcon: IconComponent;
declare const BellOff: IconComponent;
declare const BellOffIcon: IconComponent;
declare const BellPlus: IconComponent;
declare const BellPlusIcon: IconComponent;
declare const BellRing: IconComponent;
declare const BellRingIcon: IconComponent;
declare const BetweenHorizonalEnd: IconComponent;
declare const BetweenHorizonalEndIcon: IconComponent;
declare const BetweenHorizonalStart: IconComponent;
declare const BetweenHorizonalStartIcon: IconComponent;
declare const BetweenHorizontalEnd: IconComponent;
declare const BetweenHorizontalEndIcon: IconComponent;
declare const BetweenHorizontalStart: IconComponent;
declare const BetweenHorizontalStartIcon: IconComponent;
declare const BetweenVerticalEnd: IconComponent;
declare const BetweenVerticalEndIcon: IconComponent;
declare const BetweenVerticalStart: IconComponent;
declare const BetweenVerticalStartIcon: IconComponent;
declare const BicepsFlexed: IconComponent;
declare const BicepsFlexedIcon: IconComponent;
declare const Bike: IconComponent;
declare const BikeIcon: IconComponent;
declare const Binary: IconComponent;
declare const BinaryIcon: IconComponent;
declare const Binoculars: IconComponent;
declare const BinocularsIcon: IconComponent;
declare const Biohazard: IconComponent;
declare const BiohazardIcon: IconComponent;
declare const Bird: IconComponent;
declare const Birdhouse: IconComponent;
declare const BirdhouseIcon: IconComponent;
declare const BirdIcon: IconComponent;
declare const Bitcoin: IconComponent;
declare const BitcoinIcon: IconComponent;
declare const Blend: IconComponent;
declare const Blender: IconComponent;
declare const BlenderIcon: IconComponent;
declare const BlendIcon: IconComponent;
declare const Blinds: IconComponent;
declare const BlindsIcon: IconComponent;
declare const Blocks: IconComponent;
declare const BlocksIcon: IconComponent;
declare const Bluetooth: IconComponent;
declare const BluetoothConnected: IconComponent;
declare const BluetoothConnectedIcon: IconComponent;
declare const BluetoothIcon: IconComponent;
declare const BluetoothOff: IconComponent;
declare const BluetoothOffIcon: IconComponent;
declare const BluetoothSearching: IconComponent;
declare const BluetoothSearchingIcon: IconComponent;
declare const Bold: IconComponent;
declare const BoldIcon: IconComponent;
declare const Bolt: IconComponent;
declare const BoltIcon: IconComponent;
declare const Bomb: IconComponent;
declare const BombIcon: IconComponent;
declare const Bone: IconComponent;
declare const BoneFracture: IconComponent;
declare const BoneFractureIcon: IconComponent;
declare const BoneIcon: IconComponent;
declare const Book: IconComponent;
declare const BookA: IconComponent;
declare const BookAIcon: IconComponent;
declare const BookAlert: IconComponent;
declare const BookAlertIcon: IconComponent;
declare const BookAudio: IconComponent;
declare const BookAudioIcon: IconComponent;
declare const BookBookmark: IconComponent;
declare const BookBookmarkIcon: IconComponent;
declare const BookCheck: IconComponent;
declare const BookCheckIcon: IconComponent;
declare const BookCopy: IconComponent;
declare const BookCopyIcon: IconComponent;
declare const BookDashed: IconComponent;
declare const BookDashedIcon: IconComponent;
declare const BookDown: IconComponent;
declare const BookDownIcon: IconComponent;
declare const BookHeadphones: IconComponent;
declare const BookHeadphonesIcon: IconComponent;
declare const BookHeart: IconComponent;
declare const BookHeartIcon: IconComponent;
declare const BookIcon: IconComponent;
declare const BookImage: IconComponent;
declare const BookImageIcon: IconComponent;
declare const BookKey: IconComponent;
declare const BookKeyIcon: IconComponent;
declare const BookLock: IconComponent;
declare const BookLockIcon: IconComponent;
declare const Bookmark: IconComponent;
declare const BookmarkCheck: IconComponent;
declare const BookmarkCheckIcon: IconComponent;
declare const BookMarked: IconComponent;
declare const BookMarkedIcon: IconComponent;
declare const BookmarkIcon: IconComponent;
declare const BookmarkMinus: IconComponent;
declare const BookmarkMinusIcon: IconComponent;
declare const BookmarkOff: IconComponent;
declare const BookmarkOffIcon: IconComponent;
declare const BookmarkPlus: IconComponent;
declare const BookmarkPlusIcon: IconComponent;
declare const BookmarkX: IconComponent;
declare const BookmarkXIcon: IconComponent;
declare const BookMinus: IconComponent;
declare const BookMinusIcon: IconComponent;
declare const BookOpen: IconComponent;
declare const BookOpenCheck: IconComponent;
declare const BookOpenCheckIcon: IconComponent;
declare const BookOpenIcon: IconComponent;
declare const BookOpenText: IconComponent;
declare const BookOpenTextIcon: IconComponent;
declare const BookPlus: IconComponent;
declare const BookPlusIcon: IconComponent;
declare const BookSearch: IconComponent;
declare const BookSearchIcon: IconComponent;
declare const BookTemplate: IconComponent;
declare const BookTemplateIcon: IconComponent;
declare const BookText: IconComponent;
declare const BookTextIcon: IconComponent;
declare const BookType: IconComponent;
declare const BookTypeIcon: IconComponent;
declare const BookUp: IconComponent;
declare const BookUp2: IconComponent;
declare const BookUp2Icon: IconComponent;
declare const BookUpIcon: IconComponent;
declare const BookUser: IconComponent;
declare const BookUserIcon: IconComponent;
declare const BookX: IconComponent;
declare const BookXIcon: IconComponent;
declare const BoomBox: IconComponent;
declare const BoomBoxIcon: IconComponent;
declare const Bot: IconComponent;
declare const BotIcon: IconComponent;
declare const BotMessageSquare: IconComponent;
declare const BotMessageSquareIcon: IconComponent;
declare const BotOff: IconComponent;
declare const BotOffIcon: IconComponent;
declare const BottleWine: IconComponent;
declare const BottleWineIcon: IconComponent;
declare const BowArrow: IconComponent;
declare const BowArrowIcon: IconComponent;
declare const Box: IconComponent;
declare const Boxes: IconComponent;
declare const BoxesIcon: IconComponent;
declare const BoxIcon: IconComponent;
declare const BoxSelect: IconComponent;
declare const BoxSelectIcon: IconComponent;
declare const Braces: IconComponent;
declare const BracesIcon: IconComponent;
declare const Brackets: IconComponent;
declare const BracketsIcon: IconComponent;
declare const Brain: IconComponent;
declare const BrainCircuit: IconComponent;
declare const BrainCircuitIcon: IconComponent;
declare const BrainCog: IconComponent;
declare const BrainCogIcon: IconComponent;
declare const BrainIcon: IconComponent;
declare const BrickWall: IconComponent;
declare const BrickWallFire: IconComponent;
declare const BrickWallFireIcon: IconComponent;
declare const BrickWallIcon: IconComponent;
declare const BrickWallShield: IconComponent;
declare const BrickWallShieldIcon: IconComponent;
declare const Bridge: IconComponent;
declare const BridgeIcon: IconComponent;
declare const Briefcase: IconComponent;
declare const BriefcaseBusiness: IconComponent;
declare const BriefcaseBusinessIcon: IconComponent;
declare const BriefcaseConveyorBelt: IconComponent;
declare const BriefcaseConveyorBeltIcon: IconComponent;
declare const BriefcaseIcon: IconComponent;
declare const BriefcaseMedical: IconComponent;
declare const BriefcaseMedicalIcon: IconComponent;
declare const BriefcasePlus: IconComponent;
declare const BriefcasePlusIcon: IconComponent;
declare const BringToFront: IconComponent;
declare const BringToFrontIcon: IconComponent;
declare const Broccoli: IconComponent;
declare const BroccoliIcon: IconComponent;
declare const Broom: IconComponent;
declare const BroomIcon: IconComponent;
declare const BroomSparkles: IconComponent;
declare const BroomSparklesIcon: IconComponent;
declare const Brush: IconComponent;
declare const BrushCleaning: IconComponent;
declare const BrushCleaningIcon: IconComponent;
declare const BrushIcon: IconComponent;
declare const Bubbles: IconComponent;
declare const BubblesIcon: IconComponent;
declare const Bug: IconComponent;
declare const BugIcon: IconComponent;
declare const BugOff: IconComponent;
declare const BugOffIcon: IconComponent;
declare const BugPlay: IconComponent;
declare const BugPlayIcon: IconComponent;
declare const Building: IconComponent;
declare const Building2: IconComponent;
declare const Building2Icon: IconComponent;
declare const BuildingComplex: IconComponent;
declare const BuildingComplexIcon: IconComponent;
declare const BuildingComplexPlus: IconComponent;
declare const BuildingComplexPlusIcon: IconComponent;
declare const BuildingIcon: IconComponent;
declare const Bus: IconComponent;
declare const BusFront: IconComponent;
declare const BusFrontIcon: IconComponent;
declare const BusIcon: IconComponent;
declare const Cable: IconComponent;
declare const CableCar: IconComponent;
declare const CableCarIcon: IconComponent;
declare const CableIcon: IconComponent;
declare const Cake: IconComponent;
declare const CakeIcon: IconComponent;
declare const CakeSlice: IconComponent;
declare const CakeSliceIcon: IconComponent;
declare const Calculator: IconComponent;
declare const CalculatorIcon: IconComponent;
declare const Calendar: IconComponent;
declare const Calendar1: IconComponent;
declare const Calendar1Icon: IconComponent;
declare const CalendarArrowDown: IconComponent;
declare const CalendarArrowDownIcon: IconComponent;
declare const CalendarArrowUp: IconComponent;
declare const CalendarArrowUpIcon: IconComponent;
declare const CalendarCheck: IconComponent;
declare const CalendarCheck2: IconComponent;
declare const CalendarCheck2Icon: IconComponent;
declare const CalendarCheckIcon: IconComponent;
declare const CalendarChevronsRight: IconComponent;
declare const CalendarChevronsRightIcon: IconComponent;
declare const CalendarClock: IconComponent;
declare const CalendarClockIcon: IconComponent;
declare const CalendarCog: IconComponent;
declare const CalendarCogIcon: IconComponent;
declare const CalendarDays: IconComponent;
declare const CalendarDaysIcon: IconComponent;
declare const CalendarFold: IconComponent;
declare const CalendarFoldIcon: IconComponent;
declare const CalendarHeart: IconComponent;
declare const CalendarHeartIcon: IconComponent;
declare const CalendarIcon: IconComponent;
declare const CalendarMinus: IconComponent;
declare const CalendarMinus2: IconComponent;
declare const CalendarMinus2Icon: IconComponent;
declare const CalendarMinusIcon: IconComponent;
declare const CalendarOff: IconComponent;
declare const CalendarOffIcon: IconComponent;
declare const CalendarPlus: IconComponent;
declare const CalendarPlus2: IconComponent;
declare const CalendarPlus2Icon: IconComponent;
declare const CalendarPlusIcon: IconComponent;
declare const CalendarRange: IconComponent;
declare const CalendarRangeIcon: IconComponent;
declare const Calendars: IconComponent;
declare const CalendarSearch: IconComponent;
declare const CalendarSearchIcon: IconComponent;
declare const CalendarsIcon: IconComponent;
declare const CalendarSync: IconComponent;
declare const CalendarSyncIcon: IconComponent;
declare const CalendarX: IconComponent;
declare const CalendarX2: IconComponent;
declare const CalendarX2Icon: IconComponent;
declare const CalendarXIcon: IconComponent;
declare const Camera: IconComponent;
declare const CameraIcon: IconComponent;
declare const CameraOff: IconComponent;
declare const CameraOffIcon: IconComponent;
declare const Can: IconComponent;
declare const CandlestickChart: IconComponent;
declare const CandlestickChartIcon: IconComponent;
declare const Candy: IconComponent;
declare const CandyCane: IconComponent;
declare const CandyCaneIcon: IconComponent;
declare const CandyIcon: IconComponent;
declare const CandyOff: IconComponent;
declare const CandyOffIcon: IconComponent;
declare const CanIcon: IconComponent;
declare const Cannabis: IconComponent;
declare const CannabisIcon: IconComponent;
declare const CannabisOff: IconComponent;
declare const CannabisOffIcon: IconComponent;
declare const CanSoda: IconComponent;
declare const CanSodaIcon: IconComponent;
declare const Captions: IconComponent;
declare const CaptionsIcon: IconComponent;
declare const CaptionsOff: IconComponent;
declare const CaptionsOffIcon: IconComponent;
declare const Car: IconComponent;
declare const Caravan: IconComponent;
declare const CaravanIcon: IconComponent;
declare const CarBattery: IconComponent;
declare const CarBatteryIcon: IconComponent;
declare const CardSim: IconComponent;
declare const CardSimIcon: IconComponent;
declare const CarFront: IconComponent;
declare const CarFrontIcon: IconComponent;
declare const CarIcon: IconComponent;
declare const Carrot: IconComponent;
declare const CarrotIcon: IconComponent;
declare const CarTaxiFront: IconComponent;
declare const CarTaxiFrontIcon: IconComponent;
declare const Carton: IconComponent;
declare const CartonIcon: IconComponent;
declare const CartonOff: IconComponent;
declare const CartonOffIcon: IconComponent;
declare const CaseLower: IconComponent;
declare const CaseLowerIcon: IconComponent;
declare const CaseSensitive: IconComponent;
declare const CaseSensitiveIcon: IconComponent;
declare const CaseUpper: IconComponent;
declare const CaseUpperIcon: IconComponent;
declare const CassetteTape: IconComponent;
declare const CassetteTapeIcon: IconComponent;
declare const Cast: IconComponent;
declare const CastIcon: IconComponent;
declare const Castle: IconComponent;
declare const CastleIcon: IconComponent;
declare const Cat: IconComponent;
declare const CatIcon: IconComponent;
declare const Cctv: IconComponent;
declare const CctvIcon: IconComponent;
declare const CctvOff: IconComponent;
declare const CctvOffIcon: IconComponent;
declare const ChartArea: IconComponent;
declare const ChartAreaIcon: IconComponent;
declare const ChartBar: IconComponent;
declare const ChartBarBig: IconComponent;
declare const ChartBarBigIcon: IconComponent;
declare const ChartBarDecreasing: IconComponent;
declare const ChartBarDecreasingIcon: IconComponent;
declare const ChartBarIcon: IconComponent;
declare const ChartBarIncreasing: IconComponent;
declare const ChartBarIncreasingIcon: IconComponent;
declare const ChartBarStacked: IconComponent;
declare const ChartBarStackedIcon: IconComponent;
declare const ChartCandlestick: IconComponent;
declare const ChartCandlestickIcon: IconComponent;
declare const ChartColumn: IconComponent;
declare const ChartColumnBig: IconComponent;
declare const ChartColumnBigIcon: IconComponent;
declare const ChartColumnDecreasing: IconComponent;
declare const ChartColumnDecreasingIcon: IconComponent;
declare const ChartColumnIcon: IconComponent;
declare const ChartColumnIncreasing: IconComponent;
declare const ChartColumnIncreasingIcon: IconComponent;
declare const ChartColumnStacked: IconComponent;
declare const ChartColumnStackedIcon: IconComponent;
declare const ChartGantt: IconComponent;
declare const ChartGanttIcon: IconComponent;
declare const ChartLine: IconComponent;
declare const ChartLineIcon: IconComponent;
declare const ChartNetwork: IconComponent;
declare const ChartNetworkIcon: IconComponent;
declare const ChartNoAxesColumn: IconComponent;
declare const ChartNoAxesColumnDecreasing: IconComponent;
declare const ChartNoAxesColumnDecreasingIcon: IconComponent;
declare const ChartNoAxesColumnIcon: IconComponent;
declare const ChartNoAxesColumnIncreasing: IconComponent;
declare const ChartNoAxesColumnIncreasingIcon: IconComponent;
declare const ChartNoAxesCombined: IconComponent;
declare const ChartNoAxesCombinedIcon: IconComponent;
declare const ChartNoAxesGantt: IconComponent;
declare const ChartNoAxesGanttIcon: IconComponent;
declare const ChartPie: IconComponent;
declare const ChartPieIcon: IconComponent;
declare const ChartScatter: IconComponent;
declare const ChartScatterIcon: IconComponent;
declare const ChartSpline: IconComponent;
declare const ChartSplineIcon: IconComponent;
declare const Check: IconComponent;
declare const CheckCheck: IconComponent;
declare const CheckCheckIcon: IconComponent;
declare const CheckCircle: IconComponent;
declare const CheckCircle2: IconComponent;
declare const CheckCircle2Icon: IconComponent;
declare const CheckCircleIcon: IconComponent;
declare const CheckIcon: IconComponent;
declare const CheckLine: IconComponent;
declare const CheckLineIcon: IconComponent;
declare const CheckSquare: IconComponent;
declare const CheckSquare2: IconComponent;
declare const CheckSquare2Icon: IconComponent;
declare const CheckSquareIcon: IconComponent;
declare const ChefHat: IconComponent;
declare const ChefHatIcon: IconComponent;
declare const Cherry: IconComponent;
declare const CherryIcon: IconComponent;
declare const ChessBishop: IconComponent;
declare const ChessBishopIcon: IconComponent;
declare const ChessKing: IconComponent;
declare const ChessKingIcon: IconComponent;
declare const ChessKnight: IconComponent;
declare const ChessKnightIcon: IconComponent;
declare const ChessPawn: IconComponent;
declare const ChessPawnIcon: IconComponent;
declare const ChessQueen: IconComponent;
declare const ChessQueenIcon: IconComponent;
declare const ChessRook: IconComponent;
declare const ChessRookIcon: IconComponent;
declare const ChevronDown: IconComponent;
declare const ChevronDownCircle: IconComponent;
declare const ChevronDownCircleIcon: IconComponent;
declare const ChevronDownIcon: IconComponent;
declare const ChevronDownSquare: IconComponent;
declare const ChevronDownSquareIcon: IconComponent;
declare const ChevronFirst: IconComponent;
declare const ChevronFirstIcon: IconComponent;
declare const ChevronLast: IconComponent;
declare const ChevronLastIcon: IconComponent;
declare const ChevronLeft: IconComponent;
declare const ChevronLeftCircle: IconComponent;
declare const ChevronLeftCircleIcon: IconComponent;
declare const ChevronLeftIcon: IconComponent;
declare const ChevronLeftSquare: IconComponent;
declare const ChevronLeftSquareIcon: IconComponent;
declare const ChevronRight: IconComponent;
declare const ChevronRightCircle: IconComponent;
declare const ChevronRightCircleIcon: IconComponent;
declare const ChevronRightIcon: IconComponent;
declare const ChevronRightSquare: IconComponent;
declare const ChevronRightSquareIcon: IconComponent;
declare const ChevronsDown: IconComponent;
declare const ChevronsDownIcon: IconComponent;
declare const ChevronsDownUp: IconComponent;
declare const ChevronsDownUpIcon: IconComponent;
declare const ChevronsLeft: IconComponent;
declare const ChevronsLeftIcon: IconComponent;
declare const ChevronsLeftRight: IconComponent;
declare const ChevronsLeftRightEllipsis: IconComponent;
declare const ChevronsLeftRightEllipsisIcon: IconComponent;
declare const ChevronsLeftRightIcon: IconComponent;
declare const ChevronsRight: IconComponent;
declare const ChevronsRightIcon: IconComponent;
declare const ChevronsRightLeft: IconComponent;
declare const ChevronsRightLeftIcon: IconComponent;
declare const ChevronsUp: IconComponent;
declare const ChevronsUpDown: IconComponent;
declare const ChevronsUpDownIcon: IconComponent;
declare const ChevronsUpIcon: IconComponent;
declare const ChevronUp: IconComponent;
declare const ChevronUpCircle: IconComponent;
declare const ChevronUpCircleIcon: IconComponent;
declare const ChevronUpIcon: IconComponent;
declare const ChevronUpSquare: IconComponent;
declare const ChevronUpSquareIcon: IconComponent;
declare const Church: IconComponent;
declare const ChurchIcon: IconComponent;
declare const Cigarette: IconComponent;
declare const CigaretteIcon: IconComponent;
declare const CigaretteOff: IconComponent;
declare const CigaretteOffIcon: IconComponent;
declare const Circle: IconComponent;
declare const CircleAlert: IconComponent;
declare const CircleAlertIcon: IconComponent;
declare const CircleArrowDown: IconComponent;
declare const CircleArrowDownIcon: IconComponent;
declare const CircleArrowLeft: IconComponent;
declare const CircleArrowLeftIcon: IconComponent;
declare const CircleArrowOutDownLeft: IconComponent;
declare const CircleArrowOutDownLeftIcon: IconComponent;
declare const CircleArrowOutDownRight: IconComponent;
declare const CircleArrowOutDownRightIcon: IconComponent;
declare const CircleArrowOutUpLeft: IconComponent;
declare const CircleArrowOutUpLeftIcon: IconComponent;
declare const CircleArrowOutUpRight: IconComponent;
declare const CircleArrowOutUpRightIcon: IconComponent;
declare const CircleArrowRight: IconComponent;
declare const CircleArrowRightIcon: IconComponent;
declare const CircleArrowUp: IconComponent;
declare const CircleArrowUpIcon: IconComponent;
declare const CircleCheck: IconComponent;
declare const CircleCheckBig: IconComponent;
declare const CircleCheckBigIcon: IconComponent;
declare const CircleCheckIcon: IconComponent;
declare const CircleChevronDown: IconComponent;
declare const CircleChevronDownIcon: IconComponent;
declare const CircleChevronLeft: IconComponent;
declare const CircleChevronLeftIcon: IconComponent;
declare const CircleChevronRight: IconComponent;
declare const CircleChevronRightIcon: IconComponent;
declare const CircleChevronUp: IconComponent;
declare const CircleChevronUpIcon: IconComponent;
declare const CircleDashed: IconComponent;
declare const CircleDashedCheck: IconComponent;
declare const CircleDashedCheckIcon: IconComponent;
declare const CircleDashedIcon: IconComponent;
declare const CircleDivide: IconComponent;
declare const CircleDivideIcon: IconComponent;
declare const CircleDollarSign: IconComponent;
declare const CircleDollarSignIcon: IconComponent;
declare const CircleDot: IconComponent;
declare const CircleDotDashed: IconComponent;
declare const CircleDotDashedIcon: IconComponent;
declare const CircleDotIcon: IconComponent;
declare const CircleEllipsis: IconComponent;
declare const CircleEllipsisIcon: IconComponent;
declare const CircleEqual: IconComponent;
declare const CircleEqualIcon: IconComponent;
declare const CircleEuro: IconComponent;
declare const CircleEuroIcon: IconComponent;
declare const CircleFadingArrowUp: IconComponent;
declare const CircleFadingArrowUpIcon: IconComponent;
declare const CircleFadingPlus: IconComponent;
declare const CircleFadingPlusIcon: IconComponent;
declare const CircleGauge: IconComponent;
declare const CircleGaugeIcon: IconComponent;
declare const CircleHelp: IconComponent;
declare const CircleHelpIcon: IconComponent;
declare const CircleIcon: IconComponent;
declare const CircleMinus: IconComponent;
declare const CircleMinusIcon: IconComponent;
declare const CircleOff: IconComponent;
declare const CircleOffIcon: IconComponent;
declare const CircleParking: IconComponent;
declare const CircleParkingIcon: IconComponent;
declare const CircleParkingOff: IconComponent;
declare const CircleParkingOffIcon: IconComponent;
declare const CirclePause: IconComponent;
declare const CirclePauseIcon: IconComponent;
declare const CirclePercent: IconComponent;
declare const CirclePercentIcon: IconComponent;
declare const CirclePile: IconComponent;
declare const CirclePileIcon: IconComponent;
declare const CirclePlay: IconComponent;
declare const CirclePlayIcon: IconComponent;
declare const CirclePlus: IconComponent;
declare const CirclePlusIcon: IconComponent;
declare const CirclePoundSterling: IconComponent;
declare const CirclePoundSterlingIcon: IconComponent;
declare const CirclePower: IconComponent;
declare const CirclePowerIcon: IconComponent;
declare const CircleQuestionMark: IconComponent;
declare const CircleQuestionMarkIcon: IconComponent;
declare const CircleSlash: IconComponent;
declare const CircleSlash2: IconComponent;
declare const CircleSlash2Icon: IconComponent;
declare const CircleSlashed: IconComponent;
declare const CircleSlashedIcon: IconComponent;
declare const CircleSlashIcon: IconComponent;
declare const CircleSmall: IconComponent;
declare const CircleSmallIcon: IconComponent;
declare const CircleStar: IconComponent;
declare const CircleStarIcon: IconComponent;
declare const CircleStop: IconComponent;
declare const CircleStopIcon: IconComponent;
declare const CircleUser: IconComponent;
declare const CircleUserIcon: IconComponent;
declare const CircleUserRound: IconComponent;
declare const CircleUserRoundIcon: IconComponent;
declare const CircleX: IconComponent;
declare const CircleXIcon: IconComponent;
declare const CircuitBoard: IconComponent;
declare const CircuitBoardIcon: IconComponent;
declare const Citrus: IconComponent;
declare const CitrusIcon: IconComponent;
declare const Clapperboard: IconComponent;
declare const ClapperboardIcon: IconComponent;
declare const ClefAlto: IconComponent;
declare const ClefAltoIcon: IconComponent;
declare const ClefBass: IconComponent;
declare const ClefBassIcon: IconComponent;
declare const ClefTreble: IconComponent;
declare const ClefTrebleIcon: IconComponent;
declare const Clipboard: IconComponent;
declare const ClipboardCheck: IconComponent;
declare const ClipboardCheckIcon: IconComponent;
declare const ClipboardClock: IconComponent;
declare const ClipboardClockIcon: IconComponent;
declare const ClipboardCopy: IconComponent;
declare const ClipboardCopyIcon: IconComponent;
declare const ClipboardEdit: IconComponent;
declare const ClipboardEditIcon: IconComponent;
declare const ClipboardIcon: IconComponent;
declare const ClipboardList: IconComponent;
declare const ClipboardListIcon: IconComponent;
declare const ClipboardMinus: IconComponent;
declare const ClipboardMinusIcon: IconComponent;
declare const ClipboardPaste: IconComponent;
declare const ClipboardPasteIcon: IconComponent;
declare const ClipboardPen: IconComponent;
declare const ClipboardPenIcon: IconComponent;
declare const ClipboardPenLine: IconComponent;
declare const ClipboardPenLineIcon: IconComponent;
declare const ClipboardPlus: IconComponent;
declare const ClipboardPlusIcon: IconComponent;
declare const ClipboardSignature: IconComponent;
declare const ClipboardSignatureIcon: IconComponent;
declare const ClipboardType: IconComponent;
declare const ClipboardTypeIcon: IconComponent;
declare const ClipboardX: IconComponent;
declare const ClipboardXIcon: IconComponent;
declare const Clock: IconComponent;
declare const Clock1: IconComponent;
declare const Clock10: IconComponent;
declare const Clock10Icon: IconComponent;
declare const Clock11: IconComponent;
declare const Clock11Icon: IconComponent;
declare const Clock12: IconComponent;
declare const Clock12Icon: IconComponent;
declare const Clock1Icon: IconComponent;
declare const Clock2: IconComponent;
declare const Clock2Icon: IconComponent;
declare const Clock3: IconComponent;
declare const Clock3Icon: IconComponent;
declare const Clock4: IconComponent;
declare const Clock4Icon: IconComponent;
declare const Clock5: IconComponent;
declare const Clock5Icon: IconComponent;
declare const Clock6: IconComponent;
declare const Clock6Icon: IconComponent;
declare const Clock7: IconComponent;
declare const Clock7Icon: IconComponent;
declare const Clock8: IconComponent;
declare const Clock8Icon: IconComponent;
declare const Clock9: IconComponent;
declare const Clock9Icon: IconComponent;
declare const ClockAlert: IconComponent;
declare const ClockAlertIcon: IconComponent;
declare const ClockArrowDown: IconComponent;
declare const ClockArrowDownIcon: IconComponent;
declare const ClockArrowLeft: IconComponent;
declare const ClockArrowLeftIcon: IconComponent;
declare const ClockArrowRight: IconComponent;
declare const ClockArrowRightIcon: IconComponent;
declare const ClockArrowUp: IconComponent;
declare const ClockArrowUpIcon: IconComponent;
declare const ClockCheck: IconComponent;
declare const ClockCheckIcon: IconComponent;
declare const ClockFading: IconComponent;
declare const ClockFadingIcon: IconComponent;
declare const ClockIcon: IconComponent;
declare const ClockPlus: IconComponent;
declare const ClockPlusIcon: IconComponent;
declare const ClosedCaption: IconComponent;
declare const ClosedCaptionIcon: IconComponent;
declare const Cloud: IconComponent;
declare const CloudAlert: IconComponent;
declare const CloudAlertIcon: IconComponent;
declare const CloudBackup: IconComponent;
declare const CloudBackupIcon: IconComponent;
declare const CloudCheck: IconComponent;
declare const CloudCheckIcon: IconComponent;
declare const CloudCog: IconComponent;
declare const CloudCogIcon: IconComponent;
declare const CloudDownload: IconComponent;
declare const CloudDownloadIcon: IconComponent;
declare const CloudDrizzle: IconComponent;
declare const CloudDrizzleIcon: IconComponent;
declare const CloudFog: IconComponent;
declare const CloudFogIcon: IconComponent;
declare const CloudHail: IconComponent;
declare const CloudHailIcon: IconComponent;
declare const CloudIcon: IconComponent;
declare const CloudLightning: IconComponent;
declare const CloudLightningIcon: IconComponent;
declare const CloudMoon: IconComponent;
declare const CloudMoonIcon: IconComponent;
declare const CloudMoonRain: IconComponent;
declare const CloudMoonRainIcon: IconComponent;
declare const CloudOff: IconComponent;
declare const CloudOffIcon: IconComponent;
declare const CloudRain: IconComponent;
declare const CloudRainIcon: IconComponent;
declare const CloudRainWind: IconComponent;
declare const CloudRainWindIcon: IconComponent;
declare const CloudSnow: IconComponent;
declare const CloudSnowIcon: IconComponent;
declare const CloudSun: IconComponent;
declare const CloudSunIcon: IconComponent;
declare const CloudSunRain: IconComponent;
declare const CloudSunRainIcon: IconComponent;
declare const CloudSync: IconComponent;
declare const CloudSyncIcon: IconComponent;
declare const CloudUpload: IconComponent;
declare const CloudUploadIcon: IconComponent;
declare const Cloudy: IconComponent;
declare const CloudyIcon: IconComponent;
declare const Clover: IconComponent;
declare const CloverIcon: IconComponent;
declare const Club: IconComponent;
declare const ClubIcon: IconComponent;
declare const Code: IconComponent;
declare const Code2: IconComponent;
declare const Code2Icon: IconComponent;
declare const CodeIcon: IconComponent;
declare const CodeSquare: IconComponent;
declare const CodeSquareIcon: IconComponent;
declare const CodeXml: IconComponent;
declare const CodeXmlIcon: IconComponent;
declare const Coffee: IconComponent;
declare const CoffeeIcon: IconComponent;
declare const Cog: IconComponent;
declare const CogIcon: IconComponent;
declare const Coins: IconComponent;
declare const CoinsIcon: IconComponent;
declare const Columns: IconComponent;
declare const Columns2: IconComponent;
declare const Columns2Icon: IconComponent;
declare const Columns3: IconComponent;
declare const Columns3Cog: IconComponent;
declare const Columns3CogIcon: IconComponent;
declare const Columns3Icon: IconComponent;
declare const Columns4: IconComponent;
declare const Columns4Icon: IconComponent;
declare const ColumnsIcon: IconComponent;
declare const ColumnsSettings: IconComponent;
declare const ColumnsSettingsIcon: IconComponent;
declare const Combine: IconComponent;
declare const CombineIcon: IconComponent;
declare const Command: IconComponent;
declare const CommandIcon: IconComponent;
declare const Compass: IconComponent;
declare const CompassIcon: IconComponent;
declare const Component: IconComponent;
declare const ComponentIcon: IconComponent;
declare const Computer: IconComponent;
declare const ComputerIcon: IconComponent;
declare const ConciergeBell: IconComponent;
declare const ConciergeBellIcon: IconComponent;
declare const Cone: IconComponent;
declare const ConeIcon: IconComponent;
declare const Construction: IconComponent;
declare const ConstructionIcon: IconComponent;
declare const Contact: IconComponent;
declare const Contact2: IconComponent;
declare const Contact2Icon: IconComponent;
declare const ContactIcon: IconComponent;
declare const ContactRound: IconComponent;
declare const ContactRoundIcon: IconComponent;
declare const Container: IconComponent;
declare const ContainerIcon: IconComponent;
declare const Contrast: IconComponent;
declare const ContrastIcon: IconComponent;
declare const Cookie: IconComponent;
declare const CookieIcon: IconComponent;
declare const CookingPot: IconComponent;
declare const CookingPotIcon: IconComponent;
declare const Copy: IconComponent;
declare const CopyCheck: IconComponent;
declare const CopyCheckIcon: IconComponent;
declare const CopyIcon: IconComponent;
declare const Copyleft: IconComponent;
declare const CopyleftIcon: IconComponent;
declare const CopyMinus: IconComponent;
declare const CopyMinusIcon: IconComponent;
declare const CopyPlus: IconComponent;
declare const CopyPlusIcon: IconComponent;
declare const Copyright: IconComponent;
declare const CopyrightIcon: IconComponent;
declare const CopySlash: IconComponent;
declare const CopySlashIcon: IconComponent;
declare const CopyX: IconComponent;
declare const CopyXIcon: IconComponent;
declare const CornerDownLeft: IconComponent;
declare const CornerDownLeftIcon: IconComponent;
declare const CornerDownRight: IconComponent;
declare const CornerDownRightIcon: IconComponent;
declare const CornerLeftDown: IconComponent;
declare const CornerLeftDownIcon: IconComponent;
declare const CornerLeftUp: IconComponent;
declare const CornerLeftUpIcon: IconComponent;
declare const CornerRightDown: IconComponent;
declare const CornerRightDownIcon: IconComponent;
declare const CornerRightUp: IconComponent;
declare const CornerRightUpIcon: IconComponent;
declare const CornerUpLeft: IconComponent;
declare const CornerUpLeftIcon: IconComponent;
declare const CornerUpRight: IconComponent;
declare const CornerUpRightIcon: IconComponent;
declare const Cpu: IconComponent;
declare const CpuIcon: IconComponent;
declare const CreativeCommons: IconComponent;
declare const CreativeCommonsIcon: IconComponent;
declare const CreditCard: IconComponent;
declare const CreditCardCheck: IconComponent;
declare const CreditCardCheckIcon: IconComponent;
declare const CreditCardIcon: IconComponent;
declare const CreditCardMinus: IconComponent;
declare const CreditCardMinusIcon: IconComponent;
declare const CreditCardPlus: IconComponent;
declare const CreditCardPlusIcon: IconComponent;
declare const CreditCardReader: IconComponent;
declare const CreditCardReaderIcon: IconComponent;
declare const CreditCardX: IconComponent;
declare const CreditCardXIcon: IconComponent;
declare const Croissant: IconComponent;
declare const CroissantIcon: IconComponent;
declare const Crop: IconComponent;
declare const CropIcon: IconComponent;
declare const Cross: IconComponent;
declare const Crosshair: IconComponent;
declare const CrosshairIcon: IconComponent;
declare const CrossIcon: IconComponent;
declare const Crown: IconComponent;
declare const CrownIcon: IconComponent;
declare const Cuboid: IconComponent;
declare const CuboidIcon: IconComponent;
declare const Cupcake: IconComponent;
declare const CupcakeIcon: IconComponent;
declare const CupSoda: IconComponent;
declare const CupSodaIcon: IconComponent;
declare const CurlyBraces: IconComponent;
declare const CurlyBracesIcon: IconComponent;
declare const Currency: IconComponent;
declare const CurrencyIcon: IconComponent;
declare const Cylinder: IconComponent;
declare const CylinderIcon: IconComponent;
declare const Dam: IconComponent;
declare const DamIcon: IconComponent;
declare const Database: IconComponent;
declare const DatabaseArrowDown: IconComponent;
declare const DatabaseArrowDownIcon: IconComponent;
declare const DatabaseArrowUp: IconComponent;
declare const DatabaseArrowUpIcon: IconComponent;
declare const DatabaseBackup: IconComponent;
declare const DatabaseBackupIcon: IconComponent;
declare const DatabaseCheck: IconComponent;
declare const DatabaseCheckIcon: IconComponent;
declare const DatabaseIcon: IconComponent;
declare const DatabaseMinus: IconComponent;
declare const DatabaseMinusIcon: IconComponent;
declare const DatabasePlus: IconComponent;
declare const DatabasePlusIcon: IconComponent;
declare const DatabaseSearch: IconComponent;
declare const DatabaseSearchIcon: IconComponent;
declare const DatabaseX: IconComponent;
declare const DatabaseXIcon: IconComponent;
declare const DatabaseZap: IconComponent;
declare const DatabaseZapIcon: IconComponent;
declare const DecimalsArrowLeft: IconComponent;
declare const DecimalsArrowLeftIcon: IconComponent;
declare const DecimalsArrowRight: IconComponent;
declare const DecimalsArrowRightIcon: IconComponent;
declare const Delete: IconComponent;
declare const DeleteIcon: IconComponent;
declare const Dessert: IconComponent;
declare const DessertIcon: IconComponent;
declare const Diameter: IconComponent;
declare const DiameterIcon: IconComponent;
declare const Diamond: IconComponent;
declare const DiamondIcon: IconComponent;
declare const DiamondMinus: IconComponent;
declare const DiamondMinusIcon: IconComponent;
declare const DiamondPercent: IconComponent;
declare const DiamondPercentIcon: IconComponent;
declare const DiamondPlus: IconComponent;
declare const DiamondPlusIcon: IconComponent;
declare const Dice1: IconComponent;
declare const Dice1Icon: IconComponent;
declare const Dice2: IconComponent;
declare const Dice2Icon: IconComponent;
declare const Dice3: IconComponent;
declare const Dice3Icon: IconComponent;
declare const Dice4: IconComponent;
declare const Dice4Icon: IconComponent;
declare const Dice5: IconComponent;
declare const Dice5Icon: IconComponent;
declare const Dice6: IconComponent;
declare const Dice6Icon: IconComponent;
declare const Dices: IconComponent;
declare const DicesIcon: IconComponent;
declare const Diff: IconComponent;
declare const DiffIcon: IconComponent;
declare const Disc: IconComponent;
declare const Disc2: IconComponent;
declare const Disc2Icon: IconComponent;
declare const Disc3: IconComponent;
declare const Disc3Icon: IconComponent;
declare const DiscAlbum: IconComponent;
declare const DiscAlbumIcon: IconComponent;
declare const DiscIcon: IconComponent;
declare const Divide: IconComponent;
declare const DivideCircle: IconComponent;
declare const DivideCircleIcon: IconComponent;
declare const DivideIcon: IconComponent;
declare const DivideSquare: IconComponent;
declare const DivideSquareIcon: IconComponent;
declare const Dna: IconComponent;
declare const DnaIcon: IconComponent;
declare const DnaOff: IconComponent;
declare const DnaOffIcon: IconComponent;
declare const Dock: IconComponent;
declare const DockIcon: IconComponent;
declare const Dog: IconComponent;
declare const DogIcon: IconComponent;
declare const DollarSign: IconComponent;
declare const DollarSignIcon: IconComponent;
declare const Dome: IconComponent;
declare const DomeIcon: IconComponent;
declare const Donut: IconComponent;
declare const DonutIcon: IconComponent;
declare const DoorClosed: IconComponent;
declare const DoorClosedCog: IconComponent;
declare const DoorClosedCogIcon: IconComponent;
declare const DoorClosedIcon: IconComponent;
declare const DoorClosedLocked: IconComponent;
declare const DoorClosedLockedIcon: IconComponent;
declare const DoorClosedPackage: IconComponent;
declare const DoorClosedPackageIcon: IconComponent;
declare const DoorOpen: IconComponent;
declare const DoorOpenIcon: IconComponent;
declare const DoorStairwell: IconComponent;
declare const DoorStairwellIcon: IconComponent;
declare const Dot: IconComponent;
declare const DotIcon: IconComponent;
declare const DotSquare: IconComponent;
declare const DotSquareIcon: IconComponent;
declare const Download: IconComponent;
declare const DownloadCloud: IconComponent;
declare const DownloadCloudIcon: IconComponent;
declare const DownloadIcon: IconComponent;
declare const DraftingCompass: IconComponent;
declare const DraftingCompassIcon: IconComponent;
declare const Drama: IconComponent;
declare const DramaIcon: IconComponent;
declare const Drill: IconComponent;
declare const DrillIcon: IconComponent;
declare const Drone: IconComponent;
declare const DroneIcon: IconComponent;
declare const Droplet: IconComponent;
declare const DropletIcon: IconComponent;
declare const DropletOff: IconComponent;
declare const DropletOffIcon: IconComponent;
declare const Droplets: IconComponent;
declare const DropletsIcon: IconComponent;
declare const Drum: IconComponent;
declare const DrumIcon: IconComponent;
declare const Drumstick: IconComponent;
declare const DrumstickIcon: IconComponent;
declare const Dumbbell: IconComponent;
declare const DumbbellIcon: IconComponent;
declare const Ear: IconComponent;
declare const EarIcon: IconComponent;
declare const EarOff: IconComponent;
declare const EarOffIcon: IconComponent;
declare const Earth: IconComponent;
declare const EarthIcon: IconComponent;
declare const EarthLock: IconComponent;
declare const EarthLockIcon: IconComponent;
declare const Eclipse: IconComponent;
declare const EclipseIcon: IconComponent;
declare const Edit: IconComponent;
declare const Edit2: IconComponent;
declare const Edit2Icon: IconComponent;
declare const Edit3: IconComponent;
declare const Edit3Icon: IconComponent;
declare const EditIcon: IconComponent;
declare const Egg: IconComponent;
declare const EggFried: IconComponent;
declare const EggFriedIcon: IconComponent;
declare const EggIcon: IconComponent;
declare const EggOff: IconComponent;
declare const EggOffIcon: IconComponent;
declare const Eject: IconComponent;
declare const EjectIcon: IconComponent;
declare const Ellipse: IconComponent;
declare const EllipseIcon: IconComponent;
declare const Ellipsis: IconComponent;
declare const EllipsisIcon: IconComponent;
declare const EllipsisVertical: IconComponent;
declare const EllipsisVerticalIcon: IconComponent;
declare const Engine: IconComponent;
declare const EngineIcon: IconComponent;
declare const Equal: IconComponent;
declare const EqualApproximately: IconComponent;
declare const EqualApproximatelyIcon: IconComponent;
declare const EqualApproximatelyNot: IconComponent;
declare const EqualApproximatelyNotIcon: IconComponent;
declare const EqualIcon: IconComponent;
declare const EqualNot: IconComponent;
declare const EqualNotIcon: IconComponent;
declare const EqualSquare: IconComponent;
declare const EqualSquareIcon: IconComponent;
declare const Eraser: IconComponent;
declare const EraserIcon: IconComponent;
declare const EthernetPort: IconComponent;
declare const EthernetPortIcon: IconComponent;
declare const Euro: IconComponent;
declare const EuroIcon: IconComponent;
declare const EvCharger: IconComponent;
declare const EvChargerIcon: IconComponent;
declare const Expand: IconComponent;
declare const ExpandIcon: IconComponent;
declare const ExternalLink: IconComponent;
declare const ExternalLinkIcon: IconComponent;
declare const Eye: IconComponent;
declare const EyeClosed: IconComponent;
declare const EyeClosedIcon: IconComponent;
declare const EyeDashed: IconComponent;
declare const EyeDashedIcon: IconComponent;
declare const EyeIcon: IconComponent;
declare const EyeOff: IconComponent;
declare const EyeOffIcon: IconComponent;
declare const FaceAngry: IconComponent;
declare const FaceAngryIcon: IconComponent;
declare const FaceExpressionless: IconComponent;
declare const FaceExpressionlessIcon: IconComponent;
declare const FaceGrinning: IconComponent;
declare const FaceGrinningIcon: IconComponent;
declare const FaceNeutral: IconComponent;
declare const FaceNeutralIcon: IconComponent;
declare const FaceSlightlyFrowning: IconComponent;
declare const FaceSlightlyFrowningIcon: IconComponent;
declare const FaceSlightlySmiling: IconComponent;
declare const FaceSlightlySmilingIcon: IconComponent;
declare const FaceSlightlySmilingPlus: IconComponent;
declare const FaceSlightlySmilingPlusIcon: IconComponent;
declare const Factory: IconComponent;
declare const FactoryIcon: IconComponent;
declare const Fan: IconComponent;
declare const FanIcon: IconComponent;
declare const FastForward: IconComponent;
declare const FastForwardIcon: IconComponent;
declare const Faucet: IconComponent;
declare const FaucetIcon: IconComponent;
declare const Feather: IconComponent;
declare const FeatherIcon: IconComponent;
declare const Fence: IconComponent;
declare const FenceIcon: IconComponent;
declare const FerrisWheel: IconComponent;
declare const FerrisWheelIcon: IconComponent;
declare const File: IconComponent;
declare const FileArchive: IconComponent;
declare const FileArchiveIcon: IconComponent;
declare const FileAudio: IconComponent;
declare const FileAudio2: IconComponent;
declare const FileAudio2Icon: IconComponent;
declare const FileAudioIcon: IconComponent;
declare const FileAxis3d: IconComponent;
declare const FileAxis3D: IconComponent;
declare const FileAxis3dIcon: IconComponent;
declare const FileAxis3DIcon: IconComponent;
declare const FileBadge: IconComponent;
declare const FileBadge2: IconComponent;
declare const FileBadge2Icon: IconComponent;
declare const FileBadgeIcon: IconComponent;
declare const FileBarChart: IconComponent;
declare const FileBarChart2: IconComponent;
declare const FileBarChart2Icon: IconComponent;
declare const FileBarChartIcon: IconComponent;
declare const FileBox: IconComponent;
declare const FileBoxIcon: IconComponent;
declare const FileBraces: IconComponent;
declare const FileBracesCorner: IconComponent;
declare const FileBracesCornerIcon: IconComponent;
declare const FileBracesIcon: IconComponent;
declare const FileChartColumn: IconComponent;
declare const FileChartColumnIcon: IconComponent;
declare const FileChartColumnIncreasing: IconComponent;
declare const FileChartColumnIncreasingIcon: IconComponent;
declare const FileChartLine: IconComponent;
declare const FileChartLineIcon: IconComponent;
declare const FileChartPie: IconComponent;
declare const FileChartPieIcon: IconComponent;
declare const FileCheck: IconComponent;
declare const FileCheck2: IconComponent;
declare const FileCheck2Icon: IconComponent;
declare const FileCheckCorner: IconComponent;
declare const FileCheckCornerIcon: IconComponent;
declare const FileCheckIcon: IconComponent;
declare const FileClock: IconComponent;
declare const FileClockIcon: IconComponent;
declare const FileCode: IconComponent;
declare const FileCode2: IconComponent;
declare const FileCode2Icon: IconComponent;
declare const FileCodeCorner: IconComponent;
declare const FileCodeCornerIcon: IconComponent;
declare const FileCodeIcon: IconComponent;
declare const FileCog: IconComponent;
declare const FileCog2: IconComponent;
declare const FileCog2Icon: IconComponent;
declare const FileCogIcon: IconComponent;
declare const FileDiff: IconComponent;
declare const FileDiffIcon: IconComponent;
declare const FileDigit: IconComponent;
declare const FileDigitIcon: IconComponent;
declare const FileDown: IconComponent;
declare const FileDownIcon: IconComponent;
declare const FileEdit: IconComponent;
declare const FileEditIcon: IconComponent;
declare const FileExclamationPoint: IconComponent;
declare const FileExclamationPointIcon: IconComponent;
declare const FileHeadphone: IconComponent;
declare const FileHeadphoneIcon: IconComponent;
declare const FileHeart: IconComponent;
declare const FileHeartIcon: IconComponent;
declare const FileIcon: IconComponent;
declare const FileImage: IconComponent;
declare const FileImageIcon: IconComponent;
declare const FileInput: IconComponent;
declare const FileInputIcon: IconComponent;
declare const FileJson: IconComponent;
declare const FileJson2: IconComponent;
declare const FileJson2Icon: IconComponent;
declare const FileJsonIcon: IconComponent;
declare const FileKey: IconComponent;
declare const FileKey2: IconComponent;
declare const FileKey2Icon: IconComponent;
declare const FileKeyIcon: IconComponent;
declare const FileLineChart: IconComponent;
declare const FileLineChartIcon: IconComponent;
declare const FileLock: IconComponent;
declare const FileLock2: IconComponent;
declare const FileLock2Icon: IconComponent;
declare const FileLockIcon: IconComponent;
declare const FileMinus: IconComponent;
declare const FileMinus2: IconComponent;
declare const FileMinus2Icon: IconComponent;
declare const FileMinusCorner: IconComponent;
declare const FileMinusCornerIcon: IconComponent;
declare const FileMinusIcon: IconComponent;
declare const FileMusic: IconComponent;
declare const FileMusicIcon: IconComponent;
declare const FileOutput: IconComponent;
declare const FileOutputIcon: IconComponent;
declare const FilePen: IconComponent;
declare const FilePenIcon: IconComponent;
declare const FilePenLine: IconComponent;
declare const FilePenLineIcon: IconComponent;
declare const FilePieChart: IconComponent;
declare const FilePieChartIcon: IconComponent;
declare const FilePlay: IconComponent;
declare const FilePlayIcon: IconComponent;
declare const FilePlus: IconComponent;
declare const FilePlus2: IconComponent;
declare const FilePlus2Icon: IconComponent;
declare const FilePlusCorner: IconComponent;
declare const FilePlusCornerIcon: IconComponent;
declare const FilePlusIcon: IconComponent;
declare const FileQuestion: IconComponent;
declare const FileQuestionIcon: IconComponent;
declare const FileQuestionMark: IconComponent;
declare const FileQuestionMarkIcon: IconComponent;
declare const Files: IconComponent;
declare const FileScan: IconComponent;
declare const FileScanIcon: IconComponent;
declare const FileSearch: IconComponent;
declare const FileSearch2: IconComponent;
declare const FileSearch2Icon: IconComponent;
declare const FileSearchCorner: IconComponent;
declare const FileSearchCornerIcon: IconComponent;
declare const FileSearchIcon: IconComponent;
declare const FilesIcon: IconComponent;
declare const FileSignal: IconComponent;
declare const FileSignalIcon: IconComponent;
declare const FileSignature: IconComponent;
declare const FileSignatureIcon: IconComponent;
declare const FileSliders: IconComponent;
declare const FileSlidersIcon: IconComponent;
declare const FileSpreadsheet: IconComponent;
declare const FileSpreadsheetIcon: IconComponent;
declare const FileStack: IconComponent;
declare const FileStackIcon: IconComponent;
declare const FileSymlink: IconComponent;
declare const FileSymlinkIcon: IconComponent;
declare const FileTerminal: IconComponent;
declare const FileTerminalIcon: IconComponent;
declare const FileText: IconComponent;
declare const FileTextIcon: IconComponent;
declare const FileType: IconComponent;
declare const FileType2: IconComponent;
declare const FileType2Icon: IconComponent;
declare const FileTypeCorner: IconComponent;
declare const FileTypeCornerIcon: IconComponent;
declare const FileTypeIcon: IconComponent;
declare const FileUp: IconComponent;
declare const FileUpIcon: IconComponent;
declare const FileUser: IconComponent;
declare const FileUserIcon: IconComponent;
declare const FileVideo: IconComponent;
declare const FileVideo2: IconComponent;
declare const FileVideo2Icon: IconComponent;
declare const FileVideoCamera: IconComponent;
declare const FileVideoCameraIcon: IconComponent;
declare const FileVideoIcon: IconComponent;
declare const FileVolume: IconComponent;
declare const FileVolume2: IconComponent;
declare const FileVolume2Icon: IconComponent;
declare const FileVolumeIcon: IconComponent;
declare const FileWarning: IconComponent;
declare const FileWarningIcon: IconComponent;
declare const FileX: IconComponent;
declare const FileX2: IconComponent;
declare const FileX2Icon: IconComponent;
declare const FileXCorner: IconComponent;
declare const FileXCornerIcon: IconComponent;
declare const FileXIcon: IconComponent;
declare const Film: IconComponent;
declare const FilmIcon: IconComponent;
declare const Filter: IconComponent;
declare const FilterIcon: IconComponent;
declare const FilterX: IconComponent;
declare const FilterXIcon: IconComponent;
declare const Fingerprint: IconComponent;
declare const FingerprintIcon: IconComponent;
declare const FingerprintPattern: IconComponent;
declare const FingerprintPatternIcon: IconComponent;
declare const FireExtinguisher: IconComponent;
declare const FireExtinguisherIcon: IconComponent;
declare const Fish: IconComponent;
declare const FishIcon: IconComponent;
declare const FishingHook: IconComponent;
declare const FishingHookIcon: IconComponent;
declare const FishingRod: IconComponent;
declare const FishingRodIcon: IconComponent;
declare const FishOff: IconComponent;
declare const FishOffIcon: IconComponent;
declare const FishSymbol: IconComponent;
declare const FishSymbolIcon: IconComponent;
declare const Flag: IconComponent;
declare const FlagIcon: IconComponent;
declare const FlagOff: IconComponent;
declare const FlagOffIcon: IconComponent;
declare const FlagTriangleLeft: IconComponent;
declare const FlagTriangleLeftIcon: IconComponent;
declare const FlagTriangleRight: IconComponent;
declare const FlagTriangleRightIcon: IconComponent;
declare const Flame: IconComponent;
declare const FlameIcon: IconComponent;
declare const FlameKindling: IconComponent;
declare const FlameKindlingIcon: IconComponent;
declare const Flashlight: IconComponent;
declare const FlashlightIcon: IconComponent;
declare const FlashlightOff: IconComponent;
declare const FlashlightOffIcon: IconComponent;
declare const FlaskConical: IconComponent;
declare const FlaskConicalIcon: IconComponent;
declare const FlaskConicalOff: IconComponent;
declare const FlaskConicalOffIcon: IconComponent;
declare const FlaskRound: IconComponent;
declare const FlaskRoundIcon: IconComponent;
declare const FlipHorizontal: IconComponent;
declare const FlipHorizontal2: IconComponent;
declare const FlipHorizontal2Icon: IconComponent;
declare const FlipHorizontalIcon: IconComponent;
declare const FlipVertical: IconComponent;
declare const FlipVertical2: IconComponent;
declare const FlipVertical2Icon: IconComponent;
declare const FlipVerticalIcon: IconComponent;
declare const Flower: IconComponent;
declare const Flower2: IconComponent;
declare const Flower2Icon: IconComponent;
declare const FlowerIcon: IconComponent;
declare const Focus: IconComponent;
declare const FocusIcon: IconComponent;
declare const Folder: IconComponent;
declare const FolderArchive: IconComponent;
declare const FolderArchiveIcon: IconComponent;
declare const FolderBookmark: IconComponent;
declare const FolderBookmarkIcon: IconComponent;
declare const FolderCheck: IconComponent;
declare const FolderCheckIcon: IconComponent;
declare const FolderClock: IconComponent;
declare const FolderClockIcon: IconComponent;
declare const FolderClosed: IconComponent;
declare const FolderClosedIcon: IconComponent;
declare const FolderCode: IconComponent;
declare const FolderCodeIcon: IconComponent;
declare const FolderCog: IconComponent;
declare const FolderCog2: IconComponent;
declare const FolderCog2Icon: IconComponent;
declare const FolderCogIcon: IconComponent;
declare const FolderDot: IconComponent;
declare const FolderDotIcon: IconComponent;
declare const FolderDown: IconComponent;
declare const FolderDownIcon: IconComponent;
declare const FolderEdit: IconComponent;
declare const FolderEditIcon: IconComponent;
declare const FolderGit: IconComponent;
declare const FolderGit2: IconComponent;
declare const FolderGit2Icon: IconComponent;
declare const FolderGitIcon: IconComponent;
declare const FolderHeart: IconComponent;
declare const FolderHeartIcon: IconComponent;
declare const FolderIcon: IconComponent;
declare const FolderInput: IconComponent;
declare const FolderInputIcon: IconComponent;
declare const FolderKanban: IconComponent;
declare const FolderKanbanIcon: IconComponent;
declare const FolderKey: IconComponent;
declare const FolderKeyIcon: IconComponent;
declare const FolderLock: IconComponent;
declare const FolderLockIcon: IconComponent;
declare const FolderMinus: IconComponent;
declare const FolderMinusIcon: IconComponent;
declare const FolderOpen: IconComponent;
declare const FolderOpenDot: IconComponent;
declare const FolderOpenDotIcon: IconComponent;
declare const FolderOpenIcon: IconComponent;
declare const FolderOutput: IconComponent;
declare const FolderOutputIcon: IconComponent;
declare const FolderPen: IconComponent;
declare const FolderPenIcon: IconComponent;
declare const FolderPlus: IconComponent;
declare const FolderPlusIcon: IconComponent;
declare const FolderRoot: IconComponent;
declare const FolderRootIcon: IconComponent;
declare const Folders: IconComponent;
declare const FolderSearch: IconComponent;
declare const FolderSearch2: IconComponent;
declare const FolderSearch2Icon: IconComponent;
declare const FolderSearchIcon: IconComponent;
declare const FoldersIcon: IconComponent;
declare const FolderSymlink: IconComponent;
declare const FolderSymlinkIcon: IconComponent;
declare const FolderSync: IconComponent;
declare const FolderSyncIcon: IconComponent;
declare const FolderTree: IconComponent;
declare const FolderTreeIcon: IconComponent;
declare const FolderUp: IconComponent;
declare const FolderUpIcon: IconComponent;
declare const FolderX: IconComponent;
declare const FolderXIcon: IconComponent;
declare const FoldHorizontal: IconComponent;
declare const FoldHorizontalIcon: IconComponent;
declare const FoldVertical: IconComponent;
declare const FoldVerticalIcon: IconComponent;
declare const Footprints: IconComponent;
declare const FootprintsIcon: IconComponent;
declare const ForkKnife: IconComponent;
declare const ForkKnifeCrossed: IconComponent;
declare const ForkKnifeCrossedIcon: IconComponent;
declare const ForkKnifeIcon: IconComponent;
declare const Forklift: IconComponent;
declare const ForkliftIcon: IconComponent;
declare const Form: IconComponent;
declare const FormIcon: IconComponent;
declare const FormInput: IconComponent;
declare const FormInputIcon: IconComponent;
declare const Forward: IconComponent;
declare const ForwardIcon: IconComponent;
declare const Frame: IconComponent;
declare const FrameIcon: IconComponent;
declare const Frown: IconComponent;
declare const FrownIcon: IconComponent;
declare const Fuel: IconComponent;
declare const FuelIcon: IconComponent;
declare const Fullscreen: IconComponent;
declare const FullscreenIcon: IconComponent;
declare const FunctionSquare: IconComponent;
declare const FunctionSquareIcon: IconComponent;
declare const Funnel: IconComponent;
declare const FunnelIcon: IconComponent;
declare const FunnelPlus: IconComponent;
declare const FunnelPlusIcon: IconComponent;
declare const FunnelX: IconComponent;
declare const FunnelXIcon: IconComponent;
declare const Galaxy: IconComponent;
declare const GalaxyIcon: IconComponent;
declare const GalleryHorizontal: IconComponent;
declare const GalleryHorizontalEnd: IconComponent;
declare const GalleryHorizontalEndIcon: IconComponent;
declare const GalleryHorizontalIcon: IconComponent;
declare const GalleryThumbnails: IconComponent;
declare const GalleryThumbnailsIcon: IconComponent;
declare const GalleryVertical: IconComponent;
declare const GalleryVerticalEnd: IconComponent;
declare const GalleryVerticalEndIcon: IconComponent;
declare const GalleryVerticalIcon: IconComponent;
declare const Gamepad: IconComponent;
declare const Gamepad2: IconComponent;
declare const Gamepad2Icon: IconComponent;
declare const GamepadDirectional: IconComponent;
declare const GamepadDirectionalIcon: IconComponent;
declare const GamepadIcon: IconComponent;
declare const GanttChart: IconComponent;
declare const GanttChartIcon: IconComponent;
declare const GanttChartSquare: IconComponent;
declare const GanttChartSquareIcon: IconComponent;
declare const GapHorizontal: IconComponent;
declare const GapHorizontalIcon: IconComponent;
declare const GapVertical: IconComponent;
declare const GapVerticalIcon: IconComponent;
declare const Gauge: IconComponent;
declare const GaugeCircle: IconComponent;
declare const GaugeCircleIcon: IconComponent;
declare const GaugeIcon: IconComponent;
declare const Gavel: IconComponent;
declare const GavelIcon: IconComponent;
declare const Gem: IconComponent;
declare const GemIcon: IconComponent;
declare const GeorgianLari: IconComponent;
declare const GeorgianLariIcon: IconComponent;
declare const Germ: IconComponent;
declare const GermIcon: IconComponent;
declare const GermOff: IconComponent;
declare const GermOffIcon: IconComponent;
declare const Ghost: IconComponent;
declare const GhostIcon: IconComponent;
declare const Gift: IconComponent;
declare const GiftIcon: IconComponent;
declare const GitBranch: IconComponent;
declare const GitBranchIcon: IconComponent;
declare const GitBranchMinus: IconComponent;
declare const GitBranchMinusIcon: IconComponent;
declare const GitBranchPlus: IconComponent;
declare const GitBranchPlusIcon: IconComponent;
declare const GitCommit: IconComponent;
declare const GitCommitHorizontal: IconComponent;
declare const GitCommitHorizontalIcon: IconComponent;
declare const GitCommitIcon: IconComponent;
declare const GitCommitVertical: IconComponent;
declare const GitCommitVerticalIcon: IconComponent;
declare const GitCompare: IconComponent;
declare const GitCompareArrows: IconComponent;
declare const GitCompareArrowsIcon: IconComponent;
declare const GitCompareIcon: IconComponent;
declare const GitFork: IconComponent;
declare const GitForkIcon: IconComponent;
declare const GitGraph: IconComponent;
declare const GitGraphIcon: IconComponent;
declare const GitMerge: IconComponent;
declare const GitMergeConflict: IconComponent;
declare const GitMergeConflictIcon: IconComponent;
declare const GitMergeIcon: IconComponent;
declare const GitPullRequest: IconComponent;
declare const GitPullRequestArrow: IconComponent;
declare const GitPullRequestArrowIcon: IconComponent;
declare const GitPullRequestClosed: IconComponent;
declare const GitPullRequestClosedIcon: IconComponent;
declare const GitPullRequestCreate: IconComponent;
declare const GitPullRequestCreateArrow: IconComponent;
declare const GitPullRequestCreateArrowIcon: IconComponent;
declare const GitPullRequestCreateIcon: IconComponent;
declare const GitPullRequestDraft: IconComponent;
declare const GitPullRequestDraftIcon: IconComponent;
declare const GitPullRequestIcon: IconComponent;
declare const Glasses: IconComponent;
declare const GlassesIcon: IconComponent;
declare const GlassWater: IconComponent;
declare const GlassWaterIcon: IconComponent;
declare const Globe: IconComponent;
declare const Globe2: IconComponent;
declare const Globe2Icon: IconComponent;
declare const GlobeCheck: IconComponent;
declare const GlobeCheckIcon: IconComponent;
declare const GlobeCode: IconComponent;
declare const GlobeCodeIcon: IconComponent;
declare const GlobeIcon: IconComponent;
declare const GlobeLock: IconComponent;
declare const GlobeLockIcon: IconComponent;
declare const GlobeOff: IconComponent;
declare const GlobeOffIcon: IconComponent;
declare const GlobeX: IconComponent;
declare const GlobeXIcon: IconComponent;
declare const Goal: IconComponent;
declare const GoalIcon: IconComponent;
declare const Gpu: IconComponent;
declare const GpuIcon: IconComponent;
declare const Grab: IconComponent;
declare const GrabIcon: IconComponent;
declare const GraduationCap: IconComponent;
declare const GraduationCapIcon: IconComponent;
declare const Grape: IconComponent;
declare const GrapeIcon: IconComponent;
declare const Grid: IconComponent;
declare const Grid2x2: IconComponent;
declare const Grid2X2: IconComponent;
declare const Grid2x2Check: IconComponent;
declare const Grid2X2Check: IconComponent;
declare const Grid2x2CheckIcon: IconComponent;
declare const Grid2X2CheckIcon: IconComponent;
declare const Grid2x2Icon: IconComponent;
declare const Grid2X2Icon: IconComponent;
declare const Grid2x2Plus: IconComponent;
declare const Grid2X2Plus: IconComponent;
declare const Grid2x2PlusIcon: IconComponent;
declare const Grid2X2PlusIcon: IconComponent;
declare const Grid2x2X: IconComponent;
declare const Grid2X2X: IconComponent;
declare const Grid2x2XIcon: IconComponent;
declare const Grid2X2XIcon: IconComponent;
declare const Grid3x2: IconComponent;
declare const Grid3x2Icon: IconComponent;
declare const Grid3x3: IconComponent;
declare const Grid3X3: IconComponent;
declare const Grid3x3Icon: IconComponent;
declare const Grid3X3Icon: IconComponent;
declare const GridIcon: IconComponent;
declare const Grip: IconComponent;
declare const GripHorizontal: IconComponent;
declare const GripHorizontalIcon: IconComponent;
declare const GripIcon: IconComponent;
declare const GripVertical: IconComponent;
declare const GripVerticalIcon: IconComponent;
declare const Groceries: IconComponent;
declare const GroceriesIcon: IconComponent;
declare const Group: IconComponent;
declare const GroupIcon: IconComponent;
declare const Guitar: IconComponent;
declare const GuitarIcon: IconComponent;
declare const Ham: IconComponent;
declare const Hamburger: IconComponent;
declare const HamburgerIcon: IconComponent;
declare const HamIcon: IconComponent;
declare const Hammer: IconComponent;
declare const HammerIcon: IconComponent;
declare const Hand: IconComponent;
declare const Handbag: IconComponent;
declare const HandbagIcon: IconComponent;
declare const HandCoins: IconComponent;
declare const HandCoinsIcon: IconComponent;
declare const HandFist: IconComponent;
declare const HandFistIcon: IconComponent;
declare const HandGrab: IconComponent;
declare const HandGrabIcon: IconComponent;
declare const HandHeart: IconComponent;
declare const HandHeartIcon: IconComponent;
declare const HandHelping: IconComponent;
declare const HandHelpingIcon: IconComponent;
declare const HandIcon: IconComponent;
declare const HandleBottomRight: IconComponent;
declare const HandleBottomRightIcon: IconComponent;
declare const HandMetal: IconComponent;
declare const HandMetalIcon: IconComponent;
declare const HandPlatter: IconComponent;
declare const HandPlatterIcon: IconComponent;
declare const Handshake: IconComponent;
declare const HandshakeIcon: IconComponent;
declare const HardDrive: IconComponent;
declare const HardDriveDownload: IconComponent;
declare const HardDriveDownloadIcon: IconComponent;
declare const HardDriveIcon: IconComponent;
declare const HardDriveUpload: IconComponent;
declare const HardDriveUploadIcon: IconComponent;
declare const HardHat: IconComponent;
declare const HardHatIcon: IconComponent;
declare const Hash: IconComponent;
declare const HashIcon: IconComponent;
declare const HatGlasses: IconComponent;
declare const HatGlassesIcon: IconComponent;
declare const Haze: IconComponent;
declare const HazeIcon: IconComponent;
declare const Hd: IconComponent;
declare const HdIcon: IconComponent;
declare const HdmiPort: IconComponent;
declare const HdmiPortIcon: IconComponent;
declare const Heading: IconComponent;
declare const Heading1: IconComponent;
declare const Heading1Icon: IconComponent;
declare const Heading2: IconComponent;
declare const Heading2Icon: IconComponent;
declare const Heading3: IconComponent;
declare const Heading3Icon: IconComponent;
declare const Heading4: IconComponent;
declare const Heading4Icon: IconComponent;
declare const Heading5: IconComponent;
declare const Heading5Icon: IconComponent;
declare const Heading6: IconComponent;
declare const Heading6Icon: IconComponent;
declare const HeadingIcon: IconComponent;
declare const HeadphoneOff: IconComponent;
declare const HeadphoneOffIcon: IconComponent;
declare const Headphones: IconComponent;
declare const HeadphonesIcon: IconComponent;
declare const Headset: IconComponent;
declare const HeadsetIcon: IconComponent;
declare const Heart: IconComponent;
declare const HeartCrack: IconComponent;
declare const HeartCrackIcon: IconComponent;
declare const HeartHandshake: IconComponent;
declare const HeartHandshakeIcon: IconComponent;
declare const HeartIcon: IconComponent;
declare const HeartMinus: IconComponent;
declare const HeartMinusIcon: IconComponent;
declare const HeartOff: IconComponent;
declare const HeartOffIcon: IconComponent;
declare const HeartPlus: IconComponent;
declare const HeartPlusIcon: IconComponent;
declare const HeartPulse: IconComponent;
declare const HeartPulseIcon: IconComponent;
declare const HeartX: IconComponent;
declare const HeartXIcon: IconComponent;
declare const Heater: IconComponent;
declare const HeaterIcon: IconComponent;
declare const Helicopter: IconComponent;
declare const HelicopterIcon: IconComponent;
declare const HelpCircle: IconComponent;
declare const HelpCircleIcon: IconComponent;
declare const HelpingHand: IconComponent;
declare const HelpingHandIcon: IconComponent;
declare const Hexagon: IconComponent;
declare const HexagonIcon: IconComponent;
declare const Highlighter: IconComponent;
declare const HighlighterIcon: IconComponent;
declare const HikingStick: IconComponent;
declare const HikingStickIcon: IconComponent;
declare const History: IconComponent;
declare const HistoryIcon: IconComponent;
declare const Home: IconComponent;
declare const HomeIcon: IconComponent;
declare const Hop: IconComponent;
declare const HopIcon: IconComponent;
declare const HopOff: IconComponent;
declare const HopOffIcon: IconComponent;
declare const Hospital: IconComponent;
declare const HospitalIcon: IconComponent;
declare const Hotel: IconComponent;
declare const HotelIcon: IconComponent;
declare const Hourglass: IconComponent;
declare const HourglassCog: IconComponent;
declare const HourglassCogIcon: IconComponent;
declare const HourglassIcon: IconComponent;
declare const House: IconComponent;
declare const HouseCog: IconComponent;
declare const HouseCogIcon: IconComponent;
declare const HouseHeart: IconComponent;
declare const HouseHeartIcon: IconComponent;
declare const HouseIcon: IconComponent;
declare const HousePlug: IconComponent;
declare const HousePlugIcon: IconComponent;
declare const HousePlus: IconComponent;
declare const HousePlusIcon: IconComponent;
declare const Houses: IconComponent;
declare const HousesIcon: IconComponent;
declare const HouseWifi: IconComponent;
declare const HouseWifiIcon: IconComponent;
declare const IceCream: IconComponent;
declare const IceCream2: IconComponent;
declare const IceCream2Icon: IconComponent;
declare const IceCreamBowl: IconComponent;
declare const IceCreamBowlIcon: IconComponent;
declare const IceCreamCone: IconComponent;
declare const IceCreamConeIcon: IconComponent;
declare const IceCreamIcon: IconComponent;
declare const IdCard: IconComponent;
declare const IdCardIcon: IconComponent;
declare const IdCardLanyard: IconComponent;
declare const IdCardLanyardIcon: IconComponent;
declare const Image: IconComponent;
declare const ImageDown: IconComponent;
declare const ImageDownIcon: IconComponent;
declare const ImageIcon: IconComponent;
declare const ImageMinus: IconComponent;
declare const ImageMinusIcon: IconComponent;
declare const ImageOff: IconComponent;
declare const ImageOffIcon: IconComponent;
declare const ImagePlay: IconComponent;
declare const ImagePlayIcon: IconComponent;
declare const ImagePlus: IconComponent;
declare const ImagePlusIcon: IconComponent;
declare const Images: IconComponent;
declare const ImagesIcon: IconComponent;
declare const ImageUp: IconComponent;
declare const ImageUpIcon: IconComponent;
declare const ImageUpscale: IconComponent;
declare const ImageUpscaleIcon: IconComponent;
declare const Import: IconComponent;
declare const ImportIcon: IconComponent;
declare const Inbox: IconComponent;
declare const InboxIcon: IconComponent;
declare const Indent: IconComponent;
declare const IndentDecrease: IconComponent;
declare const IndentDecreaseIcon: IconComponent;
declare const IndentIcon: IconComponent;
declare const IndentIncrease: IconComponent;
declare const IndentIncreaseIcon: IconComponent;
declare const IndianRupee: IconComponent;
declare const IndianRupeeIcon: IconComponent;
declare const Infinity: IconComponent;
declare const InfinityIcon: IconComponent;
declare const Info: IconComponent;
declare const InfoIcon: IconComponent;
declare const Inspect: IconComponent;
declare const InspectIcon: IconComponent;
declare const InspectionPanel: IconComponent;
declare const InspectionPanelIcon: IconComponent;
declare const Italic: IconComponent;
declare const ItalicIcon: IconComponent;
declare const IterationCcw: IconComponent;
declare const IterationCcwIcon: IconComponent;
declare const IterationCw: IconComponent;
declare const IterationCwIcon: IconComponent;
declare const IvBag: IconComponent;
declare const IvBagIcon: IconComponent;
declare const JapaneseYen: IconComponent;
declare const JapaneseYenIcon: IconComponent;
declare const Joystick: IconComponent;
declare const JoystickIcon: IconComponent;
declare const Kanban: IconComponent;
declare const KanbanIcon: IconComponent;
declare const KanbanSquare: IconComponent;
declare const KanbanSquareDashed: IconComponent;
declare const KanbanSquareDashedIcon: IconComponent;
declare const KanbanSquareIcon: IconComponent;
declare const Kayak: IconComponent;
declare const KayakIcon: IconComponent;
declare const KazakhTenge: IconComponent;
declare const KazakhTengeIcon: IconComponent;
declare const Key: IconComponent;
declare const Keyboard: IconComponent;
declare const KeyboardIcon: IconComponent;
declare const KeyboardMusic: IconComponent;
declare const KeyboardMusicIcon: IconComponent;
declare const KeyboardOff: IconComponent;
declare const KeyboardOffIcon: IconComponent;
declare const KeyIcon: IconComponent;
declare const KeyRound: IconComponent;
declare const KeyRoundIcon: IconComponent;
declare const KeySquare: IconComponent;
declare const KeySquareIcon: IconComponent;
declare const Lambda: IconComponent;
declare const LambdaIcon: IconComponent;
declare const Lamp: IconComponent;
declare const LampCeiling: IconComponent;
declare const LampCeilingIcon: IconComponent;
declare const LampDesk: IconComponent;
declare const LampDeskIcon: IconComponent;
declare const LampFloor: IconComponent;
declare const LampFloorIcon: IconComponent;
declare const LampIcon: IconComponent;
declare const LampWallDown: IconComponent;
declare const LampWallDownIcon: IconComponent;
declare const LampWallUp: IconComponent;
declare const LampWallUpIcon: IconComponent;
declare const Landmark: IconComponent;
declare const LandmarkIcon: IconComponent;
declare const LandPlot: IconComponent;
declare const LandPlotIcon: IconComponent;
declare const Languages: IconComponent;
declare const LanguagesIcon: IconComponent;
declare const Laptop: IconComponent;
declare const Laptop2: IconComponent;
declare const Laptop2Icon: IconComponent;
declare const LaptopIcon: IconComponent;
declare const LaptopMinimal: IconComponent;
declare const LaptopMinimalCheck: IconComponent;
declare const LaptopMinimalCheckIcon: IconComponent;
declare const LaptopMinimalIcon: IconComponent;
declare const Lasso: IconComponent;
declare const LassoIcon: IconComponent;
declare const LassoSelect: IconComponent;
declare const LassoSelectIcon: IconComponent;
declare const Laugh: IconComponent;
declare const LaughIcon: IconComponent;
declare const LayerArrowDown: IconComponent;
declare const LayerArrowDownIcon: IconComponent;
declare const LayerArrowUp: IconComponent;
declare const LayerArrowUpIcon: IconComponent;
declare const Layers: IconComponent;
declare const Layers2: IconComponent;
declare const Layers2Icon: IconComponent;
declare const Layers3: IconComponent;
declare const Layers3Icon: IconComponent;
declare const LayersArrowDown: IconComponent;
declare const LayersArrowDownIcon: IconComponent;
declare const LayersArrowUp: IconComponent;
declare const LayersArrowUpIcon: IconComponent;
declare const LayersIcon: IconComponent;
declare const LayersMinus: IconComponent;
declare const LayersMinusIcon: IconComponent;
declare const LayersPlus: IconComponent;
declare const LayersPlusIcon: IconComponent;
declare const Layout: IconComponent;
declare const LayoutArrowDown: IconComponent;
declare const LayoutArrowDownIcon: IconComponent;
declare const LayoutArrowRight: IconComponent;
declare const LayoutArrowRightIcon: IconComponent;
declare const LayoutDashboard: IconComponent;
declare const LayoutDashboardIcon: IconComponent;
declare const LayoutFreeform: IconComponent;
declare const LayoutFreeformIcon: IconComponent;
declare const LayoutGrid: IconComponent;
declare const LayoutGridCircles: IconComponent;
declare const LayoutGridCirclesIcon: IconComponent;
declare const LayoutGridIcon: IconComponent;
declare const LayoutIcon: IconComponent;
declare const LayoutList: IconComponent;
declare const LayoutListIcon: IconComponent;
declare const LayoutPanelLeft: IconComponent;
declare const LayoutPanelLeftIcon: IconComponent;
declare const LayoutPanelTop: IconComponent;
declare const LayoutPanelTopIcon: IconComponent;
declare const LayoutTemplate: IconComponent;
declare const LayoutTemplateIcon: IconComponent;
declare const Leaf: IconComponent;
declare const LeafIcon: IconComponent;
declare const LeafyGreen: IconComponent;
declare const LeafyGreenIcon: IconComponent;
declare const Lectern: IconComponent;
declare const LecternIcon: IconComponent;
declare const Lens: IconComponent;
declare const LensConcave: IconComponent;
declare const LensConcaveIcon: IconComponent;
declare const LensConvex: IconComponent;
declare const LensConvexIcon: IconComponent;
declare const LensIcon: IconComponent;
declare const Letters: IconComponent;
declare const LettersIcon: IconComponent;
declare const LetterText: IconComponent;
declare const LetterTextIcon: IconComponent;
declare const Library: IconComponent;
declare const LibraryBig: IconComponent;
declare const LibraryBigIcon: IconComponent;
declare const LibraryIcon: IconComponent;
declare const LibrarySquare: IconComponent;
declare const LibrarySquareIcon: IconComponent;
declare const LifeBuoy: IconComponent;
declare const LifeBuoyIcon: IconComponent;
declare const Ligature: IconComponent;
declare const LigatureIcon: IconComponent;
declare const Lightbulb: IconComponent;
declare const LightbulbIcon: IconComponent;
declare const LightbulbOff: IconComponent;
declare const LightbulbOffIcon: IconComponent;
declare const Lighthouse: IconComponent;
declare const LighthouseIcon: IconComponent;
declare const LineChart: IconComponent;
declare const LineChartIcon: IconComponent;
declare const LineDotBottomVertical: IconComponent;
declare const LineDotBottomVerticalIcon: IconComponent;
declare const LineDotLeftHorizontal: IconComponent;
declare const LineDotLeftHorizontalIcon: IconComponent;
declare const LineDotRightHorizontal: IconComponent;
declare const LineDotRightHorizontalIcon: IconComponent;
declare const LineDotTopVertical: IconComponent;
declare const LineDotTopVerticalIcon: IconComponent;
declare const LineSquiggle: IconComponent;
declare const LineSquiggleIcon: IconComponent;
declare const LineStyle: IconComponent;
declare const LineStyleIcon: IconComponent;
declare const Link: IconComponent;
declare const Link2: IconComponent;
declare const Link2Icon: IconComponent;
declare const Link2Off: IconComponent;
declare const Link2OffIcon: IconComponent;
declare const LinkIcon: IconComponent;
declare const List: IconComponent;
declare const ListCheck: IconComponent;
declare const ListCheckIcon: IconComponent;
declare const ListChecks: IconComponent;
declare const ListChecksIcon: IconComponent;
declare const ListChevronsDownUp: IconComponent;
declare const ListChevronsDownUpIcon: IconComponent;
declare const ListChevronsUpDown: IconComponent;
declare const ListChevronsUpDownIcon: IconComponent;
declare const ListClock: IconComponent;
declare const ListClockIcon: IconComponent;
declare const ListCollapse: IconComponent;
declare const ListCollapseIcon: IconComponent;
declare const ListEnd: IconComponent;
declare const ListEndIcon: IconComponent;
declare const ListFilter: IconComponent;
declare const ListFilterIcon: IconComponent;
declare const ListFilterPlus: IconComponent;
declare const ListFilterPlusIcon: IconComponent;
declare const ListIcon: IconComponent;
declare const ListIndentDecrease: IconComponent;
declare const ListIndentDecreaseIcon: IconComponent;
declare const ListIndentIncrease: IconComponent;
declare const ListIndentIncreaseIcon: IconComponent;
declare const ListMinus: IconComponent;
declare const ListMinusIcon: IconComponent;
declare const ListMusic: IconComponent;
declare const ListMusicIcon: IconComponent;
declare const ListOrdered: IconComponent;
declare const ListOrderedIcon: IconComponent;
declare const ListPlus: IconComponent;
declare const ListPlusIcon: IconComponent;
declare const ListRestart: IconComponent;
declare const ListRestartIcon: IconComponent;
declare const ListSortAscending: IconComponent;
declare const ListSortAscendingIcon: IconComponent;
declare const ListSortDescending: IconComponent;
declare const ListSortDescendingIcon: IconComponent;
declare const ListStart: IconComponent;
declare const ListStartIcon: IconComponent;
declare const ListTodo: IconComponent;
declare const ListTodoIcon: IconComponent;
declare const ListTree: IconComponent;
declare const ListTreeIcon: IconComponent;
declare const ListVideo: IconComponent;
declare const ListVideoIcon: IconComponent;
declare const ListX: IconComponent;
declare const ListXIcon: IconComponent;
declare const Loader: IconComponent;
declare const Loader2: IconComponent;
declare const Loader2Icon: IconComponent;
declare const LoaderCircle: IconComponent;
declare const LoaderCircleIcon: IconComponent;
declare const LoaderIcon: IconComponent;
declare const LoaderPinwheel: IconComponent;
declare const LoaderPinwheelIcon: IconComponent;
declare const Locate: IconComponent;
declare const LocateFixed: IconComponent;
declare const LocateFixedIcon: IconComponent;
declare const LocateIcon: IconComponent;
declare const LocateOff: IconComponent;
declare const LocateOffIcon: IconComponent;
declare const LocationEdit: IconComponent;
declare const LocationEditIcon: IconComponent;
declare const Lock: IconComponent;
declare const LockIcon: IconComponent;
declare const LockKeyhole: IconComponent;
declare const LockKeyholeIcon: IconComponent;
declare const LockKeyholeOpen: IconComponent;
declare const LockKeyholeOpenIcon: IconComponent;
declare const LockOpen: IconComponent;
declare const LockOpenIcon: IconComponent;
declare const LogIn: IconComponent;
declare const LogInIcon: IconComponent;
declare const LogOut: IconComponent;
declare const LogOutIcon: IconComponent;
declare const Logs: IconComponent;
declare const LogsIcon: IconComponent;
declare const Lollipop: IconComponent;
declare const LollipopIcon: IconComponent;
declare const LucideAArrowDown: IconComponent;
declare const LucideAArrowUp: IconComponent;
declare const LucideAccessibility: IconComponent;
declare const LucideActivity: IconComponent;
declare const LucideActivitySquare: IconComponent;
declare const LucideAd: IconComponent;
declare const LucideAirplay: IconComponent;
declare const LucideAirVent: IconComponent;
declare const LucideALargeSmall: IconComponent;
declare const LucideAlarmCheck: IconComponent;
declare const LucideAlarmClock: IconComponent;
declare const LucideAlarmClockCheck: IconComponent;
declare const LucideAlarmClockMinus: IconComponent;
declare const LucideAlarmClockOff: IconComponent;
declare const LucideAlarmClockPlus: IconComponent;
declare const LucideAlarmMinus: IconComponent;
declare const LucideAlarmPlus: IconComponent;
declare const LucideAlarmSmoke: IconComponent;
declare const LucideAlbum: IconComponent;
declare const LucideAlertCircle: IconComponent;
declare const LucideAlertOctagon: IconComponent;
declare const LucideAlertTriangle: IconComponent;
declare const LucideAlignCenter: IconComponent;
declare const LucideAlignCenterHorizontal: IconComponent;
declare const LucideAlignCenterVertical: IconComponent;
declare const LucideAlignEndHorizontal: IconComponent;
declare const LucideAlignEndVertical: IconComponent;
declare const LucideAlignHorizontalDistributeCenter: IconComponent;
declare const LucideAlignHorizontalDistributeEnd: IconComponent;
declare const LucideAlignHorizontalDistributeStart: IconComponent;
declare const LucideAlignHorizontalJustifyCenter: IconComponent;
declare const LucideAlignHorizontalJustifyEnd: IconComponent;
declare const LucideAlignHorizontalJustifyStart: IconComponent;
declare const LucideAlignHorizontalSpaceAround: IconComponent;
declare const LucideAlignHorizontalSpaceBetween: IconComponent;
declare const LucideAlignJustify: IconComponent;
declare const LucideAlignLeft: IconComponent;
declare const LucideAlignRight: IconComponent;
declare const LucideAlignStartHorizontal: IconComponent;
declare const LucideAlignStartVertical: IconComponent;
declare const LucideAlignVerticalDistributeCenter: IconComponent;
declare const LucideAlignVerticalDistributeEnd: IconComponent;
declare const LucideAlignVerticalDistributeStart: IconComponent;
declare const LucideAlignVerticalJustifyCenter: IconComponent;
declare const LucideAlignVerticalJustifyEnd: IconComponent;
declare const LucideAlignVerticalJustifyStart: IconComponent;
declare const LucideAlignVerticalSpaceAround: IconComponent;
declare const LucideAlignVerticalSpaceBetween: IconComponent;
declare const LucideAmbulance: IconComponent;
declare const LucideAmpersand: IconComponent;
declare const LucideAmpersands: IconComponent;
declare const LucideAmphora: IconComponent;
declare const LucideAnchor: IconComponent;
declare const LucideAngle: IconComponent;
declare const LucideAngry: IconComponent;
declare const LucideAnnoyed: IconComponent;
declare const LucideAntenna: IconComponent;
declare const LucideAnvil: IconComponent;
declare const LucideAperture: IconComponent;
declare const LucideApple: IconComponent;
declare const LucideAppWindow: IconComponent;
declare const LucideAppWindowMac: IconComponent;
declare const LucideArchive: IconComponent;
declare const LucideArchiveRestore: IconComponent;
declare const LucideArchiveX: IconComponent;
declare const LucideAreaChart: IconComponent;
declare const LucideArmchair: IconComponent;
declare const LucideArmenianDram: IconComponent;
declare const LucideArrowBigDown: IconComponent;
declare const LucideArrowBigDownDash: IconComponent;
declare const LucideArrowBigLeft: IconComponent;
declare const LucideArrowBigLeftDash: IconComponent;
declare const LucideArrowBigRight: IconComponent;
declare const LucideArrowBigRightDash: IconComponent;
declare const LucideArrowBigUp: IconComponent;
declare const LucideArrowBigUpDash: IconComponent;
declare const LucideArrowDown: IconComponent;
declare const LucideArrowDown01: IconComponent;
declare const LucideArrowDown10: IconComponent;
declare const LucideArrowDownAz: IconComponent;
declare const LucideArrowDownAZ: IconComponent;
declare const LucideArrowDownCircle: IconComponent;
declare const LucideArrowDownFromLine: IconComponent;
declare const LucideArrowDownLeft: IconComponent;
declare const LucideArrowDownLeftFromCircle: IconComponent;
declare const LucideArrowDownLeftFromSquare: IconComponent;
declare const LucideArrowDownLeftSquare: IconComponent;
declare const LucideArrowDownNarrowWide: IconComponent;
declare const LucideArrowDownRight: IconComponent;
declare const LucideArrowDownRightFromCircle: IconComponent;
declare const LucideArrowDownRightFromSquare: IconComponent;
declare const LucideArrowDownRightSquare: IconComponent;
declare const LucideArrowDownSquare: IconComponent;
declare const LucideArrowDownToDot: IconComponent;
declare const LucideArrowDownToLine: IconComponent;
declare const LucideArrowDownUp: IconComponent;
declare const LucideArrowDownWideNarrow: IconComponent;
declare const LucideArrowDownZa: IconComponent;
declare const LucideArrowDownZA: IconComponent;
declare const LucideArrowLeft: IconComponent;
declare const LucideArrowLeftCircle: IconComponent;
declare const LucideArrowLeftFromLine: IconComponent;
declare const LucideArrowLeftRight: IconComponent;
declare const LucideArrowLeftSquare: IconComponent;
declare const LucideArrowLeftToLine: IconComponent;
declare const LucideArrowRight: IconComponent;
declare const LucideArrowRightCircle: IconComponent;
declare const LucideArrowRightFromLine: IconComponent;
declare const LucideArrowRightLeft: IconComponent;
declare const LucideArrowRightSquare: IconComponent;
declare const LucideArrowRightToLine: IconComponent;
declare const LucideArrowsUpFromLine: IconComponent;
declare const LucideArrowUp: IconComponent;
declare const LucideArrowUp01: IconComponent;
declare const LucideArrowUp10: IconComponent;
declare const LucideArrowUpAz: IconComponent;
declare const LucideArrowUpAZ: IconComponent;
declare const LucideArrowUpCircle: IconComponent;
declare const LucideArrowUpDown: IconComponent;
declare const LucideArrowUpFromDot: IconComponent;
declare const LucideArrowUpFromLine: IconComponent;
declare const LucideArrowUpLeft: IconComponent;
declare const LucideArrowUpLeftFromCircle: IconComponent;
declare const LucideArrowUpLeftFromSquare: IconComponent;
declare const LucideArrowUpLeftSquare: IconComponent;
declare const LucideArrowUpNarrowWide: IconComponent;
declare const LucideArrowUpRight: IconComponent;
declare const LucideArrowUpRightFromCircle: IconComponent;
declare const LucideArrowUpRightFromSquare: IconComponent;
declare const LucideArrowUpRightSquare: IconComponent;
declare const LucideArrowUpSquare: IconComponent;
declare const LucideArrowUpToLine: IconComponent;
declare const LucideArrowUpWideNarrow: IconComponent;
declare const LucideArrowUpZa: IconComponent;
declare const LucideArrowUpZA: IconComponent;
declare const LucideAsterisk: IconComponent;
declare const LucideAsteriskSquare: IconComponent;
declare const LucideAstroid: IconComponent;
declare const LucideAtom: IconComponent;
declare const LucideAtSign: IconComponent;
declare const LucideAudioLines: IconComponent;
declare const LucideAudioLinesOff: IconComponent;
declare const LucideAudioLinesX: IconComponent;
declare const LucideAudioWaveform: IconComponent;
declare const LucideAward: IconComponent;
declare const LucideAxe: IconComponent;
declare const LucideAxis3d: IconComponent;
declare const LucideAxis3D: IconComponent;
declare const LucideBaby: IconComponent;
declare const LucideBackpack: IconComponent;
declare const LucideBadge: IconComponent;
declare const LucideBadgeAlert: IconComponent;
declare const LucideBadgeCent: IconComponent;
declare const LucideBadgeCheck: IconComponent;
declare const LucideBadgeDollarSign: IconComponent;
declare const LucideBadgeEuro: IconComponent;
declare const LucideBadgeHelp: IconComponent;
declare const LucideBadgeIndianRupee: IconComponent;
declare const LucideBadgeInfo: IconComponent;
declare const LucideBadgeJapaneseYen: IconComponent;
declare const LucideBadgeMinus: IconComponent;
declare const LucideBadgePercent: IconComponent;
declare const LucideBadgePlus: IconComponent;
declare const LucideBadgePoundSterling: IconComponent;
declare const LucideBadgeQuestionMark: IconComponent;
declare const LucideBadgeRussianRuble: IconComponent;
declare const LucideBadgeSwissFranc: IconComponent;
declare const LucideBadgeTurkishLira: IconComponent;
declare const LucideBadgeX: IconComponent;
declare const LucideBaggageClaim: IconComponent;
declare const LucideBalloon: IconComponent;
declare const LucideBan: IconComponent;
declare const LucideBanana: IconComponent;
declare const LucideBandage: IconComponent;
declare const LucideBangladeshiTaka: IconComponent;
declare const LucideBanknote: IconComponent;
declare const LucideBanknoteArrowDown: IconComponent;
declare const LucideBanknoteArrowUp: IconComponent;
declare const LucideBanknoteCheck: IconComponent;
declare const LucideBanknoteX: IconComponent;
declare const LucideBarChart: IconComponent;
declare const LucideBarChart2: IconComponent;
declare const LucideBarChart3: IconComponent;
declare const LucideBarChart4: IconComponent;
declare const LucideBarChartBig: IconComponent;
declare const LucideBarChartHorizontal: IconComponent;
declare const LucideBarChartHorizontalBig: IconComponent;
declare const LucideBarcode: IconComponent;
declare const LucideBarrel: IconComponent;
declare const LucideBaseline: IconComponent;
declare const LucideBath: IconComponent;
declare const LucideBattery: IconComponent;
declare const LucideBatteryCharging: IconComponent;
declare const LucideBatteryFull: IconComponent;
declare const LucideBatteryLow: IconComponent;
declare const LucideBatteryMedium: IconComponent;
declare const LucideBatteryPlus: IconComponent;
declare const LucideBatteryWarning: IconComponent;
declare const LucideBeaker: IconComponent;
declare const LucideBean: IconComponent;
declare const LucideBeanOff: IconComponent;
declare const LucideBed: IconComponent;
declare const LucideBedDouble: IconComponent;
declare const LucideBedSingle: IconComponent;
declare const LucideBeef: IconComponent;
declare const LucideBeefOff: IconComponent;
declare const LucideBeer: IconComponent;
declare const LucideBeerOff: IconComponent;
declare const LucideBell: IconComponent;
declare const LucideBellCheck: IconComponent;
declare const LucideBellDot: IconComponent;
declare const LucideBellElectric: IconComponent;
declare const LucideBellMinus: IconComponent;
declare const LucideBellOff: IconComponent;
declare const LucideBellPlus: IconComponent;
declare const LucideBellRing: IconComponent;
declare const LucideBetweenHorizonalEnd: IconComponent;
declare const LucideBetweenHorizonalStart: IconComponent;
declare const LucideBetweenHorizontalEnd: IconComponent;
declare const LucideBetweenHorizontalStart: IconComponent;
declare const LucideBetweenVerticalEnd: IconComponent;
declare const LucideBetweenVerticalStart: IconComponent;
declare const LucideBicepsFlexed: IconComponent;
declare const LucideBike: IconComponent;
declare const LucideBinary: IconComponent;
declare const LucideBinoculars: IconComponent;
declare const LucideBiohazard: IconComponent;
declare const LucideBird: IconComponent;
declare const LucideBirdhouse: IconComponent;
declare const LucideBitcoin: IconComponent;
declare const LucideBlend: IconComponent;
declare const LucideBlender: IconComponent;
declare const LucideBlinds: IconComponent;
declare const LucideBlocks: IconComponent;
declare const LucideBluetooth: IconComponent;
declare const LucideBluetoothConnected: IconComponent;
declare const LucideBluetoothOff: IconComponent;
declare const LucideBluetoothSearching: IconComponent;
declare const LucideBold: IconComponent;
declare const LucideBolt: IconComponent;
declare const LucideBomb: IconComponent;
declare const LucideBone: IconComponent;
declare const LucideBoneFracture: IconComponent;
declare const LucideBook: IconComponent;
declare const LucideBookA: IconComponent;
declare const LucideBookAlert: IconComponent;
declare const LucideBookAudio: IconComponent;
declare const LucideBookBookmark: IconComponent;
declare const LucideBookCheck: IconComponent;
declare const LucideBookCopy: IconComponent;
declare const LucideBookDashed: IconComponent;
declare const LucideBookDown: IconComponent;
declare const LucideBookHeadphones: IconComponent;
declare const LucideBookHeart: IconComponent;
declare const LucideBookImage: IconComponent;
declare const LucideBookKey: IconComponent;
declare const LucideBookLock: IconComponent;
declare const LucideBookmark: IconComponent;
declare const LucideBookmarkCheck: IconComponent;
declare const LucideBookMarked: IconComponent;
declare const LucideBookmarkMinus: IconComponent;
declare const LucideBookmarkOff: IconComponent;
declare const LucideBookmarkPlus: IconComponent;
declare const LucideBookmarkX: IconComponent;
declare const LucideBookMinus: IconComponent;
declare const LucideBookOpen: IconComponent;
declare const LucideBookOpenCheck: IconComponent;
declare const LucideBookOpenText: IconComponent;
declare const LucideBookPlus: IconComponent;
declare const LucideBookSearch: IconComponent;
declare const LucideBookTemplate: IconComponent;
declare const LucideBookText: IconComponent;
declare const LucideBookType: IconComponent;
declare const LucideBookUp: IconComponent;
declare const LucideBookUp2: IconComponent;
declare const LucideBookUser: IconComponent;
declare const LucideBookX: IconComponent;
declare const LucideBoomBox: IconComponent;
declare const LucideBot: IconComponent;
declare const LucideBotMessageSquare: IconComponent;
declare const LucideBotOff: IconComponent;
declare const LucideBottleWine: IconComponent;
declare const LucideBowArrow: IconComponent;
declare const LucideBox: IconComponent;
declare const LucideBoxes: IconComponent;
declare const LucideBoxSelect: IconComponent;
declare const LucideBraces: IconComponent;
declare const LucideBrackets: IconComponent;
declare const LucideBrain: IconComponent;
declare const LucideBrainCircuit: IconComponent;
declare const LucideBrainCog: IconComponent;
declare const LucideBrickWall: IconComponent;
declare const LucideBrickWallFire: IconComponent;
declare const LucideBrickWallShield: IconComponent;
declare const LucideBridge: IconComponent;
declare const LucideBriefcase: IconComponent;
declare const LucideBriefcaseBusiness: IconComponent;
declare const LucideBriefcaseConveyorBelt: IconComponent;
declare const LucideBriefcaseMedical: IconComponent;
declare const LucideBriefcasePlus: IconComponent;
declare const LucideBringToFront: IconComponent;
declare const LucideBroccoli: IconComponent;
declare const LucideBroom: IconComponent;
declare const LucideBroomSparkles: IconComponent;
declare const LucideBrush: IconComponent;
declare const LucideBrushCleaning: IconComponent;
declare const LucideBubbles: IconComponent;
declare const LucideBug: IconComponent;
declare const LucideBugOff: IconComponent;
declare const LucideBugPlay: IconComponent;
declare const LucideBuilding: IconComponent;
declare const LucideBuilding2: IconComponent;
declare const LucideBuildingComplex: IconComponent;
declare const LucideBuildingComplexPlus: IconComponent;
declare const LucideBus: IconComponent;
declare const LucideBusFront: IconComponent;
declare const LucideCable: IconComponent;
declare const LucideCableCar: IconComponent;
declare const LucideCake: IconComponent;
declare const LucideCakeSlice: IconComponent;
declare const LucideCalculator: IconComponent;
declare const LucideCalendar: IconComponent;
declare const LucideCalendar1: IconComponent;
declare const LucideCalendarArrowDown: IconComponent;
declare const LucideCalendarArrowUp: IconComponent;
declare const LucideCalendarCheck: IconComponent;
declare const LucideCalendarCheck2: IconComponent;
declare const LucideCalendarChevronsRight: IconComponent;
declare const LucideCalendarClock: IconComponent;
declare const LucideCalendarCog: IconComponent;
declare const LucideCalendarDays: IconComponent;
declare const LucideCalendarFold: IconComponent;
declare const LucideCalendarHeart: IconComponent;
declare const LucideCalendarMinus: IconComponent;
declare const LucideCalendarMinus2: IconComponent;
declare const LucideCalendarOff: IconComponent;
declare const LucideCalendarPlus: IconComponent;
declare const LucideCalendarPlus2: IconComponent;
declare const LucideCalendarRange: IconComponent;
declare const LucideCalendars: IconComponent;
declare const LucideCalendarSearch: IconComponent;
declare const LucideCalendarSync: IconComponent;
declare const LucideCalendarX: IconComponent;
declare const LucideCalendarX2: IconComponent;
declare const LucideCamera: IconComponent;
declare const LucideCameraOff: IconComponent;
declare const LucideCan: IconComponent;
declare const LucideCandlestickChart: IconComponent;
declare const LucideCandy: IconComponent;
declare const LucideCandyCane: IconComponent;
declare const LucideCandyOff: IconComponent;
declare const LucideCannabis: IconComponent;
declare const LucideCannabisOff: IconComponent;
declare const LucideCanSoda: IconComponent;
declare const LucideCaptions: IconComponent;
declare const LucideCaptionsOff: IconComponent;
declare const LucideCar: IconComponent;
declare const LucideCaravan: IconComponent;
declare const LucideCarBattery: IconComponent;
declare const LucideCardSim: IconComponent;
declare const LucideCarFront: IconComponent;
declare const LucideCarrot: IconComponent;
declare const LucideCarTaxiFront: IconComponent;
declare const LucideCarton: IconComponent;
declare const LucideCartonOff: IconComponent;
declare const LucideCaseLower: IconComponent;
declare const LucideCaseSensitive: IconComponent;
declare const LucideCaseUpper: IconComponent;
declare const LucideCassetteTape: IconComponent;
declare const LucideCast: IconComponent;
declare const LucideCastle: IconComponent;
declare const LucideCat: IconComponent;
declare const LucideCctv: IconComponent;
declare const LucideCctvOff: IconComponent;
declare const LucideChartArea: IconComponent;
declare const LucideChartBar: IconComponent;
declare const LucideChartBarBig: IconComponent;
declare const LucideChartBarDecreasing: IconComponent;
declare const LucideChartBarIncreasing: IconComponent;
declare const LucideChartBarStacked: IconComponent;
declare const LucideChartCandlestick: IconComponent;
declare const LucideChartColumn: IconComponent;
declare const LucideChartColumnBig: IconComponent;
declare const LucideChartColumnDecreasing: IconComponent;
declare const LucideChartColumnIncreasing: IconComponent;
declare const LucideChartColumnStacked: IconComponent;
declare const LucideChartGantt: IconComponent;
declare const LucideChartLine: IconComponent;
declare const LucideChartNetwork: IconComponent;
declare const LucideChartNoAxesColumn: IconComponent;
declare const LucideChartNoAxesColumnDecreasing: IconComponent;
declare const LucideChartNoAxesColumnIncreasing: IconComponent;
declare const LucideChartNoAxesCombined: IconComponent;
declare const LucideChartNoAxesGantt: IconComponent;
declare const LucideChartPie: IconComponent;
declare const LucideChartScatter: IconComponent;
declare const LucideChartSpline: IconComponent;
declare const LucideCheck: IconComponent;
declare const LucideCheckCheck: IconComponent;
declare const LucideCheckCircle: IconComponent;
declare const LucideCheckCircle2: IconComponent;
declare const LucideCheckLine: IconComponent;
declare const LucideCheckSquare: IconComponent;
declare const LucideCheckSquare2: IconComponent;
declare const LucideChefHat: IconComponent;
declare const LucideCherry: IconComponent;
declare const LucideChessBishop: IconComponent;
declare const LucideChessKing: IconComponent;
declare const LucideChessKnight: IconComponent;
declare const LucideChessPawn: IconComponent;
declare const LucideChessQueen: IconComponent;
declare const LucideChessRook: IconComponent;
declare const LucideChevronDown: IconComponent;
declare const LucideChevronDownCircle: IconComponent;
declare const LucideChevronDownSquare: IconComponent;
declare const LucideChevronFirst: IconComponent;
declare const LucideChevronLast: IconComponent;
declare const LucideChevronLeft: IconComponent;
declare const LucideChevronLeftCircle: IconComponent;
declare const LucideChevronLeftSquare: IconComponent;
declare const LucideChevronRight: IconComponent;
declare const LucideChevronRightCircle: IconComponent;
declare const LucideChevronRightSquare: IconComponent;
declare const LucideChevronsDown: IconComponent;
declare const LucideChevronsDownUp: IconComponent;
declare const LucideChevronsLeft: IconComponent;
declare const LucideChevronsLeftRight: IconComponent;
declare const LucideChevronsLeftRightEllipsis: IconComponent;
declare const LucideChevronsRight: IconComponent;
declare const LucideChevronsRightLeft: IconComponent;
declare const LucideChevronsUp: IconComponent;
declare const LucideChevronsUpDown: IconComponent;
declare const LucideChevronUp: IconComponent;
declare const LucideChevronUpCircle: IconComponent;
declare const LucideChevronUpSquare: IconComponent;
declare const LucideChurch: IconComponent;
declare const LucideCigarette: IconComponent;
declare const LucideCigaretteOff: IconComponent;
declare const LucideCircle: IconComponent;
declare const LucideCircleAlert: IconComponent;
declare const LucideCircleArrowDown: IconComponent;
declare const LucideCircleArrowLeft: IconComponent;
declare const LucideCircleArrowOutDownLeft: IconComponent;
declare const LucideCircleArrowOutDownRight: IconComponent;
declare const LucideCircleArrowOutUpLeft: IconComponent;
declare const LucideCircleArrowOutUpRight: IconComponent;
declare const LucideCircleArrowRight: IconComponent;
declare const LucideCircleArrowUp: IconComponent;
declare const LucideCircleCheck: IconComponent;
declare const LucideCircleCheckBig: IconComponent;
declare const LucideCircleChevronDown: IconComponent;
declare const LucideCircleChevronLeft: IconComponent;
declare const LucideCircleChevronRight: IconComponent;
declare const LucideCircleChevronUp: IconComponent;
declare const LucideCircleDashed: IconComponent;
declare const LucideCircleDashedCheck: IconComponent;
declare const LucideCircleDivide: IconComponent;
declare const LucideCircleDollarSign: IconComponent;
declare const LucideCircleDot: IconComponent;
declare const LucideCircleDotDashed: IconComponent;
declare const LucideCircleEllipsis: IconComponent;
declare const LucideCircleEqual: IconComponent;
declare const LucideCircleEuro: IconComponent;
declare const LucideCircleFadingArrowUp: IconComponent;
declare const LucideCircleFadingPlus: IconComponent;
declare const LucideCircleGauge: IconComponent;
declare const LucideCircleHelp: IconComponent;
declare const LucideCircleMinus: IconComponent;
declare const LucideCircleOff: IconComponent;
declare const LucideCircleParking: IconComponent;
declare const LucideCircleParkingOff: IconComponent;
declare const LucideCirclePause: IconComponent;
declare const LucideCirclePercent: IconComponent;
declare const LucideCirclePile: IconComponent;
declare const LucideCirclePlay: IconComponent;
declare const LucideCirclePlus: IconComponent;
declare const LucideCirclePoundSterling: IconComponent;
declare const LucideCirclePower: IconComponent;
declare const LucideCircleQuestionMark: IconComponent;
declare const LucideCircleSlash: IconComponent;
declare const LucideCircleSlash2: IconComponent;
declare const LucideCircleSlashed: IconComponent;
declare const LucideCircleSmall: IconComponent;
declare const LucideCircleStar: IconComponent;
declare const LucideCircleStop: IconComponent;
declare const LucideCircleUser: IconComponent;
declare const LucideCircleUserRound: IconComponent;
declare const LucideCircleX: IconComponent;
declare const LucideCircuitBoard: IconComponent;
declare const LucideCitrus: IconComponent;
declare const LucideClapperboard: IconComponent;
declare const LucideClefAlto: IconComponent;
declare const LucideClefBass: IconComponent;
declare const LucideClefTreble: IconComponent;
declare const LucideClipboard: IconComponent;
declare const LucideClipboardCheck: IconComponent;
declare const LucideClipboardClock: IconComponent;
declare const LucideClipboardCopy: IconComponent;
declare const LucideClipboardEdit: IconComponent;
declare const LucideClipboardList: IconComponent;
declare const LucideClipboardMinus: IconComponent;
declare const LucideClipboardPaste: IconComponent;
declare const LucideClipboardPen: IconComponent;
declare const LucideClipboardPenLine: IconComponent;
declare const LucideClipboardPlus: IconComponent;
declare const LucideClipboardSignature: IconComponent;
declare const LucideClipboardType: IconComponent;
declare const LucideClipboardX: IconComponent;
declare const LucideClock: IconComponent;
declare const LucideClock1: IconComponent;
declare const LucideClock10: IconComponent;
declare const LucideClock11: IconComponent;
declare const LucideClock12: IconComponent;
declare const LucideClock2: IconComponent;
declare const LucideClock3: IconComponent;
declare const LucideClock4: IconComponent;
declare const LucideClock5: IconComponent;
declare const LucideClock6: IconComponent;
declare const LucideClock7: IconComponent;
declare const LucideClock8: IconComponent;
declare const LucideClock9: IconComponent;
declare const LucideClockAlert: IconComponent;
declare const LucideClockArrowDown: IconComponent;
declare const LucideClockArrowLeft: IconComponent;
declare const LucideClockArrowRight: IconComponent;
declare const LucideClockArrowUp: IconComponent;
declare const LucideClockCheck: IconComponent;
declare const LucideClockFading: IconComponent;
declare const LucideClockPlus: IconComponent;
declare const LucideClosedCaption: IconComponent;
declare const LucideCloud: IconComponent;
declare const LucideCloudAlert: IconComponent;
declare const LucideCloudBackup: IconComponent;
declare const LucideCloudCheck: IconComponent;
declare const LucideCloudCog: IconComponent;
declare const LucideCloudDownload: IconComponent;
declare const LucideCloudDrizzle: IconComponent;
declare const LucideCloudFog: IconComponent;
declare const LucideCloudHail: IconComponent;
declare const LucideCloudLightning: IconComponent;
declare const LucideCloudMoon: IconComponent;
declare const LucideCloudMoonRain: IconComponent;
declare const LucideCloudOff: IconComponent;
declare const LucideCloudRain: IconComponent;
declare const LucideCloudRainWind: IconComponent;
declare const LucideCloudSnow: IconComponent;
declare const LucideCloudSun: IconComponent;
declare const LucideCloudSunRain: IconComponent;
declare const LucideCloudSync: IconComponent;
declare const LucideCloudUpload: IconComponent;
declare const LucideCloudy: IconComponent;
declare const LucideClover: IconComponent;
declare const LucideClub: IconComponent;
declare const LucideCode: IconComponent;
declare const LucideCode2: IconComponent;
declare const LucideCodeSquare: IconComponent;
declare const LucideCodeXml: IconComponent;
declare const LucideCoffee: IconComponent;
declare const LucideCog: IconComponent;
declare const LucideCoins: IconComponent;
declare const LucideColumns: IconComponent;
declare const LucideColumns2: IconComponent;
declare const LucideColumns3: IconComponent;
declare const LucideColumns3Cog: IconComponent;
declare const LucideColumns4: IconComponent;
declare const LucideColumnsSettings: IconComponent;
declare const LucideCombine: IconComponent;
declare const LucideCommand: IconComponent;
declare const LucideCompass: IconComponent;
declare const LucideComponent: IconComponent;
declare const LucideComputer: IconComponent;
declare const LucideConciergeBell: IconComponent;
declare const LucideCone: IconComponent;
declare const LucideConstruction: IconComponent;
declare const LucideContact: IconComponent;
declare const LucideContact2: IconComponent;
declare const LucideContactRound: IconComponent;
declare const LucideContainer: IconComponent;
declare const LucideContrast: IconComponent;
declare const LucideCookie: IconComponent;
declare const LucideCookingPot: IconComponent;
declare const LucideCopy: IconComponent;
declare const LucideCopyCheck: IconComponent;
declare const LucideCopyleft: IconComponent;
declare const LucideCopyMinus: IconComponent;
declare const LucideCopyPlus: IconComponent;
declare const LucideCopyright: IconComponent;
declare const LucideCopySlash: IconComponent;
declare const LucideCopyX: IconComponent;
declare const LucideCornerDownLeft: IconComponent;
declare const LucideCornerDownRight: IconComponent;
declare const LucideCornerLeftDown: IconComponent;
declare const LucideCornerLeftUp: IconComponent;
declare const LucideCornerRightDown: IconComponent;
declare const LucideCornerRightUp: IconComponent;
declare const LucideCornerUpLeft: IconComponent;
declare const LucideCornerUpRight: IconComponent;
declare const LucideCpu: IconComponent;
declare const LucideCreativeCommons: IconComponent;
declare const LucideCreditCard: IconComponent;
declare const LucideCreditCardCheck: IconComponent;
declare const LucideCreditCardMinus: IconComponent;
declare const LucideCreditCardPlus: IconComponent;
declare const LucideCreditCardReader: IconComponent;
declare const LucideCreditCardX: IconComponent;
declare const LucideCroissant: IconComponent;
declare const LucideCrop: IconComponent;
declare const LucideCross: IconComponent;
declare const LucideCrosshair: IconComponent;
declare const LucideCrown: IconComponent;
declare const LucideCuboid: IconComponent;
declare const LucideCupcake: IconComponent;
declare const LucideCupSoda: IconComponent;
declare const LucideCurlyBraces: IconComponent;
declare const LucideCurrency: IconComponent;
declare const LucideCylinder: IconComponent;
declare const LucideDam: IconComponent;
declare const LucideDatabase: IconComponent;
declare const LucideDatabaseArrowDown: IconComponent;
declare const LucideDatabaseArrowUp: IconComponent;
declare const LucideDatabaseBackup: IconComponent;
declare const LucideDatabaseCheck: IconComponent;
declare const LucideDatabaseMinus: IconComponent;
declare const LucideDatabasePlus: IconComponent;
declare const LucideDatabaseSearch: IconComponent;
declare const LucideDatabaseX: IconComponent;
declare const LucideDatabaseZap: IconComponent;
declare const LucideDecimalsArrowLeft: IconComponent;
declare const LucideDecimalsArrowRight: IconComponent;
declare const LucideDelete: IconComponent;
declare const LucideDessert: IconComponent;
declare const LucideDiameter: IconComponent;
declare const LucideDiamond: IconComponent;
declare const LucideDiamondMinus: IconComponent;
declare const LucideDiamondPercent: IconComponent;
declare const LucideDiamondPlus: IconComponent;
declare const LucideDice1: IconComponent;
declare const LucideDice2: IconComponent;
declare const LucideDice3: IconComponent;
declare const LucideDice4: IconComponent;
declare const LucideDice5: IconComponent;
declare const LucideDice6: IconComponent;
declare const LucideDices: IconComponent;
declare const LucideDiff: IconComponent;
declare const LucideDisc: IconComponent;
declare const LucideDisc2: IconComponent;
declare const LucideDisc3: IconComponent;
declare const LucideDiscAlbum: IconComponent;
declare const LucideDivide: IconComponent;
declare const LucideDivideCircle: IconComponent;
declare const LucideDivideSquare: IconComponent;
declare const LucideDna: IconComponent;
declare const LucideDnaOff: IconComponent;
declare const LucideDock: IconComponent;
declare const LucideDog: IconComponent;
declare const LucideDollarSign: IconComponent;
declare const LucideDome: IconComponent;
declare const LucideDonut: IconComponent;
declare const LucideDoorClosed: IconComponent;
declare const LucideDoorClosedCog: IconComponent;
declare const LucideDoorClosedLocked: IconComponent;
declare const LucideDoorClosedPackage: IconComponent;
declare const LucideDoorOpen: IconComponent;
declare const LucideDoorStairwell: IconComponent;
declare const LucideDot: IconComponent;
declare const LucideDotSquare: IconComponent;
declare const LucideDownload: IconComponent;
declare const LucideDownloadCloud: IconComponent;
declare const LucideDraftingCompass: IconComponent;
declare const LucideDrama: IconComponent;
declare const LucideDrill: IconComponent;
declare const LucideDrone: IconComponent;
declare const LucideDroplet: IconComponent;
declare const LucideDropletOff: IconComponent;
declare const LucideDroplets: IconComponent;
declare const LucideDrum: IconComponent;
declare const LucideDrumstick: IconComponent;
declare const LucideDumbbell: IconComponent;
declare const LucideEar: IconComponent;
declare const LucideEarOff: IconComponent;
declare const LucideEarth: IconComponent;
declare const LucideEarthLock: IconComponent;
declare const LucideEclipse: IconComponent;
declare const LucideEdit: IconComponent;
declare const LucideEdit2: IconComponent;
declare const LucideEdit3: IconComponent;
declare const LucideEgg: IconComponent;
declare const LucideEggFried: IconComponent;
declare const LucideEggOff: IconComponent;
declare const LucideEject: IconComponent;
declare const LucideEllipse: IconComponent;
declare const LucideEllipsis: IconComponent;
declare const LucideEllipsisVertical: IconComponent;
declare const LucideEngine: IconComponent;
declare const LucideEqual: IconComponent;
declare const LucideEqualApproximately: IconComponent;
declare const LucideEqualApproximatelyNot: IconComponent;
declare const LucideEqualNot: IconComponent;
declare const LucideEqualSquare: IconComponent;
declare const LucideEraser: IconComponent;
declare const LucideEthernetPort: IconComponent;
declare const LucideEuro: IconComponent;
declare const LucideEvCharger: IconComponent;
declare const LucideExpand: IconComponent;
declare const LucideExternalLink: IconComponent;
declare const LucideEye: IconComponent;
declare const LucideEyeClosed: IconComponent;
declare const LucideEyeDashed: IconComponent;
declare const LucideEyeOff: IconComponent;
declare const LucideFaceAngry: IconComponent;
declare const LucideFaceExpressionless: IconComponent;
declare const LucideFaceGrinning: IconComponent;
declare const LucideFaceNeutral: IconComponent;
declare const LucideFaceSlightlyFrowning: IconComponent;
declare const LucideFaceSlightlySmiling: IconComponent;
declare const LucideFaceSlightlySmilingPlus: IconComponent;
declare const LucideFactory: IconComponent;
declare const LucideFan: IconComponent;
declare const LucideFastForward: IconComponent;
declare const LucideFaucet: IconComponent;
declare const LucideFeather: IconComponent;
declare const LucideFence: IconComponent;
declare const LucideFerrisWheel: IconComponent;
declare const LucideFile: IconComponent;
declare const LucideFileArchive: IconComponent;
declare const LucideFileAudio: IconComponent;
declare const LucideFileAudio2: IconComponent;
declare const LucideFileAxis3d: IconComponent;
declare const LucideFileAxis3D: IconComponent;
declare const LucideFileBadge: IconComponent;
declare const LucideFileBadge2: IconComponent;
declare const LucideFileBarChart: IconComponent;
declare const LucideFileBarChart2: IconComponent;
declare const LucideFileBox: IconComponent;
declare const LucideFileBraces: IconComponent;
declare const LucideFileBracesCorner: IconComponent;
declare const LucideFileChartColumn: IconComponent;
declare const LucideFileChartColumnIncreasing: IconComponent;
declare const LucideFileChartLine: IconComponent;
declare const LucideFileChartPie: IconComponent;
declare const LucideFileCheck: IconComponent;
declare const LucideFileCheck2: IconComponent;
declare const LucideFileCheckCorner: IconComponent;
declare const LucideFileClock: IconComponent;
declare const LucideFileCode: IconComponent;
declare const LucideFileCode2: IconComponent;
declare const LucideFileCodeCorner: IconComponent;
declare const LucideFileCog: IconComponent;
declare const LucideFileCog2: IconComponent;
declare const LucideFileDiff: IconComponent;
declare const LucideFileDigit: IconComponent;
declare const LucideFileDown: IconComponent;
declare const LucideFileEdit: IconComponent;
declare const LucideFileExclamationPoint: IconComponent;
declare const LucideFileHeadphone: IconComponent;
declare const LucideFileHeart: IconComponent;
declare const LucideFileImage: IconComponent;
declare const LucideFileInput: IconComponent;
declare const LucideFileJson: IconComponent;
declare const LucideFileJson2: IconComponent;
declare const LucideFileKey: IconComponent;
declare const LucideFileKey2: IconComponent;
declare const LucideFileLineChart: IconComponent;
declare const LucideFileLock: IconComponent;
declare const LucideFileLock2: IconComponent;
declare const LucideFileMinus: IconComponent;
declare const LucideFileMinus2: IconComponent;
declare const LucideFileMinusCorner: IconComponent;
declare const LucideFileMusic: IconComponent;
declare const LucideFileOutput: IconComponent;
declare const LucideFilePen: IconComponent;
declare const LucideFilePenLine: IconComponent;
declare const LucideFilePieChart: IconComponent;
declare const LucideFilePlay: IconComponent;
declare const LucideFilePlus: IconComponent;
declare const LucideFilePlus2: IconComponent;
declare const LucideFilePlusCorner: IconComponent;
declare const LucideFileQuestion: IconComponent;
declare const LucideFileQuestionMark: IconComponent;
declare const LucideFiles: IconComponent;
declare const LucideFileScan: IconComponent;
declare const LucideFileSearch: IconComponent;
declare const LucideFileSearch2: IconComponent;
declare const LucideFileSearchCorner: IconComponent;
declare const LucideFileSignal: IconComponent;
declare const LucideFileSignature: IconComponent;
declare const LucideFileSliders: IconComponent;
declare const LucideFileSpreadsheet: IconComponent;
declare const LucideFileStack: IconComponent;
declare const LucideFileSymlink: IconComponent;
declare const LucideFileTerminal: IconComponent;
declare const LucideFileText: IconComponent;
declare const LucideFileType: IconComponent;
declare const LucideFileType2: IconComponent;
declare const LucideFileTypeCorner: IconComponent;
declare const LucideFileUp: IconComponent;
declare const LucideFileUser: IconComponent;
declare const LucideFileVideo: IconComponent;
declare const LucideFileVideo2: IconComponent;
declare const LucideFileVideoCamera: IconComponent;
declare const LucideFileVolume: IconComponent;
declare const LucideFileVolume2: IconComponent;
declare const LucideFileWarning: IconComponent;
declare const LucideFileX: IconComponent;
declare const LucideFileX2: IconComponent;
declare const LucideFileXCorner: IconComponent;
declare const LucideFilm: IconComponent;
declare const LucideFilter: IconComponent;
declare const LucideFilterX: IconComponent;
declare const LucideFingerprint: IconComponent;
declare const LucideFingerprintPattern: IconComponent;
declare const LucideFireExtinguisher: IconComponent;
declare const LucideFish: IconComponent;
declare const LucideFishingHook: IconComponent;
declare const LucideFishingRod: IconComponent;
declare const LucideFishOff: IconComponent;
declare const LucideFishSymbol: IconComponent;
declare const LucideFlag: IconComponent;
declare const LucideFlagOff: IconComponent;
declare const LucideFlagTriangleLeft: IconComponent;
declare const LucideFlagTriangleRight: IconComponent;
declare const LucideFlame: IconComponent;
declare const LucideFlameKindling: IconComponent;
declare const LucideFlashlight: IconComponent;
declare const LucideFlashlightOff: IconComponent;
declare const LucideFlaskConical: IconComponent;
declare const LucideFlaskConicalOff: IconComponent;
declare const LucideFlaskRound: IconComponent;
declare const LucideFlipHorizontal: IconComponent;
declare const LucideFlipHorizontal2: IconComponent;
declare const LucideFlipVertical: IconComponent;
declare const LucideFlipVertical2: IconComponent;
declare const LucideFlower: IconComponent;
declare const LucideFlower2: IconComponent;
declare const LucideFocus: IconComponent;
declare const LucideFolder: IconComponent;
declare const LucideFolderArchive: IconComponent;
declare const LucideFolderBookmark: IconComponent;
declare const LucideFolderCheck: IconComponent;
declare const LucideFolderClock: IconComponent;
declare const LucideFolderClosed: IconComponent;
declare const LucideFolderCode: IconComponent;
declare const LucideFolderCog: IconComponent;
declare const LucideFolderCog2: IconComponent;
declare const LucideFolderDot: IconComponent;
declare const LucideFolderDown: IconComponent;
declare const LucideFolderEdit: IconComponent;
declare const LucideFolderGit: IconComponent;
declare const LucideFolderGit2: IconComponent;
declare const LucideFolderHeart: IconComponent;
declare const LucideFolderInput: IconComponent;
declare const LucideFolderKanban: IconComponent;
declare const LucideFolderKey: IconComponent;
declare const LucideFolderLock: IconComponent;
declare const LucideFolderMinus: IconComponent;
declare const LucideFolderOpen: IconComponent;
declare const LucideFolderOpenDot: IconComponent;
declare const LucideFolderOutput: IconComponent;
declare const LucideFolderPen: IconComponent;
declare const LucideFolderPlus: IconComponent;
declare const LucideFolderRoot: IconComponent;
declare const LucideFolders: IconComponent;
declare const LucideFolderSearch: IconComponent;
declare const LucideFolderSearch2: IconComponent;
declare const LucideFolderSymlink: IconComponent;
declare const LucideFolderSync: IconComponent;
declare const LucideFolderTree: IconComponent;
declare const LucideFolderUp: IconComponent;
declare const LucideFolderX: IconComponent;
declare const LucideFoldHorizontal: IconComponent;
declare const LucideFoldVertical: IconComponent;
declare const LucideFootprints: IconComponent;
declare const LucideForkKnife: IconComponent;
declare const LucideForkKnifeCrossed: IconComponent;
declare const LucideForklift: IconComponent;
declare const LucideForm: IconComponent;
declare const LucideFormInput: IconComponent;
declare const LucideForward: IconComponent;
declare const LucideFrame: IconComponent;
declare const LucideFrown: IconComponent;
declare const LucideFuel: IconComponent;
declare const LucideFullscreen: IconComponent;
declare const LucideFunctionSquare: IconComponent;
declare const LucideFunnel: IconComponent;
declare const LucideFunnelPlus: IconComponent;
declare const LucideFunnelX: IconComponent;
declare const LucideGalaxy: IconComponent;
declare const LucideGalleryHorizontal: IconComponent;
declare const LucideGalleryHorizontalEnd: IconComponent;
declare const LucideGalleryThumbnails: IconComponent;
declare const LucideGalleryVertical: IconComponent;
declare const LucideGalleryVerticalEnd: IconComponent;
declare const LucideGamepad: IconComponent;
declare const LucideGamepad2: IconComponent;
declare const LucideGamepadDirectional: IconComponent;
declare const LucideGanttChart: IconComponent;
declare const LucideGanttChartSquare: IconComponent;
declare const LucideGapHorizontal: IconComponent;
declare const LucideGapVertical: IconComponent;
declare const LucideGauge: IconComponent;
declare const LucideGaugeCircle: IconComponent;
declare const LucideGavel: IconComponent;
declare const LucideGem: IconComponent;
declare const LucideGeorgianLari: IconComponent;
declare const LucideGerm: IconComponent;
declare const LucideGermOff: IconComponent;
declare const LucideGhost: IconComponent;
declare const LucideGift: IconComponent;
declare const LucideGitBranch: IconComponent;
declare const LucideGitBranchMinus: IconComponent;
declare const LucideGitBranchPlus: IconComponent;
declare const LucideGitCommit: IconComponent;
declare const LucideGitCommitHorizontal: IconComponent;
declare const LucideGitCommitVertical: IconComponent;
declare const LucideGitCompare: IconComponent;
declare const LucideGitCompareArrows: IconComponent;
declare const LucideGitFork: IconComponent;
declare const LucideGitGraph: IconComponent;
declare const LucideGitMerge: IconComponent;
declare const LucideGitMergeConflict: IconComponent;
declare const LucideGitPullRequest: IconComponent;
declare const LucideGitPullRequestArrow: IconComponent;
declare const LucideGitPullRequestClosed: IconComponent;
declare const LucideGitPullRequestCreate: IconComponent;
declare const LucideGitPullRequestCreateArrow: IconComponent;
declare const LucideGitPullRequestDraft: IconComponent;
declare const LucideGlasses: IconComponent;
declare const LucideGlassWater: IconComponent;
declare const LucideGlobe: IconComponent;
declare const LucideGlobe2: IconComponent;
declare const LucideGlobeCheck: IconComponent;
declare const LucideGlobeCode: IconComponent;
declare const LucideGlobeLock: IconComponent;
declare const LucideGlobeOff: IconComponent;
declare const LucideGlobeX: IconComponent;
declare const LucideGoal: IconComponent;
declare const LucideGpu: IconComponent;
declare const LucideGrab: IconComponent;
declare const LucideGraduationCap: IconComponent;
declare const LucideGrape: IconComponent;
declare const LucideGrid: IconComponent;
declare const LucideGrid2x2: IconComponent;
declare const LucideGrid2X2: IconComponent;
declare const LucideGrid2x2Check: IconComponent;
declare const LucideGrid2X2Check: IconComponent;
declare const LucideGrid2x2Plus: IconComponent;
declare const LucideGrid2X2Plus: IconComponent;
declare const LucideGrid2x2X: IconComponent;
declare const LucideGrid2X2X: IconComponent;
declare const LucideGrid3x2: IconComponent;
declare const LucideGrid3x3: IconComponent;
declare const LucideGrid3X3: IconComponent;
declare const LucideGrip: IconComponent;
declare const LucideGripHorizontal: IconComponent;
declare const LucideGripVertical: IconComponent;
declare const LucideGroceries: IconComponent;
declare const LucideGroup: IconComponent;
declare const LucideGuitar: IconComponent;
declare const LucideHam: IconComponent;
declare const LucideHamburger: IconComponent;
declare const LucideHammer: IconComponent;
declare const LucideHand: IconComponent;
declare const LucideHandbag: IconComponent;
declare const LucideHandCoins: IconComponent;
declare const LucideHandFist: IconComponent;
declare const LucideHandGrab: IconComponent;
declare const LucideHandHeart: IconComponent;
declare const LucideHandHelping: IconComponent;
declare const LucideHandleBottomRight: IconComponent;
declare const LucideHandMetal: IconComponent;
declare const LucideHandPlatter: IconComponent;
declare const LucideHandshake: IconComponent;
declare const LucideHardDrive: IconComponent;
declare const LucideHardDriveDownload: IconComponent;
declare const LucideHardDriveUpload: IconComponent;
declare const LucideHardHat: IconComponent;
declare const LucideHash: IconComponent;
declare const LucideHatGlasses: IconComponent;
declare const LucideHaze: IconComponent;
declare const LucideHd: IconComponent;
declare const LucideHdmiPort: IconComponent;
declare const LucideHeading: IconComponent;
declare const LucideHeading1: IconComponent;
declare const LucideHeading2: IconComponent;
declare const LucideHeading3: IconComponent;
declare const LucideHeading4: IconComponent;
declare const LucideHeading5: IconComponent;
declare const LucideHeading6: IconComponent;
declare const LucideHeadphoneOff: IconComponent;
declare const LucideHeadphones: IconComponent;
declare const LucideHeadset: IconComponent;
declare const LucideHeart: IconComponent;
declare const LucideHeartCrack: IconComponent;
declare const LucideHeartHandshake: IconComponent;
declare const LucideHeartMinus: IconComponent;
declare const LucideHeartOff: IconComponent;
declare const LucideHeartPlus: IconComponent;
declare const LucideHeartPulse: IconComponent;
declare const LucideHeartX: IconComponent;
declare const LucideHeater: IconComponent;
declare const LucideHelicopter: IconComponent;
declare const LucideHelpCircle: IconComponent;
declare const LucideHelpingHand: IconComponent;
declare const LucideHexagon: IconComponent;
declare const LucideHighlighter: IconComponent;
declare const LucideHikingStick: IconComponent;
declare const LucideHistory: IconComponent;
declare const LucideHome: IconComponent;
declare const LucideHop: IconComponent;
declare const LucideHopOff: IconComponent;
declare const LucideHospital: IconComponent;
declare const LucideHotel: IconComponent;
declare const LucideHourglass: IconComponent;
declare const LucideHourglassCog: IconComponent;
declare const LucideHouse: IconComponent;
declare const LucideHouseCog: IconComponent;
declare const LucideHouseHeart: IconComponent;
declare const LucideHousePlug: IconComponent;
declare const LucideHousePlus: IconComponent;
declare const LucideHouses: IconComponent;
declare const LucideHouseWifi: IconComponent;
declare const LucideIceCream: IconComponent;
declare const LucideIceCream2: IconComponent;
declare const LucideIceCreamBowl: IconComponent;
declare const LucideIceCreamCone: IconComponent;
declare const LucideIdCard: IconComponent;
declare const LucideIdCardLanyard: IconComponent;
declare const LucideImage: IconComponent;
declare const LucideImageDown: IconComponent;
declare const LucideImageMinus: IconComponent;
declare const LucideImageOff: IconComponent;
declare const LucideImagePlay: IconComponent;
declare const LucideImagePlus: IconComponent;
declare const LucideImages: IconComponent;
declare const LucideImageUp: IconComponent;
declare const LucideImageUpscale: IconComponent;
declare const LucideImport: IconComponent;
declare const LucideInbox: IconComponent;
declare const LucideIndent: IconComponent;
declare const LucideIndentDecrease: IconComponent;
declare const LucideIndentIncrease: IconComponent;
declare const LucideIndianRupee: IconComponent;
declare const LucideInfinity: IconComponent;
declare const LucideInfo: IconComponent;
declare const LucideInspect: IconComponent;
declare const LucideInspectionPanel: IconComponent;
declare const LucideItalic: IconComponent;
declare const LucideIterationCcw: IconComponent;
declare const LucideIterationCw: IconComponent;
declare const LucideIvBag: IconComponent;
declare const LucideJapaneseYen: IconComponent;
declare const LucideJoystick: IconComponent;
declare const LucideKanban: IconComponent;
declare const LucideKanbanSquare: IconComponent;
declare const LucideKanbanSquareDashed: IconComponent;
declare const LucideKayak: IconComponent;
declare const LucideKazakhTenge: IconComponent;
declare const LucideKey: IconComponent;
declare const LucideKeyboard: IconComponent;
declare const LucideKeyboardMusic: IconComponent;
declare const LucideKeyboardOff: IconComponent;
declare const LucideKeyRound: IconComponent;
declare const LucideKeySquare: IconComponent;
declare const LucideLambda: IconComponent;
declare const LucideLamp: IconComponent;
declare const LucideLampCeiling: IconComponent;
declare const LucideLampDesk: IconComponent;
declare const LucideLampFloor: IconComponent;
declare const LucideLampWallDown: IconComponent;
declare const LucideLampWallUp: IconComponent;
declare const LucideLandmark: IconComponent;
declare const LucideLandPlot: IconComponent;
declare const LucideLanguages: IconComponent;
declare const LucideLaptop: IconComponent;
declare const LucideLaptop2: IconComponent;
declare const LucideLaptopMinimal: IconComponent;
declare const LucideLaptopMinimalCheck: IconComponent;
declare const LucideLasso: IconComponent;
declare const LucideLassoSelect: IconComponent;
declare const LucideLaugh: IconComponent;
declare const LucideLayerArrowDown: IconComponent;
declare const LucideLayerArrowUp: IconComponent;
declare const LucideLayers: IconComponent;
declare const LucideLayers2: IconComponent;
declare const LucideLayers3: IconComponent;
declare const LucideLayersArrowDown: IconComponent;
declare const LucideLayersArrowUp: IconComponent;
declare const LucideLayersMinus: IconComponent;
declare const LucideLayersPlus: IconComponent;
declare const LucideLayout: IconComponent;
declare const LucideLayoutArrowDown: IconComponent;
declare const LucideLayoutArrowRight: IconComponent;
declare const LucideLayoutDashboard: IconComponent;
declare const LucideLayoutFreeform: IconComponent;
declare const LucideLayoutGrid: IconComponent;
declare const LucideLayoutGridCircles: IconComponent;
declare const LucideLayoutList: IconComponent;
declare const LucideLayoutPanelLeft: IconComponent;
declare const LucideLayoutPanelTop: IconComponent;
declare const LucideLayoutTemplate: IconComponent;
declare const LucideLeaf: IconComponent;
declare const LucideLeafyGreen: IconComponent;
declare const LucideLectern: IconComponent;
declare const LucideLens: IconComponent;
declare const LucideLensConcave: IconComponent;
declare const LucideLensConvex: IconComponent;
declare const LucideLetters: IconComponent;
declare const LucideLetterText: IconComponent;
declare const LucideLibrary: IconComponent;
declare const LucideLibraryBig: IconComponent;
declare const LucideLibrarySquare: IconComponent;
declare const LucideLifeBuoy: IconComponent;
declare const LucideLigature: IconComponent;
declare const LucideLightbulb: IconComponent;
declare const LucideLightbulbOff: IconComponent;
declare const LucideLighthouse: IconComponent;
declare const LucideLineChart: IconComponent;
declare const LucideLineDotBottomVertical: IconComponent;
declare const LucideLineDotLeftHorizontal: IconComponent;
declare const LucideLineDotRightHorizontal: IconComponent;
declare const LucideLineDotTopVertical: IconComponent;
declare const LucideLineSquiggle: IconComponent;
declare const LucideLineStyle: IconComponent;
declare const LucideLink: IconComponent;
declare const LucideLink2: IconComponent;
declare const LucideLink2Off: IconComponent;
declare const LucideList: IconComponent;
declare const LucideListCheck: IconComponent;
declare const LucideListChecks: IconComponent;
declare const LucideListChevronsDownUp: IconComponent;
declare const LucideListChevronsUpDown: IconComponent;
declare const LucideListClock: IconComponent;
declare const LucideListCollapse: IconComponent;
declare const LucideListEnd: IconComponent;
declare const LucideListFilter: IconComponent;
declare const LucideListFilterPlus: IconComponent;
declare const LucideListIndentDecrease: IconComponent;
declare const LucideListIndentIncrease: IconComponent;
declare const LucideListMinus: IconComponent;
declare const LucideListMusic: IconComponent;
declare const LucideListOrdered: IconComponent;
declare const LucideListPlus: IconComponent;
declare const LucideListRestart: IconComponent;
declare const LucideListSortAscending: IconComponent;
declare const LucideListSortDescending: IconComponent;
declare const LucideListStart: IconComponent;
declare const LucideListTodo: IconComponent;
declare const LucideListTree: IconComponent;
declare const LucideListVideo: IconComponent;
declare const LucideListX: IconComponent;
declare const LucideLoader: IconComponent;
declare const LucideLoader2: IconComponent;
declare const LucideLoaderCircle: IconComponent;
declare const LucideLoaderPinwheel: IconComponent;
declare const LucideLocate: IconComponent;
declare const LucideLocateFixed: IconComponent;
declare const LucideLocateOff: IconComponent;
declare const LucideLocationEdit: IconComponent;
declare const LucideLock: IconComponent;
declare const LucideLockKeyhole: IconComponent;
declare const LucideLockKeyholeOpen: IconComponent;
declare const LucideLockOpen: IconComponent;
declare const LucideLogIn: IconComponent;
declare const LucideLogOut: IconComponent;
declare const LucideLogs: IconComponent;
declare const LucideLollipop: IconComponent;
declare const LucideLuggage: IconComponent;
declare const LucideMagnet: IconComponent;
declare const LucideMail: IconComponent;
declare const LucideMailBadge: IconComponent;
declare const LucideMailbox: IconComponent;
declare const LucideMailCheck: IconComponent;
declare const LucideMailClock: IconComponent;
declare const LucideMailDot: IconComponent;
declare const LucideMailMinus: IconComponent;
declare const LucideMailOpen: IconComponent;
declare const LucideMailPen: IconComponent;
declare const LucideMailPlus: IconComponent;
declare const LucideMailQuestion: IconComponent;
declare const LucideMailQuestionMark: IconComponent;
declare const LucideMails: IconComponent;
declare const LucideMailSearch: IconComponent;
declare const LucideMailWarning: IconComponent;
declare const LucideMailX: IconComponent;
declare const LucideMap: IconComponent;
declare const LucideMapMinus: IconComponent;
declare const LucideMapPin: IconComponent;
declare const LucideMapPinCheck: IconComponent;
declare const LucideMapPinCheckInside: IconComponent;
declare const LucideMapPinHouse: IconComponent;
declare const LucideMapPinMinus: IconComponent;
declare const LucideMapPinMinusInside: IconComponent;
declare const LucideMapPinned: IconComponent;
declare const LucideMapPinOff: IconComponent;
declare const LucideMapPinPen: IconComponent;
declare const LucideMapPinPlus: IconComponent;
declare const LucideMapPinPlusInside: IconComponent;
declare const LucideMapPinSearch: IconComponent;
declare const LucideMapPinX: IconComponent;
declare const LucideMapPinXInside: IconComponent;
declare const LucideMapPlus: IconComponent;
declare const LucideMars: IconComponent;
declare const LucideMarsStroke: IconComponent;
declare const LucideMartini: IconComponent;
declare const LucideMaximize: IconComponent;
declare const LucideMaximize2: IconComponent;
declare const LucideMedal: IconComponent;
declare const LucideMegaphone: IconComponent;
declare const LucideMegaphoneOff: IconComponent;
declare const LucideMeh: IconComponent;
declare const LucideMemoryStick: IconComponent;
declare const LucideMenu: IconComponent;
declare const LucideMenuSquare: IconComponent;
declare const LucideMerge: IconComponent;
declare const LucideMessageCircle: IconComponent;
declare const LucideMessageCircleCheck: IconComponent;
declare const LucideMessageCircleCode: IconComponent;
declare const LucideMessageCircleDashed: IconComponent;
declare const LucideMessageCircleDashedCheck: IconComponent;
declare const LucideMessageCircleHeart: IconComponent;
declare const LucideMessageCircleMore: IconComponent;
declare const LucideMessageCircleOff: IconComponent;
declare const LucideMessageCirclePlus: IconComponent;
declare const LucideMessageCircleQuestion: IconComponent;
declare const LucideMessageCircleQuestionMark: IconComponent;
declare const LucideMessageCircleReply: IconComponent;
declare const LucideMessageCircleWarning: IconComponent;
declare const LucideMessageCircleX: IconComponent;
declare const LucideMessagesCircle: IconComponent;
declare const LucideMessageSquare: IconComponent;
declare const LucideMessageSquareCheck: IconComponent;
declare const LucideMessageSquareCode: IconComponent;
declare const LucideMessageSquareDashed: IconComponent;
declare const LucideMessageSquareDiff: IconComponent;
declare const LucideMessageSquareDot: IconComponent;
declare const LucideMessageSquareHeart: IconComponent;
declare const LucideMessageSquareLock: IconComponent;
declare const LucideMessageSquareMore: IconComponent;
declare const LucideMessageSquareOff: IconComponent;
declare const LucideMessageSquarePlus: IconComponent;
declare const LucideMessageSquareQuote: IconComponent;
declare const LucideMessageSquareReply: IconComponent;
declare const LucideMessageSquareShare: IconComponent;
declare const LucideMessageSquareText: IconComponent;
declare const LucideMessageSquareWarning: IconComponent;
declare const LucideMessageSquareX: IconComponent;
declare const LucideMessagesSquare: IconComponent;
declare const LucideMetronome: IconComponent;
declare const LucideMic: IconComponent;
declare const LucideMic2: IconComponent;
declare const LucideMicAudioLines: IconComponent;
declare const LucideMicOff: IconComponent;
declare const LucideMicrochip: IconComponent;
declare const LucideMicroscope: IconComponent;
declare const LucideMicrowave: IconComponent;
declare const LucideMicSignal: IconComponent;
declare const LucideMicVocal: IconComponent;
declare const LucideMidiPort: IconComponent;
declare const LucideMilestone: IconComponent;
declare const LucideMilk: IconComponent;
declare const LucideMilkOff: IconComponent;
declare const LucideMinimize: IconComponent;
declare const LucideMinimize2: IconComponent;
declare const LucideMinus: IconComponent;
declare const LucideMinusCircle: IconComponent;
declare const LucideMinusSquare: IconComponent;
declare const LucideMirrorRectangular: IconComponent;
declare const LucideMirrorRound: IconComponent;
declare const LucideMonitor: IconComponent;
declare const LucideMonitorCheck: IconComponent;
declare const LucideMonitorCloud: IconComponent;
declare const LucideMonitorCog: IconComponent;
declare const LucideMonitorDot: IconComponent;
declare const LucideMonitorDown: IconComponent;
declare const LucideMonitorOff: IconComponent;
declare const LucideMonitorPause: IconComponent;
declare const LucideMonitorPc: IconComponent;
declare const LucideMonitorPlay: IconComponent;
declare const LucideMonitorSmartphone: IconComponent;
declare const LucideMonitorSpeaker: IconComponent;
declare const LucideMonitorStop: IconComponent;
declare const LucideMonitorUp: IconComponent;
declare const LucideMonitorX: IconComponent;
declare const LucideMoon: IconComponent;
declare const LucideMoonStar: IconComponent;
declare const LucideMop: IconComponent;
declare const LucideMopSparkles: IconComponent;
declare const LucideMoreHorizontal: IconComponent;
declare const LucideMoreVertical: IconComponent;
declare const LucideMosque: IconComponent;
declare const LucideMotorbike: IconComponent;
declare const LucideMountain: IconComponent;
declare const LucideMountainSnow: IconComponent;
declare const LucideMouse: IconComponent;
declare const LucideMouseLeft: IconComponent;
declare const LucideMouseOff: IconComponent;
declare const LucideMousePointer: IconComponent;
declare const LucideMousePointer2: IconComponent;
declare const LucideMousePointer2Off: IconComponent;
declare const LucideMousePointerBan: IconComponent;
declare const LucideMousePointerClick: IconComponent;
declare const LucideMousePointerSquareDashed: IconComponent;
declare const LucideMouseRight: IconComponent;
declare const LucideMouth: IconComponent;
declare const LucideMouthOff: IconComponent;
declare const LucideMove: IconComponent;
declare const LucideMove3d: IconComponent;
declare const LucideMove3D: IconComponent;
declare const LucideMoveDiagonal: IconComponent;
declare const LucideMoveDiagonal2: IconComponent;
declare const LucideMoveDown: IconComponent;
declare const LucideMoveDownLeft: IconComponent;
declare const LucideMoveDownRight: IconComponent;
declare const LucideMoveHorizontal: IconComponent;
declare const LucideMoveLeft: IconComponent;
declare const LucideMoveRight: IconComponent;
declare const LucideMoveUp: IconComponent;
declare const LucideMoveUpLeft: IconComponent;
declare const LucideMoveUpRight: IconComponent;
declare const LucideMoveVertical: IconComponent;
declare const LucideMSquare: IconComponent;
declare const LucideMusic: IconComponent;
declare const LucideMusic2: IconComponent;
declare const LucideMusic3: IconComponent;
declare const LucideMusic4: IconComponent;
declare const LucideNavigation: IconComponent;
declare const LucideNavigation2: IconComponent;
declare const LucideNavigation2Off: IconComponent;
declare const LucideNavigationOff: IconComponent;
declare const LucideNepaliRupee: IconComponent;
declare const LucideNetwork: IconComponent;
declare const LucideNewspaper: IconComponent;
declare const LucideNfc: IconComponent;
declare const LucideNonBinary: IconComponent;
declare const LucideNotebook: IconComponent;
declare const LucideNotebookDot: IconComponent;
declare const LucideNotebookPen: IconComponent;
declare const LucideNotebookTabs: IconComponent;
declare const LucideNotebookText: IconComponent;
declare const LucideNotepadText: IconComponent;
declare const LucideNotepadTextDashed: IconComponent;
declare const LucideNut: IconComponent;
declare const LucideNutOff: IconComponent;
declare const LucideOctagon: IconComponent;
declare const LucideOctagonAlert: IconComponent;
declare const LucideOctagonMinus: IconComponent;
declare const LucideOctagonPause: IconComponent;
declare const LucideOctagonX: IconComponent;
declare const LucideOmega: IconComponent;
declare const LucideOption: IconComponent;
declare const LucideOrbit: IconComponent;
declare const LucideOrigami: IconComponent;
declare const LucideOutdent: IconComponent;
declare const LucidePackage: IconComponent;
declare const LucidePackage2: IconComponent;
declare const LucidePackageCheck: IconComponent;
declare const LucidePackageMinus: IconComponent;
declare const LucidePackageOpen: IconComponent;
declare const LucidePackagePlus: IconComponent;
declare const LucidePackageSearch: IconComponent;
declare const LucidePackageX: IconComponent;
declare const LucidePaintbrush: IconComponent;
declare const LucidePaintbrush2: IconComponent;
declare const LucidePaintbrushVertical: IconComponent;
declare const LucidePaintBucket: IconComponent;
declare const LucidePaintRoller: IconComponent;
declare const LucidePalette: IconComponent;
declare const LucidePalmtree: IconComponent;
declare const LucidePanda: IconComponent;
declare const LucidePanelBottom: IconComponent;
declare const LucidePanelBottomClose: IconComponent;
declare const LucidePanelBottomDashed: IconComponent;
declare const LucidePanelBottomInactive: IconComponent;
declare const LucidePanelBottomOpen: IconComponent;
declare const LucidePanelLeft: IconComponent;
declare const LucidePanelLeftClose: IconComponent;
declare const LucidePanelLeftDashed: IconComponent;
declare const LucidePanelLeftInactive: IconComponent;
declare const LucidePanelLeftOpen: IconComponent;
declare const LucidePanelLeftRightDashed: IconComponent;
declare const LucidePanelRight: IconComponent;
declare const LucidePanelRightClose: IconComponent;
declare const LucidePanelRightDashed: IconComponent;
declare const LucidePanelRightInactive: IconComponent;
declare const LucidePanelRightOpen: IconComponent;
declare const LucidePanelsLeftBottom: IconComponent;
declare const LucidePanelsLeftRight: IconComponent;
declare const LucidePanelsRightBottom: IconComponent;
declare const LucidePanelsTopBottom: IconComponent;
declare const LucidePanelsTopLeft: IconComponent;
declare const LucidePanelTop: IconComponent;
declare const LucidePanelTopBottomDashed: IconComponent;
declare const LucidePanelTopClose: IconComponent;
declare const LucidePanelTopDashed: IconComponent;
declare const LucidePanelTopInactive: IconComponent;
declare const LucidePanelTopOpen: IconComponent;
declare const LucidePaperBag: IconComponent;
declare const LucidePaperclip: IconComponent;
declare const LucideParasol: IconComponent;
declare const LucideParentheses: IconComponent;
declare const LucidePark: IconComponent;
declare const LucideParkingCircle: IconComponent;
declare const LucideParkingCircleOff: IconComponent;
declare const LucideParkingMeter: IconComponent;
declare const LucideParkingSquare: IconComponent;
declare const LucideParkingSquareOff: IconComponent;
declare const LucidePartyPopper: IconComponent;
declare const LucidePause: IconComponent;
declare const LucidePauseCircle: IconComponent;
declare const LucidePauseOctagon: IconComponent;
declare const LucidePawPrint: IconComponent;
declare const LucidePcCase: IconComponent;
declare const LucidePen: IconComponent;
declare const LucidePenBox: IconComponent;
declare const LucidePencil: IconComponent;
declare const LucidePencilLine: IconComponent;
declare const LucidePencilOff: IconComponent;
declare const LucidePencilRuler: IconComponent;
declare const LucidePencilSparkles: IconComponent;
declare const LucidePenLine: IconComponent;
declare const LucidePenOff: IconComponent;
declare const LucidePenSquare: IconComponent;
declare const LucidePentagon: IconComponent;
declare const LucidePenTool: IconComponent;
declare const LucidePercent: IconComponent;
declare const LucidePercentCircle: IconComponent;
declare const LucidePercentDiamond: IconComponent;
declare const LucidePercentSquare: IconComponent;
declare const LucidePersonStanding: IconComponent;
declare const LucidePhi: IconComponent;
declare const LucidePhilippinePeso: IconComponent;
declare const LucidePhone: IconComponent;
declare const LucidePhoneCall: IconComponent;
declare const LucidePhoneForwarded: IconComponent;
declare const LucidePhoneIncoming: IconComponent;
declare const LucidePhoneLog: IconComponent;
declare const LucidePhoneMissed: IconComponent;
declare const LucidePhoneOff: IconComponent;
declare const LucidePhoneOutgoing: IconComponent;
declare const LucidePi: IconComponent;
declare const LucidePiano: IconComponent;
declare const LucidePickaxe: IconComponent;
declare const LucidePictureInPicture: IconComponent;
declare const LucidePictureInPicture2: IconComponent;
declare const LucidePieChart: IconComponent;
declare const LucidePiggyBank: IconComponent;
declare const LucidePilcrow: IconComponent;
declare const LucidePilcrowLeft: IconComponent;
declare const LucidePilcrowRight: IconComponent;
declare const LucidePilcrowSquare: IconComponent;
declare const LucidePill: IconComponent;
declare const LucidePillBottle: IconComponent;
declare const LucidePin: IconComponent;
declare const LucidePinOff: IconComponent;
declare const LucidePipette: IconComponent;
declare const LucidePiSquare: IconComponent;
declare const LucidePizza: IconComponent;
declare const LucidePlane: IconComponent;
declare const LucidePlaneLanding: IconComponent;
declare const LucidePlaneTakeoff: IconComponent;
declare const LucidePlantPot: IconComponent;
declare const LucidePlay: IconComponent;
declare const LucidePlayCircle: IconComponent;
declare const LucidePlayingCard: IconComponent;
declare const LucidePlayingCards: IconComponent;
declare const LucidePlayingCardsFan: IconComponent;
declare const LucidePlayOff: IconComponent;
declare const LucidePlaySquare: IconComponent;
declare const LucidePlug: IconComponent;
declare const LucidePlug2: IconComponent;
declare const LucidePlugZap: IconComponent;
declare const LucidePlugZap2: IconComponent;
declare const LucidePlus: IconComponent;
declare const LucidePlusCircle: IconComponent;
declare const LucidePlusSquare: IconComponent;
declare const LucidePocketKnife: IconComponent;
declare const LucidePodcast: IconComponent;
declare const LucidePodium: IconComponent;
declare const LucidePointer: IconComponent;
declare const LucidePointerOff: IconComponent;
declare const LucidePopcorn: IconComponent;
declare const LucidePopsicle: IconComponent;
declare const LucidePoundSterling: IconComponent;
declare const LucidePower: IconComponent;
declare const LucidePowerCircle: IconComponent;
declare const LucidePowerOff: IconComponent;
declare const LucidePowerSquare: IconComponent;
declare const LucidePresentation: IconComponent;
declare const LucidePrinter: IconComponent;
declare const LucidePrinter3d: IconComponent;
declare const LucidePrinterCheck: IconComponent;
declare const LucidePrinterX: IconComponent;
declare const LucideProjector: IconComponent;
declare const LucideProportions: IconComponent;
declare const LucidePuzzle: IconComponent;
declare const LucidePyramid: IconComponent;
declare const LucideQrCode: IconComponent;
declare const LucideQuote: IconComponent;
declare const LucideRabbit: IconComponent;
declare const LucideRadar: IconComponent;
declare const LucideRadiation: IconComponent;
declare const LucideRadical: IconComponent;
declare const LucideRadio: IconComponent;
declare const LucideRadioOff: IconComponent;
declare const LucideRadioReceiver: IconComponent;
declare const LucideRadioTower: IconComponent;
declare const LucideRadius: IconComponent;
declare const LucideRainbow: IconComponent;
declare const LucideRat: IconComponent;
declare const LucideRatio: IconComponent;
declare const LucideReceipt: IconComponent;
declare const LucideReceiptCent: IconComponent;
declare const LucideReceiptEuro: IconComponent;
declare const LucideReceiptIndianRupee: IconComponent;
declare const LucideReceiptJapaneseYen: IconComponent;
declare const LucideReceiptPoundSterling: IconComponent;
declare const LucideReceiptRussianRuble: IconComponent;
declare const LucideReceiptSwissFranc: IconComponent;
declare const LucideReceiptText: IconComponent;
declare const LucideReceiptTurkishLira: IconComponent;
declare const LucideRectangleCircle: IconComponent;
declare const LucideRectangleEllipsis: IconComponent;
declare const LucideRectangleGoggles: IconComponent;
declare const LucideRectangleHorizontal: IconComponent;
declare const LucideRectangleVertical: IconComponent;
declare const LucideRecycle: IconComponent;
declare const LucideRedo: IconComponent;
declare const LucideRedo2: IconComponent;
declare const LucideRedoDot: IconComponent;
declare const LucideRefreshCcw: IconComponent;
declare const LucideRefreshCcwDot: IconComponent;
declare const LucideRefreshCw: IconComponent;
declare const LucideRefreshCwOff: IconComponent;
declare const LucideRefrigerator: IconComponent;
declare const LucideRegex: IconComponent;
declare const LucideRemoveFormatting: IconComponent;
declare const LucideRepeat: IconComponent;
declare const LucideRepeat1: IconComponent;
declare const LucideRepeat2: IconComponent;
declare const LucideRepeatOff: IconComponent;
declare const LucideReplace: IconComponent;
declare const LucideReplaceAll: IconComponent;
declare const LucideReply: IconComponent;
declare const LucideReplyAll: IconComponent;
declare const LucideRewind: IconComponent;
declare const LucideRibbon: IconComponent;
declare const LucideRoad: IconComponent;
declare const LucideRobotArm: IconComponent;
declare const LucideRobotVacuum: IconComponent;
declare const LucideRocket: IconComponent;
declare const LucideRockingChair: IconComponent;
declare const LucideRollerCoaster: IconComponent;
declare const LucideRose: IconComponent;
declare const LucideRotate3d: IconComponent;
declare const LucideRotate3D: IconComponent;
declare const LucideRotateCcw: IconComponent;
declare const LucideRotateCcwClock: IconComponent;
declare const LucideRotateCcwKey: IconComponent;
declare const LucideRotateCcwSquare: IconComponent;
declare const LucideRotateCw: IconComponent;
declare const LucideRotateCwClock: IconComponent;
declare const LucideRotateCwFadingClock: IconComponent;
declare const LucideRotateCwSquare: IconComponent;
declare const LucideRoute: IconComponent;
declare const LucideRouteOff: IconComponent;
declare const LucideRouter: IconComponent;
declare const LucideRows: IconComponent;
declare const LucideRows2: IconComponent;
declare const LucideRows3: IconComponent;
declare const LucideRows4: IconComponent;
declare const LucideRss: IconComponent;
declare const LucideRugbyBall: IconComponent;
declare const LucideRuler: IconComponent;
declare const LucideRulerDimensionLine: IconComponent;
declare const LucideRussianRuble: IconComponent;
declare const LucideSailboat: IconComponent;
declare const LucideSalad: IconComponent;
declare const LucideSandwich: IconComponent;
declare const LucideSatellite: IconComponent;
declare const LucideSatelliteDish: IconComponent;
declare const LucideSaudiRiyal: IconComponent;
declare const LucideSave: IconComponent;
declare const LucideSaveAll: IconComponent;
declare const LucideSaveCheck: IconComponent;
declare const LucideSaveOff: IconComponent;
declare const LucideSavePen: IconComponent;
declare const LucideSavePlus: IconComponent;
declare const LucideScale: IconComponent;
declare const LucideScale3d: IconComponent;
declare const LucideScale3D: IconComponent;
declare const LucideScaling: IconComponent;
declare const LucideScan: IconComponent;
declare const LucideScanBarcode: IconComponent;
declare const LucideScanBox: IconComponent;
declare const LucideScanEye: IconComponent;
declare const LucideScanFace: IconComponent;
declare const LucideScanHeart: IconComponent;
declare const LucideScanLine: IconComponent;
declare const LucideScanQrCode: IconComponent;
declare const LucideScanSearch: IconComponent;
declare const LucideScanSquare: IconComponent;
declare const LucideScanText: IconComponent;
declare const LucideScatterChart: IconComponent;
declare const LucideSchool: IconComponent;
declare const LucideSchool2: IconComponent;
declare const LucideScissors: IconComponent;
declare const LucideScissorsLineDashed: IconComponent;
declare const LucideScissorsSquare: IconComponent;
declare const LucideScissorsSquareDashedBottom: IconComponent;
declare const LucideScooter: IconComponent;
declare const LucideScratchBlocks: IconComponent;
declare const LucideScreenShare: IconComponent;
declare const LucideScreenShareOff: IconComponent;
declare const LucideScrew: IconComponent;
declare const LucideScroll: IconComponent;
declare const LucideScrollText: IconComponent;
declare const LucideSearch: IconComponent;
declare const LucideSearchAlert: IconComponent;
declare const LucideSearchCheck: IconComponent;
declare const LucideSearchCode: IconComponent;
declare const LucideSearchSlash: IconComponent;
declare const LucideSearchX: IconComponent;
declare const LucideSection: IconComponent;
declare const LucideSend: IconComponent;
declare const LucideSendHorizonal: IconComponent;
declare const LucideSendHorizontal: IconComponent;
declare const LucideSendToBack: IconComponent;
declare const LucideSeparatorHorizontal: IconComponent;
declare const LucideSeparatorVertical: IconComponent;
declare const LucideServer: IconComponent;
declare const LucideServerCog: IconComponent;
declare const LucideServerCrash: IconComponent;
declare const LucideServerOff: IconComponent;
declare const LucideServerPlus: IconComponent;
declare const LucideSettings: IconComponent;
declare const LucideSettings2: IconComponent;
declare const LucideShapes: IconComponent;
declare const LucideShare: IconComponent;
declare const LucideShare2: IconComponent;
declare const LucideSheet: IconComponent;
declare const LucideShell: IconComponent;
declare const LucideShelvingUnit: IconComponent;
declare const LucideShield: IconComponent;
declare const LucideShieldAlert: IconComponent;
declare const LucideShieldBan: IconComponent;
declare const LucideShieldCheck: IconComponent;
declare const LucideShieldClose: IconComponent;
declare const LucideShieldCog: IconComponent;
declare const LucideShieldCogCorner: IconComponent;
declare const LucideShieldEllipsis: IconComponent;
declare const LucideShieldHalf: IconComponent;
declare const LucideShieldHouse: IconComponent;
declare const LucideShieldKeyhole: IconComponent;
declare const LucideShieldLock: IconComponent;
declare const LucideShieldMinus: IconComponent;
declare const LucideShieldOff: IconComponent;
declare const LucideShieldPlus: IconComponent;
declare const LucideShieldQuestion: IconComponent;
declare const LucideShieldQuestionMark: IconComponent;
declare const LucideShieldUser: IconComponent;
declare const LucideShieldX: IconComponent;
declare const LucideShip: IconComponent;
declare const LucideShipCargo: IconComponent;
declare const LucideShipWheel: IconComponent;
declare const LucideShirt: IconComponent;
declare const LucideShoppingBag: IconComponent;
declare const LucideShoppingBasket: IconComponent;
declare const LucideShoppingCart: IconComponent;
declare const LucideShoppingCartMinus: IconComponent;
declare const LucideShoppingCartPlus: IconComponent;
declare const LucideShovel: IconComponent;
declare const LucideShowerHead: IconComponent;
declare const LucideShredder: IconComponent;
declare const LucideShrimp: IconComponent;
declare const LucideShrimpOff: IconComponent;
declare const LucideShrink: IconComponent;
declare const LucideShrub: IconComponent;
declare const LucideShuffle: IconComponent;
declare const LucideSidebar: IconComponent;
declare const LucideSidebarClose: IconComponent;
declare const LucideSidebarOpen: IconComponent;
declare const LucideSigma: IconComponent;
declare const LucideSigmaSquare: IconComponent;
declare const LucideSignal: IconComponent;
declare const LucideSignalHigh: IconComponent;
declare const LucideSignalLow: IconComponent;
declare const LucideSignalMedium: IconComponent;
declare const LucideSignalZero: IconComponent;
declare const LucideSignature: IconComponent;
declare const LucideSignpost: IconComponent;
declare const LucideSignpostBig: IconComponent;
declare const LucideSiren: IconComponent;
declare const LucideSkipBack: IconComponent;
declare const LucideSkipForward: IconComponent;
declare const LucideSkull: IconComponent;
declare const LucideSlash: IconComponent;
declare const LucideSlashSquare: IconComponent;
declare const LucideSlice: IconComponent;
declare const LucideSliders: IconComponent;
declare const LucideSlidersHorizontal: IconComponent;
declare const LucideSlidersVertical: IconComponent;
declare const LucideSmartphone: IconComponent;
declare const LucideSmartphoneCharging: IconComponent;
declare const LucideSmartphoneNfc: IconComponent;
declare const LucideSmile: IconComponent;
declare const LucideSmilePlus: IconComponent;
declare const LucideSnail: IconComponent;
declare const LucideSnowflake: IconComponent;
declare const LucideSoapDispenserDroplet: IconComponent;
declare const LucideSofa: IconComponent;
declare const LucideSolarPanel: IconComponent;
declare const LucideSortAsc: IconComponent;
declare const LucideSortDesc: IconComponent;
declare const LucideSoup: IconComponent;
declare const LucideSpace: IconComponent;
declare const LucideSpade: IconComponent;
declare const LucideSparkle: IconComponent;
declare const LucideSparkles: IconComponent;
declare const LucideSpeaker: IconComponent;
declare const LucideSpeech: IconComponent;
declare const LucideSpellCheck: IconComponent;
declare const LucideSpellCheck2: IconComponent;
declare const LucideSpline: IconComponent;
declare const LucideSplinePointer: IconComponent;
declare const LucideSplit: IconComponent;
declare const LucideSplitSquareHorizontal: IconComponent;
declare const LucideSplitSquareVertical: IconComponent;
declare const LucideSpool: IconComponent;
declare const LucideSportShoe: IconComponent;
declare const LucideSpotlight: IconComponent;
declare const LucideSprayCan: IconComponent;
declare const LucideSprout: IconComponent;
declare const LucideSquare: IconComponent;
declare const LucideSquareActivity: IconComponent;
declare const LucideSquareArrowDown: IconComponent;
declare const LucideSquareArrowDownLeft: IconComponent;
declare const LucideSquareArrowDownRight: IconComponent;
declare const LucideSquareArrowLeft: IconComponent;
declare const LucideSquareArrowOutDownLeft: IconComponent;
declare const LucideSquareArrowOutDownRight: IconComponent;
declare const LucideSquareArrowOutUpLeft: IconComponent;
declare const LucideSquareArrowOutUpRight: IconComponent;
declare const LucideSquareArrowRight: IconComponent;
declare const LucideSquareArrowRightEnter: IconComponent;
declare const LucideSquareArrowRightExit: IconComponent;
declare const LucideSquareArrowUp: IconComponent;
declare const LucideSquareArrowUpLeft: IconComponent;
declare const LucideSquareArrowUpRight: IconComponent;
declare const LucideSquareAsterisk: IconComponent;
declare const LucideSquareBookmark: IconComponent;
declare const LucideSquareBottomDashedScissors: IconComponent;
declare const LucideSquareCenterlineDashedHorizontal: IconComponent;
declare const LucideSquareCenterlineDashedVertical: IconComponent;
declare const LucideSquareChartGantt: IconComponent;
declare const LucideSquareCheck: IconComponent;
declare const LucideSquareCheckBig: IconComponent;
declare const LucideSquareChevronDown: IconComponent;
declare const LucideSquareChevronLeft: IconComponent;
declare const LucideSquareChevronRight: IconComponent;
declare const LucideSquareChevronUp: IconComponent;
declare const LucideSquareCode: IconComponent;
declare const LucideSquareDashed: IconComponent;
declare const LucideSquareDashedBottom: IconComponent;
declare const LucideSquareDashedBottomCode: IconComponent;
declare const LucideSquareDashedKanban: IconComponent;
declare const LucideSquareDashedMousePointer: IconComponent;
declare const LucideSquareDashedPlus: IconComponent;
declare const LucideSquareDashedText: IconComponent;
declare const LucideSquareDashedTopSolid: IconComponent;
declare const LucideSquareDashedX: IconComponent;
declare const LucideSquareDashedXCorner: IconComponent;
declare const LucideSquareDimensions: IconComponent;
declare const LucideSquareDivide: IconComponent;
declare const LucideSquareDot: IconComponent;
declare const LucideSquareEqual: IconComponent;
declare const LucideSquareExclamationPoint: IconComponent;
declare const LucideSquareFunction: IconComponent;
declare const LucideSquareGanttChart: IconComponent;
declare const LucideSquareKanban: IconComponent;
declare const LucideSquareLibrary: IconComponent;
declare const LucideSquareM: IconComponent;
declare const LucideSquareMenu: IconComponent;
declare const LucideSquareMinus: IconComponent;
declare const LucideSquareMousePointer: IconComponent;
declare const LucideSquareOff: IconComponent;
declare const LucideSquareParking: IconComponent;
declare const LucideSquareParkingOff: IconComponent;
declare const LucideSquarePause: IconComponent;
declare const LucideSquarePen: IconComponent;
declare const LucideSquarePercent: IconComponent;
declare const LucideSquarePi: IconComponent;
declare const LucideSquarePilcrow: IconComponent;
declare const LucideSquarePlay: IconComponent;
declare const LucideSquarePlus: IconComponent;
declare const LucideSquarePower: IconComponent;
declare const LucideSquareRadical: IconComponent;
declare const LucideSquareRoundCorner: IconComponent;
declare const LucideSquareScissors: IconComponent;
declare const LucideSquaresExclude: IconComponent;
declare const LucideSquareSigma: IconComponent;
declare const LucideSquaresIntersect: IconComponent;
declare const LucideSquareSlash: IconComponent;
declare const LucideSquareSparkles: IconComponent;
declare const LucideSquareSplitHorizontal: IconComponent;
declare const LucideSquareSplitVertical: IconComponent;
declare const LucideSquareSquare: IconComponent;
declare const LucideSquaresSubtract: IconComponent;
declare const LucideSquareStack: IconComponent;
declare const LucideSquareStar: IconComponent;
declare const LucideSquareStop: IconComponent;
declare const LucideSquaresUnite: IconComponent;
declare const LucideSquareTerminal: IconComponent;
declare const LucideSquareText: IconComponent;
declare const LucideSquareUser: IconComponent;
declare const LucideSquareUserRound: IconComponent;
declare const LucideSquareX: IconComponent;
declare const LucideSquircle: IconComponent;
declare const LucideSquircleDashed: IconComponent;
declare const LucideSquirrel: IconComponent;
declare const LucideStamp: IconComponent;
declare const LucideStar: IconComponent;
declare const LucideStarCheck: IconComponent;
declare const LucideStarHalf: IconComponent;
declare const LucideStarMinus: IconComponent;
declare const LucideStarOff: IconComponent;
declare const LucideStarPlus: IconComponent;
declare const LucideStars: IconComponent;
declare const LucideStarX: IconComponent;
declare const LucideStepBack: IconComponent;
declare const LucideStepForward: IconComponent;
declare const LucideStethoscope: IconComponent;
declare const LucideSticker: IconComponent;
declare const LucideStickyNote: IconComponent;
declare const LucideStickyNoteCheck: IconComponent;
declare const LucideStickyNoteMinus: IconComponent;
declare const LucideStickyNoteOff: IconComponent;
declare const LucideStickyNotePlus: IconComponent;
declare const LucideStickyNotes: IconComponent;
declare const LucideStickyNoteX: IconComponent;
declare const LucideStone: IconComponent;
declare const LucideStopCircle: IconComponent;
declare const LucideStore: IconComponent;
declare const LucideStretchHorizontal: IconComponent;
declare const LucideStretchVertical: IconComponent;
declare const LucideStrikethrough: IconComponent;
declare const LucideSubscript: IconComponent;
declare const LucideSubtitles: IconComponent;
declare const LucideSummary: IconComponent;
declare const LucideSun: IconComponent;
declare const LucideSunDim: IconComponent;
declare const LucideSunMedium: IconComponent;
declare const LucideSunMoon: IconComponent;
declare const LucideSunrise: IconComponent;
declare const LucideSunset: IconComponent;
declare const LucideSunSnow: IconComponent;
declare const LucideSuperscript: IconComponent;
declare const LucideSwatchBook: IconComponent;
declare const LucideSwissFranc: IconComponent;
declare const LucideSwitchCamera: IconComponent;
declare const LucideSword: IconComponent;
declare const LucideSwords: IconComponent;
declare const LucideSyringe: IconComponent;
declare const LucideTable: IconComponent;
declare const LucideTable2: IconComponent;
declare const LucideTableCellsMerge: IconComponent;
declare const LucideTableCellsSplit: IconComponent;
declare const LucideTableColumnsSplit: IconComponent;
declare const LucideTableConfig: IconComponent;
declare const LucideTableOfContents: IconComponent;
declare const LucideTableProperties: IconComponent;
declare const LucideTableRowsSplit: IconComponent;
declare const LucideTablet: IconComponent;
declare const LucideTablets: IconComponent;
declare const LucideTabletSmartphone: IconComponent;
declare const LucideTag: IconComponent;
declare const LucideTagPlus: IconComponent;
declare const LucideTags: IconComponent;
declare const LucideTagX: IconComponent;
declare const LucideTally1: IconComponent;
declare const LucideTally2: IconComponent;
declare const LucideTally3: IconComponent;
declare const LucideTally4: IconComponent;
declare const LucideTally5: IconComponent;
declare const LucideTangent: IconComponent;
declare const LucideTarget: IconComponent;
declare const LucideTelescope: IconComponent;
declare const LucideTent: IconComponent;
declare const LucideTentTree: IconComponent;
declare const LucideTerminal: IconComponent;
declare const LucideTerminalSquare: IconComponent;
declare const LucideTestTube: IconComponent;
declare const LucideTestTube2: IconComponent;
declare const LucideTestTubeDiagonal: IconComponent;
declare const LucideTestTubes: IconComponent;
declare const LucideText: IconComponent;
declare const LucideTextAlignCenter: IconComponent;
declare const LucideTextAlignEnd: IconComponent;
declare const LucideTextAlignJustify: IconComponent;
declare const LucideTextAlignJustifyCenter: IconComponent;
declare const LucideTextAlignJustifyEnd: IconComponent;
declare const LucideTextAlignJustifyStart: IconComponent;
declare const LucideTextAlignStart: IconComponent;
declare const LucideTextCursor: IconComponent;
declare const LucideTextCursorInput: IconComponent;
declare const LucideTextInitial: IconComponent;
declare const LucideTextQuote: IconComponent;
declare const LucideTextSearch: IconComponent;
declare const LucideTextSelect: IconComponent;
declare const LucideTextSelection: IconComponent;
declare const LucideTextWrap: IconComponent;
declare const LucideTheater: IconComponent;
declare const LucideThermometer: IconComponent;
declare const LucideThermometerSnowflake: IconComponent;
declare const LucideThermometerSun: IconComponent;
declare const LucideThumbsDown: IconComponent;
declare const LucideThumbsUp: IconComponent;
declare const LucideTicket: IconComponent;
declare const LucideTicketCheck: IconComponent;
declare const LucideTicketMinus: IconComponent;
declare const LucideTicketPercent: IconComponent;
declare const LucideTicketPlus: IconComponent;
declare const LucideTickets: IconComponent;
declare const LucideTicketSlash: IconComponent;
declare const LucideTicketsPlane: IconComponent;
declare const LucideTicketX: IconComponent;
declare const LucideTicTacToe: IconComponent;
declare const LucideTimeline: IconComponent;
declare const LucideTimer: IconComponent;
declare const LucideTimerOff: IconComponent;
declare const LucideTimerReset: IconComponent;
declare const LucideToggleLeft: IconComponent;
declare const LucideToggleRight: IconComponent;
declare const LucideToilet: IconComponent;
declare const LucideToolbox: IconComponent;
declare const LucideToolCase: IconComponent;
declare const LucideToothbrush: IconComponent;
declare const LucideToothbrushSparkles: IconComponent;
declare const LucideTornado: IconComponent;
declare const LucideTorus: IconComponent;
declare const LucideTouchpad: IconComponent;
declare const LucideTouchpadOff: IconComponent;
declare const LucideTowelRack: IconComponent;
declare const LucideTowerControl: IconComponent;
declare const LucideToyBrick: IconComponent;
declare const LucideTractor: IconComponent;
declare const LucideTrafficCone: IconComponent;
declare const LucideTrailer: IconComponent;
declare const LucideTrain: IconComponent;
declare const LucideTrainFront: IconComponent;
declare const LucideTrainFrontTunnel: IconComponent;
declare const LucideTrainTrack: IconComponent;
declare const LucideTramFront: IconComponent;
declare const LucideTransgender: IconComponent;
declare const LucideTrash: IconComponent;
declare const LucideTrash2: IconComponent;
declare const LucideTrashOff: IconComponent;
declare const LucideTreeDeciduous: IconComponent;
declare const LucideTreePalm: IconComponent;
declare const LucideTreePine: IconComponent;
declare const LucideTrees: IconComponent;
declare const LucideTrendingDown: IconComponent;
declare const LucideTrendingUp: IconComponent;
declare const LucideTrendingUpDown: IconComponent;
declare const LucideTriangle: IconComponent;
declare const LucideTriangleAlert: IconComponent;
declare const LucideTriangleDashed: IconComponent;
declare const LucideTriangleRight: IconComponent;
declare const LucideTrianglesCenterlineDashedHorizontal: IconComponent;
declare const LucideTrianglesCenterlineDashedVertical: IconComponent;
declare const LucideTrophy: IconComponent;
declare const LucideTruck: IconComponent;
declare const LucideTruckElectric: IconComponent;
declare const LucideTubeLotion: IconComponent;
declare const LucideTurkishLira: IconComponent;
declare const LucideTurntable: IconComponent;
declare const LucideTurtle: IconComponent;
declare const LucideTv: IconComponent;
declare const LucideTv2: IconComponent;
declare const LucideTvMinimal: IconComponent;
declare const LucideTvMinimalPlay: IconComponent;
declare const LucideType: IconComponent;
declare const LucideTypeOutline: IconComponent;
declare const LucideUmbrella: IconComponent;
declare const LucideUmbrellaOff: IconComponent;
declare const LucideUnderline: IconComponent;
declare const LucideUndo: IconComponent;
declare const LucideUndo2: IconComponent;
declare const LucideUndoDot: IconComponent;
declare const LucideUnfoldHorizontal: IconComponent;
declare const LucideUnfoldVertical: IconComponent;
declare const LucideUngroup: IconComponent;
declare const LucideUniversity: IconComponent;
declare const LucideUnlink: IconComponent;
declare const LucideUnlink2: IconComponent;
declare const LucideUnlock: IconComponent;
declare const LucideUnlockKeyhole: IconComponent;
declare const LucideUnplug: IconComponent;
declare const LucideUpload: IconComponent;
declare const LucideUploadCloud: IconComponent;
declare const LucideUsb: IconComponent;
declare const LucideUsbCPort: IconComponent;
declare const LucideUser: IconComponent;
declare const LucideUser2: IconComponent;
declare const LucideUserCheck: IconComponent;
declare const LucideUserCheck2: IconComponent;
declare const LucideUserCircle: IconComponent;
declare const LucideUserCircle2: IconComponent;
declare const LucideUserCog: IconComponent;
declare const LucideUserCog2: IconComponent;
declare const LucideUserGroup: IconComponent;
declare const LucideUserKey: IconComponent;
declare const LucideUserLock: IconComponent;
declare const LucideUserMinus: IconComponent;
declare const LucideUserMinus2: IconComponent;
declare const LucideUserPen: IconComponent;
declare const LucideUserPlus: IconComponent;
declare const LucideUserPlus2: IconComponent;
declare const LucideUserRound: IconComponent;
declare const LucideUserRoundArrowLeft: IconComponent;
declare const LucideUserRoundCheck: IconComponent;
declare const LucideUserRoundCog: IconComponent;
declare const LucideUserRoundGroup: IconComponent;
declare const LucideUserRoundKey: IconComponent;
declare const LucideUserRoundMinus: IconComponent;
declare const LucideUserRoundPen: IconComponent;
declare const LucideUserRoundPlus: IconComponent;
declare const LucideUserRoundSearch: IconComponent;
declare const LucideUserRoundStar: IconComponent;
declare const LucideUserRoundX: IconComponent;
declare const LucideUsers: IconComponent;
declare const LucideUsers2: IconComponent;
declare const LucideUserSearch: IconComponent;
declare const LucideUserShield: IconComponent;
declare const LucideUserSquare: IconComponent;
declare const LucideUserSquare2: IconComponent;
declare const LucideUsersRound: IconComponent;
declare const LucideUserStar: IconComponent;
declare const LucideUserX: IconComponent;
declare const LucideUserX2: IconComponent;
declare const LucideUtensils: IconComponent;
declare const LucideUtensilsCrossed: IconComponent;
declare const LucideUtilityPole: IconComponent;
declare const LucideVan: IconComponent;
declare const LucideVariable: IconComponent;
declare const LucideVault: IconComponent;
declare const LucideVectorPolygon: IconComponent;
declare const LucideVectorSquare: IconComponent;
declare const LucideVegan: IconComponent;
declare const LucideVenetianMask: IconComponent;
declare const LucideVenus: IconComponent;
declare const LucideVenusAndMars: IconComponent;
declare const LucideVerified: IconComponent;
declare const LucideVibrate: IconComponent;
declare const LucideVibrateOff: IconComponent;
declare const LucideVideo: IconComponent;
declare const LucideVideoOff: IconComponent;
declare const LucideVideotape: IconComponent;
declare const LucideView: IconComponent;
declare const LucideVirus: IconComponent;
declare const LucideVirusOff: IconComponent;
declare const LucideVoicemail: IconComponent;
declare const LucideVolleyball: IconComponent;
declare const LucideVolume: IconComponent;
declare const LucideVolume1: IconComponent;
declare const LucideVolume2: IconComponent;
declare const LucideVolumeOff: IconComponent;
declare const LucideVolumeX: IconComponent;
declare const LucideVote: IconComponent;
declare const LucideWallet: IconComponent;
declare const LucideWallet2: IconComponent;
declare const LucideWalletCards: IconComponent;
declare const LucideWalletMinimal: IconComponent;
declare const LucideWallpaper: IconComponent;
declare const LucideWand: IconComponent;
declare const LucideWand2: IconComponent;
declare const LucideWandSparkles: IconComponent;
declare const LucideWarehouse: IconComponent;
declare const LucideWashingMachine: IconComponent;
declare const LucideWatch: IconComponent;
declare const LucideWaves: IconComponent;
declare const LucideWavesArrowDown: IconComponent;
declare const LucideWavesArrowUp: IconComponent;
declare const LucideWavesHorizontal: IconComponent;
declare const LucideWavesLadder: IconComponent;
declare const LucideWavesVertical: IconComponent;
declare const LucideWaypoints: IconComponent;
declare const LucideWebcam: IconComponent;
declare const LucideWebcamOff: IconComponent;
declare const LucideWebhook: IconComponent;
declare const LucideWebhookOff: IconComponent;
declare const LucideWeight: IconComponent;
declare const LucideWeightTilde: IconComponent;
declare const LucideWheat: IconComponent;
declare const LucideWheatOff: IconComponent;
declare const LucideWhistle: IconComponent;
declare const LucideWholeWord: IconComponent;
declare const LucideWifi: IconComponent;
declare const LucideWifiCog: IconComponent;
declare const LucideWifiHigh: IconComponent;
declare const LucideWifiLock: IconComponent;
declare const LucideWifiLow: IconComponent;
declare const LucideWifiOff: IconComponent;
declare const LucideWifiPen: IconComponent;
declare const LucideWifiSync: IconComponent;
declare const LucideWifiZero: IconComponent;
declare const LucideWind: IconComponent;
declare const LucideWindArrowDown: IconComponent;
declare const LucideWindArrowUp: IconComponent;
declare const LucideWine: IconComponent;
declare const LucideWineOff: IconComponent;
declare const LucideWorkflow: IconComponent;
declare const LucideWorm: IconComponent;
declare const LucideWrapText: IconComponent;
declare const LucideWrench: IconComponent;
declare const LucideWrenchOff: IconComponent;
declare const LucideX: IconComponent;
declare const LucideXCircle: IconComponent;
declare const LucideXLineTop: IconComponent;
declare const LucideXOctagon: IconComponent;
declare const LucideXSquare: IconComponent;
declare const LucideZap: IconComponent;
declare const LucideZapOff: IconComponent;
declare const LucideZodiacAquarius: IconComponent;
declare const LucideZodiacAries: IconComponent;
declare const LucideZodiacCancer: IconComponent;
declare const LucideZodiacCapricorn: IconComponent;
declare const LucideZodiacGemini: IconComponent;
declare const LucideZodiacLeo: IconComponent;
declare const LucideZodiacLibra: IconComponent;
declare const LucideZodiacOphiuchus: IconComponent;
declare const LucideZodiacPisces: IconComponent;
declare const LucideZodiacSagittarius: IconComponent;
declare const LucideZodiacScorpio: IconComponent;
declare const LucideZodiacTaurus: IconComponent;
declare const LucideZodiacVirgo: IconComponent;
declare const LucideZoomIn: IconComponent;
declare const LucideZoomOut: IconComponent;
declare const Luggage: IconComponent;
declare const LuggageIcon: IconComponent;
declare const Magnet: IconComponent;
declare const MagnetIcon: IconComponent;
declare const Mail: IconComponent;
declare const MailBadge: IconComponent;
declare const MailBadgeIcon: IconComponent;
declare const Mailbox: IconComponent;
declare const MailboxIcon: IconComponent;
declare const MailCheck: IconComponent;
declare const MailCheckIcon: IconComponent;
declare const MailClock: IconComponent;
declare const MailClockIcon: IconComponent;
declare const MailDot: IconComponent;
declare const MailDotIcon: IconComponent;
declare const MailIcon: IconComponent;
declare const MailMinus: IconComponent;
declare const MailMinusIcon: IconComponent;
declare const MailOpen: IconComponent;
declare const MailOpenIcon: IconComponent;
declare const MailPen: IconComponent;
declare const MailPenIcon: IconComponent;
declare const MailPlus: IconComponent;
declare const MailPlusIcon: IconComponent;
declare const MailQuestion: IconComponent;
declare const MailQuestionIcon: IconComponent;
declare const MailQuestionMark: IconComponent;
declare const MailQuestionMarkIcon: IconComponent;
declare const Mails: IconComponent;
declare const MailSearch: IconComponent;
declare const MailSearchIcon: IconComponent;
declare const MailsIcon: IconComponent;
declare const MailWarning: IconComponent;
declare const MailWarningIcon: IconComponent;
declare const MailX: IconComponent;
declare const MailXIcon: IconComponent;
declare const Map: IconComponent;
declare const MapIcon: IconComponent;
declare const MapMinus: IconComponent;
declare const MapMinusIcon: IconComponent;
declare const MapPin: IconComponent;
declare const MapPinCheck: IconComponent;
declare const MapPinCheckIcon: IconComponent;
declare const MapPinCheckInside: IconComponent;
declare const MapPinCheckInsideIcon: IconComponent;
declare const MapPinHouse: IconComponent;
declare const MapPinHouseIcon: IconComponent;
declare const MapPinIcon: IconComponent;
declare const MapPinMinus: IconComponent;
declare const MapPinMinusIcon: IconComponent;
declare const MapPinMinusInside: IconComponent;
declare const MapPinMinusInsideIcon: IconComponent;
declare const MapPinned: IconComponent;
declare const MapPinnedIcon: IconComponent;
declare const MapPinOff: IconComponent;
declare const MapPinOffIcon: IconComponent;
declare const MapPinPen: IconComponent;
declare const MapPinPenIcon: IconComponent;
declare const MapPinPlus: IconComponent;
declare const MapPinPlusIcon: IconComponent;
declare const MapPinPlusInside: IconComponent;
declare const MapPinPlusInsideIcon: IconComponent;
declare const MapPinSearch: IconComponent;
declare const MapPinSearchIcon: IconComponent;
declare const MapPinX: IconComponent;
declare const MapPinXIcon: IconComponent;
declare const MapPinXInside: IconComponent;
declare const MapPinXInsideIcon: IconComponent;
declare const MapPlus: IconComponent;
declare const MapPlusIcon: IconComponent;
declare const Mars: IconComponent;
declare const MarsIcon: IconComponent;
declare const MarsStroke: IconComponent;
declare const MarsStrokeIcon: IconComponent;
declare const Martini: IconComponent;
declare const MartiniIcon: IconComponent;
declare const Maximize: IconComponent;
declare const Maximize2: IconComponent;
declare const Maximize2Icon: IconComponent;
declare const MaximizeIcon: IconComponent;
declare const Medal: IconComponent;
declare const MedalIcon: IconComponent;
declare const Megaphone: IconComponent;
declare const MegaphoneIcon: IconComponent;
declare const MegaphoneOff: IconComponent;
declare const MegaphoneOffIcon: IconComponent;
declare const Meh: IconComponent;
declare const MehIcon: IconComponent;
declare const MemoryStick: IconComponent;
declare const MemoryStickIcon: IconComponent;
declare const Menu: IconComponent;
declare const MenuIcon: IconComponent;
declare const MenuSquare: IconComponent;
declare const MenuSquareIcon: IconComponent;
declare const Merge: IconComponent;
declare const MergeIcon: IconComponent;
declare const MessageCircle: IconComponent;
declare const MessageCircleCheck: IconComponent;
declare const MessageCircleCheckIcon: IconComponent;
declare const MessageCircleCode: IconComponent;
declare const MessageCircleCodeIcon: IconComponent;
declare const MessageCircleDashed: IconComponent;
declare const MessageCircleDashedCheck: IconComponent;
declare const MessageCircleDashedCheckIcon: IconComponent;
declare const MessageCircleDashedIcon: IconComponent;
declare const MessageCircleHeart: IconComponent;
declare const MessageCircleHeartIcon: IconComponent;
declare const MessageCircleIcon: IconComponent;
declare const MessageCircleMore: IconComponent;
declare const MessageCircleMoreIcon: IconComponent;
declare const MessageCircleOff: IconComponent;
declare const MessageCircleOffIcon: IconComponent;
declare const MessageCirclePlus: IconComponent;
declare const MessageCirclePlusIcon: IconComponent;
declare const MessageCircleQuestion: IconComponent;
declare const MessageCircleQuestionIcon: IconComponent;
declare const MessageCircleQuestionMark: IconComponent;
declare const MessageCircleQuestionMarkIcon: IconComponent;
declare const MessageCircleReply: IconComponent;
declare const MessageCircleReplyIcon: IconComponent;
declare const MessageCircleWarning: IconComponent;
declare const MessageCircleWarningIcon: IconComponent;
declare const MessageCircleX: IconComponent;
declare const MessageCircleXIcon: IconComponent;
declare const MessagesCircle: IconComponent;
declare const MessagesCircleIcon: IconComponent;
declare const MessageSquare: IconComponent;
declare const MessageSquareCheck: IconComponent;
declare const MessageSquareCheckIcon: IconComponent;
declare const MessageSquareCode: IconComponent;
declare const MessageSquareCodeIcon: IconComponent;
declare const MessageSquareDashed: IconComponent;
declare const MessageSquareDashedIcon: IconComponent;
declare const MessageSquareDiff: IconComponent;
declare const MessageSquareDiffIcon: IconComponent;
declare const MessageSquareDot: IconComponent;
declare const MessageSquareDotIcon: IconComponent;
declare const MessageSquareHeart: IconComponent;
declare const MessageSquareHeartIcon: IconComponent;
declare const MessageSquareIcon: IconComponent;
declare const MessageSquareLock: IconComponent;
declare const MessageSquareLockIcon: IconComponent;
declare const MessageSquareMore: IconComponent;
declare const MessageSquareMoreIcon: IconComponent;
declare const MessageSquareOff: IconComponent;
declare const MessageSquareOffIcon: IconComponent;
declare const MessageSquarePlus: IconComponent;
declare const MessageSquarePlusIcon: IconComponent;
declare const MessageSquareQuote: IconComponent;
declare const MessageSquareQuoteIcon: IconComponent;
declare const MessageSquareReply: IconComponent;
declare const MessageSquareReplyIcon: IconComponent;
declare const MessageSquareShare: IconComponent;
declare const MessageSquareShareIcon: IconComponent;
declare const MessageSquareText: IconComponent;
declare const MessageSquareTextIcon: IconComponent;
declare const MessageSquareWarning: IconComponent;
declare const MessageSquareWarningIcon: IconComponent;
declare const MessageSquareX: IconComponent;
declare const MessageSquareXIcon: IconComponent;
declare const MessagesSquare: IconComponent;
declare const MessagesSquareIcon: IconComponent;
declare const Metronome: IconComponent;
declare const MetronomeIcon: IconComponent;
declare const Mic: IconComponent;
declare const Mic2: IconComponent;
declare const Mic2Icon: IconComponent;
declare const MicAudioLines: IconComponent;
declare const MicAudioLinesIcon: IconComponent;
declare const MicIcon: IconComponent;
declare const MicOff: IconComponent;
declare const MicOffIcon: IconComponent;
declare const Microchip: IconComponent;
declare const MicrochipIcon: IconComponent;
declare const Microscope: IconComponent;
declare const MicroscopeIcon: IconComponent;
declare const Microwave: IconComponent;
declare const MicrowaveIcon: IconComponent;
declare const MicSignal: IconComponent;
declare const MicSignalIcon: IconComponent;
declare const MicVocal: IconComponent;
declare const MicVocalIcon: IconComponent;
declare const MidiPort: IconComponent;
declare const MidiPortIcon: IconComponent;
declare const Milestone: IconComponent;
declare const MilestoneIcon: IconComponent;
declare const Milk: IconComponent;
declare const MilkIcon: IconComponent;
declare const MilkOff: IconComponent;
declare const MilkOffIcon: IconComponent;
declare const Minimize: IconComponent;
declare const Minimize2: IconComponent;
declare const Minimize2Icon: IconComponent;
declare const MinimizeIcon: IconComponent;
declare const Minus: IconComponent;
declare const MinusCircle: IconComponent;
declare const MinusCircleIcon: IconComponent;
declare const MinusIcon: IconComponent;
declare const MinusSquare: IconComponent;
declare const MinusSquareIcon: IconComponent;
declare const MirrorRectangular: IconComponent;
declare const MirrorRectangularIcon: IconComponent;
declare const MirrorRound: IconComponent;
declare const MirrorRoundIcon: IconComponent;
declare const Monitor: IconComponent;
declare const MonitorCheck: IconComponent;
declare const MonitorCheckIcon: IconComponent;
declare const MonitorCloud: IconComponent;
declare const MonitorCloudIcon: IconComponent;
declare const MonitorCog: IconComponent;
declare const MonitorCogIcon: IconComponent;
declare const MonitorDot: IconComponent;
declare const MonitorDotIcon: IconComponent;
declare const MonitorDown: IconComponent;
declare const MonitorDownIcon: IconComponent;
declare const MonitorIcon: IconComponent;
declare const MonitorOff: IconComponent;
declare const MonitorOffIcon: IconComponent;
declare const MonitorPause: IconComponent;
declare const MonitorPauseIcon: IconComponent;
declare const MonitorPc: IconComponent;
declare const MonitorPcIcon: IconComponent;
declare const MonitorPlay: IconComponent;
declare const MonitorPlayIcon: IconComponent;
declare const MonitorSmartphone: IconComponent;
declare const MonitorSmartphoneIcon: IconComponent;
declare const MonitorSpeaker: IconComponent;
declare const MonitorSpeakerIcon: IconComponent;
declare const MonitorStop: IconComponent;
declare const MonitorStopIcon: IconComponent;
declare const MonitorUp: IconComponent;
declare const MonitorUpIcon: IconComponent;
declare const MonitorX: IconComponent;
declare const MonitorXIcon: IconComponent;
declare const Moon: IconComponent;
declare const MoonIcon: IconComponent;
declare const MoonStar: IconComponent;
declare const MoonStarIcon: IconComponent;
declare const Mop: IconComponent;
declare const MopIcon: IconComponent;
declare const MopSparkles: IconComponent;
declare const MopSparklesIcon: IconComponent;
declare const MoreHorizontal: IconComponent;
declare const MoreHorizontalIcon: IconComponent;
declare const MoreVertical: IconComponent;
declare const MoreVerticalIcon: IconComponent;
declare const Mosque: IconComponent;
declare const MosqueIcon: IconComponent;
declare const Motorbike: IconComponent;
declare const MotorbikeIcon: IconComponent;
declare const Mountain: IconComponent;
declare const MountainIcon: IconComponent;
declare const MountainSnow: IconComponent;
declare const MountainSnowIcon: IconComponent;
declare const Mouse: IconComponent;
declare const MouseIcon: IconComponent;
declare const MouseLeft: IconComponent;
declare const MouseLeftIcon: IconComponent;
declare const MouseOff: IconComponent;
declare const MouseOffIcon: IconComponent;
declare const MousePointer: IconComponent;
declare const MousePointer2: IconComponent;
declare const MousePointer2Icon: IconComponent;
declare const MousePointer2Off: IconComponent;
declare const MousePointer2OffIcon: IconComponent;
declare const MousePointerBan: IconComponent;
declare const MousePointerBanIcon: IconComponent;
declare const MousePointerClick: IconComponent;
declare const MousePointerClickIcon: IconComponent;
declare const MousePointerIcon: IconComponent;
declare const MousePointerSquareDashed: IconComponent;
declare const MousePointerSquareDashedIcon: IconComponent;
declare const MouseRight: IconComponent;
declare const MouseRightIcon: IconComponent;
declare const Mouth: IconComponent;
declare const MouthIcon: IconComponent;
declare const MouthOff: IconComponent;
declare const MouthOffIcon: IconComponent;
declare const Move: IconComponent;
declare const Move3d: IconComponent;
declare const Move3D: IconComponent;
declare const Move3dIcon: IconComponent;
declare const Move3DIcon: IconComponent;
declare const MoveDiagonal: IconComponent;
declare const MoveDiagonal2: IconComponent;
declare const MoveDiagonal2Icon: IconComponent;
declare const MoveDiagonalIcon: IconComponent;
declare const MoveDown: IconComponent;
declare const MoveDownIcon: IconComponent;
declare const MoveDownLeft: IconComponent;
declare const MoveDownLeftIcon: IconComponent;
declare const MoveDownRight: IconComponent;
declare const MoveDownRightIcon: IconComponent;
declare const MoveHorizontal: IconComponent;
declare const MoveHorizontalIcon: IconComponent;
declare const MoveIcon: IconComponent;
declare const MoveLeft: IconComponent;
declare const MoveLeftIcon: IconComponent;
declare const MoveRight: IconComponent;
declare const MoveRightIcon: IconComponent;
declare const MoveUp: IconComponent;
declare const MoveUpIcon: IconComponent;
declare const MoveUpLeft: IconComponent;
declare const MoveUpLeftIcon: IconComponent;
declare const MoveUpRight: IconComponent;
declare const MoveUpRightIcon: IconComponent;
declare const MoveVertical: IconComponent;
declare const MoveVerticalIcon: IconComponent;
declare const MSquare: IconComponent;
declare const MSquareIcon: IconComponent;
declare const Music: IconComponent;
declare const Music2: IconComponent;
declare const Music2Icon: IconComponent;
declare const Music3: IconComponent;
declare const Music3Icon: IconComponent;
declare const Music4: IconComponent;
declare const Music4Icon: IconComponent;
declare const MusicIcon: IconComponent;
declare const Navigation: IconComponent;
declare const Navigation2: IconComponent;
declare const Navigation2Icon: IconComponent;
declare const Navigation2Off: IconComponent;
declare const Navigation2OffIcon: IconComponent;
declare const NavigationIcon: IconComponent;
declare const NavigationOff: IconComponent;
declare const NavigationOffIcon: IconComponent;
declare const NepaliRupee: IconComponent;
declare const NepaliRupeeIcon: IconComponent;
declare const Network: IconComponent;
declare const NetworkIcon: IconComponent;
declare const Newspaper: IconComponent;
declare const NewspaperIcon: IconComponent;
declare const Nfc: IconComponent;
declare const NfcIcon: IconComponent;
declare const NonBinary: IconComponent;
declare const NonBinaryIcon: IconComponent;
declare const Notebook: IconComponent;
declare const NotebookDot: IconComponent;
declare const NotebookDotIcon: IconComponent;
declare const NotebookIcon: IconComponent;
declare const NotebookPen: IconComponent;
declare const NotebookPenIcon: IconComponent;
declare const NotebookTabs: IconComponent;
declare const NotebookTabsIcon: IconComponent;
declare const NotebookText: IconComponent;
declare const NotebookTextIcon: IconComponent;
declare const NotepadText: IconComponent;
declare const NotepadTextDashed: IconComponent;
declare const NotepadTextDashedIcon: IconComponent;
declare const NotepadTextIcon: IconComponent;
declare const Nut: IconComponent;
declare const NutIcon: IconComponent;
declare const NutOff: IconComponent;
declare const NutOffIcon: IconComponent;
declare const Octagon: IconComponent;
declare const OctagonAlert: IconComponent;
declare const OctagonAlertIcon: IconComponent;
declare const OctagonIcon: IconComponent;
declare const OctagonMinus: IconComponent;
declare const OctagonMinusIcon: IconComponent;
declare const OctagonPause: IconComponent;
declare const OctagonPauseIcon: IconComponent;
declare const OctagonX: IconComponent;
declare const OctagonXIcon: IconComponent;
declare const Omega: IconComponent;
declare const OmegaIcon: IconComponent;
declare const Option: IconComponent;
declare const OptionIcon: IconComponent;
declare const Orbit: IconComponent;
declare const OrbitIcon: IconComponent;
declare const Origami: IconComponent;
declare const OrigamiIcon: IconComponent;
declare const Outdent: IconComponent;
declare const OutdentIcon: IconComponent;
declare const Package: IconComponent;
declare const Package2: IconComponent;
declare const Package2Icon: IconComponent;
declare const PackageCheck: IconComponent;
declare const PackageCheckIcon: IconComponent;
declare const PackageIcon: IconComponent;
declare const PackageMinus: IconComponent;
declare const PackageMinusIcon: IconComponent;
declare const PackageOpen: IconComponent;
declare const PackageOpenIcon: IconComponent;
declare const PackagePlus: IconComponent;
declare const PackagePlusIcon: IconComponent;
declare const PackageSearch: IconComponent;
declare const PackageSearchIcon: IconComponent;
declare const PackageX: IconComponent;
declare const PackageXIcon: IconComponent;
declare const Paintbrush: IconComponent;
declare const Paintbrush2: IconComponent;
declare const Paintbrush2Icon: IconComponent;
declare const PaintbrushIcon: IconComponent;
declare const PaintbrushVertical: IconComponent;
declare const PaintbrushVerticalIcon: IconComponent;
declare const PaintBucket: IconComponent;
declare const PaintBucketIcon: IconComponent;
declare const PaintRoller: IconComponent;
declare const PaintRollerIcon: IconComponent;
declare const Palette: IconComponent;
declare const PaletteIcon: IconComponent;
declare const Palmtree: IconComponent;
declare const PalmtreeIcon: IconComponent;
declare const Panda: IconComponent;
declare const PandaIcon: IconComponent;
declare const PanelBottom: IconComponent;
declare const PanelBottomClose: IconComponent;
declare const PanelBottomCloseIcon: IconComponent;
declare const PanelBottomDashed: IconComponent;
declare const PanelBottomDashedIcon: IconComponent;
declare const PanelBottomIcon: IconComponent;
declare const PanelBottomInactive: IconComponent;
declare const PanelBottomInactiveIcon: IconComponent;
declare const PanelBottomOpen: IconComponent;
declare const PanelBottomOpenIcon: IconComponent;
declare const PanelLeft: IconComponent;
declare const PanelLeftClose: IconComponent;
declare const PanelLeftCloseIcon: IconComponent;
declare const PanelLeftDashed: IconComponent;
declare const PanelLeftDashedIcon: IconComponent;
declare const PanelLeftIcon: IconComponent;
declare const PanelLeftInactive: IconComponent;
declare const PanelLeftInactiveIcon: IconComponent;
declare const PanelLeftOpen: IconComponent;
declare const PanelLeftOpenIcon: IconComponent;
declare const PanelLeftRightDashed: IconComponent;
declare const PanelLeftRightDashedIcon: IconComponent;
declare const PanelRight: IconComponent;
declare const PanelRightClose: IconComponent;
declare const PanelRightCloseIcon: IconComponent;
declare const PanelRightDashed: IconComponent;
declare const PanelRightDashedIcon: IconComponent;
declare const PanelRightIcon: IconComponent;
declare const PanelRightInactive: IconComponent;
declare const PanelRightInactiveIcon: IconComponent;
declare const PanelRightOpen: IconComponent;
declare const PanelRightOpenIcon: IconComponent;
declare const PanelsLeftBottom: IconComponent;
declare const PanelsLeftBottomIcon: IconComponent;
declare const PanelsLeftRight: IconComponent;
declare const PanelsLeftRightIcon: IconComponent;
declare const PanelsRightBottom: IconComponent;
declare const PanelsRightBottomIcon: IconComponent;
declare const PanelsTopBottom: IconComponent;
declare const PanelsTopBottomIcon: IconComponent;
declare const PanelsTopLeft: IconComponent;
declare const PanelsTopLeftIcon: IconComponent;
declare const PanelTop: IconComponent;
declare const PanelTopBottomDashed: IconComponent;
declare const PanelTopBottomDashedIcon: IconComponent;
declare const PanelTopClose: IconComponent;
declare const PanelTopCloseIcon: IconComponent;
declare const PanelTopDashed: IconComponent;
declare const PanelTopDashedIcon: IconComponent;
declare const PanelTopIcon: IconComponent;
declare const PanelTopInactive: IconComponent;
declare const PanelTopInactiveIcon: IconComponent;
declare const PanelTopOpen: IconComponent;
declare const PanelTopOpenIcon: IconComponent;
declare const PaperBag: IconComponent;
declare const PaperBagIcon: IconComponent;
declare const Paperclip: IconComponent;
declare const PaperclipIcon: IconComponent;
declare const Parasol: IconComponent;
declare const ParasolIcon: IconComponent;
declare const Parentheses: IconComponent;
declare const ParenthesesIcon: IconComponent;
declare const Park: IconComponent;
declare const ParkIcon: IconComponent;
declare const ParkingCircle: IconComponent;
declare const ParkingCircleIcon: IconComponent;
declare const ParkingCircleOff: IconComponent;
declare const ParkingCircleOffIcon: IconComponent;
declare const ParkingMeter: IconComponent;
declare const ParkingMeterIcon: IconComponent;
declare const ParkingSquare: IconComponent;
declare const ParkingSquareIcon: IconComponent;
declare const ParkingSquareOff: IconComponent;
declare const ParkingSquareOffIcon: IconComponent;
declare const PartyPopper: IconComponent;
declare const PartyPopperIcon: IconComponent;
declare const Pause: IconComponent;
declare const PauseCircle: IconComponent;
declare const PauseCircleIcon: IconComponent;
declare const PauseIcon: IconComponent;
declare const PauseOctagon: IconComponent;
declare const PauseOctagonIcon: IconComponent;
declare const PawPrint: IconComponent;
declare const PawPrintIcon: IconComponent;
declare const PcCase: IconComponent;
declare const PcCaseIcon: IconComponent;
declare const Pen: IconComponent;
declare const PenBox: IconComponent;
declare const PenBoxIcon: IconComponent;
declare const Pencil: IconComponent;
declare const PencilIcon: IconComponent;
declare const PencilLine: IconComponent;
declare const PencilLineIcon: IconComponent;
declare const PencilOff: IconComponent;
declare const PencilOffIcon: IconComponent;
declare const PencilRuler: IconComponent;
declare const PencilRulerIcon: IconComponent;
declare const PencilSparkles: IconComponent;
declare const PencilSparklesIcon: IconComponent;
declare const PenIcon: IconComponent;
declare const PenLine: IconComponent;
declare const PenLineIcon: IconComponent;
declare const PenOff: IconComponent;
declare const PenOffIcon: IconComponent;
declare const PenSquare: IconComponent;
declare const PenSquareIcon: IconComponent;
declare const Pentagon: IconComponent;
declare const PentagonIcon: IconComponent;
declare const PenTool: IconComponent;
declare const PenToolIcon: IconComponent;
declare const Percent: IconComponent;
declare const PercentCircle: IconComponent;
declare const PercentCircleIcon: IconComponent;
declare const PercentDiamond: IconComponent;
declare const PercentDiamondIcon: IconComponent;
declare const PercentIcon: IconComponent;
declare const PercentSquare: IconComponent;
declare const PercentSquareIcon: IconComponent;
declare const PersonStanding: IconComponent;
declare const PersonStandingIcon: IconComponent;
declare const Phi: IconComponent;
declare const PhiIcon: IconComponent;
declare const PhilippinePeso: IconComponent;
declare const PhilippinePesoIcon: IconComponent;
declare const Phone: IconComponent;
declare const PhoneCall: IconComponent;
declare const PhoneCallIcon: IconComponent;
declare const PhoneForwarded: IconComponent;
declare const PhoneForwardedIcon: IconComponent;
declare const PhoneIcon: IconComponent;
declare const PhoneIncoming: IconComponent;
declare const PhoneIncomingIcon: IconComponent;
declare const PhoneLog: IconComponent;
declare const PhoneLogIcon: IconComponent;
declare const PhoneMissed: IconComponent;
declare const PhoneMissedIcon: IconComponent;
declare const PhoneOff: IconComponent;
declare const PhoneOffIcon: IconComponent;
declare const PhoneOutgoing: IconComponent;
declare const PhoneOutgoingIcon: IconComponent;
declare const Pi: IconComponent;
declare const Piano: IconComponent;
declare const PianoIcon: IconComponent;
declare const Pickaxe: IconComponent;
declare const PickaxeIcon: IconComponent;
declare const PictureInPicture: IconComponent;
declare const PictureInPicture2: IconComponent;
declare const PictureInPicture2Icon: IconComponent;
declare const PictureInPictureIcon: IconComponent;
declare const PieChart: IconComponent;
declare const PieChartIcon: IconComponent;
declare const PiggyBank: IconComponent;
declare const PiggyBankIcon: IconComponent;
declare const PiIcon: IconComponent;
declare const Pilcrow: IconComponent;
declare const PilcrowIcon: IconComponent;
declare const PilcrowLeft: IconComponent;
declare const PilcrowLeftIcon: IconComponent;
declare const PilcrowRight: IconComponent;
declare const PilcrowRightIcon: IconComponent;
declare const PilcrowSquare: IconComponent;
declare const PilcrowSquareIcon: IconComponent;
declare const Pill: IconComponent;
declare const PillBottle: IconComponent;
declare const PillBottleIcon: IconComponent;
declare const PillIcon: IconComponent;
declare const Pin: IconComponent;
declare const PinIcon: IconComponent;
declare const PinOff: IconComponent;
declare const PinOffIcon: IconComponent;
declare const Pipette: IconComponent;
declare const PipetteIcon: IconComponent;
declare const PiSquare: IconComponent;
declare const PiSquareIcon: IconComponent;
declare const Pizza: IconComponent;
declare const PizzaIcon: IconComponent;
declare const Plane: IconComponent;
declare const PlaneIcon: IconComponent;
declare const PlaneLanding: IconComponent;
declare const PlaneLandingIcon: IconComponent;
declare const PlaneTakeoff: IconComponent;
declare const PlaneTakeoffIcon: IconComponent;
declare const PlantPot: IconComponent;
declare const PlantPotIcon: IconComponent;
declare const Play: IconComponent;
declare const PlayCircle: IconComponent;
declare const PlayCircleIcon: IconComponent;
declare const PlayIcon: IconComponent;
declare const PlayingCard: IconComponent;
declare const PlayingCardIcon: IconComponent;
declare const PlayingCards: IconComponent;
declare const PlayingCardsFan: IconComponent;
declare const PlayingCardsFanIcon: IconComponent;
declare const PlayingCardsIcon: IconComponent;
declare const PlayOff: IconComponent;
declare const PlayOffIcon: IconComponent;
declare const PlaySquare: IconComponent;
declare const PlaySquareIcon: IconComponent;
declare const Plug: IconComponent;
declare const Plug2: IconComponent;
declare const Plug2Icon: IconComponent;
declare const PlugIcon: IconComponent;
declare const PlugZap: IconComponent;
declare const PlugZap2: IconComponent;
declare const PlugZap2Icon: IconComponent;
declare const PlugZapIcon: IconComponent;
declare const Plus: IconComponent;
declare const PlusCircle: IconComponent;
declare const PlusCircleIcon: IconComponent;
declare const PlusIcon: IconComponent;
declare const PlusSquare: IconComponent;
declare const PlusSquareIcon: IconComponent;
declare const PocketKnife: IconComponent;
declare const PocketKnifeIcon: IconComponent;
declare const Podcast: IconComponent;
declare const PodcastIcon: IconComponent;
declare const Podium: IconComponent;
declare const PodiumIcon: IconComponent;
declare const Pointer: IconComponent;
declare const PointerIcon: IconComponent;
declare const PointerOff: IconComponent;
declare const PointerOffIcon: IconComponent;
declare const Popcorn: IconComponent;
declare const PopcornIcon: IconComponent;
declare const Popsicle: IconComponent;
declare const PopsicleIcon: IconComponent;
declare const PoundSterling: IconComponent;
declare const PoundSterlingIcon: IconComponent;
declare const Power: IconComponent;
declare const PowerCircle: IconComponent;
declare const PowerCircleIcon: IconComponent;
declare const PowerIcon: IconComponent;
declare const PowerOff: IconComponent;
declare const PowerOffIcon: IconComponent;
declare const PowerSquare: IconComponent;
declare const PowerSquareIcon: IconComponent;
declare const Presentation: IconComponent;
declare const PresentationIcon: IconComponent;
declare const Printer: IconComponent;
declare const Printer3d: IconComponent;
declare const Printer3dIcon: IconComponent;
declare const PrinterCheck: IconComponent;
declare const PrinterCheckIcon: IconComponent;
declare const PrinterIcon: IconComponent;
declare const PrinterX: IconComponent;
declare const PrinterXIcon: IconComponent;
declare const Projector: IconComponent;
declare const ProjectorIcon: IconComponent;
declare const Proportions: IconComponent;
declare const ProportionsIcon: IconComponent;
declare const Puzzle: IconComponent;
declare const PuzzleIcon: IconComponent;
declare const Pyramid: IconComponent;
declare const PyramidIcon: IconComponent;
declare const QrCode: IconComponent;
declare const QrCodeIcon: IconComponent;
declare const Quote: IconComponent;
declare const QuoteIcon: IconComponent;
declare const Rabbit: IconComponent;
declare const RabbitIcon: IconComponent;
declare const Radar: IconComponent;
declare const RadarIcon: IconComponent;
declare const Radiation: IconComponent;
declare const RadiationIcon: IconComponent;
declare const Radical: IconComponent;
declare const RadicalIcon: IconComponent;
declare const Radio: IconComponent;
declare const RadioIcon: IconComponent;
declare const RadioOff: IconComponent;
declare const RadioOffIcon: IconComponent;
declare const RadioReceiver: IconComponent;
declare const RadioReceiverIcon: IconComponent;
declare const RadioTower: IconComponent;
declare const RadioTowerIcon: IconComponent;
declare const Radius: IconComponent;
declare const RadiusIcon: IconComponent;
declare const Rainbow: IconComponent;
declare const RainbowIcon: IconComponent;
declare const Rat: IconComponent;
declare const RatIcon: IconComponent;
declare const Ratio: IconComponent;
declare const RatioIcon: IconComponent;
declare const Receipt: IconComponent;
declare const ReceiptCent: IconComponent;
declare const ReceiptCentIcon: IconComponent;
declare const ReceiptEuro: IconComponent;
declare const ReceiptEuroIcon: IconComponent;
declare const ReceiptIcon: IconComponent;
declare const ReceiptIndianRupee: IconComponent;
declare const ReceiptIndianRupeeIcon: IconComponent;
declare const ReceiptJapaneseYen: IconComponent;
declare const ReceiptJapaneseYenIcon: IconComponent;
declare const ReceiptPoundSterling: IconComponent;
declare const ReceiptPoundSterlingIcon: IconComponent;
declare const ReceiptRussianRuble: IconComponent;
declare const ReceiptRussianRubleIcon: IconComponent;
declare const ReceiptSwissFranc: IconComponent;
declare const ReceiptSwissFrancIcon: IconComponent;
declare const ReceiptText: IconComponent;
declare const ReceiptTextIcon: IconComponent;
declare const ReceiptTurkishLira: IconComponent;
declare const ReceiptTurkishLiraIcon: IconComponent;
declare const RectangleCircle: IconComponent;
declare const RectangleCircleIcon: IconComponent;
declare const RectangleEllipsis: IconComponent;
declare const RectangleEllipsisIcon: IconComponent;
declare const RectangleGoggles: IconComponent;
declare const RectangleGogglesIcon: IconComponent;
declare const RectangleHorizontal: IconComponent;
declare const RectangleHorizontalIcon: IconComponent;
declare const RectangleVertical: IconComponent;
declare const RectangleVerticalIcon: IconComponent;
declare const Recycle: IconComponent;
declare const RecycleIcon: IconComponent;
declare const Redo: IconComponent;
declare const Redo2: IconComponent;
declare const Redo2Icon: IconComponent;
declare const RedoDot: IconComponent;
declare const RedoDotIcon: IconComponent;
declare const RedoIcon: IconComponent;
declare const RefreshCcw: IconComponent;
declare const RefreshCcwDot: IconComponent;
declare const RefreshCcwDotIcon: IconComponent;
declare const RefreshCcwIcon: IconComponent;
declare const RefreshCw: IconComponent;
declare const RefreshCwIcon: IconComponent;
declare const RefreshCwOff: IconComponent;
declare const RefreshCwOffIcon: IconComponent;
declare const Refrigerator: IconComponent;
declare const RefrigeratorIcon: IconComponent;
declare const Regex: IconComponent;
declare const RegexIcon: IconComponent;
declare const RemoveFormatting: IconComponent;
declare const RemoveFormattingIcon: IconComponent;
declare const Repeat: IconComponent;
declare const Repeat1: IconComponent;
declare const Repeat1Icon: IconComponent;
declare const Repeat2: IconComponent;
declare const Repeat2Icon: IconComponent;
declare const RepeatIcon: IconComponent;
declare const RepeatOff: IconComponent;
declare const RepeatOffIcon: IconComponent;
declare const Replace: IconComponent;
declare const ReplaceAll: IconComponent;
declare const ReplaceAllIcon: IconComponent;
declare const ReplaceIcon: IconComponent;
declare const Reply: IconComponent;
declare const ReplyAll: IconComponent;
declare const ReplyAllIcon: IconComponent;
declare const ReplyIcon: IconComponent;
declare const Rewind: IconComponent;
declare const RewindIcon: IconComponent;
declare const Ribbon: IconComponent;
declare const RibbonIcon: IconComponent;
declare const Road: IconComponent;
declare const RoadIcon: IconComponent;
declare const RobotArm: IconComponent;
declare const RobotArmIcon: IconComponent;
declare const RobotVacuum: IconComponent;
declare const RobotVacuumIcon: IconComponent;
declare const Rocket: IconComponent;
declare const RocketIcon: IconComponent;
declare const RockingChair: IconComponent;
declare const RockingChairIcon: IconComponent;
declare const RollerCoaster: IconComponent;
declare const RollerCoasterIcon: IconComponent;
declare const Rose: IconComponent;
declare const RoseIcon: IconComponent;
declare const Rotate3d: IconComponent;
declare const Rotate3D: IconComponent;
declare const Rotate3dIcon: IconComponent;
declare const Rotate3DIcon: IconComponent;
declare const RotateCcw: IconComponent;
declare const RotateCcwClock: IconComponent;
declare const RotateCcwClockIcon: IconComponent;
declare const RotateCcwIcon: IconComponent;
declare const RotateCcwKey: IconComponent;
declare const RotateCcwKeyIcon: IconComponent;
declare const RotateCcwSquare: IconComponent;
declare const RotateCcwSquareIcon: IconComponent;
declare const RotateCw: IconComponent;
declare const RotateCwClock: IconComponent;
declare const RotateCwClockIcon: IconComponent;
declare const RotateCwFadingClock: IconComponent;
declare const RotateCwFadingClockIcon: IconComponent;
declare const RotateCwIcon: IconComponent;
declare const RotateCwSquare: IconComponent;
declare const RotateCwSquareIcon: IconComponent;
declare const Route: IconComponent;
declare const RouteIcon: IconComponent;
declare const RouteOff: IconComponent;
declare const RouteOffIcon: IconComponent;
declare const Router: IconComponent;
declare const RouterIcon: IconComponent;
declare const Rows: IconComponent;
declare const Rows2: IconComponent;
declare const Rows2Icon: IconComponent;
declare const Rows3: IconComponent;
declare const Rows3Icon: IconComponent;
declare const Rows4: IconComponent;
declare const Rows4Icon: IconComponent;
declare const RowsIcon: IconComponent;
declare const Rss: IconComponent;
declare const RssIcon: IconComponent;
declare const RugbyBall: IconComponent;
declare const RugbyBallIcon: IconComponent;
declare const Ruler: IconComponent;
declare const RulerDimensionLine: IconComponent;
declare const RulerDimensionLineIcon: IconComponent;
declare const RulerIcon: IconComponent;
declare const RussianRuble: IconComponent;
declare const RussianRubleIcon: IconComponent;
declare const Sailboat: IconComponent;
declare const SailboatIcon: IconComponent;
declare const Salad: IconComponent;
declare const SaladIcon: IconComponent;
declare const Sandwich: IconComponent;
declare const SandwichIcon: IconComponent;
declare const Satellite: IconComponent;
declare const SatelliteDish: IconComponent;
declare const SatelliteDishIcon: IconComponent;
declare const SatelliteIcon: IconComponent;
declare const SaudiRiyal: IconComponent;
declare const SaudiRiyalIcon: IconComponent;
declare const Save: IconComponent;
declare const SaveAll: IconComponent;
declare const SaveAllIcon: IconComponent;
declare const SaveCheck: IconComponent;
declare const SaveCheckIcon: IconComponent;
declare const SaveIcon: IconComponent;
declare const SaveOff: IconComponent;
declare const SaveOffIcon: IconComponent;
declare const SavePen: IconComponent;
declare const SavePenIcon: IconComponent;
declare const SavePlus: IconComponent;
declare const SavePlusIcon: IconComponent;
declare const Scale: IconComponent;
declare const Scale3d: IconComponent;
declare const Scale3D: IconComponent;
declare const Scale3dIcon: IconComponent;
declare const Scale3DIcon: IconComponent;
declare const ScaleIcon: IconComponent;
declare const Scaling: IconComponent;
declare const ScalingIcon: IconComponent;
declare const Scan: IconComponent;
declare const ScanBarcode: IconComponent;
declare const ScanBarcodeIcon: IconComponent;
declare const ScanBox: IconComponent;
declare const ScanBoxIcon: IconComponent;
declare const ScanEye: IconComponent;
declare const ScanEyeIcon: IconComponent;
declare const ScanFace: IconComponent;
declare const ScanFaceIcon: IconComponent;
declare const ScanHeart: IconComponent;
declare const ScanHeartIcon: IconComponent;
declare const ScanIcon: IconComponent;
declare const ScanLine: IconComponent;
declare const ScanLineIcon: IconComponent;
declare const ScanQrCode: IconComponent;
declare const ScanQrCodeIcon: IconComponent;
declare const ScanSearch: IconComponent;
declare const ScanSearchIcon: IconComponent;
declare const ScanSquare: IconComponent;
declare const ScanSquareIcon: IconComponent;
declare const ScanText: IconComponent;
declare const ScanTextIcon: IconComponent;
declare const ScatterChart: IconComponent;
declare const ScatterChartIcon: IconComponent;
declare const School: IconComponent;
declare const School2: IconComponent;
declare const School2Icon: IconComponent;
declare const SchoolIcon: IconComponent;
declare const Scissors: IconComponent;
declare const ScissorsIcon: IconComponent;
declare const ScissorsLineDashed: IconComponent;
declare const ScissorsLineDashedIcon: IconComponent;
declare const ScissorsSquare: IconComponent;
declare const ScissorsSquareDashedBottom: IconComponent;
declare const ScissorsSquareDashedBottomIcon: IconComponent;
declare const ScissorsSquareIcon: IconComponent;
declare const Scooter: IconComponent;
declare const ScooterIcon: IconComponent;
declare const ScratchBlocks: IconComponent;
declare const ScratchBlocksIcon: IconComponent;
declare const ScreenShare: IconComponent;
declare const ScreenShareIcon: IconComponent;
declare const ScreenShareOff: IconComponent;
declare const ScreenShareOffIcon: IconComponent;
declare const Screw: IconComponent;
declare const ScrewIcon: IconComponent;
declare const Scroll: IconComponent;
declare const ScrollIcon: IconComponent;
declare const ScrollText: IconComponent;
declare const ScrollTextIcon: IconComponent;
declare const Search: IconComponent;
declare const SearchAlert: IconComponent;
declare const SearchAlertIcon: IconComponent;
declare const SearchCheck: IconComponent;
declare const SearchCheckIcon: IconComponent;
declare const SearchCode: IconComponent;
declare const SearchCodeIcon: IconComponent;
declare const SearchIcon: IconComponent;
declare const SearchSlash: IconComponent;
declare const SearchSlashIcon: IconComponent;
declare const SearchX: IconComponent;
declare const SearchXIcon: IconComponent;
declare const Section: IconComponent;
declare const SectionIcon: IconComponent;
declare const Send: IconComponent;
declare const SendHorizonal: IconComponent;
declare const SendHorizonalIcon: IconComponent;
declare const SendHorizontal: IconComponent;
declare const SendHorizontalIcon: IconComponent;
declare const SendIcon: IconComponent;
declare const SendToBack: IconComponent;
declare const SendToBackIcon: IconComponent;
declare const SeparatorHorizontal: IconComponent;
declare const SeparatorHorizontalIcon: IconComponent;
declare const SeparatorVertical: IconComponent;
declare const SeparatorVerticalIcon: IconComponent;
declare const Server: IconComponent;
declare const ServerCog: IconComponent;
declare const ServerCogIcon: IconComponent;
declare const ServerCrash: IconComponent;
declare const ServerCrashIcon: IconComponent;
declare const ServerIcon: IconComponent;
declare const ServerOff: IconComponent;
declare const ServerOffIcon: IconComponent;
declare const ServerPlus: IconComponent;
declare const ServerPlusIcon: IconComponent;
declare const Settings: IconComponent;
declare const Settings2: IconComponent;
declare const Settings2Icon: IconComponent;
declare const SettingsIcon: IconComponent;
declare const Shapes: IconComponent;
declare const ShapesIcon: IconComponent;
declare const Share: IconComponent;
declare const Share2: IconComponent;
declare const Share2Icon: IconComponent;
declare const ShareIcon: IconComponent;
declare const Sheet: IconComponent;
declare const SheetIcon: IconComponent;
declare const Shell: IconComponent;
declare const ShellIcon: IconComponent;
declare const ShelvingUnit: IconComponent;
declare const ShelvingUnitIcon: IconComponent;
declare const Shield: IconComponent;
declare const ShieldAlert: IconComponent;
declare const ShieldAlertIcon: IconComponent;
declare const ShieldBan: IconComponent;
declare const ShieldBanIcon: IconComponent;
declare const ShieldCheck: IconComponent;
declare const ShieldCheckIcon: IconComponent;
declare const ShieldClose: IconComponent;
declare const ShieldCloseIcon: IconComponent;
declare const ShieldCog: IconComponent;
declare const ShieldCogCorner: IconComponent;
declare const ShieldCogCornerIcon: IconComponent;
declare const ShieldCogIcon: IconComponent;
declare const ShieldEllipsis: IconComponent;
declare const ShieldEllipsisIcon: IconComponent;
declare const ShieldHalf: IconComponent;
declare const ShieldHalfIcon: IconComponent;
declare const ShieldHouse: IconComponent;
declare const ShieldHouseIcon: IconComponent;
declare const ShieldIcon: IconComponent;
declare const ShieldKeyhole: IconComponent;
declare const ShieldKeyholeIcon: IconComponent;
declare const ShieldLock: IconComponent;
declare const ShieldLockIcon: IconComponent;
declare const ShieldMinus: IconComponent;
declare const ShieldMinusIcon: IconComponent;
declare const ShieldOff: IconComponent;
declare const ShieldOffIcon: IconComponent;
declare const ShieldPlus: IconComponent;
declare const ShieldPlusIcon: IconComponent;
declare const ShieldQuestion: IconComponent;
declare const ShieldQuestionIcon: IconComponent;
declare const ShieldQuestionMark: IconComponent;
declare const ShieldQuestionMarkIcon: IconComponent;
declare const ShieldUser: IconComponent;
declare const ShieldUserIcon: IconComponent;
declare const ShieldX: IconComponent;
declare const ShieldXIcon: IconComponent;
declare const Ship: IconComponent;
declare const ShipCargo: IconComponent;
declare const ShipCargoIcon: IconComponent;
declare const ShipIcon: IconComponent;
declare const ShipWheel: IconComponent;
declare const ShipWheelIcon: IconComponent;
declare const Shirt: IconComponent;
declare const ShirtIcon: IconComponent;
declare const ShoppingBag: IconComponent;
declare const ShoppingBagIcon: IconComponent;
declare const ShoppingBasket: IconComponent;
declare const ShoppingBasketIcon: IconComponent;
declare const ShoppingCart: IconComponent;
declare const ShoppingCartIcon: IconComponent;
declare const ShoppingCartMinus: IconComponent;
declare const ShoppingCartMinusIcon: IconComponent;
declare const ShoppingCartPlus: IconComponent;
declare const ShoppingCartPlusIcon: IconComponent;
declare const Shovel: IconComponent;
declare const ShovelIcon: IconComponent;
declare const ShowerHead: IconComponent;
declare const ShowerHeadIcon: IconComponent;
declare const Shredder: IconComponent;
declare const ShredderIcon: IconComponent;
declare const Shrimp: IconComponent;
declare const ShrimpIcon: IconComponent;
declare const ShrimpOff: IconComponent;
declare const ShrimpOffIcon: IconComponent;
declare const Shrink: IconComponent;
declare const ShrinkIcon: IconComponent;
declare const Shrub: IconComponent;
declare const ShrubIcon: IconComponent;
declare const Shuffle: IconComponent;
declare const ShuffleIcon: IconComponent;
declare const Sidebar: IconComponent;
declare const SidebarClose: IconComponent;
declare const SidebarCloseIcon: IconComponent;
declare const SidebarIcon: IconComponent;
declare const SidebarOpen: IconComponent;
declare const SidebarOpenIcon: IconComponent;
declare const Sigma: IconComponent;
declare const SigmaIcon: IconComponent;
declare const SigmaSquare: IconComponent;
declare const SigmaSquareIcon: IconComponent;
declare const Signal: IconComponent;
declare const SignalHigh: IconComponent;
declare const SignalHighIcon: IconComponent;
declare const SignalIcon: IconComponent;
declare const SignalLow: IconComponent;
declare const SignalLowIcon: IconComponent;
declare const SignalMedium: IconComponent;
declare const SignalMediumIcon: IconComponent;
declare const SignalZero: IconComponent;
declare const SignalZeroIcon: IconComponent;
declare const Signature: IconComponent;
declare const SignatureIcon: IconComponent;
declare const Signpost: IconComponent;
declare const SignpostBig: IconComponent;
declare const SignpostBigIcon: IconComponent;
declare const SignpostIcon: IconComponent;
declare const Siren: IconComponent;
declare const SirenIcon: IconComponent;
declare const SkipBack: IconComponent;
declare const SkipBackIcon: IconComponent;
declare const SkipForward: IconComponent;
declare const SkipForwardIcon: IconComponent;
declare const Skull: IconComponent;
declare const SkullIcon: IconComponent;
declare const Slash: IconComponent;
declare const SlashIcon: IconComponent;
declare const SlashSquare: IconComponent;
declare const SlashSquareIcon: IconComponent;
declare const Slice: IconComponent;
declare const SliceIcon: IconComponent;
declare const Sliders: IconComponent;
declare const SlidersHorizontal: IconComponent;
declare const SlidersHorizontalIcon: IconComponent;
declare const SlidersIcon: IconComponent;
declare const SlidersVertical: IconComponent;
declare const SlidersVerticalIcon: IconComponent;
declare const Smartphone: IconComponent;
declare const SmartphoneCharging: IconComponent;
declare const SmartphoneChargingIcon: IconComponent;
declare const SmartphoneIcon: IconComponent;
declare const SmartphoneNfc: IconComponent;
declare const SmartphoneNfcIcon: IconComponent;
declare const Smile: IconComponent;
declare const SmileIcon: IconComponent;
declare const SmilePlus: IconComponent;
declare const SmilePlusIcon: IconComponent;
declare const Snail: IconComponent;
declare const SnailIcon: IconComponent;
declare const Snowflake: IconComponent;
declare const SnowflakeIcon: IconComponent;
declare const SoapDispenserDroplet: IconComponent;
declare const SoapDispenserDropletIcon: IconComponent;
declare const Sofa: IconComponent;
declare const SofaIcon: IconComponent;
declare const SolarPanel: IconComponent;
declare const SolarPanelIcon: IconComponent;
declare const SortAsc: IconComponent;
declare const SortAscIcon: IconComponent;
declare const SortDesc: IconComponent;
declare const SortDescIcon: IconComponent;
declare const Soup: IconComponent;
declare const SoupIcon: IconComponent;
declare const Space: IconComponent;
declare const SpaceIcon: IconComponent;
declare const Spade: IconComponent;
declare const SpadeIcon: IconComponent;
declare const Sparkle: IconComponent;
declare const SparkleIcon: IconComponent;
declare const Sparkles: IconComponent;
declare const SparklesIcon: IconComponent;
declare const Speaker: IconComponent;
declare const SpeakerIcon: IconComponent;
declare const Speech: IconComponent;
declare const SpeechIcon: IconComponent;
declare const SpellCheck: IconComponent;
declare const SpellCheck2: IconComponent;
declare const SpellCheck2Icon: IconComponent;
declare const SpellCheckIcon: IconComponent;
declare const Spline: IconComponent;
declare const SplineIcon: IconComponent;
declare const SplinePointer: IconComponent;
declare const SplinePointerIcon: IconComponent;
declare const Split: IconComponent;
declare const SplitIcon: IconComponent;
declare const SplitSquareHorizontal: IconComponent;
declare const SplitSquareHorizontalIcon: IconComponent;
declare const SplitSquareVertical: IconComponent;
declare const SplitSquareVerticalIcon: IconComponent;
declare const Spool: IconComponent;
declare const SpoolIcon: IconComponent;
declare const SportShoe: IconComponent;
declare const SportShoeIcon: IconComponent;
declare const Spotlight: IconComponent;
declare const SpotlightIcon: IconComponent;
declare const SprayCan: IconComponent;
declare const SprayCanIcon: IconComponent;
declare const Sprout: IconComponent;
declare const SproutIcon: IconComponent;
declare const Square: IconComponent;
declare const SquareActivity: IconComponent;
declare const SquareActivityIcon: IconComponent;
declare const SquareArrowDown: IconComponent;
declare const SquareArrowDownIcon: IconComponent;
declare const SquareArrowDownLeft: IconComponent;
declare const SquareArrowDownLeftIcon: IconComponent;
declare const SquareArrowDownRight: IconComponent;
declare const SquareArrowDownRightIcon: IconComponent;
declare const SquareArrowLeft: IconComponent;
declare const SquareArrowLeftIcon: IconComponent;
declare const SquareArrowOutDownLeft: IconComponent;
declare const SquareArrowOutDownLeftIcon: IconComponent;
declare const SquareArrowOutDownRight: IconComponent;
declare const SquareArrowOutDownRightIcon: IconComponent;
declare const SquareArrowOutUpLeft: IconComponent;
declare const SquareArrowOutUpLeftIcon: IconComponent;
declare const SquareArrowOutUpRight: IconComponent;
declare const SquareArrowOutUpRightIcon: IconComponent;
declare const SquareArrowRight: IconComponent;
declare const SquareArrowRightEnter: IconComponent;
declare const SquareArrowRightEnterIcon: IconComponent;
declare const SquareArrowRightExit: IconComponent;
declare const SquareArrowRightExitIcon: IconComponent;
declare const SquareArrowRightIcon: IconComponent;
declare const SquareArrowUp: IconComponent;
declare const SquareArrowUpIcon: IconComponent;
declare const SquareArrowUpLeft: IconComponent;
declare const SquareArrowUpLeftIcon: IconComponent;
declare const SquareArrowUpRight: IconComponent;
declare const SquareArrowUpRightIcon: IconComponent;
declare const SquareAsterisk: IconComponent;
declare const SquareAsteriskIcon: IconComponent;
declare const SquareBookmark: IconComponent;
declare const SquareBookmarkIcon: IconComponent;
declare const SquareBottomDashedScissors: IconComponent;
declare const SquareBottomDashedScissorsIcon: IconComponent;
declare const SquareCenterlineDashedHorizontal: IconComponent;
declare const SquareCenterlineDashedHorizontalIcon: IconComponent;
declare const SquareCenterlineDashedVertical: IconComponent;
declare const SquareCenterlineDashedVerticalIcon: IconComponent;
declare const SquareChartGantt: IconComponent;
declare const SquareChartGanttIcon: IconComponent;
declare const SquareCheck: IconComponent;
declare const SquareCheckBig: IconComponent;
declare const SquareCheckBigIcon: IconComponent;
declare const SquareCheckIcon: IconComponent;
declare const SquareChevronDown: IconComponent;
declare const SquareChevronDownIcon: IconComponent;
declare const SquareChevronLeft: IconComponent;
declare const SquareChevronLeftIcon: IconComponent;
declare const SquareChevronRight: IconComponent;
declare const SquareChevronRightIcon: IconComponent;
declare const SquareChevronUp: IconComponent;
declare const SquareChevronUpIcon: IconComponent;
declare const SquareCode: IconComponent;
declare const SquareCodeIcon: IconComponent;
declare const SquareDashed: IconComponent;
declare const SquareDashedBottom: IconComponent;
declare const SquareDashedBottomCode: IconComponent;
declare const SquareDashedBottomCodeIcon: IconComponent;
declare const SquareDashedBottomIcon: IconComponent;
declare const SquareDashedIcon: IconComponent;
declare const SquareDashedKanban: IconComponent;
declare const SquareDashedKanbanIcon: IconComponent;
declare const SquareDashedMousePointer: IconComponent;
declare const SquareDashedMousePointerIcon: IconComponent;
declare const SquareDashedPlus: IconComponent;
declare const SquareDashedPlusIcon: IconComponent;
declare const SquareDashedText: IconComponent;
declare const SquareDashedTextIcon: IconComponent;
declare const SquareDashedTopSolid: IconComponent;
declare const SquareDashedTopSolidIcon: IconComponent;
declare const SquareDashedX: IconComponent;
declare const SquareDashedXCorner: IconComponent;
declare const SquareDashedXCornerIcon: IconComponent;
declare const SquareDashedXIcon: IconComponent;
declare const SquareDimensions: IconComponent;
declare const SquareDimensionsIcon: IconComponent;
declare const SquareDivide: IconComponent;
declare const SquareDivideIcon: IconComponent;
declare const SquareDot: IconComponent;
declare const SquareDotIcon: IconComponent;
declare const SquareEqual: IconComponent;
declare const SquareEqualIcon: IconComponent;
declare const SquareExclamationPoint: IconComponent;
declare const SquareExclamationPointIcon: IconComponent;
declare const SquareFunction: IconComponent;
declare const SquareFunctionIcon: IconComponent;
declare const SquareGanttChart: IconComponent;
declare const SquareGanttChartIcon: IconComponent;
declare const SquareIcon: IconComponent;
declare const SquareKanban: IconComponent;
declare const SquareKanbanIcon: IconComponent;
declare const SquareLibrary: IconComponent;
declare const SquareLibraryIcon: IconComponent;
declare const SquareM: IconComponent;
declare const SquareMenu: IconComponent;
declare const SquareMenuIcon: IconComponent;
declare const SquareMIcon: IconComponent;
declare const SquareMinus: IconComponent;
declare const SquareMinusIcon: IconComponent;
declare const SquareMousePointer: IconComponent;
declare const SquareMousePointerIcon: IconComponent;
declare const SquareOff: IconComponent;
declare const SquareOffIcon: IconComponent;
declare const SquareParking: IconComponent;
declare const SquareParkingIcon: IconComponent;
declare const SquareParkingOff: IconComponent;
declare const SquareParkingOffIcon: IconComponent;
declare const SquarePause: IconComponent;
declare const SquarePauseIcon: IconComponent;
declare const SquarePen: IconComponent;
declare const SquarePenIcon: IconComponent;
declare const SquarePercent: IconComponent;
declare const SquarePercentIcon: IconComponent;
declare const SquarePi: IconComponent;
declare const SquarePiIcon: IconComponent;
declare const SquarePilcrow: IconComponent;
declare const SquarePilcrowIcon: IconComponent;
declare const SquarePlay: IconComponent;
declare const SquarePlayIcon: IconComponent;
declare const SquarePlus: IconComponent;
declare const SquarePlusIcon: IconComponent;
declare const SquarePower: IconComponent;
declare const SquarePowerIcon: IconComponent;
declare const SquareRadical: IconComponent;
declare const SquareRadicalIcon: IconComponent;
declare const SquareRoundCorner: IconComponent;
declare const SquareRoundCornerIcon: IconComponent;
declare const SquareScissors: IconComponent;
declare const SquareScissorsIcon: IconComponent;
declare const SquaresExclude: IconComponent;
declare const SquaresExcludeIcon: IconComponent;
declare const SquareSigma: IconComponent;
declare const SquareSigmaIcon: IconComponent;
declare const SquaresIntersect: IconComponent;
declare const SquaresIntersectIcon: IconComponent;
declare const SquareSlash: IconComponent;
declare const SquareSlashIcon: IconComponent;
declare const SquareSparkles: IconComponent;
declare const SquareSparklesIcon: IconComponent;
declare const SquareSplitHorizontal: IconComponent;
declare const SquareSplitHorizontalIcon: IconComponent;
declare const SquareSplitVertical: IconComponent;
declare const SquareSplitVerticalIcon: IconComponent;
declare const SquareSquare: IconComponent;
declare const SquareSquareIcon: IconComponent;
declare const SquaresSubtract: IconComponent;
declare const SquaresSubtractIcon: IconComponent;
declare const SquareStack: IconComponent;
declare const SquareStackIcon: IconComponent;
declare const SquareStar: IconComponent;
declare const SquareStarIcon: IconComponent;
declare const SquareStop: IconComponent;
declare const SquareStopIcon: IconComponent;
declare const SquaresUnite: IconComponent;
declare const SquaresUniteIcon: IconComponent;
declare const SquareTerminal: IconComponent;
declare const SquareTerminalIcon: IconComponent;
declare const SquareText: IconComponent;
declare const SquareTextIcon: IconComponent;
declare const SquareUser: IconComponent;
declare const SquareUserIcon: IconComponent;
declare const SquareUserRound: IconComponent;
declare const SquareUserRoundIcon: IconComponent;
declare const SquareX: IconComponent;
declare const SquareXIcon: IconComponent;
declare const Squircle: IconComponent;
declare const SquircleDashed: IconComponent;
declare const SquircleDashedIcon: IconComponent;
declare const SquircleIcon: IconComponent;
declare const Squirrel: IconComponent;
declare const SquirrelIcon: IconComponent;
declare const Stamp: IconComponent;
declare const StampIcon: IconComponent;
declare const Star: IconComponent;
declare const StarCheck: IconComponent;
declare const StarCheckIcon: IconComponent;
declare const StarHalf: IconComponent;
declare const StarHalfIcon: IconComponent;
declare const StarIcon: IconComponent;
declare const StarMinus: IconComponent;
declare const StarMinusIcon: IconComponent;
declare const StarOff: IconComponent;
declare const StarOffIcon: IconComponent;
declare const StarPlus: IconComponent;
declare const StarPlusIcon: IconComponent;
declare const Stars: IconComponent;
declare const StarsIcon: IconComponent;
declare const StarX: IconComponent;
declare const StarXIcon: IconComponent;
declare const StepBack: IconComponent;
declare const StepBackIcon: IconComponent;
declare const StepForward: IconComponent;
declare const StepForwardIcon: IconComponent;
declare const Stethoscope: IconComponent;
declare const StethoscopeIcon: IconComponent;
declare const Sticker: IconComponent;
declare const StickerIcon: IconComponent;
declare const StickyNote: IconComponent;
declare const StickyNoteCheck: IconComponent;
declare const StickyNoteCheckIcon: IconComponent;
declare const StickyNoteIcon: IconComponent;
declare const StickyNoteMinus: IconComponent;
declare const StickyNoteMinusIcon: IconComponent;
declare const StickyNoteOff: IconComponent;
declare const StickyNoteOffIcon: IconComponent;
declare const StickyNotePlus: IconComponent;
declare const StickyNotePlusIcon: IconComponent;
declare const StickyNotes: IconComponent;
declare const StickyNotesIcon: IconComponent;
declare const StickyNoteX: IconComponent;
declare const StickyNoteXIcon: IconComponent;
declare const Stone: IconComponent;
declare const StoneIcon: IconComponent;
declare const StopCircle: IconComponent;
declare const StopCircleIcon: IconComponent;
declare const Store: IconComponent;
declare const StoreIcon: IconComponent;
declare const StretchHorizontal: IconComponent;
declare const StretchHorizontalIcon: IconComponent;
declare const StretchVertical: IconComponent;
declare const StretchVerticalIcon: IconComponent;
declare const Strikethrough: IconComponent;
declare const StrikethroughIcon: IconComponent;
declare const Subscript: IconComponent;
declare const SubscriptIcon: IconComponent;
declare const Subtitles: IconComponent;
declare const SubtitlesIcon: IconComponent;
declare const Summary: IconComponent;
declare const SummaryIcon: IconComponent;
declare const Sun: IconComponent;
declare const SunDim: IconComponent;
declare const SunDimIcon: IconComponent;
declare const SunIcon: IconComponent;
declare const SunMedium: IconComponent;
declare const SunMediumIcon: IconComponent;
declare const SunMoon: IconComponent;
declare const SunMoonIcon: IconComponent;
declare const Sunrise: IconComponent;
declare const SunriseIcon: IconComponent;
declare const Sunset: IconComponent;
declare const SunsetIcon: IconComponent;
declare const SunSnow: IconComponent;
declare const SunSnowIcon: IconComponent;
declare const Superscript: IconComponent;
declare const SuperscriptIcon: IconComponent;
declare const SwatchBook: IconComponent;
declare const SwatchBookIcon: IconComponent;
declare const SwissFranc: IconComponent;
declare const SwissFrancIcon: IconComponent;
declare const SwitchCamera: IconComponent;
declare const SwitchCameraIcon: IconComponent;
declare const Sword: IconComponent;
declare const SwordIcon: IconComponent;
declare const Swords: IconComponent;
declare const SwordsIcon: IconComponent;
declare const Syringe: IconComponent;
declare const SyringeIcon: IconComponent;
declare const Table: IconComponent;
declare const Table2: IconComponent;
declare const Table2Icon: IconComponent;
declare const TableCellsMerge: IconComponent;
declare const TableCellsMergeIcon: IconComponent;
declare const TableCellsSplit: IconComponent;
declare const TableCellsSplitIcon: IconComponent;
declare const TableColumnsSplit: IconComponent;
declare const TableColumnsSplitIcon: IconComponent;
declare const TableConfig: IconComponent;
declare const TableConfigIcon: IconComponent;
declare const TableIcon: IconComponent;
declare const TableOfContents: IconComponent;
declare const TableOfContentsIcon: IconComponent;
declare const TableProperties: IconComponent;
declare const TablePropertiesIcon: IconComponent;
declare const TableRowsSplit: IconComponent;
declare const TableRowsSplitIcon: IconComponent;
declare const Tablet: IconComponent;
declare const TabletIcon: IconComponent;
declare const Tablets: IconComponent;
declare const TabletsIcon: IconComponent;
declare const TabletSmartphone: IconComponent;
declare const TabletSmartphoneIcon: IconComponent;
declare const Tag: IconComponent;
declare const TagIcon: IconComponent;
declare const TagPlus: IconComponent;
declare const TagPlusIcon: IconComponent;
declare const Tags: IconComponent;
declare const TagsIcon: IconComponent;
declare const TagX: IconComponent;
declare const TagXIcon: IconComponent;
declare const Tally1: IconComponent;
declare const Tally1Icon: IconComponent;
declare const Tally2: IconComponent;
declare const Tally2Icon: IconComponent;
declare const Tally3: IconComponent;
declare const Tally3Icon: IconComponent;
declare const Tally4: IconComponent;
declare const Tally4Icon: IconComponent;
declare const Tally5: IconComponent;
declare const Tally5Icon: IconComponent;
declare const Tangent: IconComponent;
declare const TangentIcon: IconComponent;
declare const Target: IconComponent;
declare const TargetIcon: IconComponent;
declare const Telescope: IconComponent;
declare const TelescopeIcon: IconComponent;
declare const Tent: IconComponent;
declare const TentIcon: IconComponent;
declare const TentTree: IconComponent;
declare const TentTreeIcon: IconComponent;
declare const Terminal: IconComponent;
declare const TerminalIcon: IconComponent;
declare const TerminalSquare: IconComponent;
declare const TerminalSquareIcon: IconComponent;
declare const TestTube: IconComponent;
declare const TestTube2: IconComponent;
declare const TestTube2Icon: IconComponent;
declare const TestTubeDiagonal: IconComponent;
declare const TestTubeDiagonalIcon: IconComponent;
declare const TestTubeIcon: IconComponent;
declare const TestTubes: IconComponent;
declare const TestTubesIcon: IconComponent;
declare const Text: IconComponent;
declare const TextAlignCenter: IconComponent;
declare const TextAlignCenterIcon: IconComponent;
declare const TextAlignEnd: IconComponent;
declare const TextAlignEndIcon: IconComponent;
declare const TextAlignJustify: IconComponent;
declare const TextAlignJustifyCenter: IconComponent;
declare const TextAlignJustifyCenterIcon: IconComponent;
declare const TextAlignJustifyEnd: IconComponent;
declare const TextAlignJustifyEndIcon: IconComponent;
declare const TextAlignJustifyIcon: IconComponent;
declare const TextAlignJustifyStart: IconComponent;
declare const TextAlignJustifyStartIcon: IconComponent;
declare const TextAlignStart: IconComponent;
declare const TextAlignStartIcon: IconComponent;
declare const TextCursor: IconComponent;
declare const TextCursorIcon: IconComponent;
declare const TextCursorInput: IconComponent;
declare const TextCursorInputIcon: IconComponent;
declare const TextIcon: IconComponent;
declare const TextInitial: IconComponent;
declare const TextInitialIcon: IconComponent;
declare const TextQuote: IconComponent;
declare const TextQuoteIcon: IconComponent;
declare const TextSearch: IconComponent;
declare const TextSearchIcon: IconComponent;
declare const TextSelect: IconComponent;
declare const TextSelectIcon: IconComponent;
declare const TextSelection: IconComponent;
declare const TextSelectionIcon: IconComponent;
declare const TextWrap: IconComponent;
declare const TextWrapIcon: IconComponent;
declare const Theater: IconComponent;
declare const TheaterIcon: IconComponent;
declare const Thermometer: IconComponent;
declare const ThermometerIcon: IconComponent;
declare const ThermometerSnowflake: IconComponent;
declare const ThermometerSnowflakeIcon: IconComponent;
declare const ThermometerSun: IconComponent;
declare const ThermometerSunIcon: IconComponent;
declare const ThumbsDown: IconComponent;
declare const ThumbsDownIcon: IconComponent;
declare const ThumbsUp: IconComponent;
declare const ThumbsUpIcon: IconComponent;
declare const Ticket: IconComponent;
declare const TicketCheck: IconComponent;
declare const TicketCheckIcon: IconComponent;
declare const TicketIcon: IconComponent;
declare const TicketMinus: IconComponent;
declare const TicketMinusIcon: IconComponent;
declare const TicketPercent: IconComponent;
declare const TicketPercentIcon: IconComponent;
declare const TicketPlus: IconComponent;
declare const TicketPlusIcon: IconComponent;
declare const Tickets: IconComponent;
declare const TicketsIcon: IconComponent;
declare const TicketSlash: IconComponent;
declare const TicketSlashIcon: IconComponent;
declare const TicketsPlane: IconComponent;
declare const TicketsPlaneIcon: IconComponent;
declare const TicketX: IconComponent;
declare const TicketXIcon: IconComponent;
declare const TicTacToe: IconComponent;
declare const TicTacToeIcon: IconComponent;
declare const Timeline: IconComponent;
declare const TimelineIcon: IconComponent;
declare const Timer: IconComponent;
declare const TimerIcon: IconComponent;
declare const TimerOff: IconComponent;
declare const TimerOffIcon: IconComponent;
declare const TimerReset: IconComponent;
declare const TimerResetIcon: IconComponent;
declare const ToggleLeft: IconComponent;
declare const ToggleLeftIcon: IconComponent;
declare const ToggleRight: IconComponent;
declare const ToggleRightIcon: IconComponent;
declare const Toilet: IconComponent;
declare const ToiletIcon: IconComponent;
declare const Toolbox: IconComponent;
declare const ToolboxIcon: IconComponent;
declare const ToolCase: IconComponent;
declare const ToolCaseIcon: IconComponent;
declare const Toothbrush: IconComponent;
declare const ToothbrushIcon: IconComponent;
declare const ToothbrushSparkles: IconComponent;
declare const ToothbrushSparklesIcon: IconComponent;
declare const Tornado: IconComponent;
declare const TornadoIcon: IconComponent;
declare const Torus: IconComponent;
declare const TorusIcon: IconComponent;
declare const Touchpad: IconComponent;
declare const TouchpadIcon: IconComponent;
declare const TouchpadOff: IconComponent;
declare const TouchpadOffIcon: IconComponent;
declare const TowelRack: IconComponent;
declare const TowelRackIcon: IconComponent;
declare const TowerControl: IconComponent;
declare const TowerControlIcon: IconComponent;
declare const ToyBrick: IconComponent;
declare const ToyBrickIcon: IconComponent;
declare const Tractor: IconComponent;
declare const TractorIcon: IconComponent;
declare const TrafficCone: IconComponent;
declare const TrafficConeIcon: IconComponent;
declare const Trailer: IconComponent;
declare const TrailerIcon: IconComponent;
declare const Train: IconComponent;
declare const TrainFront: IconComponent;
declare const TrainFrontIcon: IconComponent;
declare const TrainFrontTunnel: IconComponent;
declare const TrainFrontTunnelIcon: IconComponent;
declare const TrainIcon: IconComponent;
declare const TrainTrack: IconComponent;
declare const TrainTrackIcon: IconComponent;
declare const TramFront: IconComponent;
declare const TramFrontIcon: IconComponent;
declare const Transgender: IconComponent;
declare const TransgenderIcon: IconComponent;
declare const Trash: IconComponent;
declare const Trash2: IconComponent;
declare const Trash2Icon: IconComponent;
declare const TrashIcon: IconComponent;
declare const TrashOff: IconComponent;
declare const TrashOffIcon: IconComponent;
declare const TreeDeciduous: IconComponent;
declare const TreeDeciduousIcon: IconComponent;
declare const TreePalm: IconComponent;
declare const TreePalmIcon: IconComponent;
declare const TreePine: IconComponent;
declare const TreePineIcon: IconComponent;
declare const Trees: IconComponent;
declare const TreesIcon: IconComponent;
declare const TrendingDown: IconComponent;
declare const TrendingDownIcon: IconComponent;
declare const TrendingUp: IconComponent;
declare const TrendingUpDown: IconComponent;
declare const TrendingUpDownIcon: IconComponent;
declare const TrendingUpIcon: IconComponent;
declare const Triangle: IconComponent;
declare const TriangleAlert: IconComponent;
declare const TriangleAlertIcon: IconComponent;
declare const TriangleDashed: IconComponent;
declare const TriangleDashedIcon: IconComponent;
declare const TriangleIcon: IconComponent;
declare const TriangleRight: IconComponent;
declare const TriangleRightIcon: IconComponent;
declare const TrianglesCenterlineDashedHorizontal: IconComponent;
declare const TrianglesCenterlineDashedHorizontalIcon: IconComponent;
declare const TrianglesCenterlineDashedVertical: IconComponent;
declare const TrianglesCenterlineDashedVerticalIcon: IconComponent;
declare const Trophy: IconComponent;
declare const TrophyIcon: IconComponent;
declare const Truck: IconComponent;
declare const TruckElectric: IconComponent;
declare const TruckElectricIcon: IconComponent;
declare const TruckIcon: IconComponent;
declare const TubeLotion: IconComponent;
declare const TubeLotionIcon: IconComponent;
declare const TurkishLira: IconComponent;
declare const TurkishLiraIcon: IconComponent;
declare const Turntable: IconComponent;
declare const TurntableIcon: IconComponent;
declare const Turtle: IconComponent;
declare const TurtleIcon: IconComponent;
declare const Tv: IconComponent;
declare const Tv2: IconComponent;
declare const Tv2Icon: IconComponent;
declare const TvIcon: IconComponent;
declare const TvMinimal: IconComponent;
declare const TvMinimalIcon: IconComponent;
declare const TvMinimalPlay: IconComponent;
declare const TvMinimalPlayIcon: IconComponent;
declare const Type: IconComponent;
declare const TypeIcon: IconComponent;
declare const TypeOutline: IconComponent;
declare const TypeOutlineIcon: IconComponent;
declare const Umbrella: IconComponent;
declare const UmbrellaIcon: IconComponent;
declare const UmbrellaOff: IconComponent;
declare const UmbrellaOffIcon: IconComponent;
declare const Underline: IconComponent;
declare const UnderlineIcon: IconComponent;
declare const Undo: IconComponent;
declare const Undo2: IconComponent;
declare const Undo2Icon: IconComponent;
declare const UndoDot: IconComponent;
declare const UndoDotIcon: IconComponent;
declare const UndoIcon: IconComponent;
declare const UnfoldHorizontal: IconComponent;
declare const UnfoldHorizontalIcon: IconComponent;
declare const UnfoldVertical: IconComponent;
declare const UnfoldVerticalIcon: IconComponent;
declare const Ungroup: IconComponent;
declare const UngroupIcon: IconComponent;
declare const University: IconComponent;
declare const UniversityIcon: IconComponent;
declare const Unlink: IconComponent;
declare const Unlink2: IconComponent;
declare const Unlink2Icon: IconComponent;
declare const UnlinkIcon: IconComponent;
declare const Unlock: IconComponent;
declare const UnlockIcon: IconComponent;
declare const UnlockKeyhole: IconComponent;
declare const UnlockKeyholeIcon: IconComponent;
declare const Unplug: IconComponent;
declare const UnplugIcon: IconComponent;
declare const Upload: IconComponent;
declare const UploadCloud: IconComponent;
declare const UploadCloudIcon: IconComponent;
declare const UploadIcon: IconComponent;
declare const Usb: IconComponent;
declare const UsbCPort: IconComponent;
declare const UsbCPortIcon: IconComponent;
declare const UsbIcon: IconComponent;
declare const User: IconComponent;
declare const User2: IconComponent;
declare const User2Icon: IconComponent;
declare const UserCheck: IconComponent;
declare const UserCheck2: IconComponent;
declare const UserCheck2Icon: IconComponent;
declare const UserCheckIcon: IconComponent;
declare const UserCircle: IconComponent;
declare const UserCircle2: IconComponent;
declare const UserCircle2Icon: IconComponent;
declare const UserCircleIcon: IconComponent;
declare const UserCog: IconComponent;
declare const UserCog2: IconComponent;
declare const UserCog2Icon: IconComponent;
declare const UserCogIcon: IconComponent;
declare const UserGroup: IconComponent;
declare const UserGroupIcon: IconComponent;
declare const UserIcon: IconComponent;
declare const UserKey: IconComponent;
declare const UserKeyIcon: IconComponent;
declare const UserLock: IconComponent;
declare const UserLockIcon: IconComponent;
declare const UserMinus: IconComponent;
declare const UserMinus2: IconComponent;
declare const UserMinus2Icon: IconComponent;
declare const UserMinusIcon: IconComponent;
declare const UserPen: IconComponent;
declare const UserPenIcon: IconComponent;
declare const UserPlus: IconComponent;
declare const UserPlus2: IconComponent;
declare const UserPlus2Icon: IconComponent;
declare const UserPlusIcon: IconComponent;
declare const UserRound: IconComponent;
declare const UserRoundArrowLeft: IconComponent;
declare const UserRoundArrowLeftIcon: IconComponent;
declare const UserRoundCheck: IconComponent;
declare const UserRoundCheckIcon: IconComponent;
declare const UserRoundCog: IconComponent;
declare const UserRoundCogIcon: IconComponent;
declare const UserRoundGroup: IconComponent;
declare const UserRoundGroupIcon: IconComponent;
declare const UserRoundIcon: IconComponent;
declare const UserRoundKey: IconComponent;
declare const UserRoundKeyIcon: IconComponent;
declare const UserRoundMinus: IconComponent;
declare const UserRoundMinusIcon: IconComponent;
declare const UserRoundPen: IconComponent;
declare const UserRoundPenIcon: IconComponent;
declare const UserRoundPlus: IconComponent;
declare const UserRoundPlusIcon: IconComponent;
declare const UserRoundSearch: IconComponent;
declare const UserRoundSearchIcon: IconComponent;
declare const UserRoundStar: IconComponent;
declare const UserRoundStarIcon: IconComponent;
declare const UserRoundX: IconComponent;
declare const UserRoundXIcon: IconComponent;
declare const Users: IconComponent;
declare const Users2: IconComponent;
declare const Users2Icon: IconComponent;
declare const UserSearch: IconComponent;
declare const UserSearchIcon: IconComponent;
declare const UserShield: IconComponent;
declare const UserShieldIcon: IconComponent;
declare const UsersIcon: IconComponent;
declare const UserSquare: IconComponent;
declare const UserSquare2: IconComponent;
declare const UserSquare2Icon: IconComponent;
declare const UserSquareIcon: IconComponent;
declare const UsersRound: IconComponent;
declare const UsersRoundIcon: IconComponent;
declare const UserStar: IconComponent;
declare const UserStarIcon: IconComponent;
declare const UserX: IconComponent;
declare const UserX2: IconComponent;
declare const UserX2Icon: IconComponent;
declare const UserXIcon: IconComponent;
declare const Utensils: IconComponent;
declare const UtensilsCrossed: IconComponent;
declare const UtensilsCrossedIcon: IconComponent;
declare const UtensilsIcon: IconComponent;
declare const UtilityPole: IconComponent;
declare const UtilityPoleIcon: IconComponent;
declare const Van: IconComponent;
declare const VanIcon: IconComponent;
declare const Variable: IconComponent;
declare const VariableIcon: IconComponent;
declare const Vault: IconComponent;
declare const VaultIcon: IconComponent;
declare const VectorPolygon: IconComponent;
declare const VectorPolygonIcon: IconComponent;
declare const VectorSquare: IconComponent;
declare const VectorSquareIcon: IconComponent;
declare const Vegan: IconComponent;
declare const VeganIcon: IconComponent;
declare const VenetianMask: IconComponent;
declare const VenetianMaskIcon: IconComponent;
declare const Venus: IconComponent;
declare const VenusAndMars: IconComponent;
declare const VenusAndMarsIcon: IconComponent;
declare const VenusIcon: IconComponent;
declare const Verified: IconComponent;
declare const VerifiedIcon: IconComponent;
declare const Vibrate: IconComponent;
declare const VibrateIcon: IconComponent;
declare const VibrateOff: IconComponent;
declare const VibrateOffIcon: IconComponent;
declare const Video: IconComponent;
declare const VideoIcon: IconComponent;
declare const VideoOff: IconComponent;
declare const VideoOffIcon: IconComponent;
declare const Videotape: IconComponent;
declare const VideotapeIcon: IconComponent;
declare const View: IconComponent;
declare const ViewIcon: IconComponent;
declare const Virus: IconComponent;
declare const VirusIcon: IconComponent;
declare const VirusOff: IconComponent;
declare const VirusOffIcon: IconComponent;
declare const Voicemail: IconComponent;
declare const VoicemailIcon: IconComponent;
declare const Volleyball: IconComponent;
declare const VolleyballIcon: IconComponent;
declare const Volume: IconComponent;
declare const Volume1: IconComponent;
declare const Volume1Icon: IconComponent;
declare const Volume2: IconComponent;
declare const Volume2Icon: IconComponent;
declare const VolumeIcon: IconComponent;
declare const VolumeOff: IconComponent;
declare const VolumeOffIcon: IconComponent;
declare const VolumeX: IconComponent;
declare const VolumeXIcon: IconComponent;
declare const Vote: IconComponent;
declare const VoteIcon: IconComponent;
declare const Wallet: IconComponent;
declare const Wallet2: IconComponent;
declare const Wallet2Icon: IconComponent;
declare const WalletCards: IconComponent;
declare const WalletCardsIcon: IconComponent;
declare const WalletIcon: IconComponent;
declare const WalletMinimal: IconComponent;
declare const WalletMinimalIcon: IconComponent;
declare const Wallpaper: IconComponent;
declare const WallpaperIcon: IconComponent;
declare const Wand: IconComponent;
declare const Wand2: IconComponent;
declare const Wand2Icon: IconComponent;
declare const WandIcon: IconComponent;
declare const WandSparkles: IconComponent;
declare const WandSparklesIcon: IconComponent;
declare const Warehouse: IconComponent;
declare const WarehouseIcon: IconComponent;
declare const WashingMachine: IconComponent;
declare const WashingMachineIcon: IconComponent;
declare const Watch: IconComponent;
declare const WatchIcon: IconComponent;
declare const Waves: IconComponent;
declare const WavesArrowDown: IconComponent;
declare const WavesArrowDownIcon: IconComponent;
declare const WavesArrowUp: IconComponent;
declare const WavesArrowUpIcon: IconComponent;
declare const WavesHorizontal: IconComponent;
declare const WavesHorizontalIcon: IconComponent;
declare const WavesIcon: IconComponent;
declare const WavesLadder: IconComponent;
declare const WavesLadderIcon: IconComponent;
declare const WavesVertical: IconComponent;
declare const WavesVerticalIcon: IconComponent;
declare const Waypoints: IconComponent;
declare const WaypointsIcon: IconComponent;
declare const Webcam: IconComponent;
declare const WebcamIcon: IconComponent;
declare const WebcamOff: IconComponent;
declare const WebcamOffIcon: IconComponent;
declare const Webhook: IconComponent;
declare const WebhookIcon: IconComponent;
declare const WebhookOff: IconComponent;
declare const WebhookOffIcon: IconComponent;
declare const Weight: IconComponent;
declare const WeightIcon: IconComponent;
declare const WeightTilde: IconComponent;
declare const WeightTildeIcon: IconComponent;
declare const Wheat: IconComponent;
declare const WheatIcon: IconComponent;
declare const WheatOff: IconComponent;
declare const WheatOffIcon: IconComponent;
declare const Whistle: IconComponent;
declare const WhistleIcon: IconComponent;
declare const WholeWord: IconComponent;
declare const WholeWordIcon: IconComponent;
declare const Wifi: IconComponent;
declare const WifiCog: IconComponent;
declare const WifiCogIcon: IconComponent;
declare const WifiHigh: IconComponent;
declare const WifiHighIcon: IconComponent;
declare const WifiIcon: IconComponent;
declare const WifiLock: IconComponent;
declare const WifiLockIcon: IconComponent;
declare const WifiLow: IconComponent;
declare const WifiLowIcon: IconComponent;
declare const WifiOff: IconComponent;
declare const WifiOffIcon: IconComponent;
declare const WifiPen: IconComponent;
declare const WifiPenIcon: IconComponent;
declare const WifiSync: IconComponent;
declare const WifiSyncIcon: IconComponent;
declare const WifiZero: IconComponent;
declare const WifiZeroIcon: IconComponent;
declare const Wind: IconComponent;
declare const WindArrowDown: IconComponent;
declare const WindArrowDownIcon: IconComponent;
declare const WindArrowUp: IconComponent;
declare const WindArrowUpIcon: IconComponent;
declare const WindIcon: IconComponent;
declare const Wine: IconComponent;
declare const WineIcon: IconComponent;
declare const WineOff: IconComponent;
declare const WineOffIcon: IconComponent;
declare const Workflow: IconComponent;
declare const WorkflowIcon: IconComponent;
declare const Worm: IconComponent;
declare const WormIcon: IconComponent;
declare const WrapText: IconComponent;
declare const WrapTextIcon: IconComponent;
declare const Wrench: IconComponent;
declare const WrenchIcon: IconComponent;
declare const WrenchOff: IconComponent;
declare const WrenchOffIcon: IconComponent;
declare const X: IconComponent;
declare const XCircle: IconComponent;
declare const XCircleIcon: IconComponent;
declare const XIcon: IconComponent;
declare const XLineTop: IconComponent;
declare const XLineTopIcon: IconComponent;
declare const XOctagon: IconComponent;
declare const XOctagonIcon: IconComponent;
declare const XSquare: IconComponent;
declare const XSquareIcon: IconComponent;
declare const Zap: IconComponent;
declare const ZapIcon: IconComponent;
declare const ZapOff: IconComponent;
declare const ZapOffIcon: IconComponent;
declare const ZodiacAquarius: IconComponent;
declare const ZodiacAquariusIcon: IconComponent;
declare const ZodiacAries: IconComponent;
declare const ZodiacAriesIcon: IconComponent;
declare const ZodiacCancer: IconComponent;
declare const ZodiacCancerIcon: IconComponent;
declare const ZodiacCapricorn: IconComponent;
declare const ZodiacCapricornIcon: IconComponent;
declare const ZodiacGemini: IconComponent;
declare const ZodiacGeminiIcon: IconComponent;
declare const ZodiacLeo: IconComponent;
declare const ZodiacLeoIcon: IconComponent;
declare const ZodiacLibra: IconComponent;
declare const ZodiacLibraIcon: IconComponent;
declare const ZodiacOphiuchus: IconComponent;
declare const ZodiacOphiuchusIcon: IconComponent;
declare const ZodiacPisces: IconComponent;
declare const ZodiacPiscesIcon: IconComponent;
declare const ZodiacSagittarius: IconComponent;
declare const ZodiacSagittariusIcon: IconComponent;
declare const ZodiacScorpio: IconComponent;
declare const ZodiacScorpioIcon: IconComponent;
declare const ZodiacTaurus: IconComponent;
declare const ZodiacTaurusIcon: IconComponent;
declare const ZodiacVirgo: IconComponent;
declare const ZodiacVirgoIcon: IconComponent;
declare const ZoomIn: IconComponent;
declare const ZoomInIcon: IconComponent;
declare const ZoomOut: IconComponent;
declare const ZoomOutIcon: IconComponent;
declare const Chrome: IconComponent;
declare const ChromeIcon: IconComponent;
declare const LucideChrome: IconComponent;
declare const Clap: IconComponent;
declare const ClapIcon: IconComponent;
declare const LucideClap: IconComponent;
declare const Discord: IconComponent;
declare const DiscordIcon: IconComponent;
declare const LucideDiscord: IconComponent;
declare const Dribbble: IconComponent;
declare const DribbbleIcon: IconComponent;
declare const LucideDribbble: IconComponent;
declare const Facebook: IconComponent;
declare const FacebookIcon: IconComponent;
declare const LucideFacebook: IconComponent;
declare const Figma: IconComponent;
declare const FigmaIcon: IconComponent;
declare const LucideFigma: IconComponent;
declare const Github: IconComponent;
declare const GithubIcon: IconComponent;
declare const LucideGithub: IconComponent;
declare const Gitlab: IconComponent;
declare const GitlabIcon: IconComponent;
declare const LucideGitlab: IconComponent;
declare const Instagram: IconComponent;
declare const InstagramIcon: IconComponent;
declare const LucideInstagram: IconComponent;
declare const Linkedin: IconComponent;
declare const LinkedinIcon: IconComponent;
declare const LucideLinkedin: IconComponent;
declare const Twitch: IconComponent;
declare const TwitchIcon: IconComponent;
declare const LucideTwitch: IconComponent;
declare const Twitter: IconComponent;
declare const TwitterIcon: IconComponent;
declare const LucideTwitter: IconComponent;
declare const Youtube: IconComponent;
declare const YoutubeIcon: IconComponent;
declare const LucideYoutube: IconComponent;

/** Resolve official Lucide names/aliases; unknown names stay unknown and render null. */
declare function normalizeName(input: string): string;
declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { AArrowDown, AArrowDownIcon, AArrowUp, AArrowUpIcon, ALargeSmall, ALargeSmallIcon, Accessibility, AccessibilityIcon, Activity, ActivityIcon, ActivitySquare, ActivitySquareIcon, Ad, AdIcon, AirVent, AirVentIcon, Airplay, AirplayIcon, AlarmCheck, AlarmCheckIcon, AlarmClock, AlarmClockCheck, AlarmClockCheckIcon, AlarmClockIcon, AlarmClockMinus, AlarmClockMinusIcon, AlarmClockOff, AlarmClockOffIcon, AlarmClockPlus, AlarmClockPlusIcon, AlarmMinus, AlarmMinusIcon, AlarmPlus, AlarmPlusIcon, AlarmSmoke, AlarmSmokeIcon, Album, AlbumIcon, AlertCircle, AlertCircleIcon, AlertOctagon, AlertOctagonIcon, AlertTriangle, AlertTriangleIcon, AlignCenter, AlignCenterHorizontal, AlignCenterHorizontalIcon, AlignCenterIcon, AlignCenterVertical, AlignCenterVerticalIcon, AlignEndHorizontal, AlignEndHorizontalIcon, AlignEndVertical, AlignEndVerticalIcon, AlignHorizontalDistributeCenter, AlignHorizontalDistributeCenterIcon, AlignHorizontalDistributeEnd, AlignHorizontalDistributeEndIcon, AlignHorizontalDistributeStart, AlignHorizontalDistributeStartIcon, AlignHorizontalJustifyCenter, AlignHorizontalJustifyCenterIcon, AlignHorizontalJustifyEnd, AlignHorizontalJustifyEndIcon, AlignHorizontalJustifyStart, AlignHorizontalJustifyStartIcon, AlignHorizontalSpaceAround, AlignHorizontalSpaceAroundIcon, AlignHorizontalSpaceBetween, AlignHorizontalSpaceBetweenIcon, AlignJustify, AlignJustifyIcon, AlignLeft, AlignLeftIcon, AlignRight, AlignRightIcon, AlignStartHorizontal, AlignStartHorizontalIcon, AlignStartVertical, AlignStartVerticalIcon, AlignVerticalDistributeCenter, AlignVerticalDistributeCenterIcon, AlignVerticalDistributeEnd, AlignVerticalDistributeEndIcon, AlignVerticalDistributeStart, AlignVerticalDistributeStartIcon, AlignVerticalJustifyCenter, AlignVerticalJustifyCenterIcon, AlignVerticalJustifyEnd, AlignVerticalJustifyEndIcon, AlignVerticalJustifyStart, AlignVerticalJustifyStartIcon, AlignVerticalSpaceAround, AlignVerticalSpaceAroundIcon, AlignVerticalSpaceBetween, AlignVerticalSpaceBetweenIcon, Ambulance, AmbulanceIcon, Ampersand, AmpersandIcon, Ampersands, AmpersandsIcon, Amphora, AmphoraIcon, Anchor, AnchorIcon, Angle, AngleIcon, Angry, AngryIcon, Annoyed, AnnoyedIcon, Antenna, AntennaIcon, Anvil, AnvilIcon, Aperture, ApertureIcon, AppWindow, AppWindowIcon, AppWindowMac, AppWindowMacIcon, Apple, AppleIcon, Archive, ArchiveIcon, ArchiveRestore, ArchiveRestoreIcon, ArchiveX, ArchiveXIcon, AreaChart, AreaChartIcon, Armchair, ArmchairIcon, ArmenianDram, ArmenianDramIcon, ArrowBigDown, ArrowBigDownDash, ArrowBigDownDashIcon, ArrowBigDownIcon, ArrowBigLeft, ArrowBigLeftDash, ArrowBigLeftDashIcon, ArrowBigLeftIcon, ArrowBigRight, ArrowBigRightDash, ArrowBigRightDashIcon, ArrowBigRightIcon, ArrowBigUp, ArrowBigUpDash, ArrowBigUpDashIcon, ArrowBigUpIcon, ArrowDown, ArrowDown01, ArrowDown01Icon, ArrowDown10, ArrowDown10Icon, ArrowDownAZ, ArrowDownAZIcon, ArrowDownAz, ArrowDownAzIcon, ArrowDownCircle, ArrowDownCircleIcon, ArrowDownFromLine, ArrowDownFromLineIcon, ArrowDownIcon, ArrowDownLeft, ArrowDownLeftFromCircle, ArrowDownLeftFromCircleIcon, ArrowDownLeftFromSquare, ArrowDownLeftFromSquareIcon, ArrowDownLeftIcon, ArrowDownLeftSquare, ArrowDownLeftSquareIcon, ArrowDownNarrowWide, ArrowDownNarrowWideIcon, ArrowDownRight, ArrowDownRightFromCircle, ArrowDownRightFromCircleIcon, ArrowDownRightFromSquare, ArrowDownRightFromSquareIcon, ArrowDownRightIcon, ArrowDownRightSquare, ArrowDownRightSquareIcon, ArrowDownSquare, ArrowDownSquareIcon, ArrowDownToDot, ArrowDownToDotIcon, ArrowDownToLine, ArrowDownToLineIcon, ArrowDownUp, ArrowDownUpIcon, ArrowDownWideNarrow, ArrowDownWideNarrowIcon, ArrowDownZA, ArrowDownZAIcon, ArrowDownZa, ArrowDownZaIcon, ArrowLeft, ArrowLeftCircle, ArrowLeftCircleIcon, ArrowLeftFromLine, ArrowLeftFromLineIcon, ArrowLeftIcon, ArrowLeftRight, ArrowLeftRightIcon, ArrowLeftSquare, ArrowLeftSquareIcon, ArrowLeftToLine, ArrowLeftToLineIcon, ArrowRight, ArrowRightCircle, ArrowRightCircleIcon, ArrowRightFromLine, ArrowRightFromLineIcon, ArrowRightIcon, ArrowRightLeft, ArrowRightLeftIcon, ArrowRightSquare, ArrowRightSquareIcon, ArrowRightToLine, ArrowRightToLineIcon, ArrowUp, ArrowUp01, ArrowUp01Icon, ArrowUp10, ArrowUp10Icon, ArrowUpAZ, ArrowUpAZIcon, ArrowUpAz, ArrowUpAzIcon, ArrowUpCircle, ArrowUpCircleIcon, ArrowUpDown, ArrowUpDownIcon, ArrowUpFromDot, ArrowUpFromDotIcon, ArrowUpFromLine, ArrowUpFromLineIcon, ArrowUpIcon, ArrowUpLeft, ArrowUpLeftFromCircle, ArrowUpLeftFromCircleIcon, ArrowUpLeftFromSquare, ArrowUpLeftFromSquareIcon, ArrowUpLeftIcon, ArrowUpLeftSquare, ArrowUpLeftSquareIcon, ArrowUpNarrowWide, ArrowUpNarrowWideIcon, ArrowUpRight, ArrowUpRightFromCircle, ArrowUpRightFromCircleIcon, ArrowUpRightFromSquare, ArrowUpRightFromSquareIcon, ArrowUpRightIcon, ArrowUpRightSquare, ArrowUpRightSquareIcon, ArrowUpSquare, ArrowUpSquareIcon, ArrowUpToLine, ArrowUpToLineIcon, ArrowUpWideNarrow, ArrowUpWideNarrowIcon, ArrowUpZA, ArrowUpZAIcon, ArrowUpZa, ArrowUpZaIcon, ArrowsUpFromLine, ArrowsUpFromLineIcon, Asterisk, AsteriskIcon, AsteriskSquare, AsteriskSquareIcon, Astroid, AstroidIcon, AtSign, AtSignIcon, Atom, AtomIcon, AudioLines, AudioLinesIcon, AudioLinesOff, AudioLinesOffIcon, AudioLinesX, AudioLinesXIcon, AudioWaveform, AudioWaveformIcon, Award, AwardIcon, Axe, AxeIcon, Axis3D, Axis3DIcon, Axis3d, Axis3dIcon, Baby, BabyIcon, Backpack, BackpackIcon, Badge, BadgeAlert, BadgeAlertIcon, BadgeCent, BadgeCentIcon, BadgeCheck, BadgeCheckIcon, BadgeDollarSign, BadgeDollarSignIcon, BadgeEuro, BadgeEuroIcon, BadgeHelp, BadgeHelpIcon, BadgeIcon, BadgeIndianRupee, BadgeIndianRupeeIcon, BadgeInfo, BadgeInfoIcon, BadgeJapaneseYen, BadgeJapaneseYenIcon, BadgeMinus, BadgeMinusIcon, BadgePercent, BadgePercentIcon, BadgePlus, BadgePlusIcon, BadgePoundSterling, BadgePoundSterlingIcon, BadgeQuestionMark, BadgeQuestionMarkIcon, BadgeRussianRuble, BadgeRussianRubleIcon, BadgeSwissFranc, BadgeSwissFrancIcon, BadgeTurkishLira, BadgeTurkishLiraIcon, BadgeX, BadgeXIcon, BaggageClaim, BaggageClaimIcon, Balloon, BalloonIcon, Ban, BanIcon, Banana, BananaIcon, Bandage, BandageIcon, BangladeshiTaka, BangladeshiTakaIcon, Banknote, BanknoteArrowDown, BanknoteArrowDownIcon, BanknoteArrowUp, BanknoteArrowUpIcon, BanknoteCheck, BanknoteCheckIcon, BanknoteIcon, BanknoteX, BanknoteXIcon, BarChart, BarChart2, BarChart2Icon, BarChart3, BarChart3Icon, BarChart4, BarChart4Icon, BarChartBig, BarChartBigIcon, BarChartHorizontal, BarChartHorizontalBig, BarChartHorizontalBigIcon, BarChartHorizontalIcon, BarChartIcon, Barcode, BarcodeIcon, Barrel, BarrelIcon, Baseline, BaselineIcon, Bath, BathIcon, Battery, BatteryCharging, BatteryChargingIcon, BatteryFull, BatteryFullIcon, BatteryIcon, BatteryLow, BatteryLowIcon, BatteryMedium, BatteryMediumIcon, BatteryPlus, BatteryPlusIcon, BatteryWarning, BatteryWarningIcon, Beaker, BeakerIcon, Bean, BeanIcon, BeanOff, BeanOffIcon, Bed, BedDouble, BedDoubleIcon, BedIcon, BedSingle, BedSingleIcon, Beef, BeefIcon, BeefOff, BeefOffIcon, Beer, BeerIcon, BeerOff, BeerOffIcon, Bell, BellCheck, BellCheckIcon, BellDot, BellDotIcon, BellElectric, BellElectricIcon, BellIcon, BellMinus, BellMinusIcon, BellOff, BellOffIcon, BellPlus, BellPlusIcon, BellRing, BellRingIcon, BetweenHorizonalEnd, BetweenHorizonalEndIcon, BetweenHorizonalStart, BetweenHorizonalStartIcon, BetweenHorizontalEnd, BetweenHorizontalEndIcon, BetweenHorizontalStart, BetweenHorizontalStartIcon, BetweenVerticalEnd, BetweenVerticalEndIcon, BetweenVerticalStart, BetweenVerticalStartIcon, BicepsFlexed, BicepsFlexedIcon, Bike, BikeIcon, Binary, BinaryIcon, Binoculars, BinocularsIcon, Biohazard, BiohazardIcon, Bird, BirdIcon, Birdhouse, BirdhouseIcon, Bitcoin, BitcoinIcon, Blend, BlendIcon, Blender, BlenderIcon, Blinds, BlindsIcon, Blocks, BlocksIcon, Bluetooth, BluetoothConnected, BluetoothConnectedIcon, BluetoothIcon, BluetoothOff, BluetoothOffIcon, BluetoothSearching, BluetoothSearchingIcon, Bold, BoldIcon, Bolt, BoltIcon, Bomb, BombIcon, Bone, BoneFracture, BoneFractureIcon, BoneIcon, Book, BookA, BookAIcon, BookAlert, BookAlertIcon, BookAudio, BookAudioIcon, BookBookmark, BookBookmarkIcon, BookCheck, BookCheckIcon, BookCopy, BookCopyIcon, BookDashed, BookDashedIcon, BookDown, BookDownIcon, BookHeadphones, BookHeadphonesIcon, BookHeart, BookHeartIcon, BookIcon, BookImage, BookImageIcon, BookKey, BookKeyIcon, BookLock, BookLockIcon, BookMarked, BookMarkedIcon, BookMinus, BookMinusIcon, BookOpen, BookOpenCheck, BookOpenCheckIcon, BookOpenIcon, BookOpenText, BookOpenTextIcon, BookPlus, BookPlusIcon, BookSearch, BookSearchIcon, BookTemplate, BookTemplateIcon, BookText, BookTextIcon, BookType, BookTypeIcon, BookUp, BookUp2, BookUp2Icon, BookUpIcon, BookUser, BookUserIcon, BookX, BookXIcon, Bookmark, BookmarkCheck, BookmarkCheckIcon, BookmarkIcon, BookmarkMinus, BookmarkMinusIcon, BookmarkOff, BookmarkOffIcon, BookmarkPlus, BookmarkPlusIcon, BookmarkX, BookmarkXIcon, BoomBox, BoomBoxIcon, Bot, BotIcon, BotMessageSquare, BotMessageSquareIcon, BotOff, BotOffIcon, BottleWine, BottleWineIcon, BowArrow, BowArrowIcon, Box, BoxIcon, BoxSelect, BoxSelectIcon, Boxes, BoxesIcon, Braces, BracesIcon, Brackets, BracketsIcon, Brain, BrainCircuit, BrainCircuitIcon, BrainCog, BrainCogIcon, BrainIcon, BrickWall, BrickWallFire, BrickWallFireIcon, BrickWallIcon, BrickWallShield, BrickWallShieldIcon, Bridge, BridgeIcon, Briefcase, BriefcaseBusiness, BriefcaseBusinessIcon, BriefcaseConveyorBelt, BriefcaseConveyorBeltIcon, BriefcaseIcon, BriefcaseMedical, BriefcaseMedicalIcon, BriefcasePlus, BriefcasePlusIcon, BringToFront, BringToFrontIcon, Broccoli, BroccoliIcon, Broom, BroomIcon, BroomSparkles, BroomSparklesIcon, Brush, BrushCleaning, BrushCleaningIcon, BrushIcon, Bubbles, BubblesIcon, Bug, BugIcon, BugOff, BugOffIcon, BugPlay, BugPlayIcon, Building, Building2, Building2Icon, BuildingComplex, BuildingComplexIcon, BuildingComplexPlus, BuildingComplexPlusIcon, BuildingIcon, Bus, BusFront, BusFrontIcon, BusIcon, Cable, CableCar, CableCarIcon, CableIcon, Cake, CakeIcon, CakeSlice, CakeSliceIcon, Calculator, CalculatorIcon, Calendar, Calendar1, Calendar1Icon, CalendarArrowDown, CalendarArrowDownIcon, CalendarArrowUp, CalendarArrowUpIcon, CalendarCheck, CalendarCheck2, CalendarCheck2Icon, CalendarCheckIcon, CalendarChevronsRight, CalendarChevronsRightIcon, CalendarClock, CalendarClockIcon, CalendarCog, CalendarCogIcon, CalendarDays, CalendarDaysIcon, CalendarFold, CalendarFoldIcon, CalendarHeart, CalendarHeartIcon, CalendarIcon, CalendarMinus, CalendarMinus2, CalendarMinus2Icon, CalendarMinusIcon, CalendarOff, CalendarOffIcon, CalendarPlus, CalendarPlus2, CalendarPlus2Icon, CalendarPlusIcon, CalendarRange, CalendarRangeIcon, CalendarSearch, CalendarSearchIcon, CalendarSync, CalendarSyncIcon, CalendarX, CalendarX2, CalendarX2Icon, CalendarXIcon, Calendars, CalendarsIcon, Camera, CameraIcon, CameraOff, CameraOffIcon, Can, CanIcon, CanSoda, CanSodaIcon, CandlestickChart, CandlestickChartIcon, Candy, CandyCane, CandyCaneIcon, CandyIcon, CandyOff, CandyOffIcon, Cannabis, CannabisIcon, CannabisOff, CannabisOffIcon, Captions, CaptionsIcon, CaptionsOff, CaptionsOffIcon, Car, CarBattery, CarBatteryIcon, CarFront, CarFrontIcon, CarIcon, CarTaxiFront, CarTaxiFrontIcon, Caravan, CaravanIcon, CardSim, CardSimIcon, Carrot, CarrotIcon, Carton, CartonIcon, CartonOff, CartonOffIcon, CaseLower, CaseLowerIcon, CaseSensitive, CaseSensitiveIcon, CaseUpper, CaseUpperIcon, CassetteTape, CassetteTapeIcon, Cast, CastIcon, Castle, CastleIcon, Cat, CatIcon, Cctv, CctvIcon, CctvOff, CctvOffIcon, ChartArea, ChartAreaIcon, ChartBar, ChartBarBig, ChartBarBigIcon, ChartBarDecreasing, ChartBarDecreasingIcon, ChartBarIcon, ChartBarIncreasing, ChartBarIncreasingIcon, ChartBarStacked, ChartBarStackedIcon, ChartCandlestick, ChartCandlestickIcon, ChartColumn, ChartColumnBig, ChartColumnBigIcon, ChartColumnDecreasing, ChartColumnDecreasingIcon, ChartColumnIcon, ChartColumnIncreasing, ChartColumnIncreasingIcon, ChartColumnStacked, ChartColumnStackedIcon, ChartGantt, ChartGanttIcon, ChartLine, ChartLineIcon, ChartNetwork, ChartNetworkIcon, ChartNoAxesColumn, ChartNoAxesColumnDecreasing, ChartNoAxesColumnDecreasingIcon, ChartNoAxesColumnIcon, ChartNoAxesColumnIncreasing, ChartNoAxesColumnIncreasingIcon, ChartNoAxesCombined, ChartNoAxesCombinedIcon, ChartNoAxesGantt, ChartNoAxesGanttIcon, ChartPie, ChartPieIcon, ChartScatter, ChartScatterIcon, ChartSpline, ChartSplineIcon, Check, CheckCheck, CheckCheckIcon, CheckCircle, CheckCircle2, CheckCircle2Icon, CheckCircleIcon, CheckIcon, CheckLine, CheckLineIcon, CheckSquare, CheckSquare2, CheckSquare2Icon, CheckSquareIcon, ChefHat, ChefHatIcon, Cherry, CherryIcon, ChessBishop, ChessBishopIcon, ChessKing, ChessKingIcon, ChessKnight, ChessKnightIcon, ChessPawn, ChessPawnIcon, ChessQueen, ChessQueenIcon, ChessRook, ChessRookIcon, ChevronDown, ChevronDownCircle, ChevronDownCircleIcon, ChevronDownIcon, ChevronDownSquare, ChevronDownSquareIcon, ChevronFirst, ChevronFirstIcon, ChevronLast, ChevronLastIcon, ChevronLeft, ChevronLeftCircle, ChevronLeftCircleIcon, ChevronLeftIcon, ChevronLeftSquare, ChevronLeftSquareIcon, ChevronRight, ChevronRightCircle, ChevronRightCircleIcon, ChevronRightIcon, ChevronRightSquare, ChevronRightSquareIcon, ChevronUp, ChevronUpCircle, ChevronUpCircleIcon, ChevronUpIcon, ChevronUpSquare, ChevronUpSquareIcon, ChevronsDown, ChevronsDownIcon, ChevronsDownUp, ChevronsDownUpIcon, ChevronsLeft, ChevronsLeftIcon, ChevronsLeftRight, ChevronsLeftRightEllipsis, ChevronsLeftRightEllipsisIcon, ChevronsLeftRightIcon, ChevronsRight, ChevronsRightIcon, ChevronsRightLeft, ChevronsRightLeftIcon, ChevronsUp, ChevronsUpDown, ChevronsUpDownIcon, ChevronsUpIcon, Chrome, ChromeIcon, Church, ChurchIcon, Cigarette, CigaretteIcon, CigaretteOff, CigaretteOffIcon, Circle, CircleAlert, CircleAlertIcon, CircleArrowDown, CircleArrowDownIcon, CircleArrowLeft, CircleArrowLeftIcon, CircleArrowOutDownLeft, CircleArrowOutDownLeftIcon, CircleArrowOutDownRight, CircleArrowOutDownRightIcon, CircleArrowOutUpLeft, CircleArrowOutUpLeftIcon, CircleArrowOutUpRight, CircleArrowOutUpRightIcon, CircleArrowRight, CircleArrowRightIcon, CircleArrowUp, CircleArrowUpIcon, CircleCheck, CircleCheckBig, CircleCheckBigIcon, CircleCheckIcon, CircleChevronDown, CircleChevronDownIcon, CircleChevronLeft, CircleChevronLeftIcon, CircleChevronRight, CircleChevronRightIcon, CircleChevronUp, CircleChevronUpIcon, CircleDashed, CircleDashedCheck, CircleDashedCheckIcon, CircleDashedIcon, CircleDivide, CircleDivideIcon, CircleDollarSign, CircleDollarSignIcon, CircleDot, CircleDotDashed, CircleDotDashedIcon, CircleDotIcon, CircleEllipsis, CircleEllipsisIcon, CircleEqual, CircleEqualIcon, CircleEuro, CircleEuroIcon, CircleFadingArrowUp, CircleFadingArrowUpIcon, CircleFadingPlus, CircleFadingPlusIcon, CircleGauge, CircleGaugeIcon, CircleHelp, CircleHelpIcon, CircleIcon, CircleMinus, CircleMinusIcon, CircleOff, CircleOffIcon, CircleParking, CircleParkingIcon, CircleParkingOff, CircleParkingOffIcon, CirclePause, CirclePauseIcon, CirclePercent, CirclePercentIcon, CirclePile, CirclePileIcon, CirclePlay, CirclePlayIcon, CirclePlus, CirclePlusIcon, CirclePoundSterling, CirclePoundSterlingIcon, CirclePower, CirclePowerIcon, CircleQuestionMark, CircleQuestionMarkIcon, CircleSlash, CircleSlash2, CircleSlash2Icon, CircleSlashIcon, CircleSlashed, CircleSlashedIcon, CircleSmall, CircleSmallIcon, CircleStar, CircleStarIcon, CircleStop, CircleStopIcon, CircleUser, CircleUserIcon, CircleUserRound, CircleUserRoundIcon, CircleX, CircleXIcon, CircuitBoard, CircuitBoardIcon, Citrus, CitrusIcon, Clap, ClapIcon, Clapperboard, ClapperboardIcon, ClefAlto, ClefAltoIcon, ClefBass, ClefBassIcon, ClefTreble, ClefTrebleIcon, Clipboard, ClipboardCheck, ClipboardCheckIcon, ClipboardClock, ClipboardClockIcon, ClipboardCopy, ClipboardCopyIcon, ClipboardEdit, ClipboardEditIcon, ClipboardIcon, ClipboardList, ClipboardListIcon, ClipboardMinus, ClipboardMinusIcon, ClipboardPaste, ClipboardPasteIcon, ClipboardPen, ClipboardPenIcon, ClipboardPenLine, ClipboardPenLineIcon, ClipboardPlus, ClipboardPlusIcon, ClipboardSignature, ClipboardSignatureIcon, ClipboardType, ClipboardTypeIcon, ClipboardX, ClipboardXIcon, Clock, Clock1, Clock10, Clock10Icon, Clock11, Clock11Icon, Clock12, Clock12Icon, Clock1Icon, Clock2, Clock2Icon, Clock3, Clock3Icon, Clock4, Clock4Icon, Clock5, Clock5Icon, Clock6, Clock6Icon, Clock7, Clock7Icon, Clock8, Clock8Icon, Clock9, Clock9Icon, ClockAlert, ClockAlertIcon, ClockArrowDown, ClockArrowDownIcon, ClockArrowLeft, ClockArrowLeftIcon, ClockArrowRight, ClockArrowRightIcon, ClockArrowUp, ClockArrowUpIcon, ClockCheck, ClockCheckIcon, ClockFading, ClockFadingIcon, ClockIcon, ClockPlus, ClockPlusIcon, ClosedCaption, ClosedCaptionIcon, Cloud, CloudAlert, CloudAlertIcon, CloudBackup, CloudBackupIcon, CloudCheck, CloudCheckIcon, CloudCog, CloudCogIcon, CloudDownload, CloudDownloadIcon, CloudDrizzle, CloudDrizzleIcon, CloudFog, CloudFogIcon, CloudHail, CloudHailIcon, CloudIcon, CloudLightning, CloudLightningIcon, CloudMoon, CloudMoonIcon, CloudMoonRain, CloudMoonRainIcon, CloudOff, CloudOffIcon, CloudRain, CloudRainIcon, CloudRainWind, CloudRainWindIcon, CloudSnow, CloudSnowIcon, CloudSun, CloudSunIcon, CloudSunRain, CloudSunRainIcon, CloudSync, CloudSyncIcon, CloudUpload, CloudUploadIcon, Cloudy, CloudyIcon, Clover, CloverIcon, Club, ClubIcon, Code, Code2, Code2Icon, CodeIcon, CodeSquare, CodeSquareIcon, CodeXml, CodeXmlIcon, Coffee, CoffeeIcon, Cog, CogIcon, Coins, CoinsIcon, Columns, Columns2, Columns2Icon, Columns3, Columns3Cog, Columns3CogIcon, Columns3Icon, Columns4, Columns4Icon, ColumnsIcon, ColumnsSettings, ColumnsSettingsIcon, Combine, CombineIcon, Command, CommandIcon, Compass, CompassIcon, Component, ComponentIcon, Computer, ComputerIcon, ConciergeBell, ConciergeBellIcon, Cone, ConeIcon, Construction, ConstructionIcon, Contact, Contact2, Contact2Icon, ContactIcon, ContactRound, ContactRoundIcon, Container, ContainerIcon, Contrast, ContrastIcon, Cookie, CookieIcon, CookingPot, CookingPotIcon, Copy, CopyCheck, CopyCheckIcon, CopyIcon, CopyMinus, CopyMinusIcon, CopyPlus, CopyPlusIcon, CopySlash, CopySlashIcon, CopyX, CopyXIcon, Copyleft, CopyleftIcon, Copyright, CopyrightIcon, CornerDownLeft, CornerDownLeftIcon, CornerDownRight, CornerDownRightIcon, CornerLeftDown, CornerLeftDownIcon, CornerLeftUp, CornerLeftUpIcon, CornerRightDown, CornerRightDownIcon, CornerRightUp, CornerRightUpIcon, CornerUpLeft, CornerUpLeftIcon, CornerUpRight, CornerUpRightIcon, Cpu, CpuIcon, CreativeCommons, CreativeCommonsIcon, CreditCard, CreditCardCheck, CreditCardCheckIcon, CreditCardIcon, CreditCardMinus, CreditCardMinusIcon, CreditCardPlus, CreditCardPlusIcon, CreditCardReader, CreditCardReaderIcon, CreditCardX, CreditCardXIcon, Croissant, CroissantIcon, Crop, CropIcon, Cross, CrossIcon, Crosshair, CrosshairIcon, Crown, CrownIcon, Cuboid, CuboidIcon, CupSoda, CupSodaIcon, Cupcake, CupcakeIcon, CurlyBraces, CurlyBracesIcon, Currency, CurrencyIcon, Cylinder, CylinderIcon, Dam, DamIcon, Database, DatabaseArrowDown, DatabaseArrowDownIcon, DatabaseArrowUp, DatabaseArrowUpIcon, DatabaseBackup, DatabaseBackupIcon, DatabaseCheck, DatabaseCheckIcon, DatabaseIcon, DatabaseMinus, DatabaseMinusIcon, DatabasePlus, DatabasePlusIcon, DatabaseSearch, DatabaseSearchIcon, DatabaseX, DatabaseXIcon, DatabaseZap, DatabaseZapIcon, DecimalsArrowLeft, DecimalsArrowLeftIcon, DecimalsArrowRight, DecimalsArrowRightIcon, Delete, DeleteIcon, Dessert, DessertIcon, Diameter, DiameterIcon, Diamond, DiamondIcon, DiamondMinus, DiamondMinusIcon, DiamondPercent, DiamondPercentIcon, DiamondPlus, DiamondPlusIcon, Dice1, Dice1Icon, Dice2, Dice2Icon, Dice3, Dice3Icon, Dice4, Dice4Icon, Dice5, Dice5Icon, Dice6, Dice6Icon, Dices, DicesIcon, Diff, DiffIcon, Disc, Disc2, Disc2Icon, Disc3, Disc3Icon, DiscAlbum, DiscAlbumIcon, DiscIcon, Discord, DiscordIcon, Divide, DivideCircle, DivideCircleIcon, DivideIcon, DivideSquare, DivideSquareIcon, Dna, DnaIcon, DnaOff, DnaOffIcon, Dock, DockIcon, Dog, DogIcon, DollarSign, DollarSignIcon, Dome, DomeIcon, Donut, DonutIcon, DoorClosed, DoorClosedCog, DoorClosedCogIcon, DoorClosedIcon, DoorClosedLocked, DoorClosedLockedIcon, DoorClosedPackage, DoorClosedPackageIcon, DoorOpen, DoorOpenIcon, DoorStairwell, DoorStairwellIcon, Dot, DotIcon, DotSquare, DotSquareIcon, Download, DownloadCloud, DownloadCloudIcon, DownloadIcon, DraftingCompass, DraftingCompassIcon, Drama, DramaIcon, Dribbble, DribbbleIcon, Drill, DrillIcon, Drone, DroneIcon, Droplet, DropletIcon, DropletOff, DropletOffIcon, Droplets, DropletsIcon, Drum, DrumIcon, Drumstick, DrumstickIcon, Dumbbell, DumbbellIcon, Ear, EarIcon, EarOff, EarOffIcon, Earth, EarthIcon, EarthLock, EarthLockIcon, Eclipse, EclipseIcon, Edit, Edit2, Edit2Icon, Edit3, Edit3Icon, EditIcon, Egg, EggFried, EggFriedIcon, EggIcon, EggOff, EggOffIcon, Eject, EjectIcon, Ellipse, EllipseIcon, Ellipsis, EllipsisIcon, EllipsisVertical, EllipsisVerticalIcon, Engine, EngineIcon, Equal, EqualApproximately, EqualApproximatelyIcon, EqualApproximatelyNot, EqualApproximatelyNotIcon, EqualIcon, EqualNot, EqualNotIcon, EqualSquare, EqualSquareIcon, Eraser, EraserIcon, EthernetPort, EthernetPortIcon, Euro, EuroIcon, EvCharger, EvChargerIcon, Expand, ExpandIcon, ExternalLink, ExternalLinkIcon, Eye, EyeClosed, EyeClosedIcon, EyeDashed, EyeDashedIcon, EyeIcon, EyeOff, EyeOffIcon, FaceAngry, FaceAngryIcon, FaceExpressionless, FaceExpressionlessIcon, FaceGrinning, FaceGrinningIcon, FaceNeutral, FaceNeutralIcon, FaceSlightlyFrowning, FaceSlightlyFrowningIcon, FaceSlightlySmiling, FaceSlightlySmilingIcon, FaceSlightlySmilingPlus, FaceSlightlySmilingPlusIcon, Facebook, FacebookIcon, Factory, FactoryIcon, Fan, FanIcon, FastForward, FastForwardIcon, Faucet, FaucetIcon, Feather, FeatherIcon, Fence, FenceIcon, FerrisWheel, FerrisWheelIcon, Figma, FigmaIcon, File, FileArchive, FileArchiveIcon, FileAudio, FileAudio2, FileAudio2Icon, FileAudioIcon, FileAxis3D, FileAxis3DIcon, FileAxis3d, FileAxis3dIcon, FileBadge, FileBadge2, FileBadge2Icon, FileBadgeIcon, FileBarChart, FileBarChart2, FileBarChart2Icon, FileBarChartIcon, FileBox, FileBoxIcon, FileBraces, FileBracesCorner, FileBracesCornerIcon, FileBracesIcon, FileChartColumn, FileChartColumnIcon, FileChartColumnIncreasing, FileChartColumnIncreasingIcon, FileChartLine, FileChartLineIcon, FileChartPie, FileChartPieIcon, FileCheck, FileCheck2, FileCheck2Icon, FileCheckCorner, FileCheckCornerIcon, FileCheckIcon, FileClock, FileClockIcon, FileCode, FileCode2, FileCode2Icon, FileCodeCorner, FileCodeCornerIcon, FileCodeIcon, FileCog, FileCog2, FileCog2Icon, FileCogIcon, FileDiff, FileDiffIcon, FileDigit, FileDigitIcon, FileDown, FileDownIcon, FileEdit, FileEditIcon, FileExclamationPoint, FileExclamationPointIcon, FileHeadphone, FileHeadphoneIcon, FileHeart, FileHeartIcon, FileIcon, FileImage, FileImageIcon, FileInput, FileInputIcon, FileJson, FileJson2, FileJson2Icon, FileJsonIcon, FileKey, FileKey2, FileKey2Icon, FileKeyIcon, FileLineChart, FileLineChartIcon, FileLock, FileLock2, FileLock2Icon, FileLockIcon, FileMinus, FileMinus2, FileMinus2Icon, FileMinusCorner, FileMinusCornerIcon, FileMinusIcon, FileMusic, FileMusicIcon, FileOutput, FileOutputIcon, FilePen, FilePenIcon, FilePenLine, FilePenLineIcon, FilePieChart, FilePieChartIcon, FilePlay, FilePlayIcon, FilePlus, FilePlus2, FilePlus2Icon, FilePlusCorner, FilePlusCornerIcon, FilePlusIcon, FileQuestion, FileQuestionIcon, FileQuestionMark, FileQuestionMarkIcon, FileScan, FileScanIcon, FileSearch, FileSearch2, FileSearch2Icon, FileSearchCorner, FileSearchCornerIcon, FileSearchIcon, FileSignal, FileSignalIcon, FileSignature, FileSignatureIcon, FileSliders, FileSlidersIcon, FileSpreadsheet, FileSpreadsheetIcon, FileStack, FileStackIcon, FileSymlink, FileSymlinkIcon, FileTerminal, FileTerminalIcon, FileText, FileTextIcon, FileType, FileType2, FileType2Icon, FileTypeCorner, FileTypeCornerIcon, FileTypeIcon, FileUp, FileUpIcon, FileUser, FileUserIcon, FileVideo, FileVideo2, FileVideo2Icon, FileVideoCamera, FileVideoCameraIcon, FileVideoIcon, FileVolume, FileVolume2, FileVolume2Icon, FileVolumeIcon, FileWarning, FileWarningIcon, FileX, FileX2, FileX2Icon, FileXCorner, FileXCornerIcon, FileXIcon, Files, FilesIcon, Film, FilmIcon, Filter, FilterIcon, FilterX, FilterXIcon, Fingerprint, FingerprintIcon, FingerprintPattern, FingerprintPatternIcon, FireExtinguisher, FireExtinguisherIcon, Fish, FishIcon, FishOff, FishOffIcon, FishSymbol, FishSymbolIcon, FishingHook, FishingHookIcon, FishingRod, FishingRodIcon, Flag, FlagIcon, FlagOff, FlagOffIcon, FlagTriangleLeft, FlagTriangleLeftIcon, FlagTriangleRight, FlagTriangleRightIcon, Flame, FlameIcon, FlameKindling, FlameKindlingIcon, Flashlight, FlashlightIcon, FlashlightOff, FlashlightOffIcon, FlaskConical, FlaskConicalIcon, FlaskConicalOff, FlaskConicalOffIcon, FlaskRound, FlaskRoundIcon, FlipHorizontal, FlipHorizontal2, FlipHorizontal2Icon, FlipHorizontalIcon, FlipVertical, FlipVertical2, FlipVertical2Icon, FlipVerticalIcon, Flower, Flower2, Flower2Icon, FlowerIcon, Focus, FocusIcon, FoldHorizontal, FoldHorizontalIcon, FoldVertical, FoldVerticalIcon, Folder, FolderArchive, FolderArchiveIcon, FolderBookmark, FolderBookmarkIcon, FolderCheck, FolderCheckIcon, FolderClock, FolderClockIcon, FolderClosed, FolderClosedIcon, FolderCode, FolderCodeIcon, FolderCog, FolderCog2, FolderCog2Icon, FolderCogIcon, FolderDot, FolderDotIcon, FolderDown, FolderDownIcon, FolderEdit, FolderEditIcon, FolderGit, FolderGit2, FolderGit2Icon, FolderGitIcon, FolderHeart, FolderHeartIcon, FolderIcon, FolderInput, FolderInputIcon, FolderKanban, FolderKanbanIcon, FolderKey, FolderKeyIcon, FolderLock, FolderLockIcon, FolderMinus, FolderMinusIcon, FolderOpen, FolderOpenDot, FolderOpenDotIcon, FolderOpenIcon, FolderOutput, FolderOutputIcon, FolderPen, FolderPenIcon, FolderPlus, FolderPlusIcon, FolderRoot, FolderRootIcon, FolderSearch, FolderSearch2, FolderSearch2Icon, FolderSearchIcon, FolderSymlink, FolderSymlinkIcon, FolderSync, FolderSyncIcon, FolderTree, FolderTreeIcon, FolderUp, FolderUpIcon, FolderX, FolderXIcon, Folders, FoldersIcon, Footprints, FootprintsIcon, ForkKnife, ForkKnifeCrossed, ForkKnifeCrossedIcon, ForkKnifeIcon, Forklift, ForkliftIcon, Form, FormIcon, FormInput, FormInputIcon, Forward, ForwardIcon, Frame, FrameIcon, Frown, FrownIcon, Fuel, FuelIcon, Fullscreen, FullscreenIcon, FunctionSquare, FunctionSquareIcon, Funnel, FunnelIcon, FunnelPlus, FunnelPlusIcon, FunnelX, FunnelXIcon, Galaxy, GalaxyIcon, GalleryHorizontal, GalleryHorizontalEnd, GalleryHorizontalEndIcon, GalleryHorizontalIcon, GalleryThumbnails, GalleryThumbnailsIcon, GalleryVertical, GalleryVerticalEnd, GalleryVerticalEndIcon, GalleryVerticalIcon, Gamepad, Gamepad2, Gamepad2Icon, GamepadDirectional, GamepadDirectionalIcon, GamepadIcon, GanttChart, GanttChartIcon, GanttChartSquare, GanttChartSquareIcon, GapHorizontal, GapHorizontalIcon, GapVertical, GapVerticalIcon, Gauge, GaugeCircle, GaugeCircleIcon, GaugeIcon, Gavel, GavelIcon, Gem, GemIcon, GeorgianLari, GeorgianLariIcon, Germ, GermIcon, GermOff, GermOffIcon, Ghost, GhostIcon, Gift, GiftIcon, GitBranch, GitBranchIcon, GitBranchMinus, GitBranchMinusIcon, GitBranchPlus, GitBranchPlusIcon, GitCommit, GitCommitHorizontal, GitCommitHorizontalIcon, GitCommitIcon, GitCommitVertical, GitCommitVerticalIcon, GitCompare, GitCompareArrows, GitCompareArrowsIcon, GitCompareIcon, GitFork, GitForkIcon, GitGraph, GitGraphIcon, GitMerge, GitMergeConflict, GitMergeConflictIcon, GitMergeIcon, GitPullRequest, GitPullRequestArrow, GitPullRequestArrowIcon, GitPullRequestClosed, GitPullRequestClosedIcon, GitPullRequestCreate, GitPullRequestCreateArrow, GitPullRequestCreateArrowIcon, GitPullRequestCreateIcon, GitPullRequestDraft, GitPullRequestDraftIcon, GitPullRequestIcon, Github, GithubIcon, Gitlab, GitlabIcon, GlassWater, GlassWaterIcon, Glasses, GlassesIcon, Globe, Globe2, Globe2Icon, GlobeCheck, GlobeCheckIcon, GlobeCode, GlobeCodeIcon, GlobeIcon, GlobeLock, GlobeLockIcon, GlobeOff, GlobeOffIcon, GlobeX, GlobeXIcon, Goal, GoalIcon, Gpu, GpuIcon, Grab, GrabIcon, GraduationCap, GraduationCapIcon, Grape, GrapeIcon, Grid, Grid2X2, Grid2X2Check, Grid2X2CheckIcon, Grid2X2Icon, Grid2X2Plus, Grid2X2PlusIcon, Grid2X2X, Grid2X2XIcon, Grid2x2, Grid2x2Check, Grid2x2CheckIcon, Grid2x2Icon, Grid2x2Plus, Grid2x2PlusIcon, Grid2x2X, Grid2x2XIcon, Grid3X3, Grid3X3Icon, Grid3x2, Grid3x2Icon, Grid3x3, Grid3x3Icon, GridIcon, Grip, GripHorizontal, GripHorizontalIcon, GripIcon, GripVertical, GripVerticalIcon, Groceries, GroceriesIcon, Group, GroupIcon, Guitar, GuitarIcon, Ham, HamIcon, Hamburger, HamburgerIcon, Hammer, HammerIcon, Hand, HandCoins, HandCoinsIcon, HandFist, HandFistIcon, HandGrab, HandGrabIcon, HandHeart, HandHeartIcon, HandHelping, HandHelpingIcon, HandIcon, HandMetal, HandMetalIcon, HandPlatter, HandPlatterIcon, Handbag, HandbagIcon, HandleBottomRight, HandleBottomRightIcon, Handshake, HandshakeIcon, HardDrive, HardDriveDownload, HardDriveDownloadIcon, HardDriveIcon, HardDriveUpload, HardDriveUploadIcon, HardHat, HardHatIcon, Hash, HashIcon, HatGlasses, HatGlassesIcon, Haze, HazeIcon, Hd, HdIcon, HdmiPort, HdmiPortIcon, Heading, Heading1, Heading1Icon, Heading2, Heading2Icon, Heading3, Heading3Icon, Heading4, Heading4Icon, Heading5, Heading5Icon, Heading6, Heading6Icon, HeadingIcon, HeadphoneOff, HeadphoneOffIcon, Headphones, HeadphonesIcon, Headset, HeadsetIcon, Heart, HeartCrack, HeartCrackIcon, HeartHandshake, HeartHandshakeIcon, HeartIcon, HeartMinus, HeartMinusIcon, HeartOff, HeartOffIcon, HeartPlus, HeartPlusIcon, HeartPulse, HeartPulseIcon, HeartX, HeartXIcon, Heater, HeaterIcon, Helicopter, HelicopterIcon, HelpCircle, HelpCircleIcon, HelpingHand, HelpingHandIcon, Hexagon, HexagonIcon, Highlighter, HighlighterIcon, HikingStick, HikingStickIcon, History, HistoryIcon, Home, HomeIcon, Hop, HopIcon, HopOff, HopOffIcon, Hospital, HospitalIcon, Hotel, HotelIcon, Hourglass, HourglassCog, HourglassCogIcon, HourglassIcon, House, HouseCog, HouseCogIcon, HouseHeart, HouseHeartIcon, HouseIcon, HousePlug, HousePlugIcon, HousePlus, HousePlusIcon, HouseWifi, HouseWifiIcon, Houses, HousesIcon, IceCream, IceCream2, IceCream2Icon, IceCreamBowl, IceCreamBowlIcon, IceCreamCone, IceCreamConeIcon, IceCreamIcon, Icon, type IconComponent, type IconProps, IdCard, IdCardIcon, IdCardLanyard, IdCardLanyardIcon, Image, ImageDown, ImageDownIcon, ImageIcon, ImageMinus, ImageMinusIcon, ImageOff, ImageOffIcon, ImagePlay, ImagePlayIcon, ImagePlus, ImagePlusIcon, ImageUp, ImageUpIcon, ImageUpscale, ImageUpscaleIcon, Images, ImagesIcon, Import, ImportIcon, Inbox, InboxIcon, Indent, IndentDecrease, IndentDecreaseIcon, IndentIcon, IndentIncrease, IndentIncreaseIcon, IndianRupee, IndianRupeeIcon, Infinity, InfinityIcon, Info, InfoIcon, Inspect, InspectIcon, InspectionPanel, InspectionPanelIcon, Instagram, InstagramIcon, Italic, ItalicIcon, IterationCcw, IterationCcwIcon, IterationCw, IterationCwIcon, IvBag, IvBagIcon, JapaneseYen, JapaneseYenIcon, Joystick, JoystickIcon, Kanban, KanbanIcon, KanbanSquare, KanbanSquareDashed, KanbanSquareDashedIcon, KanbanSquareIcon, Kayak, KayakIcon, KazakhTenge, KazakhTengeIcon, Key, KeyIcon, KeyRound, KeyRoundIcon, KeySquare, KeySquareIcon, Keyboard, KeyboardIcon, KeyboardMusic, KeyboardMusicIcon, KeyboardOff, KeyboardOffIcon, Lambda, LambdaIcon, Lamp, LampCeiling, LampCeilingIcon, LampDesk, LampDeskIcon, LampFloor, LampFloorIcon, LampIcon, LampWallDown, LampWallDownIcon, LampWallUp, LampWallUpIcon, LandPlot, LandPlotIcon, Landmark, LandmarkIcon, Languages, LanguagesIcon, Laptop, Laptop2, Laptop2Icon, LaptopIcon, LaptopMinimal, LaptopMinimalCheck, LaptopMinimalCheckIcon, LaptopMinimalIcon, Lasso, LassoIcon, LassoSelect, LassoSelectIcon, Laugh, LaughIcon, LayerArrowDown, LayerArrowDownIcon, LayerArrowUp, LayerArrowUpIcon, Layers, Layers2, Layers2Icon, Layers3, Layers3Icon, LayersArrowDown, LayersArrowDownIcon, LayersArrowUp, LayersArrowUpIcon, LayersIcon, LayersMinus, LayersMinusIcon, LayersPlus, LayersPlusIcon, Layout, LayoutArrowDown, LayoutArrowDownIcon, LayoutArrowRight, LayoutArrowRightIcon, LayoutDashboard, LayoutDashboardIcon, LayoutFreeform, LayoutFreeformIcon, LayoutGrid, LayoutGridCircles, LayoutGridCirclesIcon, LayoutGridIcon, LayoutIcon, LayoutList, LayoutListIcon, LayoutPanelLeft, LayoutPanelLeftIcon, LayoutPanelTop, LayoutPanelTopIcon, LayoutTemplate, LayoutTemplateIcon, Leaf, LeafIcon, LeafyGreen, LeafyGreenIcon, Lectern, LecternIcon, Lens, LensConcave, LensConcaveIcon, LensConvex, LensConvexIcon, LensIcon, LetterText, LetterTextIcon, Letters, LettersIcon, Library, LibraryBig, LibraryBigIcon, LibraryIcon, LibrarySquare, LibrarySquareIcon, LifeBuoy, LifeBuoyIcon, Ligature, LigatureIcon, Lightbulb, LightbulbIcon, LightbulbOff, LightbulbOffIcon, Lighthouse, LighthouseIcon, LineChart, LineChartIcon, LineDotBottomVertical, LineDotBottomVerticalIcon, LineDotLeftHorizontal, LineDotLeftHorizontalIcon, LineDotRightHorizontal, LineDotRightHorizontalIcon, LineDotTopVertical, LineDotTopVerticalIcon, LineSquiggle, LineSquiggleIcon, LineStyle, LineStyleIcon, Link, Link2, Link2Icon, Link2Off, Link2OffIcon, LinkIcon, Linkedin, LinkedinIcon, List, ListCheck, ListCheckIcon, ListChecks, ListChecksIcon, ListChevronsDownUp, ListChevronsDownUpIcon, ListChevronsUpDown, ListChevronsUpDownIcon, ListClock, ListClockIcon, ListCollapse, ListCollapseIcon, ListEnd, ListEndIcon, ListFilter, ListFilterIcon, ListFilterPlus, ListFilterPlusIcon, ListIcon, ListIndentDecrease, ListIndentDecreaseIcon, ListIndentIncrease, ListIndentIncreaseIcon, ListMinus, ListMinusIcon, ListMusic, ListMusicIcon, ListOrdered, ListOrderedIcon, ListPlus, ListPlusIcon, ListRestart, ListRestartIcon, ListSortAscending, ListSortAscendingIcon, ListSortDescending, ListSortDescendingIcon, ListStart, ListStartIcon, ListTodo, ListTodoIcon, ListTree, ListTreeIcon, ListVideo, ListVideoIcon, ListX, ListXIcon, Loader, Loader2, Loader2Icon, LoaderCircle, LoaderCircleIcon, LoaderIcon, LoaderPinwheel, LoaderPinwheelIcon, Locate, LocateFixed, LocateFixedIcon, LocateIcon, LocateOff, LocateOffIcon, LocationEdit, LocationEditIcon, Lock, LockIcon, LockKeyhole, LockKeyholeIcon, LockKeyholeOpen, LockKeyholeOpenIcon, LockOpen, LockOpenIcon, LogIn, LogInIcon, LogOut, LogOutIcon, Logs, LogsIcon, Lollipop, LollipopIcon, LucideAArrowDown, LucideAArrowUp, LucideALargeSmall, LucideAccessibility, LucideActivity, LucideActivitySquare, LucideAd, LucideAirVent, LucideAirplay, LucideAlarmCheck, LucideAlarmClock, LucideAlarmClockCheck, LucideAlarmClockMinus, LucideAlarmClockOff, LucideAlarmClockPlus, LucideAlarmMinus, LucideAlarmPlus, LucideAlarmSmoke, LucideAlbum, LucideAlertCircle, LucideAlertOctagon, LucideAlertTriangle, LucideAlignCenter, LucideAlignCenterHorizontal, LucideAlignCenterVertical, LucideAlignEndHorizontal, LucideAlignEndVertical, LucideAlignHorizontalDistributeCenter, LucideAlignHorizontalDistributeEnd, LucideAlignHorizontalDistributeStart, LucideAlignHorizontalJustifyCenter, LucideAlignHorizontalJustifyEnd, LucideAlignHorizontalJustifyStart, LucideAlignHorizontalSpaceAround, LucideAlignHorizontalSpaceBetween, LucideAlignJustify, LucideAlignLeft, LucideAlignRight, LucideAlignStartHorizontal, LucideAlignStartVertical, LucideAlignVerticalDistributeCenter, LucideAlignVerticalDistributeEnd, LucideAlignVerticalDistributeStart, LucideAlignVerticalJustifyCenter, LucideAlignVerticalJustifyEnd, LucideAlignVerticalJustifyStart, LucideAlignVerticalSpaceAround, LucideAlignVerticalSpaceBetween, LucideAmbulance, LucideAmpersand, LucideAmpersands, LucideAmphora, LucideAnchor, LucideAngle, LucideAngry, LucideAnnoyed, LucideAntenna, LucideAnvil, LucideAperture, LucideAppWindow, LucideAppWindowMac, LucideApple, LucideArchive, LucideArchiveRestore, LucideArchiveX, LucideAreaChart, LucideArmchair, LucideArmenianDram, LucideArrowBigDown, LucideArrowBigDownDash, LucideArrowBigLeft, LucideArrowBigLeftDash, LucideArrowBigRight, LucideArrowBigRightDash, LucideArrowBigUp, LucideArrowBigUpDash, LucideArrowDown, LucideArrowDown01, LucideArrowDown10, LucideArrowDownAZ, LucideArrowDownAz, LucideArrowDownCircle, LucideArrowDownFromLine, LucideArrowDownLeft, LucideArrowDownLeftFromCircle, LucideArrowDownLeftFromSquare, LucideArrowDownLeftSquare, LucideArrowDownNarrowWide, LucideArrowDownRight, LucideArrowDownRightFromCircle, LucideArrowDownRightFromSquare, LucideArrowDownRightSquare, LucideArrowDownSquare, LucideArrowDownToDot, LucideArrowDownToLine, LucideArrowDownUp, LucideArrowDownWideNarrow, LucideArrowDownZA, LucideArrowDownZa, LucideArrowLeft, LucideArrowLeftCircle, LucideArrowLeftFromLine, LucideArrowLeftRight, LucideArrowLeftSquare, LucideArrowLeftToLine, LucideArrowRight, LucideArrowRightCircle, LucideArrowRightFromLine, LucideArrowRightLeft, LucideArrowRightSquare, LucideArrowRightToLine, LucideArrowUp, LucideArrowUp01, LucideArrowUp10, LucideArrowUpAZ, LucideArrowUpAz, LucideArrowUpCircle, LucideArrowUpDown, LucideArrowUpFromDot, LucideArrowUpFromLine, LucideArrowUpLeft, LucideArrowUpLeftFromCircle, LucideArrowUpLeftFromSquare, LucideArrowUpLeftSquare, LucideArrowUpNarrowWide, LucideArrowUpRight, LucideArrowUpRightFromCircle, LucideArrowUpRightFromSquare, LucideArrowUpRightSquare, LucideArrowUpSquare, LucideArrowUpToLine, LucideArrowUpWideNarrow, LucideArrowUpZA, LucideArrowUpZa, LucideArrowsUpFromLine, LucideAsterisk, LucideAsteriskSquare, LucideAstroid, LucideAtSign, LucideAtom, LucideAudioLines, LucideAudioLinesOff, LucideAudioLinesX, LucideAudioWaveform, LucideAward, LucideAxe, LucideAxis3D, LucideAxis3d, LucideBaby, LucideBackpack, LucideBadge, LucideBadgeAlert, LucideBadgeCent, LucideBadgeCheck, LucideBadgeDollarSign, LucideBadgeEuro, LucideBadgeHelp, LucideBadgeIndianRupee, LucideBadgeInfo, LucideBadgeJapaneseYen, LucideBadgeMinus, LucideBadgePercent, LucideBadgePlus, LucideBadgePoundSterling, LucideBadgeQuestionMark, LucideBadgeRussianRuble, LucideBadgeSwissFranc, LucideBadgeTurkishLira, LucideBadgeX, LucideBaggageClaim, LucideBalloon, LucideBan, LucideBanana, LucideBandage, LucideBangladeshiTaka, LucideBanknote, LucideBanknoteArrowDown, LucideBanknoteArrowUp, LucideBanknoteCheck, LucideBanknoteX, LucideBarChart, LucideBarChart2, LucideBarChart3, LucideBarChart4, LucideBarChartBig, LucideBarChartHorizontal, LucideBarChartHorizontalBig, LucideBarcode, LucideBarrel, LucideBaseline, LucideBath, LucideBattery, LucideBatteryCharging, LucideBatteryFull, LucideBatteryLow, LucideBatteryMedium, LucideBatteryPlus, LucideBatteryWarning, LucideBeaker, LucideBean, LucideBeanOff, LucideBed, LucideBedDouble, LucideBedSingle, LucideBeef, LucideBeefOff, LucideBeer, LucideBeerOff, LucideBell, LucideBellCheck, LucideBellDot, LucideBellElectric, LucideBellMinus, LucideBellOff, LucideBellPlus, LucideBellRing, LucideBetweenHorizonalEnd, LucideBetweenHorizonalStart, LucideBetweenHorizontalEnd, LucideBetweenHorizontalStart, LucideBetweenVerticalEnd, LucideBetweenVerticalStart, LucideBicepsFlexed, LucideBike, LucideBinary, LucideBinoculars, LucideBiohazard, LucideBird, LucideBirdhouse, LucideBitcoin, LucideBlend, LucideBlender, LucideBlinds, LucideBlocks, LucideBluetooth, LucideBluetoothConnected, LucideBluetoothOff, LucideBluetoothSearching, LucideBold, LucideBolt, LucideBomb, LucideBone, LucideBoneFracture, LucideBook, LucideBookA, LucideBookAlert, LucideBookAudio, LucideBookBookmark, LucideBookCheck, LucideBookCopy, LucideBookDashed, LucideBookDown, LucideBookHeadphones, LucideBookHeart, LucideBookImage, LucideBookKey, LucideBookLock, LucideBookMarked, LucideBookMinus, LucideBookOpen, LucideBookOpenCheck, LucideBookOpenText, LucideBookPlus, LucideBookSearch, LucideBookTemplate, LucideBookText, LucideBookType, LucideBookUp, LucideBookUp2, LucideBookUser, LucideBookX, LucideBookmark, LucideBookmarkCheck, LucideBookmarkMinus, LucideBookmarkOff, LucideBookmarkPlus, LucideBookmarkX, LucideBoomBox, LucideBot, LucideBotMessageSquare, LucideBotOff, LucideBottleWine, LucideBowArrow, LucideBox, LucideBoxSelect, LucideBoxes, LucideBraces, LucideBrackets, LucideBrain, LucideBrainCircuit, LucideBrainCog, LucideBrickWall, LucideBrickWallFire, LucideBrickWallShield, LucideBridge, LucideBriefcase, LucideBriefcaseBusiness, LucideBriefcaseConveyorBelt, LucideBriefcaseMedical, LucideBriefcasePlus, LucideBringToFront, LucideBroccoli, LucideBroom, LucideBroomSparkles, LucideBrush, LucideBrushCleaning, LucideBubbles, LucideBug, LucideBugOff, LucideBugPlay, LucideBuilding, LucideBuilding2, LucideBuildingComplex, LucideBuildingComplexPlus, LucideBus, LucideBusFront, LucideCable, LucideCableCar, LucideCake, LucideCakeSlice, LucideCalculator, LucideCalendar, LucideCalendar1, LucideCalendarArrowDown, LucideCalendarArrowUp, LucideCalendarCheck, LucideCalendarCheck2, LucideCalendarChevronsRight, LucideCalendarClock, LucideCalendarCog, LucideCalendarDays, LucideCalendarFold, LucideCalendarHeart, LucideCalendarMinus, LucideCalendarMinus2, LucideCalendarOff, LucideCalendarPlus, LucideCalendarPlus2, LucideCalendarRange, LucideCalendarSearch, LucideCalendarSync, LucideCalendarX, LucideCalendarX2, LucideCalendars, LucideCamera, LucideCameraOff, LucideCan, LucideCanSoda, LucideCandlestickChart, LucideCandy, LucideCandyCane, LucideCandyOff, LucideCannabis, LucideCannabisOff, LucideCaptions, LucideCaptionsOff, LucideCar, LucideCarBattery, LucideCarFront, LucideCarTaxiFront, LucideCaravan, LucideCardSim, LucideCarrot, LucideCarton, LucideCartonOff, LucideCaseLower, LucideCaseSensitive, LucideCaseUpper, LucideCassetteTape, LucideCast, LucideCastle, LucideCat, LucideCctv, LucideCctvOff, LucideChartArea, LucideChartBar, LucideChartBarBig, LucideChartBarDecreasing, LucideChartBarIncreasing, LucideChartBarStacked, LucideChartCandlestick, LucideChartColumn, LucideChartColumnBig, LucideChartColumnDecreasing, LucideChartColumnIncreasing, LucideChartColumnStacked, LucideChartGantt, LucideChartLine, LucideChartNetwork, LucideChartNoAxesColumn, LucideChartNoAxesColumnDecreasing, LucideChartNoAxesColumnIncreasing, LucideChartNoAxesCombined, LucideChartNoAxesGantt, LucideChartPie, LucideChartScatter, LucideChartSpline, LucideCheck, LucideCheckCheck, LucideCheckCircle, LucideCheckCircle2, LucideCheckLine, LucideCheckSquare, LucideCheckSquare2, LucideChefHat, LucideCherry, LucideChessBishop, LucideChessKing, LucideChessKnight, LucideChessPawn, LucideChessQueen, LucideChessRook, LucideChevronDown, LucideChevronDownCircle, LucideChevronDownSquare, LucideChevronFirst, LucideChevronLast, LucideChevronLeft, LucideChevronLeftCircle, LucideChevronLeftSquare, LucideChevronRight, LucideChevronRightCircle, LucideChevronRightSquare, LucideChevronUp, LucideChevronUpCircle, LucideChevronUpSquare, LucideChevronsDown, LucideChevronsDownUp, LucideChevronsLeft, LucideChevronsLeftRight, LucideChevronsLeftRightEllipsis, LucideChevronsRight, LucideChevronsRightLeft, LucideChevronsUp, LucideChevronsUpDown, LucideChrome, LucideChurch, LucideCigarette, LucideCigaretteOff, LucideCircle, LucideCircleAlert, LucideCircleArrowDown, LucideCircleArrowLeft, LucideCircleArrowOutDownLeft, LucideCircleArrowOutDownRight, LucideCircleArrowOutUpLeft, LucideCircleArrowOutUpRight, LucideCircleArrowRight, LucideCircleArrowUp, LucideCircleCheck, LucideCircleCheckBig, LucideCircleChevronDown, LucideCircleChevronLeft, LucideCircleChevronRight, LucideCircleChevronUp, LucideCircleDashed, LucideCircleDashedCheck, LucideCircleDivide, LucideCircleDollarSign, LucideCircleDot, LucideCircleDotDashed, LucideCircleEllipsis, LucideCircleEqual, LucideCircleEuro, LucideCircleFadingArrowUp, LucideCircleFadingPlus, LucideCircleGauge, LucideCircleHelp, LucideCircleMinus, LucideCircleOff, LucideCircleParking, LucideCircleParkingOff, LucideCirclePause, LucideCirclePercent, LucideCirclePile, LucideCirclePlay, LucideCirclePlus, LucideCirclePoundSterling, LucideCirclePower, LucideCircleQuestionMark, LucideCircleSlash, LucideCircleSlash2, LucideCircleSlashed, LucideCircleSmall, LucideCircleStar, LucideCircleStop, LucideCircleUser, LucideCircleUserRound, LucideCircleX, LucideCircuitBoard, LucideCitrus, LucideClap, LucideClapperboard, LucideClefAlto, LucideClefBass, LucideClefTreble, LucideClipboard, LucideClipboardCheck, LucideClipboardClock, LucideClipboardCopy, LucideClipboardEdit, LucideClipboardList, LucideClipboardMinus, LucideClipboardPaste, LucideClipboardPen, LucideClipboardPenLine, LucideClipboardPlus, LucideClipboardSignature, LucideClipboardType, LucideClipboardX, LucideClock, LucideClock1, LucideClock10, LucideClock11, LucideClock12, LucideClock2, LucideClock3, LucideClock4, LucideClock5, LucideClock6, LucideClock7, LucideClock8, LucideClock9, LucideClockAlert, LucideClockArrowDown, LucideClockArrowLeft, LucideClockArrowRight, LucideClockArrowUp, LucideClockCheck, LucideClockFading, LucideClockPlus, LucideClosedCaption, LucideCloud, LucideCloudAlert, LucideCloudBackup, LucideCloudCheck, LucideCloudCog, LucideCloudDownload, LucideCloudDrizzle, LucideCloudFog, LucideCloudHail, LucideCloudLightning, LucideCloudMoon, LucideCloudMoonRain, LucideCloudOff, LucideCloudRain, LucideCloudRainWind, LucideCloudSnow, LucideCloudSun, LucideCloudSunRain, LucideCloudSync, LucideCloudUpload, LucideCloudy, LucideClover, LucideClub, LucideCode, LucideCode2, LucideCodeSquare, LucideCodeXml, LucideCoffee, LucideCog, LucideCoins, LucideColumns, LucideColumns2, LucideColumns3, LucideColumns3Cog, LucideColumns4, LucideColumnsSettings, LucideCombine, LucideCommand, LucideCompass, LucideComponent, LucideComputer, LucideConciergeBell, LucideCone, LucideConstruction, LucideContact, LucideContact2, LucideContactRound, LucideContainer, LucideContrast, LucideCookie, LucideCookingPot, LucideCopy, LucideCopyCheck, LucideCopyMinus, LucideCopyPlus, LucideCopySlash, LucideCopyX, LucideCopyleft, LucideCopyright, LucideCornerDownLeft, LucideCornerDownRight, LucideCornerLeftDown, LucideCornerLeftUp, LucideCornerRightDown, LucideCornerRightUp, LucideCornerUpLeft, LucideCornerUpRight, LucideCpu, LucideCreativeCommons, LucideCreditCard, LucideCreditCardCheck, LucideCreditCardMinus, LucideCreditCardPlus, LucideCreditCardReader, LucideCreditCardX, LucideCroissant, LucideCrop, LucideCross, LucideCrosshair, LucideCrown, LucideCuboid, LucideCupSoda, LucideCupcake, LucideCurlyBraces, LucideCurrency, LucideCylinder, LucideDam, LucideDatabase, LucideDatabaseArrowDown, LucideDatabaseArrowUp, LucideDatabaseBackup, LucideDatabaseCheck, LucideDatabaseMinus, LucideDatabasePlus, LucideDatabaseSearch, LucideDatabaseX, LucideDatabaseZap, LucideDecimalsArrowLeft, LucideDecimalsArrowRight, LucideDelete, LucideDessert, LucideDiameter, LucideDiamond, LucideDiamondMinus, LucideDiamondPercent, LucideDiamondPlus, LucideDice1, LucideDice2, LucideDice3, LucideDice4, LucideDice5, LucideDice6, LucideDices, LucideDiff, LucideDisc, LucideDisc2, LucideDisc3, LucideDiscAlbum, LucideDiscord, LucideDivide, LucideDivideCircle, LucideDivideSquare, LucideDna, LucideDnaOff, LucideDock, LucideDog, LucideDollarSign, LucideDome, LucideDonut, LucideDoorClosed, LucideDoorClosedCog, LucideDoorClosedLocked, LucideDoorClosedPackage, LucideDoorOpen, LucideDoorStairwell, LucideDot, LucideDotSquare, LucideDownload, LucideDownloadCloud, LucideDraftingCompass, LucideDrama, LucideDribbble, LucideDrill, LucideDrone, LucideDroplet, LucideDropletOff, LucideDroplets, LucideDrum, LucideDrumstick, LucideDumbbell, LucideEar, LucideEarOff, LucideEarth, LucideEarthLock, LucideEclipse, LucideEdit, LucideEdit2, LucideEdit3, LucideEgg, LucideEggFried, LucideEggOff, LucideEject, LucideEllipse, LucideEllipsis, LucideEllipsisVertical, LucideEngine, LucideEqual, LucideEqualApproximately, LucideEqualApproximatelyNot, LucideEqualNot, LucideEqualSquare, LucideEraser, LucideEthernetPort, LucideEuro, LucideEvCharger, LucideExpand, LucideExternalLink, LucideEye, LucideEyeClosed, LucideEyeDashed, LucideEyeOff, LucideFaceAngry, LucideFaceExpressionless, LucideFaceGrinning, LucideFaceNeutral, LucideFaceSlightlyFrowning, LucideFaceSlightlySmiling, LucideFaceSlightlySmilingPlus, LucideFacebook, LucideFactory, LucideFan, LucideFastForward, LucideFaucet, LucideFeather, LucideFence, LucideFerrisWheel, LucideFigma, LucideFile, LucideFileArchive, LucideFileAudio, LucideFileAudio2, LucideFileAxis3D, LucideFileAxis3d, LucideFileBadge, LucideFileBadge2, LucideFileBarChart, LucideFileBarChart2, LucideFileBox, LucideFileBraces, LucideFileBracesCorner, LucideFileChartColumn, LucideFileChartColumnIncreasing, LucideFileChartLine, LucideFileChartPie, LucideFileCheck, LucideFileCheck2, LucideFileCheckCorner, LucideFileClock, LucideFileCode, LucideFileCode2, LucideFileCodeCorner, LucideFileCog, LucideFileCog2, LucideFileDiff, LucideFileDigit, LucideFileDown, LucideFileEdit, LucideFileExclamationPoint, LucideFileHeadphone, LucideFileHeart, LucideFileImage, LucideFileInput, LucideFileJson, LucideFileJson2, LucideFileKey, LucideFileKey2, LucideFileLineChart, LucideFileLock, LucideFileLock2, LucideFileMinus, LucideFileMinus2, LucideFileMinusCorner, LucideFileMusic, LucideFileOutput, LucideFilePen, LucideFilePenLine, LucideFilePieChart, LucideFilePlay, LucideFilePlus, LucideFilePlus2, LucideFilePlusCorner, LucideFileQuestion, LucideFileQuestionMark, LucideFileScan, LucideFileSearch, LucideFileSearch2, LucideFileSearchCorner, LucideFileSignal, LucideFileSignature, LucideFileSliders, LucideFileSpreadsheet, LucideFileStack, LucideFileSymlink, LucideFileTerminal, LucideFileText, LucideFileType, LucideFileType2, LucideFileTypeCorner, LucideFileUp, LucideFileUser, LucideFileVideo, LucideFileVideo2, LucideFileVideoCamera, LucideFileVolume, LucideFileVolume2, LucideFileWarning, LucideFileX, LucideFileX2, LucideFileXCorner, LucideFiles, LucideFilm, LucideFilter, LucideFilterX, LucideFingerprint, LucideFingerprintPattern, LucideFireExtinguisher, LucideFish, LucideFishOff, LucideFishSymbol, LucideFishingHook, LucideFishingRod, LucideFlag, LucideFlagOff, LucideFlagTriangleLeft, LucideFlagTriangleRight, LucideFlame, LucideFlameKindling, LucideFlashlight, LucideFlashlightOff, LucideFlaskConical, LucideFlaskConicalOff, LucideFlaskRound, LucideFlipHorizontal, LucideFlipHorizontal2, LucideFlipVertical, LucideFlipVertical2, LucideFlower, LucideFlower2, LucideFocus, LucideFoldHorizontal, LucideFoldVertical, LucideFolder, LucideFolderArchive, LucideFolderBookmark, LucideFolderCheck, LucideFolderClock, LucideFolderClosed, LucideFolderCode, LucideFolderCog, LucideFolderCog2, LucideFolderDot, LucideFolderDown, LucideFolderEdit, LucideFolderGit, LucideFolderGit2, LucideFolderHeart, LucideFolderInput, LucideFolderKanban, LucideFolderKey, LucideFolderLock, LucideFolderMinus, LucideFolderOpen, LucideFolderOpenDot, LucideFolderOutput, LucideFolderPen, LucideFolderPlus, LucideFolderRoot, LucideFolderSearch, LucideFolderSearch2, LucideFolderSymlink, LucideFolderSync, LucideFolderTree, LucideFolderUp, LucideFolderX, LucideFolders, LucideFootprints, LucideForkKnife, LucideForkKnifeCrossed, LucideForklift, LucideForm, LucideFormInput, LucideForward, LucideFrame, LucideFrown, LucideFuel, LucideFullscreen, LucideFunctionSquare, LucideFunnel, LucideFunnelPlus, LucideFunnelX, LucideGalaxy, LucideGalleryHorizontal, LucideGalleryHorizontalEnd, LucideGalleryThumbnails, LucideGalleryVertical, LucideGalleryVerticalEnd, LucideGamepad, LucideGamepad2, LucideGamepadDirectional, LucideGanttChart, LucideGanttChartSquare, LucideGapHorizontal, LucideGapVertical, LucideGauge, LucideGaugeCircle, LucideGavel, LucideGem, LucideGeorgianLari, LucideGerm, LucideGermOff, LucideGhost, LucideGift, LucideGitBranch, LucideGitBranchMinus, LucideGitBranchPlus, LucideGitCommit, LucideGitCommitHorizontal, LucideGitCommitVertical, LucideGitCompare, LucideGitCompareArrows, LucideGitFork, LucideGitGraph, LucideGitMerge, LucideGitMergeConflict, LucideGitPullRequest, LucideGitPullRequestArrow, LucideGitPullRequestClosed, LucideGitPullRequestCreate, LucideGitPullRequestCreateArrow, LucideGitPullRequestDraft, LucideGithub, LucideGitlab, LucideGlassWater, LucideGlasses, LucideGlobe, LucideGlobe2, LucideGlobeCheck, LucideGlobeCode, LucideGlobeLock, LucideGlobeOff, LucideGlobeX, LucideGoal, LucideGpu, LucideGrab, LucideGraduationCap, LucideGrape, LucideGrid, LucideGrid2X2, LucideGrid2X2Check, LucideGrid2X2Plus, LucideGrid2X2X, LucideGrid2x2, LucideGrid2x2Check, LucideGrid2x2Plus, LucideGrid2x2X, LucideGrid3X3, LucideGrid3x2, LucideGrid3x3, LucideGrip, LucideGripHorizontal, LucideGripVertical, LucideGroceries, LucideGroup, LucideGuitar, LucideHam, LucideHamburger, LucideHammer, LucideHand, LucideHandCoins, LucideHandFist, LucideHandGrab, LucideHandHeart, LucideHandHelping, LucideHandMetal, LucideHandPlatter, LucideHandbag, LucideHandleBottomRight, LucideHandshake, LucideHardDrive, LucideHardDriveDownload, LucideHardDriveUpload, LucideHardHat, LucideHash, LucideHatGlasses, LucideHaze, LucideHd, LucideHdmiPort, LucideHeading, LucideHeading1, LucideHeading2, LucideHeading3, LucideHeading4, LucideHeading5, LucideHeading6, LucideHeadphoneOff, LucideHeadphones, LucideHeadset, LucideHeart, LucideHeartCrack, LucideHeartHandshake, LucideHeartMinus, LucideHeartOff, LucideHeartPlus, LucideHeartPulse, LucideHeartX, LucideHeater, LucideHelicopter, LucideHelpCircle, LucideHelpingHand, LucideHexagon, LucideHighlighter, LucideHikingStick, LucideHistory, LucideHome, LucideHop, LucideHopOff, LucideHospital, LucideHotel, LucideHourglass, LucideHourglassCog, LucideHouse, LucideHouseCog, LucideHouseHeart, LucideHousePlug, LucideHousePlus, LucideHouseWifi, LucideHouses, LucideIceCream, LucideIceCream2, LucideIceCreamBowl, LucideIceCreamCone, type LucideIcon, LucideIdCard, LucideIdCardLanyard, LucideImage, LucideImageDown, LucideImageMinus, LucideImageOff, LucideImagePlay, LucideImagePlus, LucideImageUp, LucideImageUpscale, LucideImages, LucideImport, LucideInbox, LucideIndent, LucideIndentDecrease, LucideIndentIncrease, LucideIndianRupee, LucideInfinity, LucideInfo, LucideInspect, LucideInspectionPanel, LucideInstagram, LucideItalic, LucideIterationCcw, LucideIterationCw, LucideIvBag, LucideJapaneseYen, LucideJoystick, LucideKanban, LucideKanbanSquare, LucideKanbanSquareDashed, LucideKayak, LucideKazakhTenge, LucideKey, LucideKeyRound, LucideKeySquare, LucideKeyboard, LucideKeyboardMusic, LucideKeyboardOff, LucideLambda, LucideLamp, LucideLampCeiling, LucideLampDesk, LucideLampFloor, LucideLampWallDown, LucideLampWallUp, LucideLandPlot, LucideLandmark, LucideLanguages, LucideLaptop, LucideLaptop2, LucideLaptopMinimal, LucideLaptopMinimalCheck, LucideLasso, LucideLassoSelect, LucideLaugh, LucideLayerArrowDown, LucideLayerArrowUp, LucideLayers, LucideLayers2, LucideLayers3, LucideLayersArrowDown, LucideLayersArrowUp, LucideLayersMinus, LucideLayersPlus, LucideLayout, LucideLayoutArrowDown, LucideLayoutArrowRight, LucideLayoutDashboard, LucideLayoutFreeform, LucideLayoutGrid, LucideLayoutGridCircles, LucideLayoutList, LucideLayoutPanelLeft, LucideLayoutPanelTop, LucideLayoutTemplate, LucideLeaf, LucideLeafyGreen, LucideLectern, LucideLens, LucideLensConcave, LucideLensConvex, LucideLetterText, LucideLetters, LucideLibrary, LucideLibraryBig, LucideLibrarySquare, LucideLifeBuoy, LucideLigature, LucideLightbulb, LucideLightbulbOff, LucideLighthouse, LucideLineChart, LucideLineDotBottomVertical, LucideLineDotLeftHorizontal, LucideLineDotRightHorizontal, LucideLineDotTopVertical, LucideLineSquiggle, LucideLineStyle, LucideLink, LucideLink2, LucideLink2Off, LucideLinkedin, LucideList, LucideListCheck, LucideListChecks, LucideListChevronsDownUp, LucideListChevronsUpDown, LucideListClock, LucideListCollapse, LucideListEnd, LucideListFilter, LucideListFilterPlus, LucideListIndentDecrease, LucideListIndentIncrease, LucideListMinus, LucideListMusic, LucideListOrdered, LucideListPlus, LucideListRestart, LucideListSortAscending, LucideListSortDescending, LucideListStart, LucideListTodo, LucideListTree, LucideListVideo, LucideListX, LucideLoader, LucideLoader2, LucideLoaderCircle, LucideLoaderPinwheel, LucideLocate, LucideLocateFixed, LucideLocateOff, LucideLocationEdit, LucideLock, LucideLockKeyhole, LucideLockKeyholeOpen, LucideLockOpen, LucideLogIn, LucideLogOut, LucideLogs, LucideLollipop, LucideLuggage, LucideMSquare, LucideMagnet, LucideMail, LucideMailBadge, LucideMailCheck, LucideMailClock, LucideMailDot, LucideMailMinus, LucideMailOpen, LucideMailPen, LucideMailPlus, LucideMailQuestion, LucideMailQuestionMark, LucideMailSearch, LucideMailWarning, LucideMailX, LucideMailbox, LucideMails, LucideMap, LucideMapMinus, LucideMapPin, LucideMapPinCheck, LucideMapPinCheckInside, LucideMapPinHouse, LucideMapPinMinus, LucideMapPinMinusInside, LucideMapPinOff, LucideMapPinPen, LucideMapPinPlus, LucideMapPinPlusInside, LucideMapPinSearch, LucideMapPinX, LucideMapPinXInside, LucideMapPinned, LucideMapPlus, LucideMars, LucideMarsStroke, LucideMartini, LucideMaximize, LucideMaximize2, LucideMedal, LucideMegaphone, LucideMegaphoneOff, LucideMeh, LucideMemoryStick, LucideMenu, LucideMenuSquare, LucideMerge, LucideMessageCircle, LucideMessageCircleCheck, LucideMessageCircleCode, LucideMessageCircleDashed, LucideMessageCircleDashedCheck, LucideMessageCircleHeart, LucideMessageCircleMore, LucideMessageCircleOff, LucideMessageCirclePlus, LucideMessageCircleQuestion, LucideMessageCircleQuestionMark, LucideMessageCircleReply, LucideMessageCircleWarning, LucideMessageCircleX, LucideMessageSquare, LucideMessageSquareCheck, LucideMessageSquareCode, LucideMessageSquareDashed, LucideMessageSquareDiff, LucideMessageSquareDot, LucideMessageSquareHeart, LucideMessageSquareLock, LucideMessageSquareMore, LucideMessageSquareOff, LucideMessageSquarePlus, LucideMessageSquareQuote, LucideMessageSquareReply, LucideMessageSquareShare, LucideMessageSquareText, LucideMessageSquareWarning, LucideMessageSquareX, LucideMessagesCircle, LucideMessagesSquare, LucideMetronome, LucideMic, LucideMic2, LucideMicAudioLines, LucideMicOff, LucideMicSignal, LucideMicVocal, LucideMicrochip, LucideMicroscope, LucideMicrowave, LucideMidiPort, LucideMilestone, LucideMilk, LucideMilkOff, LucideMinimize, LucideMinimize2, LucideMinus, LucideMinusCircle, LucideMinusSquare, LucideMirrorRectangular, LucideMirrorRound, LucideMonitor, LucideMonitorCheck, LucideMonitorCloud, LucideMonitorCog, LucideMonitorDot, LucideMonitorDown, LucideMonitorOff, LucideMonitorPause, LucideMonitorPc, LucideMonitorPlay, LucideMonitorSmartphone, LucideMonitorSpeaker, LucideMonitorStop, LucideMonitorUp, LucideMonitorX, LucideMoon, LucideMoonStar, LucideMop, LucideMopSparkles, LucideMoreHorizontal, LucideMoreVertical, LucideMosque, LucideMotorbike, LucideMountain, LucideMountainSnow, LucideMouse, LucideMouseLeft, LucideMouseOff, LucideMousePointer, LucideMousePointer2, LucideMousePointer2Off, LucideMousePointerBan, LucideMousePointerClick, LucideMousePointerSquareDashed, LucideMouseRight, LucideMouth, LucideMouthOff, LucideMove, LucideMove3D, LucideMove3d, LucideMoveDiagonal, LucideMoveDiagonal2, LucideMoveDown, LucideMoveDownLeft, LucideMoveDownRight, LucideMoveHorizontal, LucideMoveLeft, LucideMoveRight, LucideMoveUp, LucideMoveUpLeft, LucideMoveUpRight, LucideMoveVertical, LucideMusic, LucideMusic2, LucideMusic3, LucideMusic4, LucideNavigation, LucideNavigation2, LucideNavigation2Off, LucideNavigationOff, LucideNepaliRupee, LucideNetwork, LucideNewspaper, LucideNfc, LucideNonBinary, LucideNotebook, LucideNotebookDot, LucideNotebookPen, LucideNotebookTabs, LucideNotebookText, LucideNotepadText, LucideNotepadTextDashed, LucideNut, LucideNutOff, LucideOctagon, LucideOctagonAlert, LucideOctagonMinus, LucideOctagonPause, LucideOctagonX, LucideOmega, LucideOption, LucideOrbit, LucideOrigami, LucideOutdent, LucidePackage, LucidePackage2, LucidePackageCheck, LucidePackageMinus, LucidePackageOpen, LucidePackagePlus, LucidePackageSearch, LucidePackageX, LucidePaintBucket, LucidePaintRoller, LucidePaintbrush, LucidePaintbrush2, LucidePaintbrushVertical, LucidePalette, LucidePalmtree, LucidePanda, LucidePanelBottom, LucidePanelBottomClose, LucidePanelBottomDashed, LucidePanelBottomInactive, LucidePanelBottomOpen, LucidePanelLeft, LucidePanelLeftClose, LucidePanelLeftDashed, LucidePanelLeftInactive, LucidePanelLeftOpen, LucidePanelLeftRightDashed, LucidePanelRight, LucidePanelRightClose, LucidePanelRightDashed, LucidePanelRightInactive, LucidePanelRightOpen, LucidePanelTop, LucidePanelTopBottomDashed, LucidePanelTopClose, LucidePanelTopDashed, LucidePanelTopInactive, LucidePanelTopOpen, LucidePanelsLeftBottom, LucidePanelsLeftRight, LucidePanelsRightBottom, LucidePanelsTopBottom, LucidePanelsTopLeft, LucidePaperBag, LucidePaperclip, LucideParasol, LucideParentheses, LucidePark, LucideParkingCircle, LucideParkingCircleOff, LucideParkingMeter, LucideParkingSquare, LucideParkingSquareOff, LucidePartyPopper, LucidePause, LucidePauseCircle, LucidePauseOctagon, LucidePawPrint, LucidePcCase, LucidePen, LucidePenBox, LucidePenLine, LucidePenOff, LucidePenSquare, LucidePenTool, LucidePencil, LucidePencilLine, LucidePencilOff, LucidePencilRuler, LucidePencilSparkles, LucidePentagon, LucidePercent, LucidePercentCircle, LucidePercentDiamond, LucidePercentSquare, LucidePersonStanding, LucidePhi, LucidePhilippinePeso, LucidePhone, LucidePhoneCall, LucidePhoneForwarded, LucidePhoneIncoming, LucidePhoneLog, LucidePhoneMissed, LucidePhoneOff, LucidePhoneOutgoing, LucidePi, LucidePiSquare, LucidePiano, LucidePickaxe, LucidePictureInPicture, LucidePictureInPicture2, LucidePieChart, LucidePiggyBank, LucidePilcrow, LucidePilcrowLeft, LucidePilcrowRight, LucidePilcrowSquare, LucidePill, LucidePillBottle, LucidePin, LucidePinOff, LucidePipette, LucidePizza, LucidePlane, LucidePlaneLanding, LucidePlaneTakeoff, LucidePlantPot, LucidePlay, LucidePlayCircle, LucidePlayOff, LucidePlaySquare, LucidePlayingCard, LucidePlayingCards, LucidePlayingCardsFan, LucidePlug, LucidePlug2, LucidePlugZap, LucidePlugZap2, LucidePlus, LucidePlusCircle, LucidePlusSquare, LucidePocketKnife, LucidePodcast, LucidePodium, LucidePointer, LucidePointerOff, LucidePopcorn, LucidePopsicle, LucidePoundSterling, LucidePower, LucidePowerCircle, LucidePowerOff, LucidePowerSquare, LucidePresentation, LucidePrinter, LucidePrinter3d, LucidePrinterCheck, LucidePrinterX, LucideProjector, LucideProportions, type LucideProps, LucidePuzzle, LucidePyramid, LucideQrCode, LucideQuote, LucideRabbit, LucideRadar, LucideRadiation, LucideRadical, LucideRadio, LucideRadioOff, LucideRadioReceiver, LucideRadioTower, LucideRadius, LucideRainbow, LucideRat, LucideRatio, LucideReceipt, LucideReceiptCent, LucideReceiptEuro, LucideReceiptIndianRupee, LucideReceiptJapaneseYen, LucideReceiptPoundSterling, LucideReceiptRussianRuble, LucideReceiptSwissFranc, LucideReceiptText, LucideReceiptTurkishLira, LucideRectangleCircle, LucideRectangleEllipsis, LucideRectangleGoggles, LucideRectangleHorizontal, LucideRectangleVertical, LucideRecycle, LucideRedo, LucideRedo2, LucideRedoDot, LucideRefreshCcw, LucideRefreshCcwDot, LucideRefreshCw, LucideRefreshCwOff, LucideRefrigerator, LucideRegex, LucideRemoveFormatting, LucideRepeat, LucideRepeat1, LucideRepeat2, LucideRepeatOff, LucideReplace, LucideReplaceAll, LucideReply, LucideReplyAll, LucideRewind, LucideRibbon, LucideRoad, LucideRobotArm, LucideRobotVacuum, LucideRocket, LucideRockingChair, LucideRollerCoaster, LucideRose, LucideRotate3D, LucideRotate3d, LucideRotateCcw, LucideRotateCcwClock, LucideRotateCcwKey, LucideRotateCcwSquare, LucideRotateCw, LucideRotateCwClock, LucideRotateCwFadingClock, LucideRotateCwSquare, LucideRoute, LucideRouteOff, LucideRouter, LucideRows, LucideRows2, LucideRows3, LucideRows4, LucideRss, LucideRugbyBall, LucideRuler, LucideRulerDimensionLine, LucideRussianRuble, LucideSailboat, LucideSalad, LucideSandwich, LucideSatellite, LucideSatelliteDish, LucideSaudiRiyal, LucideSave, LucideSaveAll, LucideSaveCheck, LucideSaveOff, LucideSavePen, LucideSavePlus, LucideScale, LucideScale3D, LucideScale3d, LucideScaling, LucideScan, LucideScanBarcode, LucideScanBox, LucideScanEye, LucideScanFace, LucideScanHeart, LucideScanLine, LucideScanQrCode, LucideScanSearch, LucideScanSquare, LucideScanText, LucideScatterChart, LucideSchool, LucideSchool2, LucideScissors, LucideScissorsLineDashed, LucideScissorsSquare, LucideScissorsSquareDashedBottom, LucideScooter, LucideScratchBlocks, LucideScreenShare, LucideScreenShareOff, LucideScrew, LucideScroll, LucideScrollText, LucideSearch, LucideSearchAlert, LucideSearchCheck, LucideSearchCode, LucideSearchSlash, LucideSearchX, LucideSection, LucideSend, LucideSendHorizonal, LucideSendHorizontal, LucideSendToBack, LucideSeparatorHorizontal, LucideSeparatorVertical, LucideServer, LucideServerCog, LucideServerCrash, LucideServerOff, LucideServerPlus, LucideSettings, LucideSettings2, LucideShapes, LucideShare, LucideShare2, LucideSheet, LucideShell, LucideShelvingUnit, LucideShield, LucideShieldAlert, LucideShieldBan, LucideShieldCheck, LucideShieldClose, LucideShieldCog, LucideShieldCogCorner, LucideShieldEllipsis, LucideShieldHalf, LucideShieldHouse, LucideShieldKeyhole, LucideShieldLock, LucideShieldMinus, LucideShieldOff, LucideShieldPlus, LucideShieldQuestion, LucideShieldQuestionMark, LucideShieldUser, LucideShieldX, LucideShip, LucideShipCargo, LucideShipWheel, LucideShirt, LucideShoppingBag, LucideShoppingBasket, LucideShoppingCart, LucideShoppingCartMinus, LucideShoppingCartPlus, LucideShovel, LucideShowerHead, LucideShredder, LucideShrimp, LucideShrimpOff, LucideShrink, LucideShrub, LucideShuffle, LucideSidebar, LucideSidebarClose, LucideSidebarOpen, LucideSigma, LucideSigmaSquare, LucideSignal, LucideSignalHigh, LucideSignalLow, LucideSignalMedium, LucideSignalZero, LucideSignature, LucideSignpost, LucideSignpostBig, LucideSiren, LucideSkipBack, LucideSkipForward, LucideSkull, LucideSlash, LucideSlashSquare, LucideSlice, LucideSliders, LucideSlidersHorizontal, LucideSlidersVertical, LucideSmartphone, LucideSmartphoneCharging, LucideSmartphoneNfc, LucideSmile, LucideSmilePlus, LucideSnail, LucideSnowflake, LucideSoapDispenserDroplet, LucideSofa, LucideSolarPanel, LucideSortAsc, LucideSortDesc, LucideSoup, LucideSpace, LucideSpade, LucideSparkle, LucideSparkles, LucideSpeaker, LucideSpeech, LucideSpellCheck, LucideSpellCheck2, LucideSpline, LucideSplinePointer, LucideSplit, LucideSplitSquareHorizontal, LucideSplitSquareVertical, LucideSpool, LucideSportShoe, LucideSpotlight, LucideSprayCan, LucideSprout, LucideSquare, LucideSquareActivity, LucideSquareArrowDown, LucideSquareArrowDownLeft, LucideSquareArrowDownRight, LucideSquareArrowLeft, LucideSquareArrowOutDownLeft, LucideSquareArrowOutDownRight, LucideSquareArrowOutUpLeft, LucideSquareArrowOutUpRight, LucideSquareArrowRight, LucideSquareArrowRightEnter, LucideSquareArrowRightExit, LucideSquareArrowUp, LucideSquareArrowUpLeft, LucideSquareArrowUpRight, LucideSquareAsterisk, LucideSquareBookmark, LucideSquareBottomDashedScissors, LucideSquareCenterlineDashedHorizontal, LucideSquareCenterlineDashedVertical, LucideSquareChartGantt, LucideSquareCheck, LucideSquareCheckBig, LucideSquareChevronDown, LucideSquareChevronLeft, LucideSquareChevronRight, LucideSquareChevronUp, LucideSquareCode, LucideSquareDashed, LucideSquareDashedBottom, LucideSquareDashedBottomCode, LucideSquareDashedKanban, LucideSquareDashedMousePointer, LucideSquareDashedPlus, LucideSquareDashedText, LucideSquareDashedTopSolid, LucideSquareDashedX, LucideSquareDashedXCorner, LucideSquareDimensions, LucideSquareDivide, LucideSquareDot, LucideSquareEqual, LucideSquareExclamationPoint, LucideSquareFunction, LucideSquareGanttChart, LucideSquareKanban, LucideSquareLibrary, LucideSquareM, LucideSquareMenu, LucideSquareMinus, LucideSquareMousePointer, LucideSquareOff, LucideSquareParking, LucideSquareParkingOff, LucideSquarePause, LucideSquarePen, LucideSquarePercent, LucideSquarePi, LucideSquarePilcrow, LucideSquarePlay, LucideSquarePlus, LucideSquarePower, LucideSquareRadical, LucideSquareRoundCorner, LucideSquareScissors, LucideSquareSigma, LucideSquareSlash, LucideSquareSparkles, LucideSquareSplitHorizontal, LucideSquareSplitVertical, LucideSquareSquare, LucideSquareStack, LucideSquareStar, LucideSquareStop, LucideSquareTerminal, LucideSquareText, LucideSquareUser, LucideSquareUserRound, LucideSquareX, LucideSquaresExclude, LucideSquaresIntersect, LucideSquaresSubtract, LucideSquaresUnite, LucideSquircle, LucideSquircleDashed, LucideSquirrel, LucideStamp, LucideStar, LucideStarCheck, LucideStarHalf, LucideStarMinus, LucideStarOff, LucideStarPlus, LucideStarX, LucideStars, LucideStepBack, LucideStepForward, LucideStethoscope, LucideSticker, LucideStickyNote, LucideStickyNoteCheck, LucideStickyNoteMinus, LucideStickyNoteOff, LucideStickyNotePlus, LucideStickyNoteX, LucideStickyNotes, LucideStone, LucideStopCircle, LucideStore, LucideStretchHorizontal, LucideStretchVertical, LucideStrikethrough, LucideSubscript, LucideSubtitles, LucideSummary, LucideSun, LucideSunDim, LucideSunMedium, LucideSunMoon, LucideSunSnow, LucideSunrise, LucideSunset, LucideSuperscript, LucideSwatchBook, LucideSwissFranc, LucideSwitchCamera, LucideSword, LucideSwords, LucideSyringe, LucideTable, LucideTable2, LucideTableCellsMerge, LucideTableCellsSplit, LucideTableColumnsSplit, LucideTableConfig, LucideTableOfContents, LucideTableProperties, LucideTableRowsSplit, LucideTablet, LucideTabletSmartphone, LucideTablets, LucideTag, LucideTagPlus, LucideTagX, LucideTags, LucideTally1, LucideTally2, LucideTally3, LucideTally4, LucideTally5, LucideTangent, LucideTarget, LucideTelescope, LucideTent, LucideTentTree, LucideTerminal, LucideTerminalSquare, LucideTestTube, LucideTestTube2, LucideTestTubeDiagonal, LucideTestTubes, LucideText, LucideTextAlignCenter, LucideTextAlignEnd, LucideTextAlignJustify, LucideTextAlignJustifyCenter, LucideTextAlignJustifyEnd, LucideTextAlignJustifyStart, LucideTextAlignStart, LucideTextCursor, LucideTextCursorInput, LucideTextInitial, LucideTextQuote, LucideTextSearch, LucideTextSelect, LucideTextSelection, LucideTextWrap, LucideTheater, LucideThermometer, LucideThermometerSnowflake, LucideThermometerSun, LucideThumbsDown, LucideThumbsUp, LucideTicTacToe, LucideTicket, LucideTicketCheck, LucideTicketMinus, LucideTicketPercent, LucideTicketPlus, LucideTicketSlash, LucideTicketX, LucideTickets, LucideTicketsPlane, LucideTimeline, LucideTimer, LucideTimerOff, LucideTimerReset, LucideToggleLeft, LucideToggleRight, LucideToilet, LucideToolCase, LucideToolbox, LucideToothbrush, LucideToothbrushSparkles, LucideTornado, LucideTorus, LucideTouchpad, LucideTouchpadOff, LucideTowelRack, LucideTowerControl, LucideToyBrick, LucideTractor, LucideTrafficCone, LucideTrailer, LucideTrain, LucideTrainFront, LucideTrainFrontTunnel, LucideTrainTrack, LucideTramFront, LucideTransgender, LucideTrash, LucideTrash2, LucideTrashOff, LucideTreeDeciduous, LucideTreePalm, LucideTreePine, LucideTrees, LucideTrendingDown, LucideTrendingUp, LucideTrendingUpDown, LucideTriangle, LucideTriangleAlert, LucideTriangleDashed, LucideTriangleRight, LucideTrianglesCenterlineDashedHorizontal, LucideTrianglesCenterlineDashedVertical, LucideTrophy, LucideTruck, LucideTruckElectric, LucideTubeLotion, LucideTurkishLira, LucideTurntable, LucideTurtle, LucideTv, LucideTv2, LucideTvMinimal, LucideTvMinimalPlay, LucideTwitch, LucideTwitter, LucideType, LucideTypeOutline, LucideUmbrella, LucideUmbrellaOff, LucideUnderline, LucideUndo, LucideUndo2, LucideUndoDot, LucideUnfoldHorizontal, LucideUnfoldVertical, LucideUngroup, LucideUniversity, LucideUnlink, LucideUnlink2, LucideUnlock, LucideUnlockKeyhole, LucideUnplug, LucideUpload, LucideUploadCloud, LucideUsb, LucideUsbCPort, LucideUser, LucideUser2, LucideUserCheck, LucideUserCheck2, LucideUserCircle, LucideUserCircle2, LucideUserCog, LucideUserCog2, LucideUserGroup, LucideUserKey, LucideUserLock, LucideUserMinus, LucideUserMinus2, LucideUserPen, LucideUserPlus, LucideUserPlus2, LucideUserRound, LucideUserRoundArrowLeft, LucideUserRoundCheck, LucideUserRoundCog, LucideUserRoundGroup, LucideUserRoundKey, LucideUserRoundMinus, LucideUserRoundPen, LucideUserRoundPlus, LucideUserRoundSearch, LucideUserRoundStar, LucideUserRoundX, LucideUserSearch, LucideUserShield, LucideUserSquare, LucideUserSquare2, LucideUserStar, LucideUserX, LucideUserX2, LucideUsers, LucideUsers2, LucideUsersRound, LucideUtensils, LucideUtensilsCrossed, LucideUtilityPole, LucideVan, LucideVariable, LucideVault, LucideVectorPolygon, LucideVectorSquare, LucideVegan, LucideVenetianMask, LucideVenus, LucideVenusAndMars, LucideVerified, LucideVibrate, LucideVibrateOff, LucideVideo, LucideVideoOff, LucideVideotape, LucideView, LucideVirus, LucideVirusOff, LucideVoicemail, LucideVolleyball, LucideVolume, LucideVolume1, LucideVolume2, LucideVolumeOff, LucideVolumeX, LucideVote, LucideWallet, LucideWallet2, LucideWalletCards, LucideWalletMinimal, LucideWallpaper, LucideWand, LucideWand2, LucideWandSparkles, LucideWarehouse, LucideWashingMachine, LucideWatch, LucideWaves, LucideWavesArrowDown, LucideWavesArrowUp, LucideWavesHorizontal, LucideWavesLadder, LucideWavesVertical, LucideWaypoints, LucideWebcam, LucideWebcamOff, LucideWebhook, LucideWebhookOff, LucideWeight, LucideWeightTilde, LucideWheat, LucideWheatOff, LucideWhistle, LucideWholeWord, LucideWifi, LucideWifiCog, LucideWifiHigh, LucideWifiLock, LucideWifiLow, LucideWifiOff, LucideWifiPen, LucideWifiSync, LucideWifiZero, LucideWind, LucideWindArrowDown, LucideWindArrowUp, LucideWine, LucideWineOff, LucideWorkflow, LucideWorm, LucideWrapText, LucideWrench, LucideWrenchOff, LucideX, LucideXCircle, LucideXLineTop, LucideXOctagon, LucideXSquare, LucideYoutube, LucideZap, LucideZapOff, LucideZodiacAquarius, LucideZodiacAries, LucideZodiacCancer, LucideZodiacCapricorn, LucideZodiacGemini, LucideZodiacLeo, LucideZodiacLibra, LucideZodiacOphiuchus, LucideZodiacPisces, LucideZodiacSagittarius, LucideZodiacScorpio, LucideZodiacTaurus, LucideZodiacVirgo, LucideZoomIn, LucideZoomOut, Luggage, LuggageIcon, MSquare, MSquareIcon, Magnet, MagnetIcon, Mail, MailBadge, MailBadgeIcon, MailCheck, MailCheckIcon, MailClock, MailClockIcon, MailDot, MailDotIcon, MailIcon, MailMinus, MailMinusIcon, MailOpen, MailOpenIcon, MailPen, MailPenIcon, MailPlus, MailPlusIcon, MailQuestion, MailQuestionIcon, MailQuestionMark, MailQuestionMarkIcon, MailSearch, MailSearchIcon, MailWarning, MailWarningIcon, MailX, MailXIcon, Mailbox, MailboxIcon, Mails, MailsIcon, Map, MapIcon, MapMinus, MapMinusIcon, MapPin, MapPinCheck, MapPinCheckIcon, MapPinCheckInside, MapPinCheckInsideIcon, MapPinHouse, MapPinHouseIcon, MapPinIcon, MapPinMinus, MapPinMinusIcon, MapPinMinusInside, MapPinMinusInsideIcon, MapPinOff, MapPinOffIcon, MapPinPen, MapPinPenIcon, MapPinPlus, MapPinPlusIcon, MapPinPlusInside, MapPinPlusInsideIcon, MapPinSearch, MapPinSearchIcon, MapPinX, MapPinXIcon, MapPinXInside, MapPinXInsideIcon, MapPinned, MapPinnedIcon, MapPlus, MapPlusIcon, Mars, MarsIcon, MarsStroke, MarsStrokeIcon, Martini, MartiniIcon, Maximize, Maximize2, Maximize2Icon, MaximizeIcon, Medal, MedalIcon, Megaphone, MegaphoneIcon, MegaphoneOff, MegaphoneOffIcon, Meh, MehIcon, MemoryStick, MemoryStickIcon, Menu, MenuIcon, MenuSquare, MenuSquareIcon, Merge, MergeIcon, MessageCircle, MessageCircleCheck, MessageCircleCheckIcon, MessageCircleCode, MessageCircleCodeIcon, MessageCircleDashed, MessageCircleDashedCheck, MessageCircleDashedCheckIcon, MessageCircleDashedIcon, MessageCircleHeart, MessageCircleHeartIcon, MessageCircleIcon, MessageCircleMore, MessageCircleMoreIcon, MessageCircleOff, MessageCircleOffIcon, MessageCirclePlus, MessageCirclePlusIcon, MessageCircleQuestion, MessageCircleQuestionIcon, MessageCircleQuestionMark, MessageCircleQuestionMarkIcon, MessageCircleReply, MessageCircleReplyIcon, MessageCircleWarning, MessageCircleWarningIcon, MessageCircleX, MessageCircleXIcon, MessageSquare, MessageSquareCheck, MessageSquareCheckIcon, MessageSquareCode, MessageSquareCodeIcon, MessageSquareDashed, MessageSquareDashedIcon, MessageSquareDiff, MessageSquareDiffIcon, MessageSquareDot, MessageSquareDotIcon, MessageSquareHeart, MessageSquareHeartIcon, MessageSquareIcon, MessageSquareLock, MessageSquareLockIcon, MessageSquareMore, MessageSquareMoreIcon, MessageSquareOff, MessageSquareOffIcon, MessageSquarePlus, MessageSquarePlusIcon, MessageSquareQuote, MessageSquareQuoteIcon, MessageSquareReply, MessageSquareReplyIcon, MessageSquareShare, MessageSquareShareIcon, MessageSquareText, MessageSquareTextIcon, MessageSquareWarning, MessageSquareWarningIcon, MessageSquareX, MessageSquareXIcon, MessagesCircle, MessagesCircleIcon, MessagesSquare, MessagesSquareIcon, Metronome, MetronomeIcon, Mic, Mic2, Mic2Icon, MicAudioLines, MicAudioLinesIcon, MicIcon, MicOff, MicOffIcon, MicSignal, MicSignalIcon, MicVocal, MicVocalIcon, Microchip, MicrochipIcon, Microscope, MicroscopeIcon, Microwave, MicrowaveIcon, MidiPort, MidiPortIcon, Milestone, MilestoneIcon, Milk, MilkIcon, MilkOff, MilkOffIcon, Minimize, Minimize2, Minimize2Icon, MinimizeIcon, Minus, MinusCircle, MinusCircleIcon, MinusIcon, MinusSquare, MinusSquareIcon, MirrorRectangular, MirrorRectangularIcon, MirrorRound, MirrorRoundIcon, Monitor, MonitorCheck, MonitorCheckIcon, MonitorCloud, MonitorCloudIcon, MonitorCog, MonitorCogIcon, MonitorDot, MonitorDotIcon, MonitorDown, MonitorDownIcon, MonitorIcon, MonitorOff, MonitorOffIcon, MonitorPause, MonitorPauseIcon, MonitorPc, MonitorPcIcon, MonitorPlay, MonitorPlayIcon, MonitorSmartphone, MonitorSmartphoneIcon, MonitorSpeaker, MonitorSpeakerIcon, MonitorStop, MonitorStopIcon, MonitorUp, MonitorUpIcon, MonitorX, MonitorXIcon, Moon, MoonIcon, MoonStar, MoonStarIcon, Mop, MopIcon, MopSparkles, MopSparklesIcon, MoreHorizontal, MoreHorizontalIcon, MoreVertical, MoreVerticalIcon, Mosque, MosqueIcon, Motorbike, MotorbikeIcon, Mountain, MountainIcon, MountainSnow, MountainSnowIcon, Mouse, MouseIcon, MouseLeft, MouseLeftIcon, MouseOff, MouseOffIcon, MousePointer, MousePointer2, MousePointer2Icon, MousePointer2Off, MousePointer2OffIcon, MousePointerBan, MousePointerBanIcon, MousePointerClick, MousePointerClickIcon, MousePointerIcon, MousePointerSquareDashed, MousePointerSquareDashedIcon, MouseRight, MouseRightIcon, Mouth, MouthIcon, MouthOff, MouthOffIcon, Move, Move3D, Move3DIcon, Move3d, Move3dIcon, MoveDiagonal, MoveDiagonal2, MoveDiagonal2Icon, MoveDiagonalIcon, MoveDown, MoveDownIcon, MoveDownLeft, MoveDownLeftIcon, MoveDownRight, MoveDownRightIcon, MoveHorizontal, MoveHorizontalIcon, MoveIcon, MoveLeft, MoveLeftIcon, MoveRight, MoveRightIcon, MoveUp, MoveUpIcon, MoveUpLeft, MoveUpLeftIcon, MoveUpRight, MoveUpRightIcon, MoveVertical, MoveVerticalIcon, Music, Music2, Music2Icon, Music3, Music3Icon, Music4, Music4Icon, MusicIcon, type NamedIconProps, Navigation, Navigation2, Navigation2Icon, Navigation2Off, Navigation2OffIcon, NavigationIcon, NavigationOff, NavigationOffIcon, NepaliRupee, NepaliRupeeIcon, Network, NetworkIcon, Newspaper, NewspaperIcon, Nfc, NfcIcon, NonBinary, NonBinaryIcon, Notebook, NotebookDot, NotebookDotIcon, NotebookIcon, NotebookPen, NotebookPenIcon, NotebookTabs, NotebookTabsIcon, NotebookText, NotebookTextIcon, NotepadText, NotepadTextDashed, NotepadTextDashedIcon, NotepadTextIcon, Nut, NutIcon, NutOff, NutOffIcon, Octagon, OctagonAlert, OctagonAlertIcon, OctagonIcon, OctagonMinus, OctagonMinusIcon, OctagonPause, OctagonPauseIcon, OctagonX, OctagonXIcon, Omega, OmegaIcon, Option, OptionIcon, Orbit, OrbitIcon, Origami, OrigamiIcon, Outdent, OutdentIcon, Package, Package2, Package2Icon, PackageCheck, PackageCheckIcon, PackageIcon, PackageMinus, PackageMinusIcon, PackageOpen, PackageOpenIcon, PackagePlus, PackagePlusIcon, PackageSearch, PackageSearchIcon, PackageX, PackageXIcon, PaintBucket, PaintBucketIcon, PaintRoller, PaintRollerIcon, Paintbrush, Paintbrush2, Paintbrush2Icon, PaintbrushIcon, PaintbrushVertical, PaintbrushVerticalIcon, Palette, PaletteIcon, Palmtree, PalmtreeIcon, Panda, PandaIcon, PanelBottom, PanelBottomClose, PanelBottomCloseIcon, PanelBottomDashed, PanelBottomDashedIcon, PanelBottomIcon, PanelBottomInactive, PanelBottomInactiveIcon, PanelBottomOpen, PanelBottomOpenIcon, PanelLeft, PanelLeftClose, PanelLeftCloseIcon, PanelLeftDashed, PanelLeftDashedIcon, PanelLeftIcon, PanelLeftInactive, PanelLeftInactiveIcon, PanelLeftOpen, PanelLeftOpenIcon, PanelLeftRightDashed, PanelLeftRightDashedIcon, PanelRight, PanelRightClose, PanelRightCloseIcon, PanelRightDashed, PanelRightDashedIcon, PanelRightIcon, PanelRightInactive, PanelRightInactiveIcon, PanelRightOpen, PanelRightOpenIcon, PanelTop, PanelTopBottomDashed, PanelTopBottomDashedIcon, PanelTopClose, PanelTopCloseIcon, PanelTopDashed, PanelTopDashedIcon, PanelTopIcon, PanelTopInactive, PanelTopInactiveIcon, PanelTopOpen, PanelTopOpenIcon, PanelsLeftBottom, PanelsLeftBottomIcon, PanelsLeftRight, PanelsLeftRightIcon, PanelsRightBottom, PanelsRightBottomIcon, PanelsTopBottom, PanelsTopBottomIcon, PanelsTopLeft, PanelsTopLeftIcon, PaperBag, PaperBagIcon, Paperclip, PaperclipIcon, Parasol, ParasolIcon, Parentheses, ParenthesesIcon, Park, ParkIcon, ParkingCircle, ParkingCircleIcon, ParkingCircleOff, ParkingCircleOffIcon, ParkingMeter, ParkingMeterIcon, ParkingSquare, ParkingSquareIcon, ParkingSquareOff, ParkingSquareOffIcon, PartyPopper, PartyPopperIcon, Pause, PauseCircle, PauseCircleIcon, PauseIcon, PauseOctagon, PauseOctagonIcon, PawPrint, PawPrintIcon, PcCase, PcCaseIcon, Pen, PenBox, PenBoxIcon, PenIcon, PenLine, PenLineIcon, PenOff, PenOffIcon, PenSquare, PenSquareIcon, PenTool, PenToolIcon, Pencil, PencilIcon, PencilLine, PencilLineIcon, PencilOff, PencilOffIcon, PencilRuler, PencilRulerIcon, PencilSparkles, PencilSparklesIcon, Pentagon, PentagonIcon, Percent, PercentCircle, PercentCircleIcon, PercentDiamond, PercentDiamondIcon, PercentIcon, PercentSquare, PercentSquareIcon, PersonStanding, PersonStandingIcon, Phi, PhiIcon, PhilippinePeso, PhilippinePesoIcon, Phone, PhoneCall, PhoneCallIcon, PhoneForwarded, PhoneForwardedIcon, PhoneIcon, PhoneIncoming, PhoneIncomingIcon, PhoneLog, PhoneLogIcon, PhoneMissed, PhoneMissedIcon, PhoneOff, PhoneOffIcon, PhoneOutgoing, PhoneOutgoingIcon, Pi, PiIcon, PiSquare, PiSquareIcon, Piano, PianoIcon, Pickaxe, PickaxeIcon, PictureInPicture, PictureInPicture2, PictureInPicture2Icon, PictureInPictureIcon, PieChart, PieChartIcon, PiggyBank, PiggyBankIcon, Pilcrow, PilcrowIcon, PilcrowLeft, PilcrowLeftIcon, PilcrowRight, PilcrowRightIcon, PilcrowSquare, PilcrowSquareIcon, Pill, PillBottle, PillBottleIcon, PillIcon, Pin, PinIcon, PinOff, PinOffIcon, Pipette, PipetteIcon, Pizza, PizzaIcon, Plane, PlaneIcon, PlaneLanding, PlaneLandingIcon, PlaneTakeoff, PlaneTakeoffIcon, PlantPot, PlantPotIcon, Play, PlayCircle, PlayCircleIcon, PlayIcon, PlayOff, PlayOffIcon, PlaySquare, PlaySquareIcon, PlayingCard, PlayingCardIcon, PlayingCards, PlayingCardsFan, PlayingCardsFanIcon, PlayingCardsIcon, Plug, Plug2, Plug2Icon, PlugIcon, PlugZap, PlugZap2, PlugZap2Icon, PlugZapIcon, Plus, PlusCircle, PlusCircleIcon, PlusIcon, PlusSquare, PlusSquareIcon, PocketKnife, PocketKnifeIcon, Podcast, PodcastIcon, Podium, PodiumIcon, Pointer, PointerIcon, PointerOff, PointerOffIcon, Popcorn, PopcornIcon, Popsicle, PopsicleIcon, PoundSterling, PoundSterlingIcon, Power, PowerCircle, PowerCircleIcon, PowerIcon, PowerOff, PowerOffIcon, PowerSquare, PowerSquareIcon, Presentation, PresentationIcon, Printer, Printer3d, Printer3dIcon, PrinterCheck, PrinterCheckIcon, PrinterIcon, PrinterX, PrinterXIcon, Projector, ProjectorIcon, Proportions, ProportionsIcon, Puzzle, PuzzleIcon, Pyramid, PyramidIcon, QrCode, QrCodeIcon, Quote, QuoteIcon, Rabbit, RabbitIcon, Radar, RadarIcon, Radiation, RadiationIcon, Radical, RadicalIcon, Radio, RadioIcon, RadioOff, RadioOffIcon, RadioReceiver, RadioReceiverIcon, RadioTower, RadioTowerIcon, Radius, RadiusIcon, Rainbow, RainbowIcon, Rat, RatIcon, Ratio, RatioIcon, Receipt, ReceiptCent, ReceiptCentIcon, ReceiptEuro, ReceiptEuroIcon, ReceiptIcon, ReceiptIndianRupee, ReceiptIndianRupeeIcon, ReceiptJapaneseYen, ReceiptJapaneseYenIcon, ReceiptPoundSterling, ReceiptPoundSterlingIcon, ReceiptRussianRuble, ReceiptRussianRubleIcon, ReceiptSwissFranc, ReceiptSwissFrancIcon, ReceiptText, ReceiptTextIcon, ReceiptTurkishLira, ReceiptTurkishLiraIcon, RectangleCircle, RectangleCircleIcon, RectangleEllipsis, RectangleEllipsisIcon, RectangleGoggles, RectangleGogglesIcon, RectangleHorizontal, RectangleHorizontalIcon, RectangleVertical, RectangleVerticalIcon, Recycle, RecycleIcon, Redo, Redo2, Redo2Icon, RedoDot, RedoDotIcon, RedoIcon, RefreshCcw, RefreshCcwDot, RefreshCcwDotIcon, RefreshCcwIcon, RefreshCw, RefreshCwIcon, RefreshCwOff, RefreshCwOffIcon, Refrigerator, RefrigeratorIcon, Regex, RegexIcon, RemoveFormatting, RemoveFormattingIcon, Repeat, Repeat1, Repeat1Icon, Repeat2, Repeat2Icon, RepeatIcon, RepeatOff, RepeatOffIcon, Replace, ReplaceAll, ReplaceAllIcon, ReplaceIcon, Reply, ReplyAll, ReplyAllIcon, ReplyIcon, Rewind, RewindIcon, Ribbon, RibbonIcon, Road, RoadIcon, RobotArm, RobotArmIcon, RobotVacuum, RobotVacuumIcon, Rocket, RocketIcon, RockingChair, RockingChairIcon, RollerCoaster, RollerCoasterIcon, Rose, RoseIcon, Rotate3D, Rotate3DIcon, Rotate3d, Rotate3dIcon, RotateCcw, RotateCcwClock, RotateCcwClockIcon, RotateCcwIcon, RotateCcwKey, RotateCcwKeyIcon, RotateCcwSquare, RotateCcwSquareIcon, RotateCw, RotateCwClock, RotateCwClockIcon, RotateCwFadingClock, RotateCwFadingClockIcon, RotateCwIcon, RotateCwSquare, RotateCwSquareIcon, Route, RouteIcon, RouteOff, RouteOffIcon, Router, RouterIcon, Rows, Rows2, Rows2Icon, Rows3, Rows3Icon, Rows4, Rows4Icon, RowsIcon, Rss, RssIcon, RugbyBall, RugbyBallIcon, Ruler, RulerDimensionLine, RulerDimensionLineIcon, RulerIcon, RussianRuble, RussianRubleIcon, Sailboat, SailboatIcon, Salad, SaladIcon, Sandwich, SandwichIcon, Satellite, SatelliteDish, SatelliteDishIcon, SatelliteIcon, SaudiRiyal, SaudiRiyalIcon, Save, SaveAll, SaveAllIcon, SaveCheck, SaveCheckIcon, SaveIcon, SaveOff, SaveOffIcon, SavePen, SavePenIcon, SavePlus, SavePlusIcon, Scale, Scale3D, Scale3DIcon, Scale3d, Scale3dIcon, ScaleIcon, Scaling, ScalingIcon, Scan, ScanBarcode, ScanBarcodeIcon, ScanBox, ScanBoxIcon, ScanEye, ScanEyeIcon, ScanFace, ScanFaceIcon, ScanHeart, ScanHeartIcon, ScanIcon, ScanLine, ScanLineIcon, ScanQrCode, ScanQrCodeIcon, ScanSearch, ScanSearchIcon, ScanSquare, ScanSquareIcon, ScanText, ScanTextIcon, ScatterChart, ScatterChartIcon, School, School2, School2Icon, SchoolIcon, Scissors, ScissorsIcon, ScissorsLineDashed, ScissorsLineDashedIcon, ScissorsSquare, ScissorsSquareDashedBottom, ScissorsSquareDashedBottomIcon, ScissorsSquareIcon, Scooter, ScooterIcon, ScratchBlocks, ScratchBlocksIcon, ScreenShare, ScreenShareIcon, ScreenShareOff, ScreenShareOffIcon, Screw, ScrewIcon, Scroll, ScrollIcon, ScrollText, ScrollTextIcon, Search, SearchAlert, SearchAlertIcon, SearchCheck, SearchCheckIcon, SearchCode, SearchCodeIcon, SearchIcon, SearchSlash, SearchSlashIcon, SearchX, SearchXIcon, Section, SectionIcon, Send, SendHorizonal, SendHorizonalIcon, SendHorizontal, SendHorizontalIcon, SendIcon, SendToBack, SendToBackIcon, SeparatorHorizontal, SeparatorHorizontalIcon, SeparatorVertical, SeparatorVerticalIcon, Server, ServerCog, ServerCogIcon, ServerCrash, ServerCrashIcon, ServerIcon, ServerOff, ServerOffIcon, ServerPlus, ServerPlusIcon, Settings, Settings2, Settings2Icon, SettingsIcon, Shapes, ShapesIcon, Share, Share2, Share2Icon, ShareIcon, Sheet, SheetIcon, Shell, ShellIcon, ShelvingUnit, ShelvingUnitIcon, Shield, ShieldAlert, ShieldAlertIcon, ShieldBan, ShieldBanIcon, ShieldCheck, ShieldCheckIcon, ShieldClose, ShieldCloseIcon, ShieldCog, ShieldCogCorner, ShieldCogCornerIcon, ShieldCogIcon, ShieldEllipsis, ShieldEllipsisIcon, ShieldHalf, ShieldHalfIcon, ShieldHouse, ShieldHouseIcon, ShieldIcon, ShieldKeyhole, ShieldKeyholeIcon, ShieldLock, ShieldLockIcon, ShieldMinus, ShieldMinusIcon, ShieldOff, ShieldOffIcon, ShieldPlus, ShieldPlusIcon, ShieldQuestion, ShieldQuestionIcon, ShieldQuestionMark, ShieldQuestionMarkIcon, ShieldUser, ShieldUserIcon, ShieldX, ShieldXIcon, Ship, ShipCargo, ShipCargoIcon, ShipIcon, ShipWheel, ShipWheelIcon, Shirt, ShirtIcon, ShoppingBag, ShoppingBagIcon, ShoppingBasket, ShoppingBasketIcon, ShoppingCart, ShoppingCartIcon, ShoppingCartMinus, ShoppingCartMinusIcon, ShoppingCartPlus, ShoppingCartPlusIcon, Shovel, ShovelIcon, ShowerHead, ShowerHeadIcon, Shredder, ShredderIcon, Shrimp, ShrimpIcon, ShrimpOff, ShrimpOffIcon, Shrink, ShrinkIcon, Shrub, ShrubIcon, Shuffle, ShuffleIcon, Sidebar, SidebarClose, SidebarCloseIcon, SidebarIcon, SidebarOpen, SidebarOpenIcon, Sigma, SigmaIcon, SigmaSquare, SigmaSquareIcon, Signal, SignalHigh, SignalHighIcon, SignalIcon, SignalLow, SignalLowIcon, SignalMedium, SignalMediumIcon, SignalZero, SignalZeroIcon, Signature, SignatureIcon, Signpost, SignpostBig, SignpostBigIcon, SignpostIcon, Siren, SirenIcon, SkipBack, SkipBackIcon, SkipForward, SkipForwardIcon, Skull, SkullIcon, Slash, SlashIcon, SlashSquare, SlashSquareIcon, Slice, SliceIcon, Sliders, SlidersHorizontal, SlidersHorizontalIcon, SlidersIcon, SlidersVertical, SlidersVerticalIcon, Smartphone, SmartphoneCharging, SmartphoneChargingIcon, SmartphoneIcon, SmartphoneNfc, SmartphoneNfcIcon, Smile, SmileIcon, SmilePlus, SmilePlusIcon, Snail, SnailIcon, Snowflake, SnowflakeIcon, SoapDispenserDroplet, SoapDispenserDropletIcon, Sofa, SofaIcon, SolarPanel, SolarPanelIcon, SortAsc, SortAscIcon, SortDesc, SortDescIcon, Soup, SoupIcon, Space, SpaceIcon, Spade, SpadeIcon, Sparkle, SparkleIcon, Sparkles, SparklesIcon, Speaker, SpeakerIcon, Speech, SpeechIcon, SpellCheck, SpellCheck2, SpellCheck2Icon, SpellCheckIcon, Spline, SplineIcon, SplinePointer, SplinePointerIcon, Split, SplitIcon, SplitSquareHorizontal, SplitSquareHorizontalIcon, SplitSquareVertical, SplitSquareVerticalIcon, Spool, SpoolIcon, SportShoe, SportShoeIcon, Spotlight, SpotlightIcon, SprayCan, SprayCanIcon, Sprout, SproutIcon, Square, SquareActivity, SquareActivityIcon, SquareArrowDown, SquareArrowDownIcon, SquareArrowDownLeft, SquareArrowDownLeftIcon, SquareArrowDownRight, SquareArrowDownRightIcon, SquareArrowLeft, SquareArrowLeftIcon, SquareArrowOutDownLeft, SquareArrowOutDownLeftIcon, SquareArrowOutDownRight, SquareArrowOutDownRightIcon, SquareArrowOutUpLeft, SquareArrowOutUpLeftIcon, SquareArrowOutUpRight, SquareArrowOutUpRightIcon, SquareArrowRight, SquareArrowRightEnter, SquareArrowRightEnterIcon, SquareArrowRightExit, SquareArrowRightExitIcon, SquareArrowRightIcon, SquareArrowUp, SquareArrowUpIcon, SquareArrowUpLeft, SquareArrowUpLeftIcon, SquareArrowUpRight, SquareArrowUpRightIcon, SquareAsterisk, SquareAsteriskIcon, SquareBookmark, SquareBookmarkIcon, SquareBottomDashedScissors, SquareBottomDashedScissorsIcon, SquareCenterlineDashedHorizontal, SquareCenterlineDashedHorizontalIcon, SquareCenterlineDashedVertical, SquareCenterlineDashedVerticalIcon, SquareChartGantt, SquareChartGanttIcon, SquareCheck, SquareCheckBig, SquareCheckBigIcon, SquareCheckIcon, SquareChevronDown, SquareChevronDownIcon, SquareChevronLeft, SquareChevronLeftIcon, SquareChevronRight, SquareChevronRightIcon, SquareChevronUp, SquareChevronUpIcon, SquareCode, SquareCodeIcon, SquareDashed, SquareDashedBottom, SquareDashedBottomCode, SquareDashedBottomCodeIcon, SquareDashedBottomIcon, SquareDashedIcon, SquareDashedKanban, SquareDashedKanbanIcon, SquareDashedMousePointer, SquareDashedMousePointerIcon, SquareDashedPlus, SquareDashedPlusIcon, SquareDashedText, SquareDashedTextIcon, SquareDashedTopSolid, SquareDashedTopSolidIcon, SquareDashedX, SquareDashedXCorner, SquareDashedXCornerIcon, SquareDashedXIcon, SquareDimensions, SquareDimensionsIcon, SquareDivide, SquareDivideIcon, SquareDot, SquareDotIcon, SquareEqual, SquareEqualIcon, SquareExclamationPoint, SquareExclamationPointIcon, SquareFunction, SquareFunctionIcon, SquareGanttChart, SquareGanttChartIcon, SquareIcon, SquareKanban, SquareKanbanIcon, SquareLibrary, SquareLibraryIcon, SquareM, SquareMIcon, SquareMenu, SquareMenuIcon, SquareMinus, SquareMinusIcon, SquareMousePointer, SquareMousePointerIcon, SquareOff, SquareOffIcon, SquareParking, SquareParkingIcon, SquareParkingOff, SquareParkingOffIcon, SquarePause, SquarePauseIcon, SquarePen, SquarePenIcon, SquarePercent, SquarePercentIcon, SquarePi, SquarePiIcon, SquarePilcrow, SquarePilcrowIcon, SquarePlay, SquarePlayIcon, SquarePlus, SquarePlusIcon, SquarePower, SquarePowerIcon, SquareRadical, SquareRadicalIcon, SquareRoundCorner, SquareRoundCornerIcon, SquareScissors, SquareScissorsIcon, SquareSigma, SquareSigmaIcon, SquareSlash, SquareSlashIcon, SquareSparkles, SquareSparklesIcon, SquareSplitHorizontal, SquareSplitHorizontalIcon, SquareSplitVertical, SquareSplitVerticalIcon, SquareSquare, SquareSquareIcon, SquareStack, SquareStackIcon, SquareStar, SquareStarIcon, SquareStop, SquareStopIcon, SquareTerminal, SquareTerminalIcon, SquareText, SquareTextIcon, SquareUser, SquareUserIcon, SquareUserRound, SquareUserRoundIcon, SquareX, SquareXIcon, SquaresExclude, SquaresExcludeIcon, SquaresIntersect, SquaresIntersectIcon, SquaresSubtract, SquaresSubtractIcon, SquaresUnite, SquaresUniteIcon, Squircle, SquircleDashed, SquircleDashedIcon, SquircleIcon, Squirrel, SquirrelIcon, Stamp, StampIcon, Star, StarCheck, StarCheckIcon, StarHalf, StarHalfIcon, StarIcon, StarMinus, StarMinusIcon, StarOff, StarOffIcon, StarPlus, StarPlusIcon, StarX, StarXIcon, Stars, StarsIcon, StepBack, StepBackIcon, StepForward, StepForwardIcon, Stethoscope, StethoscopeIcon, Sticker, StickerIcon, StickyNote, StickyNoteCheck, StickyNoteCheckIcon, StickyNoteIcon, StickyNoteMinus, StickyNoteMinusIcon, StickyNoteOff, StickyNoteOffIcon, StickyNotePlus, StickyNotePlusIcon, StickyNoteX, StickyNoteXIcon, StickyNotes, StickyNotesIcon, Stone, StoneIcon, StopCircle, StopCircleIcon, Store, StoreIcon, StretchHorizontal, StretchHorizontalIcon, StretchVertical, StretchVerticalIcon, Strikethrough, StrikethroughIcon, Subscript, SubscriptIcon, Subtitles, SubtitlesIcon, Summary, SummaryIcon, Sun, SunDim, SunDimIcon, SunIcon, SunMedium, SunMediumIcon, SunMoon, SunMoonIcon, SunSnow, SunSnowIcon, Sunrise, SunriseIcon, Sunset, SunsetIcon, Superscript, SuperscriptIcon, SwatchBook, SwatchBookIcon, SwissFranc, SwissFrancIcon, SwitchCamera, SwitchCameraIcon, Sword, SwordIcon, Swords, SwordsIcon, Syringe, SyringeIcon, Table, Table2, Table2Icon, TableCellsMerge, TableCellsMergeIcon, TableCellsSplit, TableCellsSplitIcon, TableColumnsSplit, TableColumnsSplitIcon, TableConfig, TableConfigIcon, TableIcon, TableOfContents, TableOfContentsIcon, TableProperties, TablePropertiesIcon, TableRowsSplit, TableRowsSplitIcon, Tablet, TabletIcon, TabletSmartphone, TabletSmartphoneIcon, Tablets, TabletsIcon, Tag, TagIcon, TagPlus, TagPlusIcon, TagX, TagXIcon, Tags, TagsIcon, Tally1, Tally1Icon, Tally2, Tally2Icon, Tally3, Tally3Icon, Tally4, Tally4Icon, Tally5, Tally5Icon, Tangent, TangentIcon, Target, TargetIcon, Telescope, TelescopeIcon, Tent, TentIcon, TentTree, TentTreeIcon, Terminal, TerminalIcon, TerminalSquare, TerminalSquareIcon, TestTube, TestTube2, TestTube2Icon, TestTubeDiagonal, TestTubeDiagonalIcon, TestTubeIcon, TestTubes, TestTubesIcon, Text, TextAlignCenter, TextAlignCenterIcon, TextAlignEnd, TextAlignEndIcon, TextAlignJustify, TextAlignJustifyCenter, TextAlignJustifyCenterIcon, TextAlignJustifyEnd, TextAlignJustifyEndIcon, TextAlignJustifyIcon, TextAlignJustifyStart, TextAlignJustifyStartIcon, TextAlignStart, TextAlignStartIcon, TextCursor, TextCursorIcon, TextCursorInput, TextCursorInputIcon, TextIcon, TextInitial, TextInitialIcon, TextQuote, TextQuoteIcon, TextSearch, TextSearchIcon, TextSelect, TextSelectIcon, TextSelection, TextSelectionIcon, TextWrap, TextWrapIcon, Theater, TheaterIcon, Thermometer, ThermometerIcon, ThermometerSnowflake, ThermometerSnowflakeIcon, ThermometerSun, ThermometerSunIcon, ThumbsDown, ThumbsDownIcon, ThumbsUp, ThumbsUpIcon, TicTacToe, TicTacToeIcon, Ticket, TicketCheck, TicketCheckIcon, TicketIcon, TicketMinus, TicketMinusIcon, TicketPercent, TicketPercentIcon, TicketPlus, TicketPlusIcon, TicketSlash, TicketSlashIcon, TicketX, TicketXIcon, Tickets, TicketsIcon, TicketsPlane, TicketsPlaneIcon, Timeline, TimelineIcon, Timer, TimerIcon, TimerOff, TimerOffIcon, TimerReset, TimerResetIcon, ToggleLeft, ToggleLeftIcon, ToggleRight, ToggleRightIcon, Toilet, ToiletIcon, ToolCase, ToolCaseIcon, Toolbox, ToolboxIcon, Toothbrush, ToothbrushIcon, ToothbrushSparkles, ToothbrushSparklesIcon, Tornado, TornadoIcon, Torus, TorusIcon, Touchpad, TouchpadIcon, TouchpadOff, TouchpadOffIcon, TowelRack, TowelRackIcon, TowerControl, TowerControlIcon, ToyBrick, ToyBrickIcon, Tractor, TractorIcon, TrafficCone, TrafficConeIcon, Trailer, TrailerIcon, Train, TrainFront, TrainFrontIcon, TrainFrontTunnel, TrainFrontTunnelIcon, TrainIcon, TrainTrack, TrainTrackIcon, TramFront, TramFrontIcon, Transgender, TransgenderIcon, Trash, Trash2, Trash2Icon, TrashIcon, TrashOff, TrashOffIcon, TreeDeciduous, TreeDeciduousIcon, TreePalm, TreePalmIcon, TreePine, TreePineIcon, Trees, TreesIcon, TrendingDown, TrendingDownIcon, TrendingUp, TrendingUpDown, TrendingUpDownIcon, TrendingUpIcon, Triangle, TriangleAlert, TriangleAlertIcon, TriangleDashed, TriangleDashedIcon, TriangleIcon, TriangleRight, TriangleRightIcon, TrianglesCenterlineDashedHorizontal, TrianglesCenterlineDashedHorizontalIcon, TrianglesCenterlineDashedVertical, TrianglesCenterlineDashedVerticalIcon, Trophy, TrophyIcon, Truck, TruckElectric, TruckElectricIcon, TruckIcon, TubeLotion, TubeLotionIcon, TurkishLira, TurkishLiraIcon, Turntable, TurntableIcon, Turtle, TurtleIcon, Tv, Tv2, Tv2Icon, TvIcon, TvMinimal, TvMinimalIcon, TvMinimalPlay, TvMinimalPlayIcon, Twitch, TwitchIcon, Twitter, TwitterIcon, Type, TypeIcon, TypeOutline, TypeOutlineIcon, Umbrella, UmbrellaIcon, UmbrellaOff, UmbrellaOffIcon, Underline, UnderlineIcon, Undo, Undo2, Undo2Icon, UndoDot, UndoDotIcon, UndoIcon, UnfoldHorizontal, UnfoldHorizontalIcon, UnfoldVertical, UnfoldVerticalIcon, Ungroup, UngroupIcon, University, UniversityIcon, Unlink, Unlink2, Unlink2Icon, UnlinkIcon, Unlock, UnlockIcon, UnlockKeyhole, UnlockKeyholeIcon, Unplug, UnplugIcon, Upload, UploadCloud, UploadCloudIcon, UploadIcon, Usb, UsbCPort, UsbCPortIcon, UsbIcon, User, User2, User2Icon, UserCheck, UserCheck2, UserCheck2Icon, UserCheckIcon, UserCircle, UserCircle2, UserCircle2Icon, UserCircleIcon, UserCog, UserCog2, UserCog2Icon, UserCogIcon, UserGroup, UserGroupIcon, UserIcon, UserKey, UserKeyIcon, UserLock, UserLockIcon, UserMinus, UserMinus2, UserMinus2Icon, UserMinusIcon, UserPen, UserPenIcon, UserPlus, UserPlus2, UserPlus2Icon, UserPlusIcon, UserRound, UserRoundArrowLeft, UserRoundArrowLeftIcon, UserRoundCheck, UserRoundCheckIcon, UserRoundCog, UserRoundCogIcon, UserRoundGroup, UserRoundGroupIcon, UserRoundIcon, UserRoundKey, UserRoundKeyIcon, UserRoundMinus, UserRoundMinusIcon, UserRoundPen, UserRoundPenIcon, UserRoundPlus, UserRoundPlusIcon, UserRoundSearch, UserRoundSearchIcon, UserRoundStar, UserRoundStarIcon, UserRoundX, UserRoundXIcon, UserSearch, UserSearchIcon, UserShield, UserShieldIcon, UserSquare, UserSquare2, UserSquare2Icon, UserSquareIcon, UserStar, UserStarIcon, UserX, UserX2, UserX2Icon, UserXIcon, Users, Users2, Users2Icon, UsersIcon, UsersRound, UsersRoundIcon, Utensils, UtensilsCrossed, UtensilsCrossedIcon, UtensilsIcon, UtilityPole, UtilityPoleIcon, Van, VanIcon, Variable, VariableIcon, Vault, VaultIcon, VectorPolygon, VectorPolygonIcon, VectorSquare, VectorSquareIcon, Vegan, VeganIcon, VenetianMask, VenetianMaskIcon, Venus, VenusAndMars, VenusAndMarsIcon, VenusIcon, Verified, VerifiedIcon, Vibrate, VibrateIcon, VibrateOff, VibrateOffIcon, Video, VideoIcon, VideoOff, VideoOffIcon, Videotape, VideotapeIcon, View, ViewIcon, Virus, VirusIcon, VirusOff, VirusOffIcon, Voicemail, VoicemailIcon, Volleyball, VolleyballIcon, Volume, Volume1, Volume1Icon, Volume2, Volume2Icon, VolumeIcon, VolumeOff, VolumeOffIcon, VolumeX, VolumeXIcon, Vote, VoteIcon, Wallet, Wallet2, Wallet2Icon, WalletCards, WalletCardsIcon, WalletIcon, WalletMinimal, WalletMinimalIcon, Wallpaper, WallpaperIcon, Wand, Wand2, Wand2Icon, WandIcon, WandSparkles, WandSparklesIcon, Warehouse, WarehouseIcon, WashingMachine, WashingMachineIcon, Watch, WatchIcon, Waves, WavesArrowDown, WavesArrowDownIcon, WavesArrowUp, WavesArrowUpIcon, WavesHorizontal, WavesHorizontalIcon, WavesIcon, WavesLadder, WavesLadderIcon, WavesVertical, WavesVerticalIcon, Waypoints, WaypointsIcon, Webcam, WebcamIcon, WebcamOff, WebcamOffIcon, Webhook, WebhookIcon, WebhookOff, WebhookOffIcon, Weight, WeightIcon, WeightTilde, WeightTildeIcon, Wheat, WheatIcon, WheatOff, WheatOffIcon, Whistle, WhistleIcon, WholeWord, WholeWordIcon, Wifi, WifiCog, WifiCogIcon, WifiHigh, WifiHighIcon, WifiIcon, WifiLock, WifiLockIcon, WifiLow, WifiLowIcon, WifiOff, WifiOffIcon, WifiPen, WifiPenIcon, WifiSync, WifiSyncIcon, WifiZero, WifiZeroIcon, Wind, WindArrowDown, WindArrowDownIcon, WindArrowUp, WindArrowUpIcon, WindIcon, Wine, WineIcon, WineOff, WineOffIcon, Workflow, WorkflowIcon, Worm, WormIcon, WrapText, WrapTextIcon, Wrench, WrenchIcon, WrenchOff, WrenchOffIcon, X, XCircle, XCircleIcon, XIcon, XLineTop, XLineTopIcon, XOctagon, XOctagonIcon, XSquare, XSquareIcon, Youtube, YoutubeIcon, Zap, ZapIcon, ZapOff, ZapOffIcon, ZodiacAquarius, ZodiacAquariusIcon, ZodiacAries, ZodiacAriesIcon, ZodiacCancer, ZodiacCancerIcon, ZodiacCapricorn, ZodiacCapricornIcon, ZodiacGemini, ZodiacGeminiIcon, ZodiacLeo, ZodiacLeoIcon, ZodiacLibra, ZodiacLibraIcon, ZodiacOphiuchus, ZodiacOphiuchusIcon, ZodiacPisces, ZodiacPiscesIcon, ZodiacSagittarius, ZodiacSagittariusIcon, ZodiacScorpio, ZodiacScorpioIcon, ZodiacTaurus, ZodiacTaurusIcon, ZodiacVirgo, ZodiacVirgoIcon, ZoomIn, ZoomInIcon, ZoomOut, ZoomOutIcon, createIcon, iconManifest as manifest, normalizeName };
