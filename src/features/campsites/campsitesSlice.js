import {CAMPSITES} from "../../app/shared/CAMPSITES";
export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.floor(CAMPSITES.length * Math.random()))];

};
