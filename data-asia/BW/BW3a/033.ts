import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ランクルス"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		579
	],
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	description: {
		ja: "ランクルス 同士が 握手すると 脳みそが ネットワークで つながり サイコパワーが 増幅されるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "みらいよち"
			},
			effect: {
				ja: "自分の山札を上から5枚見て、好きな順番に入れ替えて、山札の上にもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ネットフォース"
			},
			effect: {
				ja: "自分の場にいる「ランクルス」の数×40ダメージ。"
			},
			cost: [
				"Psychic"
			],
			damage: "40×"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
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
		ja: "ダブラン"
	}
}

export default card
