import { uri } from "../uri";

// Normal GET API:-
export const getAppData = async () => {
  const res = await apiFetch.get(uri.APP_DATA);
  let data = await res.json();
  if (!res.ok) throw new Error();
  return data;
};


/**
 *  @param {{
 *	date: date
 *	number: number
 *}} payload
 *@returns
 */

/* GET API with search params:- */
export const getAppDataWithSearchParams = async (payload) => {
  const res = await apiFetch.get(uri.APP_DATA, {
    searchParams: {
      date: payload.date ?? "",
      number: payload.number ?? 0,
    },
  });
  let data = await res.json();
  if (!res.ok) throw new Error();
  return data;
};


/**
 * @param {{
* id: string;
* }} payload
* @returns
*/

/* GET API with path params:- */
export const getAppDataWithPathParams = async (payload) => {
   const res = await apiFetch.get(uri.APP_DATA_DETAIL(payload.id));
   let data = await res.json();
   if (!res.ok) throw new Error();
   return data;
};


/**
 * @param {{
 * 	name?:string;
 * }} payload
 * @returns
*/

/* Normal POST API:- */
export const postAppDataWithJson = async (payload) => {
   const res = await apiFetch.post(uri.APP_DATA, {
       json: payload,
    // searchParams: { date } (for search params),
    // body : formData (for form data)

    /* Destructing the payload object and sending it as json:- */ 
    // json: {
    //    name: payload.name ?? "",
    // },
   });
   let data = await res.json();
   if (!res.ok && data?.error?.non_field_errors) {
       throw new Error(
           data?.error?.non_field_errors[0] ??
               'Something went wrong, please try again!'
       );
   }
   return data;
};


/**
 * @param {{
* id: string;
* name?:string;
* }} payload
*/

/* Normal PUT API:- */
export const editAppData = async (payload) => {
   const res = await apiFetch.put(uri.APP_DATA_DETAIL, {
       json: payload,

    /* Search Params(can also be passed):- */
    // searchParams: { app_data_id: payload.id,  },

   });
   let data = await res.json();
   if (!res.ok && data?.error?.non_field_errors) {
       throw new Error(
           data?.error?.non_field_errors[0] ??
               'Something went wrong, please try again!'
       );
   }
   return data;
};

/**
 * @param {{
* id: string;
* name?:string;
* }} payload
*/

/* PUT API with Path Params:- */
export const editAppDatawithPathParams = async (payload) => {
   const res = await apiFetch.put(uri.APP_DATA_DETAIL(payload.id), {
       json: payload,
   });
   let data = await res.json();
   if (!res.ok && data?.error?.non_field_errors) {
       throw new Error(
           data?.error?.non_field_errors[0] ??
               'Something went wrong, please try again!'
       );
   }
   return data;
};



/**
 * @param {{
* id: string;
* }} payload
*/

/* Normal Delete API:- */
export const deleteAppData = async (payload) => {
   const res = await apiFetch.delete(uri.DELETE_APP_DATA, {
       searchParams: {
           app_data_id: payload.id,
       },
   });

   return res;
};