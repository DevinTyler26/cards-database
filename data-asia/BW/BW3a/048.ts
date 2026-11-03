import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノ"
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		573
	],
	hp: 90,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	description: {
		ja: "白い 体毛は 特別な 脂で コーティングされているので 敵の 攻撃を 受け流すのだ。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "なめらかコート"
			},
			effect: {
				ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "エコーボイス"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「エコーボイス」のダメージは「+50」される。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
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
		ja: "チラーミィ"
	}
}

export default card
