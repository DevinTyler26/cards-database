import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ベトベトン"
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		89
	],
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "体から 猛毒の 体液が 染み出ている。 その 液に 触れた 草木は あっというまに 枯れる。"
	},
	attacks: [
		{
			name: {
				ja: "まとわりつく"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "どくどくえき"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。ポケモンチェックのとき、このどくでのせるダメカンの数は2個になる。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		}
	],
	evolveFrom: {
		ja: "ベトベター"
	}
}

export default card
