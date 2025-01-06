import { uri } from "./uri";

/**
 * @param {KyResponse} response
 * @returns {{response: KyResponse, data: any}}
 */
const sanitizeResponse = async (response) => ({
	response,
	data: await response.json(),
});

export const login = async (payload) => {
	const res = await apiFetch.post(uri.LOGIN, {
		json: payload,
	});

	return sanitizeResponse(res);
};