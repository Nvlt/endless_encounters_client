/* eslint-disable no-unused-vars */
import config from '../config';
import TokenService from './token-service';

const CharacterService={
  getCharacter() {
    return fetch(`${config.API_ENDPOINT}/character`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
  postCharacter(character) {
    return fetch(`${config.API_ENDPOINT}/character`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(character)
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
  getInventory() {
    return fetch(`${config.API_ENDPOINT}/character/inventory`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
  getGear() {
    return fetch(`${config.API_ENDPOINT}/character/gear`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
  getAbilities() {
    return fetch(`${config.API_ENDPOINT}/character/abilities`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
  getSpells() {
    return fetch(`${config.API_ENDPOINT}/character/spells`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
}
