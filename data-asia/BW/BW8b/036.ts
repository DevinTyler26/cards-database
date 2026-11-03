import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラ"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		635
	],
	hp: 150,
	types: [
		"Darkness"
	],
	stage: "Stage2",
	description: {
		ja: "動く ものに 反応して 襲いかかり ３つの 頭で 食らい尽くす 恐ろしい ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "トラクタービーム"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "ダークファング"
			},
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "－20"
		}
	],
	retreat: 3,
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
		ja: "ジヘッド"
	}
}

export default card
