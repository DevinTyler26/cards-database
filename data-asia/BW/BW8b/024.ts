import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ベトベトン"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		89
	],
	hp: 100,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "とっても くさい！ 体の 成分は 猛毒で ベトベトンが 通ると どんな 草木も 枯れる。"
	},
	attacks: [
		{
			name: {
				ja: "ポイズンサクション"
			},
			effect: {
				ja: "相手のバトルポケモンがどくなら、このポケモンのHPを「60」回復する。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "ヘドロクラッシュ"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 3,
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
