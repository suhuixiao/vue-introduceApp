const state = {
	mailbox: '',
	telephone: '',
}
const mutations = {
	getUserMailbox(state, content) {
		state.mailbox = content
	},
	getUserTelephone(state, content) {
		state.telephone = content
	},
}
export default {
	state, mutations
}