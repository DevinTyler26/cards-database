import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		376
	],
	hp: 140,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	description: {
		ja: "４つの 脳みそが 連なり スーパーコンピューターより すごい 計算で 相手を 分析する。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "プラズマサーチ"
			},
			effect: {
				ja: "自分の山札から「プラズマ団」のカードを1枚選び、相手に見せてから、手札に加える。そして山札を切る。この特性は、自分の番に1回使える。使ったなら、この番に同じ名前の特性は使えない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコトリップ"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
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
	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	],
	evolveFrom: {
		ja: "メタング"
	}
}

export default card
