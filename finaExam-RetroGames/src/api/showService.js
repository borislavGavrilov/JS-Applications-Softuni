import { get, post, put, del } from './requster.js'
import { baseShowsUrl } from '../constants.js'

async function getAll() {
    return await get(`${baseShowsUrl}?sortBy=_createdOn%20desc`);
}

async function getById(showId) {
    return await get(`${baseShowsUrl}/${showId}`);
}

async function getByTitle(showTitle) {
    return await get(`${baseShowsUrl}?where=title%20LIKE%20%22${showTitle}%22`);
}

async function create(showData) {
      const { 'image-url': imageUrl, 'release-date': releaseDate , 'game-name' : name , ...otherData } = showData;
    return await post(baseShowsUrl,{imageUrl,releaseDate,name, ...otherData});
}

async function update(showId, showData) {
    const { 'image-url': imageUrl, 'release-date': releaseDate ,'game-name' : name , ...otherData } = showData;
    return await put(`${baseShowsUrl}/${showId}`,{imageUrl,releaseDate,name, ...otherData });
}

async function deleteById(showId) {
    await del(`${baseShowsUrl}/${showId}`);
}

const showsService = { getAll, getById, getByTitle, create, update, deleteById };
export default showsService;