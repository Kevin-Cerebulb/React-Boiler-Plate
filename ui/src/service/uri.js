export const uri = {
    BASE : `${import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'}/api/v1/`,

    // Auth
    LOGIN: 'login/',
    LOGOUT: 'logout/',
	REFRESH_TOKEN: 'refresh-token/',
    FORGOT_PASSWORD: 'forgot-password/',

    // Normal URI
    APP_DATA: 'app-data/',

    // URI with parameters (Mostly for PUT, GET by ID)
    APP_DATA_DETAIL: (id) => `app-data/${id}/`,

    // DELETE URI
	DELETE_APP_DATA: 'app-data/delete/',


};