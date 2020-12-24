import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
const config = {
    basesUrl: 'https://api.hnpwa.com/v0/'
};

// API 함수들을 정리
 function fetchNewsList() {
    return axios.get(` ${config.basesUrl}news/1.json`);
 }
 function fetchJobsList() {
   return axios.get(` ${config.basesUrl}jobs/1.json`);
 }
 function fetchAskList() {
   return axios.get(` ${config.basesUrl}ask/1.json`);
 }
 function fetchList(pageName) {
  return axios.get(`${config.basesUrl}${pageName}/1.json`);
}
 function fetchUserInfo(username) {
   return axios.get(` ${config.basesUrl}user/${username}.json`);
 }
 function fetchCommentItem(id) {
  return axios.get(` ${config.basesUrl}item/${id}.json`);
}


 export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList,
 }
 
 
    