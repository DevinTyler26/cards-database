import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "バイバニラ"
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		584
	],
	hp: 130,
	types: [
		"Water"
	],
	stage: "Stage2",
	description: {
		ja: "水を 大量に 飲み込んで 体内で 雪雲を 作る。 猛吹雪で 敵を 苦しめる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ツルツルソール"
			},
			effect: {
				ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。この特性は、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "アイスクラッシュ"
			},
			effect: {
				ja: "相手のバトルポケモンのにげるために必要なエネルギーの数×10ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Metal",
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
		ja: "バニリッチ"
	}
}

export default card
