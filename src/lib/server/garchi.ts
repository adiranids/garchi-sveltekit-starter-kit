// Import Garchi API key and base URL from an .env file in the app's root folder
import {
  GARCHI_API_KEY,
  GARCHI_API_BASE_URL,
} from '$env/static/private';

import type {
  GarchiPage,
  GarchiPageMode
} from './garchiTypes';

const baseHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${ GARCHI_API_KEY }`
};

async function get (route: string) {
  const response = await fetch(`${ GARCHI_API_BASE_URL }${ route }`, {
    headers: baseHeaders,
  });
  return await response.json();
};

async function post (route: string, body: object) {
  const response = await fetch(`${ GARCHI_API_BASE_URL }${ route }`, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify(body)
  });
  return await response.json();
};

export async function getPage(
  space_uid: string,
  mode: GarchiPageMode = 'draft',
  slug = ''
): Promise<GarchiPage> {
  return post('page', {
    space_uid,
    mode,
    slug
  });
}

export async function getAsset(
  space_uid: string,
  name: string,
): Promise<GarchiPage> {
  return get(`space/assets/${ name }?space_uid=${ space_uid }`);
}