import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		448
	],
	hp: 100,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	description: {
		ja: "鍛えられた ルカリオは 波動を 使い １キロ先に だれがいるのか どんな気持ちか さえも わかる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ストライクバック"
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "はどうだん"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも20ダメージ。[ベンチへのダメージは弱点・抵抗力の計算をしない。]"
			},
			cost: [
				"Fighting",
				"Fighting"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
		ja: "リオル"
	}
}

export default card
